'use client';

import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import ServiceCard from '@/components/ServiceCard';
import CTABanner from '@/components/CTABanner';
import { services } from '@/data/services';

export default function ServicesPage() {
  const wnsServices = services.filter((s) => s.division === 'WNS');
  const ensServices = services.filter((s) => s.division === 'ENS');

  return (
    <>
      {/* Hero Banner */}
      <section style={{
        backgroundColor: '#0A2D73',
        marginTop: 'calc(-1 * var(--nav-height, 100px))',
        paddingTop: 'calc(var(--nav-height, 100px) + 40px)',
        paddingBottom: '60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '33%', right: '25%', width: '288px', height: '288px', border: '1px solid white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '25%', left: '33%', width: '192px', height: '192px', border: '1px solid white', borderRadius: '50%' }} />
        </div>

        <div className="px-4 sm:px-6 lg:px-12" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', background: 'rgba(217,4,27,0.15)', color: '#D9041B', fontSize: '14px', fontWeight: 600, padding: '8px 20px', borderRadius: '999px', marginBottom: '24px' }}>
              What We Do
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)", lineHeight: 1.15 }}>
              Services &amp; Core Expertise
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              High-quality engineering solutions and consulting services tailored to the requirements of the African telecoms industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="px-4 sm:px-6 lg:px-12 py-12 md:py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <ScrollReveal>
            <p style={{ fontSize: '16px', color: '#6B7A8D', lineHeight: 1.75, maxWidth: '760px', margin: '0 auto 64px', textAlign: 'center' }}>
              We offer customized service for most of Africa&apos;s largest wireless carriers to maintain their networks. As one of the fastest-growing independent telecoms service providers in Africa, we leverage our industry expertise across two primary operating divisions.
            </p>
          </ScrollReveal>

          {/* Wireless Network Services (WNS) */}
          <div style={{ marginBottom: '80px' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '36px' }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, color: '#0A2D73', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                  1. Wireless Network Services (WNS)
                </h2>
                <div style={{ flex: 1, height: '2px', background: '#D9041B', opacity: 0.15 }} />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wnsServices.map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </div>
          </div>

          {/* Enterprise Network Solutions (ENS) */}
          <div>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '36px' }}>
                <h2 style={{ fontSize: 'clamp(20px, 2.5vw, 26px)', fontWeight: 800, color: '#0A2D73', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                  2. Enterprise Network Solutions (ENS)
                </h2>
                <div style={{ flex: 1, height: '2px', background: '#D9041B', opacity: 0.15 }} />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ensServices.map((service, i) => (
                <ServiceCard key={service.slug} service={service} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner buttonText="Request a Service" />
    </>
  );
}
