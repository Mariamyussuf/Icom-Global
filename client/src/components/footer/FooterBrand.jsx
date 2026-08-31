'use client';

import Link from 'next/link';
import Image from 'next/image';

const FacebookIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const TwitterIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2zM4 6a2 2 0 100-4 2 2 0 000 4z" />
  </svg>
);

const InstagramIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const socialLinks = [
  { name: 'LinkedIn', icon: LinkedinIcon, href: 'https://linkedin.com', label: 'Follow ICOM on LinkedIn' },
  { name: 'X / Twitter', icon: TwitterIcon, href: 'https://x.com', label: 'Follow ICOM on X' },
  { name: 'Facebook', icon: FacebookIcon, href: 'https://facebook.com', label: 'Follow ICOM on Facebook' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com', label: 'Follow ICOM on Instagram' },
  { name: 'YouTube', icon: YoutubeIcon, href: 'https://youtube.com', label: 'Watch ICOM on YouTube' },
];

export default function FooterBrand() {
  return (
    <div className="space-y-5 text-left">
      {/* Brand Logo & Tagline */}
      <div className="space-y-1.5">
        <Link href="/" aria-label="ICOM Engineering Solutions - Home" className="inline-block">
          <Image
            src="/images/Icom-logo-white.png"
            alt="ICOM Engineering Solutions Limited"
            width={120}
            height={120}
            className="h-16 w-auto object-contain transition-opacity hover:opacity-90"
            priority={false}
          />
        </Link>
        <p className="text-[12px] font-medium tracking-wide text-white/50 uppercase">
          Engineering Solutions Limited
        </p>
      </div>

      {/* Slogan */}
      <div className="inline-block px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08]">
        <p className="text-xs italic text-white/80 font-medium font-body">
          &ldquo;better services is our motto&rdquo;
        </p>
      </div>

      {/* Brand Descriptor */}
      <p className="text-xs sm:text-[13px] text-white/65 leading-relaxed max-w-sm">
        Delivering turnkey telecommunications engineering, optical fiber cable (OFC) infrastructure, solar energy systems, and mission-critical network solutions across Africa.
      </p>

      {/* Operational Status Live Badge */}
      <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 w-fit">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="text-[11.5px] font-semibold text-emerald-300 tracking-tight">
          24/7 NOC &amp; Field Dispatch Active
        </span>
      </div>

      {/* Social Media Links */}
      <div className="pt-1">
        <p className="text-[11px] font-semibold tracking-wider text-white/40 uppercase mb-2.5">
          Connect With Us
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-8 h-8 rounded-lg bg-white/[0.06] hover:bg-[#D9041B] text-white/60 hover:text-white border border-white/[0.08] hover:border-[#D9041B] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Icon size={14} />
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
