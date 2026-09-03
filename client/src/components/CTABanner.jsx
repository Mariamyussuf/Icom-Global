'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import { useLanguage } from '@/context/LanguageContext';

export default function CTABanner({ 
  title, 
  subtitle,
  buttonText,
  buttonLink = '/contact'
}) {
  const { t } = useLanguage();
  const displayBadge = t('cta.badge', "Let's Build Together");
  const displayTitle = title || t('cta.title', 'Ready to Build Your Next-Generation Infrastructure?');
  const displaySubtitle = subtitle || t('cta.subtitle', "Let's discuss how ICOM can deliver reliable engineering solutions for your next project.");
  const displayButtonText = buttonText || t('cta.buttonText', 'Request a Technical Consultation');

  return (
    <section style={{ backgroundColor: 'var(--bg-secondary, #F5F7FA)', position: 'relative', overflow: 'hidden' }}>
      <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-24 lg:py-28" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <div
            style={{
              background: 'var(--bg-card, #FFFFFF)',
              borderRadius: 'var(--radius-banner)',
              padding: 'var(--space-banner-padding)',
              textAlign: 'center',
              border: '1px solid var(--border-color, #E2E8F0)',
              boxShadow: 'var(--card-shadow, 0 8px 30px rgba(0,0,0,0.06))',
              maxWidth: '860px',
              margin: '0 auto',
            }}
          >
            <span style={{ display: 'inline-block', background: 'rgba(217,4,27,0.1)', color: '#D9041B', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '999px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
              {displayBadge}
            </span>
            <h2 style={{
              fontSize: 'var(--text-banner-title)',
              fontWeight: 700,
              color: 'var(--text-heading, #0A2D73)',
              marginBottom: '16px',
              fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
            }}>
              {displayTitle}
            </h2>
            <p style={{
              fontSize: '15px',
              color: 'var(--text-muted, #6B7A8D)',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto 28px',
            }}>
              {displaySubtitle}
            </p>
            <Link
              href={buttonLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 32px',
                background: '#D9041B',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '15px',
                borderRadius: '8px',
                textDecoration: 'none',
                transition: 'all 0.3s',
                boxShadow: '0 4px 16px rgba(217,4,27,0.3)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#B50316'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              {displayButtonText}
              <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
