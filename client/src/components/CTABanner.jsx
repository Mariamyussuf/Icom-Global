import Link from 'next/link';
import ScrollReveal from './ScrollReveal';

export default function CTABanner({ 
  title = 'Ready to Work With Us?', 
  subtitle = "Let's discuss how ICOM can deliver reliable engineering solutions for your next project.",
  buttonText = 'Get in Touch',
  buttonLink = '/contact'
}) {
  return (
    <section style={{ background: '#0F1B2D', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative gradient overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(185,28,44,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(30,58,95,0.06) 0%, transparent 50%)',
      }} />

      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '80px 40px', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        <ScrollReveal>
          <h2 style={{
            fontSize: 'clamp(26px, 3vw, 36px)',
            fontWeight: 700,
            color: '#FFFFFF',
            marginBottom: '16px',
            fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
          }}>
            {title}
          </h2>
          <p style={{
            fontSize: '16px',
            color: 'rgba(255,255,255,0.6)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 32px',
          }}>
            {subtitle}
          </p>
          <Link
            href={buttonLink}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '16px 36px',
              background: '#B91C2C',
              color: '#FFFFFF',
              fontWeight: 600,
              fontSize: '16px',
              borderRadius: '10px',
              textDecoration: 'none',
              transition: 'all 0.3s',
              boxShadow: '0 4px 16px rgba(185,28,44,0.3)',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#991B1B'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#B91C2C'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            {buttonText}
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
