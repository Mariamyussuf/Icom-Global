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
        backgroundColor: '#FFFFFF',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginTop: 'calc(-1 * var(--nav-height, 100px))',
        paddingTop: 'calc(var(--nav-height, 100px) + 32px)',
        paddingBottom: '48px',
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
          position: 'absolute', inset: 0, opacity: 0.3,
          backgroundImage: 'radial-gradient(circle, rgba(10,45,115,0.08) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      {/* Main two-column grid */}
      <div 
        className="px-4 sm:px-6 lg:px-12"
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
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: '520px' }}
          >
            {/* Pill badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                borderRadius: '999px',
                padding: '6px 16px',
                marginBottom: '24px',
                alignSelf: 'flex-start',
                border: '1px solid rgba(217, 4, 27, 0.25)',
                background: 'rgba(217, 4, 27, 0.06)',
              }}
            >
              <span style={{ height: '6px', width: '6px', borderRadius: '50%', backgroundColor: '#D9041B' }} />
              <span style={{ fontSize: '12px', fontWeight: 500, letterSpacing: '0.04em', color: '#D9041B' }}>
                Engineering excellence since 2009
              </span>
            </div>

            {/* Accent bar */}
            <div style={{ width: '40px', height: '3px', background: '#D9041B', borderRadius: '2px', marginBottom: '20px' }} />

            {/* Headline */}
            <h1
              style={{
                fontFamily: "var(--font-sora, 'DM Sans', sans-serif)",
                fontSize: 'clamp(28px, 4vw, 44px)',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              <span style={{ color: '#0A2D73' }}>Engineering Reliable</span>
              <br />
              <span style={{ color: '#D9041B' }}>Power, Telecom</span>
              <br />
              <span style={{ color: '#0A2D73' }}>&amp; IT Solutions</span>
            </h1>

            {/* Subheadline */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '15px',
              lineHeight: 1.7,
              color: '#6B7A8D',
              maxWidth: '440px',
              marginBottom: '32px',
            }}>
              ICOM Technical Service Support Limited delivers integrated engineering solutions — from telecommunications and fiber optics to solar energy, power infrastructure, and IT services across Nigeria and West Africa.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px' }}>
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
                Explore Services
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
                Contact Us
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
