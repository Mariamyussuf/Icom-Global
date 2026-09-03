'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Globe, Send, CheckCircle,
  AlertCircle, Clock, Loader2, User,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid var(--input-border, #D1D7E0)',
  background: 'var(--input-bg, #FFFFFF)',
  outline: 'none',
  fontSize: '14px',
  color: 'var(--text-heading, #0A2D73)',
  transition: 'border-color 0.3s, background-color 0.3s',
  fontFamily: 'inherit',
};

export default function ContactPage() {
  const { t } = useLanguage();

  const contactInfo = [
    { icon: User, title: t('contact.personTitle', 'Contact Person'), lines: ['Adebayo Lateef Olajide'] },
    { icon: MapPin, title: t('contact.visitTitle', 'Visit Us'), lines: ['Town Hall Street, Ijora Badia, Lagos, Nigeria'] },
    { icon: Phone, title: t('contact.phoneTitle', 'Call Us'), lines: ['+234 803 566 9513', '+234 802 341 1618'] },
    { icon: Mail, title: t('contact.emailTitle', 'Email Us'), lines: ['icomengineeringsolutions@gmail.com'] },
    { icon: Globe, title: t('contact.websiteTitle', 'Website'), lines: ['www.icomengsolutions.com'] },
  ];
  const [formData, setFormData] = useState({
    name: '', company: '', email: '', phone: '', subject: '', message: '', website: '',
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const service = params.get('service');
      if (service) {
        setFormData((prev) => ({
          ...prev,
          subject: `Request for ${service}`,
        }));
      }
    }
  }, []);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.website) return;
    setLoading(true);
    setError('');
    setSuccess(false);
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name, company: formData.company, email: formData.email,
          phone: formData.phone, subject: formData.subject, message: formData.message,
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || 'Failed to send message.');
      }
      setSuccess(true);
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '', website: '' });
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Banner */}
      <section style={{
        backgroundColor: '#0A2D73',
        paddingTop: 'clamp(48px, 6vw, 64px)',
        paddingBottom: 'clamp(48px, 6vw, 64px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '33%', right: '25%', width: '288px', height: '288px', border: '1px solid white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '25%', left: '33%', width: '192px', height: '192px', border: '1px solid white', borderRadius: '50%' }} />
        </div>

        <div className="px-5 sm:px-6 md:px-8 lg:px-12" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', background: 'rgba(217,4,27,0.15)', color: '#D9041B', fontSize: '14px', fontWeight: 600, padding: '8px 20px', borderRadius: '999px', marginBottom: '24px' }}>
              {t('nav.contact', 'Contact Us')}
            </span>
            <h1 style={{ fontSize: 'var(--text-page-title)', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)", lineHeight: 1.15 }}>
              {t('contact.heroTitle', 'Get in Touch')}
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('contact.heroSubtitle', 'Have a project in mind? We\'d love to hear from you. Reach out to discuss your engineering needs.')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section style={{ backgroundColor: 'var(--bg-primary, #FFFFFF)', paddingTop: '64px', paddingBottom: '64px' }} className="lg:!py-28">
        <div className="px-5 sm:px-6 md:px-8 lg:px-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Centered Section Header */}
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '14px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              {t('contact.formTitle', 'Send an Inquiry')}
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '580px', margin: '0 auto', lineHeight: 1.7 }}>
              {t('contact.formSubtitle', 'Fill out the form below and our technical director will respond within 24 business hours.')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3 max-w-xl mx-auto lg:max-w-none w-full">
              <ScrollReveal>
                <div className="text-center lg:text-left mb-8">
                  <div className="mx-auto lg:mx-0 mb-3" style={{ width: '36px', height: '3px', background: '#D9041B', borderRadius: '2px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                    {t('contact.formTitle', 'Send Us a Message')}
                  </h3>
                </div>

                {success && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
                    <CheckCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                    <p style={{ fontWeight: 500, fontSize: '14px' }}>{t('contact.successMsg', 'Message sent successfully! We\'ll get back to you shortly.')}</p>
                  </motion.div>
                )}

                {error && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#FEF2F2', border: '1px solid #FECACA', color: '#B50316', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
                    <AlertCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                    <p style={{ fontWeight: 500, fontSize: '14px' }}>{error}</p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit}>
                  {/* Honeypot */}
                  <div style={{ position: 'absolute', left: '-9999px' }} aria-hidden="true">
                    <input type="text" name="website" value={formData.website} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-heading, #0A2D73)', marginBottom: '8px' }}>
                        {t('contact.nameLabel', 'Full Name *')}
                      </label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder={t('contact.namePlaceholder', 'John Doe')} style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = 'var(--input-border, #D1D7E0)')} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-heading, #0A2D73)', marginBottom: '8px' }}>
                        {t('contact.companyLabel', 'Company')}
                      </label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder={t('contact.companyPlaceholder', 'Your Company')} style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = 'var(--input-border, #D1D7E0)')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-heading, #0A2D73)', marginBottom: '8px' }}>
                        {t('contact.emailLabel', 'Email *')}
                      </label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder={t('contact.emailPlaceholder', 'john@example.com')} style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = 'var(--input-border, #D1D7E0)')} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-heading, #0A2D73)', marginBottom: '8px' }}>
                        {t('contact.phoneLabel', 'Phone')}
                      </label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder={t('contact.phonePlaceholder', '+234 800 000 0000')} style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = 'var(--input-border, #D1D7E0)')} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-heading, #0A2D73)', marginBottom: '8px' }}>
                      {t('contact.subjectLabel', 'Subject *')}
                    </label>
                    <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder={t('contact.subjectPlaceholder', 'How can we help?')} style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = 'var(--input-border, #D1D7E0)')} />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: 'var(--text-heading, #0A2D73)', marginBottom: '8px' }}>
                      {t('contact.messageLabel', 'Message *')}
                    </label>
                    <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder={t('contact.messagePlaceholder', 'Tell us about your project...')}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = 'var(--input-border, #D1D7E0)')} />
                  </div>

                  <motion.button type="submit" disabled={loading} whileHover={{ scale: loading ? 1 : 1.02 }} whileTap={{ scale: loading ? 1 : 0.98 }}
                    style={{
                      width: '100%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: loading ? 'rgba(217,4,27,0.6)' : '#D9041B',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '16px',
                      padding: '16px',
                      borderRadius: '10px',
                      border: 'none',
                      cursor: loading ? 'not-allowed' : 'pointer',
                      transition: 'background 0.3s',
                      boxShadow: '0 4px 16px rgba(217,4,27,0.3)',
                      minHeight: '48px',
                    }}>
                    {loading ? (<><Loader2 style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} /> {t('contact.sendingBtn', 'Sending...')}</>)
                      : (<><Send style={{ width: '20px', height: '20px' }} /> {t('contact.submitBtn', 'Send Message')}</>)}
                  </motion.button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info Cards */}
            <div className="lg:col-span-2 max-w-xl mx-auto lg:max-w-none w-full">
              <ScrollReveal direction="right">
                <div className="text-center lg:text-left mb-8">
                  <div className="mx-auto lg:mx-0 mb-3" style={{ width: '36px', height: '3px', background: '#D9041B', borderRadius: '2px' }} />
                  <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                    {t('contact.infoTitle', 'Contact Information')}
                  </h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {contactInfo.map((info, i) => {
                    const InfoIcon = info.icon;
                    return (
                      <div key={i} style={{
                        background: 'var(--bg-card, #FFFFFF)',
                        borderRadius: '12px',
                        boxShadow: 'var(--card-shadow, 0 2px 8px rgba(0,0,0,0.05))',
                        border: '1px solid var(--border-color, #E2E8F0)',
                        padding: '24px',
                        transition: 'box-shadow 0.3s, background-color 0.3s',
                      }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.12)')}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = 'var(--card-shadow, 0 2px 8px rgba(0,0,0,0.05))')}
                      >
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                          <div style={{
                            width: '44px', height: '44px', borderRadius: '50%',
                            background: 'rgba(217,4,27,0.1)',
                            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                          }}>
                            <InfoIcon style={{ width: '20px', height: '20px', color: '#D9041B' }} />
                          </div>
                          <div>
                            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '8px' }}>{info.title}</h3>
                            {info.lines.map((line, j) => (
                              <p key={j} style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.5 }}>{line}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map */}
      <section style={{ backgroundColor: '#F5F7FA' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.4447604586393!2d3.3550!3d6.4650!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8bfd32155555%3A0x1!2sIjora+Badia%2C+Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          className="w-full h-[320px] sm:h-[400px] md:h-[450px]"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ICOM Office Location - Ijora Badia, Lagos"
        />
      </section>
    </>
  );
}