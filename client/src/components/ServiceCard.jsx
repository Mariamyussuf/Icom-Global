'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Radio, Cable, Sun, Fuel, Plug, Monitor, Package, ClipboardList, ArrowRight } from 'lucide-react';

const iconMap = { Radio, Cable, Sun, Fuel, Plug, Monitor, Package, ClipboardList };

export default function ServiceCard({ service, index = 0 }) {
  const { slug, title, icon, shortDesc } = service || {};
  const IconComponent = iconMap[icon] || Radio;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
      style={{ height: '100%' }}
    >
      <Link
        href={`/services/${slug}`}
        style={{
          display: 'block',
          background: 'var(--bg-card, #FFFFFF)',
          borderRadius: '14px',
          boxShadow: 'var(--card-shadow, 0 2px 8px rgba(0,0,0,0.06))',
          border: '1px solid var(--border-color, #E2E8F0)',
          borderLeft: '4px solid transparent',
          padding: '28px 24px',
          textDecoration: 'none',
          height: '100%',
          transition: 'border-color 0.3s, box-shadow 0.3s, background-color 0.3s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderLeftColor = '#D9041B')}
        onMouseLeave={(e) => (e.currentTarget.style.borderLeftColor = 'transparent')}
      >
        {/* Icon */}
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: 'rgba(217, 4, 27, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '18px',
        }}>
          <IconComponent size={24} style={{ color: '#D9041B' }} />
        </div>

        {/* Title */}
        <h3 style={{
          fontSize: '16px',
          fontWeight: 700,
          color: 'var(--text-heading, #0A2D73)',
          marginBottom: '10px',
          fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
          lineHeight: 1.3,
        }}>
          {title}
        </h3>

        {/* Description */}
        <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.65, marginBottom: '18px' }}>
          {shortDesc}
        </p>

        {/* Link */}
        <span style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#D9041B',
        }}>
          Learn More
          <ArrowRight size={14} />
        </span>
      </Link>
    </motion.div>
  );
}
