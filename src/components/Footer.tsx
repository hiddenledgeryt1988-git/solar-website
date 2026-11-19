import React from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  ArrowUp,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const footerWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I am visiting your website and would like to enquire about your solar & electrical solutions.'
  );

  return (
    <footer className="bg-ink text-white/80 pt-16 sm:pt-20 pb-12 border-t border-ink/40">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-white/10">
          {/* Brand Info & Tagline (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="National Infratech Solutions Logo"
                className="w-12 h-12 rounded-xl object-contain bg-white p-0.5 shadow-sm border border-white/20"
              />
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  National Infratech Solutions
                </span>
                <span className="text-[11px] font-medium text-white/60 tracking-wider uppercase block">
                  Solar & Electrical Infrastructure
                </span>
              </div>
            </div>

            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Providing engineered rooftop solar installations, commercial solar arrays, and high-reliability electrical infrastructure with a focus on safety and precision across Maharashtra.
            </p>

            <p className="text-xs text-lime font-medium italic">
              "{siteConfig.tagline}"
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="National Infratech Solution on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="NIS Solar on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-lime text-ink flex items-center justify-center transition-colors"
                aria-label="Enquire on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
              </a>
            </div>
          </div>

          {/* Quick Nav Links (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-lime transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Confirmed Services Links (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Confirmed Services
            </h4>
            <ul className="space-y-2 text-sm">
              {siteConfig.services.map((service) => (
                <li key={service.id}>
                  <a
                    href="#services"
                    className="hover:text-lime transition-colors line-clamp-1"
                  >
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Verified Contact Details (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h4>

            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={footerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-white transition-colors group"
              >
                <MessageSquare className="w-4 h-4 text-lime shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block text-[11px] text-white/50">WhatsApp (Primary)</span>
                  <span className="font-semibold text-lime">+{siteConfig.whatsappNumber}</span>
                </div>
              </a>

              <a
                href={`tel:${siteConfig.displayPhone}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-white/50">Direct Phone</span>
                  <span className="font-semibold text-white">{siteConfig.displayPhone}</span>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-start gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-white/50">Email</span>
                  <span className="font-semibold text-white">{siteConfig.email}</span>
                </div>
              </a>

              <div className="flex items-start gap-2.5 text-white/70">
                <MapPin className="w-4 h-4 text-sky shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[11px] text-white/50">Locations Served</span>
                  <span>Pune & Yavatmal, Maharashtra, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Compliance notice, and Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© {currentYear} {siteConfig.companyName}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1 text-white/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Verified Business Information</span>
            </span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors p-2 rounded-xl hover:bg-white/5 focus:outline-none"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
