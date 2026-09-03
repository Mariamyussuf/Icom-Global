'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const serviceLinks = [
  { key: 'ofc', name: 'Optical Fiber Cable (OFC) Networks', href: '/services/fiber-optic-transmission' },
  { key: 'rf', name: 'RF Drive Testing & Optimization', href: '/services/rf-drive-testing' },
  { key: 'radioDesign', name: 'Radio Network Design', href: '/services/radio-network-design-planning' },
  { key: 'bss', name: 'BSS Equipment Installation', href: '/services/bss-equipment-installation' },
  { key: 'om', name: 'Network Operations (O&M)', href: '/services/network-operations-maintenance' },
  { key: 'power', name: 'Power Solutions', href: '/services/power-solutions' },
  { key: 'repeater', name: 'Repeater Systems Solutions', href: '/services/repeater-systems-solutions' },
  { key: 'consulting', name: 'Technical Consulting & PM', href: '/services/technical-consulting-project-management' },
];

const navLinks = [
  { key: 'home', name: 'Home', href: '/' },
  { key: 'about', name: 'About', href: '/about' },
  { key: 'services', name: 'Services', href: '/services', hasDropdown: true },
  { key: 'projects', name: 'Projects', href: '/projects' },
  { key: 'contact', name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          height: 'var(--nav-height)',
          display: 'flex',
          alignItems: 'center',
          transition: 'background-color 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
          backgroundColor: mobileOpen
            ? 'var(--bg-navbar, #0A2D73)'
            : 'rgba(255, 255, 255, 0.98)',
          backdropFilter: !mobileOpen ? 'blur(10px)' : 'none',
          WebkitBackdropFilter: !mobileOpen ? 'blur(10px)' : 'none',
          boxShadow: !mobileOpen
            ? (scrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : '0 2px 10px rgba(0, 0, 0, 0.04)')
            : 'none',
          borderBottom: !mobileOpen ? '1px solid var(--border-color, #E2E8F0)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div 
          className="px-5 sm:px-6 md:px-8 lg:px-12"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* ── Logo ── */}
          <Link href="/" aria-label="ICOM - Home" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <Image
              src={mobileOpen ? "/images/Icom-logo-white.png" : "/images/Icom-logo.png"}
              alt="ICOM Engineering Solutions Limited"
              width={260}
              height={90}
              className="h-[64px] sm:h-[70px] md:h-[74px] lg:h-[80px] w-auto max-h-[calc(var(--nav-height)-14px)]"
              style={{ objectFit: 'contain', display: 'block' }}
              priority
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const linkLabel = t(`nav.${link.key}`, link.name);
              return (
                <div
                  key={link.key}
                  style={{ position: 'relative' }}
                  onMouseEnter={() => link.hasDropdown && setServicesOpen(true)}
                  onMouseLeave={() => link.hasDropdown && setServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '4px',
                      padding: '8px 14px',
                      borderRadius: '8px',
                      fontSize: '14px',
                      fontWeight: 500,
                      color: isActive(link.href) ? '#D9041B' : '#0A2D73',
                      textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive(link.href)) {
                        e.currentTarget.style.color = '#D9041B';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive(link.href)) {
                        e.currentTarget.style.color = '#0A2D73';
                      }
                    }}
                  >
                    {linkLabel}
                    {link.hasDropdown && (
                      <ChevronDown size={14} style={{
                        transition: 'transform 0.2s',
                        transform: servicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                      }} />
                    )}
                  </Link>

                  {/* Services Dropdown */}
                  {link.hasDropdown && (
                    <AnimatePresence>
                      {servicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } }}
                          exit={{ opacity: 0, y: 10, scale: 0.95, transition: { duration: 0.15 } }}
                          style={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            marginTop: '4px',
                            width: '320px',
                            background: 'var(--bg-card, #FFFFFF)',
                            borderRadius: '12px',
                            boxShadow: '0 16px 48px rgba(0,0,0,0.18)',
                            border: '1px solid var(--border-color, #E2E8F0)',
                            padding: '8px 0',
                            overflow: 'hidden',
                          }}
                        >
                          {serviceLinks.map((service) => {
                            const serviceLabel = t(`nav.servicesList.${service.key}`, service.name);
                            return (
                              <Link
                                key={service.href}
                                href={service.href}
                                style={{
                                  display: 'block',
                                  padding: '10px 16px',
                                  fontSize: '14px',
                                  color: isActive(service.href) ? '#D9041B' : 'var(--text-body, #4A5568)',
                                  textDecoration: 'none',
                                  background: isActive(service.href) ? 'rgba(217,4,27,0.08)' : 'transparent',
                                  transition: 'all 0.15s',
                                }}
                                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-secondary, #F5F7FA)'; e.currentTarget.style.color = '#D9041B'; }}
                                onMouseLeave={(e) => {
                                  e.currentTarget.style.background = isActive(service.href) ? 'rgba(217,4,27,0.08)' : 'transparent';
                                  e.currentTarget.style.color = isActive(service.href) ? '#D9041B' : 'var(--text-body, #4A5568)';
                                }}
                              >
                                {serviceLabel}
                              </Link>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}

            {/* Desktop Language Switcher */}
            <div style={{ marginLeft: '8px', paddingLeft: '8px', borderLeft: '1px solid #E2E8F0' }}>
              <LanguageSwitcher variant="dropdown" />
            </div>
          </div>

          {/* ── Mobile Controls (Language Switcher + Hamburger) ── */}
          <div className="flex items-center gap-2 lg:hidden">
            <LanguageSwitcher variant="dropdown" />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 transition-colors focus:outline-none cursor-pointer"
              style={{
                color: mobileOpen ? '#FFFFFF' : '#0A2D73',
                minWidth: '44px',
                minHeight: '44px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '8px',
              }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            style={{
              position: 'fixed',
              top: 'var(--nav-height)',
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 45,
              background: '#0A2D73',
              borderTop: '1px solid rgba(255,255,255,0.1)',
              overflowY: 'auto',
              WebkitOverflowScrolling: 'touch',
              padding: '24px 20px 40px',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '100%', maxWidth: '440px', margin: '0 auto' }}>
              {navLinks.map((link) => {
                const linkLabel = t(`nav.${link.key}`, link.name);
                if (link.hasDropdown) {
                  return (
                    <div key={link.key} style={{ width: '100%' }}>
                      <div
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '12px 16px',
                          fontSize: '20px',
                          fontWeight: 600,
                          color: isActive(link.href) ? '#D9041B' : '#FFFFFF',
                          fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
                          cursor: 'pointer',
                          borderRadius: '8px',
                        }}
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      >
                        <Link
                          href={link.href}
                          onClick={(e) => e.stopPropagation()}
                          style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                          {linkLabel}
                        </Link>
                        <button
                          type="button"
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#FFFFFF',
                            padding: '4px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                          }}
                          aria-label="Toggle services submenu"
                        >
                          <ChevronDown
                            size={20}
                            style={{
                              transition: 'transform 0.25s',
                              transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)',
                            }}
                          />
                        </button>
                      </div>

                      {/* Mobile Services Accordion */}
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            style={{
                              overflow: 'hidden',
                              paddingLeft: '16px',
                              borderLeft: '2px solid rgba(217,4,27,0.4)',
                              margin: '4px 0 12px 16px',
                              display: 'flex',
                              flexDirection: 'column',
                              gap: '2px',
                            }}
                          >
                            {serviceLinks.map((s) => {
                              const serviceLabel = t(`nav.servicesList.${s.key}`, s.name);
                              return (
                                <Link
                                  key={s.href}
                                  href={s.href}
                                  style={{
                                    display: 'block',
                                    padding: '10px 12px',
                                    fontSize: '14px',
                                    color: isActive(s.href) ? '#D9041B' : 'rgba(255,255,255,0.75)',
                                    textDecoration: 'none',
                                    borderRadius: '6px',
                                    transition: 'color 0.2s',
                                  }}
                                >
                                  {serviceLabel}
                                </Link>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.key}
                    href={link.href}
                    style={{
                      display: 'block',
                      padding: '12px 16px',
                      fontSize: '20px',
                      fontWeight: 600,
                      color: isActive(link.href) ? '#D9041B' : '#FFFFFF',
                      textDecoration: 'none',
                      fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
                      borderRadius: '8px',
                    }}
                  >
                    {linkLabel}
                  </Link>
                );
              })}

              {/* Mobile Language Switcher Section */}
              <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.15)' }}>
                <LanguageSwitcher variant="mobile" />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
