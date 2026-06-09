'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { services } from '@/data/services';

/* ─── Build a curated gallery from each service's first image ─── */
const serviceGallery = services.map((s) => ({
  slug: s.slug,
  title: s.title,
  image: s.images[0],
  division: s.division,
}));

/* Split into two rows for the dual-marquee effect */
const row1 = serviceGallery.slice(0, Math.ceil(serviceGallery.length / 2));
const row2 = serviceGallery.slice(Math.ceil(serviceGallery.length / 2));

/* ─── Single marquee row ─── */
function MarqueeRow({ items, reverse = false, speed = 35 }) {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  /* Duplicate items for seamless looping */
  const doubled = [...items, ...items];

  return (
    <div
      className="marquee-container"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        ref={trackRef}
        className={`marquee-track-inner ${reverse ? 'marquee-track-reverse' : 'marquee-track'}`}
        style={{
          animationDuration: `${speed}s`,
          animationPlayState: paused ? 'paused' : 'running',
        }}
      >
        {doubled.map((item, i) => (
          <Link
            key={`${item.slug}-${i}`}
            href={`/services/${item.slug}`}
            className="marquee-card"
          >
            {/* Image */}
            <img
              src={item.image}
              alt={item.title}
              loading="lazy"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />

            {/* Gradient overlay */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(to top, rgba(10,45,115,0.85) 0%, rgba(10,45,115,0.3) 40%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Label */}
            <div className="marquee-card-label">
              <span className="marquee-card-badge">
                {item.division}
              </span>
              <p className="marquee-card-title">
                {item.title}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ─── Main component ─── */
export default function ServiceImageMarquee() {
  return (
    <section
      className="marquee-section"
      aria-label="Services showcase"
    >
      {/* Section header */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          paddingLeft: '24px',
          paddingRight: '24px',
          textAlign: 'center',
        }}
        className="marquee-header"
      >
        <div
          style={{
            width: '48px',
            height: '3px',
            background: '#D9041B',
            borderRadius: '2px',
            margin: '0 auto 20px',
          }}
        />
        <h2
          style={{
            fontSize: 'clamp(26px, 3vw, 36px)',
            fontWeight: 700,
            color: '#0A2D73',
            marginBottom: '14px',
            fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
          }}
        >
          What We Do
        </h2>
        <p
          style={{
            fontSize: 'clamp(14px, 2.5vw, 16px)',
            color: '#6B7A8D',
            maxWidth: '560px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}
        >
          A glimpse into the engineering and infrastructure projects we deliver
          across Africa.
        </p>
      </div>

      {/* Marquee rows */}
      <div className="marquee-rows">
        <MarqueeRow items={row1} speed={40} />
        <MarqueeRow items={row2} speed={45} reverse />
      </div>
    </section>
  );
}
