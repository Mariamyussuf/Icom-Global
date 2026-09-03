'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageSwitcher({ variant = 'dropdown', className = '' }) {
  const { language, setLanguage, languages, currentLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close dropdown on ESC key
  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  // Variant: Mobile segmented / pill buttons for mobile menu drawer
  if (variant === 'mobile') {
    return (
      <div className={`w-full ${className}`} style={{ padding: '8px 0' }}>
        <div
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '10px',
            fontWeight: 600,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Globe size={14} />
          <span>Language / Google Translate</span>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(90px, 1fr))',
            gap: '8px',
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '8px',
            borderRadius: '10px',
            border: '1px solid rgba(255, 255, 255, 0.15)',
            maxHeight: '260px',
            overflowY: 'auto',
          }}
        >
          {languages.map((lang) => {
            const isSelected = language === lang.code;
            return (
              <button
                key={lang.code}
                type="button"
                onClick={() => setLanguage(lang.code)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '6px',
                  padding: '8px 6px',
                  borderRadius: '8px',
                  border: 'none',
                  background: isSelected ? '#D9041B' : 'transparent',
                  color: '#FFFFFF',
                  fontWeight: isSelected ? 700 : 500,
                  fontSize: '12px',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isSelected ? '0 2px 8px rgba(217, 4, 27, 0.4)' : 'none',
                  whiteSpace: 'nowrap',
                }}
                aria-pressed={isSelected}
              >
                <span style={{ fontSize: '14px' }}>{lang.flag}</span>
                <span>{lang.short}</span>
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // Variant: Footer style
  if (variant === 'footer') {
    return (
      <div className={`flex flex-wrap items-center gap-2 ${className}`}>
        <Globe size={15} style={{ color: 'rgba(255, 255, 255, 0.6)' }} />
        <div className="flex flex-wrap items-center gap-1.5">
          {languages.map((lang, idx) => {
            const isSelected = language === lang.code;
            return (
              <span key={lang.code} className="flex items-center">
                <button
                  type="button"
                  onClick={() => setLanguage(lang.code)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    padding: '3px 6px',
                    fontSize: '12px',
                    color: isSelected ? '#FFFFFF' : 'rgba(255, 255, 255, 0.55)',
                    fontWeight: isSelected ? 700 : 400,
                    cursor: 'pointer',
                    borderRadius: '4px',
                    transition: 'all 0.2s',
                    textDecoration: isSelected ? 'underline' : 'none',
                    textUnderlineOffset: '3px',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) e.currentTarget.style.color = 'rgba(255, 255, 255, 0.55)';
                  }}
                >
                  <span style={{ marginRight: '4px' }}>{lang.flag}</span>
                  {lang.nativeName}
                </button>
                {idx < languages.length - 1 && (
                  <span style={{ color: 'rgba(255, 255, 255, 0.2)', fontSize: '11px' }}>&bull;</span>
                )}
              </span>
            );
          })}
        </div>
      </div>
    );
  }

  // Default Variant: Desktop Navbar Dropdown
  return (
    <div ref={dropdownRef} className={`relative ${className}`} style={{ position: 'relative' }}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
          padding: '7px 12px',
          borderRadius: '8px',
          fontSize: '13px',
          fontWeight: 600,
          color: '#0A2D73',
          backgroundColor: isOpen ? 'rgba(10, 45, 115, 0.08)' : 'rgba(10, 45, 115, 0.04)',
          border: '1px solid rgba(10, 45, 115, 0.15)',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'rgba(10, 45, 115, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(10, 45, 115, 0.3)';
        }}
        onMouseLeave={(e) => {
          if (!isOpen) {
            e.currentTarget.style.backgroundColor = 'rgba(10, 45, 115, 0.04)';
            e.currentTarget.style.borderColor = 'rgba(10, 45, 115, 0.15)';
          }
        }}
        title="Change language with Google Translate"
      >
        <Globe size={15} style={{ color: '#D9041B' }} />
        <span style={{ fontSize: '14px' }}>{currentLanguage.flag}</span>
        <span style={{ fontWeight: 600 }}>{currentLanguage.short}</span>
        <ChevronDown
          size={13}
          style={{
            color: '#6B7A8D',
            transition: 'transform 0.2s ease',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            style={{
              position: 'absolute',
              top: 'calc(100% + 6px)',
              right: 0,
              width: '220px',
              maxHeight: '340px',
              overflowY: 'auto',
              backgroundColor: '#FFFFFF',
              borderRadius: '10px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.14), 0 2px 6px rgba(0, 0, 0, 0.04)',
              border: '1px solid #E2E8F0',
              padding: '6px',
              zIndex: 100,
            }}
            role="menu"
            aria-orientation="vertical"
          >
            <div
              style={{
                padding: '6px 10px',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: '#6B7A8D',
                borderBottom: '1px solid #F1F5F9',
                marginBottom: '4px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <span>Translate Page</span>
              <span style={{ fontSize: '10px', color: '#94A3B8', textTransform: 'none', fontWeight: 500 }}>Google</span>
            </div>

            {languages.map((lang) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  type="button"
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '8px 10px',
                    borderRadius: '6px',
                    border: 'none',
                    backgroundColor: isSelected ? 'rgba(217, 4, 27, 0.08)' : 'transparent',
                    color: isSelected ? '#D9041B' : '#0A2D73',
                    fontSize: '13px',
                    fontWeight: isSelected ? 600 : 500,
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.15s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = '#F8FAFC';
                      e.currentTarget.style.color = '#D9041B';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.color = '#0A2D73';
                    }
                  }}
                  role="menuitem"
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '15px' }}>{lang.flag}</span>
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {lang.nativeName}
                    </span>
                  </div>
                  {isSelected && <Check size={14} style={{ color: '#D9041B', flexShrink: 0 }} />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
