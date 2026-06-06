'use client';

import { motion } from 'framer-motion';
import {
  Award, Users, Heart, Target, Shield, Lightbulb, Star,
  CheckCircle, Calendar, Smile, TrendingUp, Hand, Gem
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
  { year: '2012', title: 'Officially Incorporated', description: 'Incorporated as a limited liability company under RC 1043812, establishing formal corporate governance and expanding service capabilities.' },
  { year: 'Present', title: 'Industry Leader', description: 'Today, ICOM serves leading operators and institutions across multiple sectors with a comprehensive suite of engineering and technology solutions.' },
];

const clients = [
  'Andrews', 'Ericsson', 'Zain', 'MTN', 'RTcom',
  'Starcomms', 'Reltel', 'Mtel', 'Visafone', 'ZTE', 'Huawei',
];

const clientLogos = {
  Andrews: '/images/clients/andrews.png',
  Ericsson: '/images/clients/ericsson.png',
  Zain: '/images/clients/zain.png',
  MTN: '/images/clients/mtn.png',
  RTcom: '/images/clients/rtcom.png',
  Starcomms: '/images/clients/starcomms.png',
  Reltel: '/images/clients/reltel.png',
  Mtel: '/images/clients/mtel.png',
  Visafone: '/images/clients/visafone.png',
  ZTE: '/images/clients/zte.png',
  Huawei: '/images/clients/huawei.png',
};

