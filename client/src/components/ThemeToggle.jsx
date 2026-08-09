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
        width: '44px',
        height: '44px',
        minWidth: '44px',
        minHeight: '44px',
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: isDark ? 'rgba(255, 255, 255, 0.12)' : 'rgba(10, 45, 115, 0.08)',
        color: isDark ? '#FFD166' : '#0A2D73',
        border: isDark ? '1px solid rgba(255, 255, 255, 0.2)' : '1px solid rgba(10, 45, 115, 0.15)',
        cursor: 'pointer',
        transition: 'all 0.25s ease',
        outline: 'none',
        ...style,
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.06)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <motion.div
        key={isDark ? 'dark' : 'light'}
        initial={{ rotate: -90, scale: 0.7, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        transition={{ duration: 0.25 }}
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        {isDark ? (
          <Sun size={20} style={{ color: '#FFD166' }} />
        ) : (
          <Moon size={20} style={{ color: '#0A2D73' }} />
        )}
      </motion.div>
    </button>
  );
}
