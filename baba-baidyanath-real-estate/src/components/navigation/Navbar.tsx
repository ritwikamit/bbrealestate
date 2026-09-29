import React, { useState, useEffect } from 'react';
import { TabType } from '../../types';
import { CompanyLogo } from '../common/CompanyLogo';
import { Menu, X } from 'lucide-react';
import { IconMinimalArrow } from '../common/ThemeIcons';

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onOpenEnquiry,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; hindi: string; tab: TabType }[] = [
    { label: 'Home', hindi: 'होम', tab: 'home' },
    { label: 'About', hindi: 'परिचय', tab: 'about' },
    { label: 'Plotting', hindi: 'प्लॉटिंग', tab: 'plotting' },
    { label: 'Locations', hindi: 'लोकेशन', tab: 'locations' },
    { label: 'Association', hindi: 'वास्तु विहार', tab: 'association' },
    { label: 'Contact', hindi: 'संपर्क', tab: 'contact' },
  ];

  const handleNavClick = (tab: TabType) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#FAF8F5]/96 backdrop-blur-2xl border-[#FACC15]/20 shadow-[0_10px_30px_rgba(28,25,23,0.06)]'
          : 'bg-[#FAF8F5]/90 backdrop-blur-xl border-[#FACC15]/15'
      }`}
    >
      {/* Top Auspicious Micro-Bar with Perfect Alignment */}
      <div className="bg-[#151311] text-[#E7C973] text-[11px] py-1.5 px-3 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between sm:grid sm:grid-cols-3 text-center gap-2">
          <div className="hidden sm:flex items-center justify-start gap-2 font-mono text-[10.5px] text-stone-300">
            <span className="text-[#C59B27] font-semibold">CIN:</span>
            <span>U68100BR2024PTC072121</span>
            <span className="text-stone-500">•</span>
            <span>RoC Patna</span>
          </div>
          <div className="font-hindi text-xs sm:text-[13px] tracking-wide text-[#F3E5AB] font-medium flex items-center justify-center gap-1.5 mx-auto">
            <span>॥ श्री बाबा बैद्यनाथाय नमः • सत्यमेव जयते ॥</span>
          </div>
          <div className="hidden sm:flex items-center justify-end gap-2 text-stone-300 font-hindi text-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span>औरंगाबाद, बिहार (८२४१०१)</span>
          </div>
        </div>
      </div>
      {/* Luminous Yellow Gradient Micro-Divider Line */}
      <div className="border-yellow-gradient-line w-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-2.5 min-h-[62px] sm:min-h-[76px]">
          
          {/* 1. Official Master Logo (Flawlessly Visible on Warm Ivory Background) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-none p-0 flex items-center shrink-0"
            aria-label="Baba Baidyanath Real Estate - Go to Homepage"
          >
            <CompanyLogo
              variant="horizontal"
              size="md"
              theme="light"
              imgClassName="h-9 sm:h-12 md:h-14 lg:h-15"
            />
          </button>

          {/* 2. Desktop Navigation in Minimal Architectural Style */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-8"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentTab === link.tab;

              return (
                <button
                  key={link.tab}
                  onClick={() => handleNavClick(link.tab)}
                  className="group relative py-2 transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none flex flex-col items-center"
                >
                  <span
                    className={`text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-200 ${
                      isActive
                        ? 'text-[#C59B27] font-bold'
                        : 'text-[#44403C] hover:text-[#C59B27]'
                    }`}
                  >
                    {link.label}
                  </span>
                  <span className="text-[10px] text-stone-400 font-hindi -mt-0.5 group-hover:text-[#9A6F20] transition-colors">
                    {link.hindi}
                  </span>

                  {/* Golden Yellow Line Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] w-full bg-gradient-to-r from-transparent via-[#FACC15] via-[#EAB308] to-transparent shadow-[0_2px_8px_rgba(250,204,21,0.5)] transition-all duration-300 origin-left ${
                      isActive
                        ? 'scale-x-100 opacity-100'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* 3. Right Action Area */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1C1917] hover:bg-[#262118] text-[#FAF8F5] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm border border-[#FACC15]/65 hover:border-[#FEF08A] shadow-[0_2px_14px_rgba(234,179,8,0.22)] hover:shadow-[0_4px_22px_rgba(250,204,21,0.45)]"
              aria-label="Enquire Now - संपर्क"
            >
              <span className="inline-flex items-baseline gap-1.5 sm:gap-2">
                <span className="text-[11px] sm:text-sm font-semibold text-[#FAF8F5] whitespace-nowrap">
                  Enquire Now
                </span>
                <span className="text-[#FACC15] font-semibold text-[11px] sm:text-sm select-none">
                  |
                </span>
                <span className="font-hindi text-[11px] sm:text-sm font-semibold text-[#FACC15] whitespace-nowrap drop-shadow-[0_0_8px_rgba(250,204,21,0.4)]">
                  संपर्क
                </span>
              </span>
              <IconMinimalArrow size={11} color="gold" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 hidden xs:inline-block sm:inline-block self-center" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#1C1917] hover:bg-stone-200/60 active:scale-95 rounded-xl border border-[#E8E2D5] focus-visible:outline-none cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C59B27]" /> : <Menu className="w-5 h-5 text-[#1C1917]" />}
            </button>
          </div>

        </div>
      </div>

      {/* 4. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E2D5] bg-[#FAF8F5]/98 backdrop-blur-2xl shadow-xl animate-in slide-in-from-top-3 fade-in duration-200">
          <div className="px-4 pt-3 pb-6 space-y-2">
            
            {/* Header in mobile dropdown */}
            <div className="flex items-center justify-between pb-3 border-b border-[#E8E2D5] mb-2 px-1">
              <CompanyLogo variant="full" size="sm" theme="light" />
              <div className="text-[10px] text-[#9A6F20] font-hindi font-medium">
                ॥ शुभ आरंभ ॥
              </div>
            </div>

            {navLinks.map((link) => {
              const isActive = currentTab === link.tab;

              return (
                <button
                  key={link.tab}
                  onClick={() => handleNavClick(link.tab)}
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    isActive
                      ? 'bg-white border border-[#C59B27]/40 text-[#C59B27] font-bold shadow-xs'
                      : 'text-[#44403C] hover:bg-white/70 hover:text-[#1C1917]'
                  }`}
                >
                  <div className="flex items-baseline gap-2.5">
                    <span className="text-xs uppercase tracking-wider font-semibold">
                      {link.label}
                    </span>
                    <span className="text-[11px] text-stone-500 font-hindi">
                      {link.hindi}
                    </span>
                  </div>
                  <IconMinimalArrow size={12} color={isActive ? 'amber' : 'stone'} />
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  if (onOpenEnquiry) onOpenEnquiry();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1C1917] text-[#FAF8F5] transition-all shadow-[0_2px_14px_rgba(234,179,8,0.2)] border border-[#FACC15]/60 hover:border-[#FEF08A] cursor-pointer"
              >
                <span className="inline-flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm font-semibold text-[#FAF8F5]">
                    Enquire Now
                  </span>
                  <span className="text-[#FACC15] font-semibold text-xs sm:text-sm select-none">
                    |
                  </span>
                  <span className="font-hindi text-xs sm:text-sm font-semibold text-[#FACC15]">
                    संपर्क
                  </span>
                </span>
                <IconMinimalArrow size={12} color="gold" className="shrink-0 ml-1 self-center" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
