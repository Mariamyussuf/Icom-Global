'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield,
  Target,
  Lightbulb,
  Users,
  Award,
  Zap,
  Building2,
  Landmark,
  Banknote,
  Factory,
  GraduationCap,
  Plug,
  ArrowRight,
  Radio,
  Fuel as FuelIcon,
  Quote,
  CheckCircle,
} from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CTABanner from '@/components/CTABanner';
import Hero from '@/components/Hero';
import ServiceImageMarquee from '@/components/ServiceImageMarquee';

import { services } from '@/data/services';
import { testimonials } from '@/data/testimonials';
import { partners } from '@/data/partners';

/* ─── Static data ─── */

const coreValues = [
  {
    title: 'Quality & Standards',
    desc: 'NIS ISO9001:2000 compliant processes and procedures across all operations.',
  },
  {
    title: 'Customer Focus',
    desc: 'Dedicated to exceeding client expectations on every project we deliver.',
  },
  {
    title: 'Innovation',
    desc: 'Creative problem-solving with cutting-edge technology and methodologies.',
  },
  {
    title: 'Accountability',
    desc: 'Transparent delivery with clear communication at every milestone.',
  },
  {
    title: 'Zero-Accident Safety',
    desc: 'Unwavering commitment to workplace safety on all project sites.',
  },
];

const industries = [
  { name: 'Telecommunications', icon: Radio },
  { name: 'Government & Public Sector', icon: Landmark },
  { name: 'Financial Services', icon: Banknote },
  { name: 'Oil & Gas', icon: FuelIcon },
  { name: 'Manufacturing', icon: Factory },
  { name: 'Education', icon: GraduationCap },
  { name: 'Utilities', icon: Plug },
  { name: 'Real Estate', icon: Building2 },
];

const qualityCards = [
  {
    icon: Shield,
    title: 'ISO-Aligned Quality',
    desc: 'Processes aligned with NIS ISO9001:2000 standards, ensuring consistent quality across every project.',
  },
  {
    icon: Award,
    title: 'Zero-Accident Culture',
    desc: 'Rigorous safety protocols, training, and continuous monitoring across all operations.',
  },
  {
    icon: Zap,
    title: 'Continuous Improvement',
    desc: 'Constantly adopting new technologies and best practices for ever-better outcomes.',
  },
];

const testimonialVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.35 } },
};

/* ─── Reusable section wrapper with consistent padding ─── */
function Section({ children, bg = 'white', className = '', ...props }) {
  const bgMap = {
    white: 'var(--bg-primary, #FFFFFF)',
    gray: 'var(--bg-secondary, #F5F7FA)',
    navy: 'var(--bg-navbar, #0A2D73)',
  };
  return (
    <section
      style={{ backgroundColor: bgMap[bg] || bg }}
      className={className}
      {...props}
    >
      <div
        className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </section>
  );
}

