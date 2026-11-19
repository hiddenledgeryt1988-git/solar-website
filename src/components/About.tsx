import React from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Shield, Sparkles, CheckCircle2, MessageSquare, ArrowUpRight } from 'lucide-react';

export const About: React.FC = () => {
  const aboutWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I would like to learn more about your company and discuss my energy requirements.'
  );

  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-container mx-auto">
        {/* Eyebrow and Heading Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="inline-flex items-center gap-2 bg-sky/70 text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider w-fit mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-6">
              Engineering precision for{' '}
              <span className="text-primary">clean, reliable</span> power.
            </h2>

            <div className="space-y-4 text-muted text-base sm:text-lg leading-relaxed mb-8">
              <p>
                <strong className="text-ink font-semibold">National Infratech Solutions</strong>{' '}
                is an electrical infrastructure and solar engineering business operating primarily across Pune and Yavatmal, Maharashtra.
              </p>
              <p>
                We bridge the gap between clean solar power generation and heavy-duty electrical infrastructure. Whether equipping an independent home with a rooftop solar array or engineering power lines and distribution switchgear for commercial and industrial facilities, our work is governed by uncompromising safety, neat cable dressing, and long-term durability.
              </p>
              <p className="text-ink font-medium italic border-l-4 border-lime-dark pl-4 py-1 bg-soft/70 rounded-r-xl">
                "{siteConfig.tagline}"
              </p>
            </div>

            {/* Core Operational Principles (Truthful, non-exaggerated) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              <div className="p-3.5 rounded-2xl bg-soft border border-border flex items-start gap-3">
                <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-ink">Safety-First Protocols</h3>
                  <p className="text-xs text-muted mt-0.5">Strict compliance with Indian electrical isolation codes.</p>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-soft border border-border flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                <div>
                  <h3 className="text-sm font-bold text-ink">Site-Specific Sizing</h3>
                  <p className="text-xs text-muted mt-0.5">Calculated precisely around your actual load curve.</p>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp Action */}
            <div className="pt-2">
              <a
                href={aboutWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-ink hover:text-primary-dark font-bold text-sm bg-lime hover:bg-lime-dark px-6 py-3 rounded-full transition-all duration-200 shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
                <span>Talk with Our Engineering Team</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Asymmetrical Editorial Mosaic (DESIGN_README Section 8) */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 h-full">
              {/* Tile 1: Large portrait/landscape installation image */}
              <div className="sm:col-span-7 relative rounded-3xl overflow-hidden shadow-card group min-h-[260px] sm:min-h-[340px]">
                <img
                  src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80"
                  alt="Solar technician inspecting electrical connections"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/20">
                    Field Precision
                  </span>
                  <p className="text-xs sm:text-sm font-semibold mt-2 text-white/95">
                    Engineered electrical terminations & robust mounting
                  </p>
                </div>
              </div>

              {/* Right column with Lime Statement Tile + Supporting Tile */}
              <div className="sm:col-span-5 flex flex-col gap-4">
                {/* Tile 2: Lime statement tile (no fake statistics) */}
                <div className="rounded-3xl bg-lime p-6 sm:p-7 flex flex-col justify-between shadow-card text-ink">
                  <div>
                    <span className="text-[11px] font-extrabold uppercase tracking-widest text-ink/70 block mb-2">
                      Core Commitment
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight leading-snug">
                      Built around precision & engineering reliability.
                    </h3>
                  </div>
                  <p className="text-xs text-ink/80 font-medium mt-4 pt-4 border-t border-ink/15">
                    Dedicated service across Pune & Yavatmal regions.
                  </p>
                </div>

                {/* Tile 3: Supporting Infrastructure Tile */}
                <div className="relative rounded-3xl overflow-hidden shadow-card group min-h-[160px] sm:min-h-[190px]">
                  <img
                    src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=700&q=80"
                    alt="Power line infrastructure and electrical distribution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <p className="text-xs font-bold">Electrical Line & Infrastructure</p>
                    <p className="text-[10px] text-white/80">HT/LT Distribution Capabilities</p>
                  </div>
                </div>
              </div>

              {/* Tile 4: Wide Rooftop Solar Array Image */}
              <div className="sm:col-span-12 relative rounded-3xl overflow-hidden shadow-card group h-44 sm:h-52">
                <img
                  src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?auto=format&fit=crop&w=1200&q=80"
                  alt="Rooftop solar installation layout"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/40 to-transparent" />
                <div className="absolute inset-y-0 left-6 flex flex-col justify-center max-w-md text-white">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-lime">
                    Clean Energy Generation
                  </span>
                  <h3 className="text-base sm:text-lg font-bold text-white mt-1">
                    Turn your rooftop into an energy-generating asset.
                  </h3>
                  <p className="text-xs text-white/80 mt-1">
                    Optimized for Maharashtra solar insolation and roof layouts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
