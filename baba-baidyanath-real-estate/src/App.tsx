import { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { Hero } from './components/hero/Hero';
import { CorporateFactsBar } from './components/company/CorporateFactsBar';
import { CompanyOverview } from './components/company/CompanyOverview';
import { CapabilitiesSection } from './components/services/CapabilitiesSection';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { LandAndEMICalculator } from './components/tools/LandAndEMICalculator';
import { LocationSection } from './components/location/LocationSection';
import { FAQSection } from './components/company/FAQSection';
import { ClientVoicesSection } from './components/testimonials/ClientVoicesSection';
import { AboutPage } from './components/company/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { LegalPage } from './components/legal/LegalPages';
import { EnquiryModal } from './components/enquiry/EnquiryModal';
import { GridBackgroundCanvas } from './components/canvas/GridBackgroundCanvas';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { MobileBottomNav } from './components/navigation/MobileBottomNav';
import { BackToTopButton } from './components/common/BackToTopButton';
import { ArrowUpRight, ShieldCheck, MapPin, Sparkles } from 'lucide-react';
import { COMPANY_DATA } from './data/company';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [, setIsLoadingComplete] = useState(false);

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070605] text-[#1C1917] selection:bg-[#F59E0B] selection:text-[#0C0A09] relative">
      
      {/* 1. Cinematic Loading Page */}
      <LoadingScreen onComplete={() => setIsLoadingComplete(true)} />

      {/* 2. Navigation Bar (LUCID BLACK) */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* 4. Main Content Area */}
      <main className="flex-1 relative w-full overflow-x-hidden">
        {currentTab === 'home' && (
          <div className="w-full">
            {/* Cinematic Hero (DARK THEME with pure looping video animation) */}
            <Hero
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
              onExplorePortfolio={() => handleSelectTab('projects')}
            />

            {/* REST OF HOME SECTIONS IN LIGHT THEME WITH AESTHETIC CANVAS */}
            <div className="relative w-full bg-[#FAF8F5] text-[#1C1917] overflow-hidden">
              {/* Visible Architectural Grid Canvas with intersection points & side edge fading */}
              <GridBackgroundCanvas currentTab={currentTab} />

              {/* Corporate Facts Bar */}
              <div className="relative z-10">
                <CorporateFactsBar />
              </div>

              {/* Corporate Overview */}
              <div className="relative z-10">
                <CompanyOverview
                  onOpenEnquiry={() => setIsEnquiryOpen(true)}
                />
              </div>

              {/* Capabilities */}
              <div className="relative z-10">
                <CapabilitiesSection
                  onOpenEnquiry={() => setIsEnquiryOpen(true)}
                />
              </div>

              {/* Projects in Preparation */}
              <div className="relative z-10">
                <ProjectsSection
                  onOpenEnquiry={() => setIsEnquiryOpen(true)}
                />
              </div>

              {/* Land & EMI Calculator Teaser Banner */}
              <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="rounded-2xl p-6 sm:p-9 bg-white border border-[#E7E2D8] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_35px_rgba(28,25,23,0.06)]">
                  <div className="space-y-1.5 text-center md:text-left">
                    <span className="text-[11px] uppercase tracking-widest text-[#B45309] font-mono font-semibold">
                      Interactive Regional Tool
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-bold">
                      Bihar Land Measurement &amp; EMI Calculator
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E]">
                      Instantly calculate Katha, Bigha, Dismil, Square Feet, and loan amortization benchmarks.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectTab('calculator')}
                    className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs tracking-wider uppercase btn-gold-border hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Launch Full Calculator</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0C0A09]" />
                  </button>
                </div>
              </div>

              {/* Client Voices / Verified Testimonials Carousel */}
              <div className="relative z-10">
                <ClientVoicesSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
              </div>

              {/* Location & Map Section */}
              <div className="relative z-10">
                <LocationSection />
              </div>

              {/* Frequently Asked Questions */}
              <div className="relative z-10">
                <FAQSection />
              </div>

              {/* Direct Enquiry CTA Banner in Warm Light Luxury leading to dark footer */}
              <section className="py-16 sm:py-24 relative z-10 border-t border-[#E7E2D8] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] to-[#F3EFE6]">
                <div className="max-w-5xl mx-auto">
                  <div className="rounded-3xl p-8 sm:p-14 bg-white border border-[#E7E2D8] text-center space-y-6 shadow-[0_20px_50px_rgba(28,25,23,0.08)]">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] font-mono uppercase tracking-widest mx-auto">
                      <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
                      <span>Confidential Consultation</span>
                    </div>

                    <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1C1917] max-w-2xl mx-auto leading-tight">
                      Let's Discuss Your Property Requirement.
                    </h2>

                    <p className="text-sm sm:text-base text-[#57534E] max-w-xl mx-auto leading-relaxed font-normal">
                      Whether you are seeking clear-title residential or commercial land parcels, or are a local landowner exploring joint development partnerships in Aurangabad, Bihar.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsEnquiryOpen(true)}
                        className="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs sm:text-sm uppercase tracking-[0.18em] cursor-pointer inline-flex items-center justify-center gap-2.5 btn-gold-border hover:scale-[1.02] transition-all"
                      >
                        <span>Open Formal Enquiry Desk</span>
                        <ArrowUpRight className="w-4 h-4 text-[#0C0A09]" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* DEDICATED TABS - ALL IN LUXURY LIGHT THEME WITH ARCHITECTURAL CANVAS */}
        {currentTab !== 'home' && (
          <div className="relative w-full bg-[#FAF8F5] text-[#1C1917] min-h-[75vh] overflow-hidden">
            <GridBackgroundCanvas currentTab={currentTab} />

            <div className="relative z-10">
              {currentTab === 'about' && (
                <AboutPage onOpenEnquiry={() => setIsEnquiryOpen(true)} />
              )}

              {currentTab === 'services' && (
                <div className="space-y-0">
                  <CapabilitiesSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <CorporateFactsBar />
                  </div>
                </div>
              )}

              {currentTab === 'projects' && (
                <div className="space-y-0">
                  <ProjectsSection onOpenEnquiry={() => setIsEnquiryOpen(true)} />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <LandAndEMICalculator />
                  </div>
                </div>
              )}

              {currentTab === 'calculator' && (
                <div className="py-8">
                  <LandAndEMICalculator />
                </div>
              )}

              {currentTab === 'contact' && (
                <ContactPage />
              )}

              {currentTab === 'privacy' && (
                <LegalPage type="privacy" />
              )}

              {currentTab === 'terms' && (
                <LegalPage type="terms" />
              )}

              {currentTab === 'disclaimer' && (
                <LegalPage type="disclaimer" />
              )}
            </div>
          </div>
        )}
      </main>

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal
        isOpen={isEnquiryOpen}
        onClose={() => setIsEnquiryOpen(false)}
      />

      {/* Corporate Statutory Footer (DARK THEME) */}
      <Footer
        onSelectTab={handleSelectTab}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* Floating Circular Back to Top Button */}
      <BackToTopButton />

      {/* Smartphone & Tablet Bottom Navigation Dock */}
      <MobileBottomNav
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

    </div>
  );
}
