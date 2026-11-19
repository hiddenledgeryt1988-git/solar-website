import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { Plus, Minus, CheckCircle, MessageSquare, Award } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const featureWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I would like to know more about your installation quality and engineering standards.'
  );

  return (
    <section id="why-us" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-soft/60">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Eyebrow, Heading, Intro, Accordion */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-sky text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <Award className="w-3.5 h-3.5 text-primary" />
              <span>Engineering Advantage</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-5">
              Smarter energy, <span className="text-primary">clear and proven</span> impact.
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8 max-w-xl">
              Solar is an electrical infrastructure investment meant to operate reliably for decades. We combine heavy electrical trade discipline with advanced solar system design so your installation delivers safe, predictable power.
            </p>

            {/* Accordion List */}
            <div className="space-y-3.5">
              {siteConfig.features.map((feature, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`rounded-2xl transition-all duration-200 border ${
                      isOpen
                        ? 'bg-white shadow-soft border-lime-dark/50'
                        : 'bg-white/70 hover:bg-white border-border/80'
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleAccordion(idx)}
                      className="w-full px-5 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                            isOpen
                              ? 'bg-lime text-ink'
                              : 'bg-soft text-muted'
                          }`}
                        >
                          0{idx + 1}
                        </span>
                        <span className="font-bold text-base sm:text-lg text-ink">
                          {feature.title}
                        </span>
                      </div>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? 'bg-ink text-white' : 'bg-soft text-muted'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4 stroke-[2.5]" />
                        ) : (
                          <Plus className="w-4 h-4 stroke-[2.5]" />
                        )}
                      </div>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm sm:text-base text-muted leading-relaxed border-t border-border/50">
                        <p>{feature.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href={featureWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-sm px-5 py-3 rounded-full transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
                <span>Discuss System Engineering on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Side: Large solar photograph with rounded corners (DESIGN_README Section 9) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl sm:rounded-4xl overflow-hidden shadow-float group">
              <img
                src="https://images.unsplash.com/photo-1548337138-e87d889cc369?auto=format&fit=crop&w=1000&q=85"
                alt="High-grade industrial and commercial solar panel installation"
                className="w-full h-[450px] sm:h-[540px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />

              {/* Floating Quality Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg border border-white/40">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-forest/10 text-forest flex items-center justify-center shrink-0">
                    <CheckCircle className="w-6 h-6 text-forest" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm sm:text-base text-ink">
                      Built for Maharashtra Weather Conditions
                    </h3>
                    <p className="text-xs text-muted mt-0.5">
                      Hot-dip galvanized structures & UV-resistant solar cables tested for peak heat and heavy monsoons.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
