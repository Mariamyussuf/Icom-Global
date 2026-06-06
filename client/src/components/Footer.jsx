'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Globe, ArrowRight } from 'lucide-react';

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
);
const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
);
const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
);

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { name: 'RF Drive Testing & Optimization', href: '/services/rf-drive-testing' },
  { name: 'Radio Network Design', href: '/services/radio-network-design-planning' },
  { name: 'BSS Equipment Installation', href: '/services/bss-equipment-installation' },
  { name: 'Fiber Optic Transmission', href: '/services/fiber-optic-transmission' },
  { name: 'Network Operations (O&M)', href: '/services/network-operations-maintenance' },
  { name: 'Power Solutions', href: '/services/power-solutions' },
  { name: 'Repeater Systems Solutions', href: '/services/repeater-systems-solutions' },
  { name: 'Technical Consulting & PM', href: '/services/technical-consulting-project-management' },
];

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
];

const linkStyle = {
  fontSize: '14px',
  color: 'rgba(255,255,255,0.45)',
  textDecoration: 'none',
  transition: 'color 0.2s, padding-left 0.2s',
  display: 'block',
  lineHeight: 1.4,
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0A2D73', position: 'relative', overflow: 'hidden', marginTop: '24px' }} role="contentinfo">
      {/* Decorative top red bar */}
      <div style={{ height: '3px', background: '#D9041B' }} />

      {/* Subtle background decorations */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', border: '1px solid rgba(217,4,27,0.06)' }} />
        <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '200px', height: '200px', borderRadius: '50%', border: '1px solid rgba(13,58,138,0.05)' }} />
      </div>

      {/* ── Newsletter / CTA strip ── */}
      <div className="px-6 md:px-12" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', paddingTop: '56px', paddingBottom: '24px' }}>
        <div 
          className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between"
          style={{
            background: 'rgba(217,4,27,0.08)',
            borderRadius: '14px',
            padding: '32px 36px',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          <div>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '6px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Ready to start your next project?
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
              Get in touch with our engineering team for a free consultation.
            </p>
          </div>
          <Link href="/contact" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            padding: '12px 28px', background: '#D9041B', color: '#fff',
            fontWeight: 600, fontSize: '14px', borderRadius: '8px',
            textDecoration: 'none', transition: 'all 0.3s', flexShrink: 0,
            boxShadow: '0 4px 12px rgba(217,4,27,0.3)',
          }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#B50316'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Contact Us <ArrowRight style={{ width: '16px', height: '16px' }} />
          </Link>
        </div>
      </div>

      {/* ── Main 4-column grid ── */}
      <div className="px-6 md:px-12" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', paddingTop: '32px', paddingBottom: '48px' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">

          {/* Col 1: Brand */}
          <div style={{ paddingTop: '8px' }}>
            <Link href="/" aria-label="ICOM - Home" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '20px' }}>
              <Image
                src="/images/Icom-logo.png"
                alt="ICOM Technical Support Limited"
                width={180}
                height={120}
                className="h-16 lg:h-20 w-auto"
                style={{ objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.4))' }}
              />
            </Link>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', lineHeight: 1.75, maxWidth: '280px' }}>
              ICOM Technical Service Support Limited is a leading integrated engineering solutions provider, delivering excellence across telecommunications, power infrastructure, and IT services in Nigeria and Africa.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#D9041B'; e.currentTarget.style.paddingLeft = '6px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.paddingLeft = '0'; }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Our Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={linkStyle}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#D9041B'; e.currentTarget.style.paddingLeft = '6px'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.paddingLeft = '0'; }}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact */}
          <div>
            <h3 style={{ fontSize: '14px', fontWeight: 700, color: '#FFFFFF', marginBottom: '24px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Contact Info
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {/* Address */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <MapPin style={{ width: '15px', height: '15px', color: '#D9041B' }} />
                </div>
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>
                  164, Prince Ademola Street, Oniru Estate, Victoria Island, Lagos, Nigeria
                </span>
              </div>

              {/* Phone */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Phone style={{ width: '15px', height: '15px', color: '#D9041B' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="tel:+2348035669513" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                    +234 803 566 9513
                  </a>
                  <a href="tel:+2348125880579" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                    +234 812 588 0579
                  </a>
                </div>
              </div>

              {/* Email */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Mail style={{ width: '15px', height: '15px', color: '#D9041B' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <a href="mailto:info@icomtsl.com" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                    info@icomtsl.com
                  </a>
                  <a href="mailto:service@icomtsl.com" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                    service@icomtsl.com
                  </a>
                </div>
              </div>

              {/* Website */}
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <Globe style={{ width: '15px', height: '15px', color: '#D9041B' }} />
                </div>
                <a href="https://www.icomtsl.com" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s', alignSelf: 'center' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>
                  www.icomtsl.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="px-6 md:px-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* ── Bottom bar ── */}
      <div className="px-6 md:px-12 py-6" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} ICOM Technical Service Support Limited. RC: 1043812
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.06)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.4)',
                    transition: 'all 0.3s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <Icon size={15} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
