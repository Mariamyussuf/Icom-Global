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

const contactRows = [
  {
    icon: MapPin,
    label: '164, Prince Ademola St, Oniru Estate, Victoria Island, Lagos, Nigeria',
    href: null,
  },
  {
    icon: Phone,
    label: '+234 803 566 9513',
    href: 'tel:+2348035669513',
  },
  {
    icon: Mail,
    label: 'info@icomtsl.com',
    href: 'mailto:info@icomtsl.com',
  },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--bg-footer, #0A2D73)', position: 'relative', marginTop: '24px' }} role="contentinfo">
      {/* Top red accent line */}
      <div style={{ height: '3px', background: '#D9041B' }} />

      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-8 md:py-10" style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* ═══ MOBILE LAYOUT (below lg) ═══ */}
        <div className="lg:hidden">
          {/* Brand */}
          <div className="mb-6">
            <Link href="/" aria-label="ICOM - Home" style={{ textDecoration: 'none' }}>
              <Image
                src="/images/Icom-logo.png"
                alt="ICOM Technical Support Limited"
                width={150}
                height={48}
                className="h-10 w-auto"
                style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.4))' }}
              />
            </Link>
            <p className="text-[11px] font-medium tracking-wide mt-1.5 text-white/50 uppercase">
              Technical Service Support Limited
            </p>
          </div>

          {/* Contact rows — hairline-divided, tappable */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            {contactRows.map((row) => {
              const Icon = row.icon;
              const inner = (
                <>
                  <Icon size={15} className="text-[#D9041B] shrink-0" style={{ marginTop: '1px' }} />
                  <span className="text-[13px] text-white/60 leading-snug">{row.label}</span>
                </>
              );
              const cls = "flex items-start gap-3 py-3.5 transition-colors duration-200";
              return (
                <div key={row.label} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  {row.href ? (
                    <a href={row.href} className={`${cls} hover:text-white/80`} style={{ textDecoration: 'none' }}>
                      {inner}
                    </a>
                  ) : (
                    <div className={cls}>{inner}</div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Social icons — small, de-emphasized, left-aligned */}
          <div className="flex items-center gap-2 mt-5 mb-5">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white/35 bg-white/[0.04] hover:bg-[#D9041B] hover:text-white transition-all duration-200"
                >
                  <Icon size={12} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: '14px' }}>
            <p className="text-[11px] text-white/35 tracking-normal">
              © {new Date().getFullYear()} ICOM Technical Service Support Limited. RC: 1043812. All rights reserved.
            </p>
          </div>
        </div>

        {/* ═══ DESKTOP LAYOUT (lg and above) — preserved pixel-identical ═══ */}
        <div className="hidden lg:block">
          <div className="flex flex-row justify-between items-start gap-8 pb-8" style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

            {/* Left Column: Brand Logo, Descriptor, Socials */}
            <div className="flex flex-col items-start gap-4">
              <div className="flex flex-col items-start gap-1">
                <Link href="/" aria-label="ICOM - Home" style={{ textDecoration: 'none' }}>
                  <Image
                    src="/images/Icom-logo.png"
                    alt="ICOM Technical Support Limited"
                    width={150}
                    height={48}
                    className="h-11 w-auto"
                    style={{ objectFit: 'contain', filter: 'drop-shadow(0 0 1px rgba(255,255,255,0.4))' }}
                  />
                </Link>
                <p className="text-[11px] font-medium tracking-wide mt-1.5 text-left text-white/50 uppercase">
                  Technical Service Support Limited
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-2 mt-1">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-[34px] h-[34px] rounded-full flex items-center justify-center text-white/60 bg-white/6 hover:bg-[#D9041B] hover:text-white hover:scale-105 transition-all duration-200"
                    >
                      <Icon size={14} />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Navigation and Contact Details */}
            <div className="flex flex-col items-end gap-8 w-auto">
              {/* Quick Nav Links */}
              <nav aria-label="Footer navigation">
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }} className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 text-sm font-medium">
                  {navLinks.map((link, idx) => (
                    <li key={link.href} className="flex items-center">
                      {idx > 0 && <span className="mx-3 text-white/20 select-none">•</span>}
                      <Link
                        href={link.href}
                        className="text-white/70 hover:text-[#D9041B] transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Contact Details */}
              <div className="flex flex-col items-end gap-3 text-xs w-auto text-white/50">
                {/* Address */}
                <div className="flex items-center justify-end gap-2 text-right">
                  <MapPin size={14} className="text-[#D9041B] shrink-0" />
                  <span>164, Prince Ademola St, Oniru Estate, Victoria Island, Lagos, Nigeria</span>
                </div>

                {/* Phone & Email Container */}
                <div className="flex flex-row flex-wrap items-center justify-end gap-x-6 gap-y-2 mt-0.5">
                  <div className="flex items-center gap-2">
                    <Phone size={14} className="text-[#D9041B] shrink-0" />
                    <a href="tel:+2348035669513" className="hover:text-[#D9041B] transition-colors duration-200">
                      +234 803 566 9513
                    </a>
                  </div>

                  <div className="flex items-center gap-2">
                    <Mail size={14} className="text-[#D9041B] shrink-0" />
                    <a href="mailto:info@icomtsl.com" className="hover:text-[#D9041B] transition-colors duration-200">
                      info@icomtsl.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div style={{ textAlign: 'center', paddingTop: '16px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <p className="text-[11px] text-white/35 tracking-normal">
              © {new Date().getFullYear()} ICOM Technical Service Support Limited. RC: 1043812. All rights reserved.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
