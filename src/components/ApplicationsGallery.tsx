import React, { useState } from 'react';
import { siteConfig, ApplicationItem } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, LayoutGrid, ArrowUpRight, X, AlertCircle } from 'lucide-react';

export const ApplicationsGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedItem, setSelectedItem] = useState<ApplicationItem | null>(null);

  const categories = ['All', 'Residential', 'Commercial', 'Industrial', 'Infrastructure'];

  const filteredItems = activeCategory === 'All'
    ? siteConfig.applications
    : siteConfig.applications.filter(item => item.category === activeCategory);

  const galleryWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I would like to request project references and discussion for my property in ' + siteConfig.serviceAreasText
  );

  return (
    <section id="applications" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-soft/40">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sky/70 text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
              <LayoutGrid className="w-3.5 h-3.5 text-primary" />
              <span>Engineering Applications</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-4">
              Illustrative solar & <span className="text-primary">infrastructure</span> applications.
            </h2>

            <p className="text-muted text-sm sm:text-base leading-relaxed">
              Explore typical engineering configurations we design and execute across residential, commercial, industrial, and electrical line environments.
            </p>
          </div>

          {/* Transparent Truthful Notice */}
          <div className="inline-flex items-start gap-2 bg-white p-3 rounded-2xl border border-border text-[11px] text-muted max-w-sm shrink-0">
            <AlertCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <span>
              <strong>Editorial Transparency:</strong> The applications below depict typical technical configurations. Verified project-specific photographs and client case studies are shared directly upon consultation.
            </span>
          </div>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-primary ${
                activeCategory === category
                  ? 'bg-ink text-white shadow-sm'
                  : 'bg-white text-muted hover:text-ink hover:bg-soft border border-border'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className="group cursor-pointer rounded-3xl bg-white border border-border/80 hover:border-lime-dark/70 shadow-card hover:shadow-soft overflow-hidden transition-all duration-300 flex flex-col"
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-md text-ink text-[11px] font-bold px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] font-medium text-white/80 line-clamp-1">
                    {item.scope}
                  </p>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-ink group-hover:text-primary transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-border/50 flex items-center justify-between text-xs font-bold text-primary">
                  <span>View Details</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout */}
        <div className="mt-12 p-6 sm:p-8 rounded-3xl bg-white border border-border flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-ink">
              Looking for a custom application for your facility?
            </h3>
            <p className="text-xs sm:text-sm text-muted mt-1">
              Discuss structural drawings, sanctioned load requirements, and site drawings directly with our engineers.
            </p>
          </div>

          <a
            href={galleryWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-sm px-6 py-3.5 rounded-full shrink-0 shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-ink" />
            <span>Request Site Consultation</span>
          </a>
        </div>
      </div>

      {/* Application Detail Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-white rounded-3xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl relative">
            <button
              type="button"
              onClick={() => setSelectedItem(null)}
              className="absolute top-5 right-5 p-2 rounded-full bg-soft hover:bg-border text-muted hover:text-ink transition-colors focus:outline-none"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-lime text-ink text-xs font-extrabold px-3 py-1 rounded-full">
                  {selectedItem.category}
                </span>
              </div>
            </div>

            <h3 className="text-2xl font-extrabold text-ink mb-2">
              {selectedItem.title}
            </h3>

            <p className="text-xs font-bold uppercase tracking-wider text-primary mb-4">
              Scope: {selectedItem.scope}
            </p>

            <p className="text-muted text-sm sm:text-base leading-relaxed mb-6">
              {selectedItem.description}
            </p>

            <div className="p-3.5 rounded-xl bg-soft border border-border text-xs text-muted leading-relaxed mb-6">
              <strong>Need a similar setup in Pune or Yavatmal?</strong> We evaluate your exact site parameters, roof load capacity, and electrical distribution network.
            </div>

            <div className="flex items-center justify-between gap-4 pt-4 border-t border-border">
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="text-sm font-semibold text-muted hover:text-ink px-4 py-2"
              >
                Close
              </button>

              <a
                href={buildWhatsAppUrl(`Hello National Infratech Solutions, I am interested in an application similar to ${selectedItem.title}. Please advise on site assessment.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedItem(null)}
                className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-sm px-6 py-3 rounded-full shadow transition-colors"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
                <span>Enquire About This Setup</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
