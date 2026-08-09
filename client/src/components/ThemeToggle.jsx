'use client';

import { useTheme } from './ThemeProvider';
import { Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ThemeToggle({ className = '', style = {} }) {
  const { resolvedTheme, toggleTheme, mounted } = useTheme();

  const isDark = mounted && resolvedTheme === 'dark';

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={className}
      aria-label={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      style={{
        /* Touch target wrapper: 44px height for touch accessibility */
        minWidth: '44px',
        minHeight: '44px',
        padding: '6px 4px',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'transparent',
        border: 'none',
        cursor: 'pointer',
        outline: 'none',
        WebkitTapHighlightColor: 'transparent',
        ...style,
      }}
    >
      {/* Creative Pill Track */}
      <div
        style={{
          width: '50px',
          height: '26px',
          borderRadius: '999px',
          padding: '3px',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          background: isDark
            ? 'linear-gradient(135deg, #091738 0%, #1E1B4B 100%)'
            : 'linear-gradient(135deg, #BAE6FD 0%, #FDE68A 100%)',
          boxShadow: isDark
            ? 'inset 0 2px 4px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.15)'
            : 'inset 0 2px 4px rgba(0,0,0,0.1), 0 0 0 1px rgba(10,45,115,0.15)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          overflow: 'hidden',
        }}
      >
        {/* Dark mode cosmic star details */}
        {isDark && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.8 }}>
            <span style={{ position: 'absolute', top: '5px', left: '8px', width: '2px', height: '2px', background: '#FFFFFF', borderRadius: '50%', boxShadow: '0 0 2px #FFF' }} />
            <span style={{ position: 'absolute', bottom: '6px', left: '14px', width: '2px', height: '2px', background: '#94A3B8', borderRadius: '50%' }} />
            <span style={{ position: 'absolute', top: '7px', left: '20px', width: '1.5px', height: '1.5px', background: '#FFFFFF', borderRadius: '50%' }} />
          </div>
        )}

        {/* Light mode sun ray highlights */}
        {!isDark && (
          <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.6 }}>
            <span style={{ position: 'absolute', top: '4px', right: '8px', width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.4)' }} />
          </div>
        )}

        {/* Sliding Thumb */}
        <motion.div
          animate={{
            x: isDark ? 24 : 0,
            rotate: isDark ? 360 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 28,
          }}
          style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background: isDark
              ? 'linear-gradient(135deg, #1E293B 0%, #0F172A 100%)'
              : '#FFFFFF',
            boxShadow: isDark
              ? '0 2px 6px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.2)'
              : '0 2px 6px rgba(0,0,0,0.2)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2,
          }}
        >
          {isDark ? (
            <Moon size={11} style={{ color: '#F1F5F9', fill: '#F1F5F9' }} />
          ) : (
            <Sun size={12} style={{ color: '#D97706', fill: '#F59E0B' }} />
          )}
        </motion.div>
      </div>
    </button>
  );
}
