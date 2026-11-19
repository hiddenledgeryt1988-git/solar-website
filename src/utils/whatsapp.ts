import { siteConfig } from '../config/site';

/**
 * Builds a clean, safe wa.me URL with an encoded contextual message.
 * Follows README.md Section 6 specifications:
 * - Uses India country code + 10-digit number without +, spaces or punctuation (e.g. 917498646660)
 * - Safe URL-encoding for line breaks, punctuation, and unicode
 * - Graceful fallback if number is missing or invalid
 */
export function buildWhatsAppUrl(message: string): string {
  const number = siteConfig.whatsappNumber?.replace(/\D/g, '');
  
  if (!number || number.length < 10) {
    console.warn('[NIS Solar] WhatsApp number is not configured properly in siteConfig.');
    return '#';
  }

  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${number}?text=${encoded}`;
}

/**
 * Safe handler to launch WhatsApp in a new browser tab/window
 */
export function openWhatsAppChat(message: string): void {
  const url = buildWhatsAppUrl(message);
  if (url === '#') {
    alert('WhatsApp enquiry is currently being configured. Please call us directly at ' + siteConfig.displayPhone);
    return;
  }
  window.open(url, '_blank', 'noopener,noreferrer');
}

export interface WhatsAppEnquiryData {
  name: string;
  customerType: string;
  service: string;
  location: string;
  monthlyBill?: string;
  message?: string;
}

/**
 * Formats a clean, readable structured WhatsApp message from form inputs
 */
export function formatEnquiryMessage(data: WhatsAppEnquiryData): string {
  const lines: string[] = [
    `Hello National Infratech Solutions,`,
    ``,
    `I would like to enquire about your solar & electrical services:`,
    `• Name: ${data.name.trim()}`,
    `• Customer Type: ${data.customerType}`,
    `• Interested Service: ${data.service}`,
    `• Location / City: ${data.location.trim()}`,
  ];

  if (data.monthlyBill && data.monthlyBill.trim()) {
    lines.push(`• Approx. Monthly Bill / Units: ${data.monthlyBill.trim()}`);
  }

  if (data.message && data.message.trim()) {
    lines.push(`• Requirements: ${data.message.trim()}`);
  }

  lines.push(``);
  lines.push(`Please share information and discuss the next steps. Thank you.`);

  return lines.join('\n');
}

/**
 * Formats an indicative solar calculator estimate into a WhatsApp message
 */
export function formatCalculatorWhatsAppMessage(details: {
  monthlyBill: number;
  recommendedKw: number;
  monthlyUnits: number;
  roofSpaceSqFt: number;
  customerType: string;
}): string {
  return [
    `Hello National Infratech Solutions,`,
    ``,
    `I checked the Solar Estimator on your website with the following details:`,
    `• Property Type: ${details.customerType}`,
    `• Approx. Monthly Bill: ₹${details.monthlyBill.toLocaleString('en-IN')}`,
    `• Estimated Recommended System: ~${details.recommendedKw} kW`,
    `• Indicative Monthly Generation: ~${details.monthlyUnits} units (kWh)`,
    `• Required Shadow-free Roof Space: ~${details.roofSpaceSqFt} sq.ft.`,
    ``,
    `I would like to arrange a site assessment / discussion to get an exact technical quotation.`,
  ].join('\n');
}
