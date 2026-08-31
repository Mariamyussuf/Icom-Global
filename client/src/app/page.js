'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Radio,
  Cable,
  Sun,
  Fuel as FuelIcon,
  Plug,
  Monitor,
  Package,
  ClipboardList,
  Zap,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
} from 'lucide-react';

import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import ProjectCard from '@/components/ProjectCard';
import TestimonialCard from '@/components/TestimonialCard';
import Hero from '@/components/Hero';
import ServiceImageMarquee from '@/components/ServiceImageMarquee';

import { services } from '@/data/services';
import { projects } from '@/data/projects';
import { testimonials } from '@/data/testimonials';
import { partners } from '@/data/partners';

/* ─── Icon map for mobile spec rows (mirrors ServiceCard) ─── */
const iconMap = { Radio, Cable, Sun, Fuel: FuelIcon, Plug, Monitor, Package, ClipboardList, Zap };

/* ─── Static Data ─── */

const coreValues = [
  {
    title: 'ISO-Aligned Quality & Standards',
    desc: 'NIS ISO9001:2000 compliant procedures across all network & power deployments.',
  },
  {
    title: 'Zero-Accident Safety Culture',
    desc: 'Unwavering HSE protocols and continuous site monitoring across all projects.',
  },
  {
    title: 'Customer-Centric Execution',
    desc: 'Dedicated to exceeding client SLAs and expectations on every single milestone.',
  },
  {
    title: 'Pan-African Technical Reach',
    desc: 'Deep local engineering experience supporting top tier-1 operators in Africa.',
  },
];


const testimonialVariants = {
  enter: { opacity: 0, x: 40 },
  center: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, x: -40, transition: { duration: 0.35 } },
};

/* ─── Reusable section wrapper ───
   Padding moved to inline styles (was Tailwind-only py-24/lg:py-28,
   which was being purged in production and left mobile sections with
   no vertical spacing — see About page fix). Inline styles can't be
   purged, so this is guaranteed regardless of the Tailwind pipeline. */
