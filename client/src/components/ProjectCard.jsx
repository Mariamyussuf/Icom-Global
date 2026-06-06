'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index = 0 }) {
  const { title, category, description, image, images = [], tags = [] } = project || {};
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imgList = images.length > 0 ? images : (image ? [image] : []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{ y: -6, boxShadow: '0 16px 40px rgba(0,0,0,0.1)' }}
      style={{ height: '100%' }}
    >
      <div style={{
        background: '#FFFFFF',
        borderRadius: '14px',
        overflow: 'hidden',
        boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
        border: '1px solid #E2E8F0',
        height: '100%',
        transition: 'box-shadow 0.3s',
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
          <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#0A2D73', marginBottom: '8px', fontFamily: "var(--font-heading, 'DM Sans', sans-serif)" }}>
            {title}
          </h3>
          <p style={{ fontSize: '14px', color: '#6B7A8D', lineHeight: 1.6, marginBottom: '14px' }}>
            {description}
          </p>

          {/* Tags */}
          {tags.length > 0 && (
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
              {tags.map((tag) => (
                <span key={tag} style={{
                  padding: '4px 10px', background: '#F5F7FA', color: '#0A2D73',
                  fontSize: '11px', fontWeight: 500, borderRadius: '999px',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          )}

          <span style={{ fontSize: '13px', fontWeight: 600, color: '#D9041B' }}>View Details</span>
        </div>
      </div>
    </motion.div>
  );
}
