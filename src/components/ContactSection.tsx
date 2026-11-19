import React, { useState } from 'react';
import { siteConfig } from '../config/site';
import { openWhatsAppChat, formatEnquiryMessage } from '../utils/whatsapp';
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Sparkles,
  Send,
  AlertCircle,
  Eye,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    customerType: 'Residential (Home / Society)',
    service: 'Residential Rooftop Solar',
    location: '',
    monthlyBill: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [showLivePreview, setShowLivePreview] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your full name.';
    }
    if (!formData.location.trim()) {
      newErrors.location = 'Please state your location or city (e.g. Pune, Yavatmal).';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) {
      return;
    }

    const formattedMessage = formatEnquiryMessage({
      name: formData.name,
      customerType: formData.customerType,
      service: formData.service,
      location: formData.location,
      monthlyBill: formData.monthlyBill,
      message: formData.message,
    });

    openWhatsAppChat(formattedMessage);
  };

  const livePreviewText = formatEnquiryMessage({
    name: formData.name || '[Your Name]',
    customerType: formData.customerType,
    service: formData.service,
    location: formData.location || '[Pune / Yavatmal / Area]',
    monthlyBill: formData.monthlyBill,
    message: formData.message,
  });

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-surface">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky/70 text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Connect on WhatsApp</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-5">
            Ready to explore solar for <span className="text-primary">your property</span>?
          </h2>

          <p className="text-muted text-base sm:text-lg leading-relaxed">
            Tell us a little about your requirement and connect directly with our engineering team on WhatsApp. Fast, transparent, and site-tailored.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Confirmed Contact Details & Direct CTAs */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-[#18648c] p-7 sm:p-9 text-white shadow-card">
              <span className="text-xs font-extrabold uppercase tracking-widest text-lime block mb-2">
                Primary Contact Channel
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
                Chat Directly on WhatsApp
              </h3>
              <p className="text-white/85 text-xs sm:text-sm leading-relaxed mb-6">
                WhatsApp is our quickest enquiry channel. Send us a message or share a bill photo for a rapid assessment.
              </p>

              <a
                href={`https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Hello National Infratech Solutions, I would like to enquire about your services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2.5 bg-lime hover:bg-lime-dark text-ink font-bold text-sm sm:text-base py-4 px-6 rounded-2xl shadow transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 fill-ink" />
                <span>Open WhatsApp ({siteConfig.displayPhone})</span>
              </a>
            </div>

            {/* Verified Contact Cards List */}
            <div className="rounded-3xl bg-soft border border-border p-6 sm:p-8 space-y-5">
              <h4 className="text-xs font-bold uppercase tracking-wider text-muted">
                Owner-Confirmed Information
              </h4>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky text-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted">Direct Phone</p>
                  <a
                    href={`tel:${siteConfig.displayPhone}`}
                    className="text-base font-bold text-ink hover:text-primary transition-colors"
                  >
                    +91 {siteConfig.displayPhone}
                  </a>
                  <p className="text-[11px] text-muted">Voice calls & WhatsApp enabled</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky text-primary flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted">Official Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-bold text-ink hover:text-primary transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                  <p className="text-[11px] text-muted">Proposals & formal RFPs</p>
                </div>
              </div>

              {/* Service Areas */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-sky text-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted">Confirmed Service Hubs</p>
                  <p className="text-base font-bold text-ink">
                    Pune & Yavatmal, Maharashtra
                  </p>
                  <p className="text-[11px] text-muted">
                    Physical street address & office hours pending owner confirmation
                  </p>
                </div>
              </div>

              {/* Security & Verification note */}
              <div className="pt-3 border-t border-border flex items-start gap-2 text-[11px] text-muted leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-forest shrink-0 mt-0.5" />
                <span>
                  No middle agents. You speak directly with the certified technical and management team of National Infratech Solutions.
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive WhatsApp Message Builder Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-white border border-border shadow-soft p-6 sm:p-10">
              <div className="flex items-center justify-between pb-5 border-b border-border mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink">
                    Prepare Your WhatsApp Enquiry
                  </h3>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    Fill in your details below to generate an organized message, then continue on WhatsApp.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowLivePreview(!showLivePreview)}
                  className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  <Eye className="w-4 h-4" />
                  <span>{showLivePreview ? 'Hide Preview' : 'Show Preview'}</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    Your Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3 rounded-2xl bg-soft border ${
                      errors.name ? 'border-red-400 bg-red-50/20' : 'border-border'
                    } focus:outline-none focus:ring-2 focus:ring-primary text-sm text-ink transition-colors`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-500 mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                {/* Customer Type & Service */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="customerType" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Customer / Property Type
                    </label>
                    <select
                      id="customerType"
                      value={formData.customerType}
                      onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm text-ink transition-colors"
                    >
                      <option value="Residential (Home / Society)">Residential (Home / Society)</option>
                      <option value="Commercial (Office / Retail)">Commercial (Office / Retail)</option>
                      <option value="Industrial (Shed / Factory)">Industrial (Shed / Factory)</option>
                      <option value="Electrical Line / Infrastructure">Electrical Line / Infrastructure</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Interested Service
                    </label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm text-ink transition-colors"
                    >
                      {siteConfig.services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location & Monthly Bill */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Location / City <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="location"
                      type="text"
                      placeholder="e.g. Baner, Pune or Yavatmal"
                      value={formData.location}
                      onChange={(e) => {
                        setFormData({ ...formData, location: e.target.value });
                        if (errors.location) setErrors({ ...errors, location: '' });
                      }}
                      className={`w-full px-4 py-3 rounded-2xl bg-soft border ${
                        errors.location ? 'border-red-400 bg-red-50/20' : 'border-border'
                      } focus:outline-none focus:ring-2 focus:ring-primary text-sm text-ink transition-colors`}
                    />
                    {errors.location && (
                      <p className="text-xs text-red-500 mt-1 font-medium">{errors.location}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="monthlyBill" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                      Avg. Monthly Bill / Units <span className="text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      id="monthlyBill"
                      type="text"
                      placeholder="e.g. ₹4,500 / 450 units"
                      value={formData.monthlyBill}
                      onChange={(e) => setFormData({ ...formData, monthlyBill: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm text-ink transition-colors"
                    >
                    </input>
                  </div>
                </div>

                {/* Additional Message */}
                <div>
                  <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-ink mb-1.5">
                    Any Specific Requirements <span className="text-muted font-normal">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    rows={3}
                    placeholder="e.g. RCC terrace space approx. 500 sq.ft, interested in 3 kW system or net metering details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-soft border border-border focus:outline-none focus:ring-2 focus:ring-primary text-sm text-ink transition-colors"
                  />
                </div>

                {/* Live Message Preview Accordion/Card */}
                {showLivePreview && (
                  <div className="p-4 rounded-2xl bg-soft border border-border">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted mb-2">
                      Live Message Preview for WhatsApp:
                    </p>
                    <pre className="text-xs text-ink font-mono whitespace-pre-wrap bg-white p-3 rounded-xl border border-border">
                      {livePreviewText}
                    </pre>
                  </div>
                )}

                {/* Explicit Transparency Note (README Section 6: Do not claim submitted to NIS until user sends) */}
                <div className="p-3.5 rounded-2xl bg-sky/30 border border-sky text-xs text-primary-dark flex items-start gap-2.5">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                  <p>
                    Clicking <strong>"Continue on WhatsApp"</strong> opens a verified chat with National Infratech Solutions (<code className="font-bold">+{siteConfig.whatsappNumber}</code>) containing this pre-filled message. You review and send it yourself inside WhatsApp.
                  </p>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2.5 bg-lime hover:bg-lime-dark text-ink font-bold text-base py-4 px-6 rounded-2xl shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-lime-dark"
                >
                  <MessageSquare className="w-5 h-5 fill-ink" />
                  <span>Continue on WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
