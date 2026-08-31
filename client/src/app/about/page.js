'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Award, Users, Heart, Target, Shield, Lightbulb, Star,
  CheckCircle, Calendar, Smile, TrendingUp, Hand, Gem,
  Cable, Zap, Layers, RefreshCw, Radio, Building2, Home, Activity, ArrowRight
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import CTABanner from '@/components/CTABanner';
import { team } from '@/data/team';

const coreValues = [
  { icon: Heart, title: 'Honesty', description: 'Transparent, ethical, and authentic dealings with all stakeholders.' },
  { icon: Users, title: 'Team Work', description: 'Collaborating together to achieve shared goals and deliver solutions.' },
  { icon: Target, title: 'Cost Consciousness', description: 'Optimizing resources to deliver the best value at a reasonable price.' },
  { icon: Shield, title: 'Commitment', description: 'Dedicated and determined to complete projects successfully.' },
  { icon: Smile, title: 'Motivation', description: 'Keeping our workforce driven, enthusiastic, and focused on growth.' },
  { icon: TrendingUp, title: 'Result', description: 'Oriented around high performance and delivering measurable success.' },
  { icon: Hand, title: 'Service', description: 'Honoring our clients with customized and high-quality assistance.' },
  { icon: Star, title: 'Integrity', description: 'Maintaining unquestionable respectability, honesty, and credibility.' },
  { icon: Award, title: 'Professionalism', description: 'Applying seasoned industry expertise and standards to every task.' },
  { icon: Gem, title: 'Excellence', description: 'Striving continually to exceed expectations and standard guidelines.' },
];

const milestones = [
  { year: '2009', title: 'Company Founded', description: 'ICOM began operations as an engineering and technology services company, serving the growing Nigerian telecom sector.' },
  { year: '2012', title: 'Officially Incorporated', description: 'Incorporated as a limited liability company under COMPANY REGISTRATION NO: 9766449, establishing formal corporate governance and expanding fiber & infrastructure capabilities.' },
  { year: 'Present', title: 'Industry Leader', description: 'Today, ICOM serves leading telecom operators and institutions across Africa with turnkey OFC networks, telecom rollouts, and mission-critical power solutions.' },
];

// NOTE: mixes currently active operators (MTN, Zain) with discontinued/absorbed
// ones (Starcomms, Mtel, Visafone, Reltel). Confirm with content owner whether
// this should be relabeled "Clients We've Worked With" or split into
// current / past to avoid implying ongoing relationships that no longer exist.
const clients = [
  'Andrews', 'Ericsson', 'Zain', 'MTN', 'RTcom',
  'Starcomms', 'Reltel', 'Mtel', 'Visafone', 'ZTE', 'Huawei',
];

const clientLogos = {
  Andrews: '/images/clients/andrews.svg',
  Ericsson: '/images/clients/ericsson.svg',
  Zain: '/images/clients/zain.svg',
  MTN: '/images/clients/mtn.svg',
  RTcom: '/images/clients/rtcom.svg',
  Starcomms: '/images/clients/starcomms.svg',
  Reltel: '/images/clients/reltel.svg',
  Mtel: '/images/clients/mtel.svg',
  Visafone: '/images/clients/visafone.svg',
  ZTE: '/images/clients/zte.svg',
  Huawei: '/images/clients/huawei.svg',
};

/* ─── Reusable section wrapper ─── */
function Section({ children, bg = 'var(--bg-primary, #FFFFFF)' }) {
  return (
    <section style={{ backgroundColor: bg, paddingTop: '64px', paddingBottom: '64px' }} className="lg:!py-28">
      <div className="px-5 sm:px-6 md:px-8 lg:px-12" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {children}
      </div>
    </section>
  );
}

