'use client';

import { ChevronUp, Shield, Award, Leaf } from 'lucide-react';

export default function FooterBottomBar({ onOpenLegal }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="pt-8 mt-12 border-t border-white/[0.08]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-5 text-xs text-white/50">
        
        {/* Left: Copyright & Legal Entity */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} ICOM Engineering Solutions Limited. RC: 1043812. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 text-[11px] text-white/40">
            <span className="flex items-center gap-1">
              <Award size={11} className="text-[#FF4D61]" />
              ISO-Aligned Quality
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Shield size={11} className="text-[#FF4D61]" />
              NCC &amp; HSE Standards
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Leaf size={11} className="text-emerald-400" />
              Green Management
            </span>
          </div>
        </div>

        {/* Right: Policy Triggers & Back To Top */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-5 gap-y-2">
          <button
            type="button"
            onClick={() => onOpenLegal('privacy')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Privacy Policy
          </button>
          <span className="text-white/20 select-none">•</span>
          <button
            type="button"
            onClick={() => onOpenLegal('terms')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Terms of Service
          </button>
          <span className="text-white/20 select-none">•</span>
          <button
            type="button"
            onClick={() => onOpenLegal('safety')}
            className="hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:underline"
          >
            Quality &amp; Safety Policy
          </button>

          {/* Back to top button */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
            className="ml-2 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/15 text-white/70 hover:text-white transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer group"
          >
            <span>Top</span>
            <ChevronUp size={13} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </div>
  );
}
