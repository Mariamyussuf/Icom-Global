'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, ShieldCheck } from 'lucide-react';
import LegalModal from './footer/LegalModal';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const FacebookIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const InstagramIcon = ({ size = 15 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com', label: 'Follow ICOM on LinkedIn' },
  { name: 'X / Twitter', icon: TwitterIcon, href: 'https://x.com', label: 'Follow ICOM on X' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com', label: 'Follow ICOM on Facebook' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', label: 'Follow ICOM on Instagram' },
];

const companyLinks = [
  { key: 'about', title: 'About Us', href: '/about' },
  { key: 'projects', title: 'Our Projects', href: '/projects' },
  { key: 'services', title: 'Services', href: '/services' },
  { key: 'contact', title: 'Contact', href: '/contact' },
];

const serviceLinks = [
  { key: 'ofc', title: 'Optical Fiber Cable (OFC)', href: '/services/fiber-optic-transmission' },
  { key: 'rf', title: 'RF Drive Testing', href: '/services/rf-drive-testing' },
  { key: 'radioDesign', title: 'Radio Network Design', href: '/services/radio-network-design-planning' },
  { key: 'power', title: 'Power & Solar', href: '/services/power-solutions' },
  { key: 'bss', title: 'BSS Installation', href: '/services/bss-equipment-installation' },
  { key: 'om', title: 'Network O&M', href: '/services/network-operations-maintenance' },
];

export default function Footer() {
  const { t } = useLanguage();
  const [activeLegalModal, setActiveLegalModal] = useState(null);

  return (
    <>
      <footer
        style={{ backgroundColor: 'var(--bg-navbar, #0A2D73)', position: 'relative' }}
        className="w-full text-white"
        role="contentinfo"
        aria-label="Site Footer"
      >
        {/* Top accent line */}
        <div style={{ height: '3px', background: 'var(--accent-red, #D9041B)' }} />

        <div
          className="px-5 sm:px-8 md:px-12"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            paddingTop: '56px',
            paddingBottom: '36px',
          }}
        >
          {/* Main columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10">
            
            {/* Column 1: Brand & Profile (Full on mobile, 4 cols on desktop) */}
            <div className="md:col-span-2 lg:col-span-4 flex flex-col items-start gap-3.5 text-left">
              <Link href="/" aria-label="ICOM - Home" style={{ textDecoration: 'none' }}>
                <Image
                  src="/images/Icom-logo-white.png"
                  alt="ICOM Engineering Solutions Limited"
                  width={120}
                  height={120}
                  style={{ height: '64px', width: 'auto', objectFit: 'contain' }}
                />
              </Link>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <p style={{ fontSize: '11px', fontWeight: 700, color: '#D9041B', letterSpacing: '0.06em', textTransform: 'uppercase', fontFamily: 'monospace' }}>
                  RC: 9766449 &bull; Est. 2009
                </p>
                <p style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.65)', lineHeight: 1.6, maxWidth: '360px' }}>
                  {t('footer.companyDesc', 'Integrated engineering solutions delivering telecommunications, fiber optics, solar power, and infrastructure services across Africa.')}
                </p>
              </div>

              {/* Social links */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', paddingTop: '2px' }}>
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.08)',
                      color: 'rgba(255, 255, 255, 0.75)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.color = '#fff'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'; e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)'; }}
                  >
                    <item.icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Columns 2 & 3: Company & Solutions (side-by-side on mobile, separate on desktop) */}
            <div className="grid grid-cols-2 gap-6 md:col-span-2 lg:col-span-5">
              {/* Column 2: Company */}
              <div className="text-left">
                <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                  {t('footer.quickLinks', 'Quick Links')}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {companyLinks.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                      >
                        {t(`nav.${item.key}`, item.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 3: Solutions */}
              <div className="text-left">
                <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                  {t('footer.servicesHeading', 'Solutions')}
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '9px' }}>
                  {serviceLinks.map((item) => (
                    <li key={item.key}>
                      <Link
                        href={item.href}
                        style={{ fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#D9041B')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}
                      >
                        {t(`nav.servicesList.${item.key}`, item.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Column 4: Contact & Dispatch */}
            <div className="md:col-span-2 lg:col-span-3 text-left">
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px' }}>
                {t('footer.contactHeading', 'Contact')}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', fontSize: '13px', color: 'rgba(255, 255, 255, 0.7)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <MapPin size={15} color="#D9041B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ lineHeight: 1.5 }}>Town Hall Street, Ijora Badia, Lagos, Nigeria</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Phone size={15} color="#D9041B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <a href="tel:+2348035669513" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}>+234 803 566 9513</a>
                    <a href="tel:+2348023411618" style={{ color: 'inherit', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}>+234 802 341 1618</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Mail size={15} color="#D9041B" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <a href="mailto:icomengineeringsolutions@gmail.com" style={{ color: 'inherit', textDecoration: 'none', wordBreak: 'break-all' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')} onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255, 255, 255, 0.7)')}>icomengineeringsolutions@gmail.com</a>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingTop: '2px', color: 'rgba(255, 255, 255, 0.5)', fontSize: '12px' }}>
                  <Clock size={13} color="#D9041B" />
                  <span>24&ndash;48 hr nationwide field dispatch</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom copyright bar */}
          <div
            className="border-t border-white/[0.08] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[12px] text-white/50 text-center sm:text-left"
          >
            <p>&copy; {new Date().getFullYear()} ICOM Engineering Solutions Limited. {t('footer.rights', 'All rights reserved.')}</p>

            {/* Language Switcher in Footer */}
            <LanguageSwitcher variant="footer" />

            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-5">
              <button
                type="button"
                onClick={() => setActiveLegalModal('privacy')}
                className="text-white/50 hover:text-white transition-colors underline underline-offset-2 cursor-pointer bg-transparent border-0 p-0 text-[12px]"
              >
                {t('footer.privacyPolicy', 'Privacy Policy')}
              </button>
              <button
                type="button"
                onClick={() => setActiveLegalModal('terms')}
                className="text-white/50 hover:text-white transition-colors underline underline-offset-2 cursor-pointer bg-transparent border-0 p-0 text-[12px]"
              >
                {t('footer.termsOfService', 'Terms of Service')}
              </button>
              <span className="inline-flex items-center gap-1.5 text-white/40">
                <ShieldCheck size={13} color="#D9041B" />
                ISO 9001:2000
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Accessible Policy & Terms Modal */}
      <LegalModal
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </>
  );
}