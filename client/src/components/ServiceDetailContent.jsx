'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Radio, Cable, Sun, Fuel, Plug, Monitor, Package, ClipboardList,
  CheckCircle, Shield, Zap, Users, Clock, Wrench, FileCheck, Gauge,
  DollarSign, Leaf, BatteryCharging, Settings, Headphones, BarChart,
  Lock, Cloud, GraduationCap, Globe, Truck, ShieldCheck, Target,
  PieChart, MessageSquare, TrendingDown, Award,
  ArrowLeft, ChevronRight,
} from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import CTABanner from './CTABanner';
import ServiceCard from './ServiceCard';
import { services } from '@/data/services';

const serviceIconMap = { Radio, Cable, Sun, Fuel, Plug, Monitor, Package, ClipboardList };
const iconMap = {
  CheckCircle, Shield, Zap, Users, Clock, Wrench, FileCheck, Gauge,
  DollarSign, Leaf, BatteryCharging, Settings, Headphones, BarChart,
  Lock, Cloud, GraduationCap, Globe, Truck, ShieldCheck, Target,
  PieChart, MessageSquare, TrendingDown, Award,
};

/* ─── Reusable wrapper ─── */
function Section({ children, bg = '#FFFFFF' }) {
  return (
    <section style={{ backgroundColor: bg }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 48px' }}>
        {children}
      </div>
    </section>
  );
}

function Heading({ title, subtitle }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <div style={{ width: '48px', height: '3px', background: '#B91C2C', borderRadius: '2px', margin: '0 auto 20px' }} />
      <h2 style={{ fontSize: 'clamp(24px, 3vw, 34px)', fontWeight: 700, color: '#0F1B2D', marginBottom: subtitle ? '12px' : 0, fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
        {title}
      </h2>
      {subtitle && <p style={{ fontSize: '15px', color: '#6B7A8D', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>{subtitle}</p>}
    </div>
  );
}

export default function ServiceDetailContent({ service }) {
  const ServiceIcon = serviceIconMap[service.icon] || Radio;
  const overviewParagraphs = service.overview.split('\n\n');
  const relatedServices = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imgList = service.images || [];

  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section style={{
        backgroundColor: '#0F1B2D',
        marginTop: '-80px',
        paddingTop: '140px',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '25%', right: '25%', width: '256px', height: '256px', border: '1px solid white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '25%', left: '33%', width: '192px', height: '192px', border: '1px solid white', borderRadius: '50%' }} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', position: 'relative' }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.45)', marginBottom: '28px' }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>Home</Link>
            <ChevronRight style={{ width: '14px', height: '14px' }} />
            <Link href="/services" style={{ color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}>Services</Link>
            <ChevronRight style={{ width: '14px', height: '14px' }} />
            <span style={{ color: '#B91C2C' }}>{service.title}</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{
              width: '72px', height: '72px', background: 'rgba(185,28,44,0.15)', borderRadius: '16px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <ServiceIcon style={{ width: '36px', height: '36px', color: '#B91C2C' }} />
            </div>
            <div>
              <h1 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 700, color: '#FFFFFF', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)", marginBottom: '6px' }}>
                {service.title}
              </h1>
              <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>{service.shortDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════ OVERVIEW ═══════ */}
      <Section bg="#FFFFFF">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          <div className="lg:col-span-3">
            <ScrollReveal>
              <h2 style={{ fontSize: '24px', fontWeight: 700, color: '#0F1B2D', marginBottom: '24px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                Overview
              </h2>
            </ScrollReveal>
            {overviewParagraphs.map((paragraph, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.8, marginBottom: '16px', maxWidth: '680px' }}>
                  {paragraph}
                </p>
              </ScrollReveal>
            ))}
          </div>

          {/* Service Image Gallery Slider */}
          {imgList.length > 0 && (
            <div className="lg:col-span-2 w-full">
              <ScrollReveal>
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 12px 32px rgba(0,0,0,0.06)',
                  border: '1px solid #E8ECF1',
                  position: 'relative',
                  height: '320px',
                  width: '100%',
                }}>
                  <img 
                    src={imgList[currentImageIndex]} 
                    alt={`${service.title} - image ${currentImageIndex + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'all 0.3s' }}
                  />

                  {/* Left chevron button */}
                  {imgList.length > 1 && (
                    <button 
                      onClick={() => setCurrentImageIndex((prev) => (prev - 1 + imgList.length) % imgList.length)}
                      style={{
                        position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                        background: 'rgba(15,27,45,0.65)', color: '#fff', border: 'none', borderRadius: '50%',
                        width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', zIndex: 10, transition: 'background 0.2s', fontSize: '16px',
                        backdropFilter: 'blur(4px)', outline: 'none'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#B91C2C')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(15,27,45,0.65)')}
                    >
                      &#10094;
                    </button>
                  )}

                  {/* Right chevron button */}
                  {imgList.length > 1 && (
                    <button 
                      onClick={() => setCurrentImageIndex((prev) => (prev + 1) % imgList.length)}
                      style={{
                        position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                        background: 'rgba(15,27,45,0.65)', color: '#fff', border: 'none', borderRadius: '50%',
                        width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        cursor: 'pointer', zIndex: 10, transition: 'background 0.2s', fontSize: '16px',
                        backdropFilter: 'blur(4px)', outline: 'none'
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = '#B91C2C')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(15,27,45,0.65)')}
                    >
                      &#10095;
                    </button>
                  )}

                  {/* Dots indicator */}
                  {imgList.length > 1 && (
                    <div style={{
                      position: 'absolute', bottom: '12px', left: '50%', transform: 'translateX(-50%)',
                      display: 'flex', gap: '8px', zIndex: 10
                    }}>
                      {imgList.map((_, idx) => (
                        <div 
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx)}
                          style={{
                            width: '8px', height: '8px', borderRadius: '50%',
                            background: idx === currentImageIndex ? '#B91C2C' : 'rgba(255,255,255,0.5)',
                            cursor: 'pointer', transition: 'all 0.2s',
                            transform: idx === currentImageIndex ? 'scale(1.2)' : 'none'
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </Section>

      {/* ═══════ SUB-SERVICES ═══════ */}
      {service.subServices && service.subServices.length > 0 && (
        <Section bg="#F4F6F9">
          <Heading title="What We Offer" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {service.subServices.map((sub, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '14px',
                  background: '#FFFFFF',
                  borderRadius: '12px',
                  padding: '24px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                  border: '1px solid #E8ECF1',
                  transition: 'box-shadow 0.3s, transform 0.3s',
                  height: '100%',
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)'; e.currentTarget.style.transform = 'translateY(0)'; }}
                >
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#B91C2C', marginTop: '2px', flexShrink: 0 }} />
                  <span style={{ fontSize: '14px', fontWeight: 600, color: '#0F1B2D', lineHeight: 1.5 }}>{sub}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* ═══════ BENEFITS ═══════ */}
      {service.benefits && service.benefits.length > 0 && (
        <Section bg="#FFFFFF">
          <Heading title="Key Benefits" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
            {service.benefits.map((benefit, i) => {
              const BenefitIcon = iconMap[benefit.icon] || CheckCircle;
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <div style={{
                    textAlign: 'center',
                    padding: '28px 20px',
                    borderRadius: '16px',
                    background: '#F4F6F9',
                    height: '100%',
                    transition: 'all 0.3s',
                  }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.08)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = '#F4F6F9'; e.currentTarget.style.boxShadow = 'none'; }}
                  >
                    <div style={{
                      width: '56px', height: '56px', background: 'rgba(185,28,44,0.1)', borderRadius: '14px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px',
                    }}>
                      <BenefitIcon style={{ width: '28px', height: '28px', color: '#B91C2C' }} />
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0F1B2D', marginBottom: '8px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#6B7A8D', lineHeight: 1.6 }}>{benefit.description}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </Section>
      )}

      {/* ═══════ PROCESS ═══════ */}
      {service.process && service.process.length > 0 && (
        <Section bg="#F4F6F9">
          <Heading title="Our Process" />
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            {service.process.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div style={{ display: 'flex', gap: '20px', position: 'relative', paddingBottom: i < service.process.length - 1 ? '40px' : 0 }}>
                  {/* Connecting line */}
                  {i < service.process.length - 1 && (
                    <div style={{
                      position: 'absolute', left: '24px', top: '52px',
                      width: '2px', height: 'calc(100% - 52px)',
                      background: '#B91C2C',
                    }} />
                  )}
                  {/* Step number */}
                  <div style={{
                    width: '48px', height: '48px', background: '#B91C2C', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#fff', fontWeight: 700, fontSize: '18px', flexShrink: 0, zIndex: 1,
                  }}>
                    {step.step}
                  </div>
                  {/* Content */}
                  <div style={{ paddingTop: '4px' }}>
                    <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#0F1B2D', marginBottom: '6px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6B7A8D', lineHeight: 1.7, maxWidth: '540px' }}>{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </Section>
      )}

      {/* ═══════ RELATED SERVICES ═══════ */}
      <Section bg="#FFFFFF">
        <Heading title="Related Services" subtitle="Explore our other engineering and technology solutions." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {relatedServices.map((relService, i) => (
            <ServiceCard key={relService.slug} service={relService} index={i} />
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <Link href="/services" style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            color: '#1E3A5F', fontWeight: 600, fontSize: '15px', textDecoration: 'none', transition: 'color 0.2s',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#B91C2C')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#1E3A5F')}
          >
            <ArrowLeft style={{ width: '16px', height: '16px' }} />
            View All Services
          </Link>
        </div>
      </Section>

      {/* CTA */}
      <CTABanner
        title={`Need ${service.title}?`}
        subtitle="Contact our team of experts to discuss your project requirements and get a tailored solution."
        buttonText="Request This Service"
      />
    </>
  );
}
