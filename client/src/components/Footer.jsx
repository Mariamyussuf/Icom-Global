'use client';

import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail } from 'lucide-react';

const FacebookIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" /></svg>
);
const TwitterIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" /></svg>
);
const InstagramIcon = ({ size = 15 }) => (
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
  { name: 'Power Solutions', href: '/services/power-solutions' },
];

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-footer, #0A2D73)', position: 'relative', overflow: 'hidden', marginTop: '16px' }} role="contentinfo">
      {/* Decorative top red accent bar */}
      <div style={{ height: '3px', background: '#D9041B' }} />

      {/* Main compact grid */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-10 md:py-12" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative' }}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 items-start">
          
          {/* Col 1: Brand & Social */}
          <div>
            <Link href="/" aria-label="ICOM - Home" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '14px' }}>
              <Image
                src="/images/Icom-logo.png"
                alt="ICOM Technical Support Limited"
                width={150}
                height={50}
                className="h-10 lg:h-12 w-auto"
                style={{ objectFit: 'contain', display: 'block', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.4))' }}
              />
            </Link>
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '16px', maxWidth: '260px' }}>
              Integrated engineering solutions spanning telecom, power infrastructure, and IT services across West Africa.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
                      width: '34px', height: '34px', borderRadius: '50%',
                      background: 'rgba(255,255,255,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'rgba(255,255,255,0.5)',
                      transition: 'all 0.25s',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.color = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                  >
                    <Icon size={14} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Navigation
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Key Services */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Core Services
            </h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} style={{ fontSize: '13.5px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Compact Contact */}
          <div>
            <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin style={{ width: '15px', height: '15px', color: '#D9041B', flexShrink: 0, marginTop: '2px' }} />
                <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                  164, Prince Ademola St, Oniru Estate, Victoria Island, Lagos
                </span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone style={{ width: '15px', height: '15px', color: '#D9041B', flexShrink: 0 }} />
                <a href="tel:+2348035669513" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                  +234 803 566 9513
                </a>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail style={{ width: '15px', height: '15px', color: '#D9041B', flexShrink: 0 }} />
                <a href="mailto:info@icomtsl.com" style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}>
                  info@icomtsl.com
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Divider */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)' }} />
      </div>

      {/* Bottom bar */}
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-4" style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.35)' }}>
          © {new Date().getFullYear()} ICOM Technical Service Support Limited. RC: 1043812. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
