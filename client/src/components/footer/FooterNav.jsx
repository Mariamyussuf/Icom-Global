'use client';

import Link from 'next/link';
import { ChevronRight, ArrowUpRight } from 'lucide-react';

const serviceLinks = [
  { name: 'RF Drive Testing & Optimization', href: '/services/rf-drive-testing' },
  { name: 'Radio Network Design & Planning', href: '/services/radio-network-design-planning' },
  { name: 'Fiber Optic Transmission & Splicing', href: '/services/fiber-optic-transmission' },
  { name: 'Power Solutions & Solar Systems', href: '/services/power-solutions' },
  { name: 'BSS Equipment Installation', href: '/services/bss-equipment-installation' },
  { name: 'Network Operations & Maintenance', href: '/services/network-operations-maintenance' },
  { name: 'Repeater Systems Solutions', href: '/services/repeater-systems-solutions' },
  { name: 'Technical Consulting & PM', href: '/services/technical-consulting-project-management' },
];

const companyLinks = [
  { name: 'About ICOM', href: '/about' },
  { name: 'Our Projects & Deployments', href: '/projects' },
  { name: 'Mission & Strategic Objectives', href: '/about' },
  { name: 'Strategic Partners', href: '/about' },
  { name: 'Quality & Safety Commitments', href: '/about' },
  { name: 'Leadership & Engineering Team', href: '/about' },
  { name: 'Career Opportunities', href: '/contact?subject=Career%20Inquiry' },
  { name: 'Contact & Consultations', href: '/contact' },
];

export default function FooterNav() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left">
      
      {/* Column 1: Engineering Solutions */}
      <div className="space-y-4">
        <h3 className="text-[13px] font-bold uppercase tracking-wider text-white font-heading flex items-center gap-1.5">
          <span>Engineering Solutions</span>
        </h3>
        <ul className="space-y-2.5" role="list">
          {serviceLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white transition-all duration-200 hover:translate-x-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9041B] rounded"
              >
                <ChevronRight size={12} className="text-[#D9041B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                <span className="group-hover:text-white transition-colors">{link.name}</span>
              </Link>
            </li>
          ))}
          <li className="pt-1">
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-[12px] font-semibold text-[#FF4D61] hover:text-white transition-colors"
            >
              <span>View All 8 Divisions</span>
              <ArrowUpRight size={13} />
            </Link>
          </li>
        </ul>
      </div>

      {/* Column 2: Company & Governance */}
      <div className="space-y-4">
        <h3 className="text-[13px] font-bold uppercase tracking-wider text-white font-heading flex items-center gap-1.5">
          <span>Company &amp; Governance</span>
        </h3>
        <ul className="space-y-2.5" role="list">
          {companyLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                className="group inline-flex items-center gap-1.5 text-[13px] text-white/65 hover:text-white transition-all duration-200 hover:translate-x-1 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D9041B] rounded"
              >
                <ChevronRight size={12} className="text-[#D9041B] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                <span className="group-hover:text-white transition-colors">{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
