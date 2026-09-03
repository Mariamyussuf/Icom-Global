'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function ProjectCard({ project, index = 0 }) {
  const { t } = useLanguage();
  const { title, category, description, image, images = [], tags = [] } = project || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const imgList = images.length > 0 ? images : (image ? [image] : []);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
        style={{ height: '100%' }}
        onClick={() => setModalOpen(true)}
      >
        <div style={{
          background: 'var(--bg-card, #FFFFFF)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: 'var(--card-shadow, 0 2px 8px rgba(0,0,0,0.06))',
          border: '1px solid var(--border-color, #E2E8F0)',
          height: '100%',
          transition: 'box-shadow 0.3s, background-color 0.3s',
          cursor: 'pointer',
          position: 'relative',
        }}>
          {/* Image Container with Slider */}
          <div style={{ height: '200px', overflow: 'hidden', position: 'relative', background: '#0A2D73' }}>
            {imgList.length > 0 ? (
              <img 
                src={imgList[currentImageIndex]} 
                alt={`${title} - image ${currentImageIndex + 1}`} 
                loading="lazy" 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'opacity 0.3s' }} 
              />
            ) : (
              <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '40px', color: 'rgba(255,255,255,0.15)', fontWeight: 800 }}>{title?.charAt(0)}</span>
              </div>
            )}

            {/* Left Arrow */}
            {imgList.length > 1 && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev - 1 + imgList.length) % imgList.length);
                }}
                style={{
                  position: 'absolute', left: '8px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(10,45,115,0.65)', color: '#fff', border: 'none', borderRadius: '50%',
                  width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 10, transition: 'background 0.2s', fontSize: '14px',
                  backdropFilter: 'blur(4px)', outline: 'none'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#D9041B')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(10,45,115,0.65)')}
              >
                &#10094;
              </button>
            )}

            {/* Right Arrow */}
            {imgList.length > 1 && (
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex((prev) => (prev + 1) % imgList.length);
                }}
                style={{
                  position: 'absolute', right: '8px', top: '50%', transform: 'translateY(-50%)',
                  background: 'rgba(10,45,115,0.65)', color: '#fff', border: 'none', borderRadius: '50%',
                  width: '30px', height: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 10, transition: 'background 0.2s', fontSize: '14px',
                  backdropFilter: 'blur(4px)', outline: 'none'
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#D9041B')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(10,45,115,0.65)')}
              >
                &#10095;
              </button>
            )}

            {/* Indicators */}
            {imgList.length > 1 && (
              <div style={{
                position: 'absolute', bottom: '10px', left: '50%', transform: 'translateX(-50%)',
                display: 'flex', gap: '6px', zIndex: 10
              }}>
                {imgList.map((_, idx) => (
                  <div 
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentImageIndex(idx);
                    }}
                    style={{
                      width: '6px', height: '6px', borderRadius: '50%',
                      background: idx === currentImageIndex ? '#D9041B' : 'rgba(255,255,255,0.5)',
                      cursor: 'pointer', transition: 'all 0.2s',
                      transform: idx === currentImageIndex ? 'scale(1.2)' : 'none'
                    }}
                  />
                ))}
              </div>
            )}

            {/* Category badge */}
            {category && (
              <span style={{
                position: 'absolute', top: '12px', right: '12px',
                padding: '4px 12px', background: '#D9041B', color: '#FFFFFF',
                fontSize: '11px', fontWeight: 600, borderRadius: '999px',
                textTransform: 'capitalize', zIndex: 10
              }}>
                {category}
              </span>
            )}
          </div>

          {/* Content */}
          <div style={{ padding: '24px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text-heading, #0A2D73)', marginBottom: '10px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
              {title}
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted, #6B7A8D)', lineHeight: 1.6, marginBottom: '14px' }}>
              {description}
            </p>

            {/* Tags */}
            {tags.length > 0 && (
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
                {tags.map((tag) => (
                  <span key={tag} style={{
                    padding: '4px 10px', background: 'var(--bg-secondary, #F5F7FA)', color: 'var(--text-heading, #0A2D73)',
                    fontSize: '11px', fontWeight: 500, borderRadius: '999px', border: '1px solid var(--border-color, #E2E8F0)',
                  }}>
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <span style={{ fontSize: '13px', fontWeight: 600, color: '#D9041B' }}>{t('common.viewDetails', 'View Details')}</span>
          </div>
        </div>
      </motion.div>

      {/* Details Overlay Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalOpen(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              backgroundColor: 'var(--modal-overlay, rgba(10, 45, 115, 0.45))',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '16px',
            }}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '680px',
                background: 'var(--modal-bg, #FFFFFF)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 24px 64px rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--border-color, #E2E8F0)',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                maxHeight: '88vh',
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '14px',
                  right: '14px',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.92)',
                  border: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  zIndex: 110,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  color: '#0A2D73',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.color = '#FFFFFF'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255, 255, 255, 0.92)'; e.currentTarget.style.color = '#0A2D73'; }}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Large Image Slider */}
              <div style={{ height: 'clamp(200px, 35vh, 320px)', position: 'relative', background: '#0A2D73', flexShrink: 0 }}>
                {imgList.length > 0 ? (
                  <img
                    src={imgList[currentImageIndex]}
                    alt={`${title} - detail image ${currentImageIndex + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: '64px', color: 'rgba(255,255,255,0.15)', fontWeight: 800 }}>{title?.charAt(0)}</span>
                  </div>
                )}

                {/* Left Arrow */}
                {imgList.length > 1 && (
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev - 1 + imgList.length) % imgList.length)}
                    style={{
                      position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)',
                      background: 'rgba(10,45,115,0.65)', color: '#fff', border: 'none', borderRadius: '50%',
                      width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', zIndex: 10, transition: 'background 0.2s', fontSize: '16px',
                      backdropFilter: 'blur(4px)', outline: 'none'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(10,45,115,0.65)')}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={22} />
                  </button>
                )}

                {/* Right Arrow */}
                {imgList.length > 1 && (
                  <button
                    onClick={() => setCurrentImageIndex((prev) => (prev + 1) % imgList.length)}
                    style={{
                      position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)',
                      background: 'rgba(10,45,115,0.65)', color: '#fff', border: 'none', borderRadius: '50%',
                      width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center',
                      cursor: 'pointer', zIndex: 10, transition: 'background 0.2s', fontSize: '16px',
                      backdropFilter: 'blur(4px)', outline: 'none'
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#D9041B')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(10,45,115,0.65)')}
                    aria-label="Next image"
                  >
                    <ChevronRight size={22} />
                  </button>
                )}

                {/* Indicators */}
                {imgList.length > 1 && (
                  <div style={{
                    position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)',
                    display: 'flex', gap: '8px', zIndex: 10
                  }}>
                    {imgList.map((_, idx) => (
                      <div
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        style={{
                          width: '8px', height: '8px', borderRadius: '50%',
                          background: idx === currentImageIndex ? '#D9041B' : 'rgba(255,255,255,0.5)',
                          cursor: 'pointer', transition: 'all 0.2s',
                          transform: idx === currentImageIndex ? 'scale(1.2)' : 'none'
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>

              {/* Scrollable details */}
              <div className="p-5 sm:p-8" style={{ overflowY: 'auto' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  background: 'rgba(217, 4, 27, 0.1)',
                  color: '#D9041B',
                  fontSize: '11px',
                  fontWeight: 700,
                  borderRadius: '999px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  marginBottom: '14px',
                }}>
                  {category}
                </span>
                
                <h2 style={{
                  fontSize: 'var(--text-h3)',
                  fontWeight: 800,
                  color: 'var(--text-heading, #0A2D73)',
                  marginBottom: '16px',
                  fontFamily: "var(--font-heading, 'DM Sans', sans-serif)",
                  lineHeight: 1.25,
                }}>
                  {title}
                </h2>

                <p style={{
                  fontSize: '14px',
                  color: 'var(--text-body, #4A5568)',
                  lineHeight: 1.7,
                  marginBottom: '20px',
                }}>
                  {description}
                </p>

                {/* Tags */}
                {tags.length > 0 && (
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                    {tags.map((tag) => (
                      <span key={tag} style={{
                        padding: '6px 14px', background: 'var(--bg-secondary, #F5F7FA)', color: 'var(--text-heading, #0A2D73)',
                        fontSize: '12px', fontWeight: 600, borderRadius: '999px', border: '1px solid var(--border-color, #E2E8F0)',
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Inquiry Link */}
                <Link
                  href={`/contact?subject=${encodeURIComponent(`Inquiry regarding Project: ${title}`)}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    width: '100%',
                    justifyContent: 'center',
                    padding: '14px',
                    background: '#0A2D73',
                    color: '#FFFFFF',
                    fontWeight: 600,
                    fontSize: '15px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.3s',
                    boxShadow: '0 4px 12px rgba(10,45,115,0.15)',
                    minHeight: '48px',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#D9041B'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(217,4,27,0.3)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#0A2D73'; e.currentTarget.style.boxShadow = '0 4px 12px rgba(10,45,115,0.15)'; }}
                >
                  {t('projectsPage.inquireBtn', 'Inquire About This Project')} <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
