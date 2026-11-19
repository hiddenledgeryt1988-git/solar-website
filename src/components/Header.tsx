import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/site';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, Menu, X, Phone, ArrowUpRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  const defaultWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solution, I would like to enquire about your solar & electrical services.'
  );

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-header shadow-soft border-b border-border/80 py-3.5'
            : 'bg-gradient-to-b from-black/40 via-black/20 to-transparent py-5'
        }`}
      >
        <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Wordmark (Full Name, No Shortcut NIS) */}
            <a
              href="#"
              className="group flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
              aria-label="National Infratech Solutions - Home"
            >
              <img
                src="/logo.jpg"
                alt="National Infratech Solutions Logo"
                className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-contain bg-white p-0.5 shadow-sm border border-border/80 transition-transform duration-200 group-hover:scale-105"
              />
              <div className="flex flex-col">
                <span
                  className={`font-extrabold text-base sm:text-lg md:text-xl tracking-tight leading-tight transition-colors ${
                    isScrolled ? 'text-ink' : 'text-white'
                  }`}
                >
                  National Infratech Solutions
                </span>
                <span
                  className={`text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase transition-colors line-clamp-1 ${
                    isScrolled ? 'text-muted' : 'text-white/80'
                  }`}
                >
                  Solar & Electrical Engineering
                </span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-7">
              {siteConfig.navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-semibold transition-colors duration-200 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded-md px-1 py-0.5 ${
                    isScrolled ? 'text-ink/80 hover:text-primary' : 'text-white/90 hover:text-lime'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Actions: Phone & WhatsApp CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={`tel:${siteConfig.displayPhone}`}
                className={`hidden md:inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-full transition-colors ${
                  isScrolled
                    ? 'text-ink hover:text-primary'
                    : 'text-white/90 hover:text-white'
                }`}
                title="Call National Infratech Solution"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{siteConfig.displayPhone}</span>
              </a>

              <a
                href={defaultWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-xs sm:text-sm px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-lime-dark"
                aria-label="Enquire with National Infratech Solution on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 fill-ink" />
                <span>Enquire on WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2.5 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
                isScrolled
                  ? 'text-ink hover:bg-soft'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      <div
        className={`fixed top-0 right-0 bottom-0 z-50 w-full max-w-sm bg-white shadow-2xl p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out lg:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Menu"
      >
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-border">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpg"
                alt="National Infratech Solutions Logo"
                className="w-10 h-10 rounded-xl object-contain bg-white p-0.5 shadow-sm border border-border"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-ink text-base leading-tight">
                  National Infratech Solutions
                </span>
                <span className="text-[10px] text-muted font-medium">
                  Pune & Yavatmal, Maharashtra
                </span>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-xl text-muted hover:text-ink hover:bg-soft focus:outline-none focus:ring-2 focus:ring-primary"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mt-6 flex flex-col gap-1">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-base font-semibold text-ink hover:bg-sky/60 hover:text-primary transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-muted" />
              </a>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Footer with verified CTAs */}
        <div className="pt-6 border-t border-border flex flex-col gap-3">
          <div className="text-xs text-muted px-1">
            <p className="font-semibold text-ink">Service Areas:</p>
            <p>{siteConfig.serviceAreasText}</p>
          </div>

          <a
            href={defaultWhatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 bg-lime hover:bg-lime-dark text-ink font-bold text-sm py-3.5 px-4 rounded-xl shadow-sm transition-colors"
          >
            <MessageSquare className="w-4 h-4 fill-ink" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${siteConfig.displayPhone}`}
            className="flex items-center justify-center gap-2 bg-soft hover:bg-sky/50 text-ink font-semibold text-sm py-3 px-4 rounded-xl transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>Call: {siteConfig.displayPhone}</span>
          </a>
        </div>
      </div>
    </>
  );
};
