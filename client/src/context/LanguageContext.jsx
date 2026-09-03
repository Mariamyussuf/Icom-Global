'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations, languages, defaultLanguage } from '@/translations';

const LanguageContext = createContext({
  language: defaultLanguage,
  setLanguage: () => {},
  t: (key, fallback) => fallback || key,
  languages: [],
  currentLanguage: languages[0],
});

function getNestedValue(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
}

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(defaultLanguage);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const savedLang = localStorage.getItem('icom_language');
      if (savedLang && translations[savedLang]) {
        setLanguageState(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        // Auto-detect browser language if preferred
        const browserLang = navigator.language?.toLowerCase() || '';
        if (browserLang.startsWith('fr') && translations.fr) {
          setLanguageState('fr');
          document.documentElement.lang = 'fr';
        } else if (browserLang.startsWith('zh') && translations.zh) {
          setLanguageState('zh');
          document.documentElement.lang = 'zh';
        }
      }
    } catch (e) {
      console.warn('Language persistence error:', e);
    }
  }, []);

  const setLanguage = (lang) => {
    if (!translations[lang]) return;
    setLanguageState(lang);
    try {
      localStorage.setItem('icom_language', lang);
      document.documentElement.lang = lang;
    } catch (e) {
      console.warn('Failed to save language to localStorage:', e);
    }
  };

  const t = (path, fallback) => {
    // Attempt current language
    const currentDict = translations[language];
    const val = getNestedValue(currentDict, path);
    if (val !== undefined && val !== null) return val;

    // Fallback to English
    if (language !== defaultLanguage) {
      const enDict = translations[defaultLanguage];
      const enVal = getNestedValue(enDict, path);
      if (enVal !== undefined && enVal !== null) return enVal;
    }

    return fallback !== undefined ? fallback : path;
  };

  const currentLanguage = languages.find((l) => l.code === language) || languages[0];

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        languages,
        currentLanguage,
        mounted,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
