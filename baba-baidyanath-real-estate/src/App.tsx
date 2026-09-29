import { useState } from 'react';
import { TabType } from './types';
import { Navbar } from './components/navigation/Navbar';
import { Footer } from './components/navigation/Footer';
import { Hero } from './components/hero/Hero';
import { CorporateFactsBar } from './components/company/CorporateFactsBar';
import { ProjectsSection } from './components/projects/ProjectsSection';
import { LandAndEMICalculator } from './components/tools/LandAndEMICalculator';
import { AboutPage } from './components/company/AboutPage';
import { ContactPage } from './components/contact/ContactPage';
import { LegalPage } from './components/legal/LegalPages';
import { EnquiryModal } from './components/enquiry/EnquiryModal';
import { GridBackgroundCanvas } from './components/canvas/GridBackgroundCanvas';
import { LoadingScreen } from './components/loading/LoadingScreen';
import { MobileBottomNav } from './components/navigation/MobileBottomNav';
import { BackToTopButton } from './components/common/BackToTopButton';
import { ArrowUpRight, Sparkles } from 'lucide-react';

export default function App() {
  const [currentTab, setCurrentTab] = useState<TabType>('home');
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [, setIsLoadingComplete] = useState(false);

  const handleSelectTab = (tab: TabType) => {
    setCurrentTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#1C1917] selection:bg-[#C59B27]/30 selection:text-[#0F0E0D] relative font-jakarta">
      
      {/* 1. Cinematic Loading Page */}
      <LoadingScreen onComplete={() => setIsLoadingComplete(true)} />

      {/* 2. Navigation Bar (WARM IVORY / ALABASTER) */}
      <Navbar
        currentTab={currentTab}
        onSelectTab={handleSelectTab}
        onOpenEnquiry={() => setIsEnquiryOpen(true)}
      />

      {/* 3. Main Content Area */}
      <main className="flex-1 relative w-full overflow-x-hidden">
        {currentTab === 'home' && (
          <div className="w-full">
            {/* Cinematic Hero */}
            <Hero
              onOpenEnquiry={() => setIsEnquiryOpen(true)}
              onExplorePortfolio={() => handleSelectTab('projects')}
            />

            {/* REST OF HOME SECTIONS IN LUXURY MINIMAL LIGHT THEME */}
            <div className="relative w-full bg-[#FAF8F5] text-[#1C1917] overflow-hidden">
              {/* Visible Architectural Grid Canvas */}
              <GridBackgroundCanvas currentTab={currentTab} />

              {/* Corporate Facts Bar */}
              <div className="relative z-10">
                <CorporateFactsBar />
              </div>

              {/* Projects in Preparation */}
              <div className="relative z-10">
                <ProjectsSection
                  showFilterMenu={false}
                  onViewAllDevelopments={() => handleSelectTab('projects')}
                  onOpenEnquiry={() => setIsEnquiryOpen(true)}
                />
              </div>

              {/* Land & EMI Calculator Teaser Banner */}
              <div className="relative z-10 py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="rounded-2xl p-6 sm:p-9 bg-white border border-[#E8E2D5] flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_15px_35px_rgba(28,25,23,0.05)]">
                  <div className="space-y-1.5 text-center md:text-left">
                    <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A6F20] font-mono font-semibold">
                      <span>Regional Land Computing Engine</span>
                      <span className="font-hindi text-[11px] text-[#C59B27]">॥ प्रामाणिक क्षेत्रीय गणना ॥</span>
                    </div>
                    <h3 className="font-serif text-xl sm:text-2xl text-[#1C1917] font-bold">
                      Bihar Land Measurement &amp; EMI Calculator
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E]">
                      Instantly calculate Katha, Bigha, Dismil, Square Feet, and loan amortization tailored for Bihar registry benchmarks.
                    </p>
                  </div>
                  <button
                    onClick={() => handleSelectTab('calculator')}
                    className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold text-xs tracking-wider uppercase btn-gold-border hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2 shadow-sm"
                  >
                    <span>Launch Full Calculator</span>
                    <ArrowUpRight className="w-4 h-4 text-[#0F0E0D]" />
                  </button>
                </div>
              </div>

              {/* Direct Enquiry CTA Banner in Warm Light Luxury */}
              <section className="py-16 sm:py-24 relative z-10 border-t border-[#E8E2D5] px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#FAF8F5] to-[#F5EFE6]">
                <div className="max-w-5xl mx-auto">
                  <div className="rounded-3xl p-8 sm:p-14 bg-white border border-[#E8E2D5] text-center space-y-6 shadow-[0_20px_50px_rgba(28,25,23,0.06)]">
                    <div className="flex items-center justify-center gap-2 text-xs text-[#9A6F20] font-mono uppercase tracking-widest mx-auto">
                      <Sparkles className="w-3.5 h-3.5 text-[#C59B27]" />
                      <span className="font-hindi text-sm font-semibold">॥ निःशुल्क परामर्श एवं स्थल निरीक्षण ॥</span>
                    </div>

                    <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] max-w-2xl mx-auto leading-tight">
                      अपनी भूमि आवश्यकता के लिए आज ही संपर्क करें
                      <span className="block text-xl sm:text-2xl lg:text-3xl text-[#9A6F20] font-normal mt-2 font-cinzel">
                        Let's Discuss Your Land Requirement
                      </span>
                    </h2>

                    <p className="text-sm sm:text-base text-[#57534E] max-w-xl mx-auto leading-relaxed font-normal">
                      Whether you are seeking clear-title residential or commercial land parcels, or are a local landowner exploring joint development partnerships in Aurangabad, Bihar.
                    </p>

                    <div className="pt-2">
                      <button
                        onClick={() => setIsEnquiryOpen(true)}
                        className="px-8 sm:px-10 py-4 rounded-full bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold text-xs sm:text-sm uppercase tracking-[0.16em] cursor-pointer inline-flex items-center justify-center gap-2.5 btn-gold-border hover:scale-[1.02] transition-all shadow-md"
                      >
                        <span>Open Formal Enquiry Desk</span>
                        <span className="font-hindi text-xs">| ॥ आवेदन करें ॥</span>
                        <ArrowUpRight className="w-4 h-4 text-[#0F0E0D]" />
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        )}

        {/* DEDICATED TABS */}
        {currentTab !== 'home' && (
          <div className="relative w-full bg-[#FAF8F5] text-[#1C1917] min-h-[75vh] overflow-hidden">
            <GridBackgroundCanvas currentTab={currentTab} />

            <div className="relative z-10">
              {currentTab === 'about' && (
                <AboutPage onOpenEnquiry={() => setIsEnquiryOpen(true)} />
              )}

              {currentTab === 'services' && (
                <div className="space-y-0">
                  <ProjectsSection onOpenEnquiry={() => setIsEnquiryOpen(true)} showFilterMenu={true} />
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <CorporateFactsBar />
                  </div>
                </div>
              )}

              {currentTab === 'projects' && (
                <div className="space-y-0">
                  <ProjectsSection onOpenEnquiry={() => setIsEnquiryOpen(true)} showFilterMenu={true} />
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

      {/* Corporate Statutory Footer */}
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
