'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, FileText, Lock, Leaf } from 'lucide-react';

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    icon: Lock,
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: 'Information We Collect',
        body: 'ICOM Engineering Solutions Limited collects contact information, including name, email, phone number, and company name when you submit an inquiry, project consultation, or newsletter subscription via our website.',
      },
      {
        heading: 'How We Use Your Information',
        body: 'Your information is used solely to respond to project inquiries, deliver technical proposals, dispatch field engineering teams, and share official company updates. We never sell, rent, or trade your personal data with third-party marketers.',
      },
      {
        heading: 'Data Security & Protection',
        body: 'We implement industry-standard encryption, firewall defenses, and secure operational protocols to safeguard your project information and communication against unauthorized access, loss, or disclosure.',
      },
      {
        heading: 'Contact for Privacy Requests',
        body: 'For any inquiries regarding data access, corrections, or deletion, please contact our data governance team at icomengineeringsolutions@gmail.com.',
      },
    ],
  },
  terms: {
    title: 'Terms of Service',
    icon: FileText,
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: 'Scope of Services',
        body: 'ICOM Engineering Solutions Limited provides telecommunications engineering, fiber optic deployment, RF drive testing, power systems, BSS equipment installation, and technical consulting across Nigeria and West Africa.',
      },
      {
        heading: 'Project Engagements & SLAs',
        body: 'All engineering engagements, milestones, and deliverables are governed by formal Service Level Agreements (SLAs) and customized project contracts agreed upon by the client and ICOM Engineering Solutions Limited.',
      },
      {
        heading: 'Intellectual Property',
        body: 'All brand assets, documentation, engineering designs, software tools, and website content are the proprietary property of ICOM Engineering Solutions Limited (RC: 9766449).',
      },
      {
        heading: 'Governing Law',
        body: 'These terms are governed by and construed in accordance with the Laws of the Federal Republic of Nigeria.',
      },
    ],
  },
  safety: {
    title: 'Quality, Safety & Green Management',
    icon: ShieldCheck,
    lastUpdated: 'Updated January 2026',
    sections: [
      {
        heading: 'Quality Management (ISO Aligned)',
        body: 'We operate under strict quality management frameworks. Every fiber route, RF installation, and electrical deployment undergoes rigorous multi-stage calibration, OTDR testing, and quality audits before commissioning.',
      },
      {
        heading: 'Occupational Health & Safety (HSE)',
        body: 'Safety is integral to our operations. Our field engineers and technicians are equipped with certified PPE, undergo routine safety training, and adhere to zero-compromise safety protocols during civil works, tower climbs, and electrical installations.',
      },
      {
        heading: 'Green Management & Environmental Policy',
        body: 'In alignment with our corporate objectives, we follow eco-friendly processes by implementing Green Management across fiber routing, generator emissions monitoring, solar hybridization, and responsible e-waste recycling.',
      },
    ],
  },
};

export default function LegalModal({ activeModal, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (activeModal) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeModal, onClose]);

  if (!activeModal) return null;

  const data = legalContent[activeModal] || legalContent.privacy;
  const Icon = data.icon;

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="legal-modal-title"
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="absolute inset-0 bg-[#030A18]/80 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 12 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl bg-[#091B3E] border border-white/15 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-left z-10"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#D9041B]/15 border border-[#D9041B]/30 flex items-center justify-center text-[#D9041B] shrink-0">
                <Icon size={20} />
              </div>
              <div>
                <h3 id="legal-modal-title" className="text-lg font-bold text-white font-heading">
                  {data.title}
                </h3>
                <p className="text-xs text-white/50">{data.lastUpdated} · ICOM Engineering Solutions Limited</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9041B] cursor-pointer"
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>
          </div>

          {/* Body */}
          <div className="p-6 overflow-y-auto space-y-6 text-sm leading-relaxed text-white/75">
            {data.sections.map((sec, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-semibold text-white text-[15px] font-heading flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D9041B]" />
                  {sec.heading}
                </h4>
                <p className="text-white/70 pl-3.5 leading-normal">{sec.body}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-white/[0.02] text-xs text-white/50">
            <span>RC: 9766449 · Lagos, Nigeria</span>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9041B] cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
