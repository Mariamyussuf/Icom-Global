'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ScrollReveal';
import ProjectCard from '@/components/ProjectCard';
import CTABanner from '@/components/CTABanner';
import { projects } from '@/data/projects';

const categories = [
  { key: 'all', label: 'All' },
  { key: 'telecom', label: 'Telecom' },
  { key: 'solar', label: 'Solar' },
  { key: 'electrical', label: 'Electrical' },
  { key: 'it', label: 'IT' },
  { key: 'infrastructure', label: 'Infrastructure' },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <>
      {/* Hero Banner */}
      <section style={{
        backgroundColor: '#0F1B2D',
        marginTop: '-80px',
        paddingTop: '160px',
        paddingBottom: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.05 }}>
          <div style={{ position: 'absolute', top: '33%', right: '25%', width: '288px', height: '288px', border: '1px solid white', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '25%', left: '33%', width: '192px', height: '192px', border: '1px solid white', borderRadius: '50%' }} />
        </div>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px', position: 'relative', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ display: 'inline-block', background: 'rgba(185,28,44,0.15)', color: '#B91C2C', fontSize: '14px', fontWeight: 600, padding: '8px 20px', borderRadius: '999px', marginBottom: '24px' }}>
              Our Work
            </span>
            <h1 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 700, color: '#FFFFFF', marginBottom: '20px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)", lineHeight: 1.15 }}>
              Projects Portfolio
            </h1>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.6)', maxWidth: '640px', margin: '0 auto', lineHeight: 1.7 }}>
              Explore our track record of successful project delivery across multiple sectors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <div className="px-6 md:px-12 py-16 md:py-20" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          {/* Filter Tabs */}
          <ScrollReveal>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '48px' }}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveFilter(cat.key)}
                  style={{
                    padding: '10px 24px',
                    borderRadius: '999px',
                    fontWeight: 500,
                    fontSize: '14px',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    background: activeFilter === cat.key ? '#B91C2C' : '#F4F6F9',
                    color: activeFilter === cat.key ? '#FFFFFF' : '#0F1B2D',
                    boxShadow: activeFilter === cat.key ? '0 4px 12px rgba(185,28,44,0.3)' : 'none',
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Projects Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', padding: '64px 0' }}>
              <p style={{ color: '#6B7A8D', fontSize: '16px' }}>No projects found in this category.</p>
            </motion.div>
          )}
        </div>
      </section>

      <CTABanner
        title="Have a Project in Mind?"
        subtitle="Contact us today to discuss your engineering and technology needs."
        buttonText="Discuss Your Project"
      />
    </>
  );
}
