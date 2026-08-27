'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, CheckCircle, AlertCircle, Loader2, Sparkles } from 'lucide-react';

export default function FooterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (val) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      setErrorMessage('Please enter your email address.');
      return;
    }
    if (!validateEmail(email.trim())) {
      setStatus('error');
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    setStatus('loading');
    setErrorMessage('');

    // Simulate clean asynchronous subscription with timeout
    try {
      await new Promise((resolve) => setTimeout(resolve, 800));
      setStatus('success');
      setEmail('');
    } catch {
      setStatus('error');
      setErrorMessage('Unable to subscribe at this moment. Please try again.');
    }
  };

  return (
    <div className="border-b border-white/[0.08] pb-12 mb-14">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
        
        {/* Left Col: Executive CTA */}
        <div className="lg:col-span-7 space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D9041B]/15 border border-[#D9041B]/30 text-[#FF4D61] text-xs font-semibold uppercase tracking-wider">
            <Sparkles size={13} className="text-[#FF4D61]" />
            <span>Ready To Work With Us?</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Scale your telecom and energy infrastructure with confidence.
          </h2>

          <p className="text-white/70 text-sm sm:text-[15px] leading-relaxed max-w-xl font-body">
            From pan-African fiber optic backbone deployment to turnkey solar installations and RF optimization, ICOM delivers precision engineering with zero downtime.
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#D9041B] hover:bg-[#B50316] text-white text-sm font-semibold shadow-lg shadow-[#D9041B]/20 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px]"
            >
              Request Consultation
              <ArrowRight size={15} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white/10 hover:bg-white/15 text-white text-sm font-medium border border-white/10 transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white min-h-[44px]"
            >
              Explore All Services
            </Link>
          </div>
        </div>

        {/* Right Col: Newsletter Subscription Box */}
        <div className="lg:col-span-5">
          <div className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-6 sm:p-7 text-left space-y-4 shadow-xl backdrop-blur-sm">
            <div>
              <h3 className="text-lg font-bold text-white font-heading">
                Engineering Insights &amp; Updates
              </h3>
              <p className="text-xs sm:text-sm text-white/60 mt-1 leading-relaxed">
                Receive technical briefs, fiber rollout case studies, and power infrastructure insights straight to your inbox.
              </p>
            </div>

            {status === 'success' ? (
              <div className="flex items-start gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm">
                <CheckCircle size={18} className="text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-emerald-200">Subscription Confirmed!</p>
                  <p className="text-xs text-emerald-300/80 mt-0.5">Thank you for subscribing to ICOM Engineering updates.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-3" noValidate>
                <div className="space-y-1.5">
                  <label htmlFor="footer-newsletter-email" className="sr-only">
                    Email address for newsletter
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-white/40">
                      <Mail size={16} />
                    </div>
                    <input
                      id="footer-newsletter-email"
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (status === 'error') setStatus('idle');
                      }}
                      placeholder="name@company.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#07152E]/90 border border-white/15 text-white placeholder-white/40 text-sm focus:outline-none focus:border-[#D9041B] focus:ring-1 focus:ring-[#D9041B] transition-all min-h-[44px]"
                      disabled={status === 'loading'}
                      autoComplete="email"
                    />
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-1.5 text-xs text-[#FF4D61] font-medium" role="alert">
                    <AlertCircle size={14} className="shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#D9041B] hover:bg-[#B50316] text-white text-sm font-semibold shadow-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed min-h-[44px]"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 size={16} className="animate-spin" />
                      <span>Subscribing...</span>
                    </>
                  ) : (
                    <span>Subscribe to Updates</span>
                  )}
                </button>

                <p className="text-[11px] text-white/40 text-center">
                  Zero spam. Unsubscribe anytime with a single click.
                </p>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
