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
    { label: 'Home', hindi: 'मुखपृष्ठ', tab: 'home' },
    { label: 'About', hindi: 'परिचय', tab: 'about' },
    { label: 'Developments', hindi: 'परियोजनाएं', tab: 'projects' },
    { label: 'Land Calculator', hindi: 'भूमि मापी', tab: 'calculator' },
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
          ? 'bg-[#FAF8F5]/96 backdrop-blur-2xl border-[#E8E2D5] shadow-[0_10px_30px_rgba(28,25,23,0.06)]'
          : 'bg-[#FAF8F5]/90 backdrop-blur-xl border-[#E8E2D5]/70'
      }`}
    >
      {/* Top Auspicious Micro-Bar */}
      <div className="bg-[#1C1917] text-[#E7C973] py-1 px-4 text-center text-[10px] sm:text-[11px] font-hindi tracking-wider flex items-center justify-between border-b border-[#C59B27]/20">
        <span className="hidden sm:inline font-mono text-[10px] text-stone-400">
          CIN: U68100BR2024PTC072121 &bull; RoC Patna
        </span>
        <span className="mx-auto sm:mx-0 font-medium">
          ॥ श्री बाबा बैद्यनाथाय नमः &bull; सत्यमेव जयते ॥
        </span>
        <span className="hidden sm:inline font-sans text-[10px] text-stone-300">
          औरंगाबाद, बिहार
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-2.5 min-h-[70px] sm:min-h-[76px]">
          
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
              imgClassName="h-10 sm:h-12 md:h-14 lg:h-15"
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

                  {/* Golden Line Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-[#C59B27] transition-all duration-300 origin-left ${
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
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden inline-flex items-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-full bg-[#1C1917] hover:bg-[#2C2724] text-[#FAF8F5] font-semibold text-xs tracking-wider uppercase whitespace-nowrap shrink-0 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm border border-[#C59B27]/40"
            >
              <span className="whitespace-nowrap text-[#FAF8F5]">Enquire Desk</span>
              <span className="text-[11px] text-[#E7C973] font-hindi">| संपर्क</span>
              <IconMinimalArrow size={11} color="gold" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1C1917] hover:bg-stone-200/60 active:scale-95 rounded-xl border border-[#E8E2D5] focus-visible:outline-none cursor-pointer shrink-0"
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
                  className={`w-full text-left px-4 py-3 rounded-xl transition-all flex items-center justify-between ${
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
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1C1917] text-[#FAF8F5] font-semibold text-xs uppercase tracking-wider shadow-sm border border-[#C59B27]/40 cursor-pointer"
              >
                <span>Open Formal Enquiry</span>
                <span className="text-[#E7C973] font-hindi">॥ आवेदन प्रपत्र ॥</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
