'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';

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

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';
  const isNavbarDark = !isHome || scrolled;

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
          height: '100px',
          display: 'flex',
          alignItems: 'center',
          transition: 'background-color 0.3s, box-shadow 0.3s',
          backgroundColor: isNavbarDark ? '#0A2D73' : 'transparent',
          boxShadow: isNavbarDark ? '0 4px 20px rgba(0,0,0,0.15)' : 'none',
        }}
        role="navigation"
        aria-label="Main navigation"
      >
        <div 
          className="px-6 lg:px-12"
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
              src="/images/Icom-logo.png"
              alt="ICOM Technical Support Limited"
              width={160}
              height={104}
              className="h-16 lg:h-20 w-auto"
              style={{ objectFit: 'contain', display: 'block', filter: isNavbarDark ? 'drop-shadow(0 0 1px rgba(255,255,255,0.4))' : 'none' }}
              priority
            />
          </Link>

          {/* ── Desktop Nav Links ── */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
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
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontSize: '14px',
                    fontWeight: 500,
                    color: isActive(link.href) ? '#D9041B' : (isNavbarDark ? 'rgba(255,255,255,0.75)' : '#0A2D73'),
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = isNavbarDark ? '#FFFFFF' : '#D9041B'; }}
                  onMouseLeave={(e) => { if (!isActive(link.href)) e.currentTarget.style.color = isNavbarDark ? 'rgba(255,255,255,0.75)' : '#0A2D73'; }}
                >
                  {link.name}
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
                          background: '#FFFFFF',
                          borderRadius: '12px',
                          boxShadow: '0 16px 48px rgba(0,0,0,0.12)',
                          border: '1px solid #E2E8F0',
                          padding: '8px 0',
                          overflow: 'hidden',
                        }}
                      >
                        {serviceLinks.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            style={{
                              display: 'block',
                              padding: '10px 16px',
                              fontSize: '14px',
                              color: isActive(service.href) ? '#D9041B' : '#4A5568',
                              textDecoration: 'none',
                              background: isActive(service.href) ? 'rgba(217,4,27,0.05)' : 'transparent',
                              transition: 'all 0.15s',
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.background = '#F5F7FA'; e.currentTarget.style.color = '#D9041B'; }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = isActive(service.href) ? 'rgba(217,4,27,0.05)' : 'transparent';
                              e.currentTarget.style.color = isActive(service.href) ? '#D9041B' : '#4A5568';
                            }}
                          >
                            {service.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* ── Mobile Toggle ── */}
          <div className="flex items-center gap-4">

            {/* Mobile Hamburger Trigger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 transition-colors focus:outline-none cursor-pointer"
              style={{ color: isNavbarDark ? 'rgba(255,255,255,0.75)' : '#0A2D73' }}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu — keeping it simple since this is desktop-first */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0, transition: { duration: 0.3 } }}
            exit={{ opacity: 0, x: '100%', transition: { duration: 0.25 } }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 40,
              background: '#0A2D73',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', width: '100%', maxWidth: '320px', padding: '0 24px' }}>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '12px',
                    fontSize: '24px',
                    fontWeight: 600,
                    color: isActive(link.href) ? '#D9041B' : '#FFFFFF',
                    textDecoration: 'none',
                    fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
                  }}
                >
                  {link.name}
                </Link>
              ))}

            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
