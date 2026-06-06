'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin, Phone, Mail, Globe, Send, CheckCircle,
  AlertCircle, Clock, Loader2, User,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

const contactInfo = [
  { icon: User, title: 'Contact Person', lines: ['Engr. Adebayo L. Olajide'] },
  { icon: MapPin, title: 'Visit Us', lines: ['164, Prince Ademola Street, Oniru Estate, Victoria Island, Lagos, Nigeria'] },
  { icon: Phone, title: 'Call Us', lines: ['+234 803 566 9513', '+234 812 588 0579'] },
  { icon: Mail, title: 'Email Us', lines: ['info@icomtsl.com', 'service@icomtsl.com'] },
  { icon: Globe, title: 'Website', lines: ['www.icomtsl.com'] },
];

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  borderRadius: '8px',
  border: '1px solid #D1D7E0',
  outline: 'none',
  fontSize: '14px',
  color: '#0A2D73',
  transition: 'border-color 0.3s',
  fontFamily: 'inherit',
};

export default function ContactPage() {
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
        marginTop: '-100px',
        paddingTop: '180px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '33%', right: '25%', width: '288px', height: '288px', border: '1px solid white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '25%', left: '33%', width: '192px', height: '192px', border: '1px solid white', borderRadius: '50%' }} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', position: 'relative', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', background: 'rgba(217,4,27,0.15)', color: '#D9041B', fontSize: '14px', fontWeight: 600, padding: '8px 20px', borderRadius: '999px', marginBottom: '24px' }}>
              Contact Us
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)", lineHeight: 1.15 }}>
              Get in Touch
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Have a project in mind? We&apos;d love to hear from you. Reach out to discuss your engineering needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="px-6 md:px-12" style={{ maxWidth: '1200px', margin: '0 auto', paddingTop: '64px', paddingBottom: '80px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal>
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0A2D73', marginBottom: '32px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                  Send Us a Message
                </h2>

                {success && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
                    style={{ display: 'flex', alignItems: 'center', gap: '12px', background: '#ECFDF5', border: '1px solid #A7F3D0', color: '#065F46', borderRadius: '10px', padding: '16px', marginBottom: '24px' }}>
                    <CheckCircle style={{ width: '20px', height: '20px', flexShrink: 0 }} />
                    <p style={{ fontWeight: 500, fontSize: '14px' }}>Message sent successfully! We&apos;ll get back to you shortly.</p>
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
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0A2D73', marginBottom: '8px' }}>
                        Full Name <span style={{ color: '#D9041B' }}>*</span>
                      </label>
                      <input type="text" name="name" required value={formData.name} onChange={handleChange} placeholder="John Doe" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = '#D1D7E0')} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0A2D73', marginBottom: '8px' }}>Company</label>
                      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Your Company" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = '#D1D7E0')} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0A2D73', marginBottom: '8px' }}>
                        Email <span style={{ color: '#D9041B' }}>*</span>
                      </label>
                      <input type="email" name="email" required value={formData.email} onChange={handleChange} placeholder="john@example.com" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = '#D1D7E0')} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0A2D73', marginBottom: '8px' }}>Phone</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+234 800 000 0000" style={inputStyle}
                        onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = '#D1D7E0')} />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0A2D73', marginBottom: '8px' }}>
                      Subject <span style={{ color: '#D9041B' }}>*</span>
                    </label>
                    <input type="text" name="subject" required value={formData.subject} onChange={handleChange} placeholder="How can we help?" style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = '#D1D7E0')} />
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: 600, color: '#0A2D73', marginBottom: '8px' }}>
                      Message <span style={{ color: '#D9041B' }}>*</span>
                    </label>
                    <textarea name="message" required rows={6} value={formData.message} onChange={handleChange} placeholder="Tell us about your project..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={(e) => (e.target.style.borderColor = '#D9041B')} onBlur={(e) => (e.target.style.borderColor = '#D1D7E0')} />
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
                    }}>
                    {loading ? (<><Loader2 style={{ width: '20px', height: '20px', animation: 'spin 1s linear infinite' }} /> Sending...</>)
                      : (<><Send style={{ width: '20px', height: '20px' }} /> Send Message</>)}
                  </motion.button>
                </form>
              </ScrollReveal>
            </div>

            {/* Contact Info Cards */}
            <div className="lg:col-span-2">
              <ScrollReveal direction="right">
                <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0A2D73', marginBottom: '32px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                  Contact Information
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {contactInfo.map((info, i) => {
                    const InfoIcon = info.icon;
                    return (
                      <div key={i} style={{
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                        border: '1px solid #E2E8F0',
                        padding: '24px',
                        transition: 'box-shadow 0.3s',
                      }}
                        onMouseEnter={(e) => (e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.08)')}
                        onMouseLeave={(e) => (e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)')}
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
                            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0A2D73', marginBottom: '4px' }}>{info.title}</h3>
                            {info.lines.map((line, j) => (
                              <p key={j} style={{ fontSize: '14px', color: '#6B7A8D', lineHeight: 1.5 }}>{line}</p>
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
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7272648753387!2d3.4206!3d6.4281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf53280e7648d%3A0x4d01e5de6b847fe8!2sVictoria%20Island%2C%20Lagos!5e0!3m2!1sen!2sng!4v1700000000000!5m2!1sen!2sng"
          width="100%"
          height="450"
          style={{ border: 0, display: 'block' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="ICOM Office Location - Victoria Island, Lagos"
        />
      </section>
    </>
  );
}
