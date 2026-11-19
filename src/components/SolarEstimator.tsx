import React, { useState } from 'react';
import { openWhatsAppChat, formatCalculatorWhatsAppMessage } from '../utils/whatsapp';
import { Calculator, MessageSquare, Sun, ShieldAlert, ArrowRight, Gauge, Layers } from 'lucide-react';

export const SolarEstimator: React.FC = () => {
  const [propertyType, setPropertyType] = useState<'Residential' | 'Commercial' | 'Industrial'>('Residential');
  const [monthlyBill, setMonthlyBill] = useState<number>(3500);

  // Estimation formulas based on standard Maharashtra tariff slabs and ~120-130 units/kW/month:
  // Avg cost per unit: Residential ~₹8.5/unit, Commercial ~₹12/unit, Industrial ~₹9.5/unit
  const tariffPerUnit = propertyType === 'Residential' ? 8.5 : propertyType === 'Commercial' ? 12.0 : 9.5;
  const estimatedUnits = Math.round(monthlyBill / tariffPerUnit);
  // ~1 kW generates ~125 kWh (units) monthly under average Maharashtra insolation
  const rawKw = estimatedUnits / 125;
  // Round to nearest 0.5 or integer
  const recommendedKw = Math.max(1, Math.round(rawKw * 2) / 2);
  const monthlyGeneration = Math.round(recommendedKw * 125);
  // Approx 80-100 sq.ft required per kW
  const roofSpaceSqFt = Math.round(recommendedKw * 90);

  const handleEnquireWhatsApp = () => {
    const message = formatCalculatorWhatsAppMessage({
      monthlyBill,
      recommendedKw,
      monthlyUnits: monthlyGeneration,
      roofSpaceSqFt,
      customerType: propertyType,
    });
    openWhatsAppChat(message);
  };

  return (
    <section id="estimator" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-soft/70">
      <div className="max-w-container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Educational solar context */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 bg-sky text-primary-dark px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-5">
              <Sun className="w-3.5 h-3.5 text-primary" />
              <span>Solar Knowledge & Sizing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-ink tracking-tight leading-[1.15] mb-5">
              How solar sizing <span className="text-primary">really works</span>.
            </h2>

            <p className="text-muted text-base sm:text-lg leading-relaxed mb-6">
              Rooftop solar is designed to offset grid consumption by generating clean electricity during peak daylight hours. The right system size depends on your actual consumption profile rather than guesswork.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-border">
                <div className="w-8 h-8 rounded-xl bg-lime/40 text-ink flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-ink">Shadow-Free Rooftop Area</h3>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    Each 1 kW requires ~80-100 sq.ft of unshaded space facing south or south-west for optimal daylight capture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-border">
                <div className="w-8 h-8 rounded-xl bg-sky text-primary-dark flex items-center justify-center shrink-0 mt-0.5 font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-ink">Sanctioned Load & Tariff Slabs</h3>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    Your DISCOM (MSEDCL) sanctioned connection capacity governs the maximum grid-connected solar inverter size permitted.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-border">
                <div className="w-8 h-8 rounded-xl bg-soft text-ink flex items-center justify-center shrink-0 mt-0.5 font-bold border border-border">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base text-ink">On-Grid Net Metering</h3>
                  <p className="text-xs sm:text-sm text-muted mt-1">
                    Excess power generated during peak sunshine is fed back into the electrical grid via a bi-directional net meter.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Indicative Estimator */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl sm:rounded-4xl bg-white p-6 sm:p-10 shadow-soft border border-border">
              <div className="flex items-center justify-between pb-6 border-b border-border mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary text-white flex items-center justify-center">
                    <Calculator className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-ink">Indicative Solar Estimator</h3>
                    <p className="text-xs text-muted">Engineering benchmark for Maharashtra</p>
                  </div>
                </div>

                <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-soft text-muted border border-border">
                  Indicative Only
                </span>
              </div>

              {/* Step 1: Property Type */}
              <div className="mb-6">
                <label className="block text-xs font-bold uppercase tracking-wider text-ink mb-2.5">
                  1. Select Property Type
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {(['Residential', 'Commercial', 'Industrial'] as const).map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setPropertyType(type)}
                      className={`py-3 px-3 rounded-2xl text-xs sm:text-sm font-bold transition-all border ${
                        propertyType === type
                          ? 'bg-primary text-white border-primary shadow-sm'
                          : 'bg-soft text-ink hover:bg-sky/40 border-border'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Monthly Electricity Bill Slider & Input */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="bill-range" className="text-xs font-bold uppercase tracking-wider text-ink">
                    2. Approximate Monthly Electricity Bill
                  </label>
                  <span className="text-xl sm:text-2xl font-extrabold text-primary">
                    ₹{monthlyBill.toLocaleString('en-IN')}
                  </span>
                </div>

                <input
                  id="bill-range"
                  type="range"
                  min={1000}
                  max={propertyType === 'Residential' ? 25000 : 150000}
                  step={propertyType === 'Residential' ? 500 : 2500}
                  value={monthlyBill}
                  onChange={(e) => setMonthlyBill(Number(e.target.value))}
                  className="w-full h-2 bg-soft rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
                />

                <div className="flex justify-between text-[11px] text-muted mt-2 font-medium">
                  <span>₹1,000/mo</span>
                  <span>{propertyType === 'Residential' ? '₹25,000+/mo' : '₹1,50,000+/mo'}</span>
                </div>
              </div>

              {/* Calculation Output Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-6">
                <div className="p-4 rounded-2xl bg-sky/30 border border-sky flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-primary-dark font-bold mb-2">
                    <Gauge className="w-4 h-4 text-primary" />
                    <span>Recommended Size</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-ink">
                      ~{recommendedKw}
                    </span>
                    <span className="text-sm font-bold text-muted ml-1">kW</span>
                  </div>
                  <p className="text-[11px] text-muted mt-1">Based on ~{estimatedUnits} units/month</p>
                </div>

                <div className="p-4 rounded-2xl bg-lime/20 border border-lime-dark/40 flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-ink font-bold mb-2">
                    <Sun className="w-4 h-4 text-ink" />
                    <span>Est. Monthly Yield</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-ink">
                      ~{monthlyGeneration}
                    </span>
                    <span className="text-sm font-bold text-muted ml-1">Units (kWh)</span>
                  </div>
                  <p className="text-[11px] text-muted mt-1">Average generation</p>
                </div>

                <div className="p-4 rounded-2xl bg-soft border border-border flex flex-col justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-muted font-bold mb-2">
                    <Layers className="w-4 h-4 text-ink" />
                    <span>Roof Area Needed</span>
                  </div>
                  <div>
                    <span className="text-2xl sm:text-3xl font-extrabold text-ink">
                      ~{roofSpaceSqFt}
                    </span>
                    <span className="text-sm font-bold text-muted ml-1">sq.ft</span>
                  </div>
                  <p className="text-[11px] text-muted mt-1">Shadow-free area</p>
                </div>
              </div>

              {/* Mandatory Transparent Disclaimer (README Section 5.F) */}
              <div className="p-3.5 rounded-2xl bg-soft border border-border flex items-start gap-2.5 mb-6 text-[11px] text-muted leading-relaxed">
                <ShieldAlert className="w-4 h-4 text-muted shrink-0 mt-0.5" />
                <p>
                  <strong className="text-ink font-semibold">Important Notice:</strong> Calculated figures are engineering approximations for planning purposes. We do not guarantee fixed payback or generation percentages. An on-site shadow assessment, structural review, and MSEDCL net-metering norms determine final system specifications.
                </p>
              </div>

              {/* WhatsApp Action Button with pre-filled figures */}
              <button
                type="button"
                onClick={handleEnquireWhatsApp}
                className="w-full flex items-center justify-center gap-2.5 bg-lime hover:bg-lime-dark text-ink font-bold text-sm sm:text-base py-4 px-6 rounded-2xl shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-lime-dark"
              >
                <MessageSquare className="w-5 h-5 fill-ink" />
                <span>Enquire About This Estimate on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
