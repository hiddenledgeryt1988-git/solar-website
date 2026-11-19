import React from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowRight, ShieldCheck, CheckCircle } from 'lucide-react';

export const Process: React.FC = () => {
  const processWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I would like to initiate the solar consultation process. Where should we begin?'
  );

  return (
    <section id="process" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading, Context, and Direct CTA */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-sky/70 text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" />
              <span>Straightforward Workflow</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-5">
              A transparent, <span className="text-primary">step-by-step</span> journey.
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
              We eliminate ambiguity. Every project—from an initial WhatsApp conversation to final grid synchronisation—follows a disciplined engineering workflow with clear checkpoints and zero hidden clauses.
            </p>

            <div className="p-5 rounded-3xl bg-soft border border-border mb-8 space-y-3">
              <h3 className="text-sm font-bold text-ink">What to have ready for Step 1:</h3>
              <div className="space-y-2 text-xs sm:text-sm text-muted">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest shrink-0" />
                  <span>Your property location (Pune or Yavatmal)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest shrink-0" />
                  <span>A recent electricity bill copy or unit consumption</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-forest shrink-0" />
                  <span>Approximate roof type (RCC slab, sheet, or tiles)</span>
                </div>
              </div>
            </div>

            <a
              href={processWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-sm transition-all duration-200 transform hover:-translate-y-0.5"
            >
              <MessageSquare className="w-4 h-4 fill-ink" />
              <span>Start Your Step 1 on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Right Column: Numbered timeline steps (01 to 06) with connecting line */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Connecting Line */}
            <div className="absolute top-8 bottom-8 left-6 sm:left-7 w-0.5 bg-border hidden sm:block" />

            <div className="space-y-6 sm:space-y-8">
              {siteConfig.processSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col sm:flex-row items-start gap-4 sm:gap-6 bg-white sm:bg-transparent p-5 sm:p-0 rounded-2xl sm:rounded-none border sm:border-0 border-border"
                >
                  {/* Number Node */}
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white border-2 border-primary/30 text-ink flex items-center justify-center font-extrabold text-base sm:text-lg shrink-0 shadow-sm relative z-10">
                    <span className="text-primary font-bold">{step.step}</span>
                  </div>

                  {/* Step Description Card */}
                  <div className="flex-1 bg-soft/70 hover:bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl border border-border transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                      <h3 className="text-lg sm:text-xl font-bold text-ink">
                        {step.title}
                      </h3>
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-muted text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
