import React, { useState, useEffect } from 'react';
import { TabType } from '../../types';
import { CompanyLogo } from '../common/CompanyLogo';
import { Menu, X } from 'lucide-react';
import { IconDivineSpark, IconMinimalArrow } from '../common/ThemeIcons';

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

  const navLinks: { label: string; tab: TabType }[] = [
    { label: 'Home', tab: 'home' },
    { label: 'About', tab: 'about' },
    { label: 'Capabilities', tab: 'services' },
    { label: 'Developments', tab: 'projects' },
    { label: 'Calculator', tab: 'calculator' },
    { label: 'Contact', tab: 'contact' },
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
          ? 'bg-[#0A0908]/80 backdrop-blur-2xl backdrop-saturate-180 border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)]'
          : 'bg-black/45 backdrop-blur-2xl backdrop-saturate-150 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-2.5 min-h-[72px] sm:min-h-[78px]">
          
          {/* 1. Official Master Logo with Radiant Contour Glow */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-none p-0 flex items-center shrink-0"
            aria-label="Baba Baidyanath Real Estate - Go to Homepage"
          >
            <CompanyLogo
              variant="horizontal"
              size="md"
              theme="dark"
              glow={true}
              imgClassName="h-10 sm:h-12 md:h-14 lg:h-16"
            />
          </button>

          {/* 2. Desktop Navigation in Dark Theme */}
          <nav
            className="hidden lg:flex items-center gap-7 xl:gap-9"
            aria-label="Primary Navigation"
          >
            {navLinks.map((link) => {
              const isActive = currentTab === link.tab;
              return (
                <button
                  key={link.tab}
                  onClick={() => handleNavClick(link.tab)}
                  className="group relative py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive
                        ? 'text-[#F59E0B] font-extrabold drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]'
                        : 'text-stone-300 hover:text-[#FBBF24] font-semibold'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Golden Gradient Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2.5px] w-full bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A] transition-all duration-300 origin-left ${
                      isActive
                        ? 'scale-x-100 opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
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
              className="relative group overflow-hidden inline-flex items-center gap-1 sm:gap-1.5 px-3.5 sm:px-4 py-2 rounded-full bg-gradient-to-r from-[#881337] via-[#991B1B] to-[#B45309] text-white font-bold text-[11px] sm:text-xs tracking-wider uppercase whitespace-nowrap shrink-0 transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-[0_0_15px_rgba(245,158,11,0.25)] hover:shadow-[0_0_24px_rgba(245,158,11,0.5)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 border border-amber-300/40"
            >
              <span className="whitespace-nowrap">Enquire Now</span>
              <IconMinimalArrow size={11} color="gold" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-stone-200 hover:bg-white/10 active:scale-95 rounded-xl border border-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer shrink-0"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Drawer Menu (Lucid Dark Frosted Glass) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/15 bg-[#0A0908]/95 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-3 fade-in duration-200">
          <div className="px-5 pt-3 pb-5 space-y-2">
            
            {/* Logo in drawer with luminous contour glow */}
            <div className="pb-3 mb-2 border-b border-white/10 flex items-center justify-between">
              <CompanyLogo variant="full" size="sm" theme="dark" glow={true} />
              <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-400/30 font-bold">
                RoC Patna
              </span>
            </div>

            {/* Nav list */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentTab === link.tab;
                return (
                  <button
                    key={link.tab}
                    onClick={() => handleNavClick(link.tab)}
                    className={`block w-full text-left py-2.5 px-2 text-xs uppercase tracking-[0.18em] transition-colors relative group ${
                      isActive ? 'text-amber-400 font-bold' : 'text-stone-300 hover:text-amber-300 font-semibold'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`block mt-1.5 h-[2px] w-full bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A] transition-all duration-200 origin-left ${
                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Compact Mobile Action in Drawer */}
            <div className="pt-3 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry?.();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#881337] via-[#991B1B] to-[#B45309] text-white font-bold text-xs uppercase tracking-wider shadow-md border border-amber-300/40"
              >
                <IconDivineSpark size={13} color="amber" />
                <span className="whitespace-nowrap">Schedule Consultation</span>
                <IconMinimalArrow size={12} color="amber" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