/* ─── Section heading ─── */
function Heading({ title, subtitle, light = false, centered = true }) {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : 'text-center lg:text-left'}`}>
      <div className="mb-5" style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: centered ? '0 auto 20px' : '0 auto 20px' }} />
      <h2 style={{ fontSize: 'var(--text-h2)', fontWeight: 700, color: light ? '#fff' : 'var(--text-heading, #0A2D73)', marginBottom: subtitle ? '16px' : 0, fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
        {title}
      </h2>
      {subtitle && (
        <p className={`line-height-1-7 ${centered ? 'mx-auto' : 'mx-auto lg:mx-0'}`} style={{ fontSize: '15px', color: light ? 'rgba(255,255,255,0.6)' : 'var(--text-muted, #6B7A8D)', maxWidth: '560px', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

/* ─── Client logo tile with graceful fallback to text if the image 404s ─── */
function ClientTile({ name }) {
  const [imgFailed, setImgFailed] = useState(false);
  const logoSrc = clientLogos[name];

  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: 'var(--card-shadow, 0 12px 28px rgba(0,0,0,0.08))' }}
      style={{
        background: 'var(--bg-card, #FFFFFF)',
        borderRadius: '12px',
        border: '1px solid var(--border-color, #E2E8F0)',
        height: '80px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        transition: 'all 0.3s',
        cursor: 'default',
      }}
    >
      {logoSrc && !imgFailed ? (
        <img
          src={logoSrc}
          alt={`${name} logo`}
          onError={() => setImgFailed(true)}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
        />
      ) : (
        <span style={{
          fontWeight: 700,
          color: 'var(--text-heading, #0A2D73)',
          fontSize: '18px',
          fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
          letterSpacing: '-0.3px'
        }}>
          {name}
        </span>
      )}
    </motion.div>
  );
}

/* ─── Team member initials: first letter of each name part, first-name-inclusive ─── */
function getInitials(fullName) {
  return fullName
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function AboutPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section style={{
        backgroundColor: '#0A2D73',
        paddingTop: 'clamp(48px, 6vw, 72px)',
        paddingBottom: 'clamp(48px, 6vw, 72px)',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div aria-hidden="true" style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '33%', right: '25%', width: '288px', height: '288px', border: '1px solid white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '25%', left: '33%', width: '192px', height: '192px', border: '1px solid white', borderRadius: '50%' }} />
        </div>

        <div className="px-5 sm:px-6 md:px-8 lg:px-12" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{
              display: 'inline-block',
              background: 'rgba(217,4,27,0.15)',
              color: '#D9041B',
              fontSize: '14px',
              fontWeight: 600,
              padding: '8px 20px',
              borderRadius: '999px',
              marginBottom: '24px',
            }}>
              About Us
            </span>
            <h1 style={{
              fontSize: 'var(--text-page-title)',
              fontWeight: 700,
              color: '#FFFFFF',
              marginBottom: '20px',
              fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
              lineHeight: 1.15,
            }}>
              Building Africa&apos;s Engineering Future
            </h1>
            <p style={{
              fontSize: '17px',
              color: 'rgba(255,255,255,0.6)',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.7,
            }}>
              Since 2009, ICOM Engineering Solutions Limited has been at the forefront of integrated engineering solutions across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHO WE ARE ═══════ */}
      <Section bg="var(--bg-primary, #FFFFFF)">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — 2x2 stat grid */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: 'Est. 2009', label: 'Year Founded', accent: '#D9041B' },
                { value: 'RC 9766449', label: 'Company Reg. No.', accent: '#FF3B50' },
                { value: 'Victoria Island', label: 'Lagos, Nigeria', accent: '#FF3B50' },
                { value: '15+ Years', label: 'Experience', accent: '#D9041B' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: 'var(--bg-card, #0A2D73)',
                  borderRadius: '14px',
                  padding: '28px 20px',
                  textAlign: 'center',
                  border: '1px solid var(--border-color, rgba(255,255,255,0.08))',
                  boxShadow: 'var(--card-shadow, 0 4px 16px rgba(0,0,0,0.1))',
                }}>
                  <p style={{
                    fontSize: stat.value.length > 10 ? '18px' : '22px',
                    fontWeight: 800,
                    color: 'var(--text-heading, #FFFFFF)',
                    marginBottom: '4px',
                    fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '13px', color: 'var(--text-muted, rgba(255,255,255,0.45))' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <div>
            <Heading title="Who We Are" centered={false} />
            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: '15px', color: 'var(--text-body, #4A5568)', lineHeight: 1.8, marginBottom: '16px' }}>
                ICOM Engineering Solutions Limited is a wholly Nigerian-owned company that has been operating since June 2009, incorporated under <strong>COMPANY REGISTRATION NO: 9766449</strong>. Headquartered in Victoria Island, Lagos, we have grown to become a trusted infrastructure partner for telecommunications operators, government institutions, and corporate organizations across Nigeria.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p style={{ fontSize: '15px', color: 'var(--text-body, #4A5568)', lineHeight: 1.8, marginBottom: '16px' }}>
                We specialize in the installation and deployment of Optical Fiber Cable (OFC) networks, turnkey telecommunications engineering, solar energy systems, and mission-critical power solutions. Our team of experienced Field Technicians and Project Managers has the technical expertise to plan, design, deploy, test, commission, maintain, troubleshoot, and upgrade infrastructure across diverse terrains.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p style={{ fontSize: '15px', color: 'var(--text-body, #4A5568)', lineHeight: 1.8 }}>
                Supported by modern machinery, specialized tools, and industry-standard testing equipment, we are capable of executing deployment projects efficiently while maintaining the highest standards of quality, safety, reliability, and workmanship.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ═══════ MISSION & OBJECTIVES ═══════ */}
      <Section bg="var(--bg-secondary, #F5F7FA)">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card */}
          <ScrollReveal direction="left">
            <div style={{
              background: 'var(--bg-card, #FFFFFF)',
              borderRadius: '16px',
              padding: '40px',
              height: '100%',
              boxShadow: 'var(--card-shadow, 0 4px 20px rgba(0,0,0,0.04))',
              border: '1px solid var(--border-color, #E2E8F0)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ display: 'inline-block', background: 'rgba(217,4,27,0.1)', color: '#D9041B', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '999px', marginBottom: '20px', textTransform: 'uppercase' }}>
                  Our Mission &amp; Objectives
                </span>
                <h3 style={{ fontSize: 'var(--text-h3)', fontWeight: 800, color: 'var(--text-heading, #0A2D73)', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)", lineHeight: 1.35 }}>
                  &ldquo;Our mission is to be the preferred Infrastructure Service Provider to leading Telecom Companies in the Country. To be the first choice in the region we operate in, by focusing on partnering and integrating with a commitment to provide customized services of the highest quality and value.&rdquo;
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.7, marginBottom: '24px' }}>
                  Our core corporate objectives driving engineering excellence and nationwide fiber deployment:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { title: 'Nigeria’s Largest Privately Owned Fiber Network', desc: 'To implement Nigeria’s Largest Privately Owned Fiber Network.' },
                    { title: 'Maximum Reliability & Uptime', desc: 'To ensure maximum reliability and uptime across all deployed networks.' },
                    { title: 'Dark Fiber Leasing & Management', desc: 'To Lease and Manage Dark Fiber networks for multiple service providers.' }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <CheckCircle style={{ width: '18px', height: '18px', color: '#D9041B', flexShrink: 0, marginTop: '3px' }} />
                      <div style={{ fontSize: '14px', lineHeight: 1.5 }}>
                        <strong style={{ color: 'var(--text-heading, #0A2D73)' }}>{item.title}: </strong>
                        <span style={{ color: 'var(--text-body, #4A5568)' }}>{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Philosophy Card */}
          <ScrollReveal direction="right">
            <div style={{
              background: 'var(--bg-card, #FFFFFF)',
              borderRadius: '16px',
              padding: '40px',
              height: '100%',
              boxShadow: 'var(--card-shadow, 0 4px 20px rgba(0,0,0,0.04))',
              border: '1px solid var(--border-color, #E2E8F0)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ display: 'inline-block', background: 'rgba(13,58,138,0.1)', color: '#0D3A8A', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '999px', marginBottom: '20px', textTransform: 'uppercase' }}>
                  Our Philosophy
                </span>
                <h3 style={{ fontSize: 'var(--text-h3)', fontWeight: 800, color: 'var(--text-heading, #0A2D73)', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                  Our Basic Philosophy
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.7, marginBottom: '24px' }}>
                  We are driven by three fundamental principles to maintain respectability, support operator infrastructure, and deliver top service:
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {[
                    { label: 'Respectability & Credibility', desc: 'To attain and maintain a position of unquestionable respectability and credibility in our field.' },
                    { label: 'Infrastructure Access', desc: 'To facilitate the desire of equipment manufacturers and operators to build infrastructures that will serve each and every community to the fullest.' },
                    { label: 'Best Service, Reasonable Price', desc: 'To provide our clients with the best service available, at a reasonable price.' }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                      <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(13,58,138,0.1)', color: '#0D3A8A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '13px', flexShrink: 0 }}>
                        {idx + 1}
                      </div>
                      <div>
                        <h4 style={{ color: 'var(--text-heading, #0A2D73)', fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>{item.label}</h4>
                        <p style={{ fontSize: '14px', color: 'var(--text-body, #4A5568)', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ═══════ OFC CAPABILITIES & INFRASTRUCTURE ═══════ */}
      <Section bg="var(--bg-primary, #FFFFFF)">
        <Heading
          title="Optical Fiber Cable (OFC) Capabilities"
          subtitle="Specialized end-to-end fiber optic planning, civil works, deployment, testing, and lifecycle maintenance."
        />

        {/* Lead capability description */}
        <ScrollReveal>
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(10,45,115,0.03) 0%, rgba(217,4,27,0.03) 100%)',
              borderRadius: '16px',
              padding: '32px 28px',
              border: '1px solid var(--border-color, #E2E8F0)',
              maxWidth: '960px',
              margin: '0 auto 48px',
              textAlign: 'center',
            }}
          >
            <p style={{ fontSize: '15px', color: 'var(--text-body, #4A5568)', lineHeight: 1.8, marginBottom: '14px' }}>
              ICOM Engineering Solutions specializes in the installation and deployment of <strong>Optical Fiber Cable (OFC) networks</strong>. Our team of experienced Field Technicians and Project Managers has the technical expertise to plan, design, deploy, test, commission, maintain, troubleshoot, and upgrade fiber optic networks across diverse terrains and project environments.
            </p>
            <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.7 }}>
              Supported by modern machinery, specialized tools, and industry-standard testing equipment, we execute fiber optic deployment projects efficiently while maintaining the highest standards of quality, safety, reliability, and workmanship.
            </p>
          </div>
        </ScrollReveal>

        {/* 10 Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          {[
            {
              title: 'Fiber Optic Cable Installation',
              desc: 'Underground and aerial OFC cable installation across different terrains and rights-of-way.',
              icon: Cable,
            },
            {
              title: 'Fiber Network Planning and Design',
              desc: 'Planning and designing fiber networks based on project requirements, terrain profiling, and network objectives.',
              icon: Activity,
            },
            {
              title: 'Duct Calibration and Installation',
              desc: 'Duct preparation, calibration, installation, and high-velocity cable blowing/pulling activities.',
              icon: Zap,
            },
            {
              title: 'Trenching and Civil Works',
              desc: 'Civil works, road-crossing, and trench excavation required for underground fiber optic deployment.',
              icon: Layers,
            },
            {
              title: 'Last-Mile Fiber Deployment',
              desc: 'Reliable fiber connectivity from distribution points to end users and customer premises.',
              icon: Radio,
            },
            {
              title: 'FTTH (Fiber to the Home)',
              desc: 'End-to-end residential fiber deployment solutions, customer drop cables, and subscriber terminations.',
              icon: Home,
            },
            {
              title: 'FTTB (Fiber to the Building)',
              desc: 'Fiber deployment for commercial buildings, corporate offices, residential estates, and multi-tenant facilities.',
              icon: Building2,
            },
            {
              title: 'Fiber Testing and Commissioning',
              desc: 'OTDR testing, power measurement, link verification, fault identification, documentation, and commissioning.',
              icon: CheckCircle,
            },
            {
              title: 'Fiber Maintenance and Restoration',
              desc: 'Preventive and corrective maintenance, troubleshooting, fault localization, emergency restoration, and network recovery.',
              icon: RefreshCw,
            },
            {
              title: 'Fiber Network Upgrade and Expansion',
              desc: 'Modification, expansion, and capacity upgrade of existing fiber infrastructure to accommodate network growth.',
              icon: TrendingUp,
            },
          ].map((cap, i) => {
            const Icon = cap.icon;
            return (
              <ScrollReveal key={cap.title} delay={i * 0.04} className="h-full">
                <div
                  style={{
                    background: 'var(--bg-card, #FFFFFF)',
                    borderRadius: '14px',
                    padding: '24px',
                    border: '1px solid var(--border-color, #E2E8F0)',
                    boxShadow: 'var(--card-shadow, 0 2px 8px rgba(0,0,0,0.04))',
                    height: '100%',
                    display: 'flex',
                    gap: '16px',
                    alignItems: 'flex-start',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                  }}
                  className="hover:shadow-md hover:-translate-y-0.5"
                >
                  <div
                    style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '12px',
                      background: 'rgba(217,4,27,0.08)',
                      color: '#D9041B',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '15px',
                        fontWeight: 700,
                        color: 'var(--text-heading, #0A2D73)',
                        marginBottom: '6px',
                        fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
                      }}
                    >
                      {cap.title}
                    </h4>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-body, #4A5568)', lineHeight: 1.6 }}>
                      {cap.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Closing capability statement */}
        <ScrollReveal delay={0.2}>
          <div
            style={{
              marginTop: '40px',
              padding: '24px 28px',
              background: 'var(--bg-secondary, #F5F7FA)',
              borderRadius: '14px',
              borderLeft: '4px solid #D9041B',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
            }}
          >
            <p style={{ fontSize: '14px', color: 'var(--text-body, #4A5568)', lineHeight: 1.7 }}>
              Following installation and commissioning, our field teams remain equipped to provide ongoing maintenance, troubleshooting, fault restoration, and infrastructure upgrades, whether the requirement involves a short local deployment or fiber routes extending several miles.
            </p>
            <p style={{ fontSize: '13.5px', color: 'var(--text-heading, #0A2D73)', fontWeight: 600 }}>
              With the combination of experienced personnel, project management expertise, specialized equipment, and field deployment capability, ICOM Engineering Solutions is positioned to deliver complete end-to-end fiber optic solutions from planning and deployment through to maintenance and network expansion.
            </p>
          </div>
        </ScrollReveal>
      </Section>

      {/* ═══════ TIMELINE ═══════ */}
      <Section bg="var(--bg-primary, #FFFFFF)">
        <Heading title="Our Journey" subtitle="A track record of engineering innovation and milestone achievements since 2009." />

        <div className="timeline-wrapper">
          {/* Desktop central vertical line */}
          <div className="timeline-desktop-line" />

          {milestones.map((milestone, i) => {
            const isLast = i === milestones.length - 1;
            return (
              <ScrollReveal key={i} delay={i * 0.12}>
                <div className={`timeline-item ${i % 2 === 0 ? 'even' : 'odd'} ${isLast ? 'last' : ''}`}>
                  {/* Desktop center node */}
                  <div className="timeline-node">
                    <div className="timeline-node-inner" />
                  </div>

                  {/* Content card column */}
                  <div className="timeline-card-col">
                    <div className="timeline-card-box">
                      <div className="timeline-year-badge">
                        <Calendar style={{ width: '13px', height: '13px', color: '#D9041B', flexShrink: 0 }} />
                        <span>{milestone.year}</span>
                      </div>
                      <h3 className="timeline-card-title">
                        {milestone.title}
                      </h3>
                      <p className="timeline-card-desc">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Mobile-only center connecting indicator */}
                {!isLast && (
                  <div className="timeline-connector-mobile">
                    <div className="timeline-connector-line" />
                    <div className="timeline-connector-dot" />
                  </div>
                )}
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* ═══════ LEADERSHIP TEAM ═══════ */}
      <Section bg="var(--bg-secondary, #F5F7FA)">
        <Heading title="Leadership Team" subtitle="Experienced professionals driving engineering excellence." />

        {/* Responsive grid that works whether `team` has 1 member or many:
            centers a single card, wraps naturally into columns for more. */}
        <div className={`grid grid-cols-1 ${team.length > 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : ''} gap-6 justify-items-center`}>
          {team.map((member, i) => (
            <ScrollReveal key={member.id} delay={i * 0.1}>
              <motion.div whileHover={{ y: -6 }} style={{ cursor: 'pointer', maxWidth: '380px' }}>
                <div style={{
                  background: 'var(--bg-card, #FFFFFF)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  boxShadow: 'var(--card-shadow, 0 2px 12px rgba(0,0,0,0.06))',
                  border: '1px solid var(--border-color, #E2E8F0)',
                  transition: 'box-shadow 0.3s',
                }}>
                  {/* Rounded avatar container */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingTop: '32px',
                    background: 'transparent',
                  }}>
                    <div style={{
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      overflow: 'hidden',
                      border: '4px solid var(--border-color, #F5F7FA)',
                      boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
                      background: '#0A2D73',
                      position: 'relative',
                    }}>
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={member.name}
                          style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            display: 'block'
                          }}
                        />
                      ) : (
                        <div style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '100%',
                          height: '100%',
                        }}>
                          <span style={{ fontSize: '40px', fontWeight: 700, color: 'rgba(255,255,255,0.2)' }}>
                            {getInitials(member.name)}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div style={{ padding: '20px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '4px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                      {member.name}
                    </h3>
                    <p style={{ color: '#D9041B', fontWeight: 500, fontSize: '13px', marginBottom: '10px' }}>{member.title}</p>
                    <p style={{ fontSize: '13px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.6 }}>{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ═══════ CORE VALUES ═══════ */}
      <Section bg="var(--bg-primary, #FFFFFF)">
        <Heading title="Our Core Values" subtitle="The principles that guide everything we do." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {coreValues.map((value, i) => {
            const ValueIcon = value.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: 'var(--card-shadow, 0 12px 32px rgba(0,0,0,0.1))' }}
                  style={{
                    background: 'var(--bg-card, #FFFFFF)',
                    borderRadius: '14px',
                    padding: '28px 20px',
                    textAlign: 'center',
                    boxShadow: 'var(--card-shadow, 0 2px 8px rgba(0,0,0,0.04))',
                    border: '1px solid var(--border-color, #E2E8F0)',
                    height: '100%',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{
                    width: '52px',
                    height: '52px',
                    background: 'rgba(217,4,27,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 14px',
                  }}>
                    <ValueIcon style={{ width: '24px', height: '24px', color: '#D9041B' }} />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '10px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                    {value.title}
                  </h3>
                  <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.6 }}>{value.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* ═══════ CORPORATE PRINCIPLES & COMMITMENTS ═══════ */}
      <Section bg="var(--bg-secondary, #F5F7FA)">
        <Heading title="Corporate Commitments" subtitle="Our approach to quality, client success, and problem solving." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: 'Quality & Standard',
              desc: 'In achieving our set mission, ICOM puts quality and standards as a high priority, aligning processes to exceed international metrics.',
              icon: Award,
              color: 'rgba(13,58,138,0.1)',
              iconColor: '#0D3A8A'
            },
            {
              title: "Exceed Customers' Expectations",
              desc: 'Honoring the customer as our most important asset is our priority. We work hard to understand our customers\' needs, how their network infrastructures work, and how we can provide value to help them realize their potential.',
              icon: Users,
              color: 'rgba(217,4,27,0.1)',
              iconColor: '#D9041B'
            },
            {
              title: 'Creatively Solve Problems',
              desc: 'ICOM empowers its people to think creatively, enabling a diverse workforce that generates innovative decision-making for a broad spectrum of customers and partners.',
              icon: Lightbulb,
              color: 'rgba(13,58,138,0.1)',
              iconColor: '#0D3A8A'
            },
            {
              title: 'Knowledge & Experience',
              desc: 'By relying on our vast experience and seasoned industry technicians, ICOM can solve a range of network challenges to meet the needs of our customers.',
              icon: Shield,
              color: 'rgba(217,4,27,0.1)',
              iconColor: '#D9041B'
            },
            {
              title: 'Maximizing Opportunities',
              desc: 'Share knowledge, expertise, and relationships to open new doors of opportunity and to facilitate interaction among customers.',
              icon: Star,
              color: 'rgba(13,58,138,0.1)',
              iconColor: '#0D3A8A'
            },
            {
              title: 'Be Accountable',
              desc: 'Take responsibility, make things happen, admit to mistakes, and commit to learning and growth.',
              icon: CheckCircle,
              color: 'rgba(217,4,27,0.1)',
              iconColor: '#D9041B'
            }
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 0.08}>
                {/* Hover styling moved to a React-controlled className + CSS
                    variables so ALL text swaps to white with the background,
                    instead of only the background flipping (previous version
                    left navy/gray text unreadable on the navy hover state). */}
                <div
                  className="icom-commitment-card"
                  style={{
                    background: 'var(--bg-card, #FFFFFF)',
                    borderRadius: '16px',
                    padding: '32px 28px',
                    height: '100%',
                    border: '1px solid var(--border-color, #E2E8F0)',
                    transition: 'all 0.3s',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ width: '20px', height: '20px', color: item.iconColor }} />
                    </div>
                    <h3 className="icom-commitment-title" style={{ fontSize: '16.5px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                      {item.title}
                    </h3>
                  </div>
                  <p className="icom-commitment-desc" style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', opacity: 0.9, lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Scoped hover styles: background AND text flip together, and are
            skipped entirely for users who prefer reduced motion. */}
        <style jsx>{`
          .icom-commitment-card:hover {
            background: #0A2D73 !important;
            box-shadow: 0 12px 32px rgba(10, 45, 115, 0.12);
          }
          .icom-commitment-card:hover .icom-commitment-title,
          .icom-commitment-card:hover .icom-commitment-desc {
            color: #FFFFFF !important;
          }
          @media (prefers-reduced-motion: reduce) {
            .icom-commitment-card {
              transition: none !important;
            }
          }
        `}</style>
      </Section>

      {/* ═══════ KEY CLIENTS ═══════ */}
      <Section bg="var(--bg-primary, #FFFFFF)">
        <Heading title="Clients We've Served" />

        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px', justifyContent: 'center' }}>
            {clients.map((client, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <ClientTile name={client} />
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </Section>

      {/* ═══════ CTA ═══════ */}
      <CTABanner
        title="Partner With Us"
        subtitle="Join the leading organizations that trust ICOM for their engineering and technology needs."
      />
    </>
  );
}