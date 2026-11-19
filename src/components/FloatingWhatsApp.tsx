import React, { useState, useEffect } from 'react';
import { buildWhatsAppUrl } from '../utils/whatsapp';
import { MessageSquare, ArrowUpRight } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Show after scrolling a bit or after a short gentle delay
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const floatingWhatsAppUrl = buildWhatsAppUrl(
    'Hello National Infratech Solutions, I am reaching out from your website to enquire about your solar & electrical services.'
  );

  return (
    <div
      className={`fixed bottom-6 right-5 sm:right-8 z-40 transition-all duration-300 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <a
        href={floatingWhatsAppUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-4 sm:py-3.5 rounded-full shadow-2xl hover:shadow-float transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        aria-label="Chat with National Infratech Solutions on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-6 h-6 fill-white stroke-none" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-lime rounded-full ring-2 ring-[#25D366]" />
        </div>

        {/* Desktop Expandable Pill Label */}
        <div className="hidden sm:flex items-center gap-1.5 text-xs font-extrabold pr-1">
          <span>Chat on WhatsApp</span>
          <ArrowUpRight
            className={`w-3.5 h-3.5 transition-transform duration-200 ${
              isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
            }`}
          />
        </div>
      </a>
    </div>
  );
};
