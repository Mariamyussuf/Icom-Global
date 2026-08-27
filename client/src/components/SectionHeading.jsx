import ScrollReveal from './ScrollReveal';

export default function SectionHeading({ title, subtitle, centered = true, light = false }) {
  return (
    <ScrollReveal className={`mb-14 ${centered ? 'text-center' : ''}`}>
      <div className="mb-5" style={{ width: '48px', height: '3px', background: 'var(--color-orange, #D9041B)', borderRadius: '2px', margin: centered ? '0 auto 20px' : '0 0 20px' }} />
      <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 leading-tight ${
        light ? 'text-white' : 'text-[var(--text-heading)]'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] leading-relaxed max-w-2xl ${centered ? 'mx-auto' : ''} ${
          light ? 'text-gray-300' : 'text-[var(--text-muted)]'
        }`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
