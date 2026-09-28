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
          ? 'bg-[#FAF8F5]/98 backdrop-blur-2xl border-[#DDD3C1] shadow-[0_4px_20px_rgba(20,15,10,0.08)]'
          : 'bg-[#FAF8F5]/92 backdrop-blur-xl border-[#E8E2D5] shadow-[0_2px_15px_rgba(20,15,10,0.04)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-2 sm:py-2.5 min-h-[72px] sm:min-h-[78px]">
          
          {/* 1. Official Master Logo (Pure Logo, No Rectangle) */}
          <button
            onClick={() => handleNavClick('home')}
            className="text-left group cursor-pointer focus-visible:outline-none p-0 flex items-center"
            aria-label="Baba Baidyanath Real Estate - Go to Homepage"
          >
            <CompanyLogo variant="horizontal" size="md" />
          </button>

          {/* 2. Desktop Navigation */}
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
                        ? 'text-[#991B1B] font-bold'
                        : 'text-[#44403C] hover:text-[#991B1B] font-semibold'
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

          {/* 3. Right Action Area */}
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
              className="lg:hidden p-1.5 sm:p-2 text-[#1C1917] hover:bg-black/5 rounded-xl border border-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] cursor-pointer"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#B45309]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* 5. Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E8E2D5] bg-[#FAF8F5]/98 backdrop-blur-2xl shadow-2xl animate-in slide-in-from-top-3 fade-in duration-200">
          <div className="px-5 pt-3 pb-5 space-y-2">
            
            {/* Logo in drawer without rectangle */}
            <div className="pb-3 mb-2 border-b border-[#E8E2D5] flex items-center justify-between">
              <CompanyLogo variant="full" size="sm" />
              <span className="text-[10px] font-mono text-[#B45309] bg-[#B45309]/10 px-2 py-0.5 rounded border border-[#B45309]/20 font-bold">
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
                      isActive ? 'text-[#991B1B] font-bold' : 'text-[#44403C] hover:text-[#991B1B]'
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

            {/* Compact Mobile Action in Drawer */}
            <div className="pt-3 border-t border-[#E8E2D5]">
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
