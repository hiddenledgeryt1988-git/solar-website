import React from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowRight, ShieldCheck, MapPin, Zap, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  const heroWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I am interested in exploring solar solutions for my property. Please guide me with requirements and consultation.'
  );

  return (
    <section className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-6 lg:px-8">
      {/* Outer container with generous rounding matching DESIGN_README */}
      <div className="max-w-container mx-auto relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-float min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] flex flex-col justify-between">
        {/* Background Image: High-res cinematic rooftop solar installation */}
        <div className="absolute inset-0 z-0">
          <img
            src="/hero-bg.jpg"
            alt="Rooftop solar panels under clear blue sky"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000 ease-out"
            loading="eager"
            fetchPriority="high"
          />
          {/* Subtle cinematic gradient overlays for high legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/70 to-ink/30 sm:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-transparent to-black/35" />
        </div>

        {/* Decorative oversized brand lettering near bottom (DESIGN_README Section 7) */}
        <div
          className="absolute -bottom-6 sm:-bottom-10 right-4 sm:right-8 z-10 select-none pointer-events-none text-right"
          aria-hidden="true"
        >
          <span className="text-[4.5rem] sm:text-[8rem] lg:text-[11rem] font-extrabold text-white/[0.07] leading-none tracking-tighter uppercase block">
            NATIONAL INFRATECH
          </span>
        </div>

        {/* Hero Content (Left-aligned editorial layout) */}
        <div className="relative z-20 px-6 sm:px-12 lg:px-16 pt-16 sm:pt-24 lg:pt-28 max-w-3xl">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md border border-white/25 rounded-full px-4 py-1.5 mb-6 text-white text-xs sm:text-sm font-semibold tracking-wide">
            <span className="w-2 h-2 rounded-full bg-lime animate-pulse" />
            <span>{siteConfig.heroEyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.12] mb-6 text-balance">
            {siteConfig.heroHeadline}
          </h1>

          {/* Supporting Copy */}
          <p className="text-base sm:text-lg lg:text-xl text-white/90 font-normal leading-relaxed mb-8 sm:mb-10 max-w-2xl">
            {siteConfig.heroSubtitle}
          </p>

          {/* Call to Actions (Primary Lime WhatsApp + Secondary Outlined Pill) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-10">
            <a
              href={heroWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-lime hover:bg-lime-dark text-ink font-bold text-sm sm:text-base px-7 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-lime"
            >
              <MessageSquare className="w-5 h-5 fill-ink" />
              <span>Enquire on WhatsApp</span>
            </a>

            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm font-semibold text-sm sm:text-base px-6 py-4 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            >
              <span>Explore Our Services</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Quick Factual Highlights */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs sm:text-sm text-white/80 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-lime" />
              <span>Direct Technical Consultation</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-lime" />
              <span>Tailored Site Sizing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-lime" />
              <span>Strict Electrical Safety</span>
            </div>
          </div>
        </div>

        {/* Bottom Hero Ribbon with Verified Hubs & Capabilities */}
        <div className="relative z-20 px-6 sm:px-12 lg:px-16 pb-8 sm:pb-10 pt-8 mt-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-white/15">
            <div className="flex items-center gap-3 bg-black/25 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-lime/20 text-lime flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">Service Regions</p>
                <p className="text-xs sm:text-sm font-bold text-white">Pune & Yavatmal, MH</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black/25 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-sky/20 text-sky flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">Sector Focus</p>
                <p className="text-xs sm:text-sm font-bold text-white">Residential, Commercial & Industrial</p>
              </div>
            </div>

            <div className="flex items-center gap-3 bg-black/25 backdrop-blur-md rounded-2xl p-3.5 border border-white/10">
              <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] uppercase tracking-wider text-white/60 font-semibold">Core Principle</p>
                <p className="text-xs sm:text-sm font-bold text-white">Precision & Engineering Safety</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
