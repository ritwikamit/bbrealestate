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
          ? 'bg-black/92 backdrop-blur-2xl border-white/[0.12] shadow-[0_12px_40px_rgba(0,0,0,0.85)]'
          : 'bg-black/80 backdrop-blur-xl border-white/[0.08] shadow-[0_4px_24px_rgba(0,0,0,0.6)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-2.5 min-h-[72px] sm:min-h-[78px]">
          
          {/* 1. Official 3D Master Logo with High-Contrast Dark Theme */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] rounded-2xl py-1 px-2.5 -ml-1 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.12] transition-all flex items-center shadow-sm"
            aria-label="Baba Baidyanath Real Estate - Go to Homepage"
          >
            <CompanyLogo variant="horizontal" size="md" theme="dark" />
          </button>

          {/* 2. Desktop Navigation: Open Minimalist Links without Cylinders */}
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
                  className="group relative py-2 text-xs uppercase tracking-[0.2em] font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none focus-visible:text-white"
                >
                  <span
                    className={`transition-colors duration-200 ${
                      isActive
                        ? 'text-white font-semibold'
                        : 'text-stone-300 group-hover:text-white'
                    }`}
                  >
                    {link.label}
                  </span>

                  {/* Gradient Underline Animation */}
                  <span
                    className={`absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FDE047] transition-all duration-300 origin-left ${
                      isActive
                        ? 'scale-x-100 opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
                        : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                    }`}
                  />
                </button>
              );
            })}
          </nav>

          {/* 3. Right Action Area: Clean Enquire Button without Star Icon */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-[11px] sm:text-xs tracking-wider uppercase whitespace-nowrap shrink-0 transition-all duration-300 btn-gold-border hover:scale-[1.02] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
            >
              <span className="whitespace-nowrap">Enquire Now</span>
              <IconMinimalArrow size={11} color="stone" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 sm:p-2 text-[#FAF8F5] hover:bg-white/10 rounded-xl border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F59E0B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Drawer Menu without Cylinders */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/[0.12] bg-black/95 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-3 fade-in duration-200">
          <div className="px-5 pt-3 pb-5 space-y-2">
            
            {/* Logo in drawer */}
            <div className="pb-3 mb-2 border-b border-white/[0.08] flex items-center justify-between">
              <CompanyLogo variant="full" size="sm" theme="dark" />
              <span className="text-[10px] font-mono text-[#F59E0B] bg-[#F59E0B]/10 px-2 py-0.5 rounded border border-[#F59E0B]/20">
                RoC Patna
              </span>
            </div>

            {/* Nav list: clean open links without cylinders */}
            <div className="space-y-1">
              {navLinks.map((link) => {
                const isActive = currentTab === link.tab;
                return (
                  <button
                    key={link.tab}
                    onClick={() => handleNavClick(link.tab)}
                    className={`block w-full text-left py-2.5 px-2 text-xs uppercase tracking-[0.18em] transition-colors relative group ${
                      isActive ? 'text-white font-bold' : 'text-stone-300 hover:text-white'
                    }`}
                  >
                    <span>{link.label}</span>
                    <span
                      className={`block mt-1.5 h-[2px] w-full bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FDE047] transition-all duration-200 origin-left ${
                        isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Compact Mobile Action in Drawer with Gold Border */}
            <div className="pt-3 border-t border-white/[0.08]">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEnquiry?.();
                }}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs uppercase tracking-wider btn-gold-border"
              >
                <IconDivineSpark size={13} color="stone" />
                <span className="whitespace-nowrap">Schedule Consultation</span>
                <IconMinimalArrow size={12} color="stone" />
              </button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
