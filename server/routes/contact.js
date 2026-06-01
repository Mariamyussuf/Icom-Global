const express = require('express');
const nodemailer = require('nodemailer');
const { contactValidation, handleValidation } = require('../middleware/validation');
const { contactLimiter } = require('../middleware/rateLimit');

const router = express.Router();

// Create secure transporter with TLS enforcement
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT, 10) || 587,
    secure: process.env.EMAIL_PORT === '465',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: true,
      minVersion: 'TLSv1.2',
    },
  });
};

// Verify mail server connection on startup
const transporter = createTransporter();
transporter.verify((error) => {
  if (error) console.error('Mail server connection failed:', error.message);
  else console.log('Mail server ready');
});

// Helper: escape HTML entities to prevent injection in email templates
const escapeHtml = (str) =>
  str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

// POST /api/contact
router.post(
  '/',
  contactLimiter,
  contactValidation,
  handleValidation,
  async (req, res) => {
    const { name, company, email, phone, subject, message } = req.body;

    try {
      // Escape all user inputs for safe HTML email rendering
      const safeName = escapeHtml(name);
      const safeCompany = company ? escapeHtml(company) : '';
      const safeEmail = escapeHtml(email);
      const safePhone = phone ? escapeHtml(phone) : '';
      const safeSubject = escapeHtml(subject);
      const safeMessage = escapeHtml(message);

      // Email to ICOM team
      const mailToTeam = {
        from: `"ICOM Website" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_RECEIVER_EMAIL,
        replyTo: email,
        subject: `[Website Inquiry] ${safeSubject}`,
        html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1F3A; padding: 24px; text-align: center;">
            <h1 style="color: #FFFFFF; font-size: 20px; margin: 0;">New Contact Form Submission</h1>
          </div>
          <div style="padding: 24px; background: #F4F6F9;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #0B1F3A; width: 120px;">Name:</td>
                <td style="padding: 8px 12px;">${safeName}</td>
              </tr>
              ${safeCompany ? `<tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #0B1F3A;">Company:</td>
                <td style="padding: 8px 12px;">${safeCompany}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #0B1F3A;">Email:</td>
                <td style="padding: 8px 12px;"><a href="mailto:${safeEmail}">${safeEmail}</a></td>
              </tr>
              ${safePhone ? `<tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #0B1F3A;">Phone:</td>
                <td style="padding: 8px 12px;">${safePhone}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #0B1F3A;">Subject:</td>
                <td style="padding: 8px 12px;">${safeSubject}</td>
              </tr>
            </table>
            <div style="margin-top: 16px; padding: 16px; background: #FFFFFF; border-radius: 8px;">
              <h3 style="margin: 0 0 8px; color: #0B1F3A;">Message:</h3>
              <p style="margin: 0; line-height: 1.6; white-space: pre-wrap;">${safeMessage}</p>
            </div>
          </div>
          <div style="background: #0B1F3A; padding: 16px; text-align: center;">
            <p style="color: #8899AA; font-size: 12px; margin: 0;">
              Sent from icomtsl.com contact form
            </p>
          </div>
        </div>
      `,
      };

      // Auto-reply to sender
      const mailToSender = {
        from: `"ICOM Technical Service Support" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: `Thank you for contacting ICOM - ${safeSubject}`,
        html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #0B1F3A; padding: 24px; text-align: center;">
            <h1 style="color: #FFFFFF; font-size: 20px; margin: 0;">Thank You, ${safeName}</h1>
          </div>
          <div style="padding: 24px; background: #F4F6F9;">
            <p style="line-height: 1.6; color: #333;">
              We have received your inquiry regarding <strong>&ldquo;${safeSubject}&rdquo;</strong> and a member of our team will respond within 24&ndash;48 business hours.
            </p>
            <p style="line-height: 1.6; color: #333;">
              If your matter is urgent, please contact us directly:
            </p>
            <ul style="line-height: 1.8; color: #333;">
              <li>Phone: +234 803 566 9513 / +234 802 341 1618</li>
              <li>Email: <a href="mailto:icomtssl@gmail.com">icomtssl@gmail.com</a></li>
            </ul>
            <p style="line-height: 1.6; color: #333;">
              We appreciate your interest in ICOM Technical Service Support Limited.
            </p>
            <p style="margin-top: 24px; color: #666; font-style: italic;">
              &mdash; The ICOM Team<br/>
              <em>&hellip;Putting Quality First</em>
            </p>
          </div>
          <div style="background: #0B1F3A; padding: 16px; text-align: center;">
            <p style="color: #8899AA; font-size: 12px; margin: 0;">
              &copy; ${new Date().getFullYear()} ICOM Technical Service Support Limited. RC: 1043812
            </p>
          </div>
        </div>
      `,
      };

      // Send both emails
      await Promise.all([
        transporter.sendMail(mailToTeam),
        transporter.sendMail(mailToSender),
      ]);

      res.json({
        success: true,
        message: 'Thank you for your message. We will get back to you within 24–48 hours.',
      });
    } catch (error) {
      console.error(`[${new Date().toISOString()}] Email send error:`, error.message);
      res.status(500).json({
        success: false,
        errors: ['Failed to send message. Please try again later or contact us directly.'],
      });
    }
  }
);

module.exports = router;
