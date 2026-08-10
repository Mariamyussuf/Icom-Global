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

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

const socialLinks = [
  { name: 'Facebook', icon: FacebookIcon, href: '#' },
  { name: 'Twitter', icon: TwitterIcon, href: '#' },
  { name: 'LinkedIn', icon: LinkedinIcon, href: '#' },
  { name: 'Instagram', icon: InstagramIcon, href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-footer, #0A2D73)', position: 'relative', marginTop: '24px' }} role="contentinfo">
      {/* Top red accent line */}
      <div style={{ height: '3px', background: '#D9041B' }} />

      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-16" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Row 1: Brand Logo + Nav Links + Social Icons */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
          {/* Logo */}
          <Link href="/" aria-label="ICOM - Home" style={{ textDecoration: 'none' }}>
            <Image
              src="/images/Icom-logo.png"
              alt="ICOM Technical Support Limited"
              width={140}
              height={45}
              className="h-9 lg:h-10 w-auto"
              style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.4))' }}
            />
          </Link>

          {/* Quick Nav Links */}
          <nav aria-label="Footer navigation">
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social Icons */}
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
                    color: 'rgba(255,255,255,0.6)',
                    transition: 'all 0.25s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  <Icon size={14} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Row 2: Compact Essential Contact Info */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center sm:justify-between gap-6 py-8 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', textAlign: 'center' }}>
            <MapPin style={{ width: '14px', height: '14px', color: '#D9041B', flexShrink: 0 }} />
            <span>164, Prince Ademola St, Oniru Estate, Victoria Island, Lagos, Nigeria</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Phone style={{ width: '14px', height: '14px', color: '#D9041B', flexShrink: 0 }} />
              <a href="tel:+2348035669513" style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}>
                +234 803 566 9513
              </a>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Mail style={{ width: '14px', height: '14px', color: '#D9041B', flexShrink: 0 }} />
              <a href="mailto:info@icomtsl.com" style={{ color: 'inherit', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'inherit')}>
                info@icomtsl.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} ICOM Technical Service Support Limited. RC: 1043812. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
