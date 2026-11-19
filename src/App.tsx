import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Services } from './components/Services';
import { SolarEstimator } from './components/SolarEstimator';
import { Process } from './components/Process';
import { ApplicationsGallery } from './components/ApplicationsGallery';
import { TrustSection } from './components/TrustSection';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF8] text-ink overflow-x-hidden selection:bg-lime selection:text-ink">
      {/* Navigation Header */}
      <Header />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. About NIS Section */}
        <About />

        {/* 3. Why Choose NIS / Feature Accordion */}
        <WhyChooseUs />

        {/* 4. Confirmed Services (7 Categories) */}
        <Services />

        {/* 5. Solar Knowledge & Indicative Estimator */}
        <SolarEstimator />

        {/* 6. Step-by-Step Operating Process */}
        <Process />

        {/* 7. Illustrative Applications & Gallery */}
        <ApplicationsGallery />

        {/* 8. Customer Trust & Engineering Integrity */}
        <TrustSection />

        {/* 9. Accessible FAQs */}
        <FAQSection />

        {/* 10. Contact & Interactive WhatsApp Conversion */}
        <ContactSection />
      </main>

      {/* Comprehensive Footer */}
      <Footer />

      {/* Persistent Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
};

export default App;
