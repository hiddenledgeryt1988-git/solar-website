import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { HelpCircle, Plus, Minus, MessageSquare, ArrowRight } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const faqWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I have a specific question regarding rooftop solar installation that was not covered in the FAQs.'
  );

  return (
    <section id="faqs" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-soft/50">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading and WhatsApp Contact Prompt */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 bg-sky text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <HelpCircle className="w-3.5 h-3.5 text-primary" />
              <span>Questions & Answers</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-5">
              Frequently asked <span className="text-primary">questions</span>.
            </h2>

            <p className="text-muted text-base leading-relaxed mb-8">
              Straightforward answers regarding rooftop feasibility, solar sizing, installation timelines, and electrical scope in Pune and Yavatmal.
            </p>

            {/* Direct Question Card */}
            <div className="p-6 rounded-3xl bg-white border border-border shadow-card">
              <h3 className="font-bold text-base text-ink mb-2">
                Have a unique roof or site question?
              </h3>
              <p className="text-xs sm:text-sm text-muted leading-relaxed mb-5">
                Send your query directly to our engineering desk on WhatsApp. We provide site-specific answers without high-pressure sales calls.
              </p>

              <a
                href={faqWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-xs sm:text-sm px-5 py-3 rounded-full transition-colors shadow-sm"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
                <span>Ask on WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion Rows */}
          <div className="lg:col-span-7 space-y-3.5">
            {siteConfig.faqs.map((faq, idx) => {
              const isOpen = openId === faq.id;
              const formattedIndex = (idx + 1).toString().padStart(2, '0');

              return (
                <div
                  key={faq.id}
                  className={`rounded-2xl transition-all duration-200 border ${
                    isOpen
                      ? 'bg-white shadow-soft border-lime-dark/50'
                      : 'bg-white/80 hover:bg-white border-border/80'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggle(faq.id)}
                    className="w-full px-5 py-4 sm:py-5 flex items-center justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-primary rounded-2xl"
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3 sm:gap-4">
                      <span
                        className={`text-xs font-extrabold shrink-0 ${
                          isOpen ? 'text-primary' : 'text-muted'
                        }`}
                      >
                        {formattedIndex}
                      </span>
                      <span className="font-bold text-base sm:text-lg text-ink">
                        {faq.question}
                      </span>
                    </div>

                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
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
                    <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-muted leading-relaxed border-t border-border/50">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
