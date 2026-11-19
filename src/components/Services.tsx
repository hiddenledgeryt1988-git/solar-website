import React, { useState } from 'react';
import { siteConfig, ServiceItem } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowUpRight, Check, Info, Sparkles, X } from 'lucide-react';

export const Services: React.FC = () => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky/70 text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Our Confirmed Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-5">
            Powering a <span className="text-primary">cleaner, smarter</span> future.
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed">
            From residential rooftops in Pune to heavy industrial manufacturing sheds and electrical line work in Yavatmal, National Infratech Solution delivers customized, safety-first energy engineering.
          </p>
        </div>

        {/* Services Responsive Grid (All 7 Confirmed Services) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {siteConfig.services.map((service) => {
            const cardWhatsAppUrl = buildWhatsAppUrl(service.whatsappMessage);

            return (
              <div
                key={service.id}
                className="group rounded-3xl bg-white border border-border/80 hover:border-lime-dark/60 shadow-card hover:shadow-soft transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Card Media with Image & Badges */}
                  <div className="relative h-56 sm:h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />

                    {/* Category / Highlight Badge */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="bg-white/90 backdrop-blur-md text-ink text-[11px] font-bold px-3 py-1 rounded-full shadow-sm">
                        {service.category}
                      </span>
                      {service.badge && (
                        <span className="bg-lime text-ink text-[11px] font-extrabold px-3 py-1 rounded-full shadow-sm">
                          {service.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-ink mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-muted text-sm leading-relaxed mb-5 line-clamp-3">
                      {service.shortDesc}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((benefit, bIdx) => (
                        <div key={bIdx} className="flex items-start gap-2.5 text-xs text-ink/85">
                          <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Disclaimer Pill if applicable (e.g. Government schemes) */}
                    {service.disclaimer && (
                      <div className="p-3 rounded-xl bg-sky/40 border border-sky text-[11px] text-primary-dark leading-snug mb-4 flex items-start gap-2">
                        <Info className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                        <span>{service.disclaimer}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Actions: Primary Contextual WhatsApp + Read Details */}
                <div className="p-6 pt-0 border-t border-border/50 mt-auto flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-bold text-muted hover:text-ink transition-colors underline-offset-4 hover:underline focus:outline-none"
                  >
                    View Details
                  </button>

                  <a
                    href={cardWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-xs sm:text-sm px-4 py-2.5 rounded-full shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
                    aria-label={`Enquire about ${service.title} on WhatsApp`}
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-ink" />
                    <span>Enquire</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Modal */}
      {activeModalService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setActiveModalService(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-soft hover:bg-border text-muted hover:text-ink transition-colors focus:outline-none"
              aria-label="Close service modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-48 rounded-2xl overflow-hidden mb-6">
              <img
                src={activeModalService.image}
                alt={activeModalService.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="bg-lime text-ink text-xs font-extrabold px-3 py-1 rounded-full">
                  {activeModalService.category}
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-extrabold text-ink mb-3">
              {activeModalService.title}
            </h3>

            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              {activeModalService.description}
            </p>

            <h4 className="text-xs font-bold uppercase tracking-wider text-ink mb-3">
              Included Technical Scope
            </h4>
            <div className="space-y-2.5 mb-6">
              {activeModalService.benefits.map((b, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85">
                  <Check className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {activeModalService.disclaimer && (
              <div className="p-3.5 rounded-xl bg-sky/40 border border-sky text-xs text-primary-dark leading-relaxed mb-6 flex items-start gap-2">
                <Info className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span>{activeModalService.disclaimer}</span>
              </div>
            )}

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="text-sm font-semibold text-muted hover:text-ink px-4 py-2"
              >
                Close
              </button>

              <a
                href={buildWhatsAppUrl(activeModalService.whatsappMessage)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setActiveModalService(null)}
                className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-sm px-6 py-3 rounded-full shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
                <span>Enquire on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
