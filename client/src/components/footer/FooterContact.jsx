'use client';

import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';

export default function FooterContact() {
  return (
    <div className="space-y-4 text-left">
      <h3 className="text-[13px] font-bold uppercase tracking-wider text-white font-heading">
        Direct Contact &amp; Dispatch
      </h3>

      <div className="space-y-3.5 text-[13px]">
        {/* Physical Address */}
        <div className="flex items-start gap-2.5 group">
          <MapPin size={16} className="text-[#D9041B] shrink-0 mt-0.5" />
          <div>
            <p className="text-white/80 leading-snug">
              164, Prince Ademola Street, Oniru Estate, Victoria Island, Lagos, Nigeria
            </p>
            <a
              href="https://maps.google.com/?q=164+Prince+Ademola+Street+Oniru+Victoria+Island+Lagos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11.5px] text-[#FF4D61] hover:text-white transition-colors inline-block mt-0.5"
            >
              Open in Google Maps →
            </a>
          </div>
        </div>

        {/* Hotlines */}
        <div className="flex items-start gap-2.5">
          <Phone size={16} className="text-[#D9041B] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <a
              href="tel:+2348035669513"
              className="text-white/80 hover:text-white transition-colors block font-mono text-[13px]"
            >
              +234 803 566 9513
            </a>
            <a
              href="tel:+2348023411618"
              className="text-white/80 hover:text-white transition-colors block font-mono text-[13px]"
            >
              +234 802 341 1618
            </a>
          </div>
        </div>

        {/* Email Links */}
        <div className="flex items-start gap-2.5">
          <Mail size={16} className="text-[#D9041B] shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <a
              href="mailto:icomengineeringsolutions@gmail.com"
              className="text-white/80 hover:text-white transition-colors block break-all text-[12px]"
            >
              icomengineeringsolutions@gmail.com
            </a>
            <a
              href="mailto:info@icomtsl.com"
              className="text-white/60 hover:text-white transition-colors block text-[12px]"
            >
              info@icomtsl.com
            </a>
          </div>
        </div>

        {/* SLA Commitment */}
        <div className="flex items-center gap-2.5 pt-1 text-white/50 text-[12px]">
          <Clock size={15} className="text-white/40 shrink-0" />
          <span>Technical response &amp; dispatch in 24–48 hrs</span>
        </div>
      </div>

      {/* Direct Contact Button */}
      <div className="pt-2">
        <Link
          href="/contact"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white/[0.08] hover:bg-[#D9041B] text-white text-xs font-semibold border border-white/10 hover:border-[#D9041B] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[40px]"
        >
          <span>Send Technical Inquiry</span>
          <ArrowRight size={13} />
        </Link>
      </div>
    </div>
  );
}
