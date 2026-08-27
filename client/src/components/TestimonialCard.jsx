import { Quote } from 'lucide-react';

export default function TestimonialCard({ name, role, company, quote, avatar }) {
  return (
    <div style={{
      background: 'var(--bg-card, #FFFFFF)',
      borderRadius: 'var(--radius-card)',
      boxShadow: 'var(--card-shadow, 0 4px 20px rgba(0,0,0,0.06))',
      padding: 'var(--space-card-padding)',
      border: '1px solid var(--border-color, #E2E8F0)',
      textAlign: 'center',
      transition: 'background-color 0.3s, border-color 0.3s',
    }}>
      {/* Quote Text */}
      <blockquote style={{
        fontSize: '15px',
        color: 'var(--text-body, #4A5568)',
        fontStyle: 'italic',
        lineHeight: 1.8,
        marginBottom: '24px',
        maxWidth: '520px',
        margin: '0 auto 24px',
      }}>
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid var(--border-color, #E2E8F0)' }}>
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
            loading="lazy"
          />
        ) : (
          <div style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #0D3A8A, #0A2D73)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontWeight: 700,
            fontSize: '18px',
          }}>
            {name?.charAt(0) || 'A'}
          </div>
        )}
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-heading, #0A2D73)', marginBottom: '2px' }}>{name}</p>
          <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)' }}>
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
