'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, Calendar, Radio, Users, MapPin } from 'lucide-react';

/* ─── Stat card data ─── */
const statCards = [
  { icon: Calendar, value: '15+', label: 'Years of engineering experience' },
  { icon: Radio, value: '8', label: 'Core service divisions' },
  { icon: Users, value: '10+', label: 'Major telecom clients served' },
  { icon: MapPin, value: 'Pan-African', label: 'Nigeria & West Africa coverage' },
];

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
  return (
    <section
      style={{
        backgroundColor: '#0F1B2D',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginTop: '-80px',
        paddingTop: '120px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden',
      }}
      aria-label="Hero"
    >
      {/* Background decorative layers */}
      <div className="hero-grid-pattern" style={{ position: 'absolute', inset: 0, opacity: 0.1 }} />
      <div className="circuit-overlay" style={{ position: 'absolute', inset: 0, opacity: 0.05 }} />
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, transparent, rgba(15,27,45,0.3), #080F1A)',
      }} />

      {/* Main two-column grid */}
      <div style={{
        position: 'relative',
        zIndex: 10,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px',
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center',
        }}>

          {/* ── LEFT COLUMN ── */}
          <motion.div
            variants={leftColumnVariants}
            initial="hidden"
            animate="visible"
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '520px' }}
          >
            {/* Orange pill badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '999px',
                padding: '6px 16px',
                marginBottom: '28px',
                alignSelf: 'flex-start',
                border: '1px solid rgba(185, 28, 44, 0.3)',
                background: 'rgba(185, 28, 44, 0.08)',
              }}
            >
              <span style={{ height: '6px', width: '6px', borderRadius: '50%', backgroundColor: '#B91C2C' }} />
              <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', color: '#B91C2C' }}>
                Engineering excellence since 2009
              </span>
            </div>

            {/* Accent bar */}
            <div style={{ width: '40px', height: '3px', background: '#B91C2C', borderRadius: '2px', marginBottom: '24px' }} />

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-sora, 'DM Sans', sans-serif)",
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-1px',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#FFFFFF' }}>Engineering Reliable</span>
              <br />
              <span style={{ color: '#B91C2C' }}>Power, Telecom</span>
              <br />
              <span style={{ color: '#FFFFFF' }}>&amp; IT Solutions</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(255, 255, 255, 0.55)',
              maxWidth: '440px',
              marginBottom: '32px',
            }}>
              ICOM Technical Service Support Limited delivers integrated engineering solutions — from telecommunications and fiber optics to solar energy, power infrastructure, and IT services across Nigeria and West Africa.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: '#B91C2C',
                  textDecoration: 'none',
                  transition: 'all 0.3s',
                  boxShadow: '0 4px 14px rgba(185, 28, 44, 0.3)',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#991B1B')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#B91C2C')}
              >
                Get a Quote
                <ArrowRight style={{ width: '16px', height: '16px' }} />
              </Link>
              <Link
                href="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '8px',
                  padding: '14px 28px',
                  fontSize: '14px',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(255, 255, 255, 0.25)',
                  background: 'transparent',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
              >
                Explore Services
              </Link>
            </div>
          </motion.div>

          {/* ── RIGHT COLUMN — Stat Cards ── */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '12px' }}>
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
                    padding: '20px 24px',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    borderRadius: '10px',
                  }}
                >
                  {/* Orange icon box */}
                  <div style={{
                    flexShrink: 0,
                    width: '44px',
                    height: '44px',
                    borderRadius: '8px',
                    background: 'rgba(185, 28, 44, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon style={{ width: '20px', height: '20px', color: '#B91C2C' }} />
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
                      color: 'rgba(255, 255, 255, 0.45)',
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
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '4px',
          opacity: 0.2,
        }}
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
      >
        <span style={{ fontSize: '10px', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Scroll
        </span>
        <ChevronDown style={{ width: '16px', height: '16px', color: '#FFFFFF' }} />
      </motion.div>
    </section>
  );
}
