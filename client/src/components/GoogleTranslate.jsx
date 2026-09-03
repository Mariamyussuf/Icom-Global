'use client';

import { useEffect } from 'react';

/**
 * Triggers Google Translate to translate the page to the given language code.
 * @param {string} langCode - e.g. 'en', 'fr', 'zh', 'es', 'ar', 'pt', 'de', 'sw', 'ha', 'yo', 'ig'
 */
export function triggerGoogleTranslate(langCode) {
  if (typeof window === 'undefined') return;

  const gtCode = langCode === 'zh' ? 'zh-CN' : langCode;
  const domain = window.location.hostname;

  // Set Google Translate cookie
  if (langCode === 'en') {
    // Clear cookie to reset to English original
    document.cookie = `googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    document.cookie = `googtrans=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
    document.cookie = `googtrans=/en/en; path=/;`;
    document.cookie = `googtrans=/en/en; path=/; domain=${domain};`;
  } else {
    document.cookie = `googtrans=/en/${gtCode}; path=/;`;
    document.cookie = `googtrans=/en/${gtCode}; path=/; domain=${domain};`;
  }

  // Update native Google Translate combo if already loaded in DOM
  const combo = document.querySelector('.goog-te-combo');
  if (combo) {
    combo.value = gtCode;
    combo.dispatchEvent(new Event('change'));
  } else {
    // If not yet initialized or first toggle, reloading ensures Google Translate picks up the cookie cleanly
    window.location.reload();
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Define global callback expected by Google Translate script
    window.googleTranslateElementInit = function () {
      if (window.google && window.google.translate) {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,fr,zh-CN,es,ar,pt,de,sw,ha,yo,ig,ja,ko,ru,hi,it,nl,tr',
            autoDisplay: false,
          },
          'google_translate_element'
        );
      }
    };

    // Only inject script once
    const scriptId = 'google-translate-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <>
      {/* Hidden container where Google Translate injects its native select */}
      <div id="google_translate_element" style={{ display: 'none' }} />

      {/* Global CSS to suppress default Google banners, tooltips, and top margins */}
      <style jsx global>{`
        .goog-te-banner-frame.skiptranslate,
        .goog-te-banner-frame,
        iframe.goog-te-banner-frame {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
        }
        body {
          top: 0px !important;
          position: static !important;
        }
        #goog-gt-tt,
        .goog-te-balloon-frame,
        .goog-tooltip,
        .goog-tooltip:hover {
          display: none !important;
          visibility: hidden !important;
        }
        .goog-text-highlight {
          background-color: transparent !important;
          box-shadow: none !important;
        }
        .skiptranslate {
          display: none !important;
        }
        #google_translate_element {
          display: none !important;
        }
      `}</style>
    </>
  );
}
