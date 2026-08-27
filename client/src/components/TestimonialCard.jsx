import { Quote } from 'lucide-react';

export default function TestimonialCard({ name, role, company, quote, avatar }) {
  return (
    <div
      style={{
        background: 'var(--bg-card, #FFFFFF)',
        borderRadius: '16px',
        boxShadow: '0 8px 30px rgba(10,45,115,0.07)',
        padding: '32px 28px',
        border: '1px solid var(--border-color, #E2E8F0)',
        textAlign: 'center',
        position: 'relative',
        transition: 'all 0.3s ease',
      }}
      className="sm:p-10"
    >
      {/* Quote Icon inside card */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '14px' }}>
        <Quote style={{ width: '32px', height: '32px', color: 'rgba(217,4,27,0.2)' }} />
      </div>

      {/* Quote Text */}
      <blockquote
        style={{
          fontSize: '15px',
          color: 'var(--text-body, #4A5568)',
          fontStyle: 'italic',
          lineHeight: 1.8,
          maxWidth: '560px',
          margin: '0 auto 20px',
        }}
      >
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Author Profile */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          paddingTop: '18px',
          borderTop: '1px solid var(--border-color, #E2E8F0)',
        }}
      >
        {avatar ? (
          <img
            src={avatar}
            alt={name}
            style={{ width: '44px', height: '44px', borderRadius: '50%', objectFit: 'cover' }}
            loading="lazy"
          />
        ) : (
          <div
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0D3A8A, #0A2D73)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              fontWeight: 700,
              fontSize: '16px',
            }}
          >
            {name?.charAt(0) || 'A'}
          </div>
        )}
        <div style={{ textAlign: 'left' }}>
          <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-heading, #0A2D73)', marginBottom: '2px' }}>
            {name}
          </p>
          <p style={{ fontSize: '13px', color: 'var(--text-muted, #6B7A8D)' }}>
            {role}{company ? `, ${company}` : ''}
          </p>
        </div>
      </div>
    </div>
  );
}
