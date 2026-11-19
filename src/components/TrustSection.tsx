import React from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { ShieldCheck, CheckCircle2, MessageSquare, PhoneCall } from 'lucide-react';

export const TrustSection: React.FC = () => {
  const trustWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I would like to speak directly with an engineer regarding my solar or electrical requirements.'
  );

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-container mx-auto">
        <div className="relative rounded-3xl sm:rounded-4xl bg-gradient-to-br from-primary-dark via-primary to-[#18648c] p-8 sm:p-14 text-white overflow-hidden shadow-float">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6 text-lime">
              <ShieldCheck className="w-4 h-4" />
              <span>Engineering Integrity</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight leading-tight mb-5">
              {siteConfig.trustNotice.title}
            </h2>

            <p className="text-white/90 text-sm sm:text-base leading-relaxed mb-8">
              {siteConfig.trustNotice.statement}
            </p>

            {/* Verified highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {siteConfig.trustNotice.highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3.5 rounded-2xl border border-white/15"
                >
                  <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-medium text-white/95">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>

            {/* Actions: WhatsApp + Phone */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={trustWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
                <span>Connect with Technical Team</span>
              </a>

              <a
                href={`tel:${siteConfig.displayPhone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full border border-white/30 backdrop-blur-sm transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-lime" />
                <span>Call: {siteConfig.displayPhone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