/* ─── Page component ─── */
export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ═══════════════ 1. HERO ═══════════════ */}
      <Hero />

      {/* ═══════════════ 1b. SERVICE IMAGE SHOWCASE ═══════════════ */}
      <ServiceImageMarquee />

      {/* ═══════════════ 2. CORE SERVICES ═══════════════ */}
      <Section bg="gray" aria-label="Core services">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '14px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Our Core Services
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Comprehensive engineering and technology solutions tailored for modern infrastructure across Africa.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px' }}>
          {services.slice(0, 8).map((service, i) => (
            <ScrollReveal key={service.slug} delay={i * 0.06}>
              <ServiceCard service={service} index={i} />
            </ScrollReveal>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '14px 32px',
              border: '2px solid var(--text-heading, #0A2D73)',
              borderRadius: '8px',
              color: 'var(--text-heading, #0A2D73)',
              fontWeight: 600,
              fontSize: '15px',
              textDecoration: 'none',
              transition: 'all 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.borderColor = '#D9041B'; e.currentTarget.style.color = '#fff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'var(--text-heading, #0A2D73)'; e.currentTarget.style.color = 'var(--text-heading, #0A2D73)'; }}
          >
            View All Services
            <ArrowRight style={{ width: '16px', height: '16px' }} />
          </Link>
        </div>
      </Section>

      {/* ═══════════════ 3. WHY CHOOSE ICOM ═══════════════ */}
      <Section bg="white" aria-label="Why choose ICOM">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <div className="mx-auto md:mx-0" style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', marginBottom: '20px' }} />
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '12px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                Why Choose ICOM?
              </h2>
              <p className="mx-auto md:mx-0" style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '460px', lineHeight: 1.7, marginBottom: '36px' }}>
                We combine deep technical expertise with a commitment to quality that sets us apart in every project.
              </p>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {coreValues.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle style={{ width: '20px', height: '20px', color: '#D9041B' }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-heading, #0A2D73)', marginBottom: '4px' }}>{v.title}</p>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.6 }}>{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: stats grid */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Years of Experience', accent: '#D9041B' },
                { value: '8', label: 'Core Service Lines', accent: '#FF3B50' },
                { value: '10+', label: 'Major Clients Served', accent: '#FF3B50' },
                { value: 'Pan-Africa', label: 'Coverage & Operations', accent: '#D9041B' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    background: 'var(--bg-card, #0A2D73)',
                    borderRadius: '16px',
                    padding: '28px 24px',
                    textAlign: 'center',
                    border: '1px solid var(--border-color, rgba(255,255,255,0.08))',
                    boxShadow: 'var(--card-shadow, 0 4px 16px rgba(0,0,0,0.1))',
                    transition: 'transform 0.3s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
                  <p style={{ fontSize: stat.value.length > 4 ? '24px' : '32px', fontWeight: 800, color: stat.accent, marginBottom: '6px', fontFamily: "var(--font-sora, 'DM Sans', sans-serif)" }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted, rgba(255,255,255,0.55))', lineHeight: 1.4 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ═══════════════ 4. INDUSTRIES ═══════════════ */}
      <Section bg="gray" aria-label="Industries we serve">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '14px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Industries We Serve
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Delivering solutions across diverse sectors of the Nigerian and African economy.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {industries.map((ind, i) => {
            const Icon = ind.icon;
            return (
              <ScrollReveal key={ind.name} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: 'var(--card-shadow, 0 12px 32px rgba(0,0,0,0.1))' }}
                  style={{
                    background: 'var(--bg-card, #FFFFFF)',
                    borderRadius: '14px',
                    padding: '32px 20px',
                    textAlign: 'center',
                    boxShadow: 'var(--card-shadow, 0 2px 8px rgba(0,0,0,0.06))',
                    border: '1px solid var(--border-color, #E2E8F0)',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                    <Icon style={{ width: '24px', height: '24px', color: '#D9041B' }} />
                  </div>
                  <p style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-heading, #0A2D73)' }}>{ind.name}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* ═══════════════ 5. MISSION & VISION ═══════════════ */}
      <Section bg="white" aria-label="Mission and vision">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '14px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Driving Purpose
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Our vision and mission guide every decision and project we undertake.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div style={{ background: 'var(--bg-card, #FFFFFF)', borderRadius: '16px', padding: '36px 32px', boxShadow: 'var(--card-shadow, 0 4px 20px rgba(0,0,0,0.06))', border: '1px solid var(--border-color, #E2E8F0)', borderLeft: '4px solid #0D3A8A', height: '100%' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(13,58,138,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Target style={{ width: '24px', height: '24px', color: '#0D3A8A' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '12px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>Our Vision</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.75, maxWidth: '480px' }}>
                To become the number one trusted technology, procurement, and supply partner for delivering solutions across Africa.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <div style={{ background: 'var(--bg-card, #FFFFFF)', borderRadius: '16px', padding: '36px 32px', boxShadow: 'var(--card-shadow, 0 4px 20px rgba(0,0,0,0.06))', border: '1px solid var(--border-color, #E2E8F0)', borderLeft: '4px solid #D9041B', height: '100%' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Lightbulb style={{ width: '24px', height: '24px', color: '#D9041B' }} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '12px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>Our Mission</h3>
              <p style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.75, maxWidth: '480px' }}>
                To provide strategic and technical value to our customers by designing, building, and maintaining cost-effective communication networks, power systems, and technology solutions.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ═══════════════ 6. PARTNERS ═══════════════ */}
      <Section bg="gray" aria-label="Partners">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '14px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Trusted Partners
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.7 }}>
              Working with leading global technology companies.
            </p>
          </div>
        </ScrollReveal>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
          {partners.map((p, i) => (
            <ScrollReveal key={p.id} delay={i * 0.04}>
              <div
                style={{
                  background: 'var(--bg-card, #0A2D73)',
                  borderRadius: '10px',
                  padding: '16px 24px',
                  minWidth: '120px',
                  textAlign: 'center',
                  border: '1px solid var(--border-color, rgba(255,255,255,0.1))',
                  transition: 'transform 0.3s, box-shadow 0.3s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(10,45,115,0.3)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                <span style={{ color: 'var(--text-heading, #FFFFFF)', fontSize: '14px', fontWeight: 600, whiteSpace: 'nowrap' }}>{p.name}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ═══════════════ 7. TESTIMONIALS ═══════════════ */}
      <Section bg="white" aria-label="Testimonials">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              What Our Clients Say
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <Quote style={{ width: '40px', height: '40px', color: 'rgba(217,4,27,0.2)' }} />
          </div>

          <div style={{ position: 'relative', minHeight: '200px' }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                variants={testimonialVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <TestimonialCard {...testimonials[activeIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '32px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer',
                  background: i === activeIndex ? '#D9041B' : '#D1D7E0',
                  transform: i === activeIndex ? 'scale(1.15)' : 'scale(1)',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════ 8. QUALITY & SAFETY ═══════════════ */}
      <section style={{ background: '#0A2D73' }}>
        <div className="px-5 sm:px-6 md:px-8 lg:px-12 py-12 md:py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{ textAlign: 'center', marginBottom: '56px' }}>
              <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
              <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '14px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                Quality & Safety Commitment
              </h2>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
                Our commitment to excellence and safety is unwavering across every project.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {qualityCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={i * 0.1}>
                  <div style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    borderRadius: '16px',
                    padding: '32px 28px',
                    height: '100%',
                    backdropFilter: 'blur(8px)',
                  }}>
                    <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(217,4,27,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                      <Icon style={{ width: '24px', height: '24px', color: '#D9041B' }} />
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#FFFFFF', marginBottom: '10px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                      {card.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                      {card.desc}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════ 9. CTA ═══════════════ */}
      <CTABanner />
    </>
  );
}