/* ─── Reusable section wrapper ─── */
function Section({ children, bg = '#FFFFFF' }) {
  return (
    <section style={{ backgroundColor: bg }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 40px' }}>
        {children}
      </div>
    </section>
  );
}

/* ─── Section heading ─── */
function Heading({ title, subtitle, light = false, centered = true }) {
  return (
    <div style={{ textAlign: centered ? 'center' : 'left', marginBottom: '56px' }}>
      <div style={{ width: '48px', height: '3px', background: '#D9041B', borderRadius: '2px', margin: centered ? '0 auto 20px' : '0 0 20px', }} />
      <h2 style={{ fontSize: 'clamp(26px, 3vw, 36px)', fontWeight: 700, color: light ? '#fff' : '#0A2D73', marginBottom: subtitle ? '14px' : 0, fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
        {title}
      </h2>
      {subtitle && (
        <p style={{ fontSize: '16px', color: light ? 'rgba(255,255,255,0.6)' : '#6B7A8D', maxWidth: '560px', margin: centered ? '0 auto' : '0', lineHeight: 1.7 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ═══════ HERO ═══════ */}
      <section style={{
        backgroundColor: '#0A2D73',
        marginTop: '-80px',
        paddingTop: '160px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Decorative circles */}
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '33%', right: '25%', width: '288px', height: '288px', border: '1px solid white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '25%', left: '33%', width: '192px', height: '192px', border: '1px solid white', borderRadius: '50%' }} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px', position: 'relative', textAlign: 'center' }}>
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
              fontSize: 'clamp(32px, 4vw, 52px)',
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
              Since 2009, ICOM Technical Service Support Limited has been at the forefront of integrated engineering solutions across Nigeria.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ═══════ WHO WE ARE ═══════ */}
      <Section bg="#FFFFFF">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — 2x2 stat grid */}
          <ScrollReveal direction="left">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { value: 'Est. 2009', label: 'Year Founded', accent: '#D9041B' },
                { value: 'RC 1043812', label: 'Registration', accent: '#0D3A8A' },
                { value: 'Victoria Island', label: 'Lagos, Nigeria', accent: '#0D3A8A' },
                { value: '15+ Years', label: 'Experience', accent: '#D9041B' },
              ].map((stat) => (
                <div key={stat.label} style={{
                  background: '#0A2D73',
                  borderRadius: '14px',
                  padding: '28px 20px',
                  textAlign: 'center',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <p style={{
                    fontSize: stat.value.length > 10 ? '18px' : '22px',
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '4px',
                    fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
                  }}>
                    {stat.value}
                  </p>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* Right — Content */}
          <div>
            <Heading title="Who We Are" centered={false} />
            <ScrollReveal delay={0.1}>
              <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.8, marginBottom: '16px' }}>
                ICOM Technical Service Support Limited is a wholly Nigerian-owned company that has been operating since June 2009, incorporated in June 2012 under RC 1043812. Headquartered in Victoria Island, Lagos, we have grown to become a trusted partner for telecommunications operators, government institutions, and corporate organizations across Nigeria.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.8, marginBottom: '16px' }}>
                Our multidisciplinary team of engineers and technicians delivers end-to-end solutions spanning wireless networks, fiber optics, power infrastructure, repeaters, IT services, and project management. We combine deep technical expertise with a commitment to quality, safety, and customer satisfaction.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.3}>
              <p style={{ fontSize: '15px', color: '#4A5568', lineHeight: 1.8 }}>
                We are committed to providing strategic and technical value through innovative, cost-effective solutions that meet international quality standards while addressing the unique challenges of the African market.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </Section>

      {/* ═══════ MISSION & PHILOSOPHY ═══════ */}
      <Section bg="#F5F7FA">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Mission Card */}
          <ScrollReveal direction="left">
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '40px',
              height: '100%',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ display: 'inline-block', background: 'rgba(217,4,27,0.1)', color: '#D9041B', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '999px', marginBottom: '20px', textTransform: 'uppercase' }}>
                  Mission Statement
                </span>
                <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 800, color: '#0A2D73', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)", lineHeight: 1.35 }}>
                  &ldquo;Our mission is to provide high quality engineering solutions and consulting services, surpassing the requirements and expectations of our clients.&rdquo;
                </h3>
                <p style={{ fontSize: '14.5px', color: '#6B7A8D', lineHeight: 1.7, marginBottom: '24px' }}>
                  To accomplish this mission, we strive to be the premier provider of groundbreaking network engineering, system integration, and technical services in our business areas.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { title: 'Engineering Solutions', desc: 'Our services within the Nigeria telecoms industry will continually be targeted at deploying quality engineering solutions.' },
                    { title: 'Consulting Services', desc: 'We will provide effective and customized consulting services to our different clients within the Nigerian telecoms industry.' },
                    { title: 'Requirements and Expectations', desc: 'We will continually strive to provide services to our clients in such a manner that it exceeds their expectations and requirements.' }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <CheckCircle style={{ width: '18px', height: '18px', color: '#D9041B', flexShrink: 0, marginTop: '3px' }} />
                      <div style={{ fontSize: '14px', lineHeight: 1.5 }}>
                        <strong style={{ color: '#0A2D73' }}>{item.title}: </strong>
                        <span style={{ color: '#4A5568' }}>{item.desc}</span>
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
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '40px',
              height: '100%',
              boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              border: '1px solid #E2E8F0',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{ display: 'inline-block', background: 'rgba(13,58,138,0.1)', color: '#0D3A8A', fontSize: '12px', fontWeight: 700, padding: '6px 16px', borderRadius: '999px', marginBottom: '20px', textTransform: 'uppercase' }}>
                  Our Philosophy
                </span>
                <h3 style={{ fontSize: 'clamp(18px, 2.5vw, 22px)', fontWeight: 800, color: '#0A2D73', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                  Our Basic Philosophy
                </h3>
                <p style={{ fontSize: '14.5px', color: '#6B7A8D', lineHeight: 1.7, marginBottom: '24px' }}>
                  We are driven by three fundamental principles to maintain respectability, support operator infrastructure, and deliver top service.
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
                        <h4 style={{ color: '#0A2D73', fontSize: '14.5px', fontWeight: 700, marginBottom: '2px' }}>{item.label}</h4>
                        <p style={{ fontSize: '13.5px', color: '#4A5568', lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      {/* ═══════ TIMELINE ═══════ */}
      <Section bg="#FFFFFF">
        <Heading title="Our Journey" />

        <div style={{ maxWidth: '800px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical line */}
          <div 
            className="left-4 md:left-1/2 transform -translate-x-1/2"
            style={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              width: '2px',
              background: '#D9041B',
            }} 
          />

          {milestones.map((milestone, i) => (
            <ScrollReveal key={i} delay={i * 0.2}>
              <div 
                className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-start md:items-center justify-start relative mb-12`}
              >
                {/* Content card */}
                <div 
                  className={`w-full md:w-[calc(50%-32px)] pl-12 md:pl-0 ${i % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}
                >
                  <div style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '24px',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    border: '1px solid #E2E8F0',
                    textAlign: 'left'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                      <Calendar style={{ width: '18px', height: '18px', color: '#D9041B' }} />
                      <span style={{ color: '#D9041B', fontWeight: 700, fontSize: '16px' }}>{milestone.year}</span>
                    </div>
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#0A2D73', marginBottom: '8px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                      {milestone.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6B7A8D', lineHeight: 1.65 }}>{milestone.description}</p>
                  </div>
                </div>

                {/* Center node */}
                <div 
                  className="absolute left-4 md:left-1/2 transform -translate-x-1/2"
                  style={{
                    top: '24px',
                    zIndex: 2,
                  }}
                >
                  <div style={{
                    width: '32px',
                    height: '32px',
                    background: '#D9041B',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(217,4,27,0.3)',
                  }}>
                    <div style={{ width: '10px', height: '10px', background: '#fff', borderRadius: '50%' }} />
                  </div>
                </div>

                {/* Empty space */}
                <div className="hidden md:block w-[calc(50%-32px)]" />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* ═══════ LEADERSHIP TEAM ═══════ */}
      <Section bg="#F5F7FA">
        <Heading title="Leadership Team" subtitle="Experienced professionals driving engineering excellence." />

        <div className="flex justify-center">
          <div className="max-w-sm w-full">
            {team.map((member, i) => (
              <ScrollReveal key={member.id} delay={i * 0.1}>
                <motion.div whileHover={{ y: -6 }} style={{ cursor: 'pointer' }}>
                  <div style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
                    border: '1px solid #E2E8F0',
                    transition: 'box-shadow 0.3s',
                  }}>
                    {/* Rounded avatar container */}
                    <div style={{
                      display: 'flex',
                      justifyContent: 'center',
                      paddingTop: '32px',
                      background: '#FFFFFF',
                    }}>
                      <div style={{
                        width: '180px',
                        height: '180px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid #F5F7FA',
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
                              objectPosition: 'top', // Ensures the top of the head is not cut off
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
                              {member.name.split(' ').filter((_, idx) => idx > 0).map(n => n[0]).join('')}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    <div style={{ padding: '20px' }}>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0A2D73', marginBottom: '4px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                        {member.name}
                      </h3>
                      <p style={{ color: '#D9041B', fontWeight: 500, fontSize: '13px', marginBottom: '10px' }}>{member.title}</p>
                      <p style={{ fontSize: '13px', color: '#6B7A8D', lineHeight: 1.6 }}>{member.bio}</p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════ CORE VALUES ═══════ */}
      <Section bg="#FFFFFF">
        <Heading title="Our Core Values" subtitle="The principles that guide everything we do." />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {coreValues.map((value, i) => {
            const ValueIcon = value.icon;
            return (
              <ScrollReveal key={i} delay={i * 0.06}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.1)' }}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '14px',
                    padding: '28px 20px',
                    textAlign: 'center',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                    border: '1px solid #E2E8F0',
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
                  <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0A2D73', marginBottom: '6px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                    {value.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#6B7A8D', lineHeight: 1.6 }}>{value.description}</p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* ═══════ CORPORATE PRINCIPLES & COMMITMENTS ═══════ */}
      <Section bg="#F5F7FA">
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
                <div style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '32px 28px',
                  height: '100%',
                  border: '1px solid #E2E8F0',
                  transition: 'all 0.3s'
                }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#0A2D73'; e.currentTarget.style.color = '#FFFFFF'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(10,45,115,0.12)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.color = 'inherit'; e.currentTarget.style.boxShadow = 'none'; }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon style={{ width: '20px', height: '20px', color: item.iconColor }} />
                    </div>
                    <h3 style={{ fontSize: '16.5px', fontWeight: 700, color: 'inherit', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'inherit', opacity: 0.8, lineHeight: 1.65 }}>
                    {item.desc}
                  </p>
                </div>
              </ScrollReveal>
            )
          })}
        </div>
      </Section>

      {/* ═══════ KEY CLIENTS ═══════ */}
      <Section bg="#FFFFFF">
        <Heading title="Clients We've Served" />

        <ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px', justifyContent: 'center' }}>
            {clients.map((client, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <motion.div
                  whileHover={{ y: -4, boxShadow: '0 12px 28px rgba(0,0,0,0.08)' }}
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '12px',
                    border: '1px solid #E2E8F0',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '16px',
                    transition: 'all 0.3s',
                    cursor: 'default',
                  }}
                >
                  {clientLogos[client] ? (
                    <img
                      src={clientLogos[client]}
                      alt={`${client} logo`}
                      style={{
                        maxWidth: '85%',
                        maxHeight: '75%',
                        objectFit: 'contain',
                        display: 'block',
                      }}
                    />
                  ) : (
                    <span style={{ fontWeight: 700, color: '#0A2D73', fontSize: '14px' }}>{client}</span>
                  )}
                </motion.div>
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