function Section({ children, bg = 'white', className = '', ...props }) {
  const bgMap = {
    white: 'var(--bg-primary, #FFFFFF)',
    gray: 'var(--bg-secondary, #F5F7FA)',
    navy: 'var(--bg-navbar, #0A2D73)',
  };
  return (
    <section
      style={{ backgroundColor: bgMap[bg] || bg, paddingTop: '64px', paddingBottom: '64px' }}
      className={`lg:!py-28 ${className}`}
      {...props}
    >
      <div
        className="px-5 sm:px-6 md:px-8 lg:px-12"
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

/* ─── Streamlined Homepage Component ─── */
export default function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const ongoingProjects = projects.filter((p) => p.status === 'Ongoing');

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <>
      {/* ═══════════════ 1. HERO ═══════════════ */}
      <Hero />

      {/* ═══════════════ 1b. SERVICE SHOWCASE MARQUEE ═══════════════ */}
      <ServiceImageMarquee />

      {/* ═══════════════ 2. CORE SERVICES ═══════════════ */}
      <Section bg="gray" aria-label="Core services">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '16px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Our Core Services
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
              Comprehensive engineering and technology solutions tailored for modern infrastructure across Africa.
            </p>
          </div>
        </ScrollReveal>

        {/* Mobile/Tablet: spec-sheet list */}
        <div className="lg:hidden spec-list">
          {services.slice(0, 8).map((service, i) => {
            const Icon = iconMap[service.icon] || Radio;
            return (
              <Link key={service.slug} href={`/services/${service.slug}`} className="spec-row">
                <span className="spec-row-index">{String(i + 1).padStart(2, '0')}</span>
                <span className="spec-row-icon"><Icon size={20} color="#D9041B" /></span>
                <span className="spec-row-body">
                  <span className="spec-row-title">{service.title}</span>
                  <span className="spec-row-desc">{service.shortDesc}</span>
                </span>
                <span className="spec-row-chevron"><ChevronRight size={16} /></span>
              </Link>
            );
          })}
        </div>

        {/* Desktop: original ServiceCard grid */}
        <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '28px' }}>
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

      {/* ═══════════════ 3. WHY CHOOSE ICOM (CONSOLIDATED) ═══════════════ */}
      <Section bg="white" aria-label="Why choose ICOM">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center md:text-left">
            <ScrollReveal>
              <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
              <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '16px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                Why Choose ICOM?
              </h2>
              <p className="mx-auto md:mx-0" style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '460px', lineHeight: 1.7, marginBottom: '32px' }}>
                We combine 15+ years of multidisciplinary technical expertise with a zero-compromise commitment to quality, safety, and operational excellence.
              </p>
            </ScrollReveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {coreValues.map((v, i) => (
                <ScrollReveal key={v.title} delay={i * 0.08}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }} className="text-left">
                    <div style={{ flexShrink: 0, width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(217,4,27,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle style={{ width: '20px', height: '20px', color: '#D9041B' }} />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text-heading, #0A2D73)', marginBottom: '10px' }}>{v.title}</p>
                      <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.6 }}>{v.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right: Consolidated Stat Highlights */}
          <ScrollReveal delay={0.15}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: '15+', label: 'Years of Engineering Excellence', accent: '#D9041B' },
                { value: '8', label: 'Specialized Service Divisions', accent: '#FF3B50' },
                { value: '100%', label: 'ISO-Aligned Quality Compliance', accent: '#FF3B50' },
                { value: 'Pan-Africa', label: 'Operational Coverage', accent: '#D9041B' },
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

      {/* ═══════════════ 4. PROJECTS IN PROGRESS ═══════════════ */}
      <Section bg="gray" aria-label="Projects in progress">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            {/* Live activity indicator badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 16px',
                borderRadius: '999px',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '1px solid rgba(16, 185, 129, 0.25)',
                marginBottom: '18px',
              }}
            >
              <span style={{ position: 'relative', display: 'flex', height: '8px', width: '8px' }}>
                <span
                  style={{
                    position: 'absolute',
                    display: 'inline-flex',
                    height: '100%',
                    width: '100%',
                    borderRadius: '50%',
                    background: '#10B981',
                    opacity: 0.75,
                    animation: 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
                  }}
                />
                <span
                  style={{
                    position: 'relative',
                    display: 'inline-flex',
                    borderRadius: '50%',
                    height: '8px',
                    width: '8px',
                    background: '#10B981',
                  }}
                />
              </span>
              <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.06em', color: '#059669', textTransform: 'uppercase' }}>
                Live Deployments &amp; Site Progress
              </span>
            </div>

            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '16px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Projects in Progress
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Turnkey telecommunications engineering, fiber optic rollouts, and mission-critical power operations currently underway across Africa.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 In-Progress Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ongoingProjects.map((project, i) => (
            <ScrollReveal key={project.id} delay={i * 0.08} className="h-full">
              <ProjectCard project={project} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* View All Projects Button */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <Link
            href="/projects"
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
            Explore Complete Portfolio
            <ArrowRight style={{ width: '16px', height: '16px' }} />
          </Link>
        </div>
      </Section>

      {/* ═══════════════ 5. TRUSTED PARTNERS ═══════════════ */}
      <Section bg="white" aria-label="Partners">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '16px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              Trusted Partners
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.7 }}>
              Collaborating with global technology leaders to power mission-critical infrastructure.
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

      {/* ═══════════════ 6. TESTIMONIALS ═══════════════ */}
      <Section bg="gray" aria-label="Testimonials">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '52px' }}>
            <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: '0 auto 20px' }} />
            <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '16px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              What Our Clients Say
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted, #6B7A8D)', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              Trusted feedback from telecom operators, enterprise clients, and infrastructure directors across the continent.
            </p>
          </div>
        </ScrollReveal>

        <div
          style={{ maxWidth: '840px', margin: '0 auto', position: 'relative' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Slider with Prev / Card / Next */}
          <div className="flex items-center gap-3 sm:gap-6">
            {/* Prev Button */}
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-white hover:bg-[#D9041B] hover:border-[#D9041B] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2D73]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Testimonial Card */}
            <div className="flex-1 min-w-0 min-h-[220px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.28, ease: 'easeInOut' }}
                  className="w-full"
                >
                  <TestimonialCard {...testimonials[activeIndex]} />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Next Button */}
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border border-slate-200 shadow-sm text-slate-600 hover:text-white hover:bg-[#D9041B] hover:border-[#D9041B] flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A2D73]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginTop: '36px' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  height: '8px',
                  width: i === activeIndex ? '28px' : '8px',
                  borderRadius: '999px',
                  border: 'none',
                  cursor: 'pointer',
                  background: i === activeIndex ? '#D9041B' : '#CBD5E1',
                  transition: 'all 0.3s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}