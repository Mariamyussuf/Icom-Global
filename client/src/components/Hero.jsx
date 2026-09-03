'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Calendar, Radio, Users, MapPin, Cable } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

/* ─── Animation variants ─── */
const leftColumnVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const statCardVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.3 + i * 0.15,
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Hero() {
  const { t } = useLanguage();

  const statCards = [
    { icon: Cable, value: t('hero.stats.turnkeyVal', 'Turnkey'), label: t('hero.stats.turnkeyLabel', 'End-to-end OFC & FTTH deployment') },
    { icon: Calendar, value: t('hero.stats.experienceVal', '15+'), label: t('hero.stats.experienceLabel', 'Years of engineering excellence') },
    { icon: Radio, value: t('hero.stats.divisionsVal', '8'), label: t('hero.stats.divisionsLabel', 'Core specialized divisions') },
    { icon: Users, value: t('hero.stats.clientsVal', '10+'), label: t('hero.stats.clientsLabel', 'Tier-1 telecom operators served') },
  ];
  return (
    <section
      className="min-h-0 lg:min-h-[calc(100vh-var(--nav-height))]"
      style={{
        backgroundColor: 'var(--bg-primary, #FFFFFF)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(28px, 4vw, 48px)',
        paddingBottom: 'clamp(36px, 5vw, 56px)',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Hero"
    >
      {/* Subtle background decorative elements */}
      <div style={{
        position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none',
      }}>
        <div style={{
          position: 'absolute', top: '-200px', right: '-150px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(10,45,115,0.04) 0%, transparent 70%)',
        }} />
        <div style={{
          position: 'absolute', bottom: '-100px', left: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(217,4,27,0.03) 0%, transparent 70%)',
        }} />
        {/* Subtle grid dots */}
        <div style={{
          position: 'absolute', inset: 0, opacity: 0.25,
          backgroundImage: 'radial-gradient(circle, rgba(10,45,115,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      {/* Main two-column grid */}
      <div
        className="px-5 sm:px-6 md:px-8 lg:px-12"
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
          width: '100%',
        }}
      >
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            animate="visible"
            className="items-center text-center lg:items-start lg:text-left mx-auto lg:mx-0"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '520px' }}
          >
            {/* Pill badge */}
            <div
              className="self-center lg:self-start"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '999px',
                padding: '6px 16px',
                marginBottom: '24px',
                border: '1px solid rgba(217, 4, 27, 0.25)',
                background: 'rgba(217, 4, 27, 0.06)',
              }}
            >
              <span style={{ height: '6px', width: '6px', borderRadius: '50%', backgroundColor: '#D9041B' }} />
              <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', color: '#D9041B' }}>
                {t('hero.badge', 'Turnkey Optical Fiber & Telecom Engineering')}
              </span>
            </div>

            {/* Accent bar */}
            <div style={{ width: '40px', height: '3px', background: '#D9041B', borderRadius: '2px', marginBottom: '20px', margin: '0 auto 20px' }} />

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-sora, 'DM Sans', sans-serif)",
                fontSize: 'var(--text-hero)',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              <span style={{ color: 'var(--text-heading, #0A2D73)' }}>{t('hero.titleLine1', 'Turnkey Optical Fiber &')}</span>
              <br />
              <span style={{ color: '#D9041B' }}>{t('hero.titleLine2', 'Telecom Infrastructure')}</span>
              <br />
              <span style={{ color: 'var(--text-heading, #0A2D73)' }}>{t('hero.titleLine3', 'Solutions')}</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto lg:mx-0" style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'var(--text-muted, #6B7A8D)',
              maxWidth: '440px',
              marginBottom: '32px',
            }}>
              {t('hero.subheadline', 'ICOM Engineering Solutions delivers turnkey optical fiber cable (OFC) rollouts, FTTH/FTTB deployments, wireless network engineering, solar power, and mission-critical infrastructure across Nigeria and West Africa.')}
            </p>

            {/* CTA Buttons */}
            <div className="justify-center lg:justify-start" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#D9041B',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 14px rgba(217, 4, 27, 0.25)',
                  minHeight: '46px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = '#B50316'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = '#D9041B'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {t('hero.exploreServices', 'Explore Services')}
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </Link>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#0A2D73',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(10,45,115,0.25)',
                  background: 'transparent',
                  transition: 'all 0.3s',
                  minHeight: '46px',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(10,45,115,0.06)'; e.currentTarget.style.borderColor = '#0A2D73'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(10,45,115,0.25)'; }}
              >
                {t('hero.contactUs', 'Contact Us')}
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — Stat Cards ── */}

          {/* Mobile/Tablet: horizontal stat strip */}
          <div className="lg:hidden" style={{ background: '#0A2D73', borderRadius: '10px', overflow: 'hidden' }}>
            <div className="stat-strip">
              {statCards.map((card) => (
                <div key={card.label} className="stat-strip-item">
                  <p className="stat-strip-value" style={{ fontSize: card.value.length > 4 ? '15px' : '20px' }}>
                    {card.value}
                  </p>
                  <p className="stat-strip-label">{card.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop: original stacked stat cards */}
          <div className="hidden lg:flex lg:flex-col" style={{ gap: '12px' }}>
            {statCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.label}
                  custom={i}
                  variants={statCardVariants}
                  initial="hidden"
                  animate="visible"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 22px',
                    background: '#0A2D73',
                    border: '1px solid rgba(10,45,115,0.15)',
                    borderRadius: '10px',
                    boxShadow: '0 4px 16px rgba(10,45,115,0.12)',
                  }}
                >
                  {/* Icon box */}
                  <div style={{
                    flexShrink: 0,
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'rgba(217, 4, 27, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon style={{ width: '20px', height: '20px', color: '#D9041B' }} />
                  </div>

                  {/* Stat value + label */}
                  <div>
                    <p style={{
                      fontWeight: 700,
                      color: '#FFFFFF',
                      fontSize: card.value.length > 4 ? '18px' : '22px',
                      fontFamily: "var(--font-sora, 'DM Sans', sans-serif)",
                      letterSpacing: '-0.5px',
                      lineHeight: 1.2,
                    }}>
                      {card.value}
                    </p>
                    <p style={{
                      color: 'rgba(255, 255, 255, 0.55)',
                      fontSize: '12px',
                      lineHeight: 1.4,
                      marginTop: '2px',
                    }}>
                      {card.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <motion.div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          bottom: '16px',
          left: '50%',
          transform: 'translateX(-50%)',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          opacity: 0.25,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span style={{ fontSize: '10px', color: '#0A2D73', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Scroll
        </span>
        <ChevronDown style={{ width: '16px', height: '16px', color: '#0A2D73' }} />
      </motion.div>
    </section>
  );
}