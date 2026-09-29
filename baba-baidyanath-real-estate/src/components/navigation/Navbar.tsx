import React, { useState, useEffect, useRef } from 'react';
import { TabType } from '../../types';
import { CompanyLogo } from '../common/CompanyLogo';
import { Menu, X, ChevronDown } from 'lucide-react';
import { IconMinimalArrow } from '../common/ThemeIcons';

export type DevelopmentCategory = 'all' | 'plots' | 'commercial' | 'farmlands' | 'villas';

export interface DevMenuItem {
  key: DevelopmentCategory;
  label: string;
  hindi: string;
  desc: string;
  badge?: string;
}

export const DEV_MENU_ITEMS: DevMenuItem[] = [
  { key: 'all', label: 'All Sites', hindi: 'समस्त', desc: 'Browse all master planned sectors', badge: 'All 4 Sectors' },
  { key: 'plots', label: 'Plots', hindi: 'भूखंड', desc: 'Demarcated residential layout townships', badge: '2 Sites' },
  { key: 'commercial', label: 'Commercial', hindi: 'व्यावसायिक', desc: 'Highway frontage plazas & business hubs', badge: '2 Sites' },
  { key: 'farmlands', label: 'Farmlands', hindi: 'फार्मलैंड्स', desc: 'Canal-irrigated agro estates & orchards', badge: '2 Sites' },
  { key: 'villas', label: 'Villas', hindi: 'विला', desc: 'Bespoke country villas & gated estates', badge: '2 Sites' },
];

interface NavbarProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onSelectDevelopmentCategory?: (category: DevelopmentCategory) => void;
  currentDevelopmentCategory?: DevelopmentCategory;
  onOpenEnquiry?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  onSelectTab,
  onSelectDevelopmentCategory,
  currentDevelopmentCategory = 'all',
  onOpenEnquiry,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [devDropdownOpen, setDevDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDevDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
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
    setDevDropdownOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDevSectionClick = (category: DevelopmentCategory) => {
    if (onSelectDevelopmentCategory) {
      onSelectDevelopmentCategory(category);
    } else {
      onSelectTab('projects');
    }
    setDevDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#FAF8F5]/96 backdrop-blur-2xl border-[#E8E2D5] shadow-[0_10px_30px_rgba(28,25,23,0.06)]'
          : 'bg-[#FAF8F5]/90 backdrop-blur-xl border-[#E8E2D5]/70'
      }`}
    >
      {/* Top Auspicious Micro-Bar with Perfect Alignment */}
      <div className="bg-[#151311] text-[#E7C973] border-b border-[#C59B27]/25 text-[11px] py-1.5 px-3 sm:px-6 lg:px-8">
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

              if (link.tab === 'projects') {
                return (
                  <div
                    key={link.tab}
                    ref={dropdownRef}
                    className="relative"
                    onMouseEnter={() => setDevDropdownOpen(true)}
                    onMouseLeave={() => setDevDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick('projects')}
                      className="group relative py-2 transition-colors duration-200 cursor-pointer whitespace-nowrap focus-visible:outline-none flex flex-col items-center"
                      aria-haspopup="true"
                      aria-expanded={devDropdownOpen}
                    >
                      <span className="flex items-center gap-1">
                        <span
                          className={`text-xs uppercase tracking-[0.16em] font-semibold transition-colors duration-200 ${
                            isActive
                              ? 'text-[#C59B27] font-bold'
                              : 'text-[#44403C] hover:text-[#C59B27]'
                          }`}
                        >
                          {link.label}
                        </span>
                        <ChevronDown className={`w-3 h-3 text-[#C59B27] transition-transform duration-200 ${devDropdownOpen ? 'rotate-180' : ''}`} />
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

                    {/* Dropdown Panel with Separate Section Menus */}
                    {devDropdownOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                        <div className="w-80 rounded-2xl bg-[#FAF8F5]/98 backdrop-blur-2xl border border-[#E8E2D5] p-2 shadow-[0_20px_45px_rgba(28,25,23,0.12)] space-y-1">
                          <div className="px-3 py-1.5 border-b border-[#E8E2D5] flex items-center justify-between">
                            <span className="text-[10px] font-mono uppercase tracking-widest text-[#9A6F20] font-bold">
                              Development Sectors
                            </span>
                            <span className="font-hindi text-[10.5px] text-[#C59B27]">॥ क्षेत्रवार विभाजन ॥</span>
                          </div>
                          {DEV_MENU_ITEMS.map((item) => {
                            const isItemActive = currentTab === 'projects' && currentDevelopmentCategory === item.key;
                            return (
                              <button
                                key={item.key}
                                onClick={() => handleDevSectionClick(item.key)}
                                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group/item cursor-pointer ${
                                  isItemActive
                                    ? 'bg-white border border-[#C59B27]/40 shadow-xs'
                                    : 'hover:bg-white/80 text-[#44403C]'
                                }`}
                              >
                                <div className="space-y-0.5">
                                  <div className="flex items-center gap-2">
                                    <span className={`text-xs sm:text-sm font-semibold leading-none inline-flex items-center transition-colors ${
                                      isItemActive ? 'text-[#C59B27]' : 'text-[#1C1917] group-hover/item:text-[#C59B27]'
                                    }`}>
                                      {item.label}
                                    </span>
                                    <span className="text-stone-400 font-light leading-none select-none text-xs sm:text-sm inline-flex items-center">|</span>
                                    <span className="font-hindi text-xs sm:text-sm font-semibold text-[#9A6F20] leading-none inline-flex items-center">
                                      {item.hindi}
                                    </span>
                                  </div>
                                  <div className="text-[10.5px] text-[#78716C] line-clamp-1">
                                    {item.desc}
                                  </div>
                                </div>
                                <span className="text-[10px] font-mono text-[#9A6F20] font-semibold shrink-0 bg-[#FAF8F5] px-2 py-0.5 rounded-md border border-[#E8E2D5]">
                                  {item.badge}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

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
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            <button
              onClick={onOpenEnquiry}
              className="relative group overflow-hidden inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#1C1917] hover:bg-[#2C2724] text-[#FAF8F5] transition-all duration-300 hover:scale-[1.02] active:scale-95 cursor-pointer shadow-sm border border-[#C59B27]/40"
              aria-label="Enquire Desk - संपर्क"
            >
              <span className="text-[11px] sm:text-sm font-semibold text-[#FAF8F5] leading-none inline-flex items-center whitespace-nowrap">
                Enquire Desk
              </span>
              <span className="text-stone-500 font-light text-[11px] sm:text-sm leading-none select-none inline-flex items-center">
                |
              </span>
              <span className="font-hindi text-[11px] sm:text-sm font-semibold text-[#E7C973] leading-none inline-flex items-center whitespace-nowrap">
                संपर्क
              </span>
              <IconMinimalArrow size={11} color="gold" className="shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 hidden xs:inline-block sm:inline-block" />
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

              if (link.tab === 'projects') {
                return (
                  <div key={link.tab} className="rounded-xl border border-[#E8E2D5] bg-stone-50/50 overflow-hidden">
                    <button
                      onClick={() => handleNavClick('projects')}
                      className={`w-full text-left px-4 py-3 transition-all flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-white text-[#C59B27] font-bold shadow-xs'
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

                    {/* Sub-menu section items for Developments */}
                    <div className="px-2 pb-2.5 pt-1 space-y-1 bg-white/80 border-t border-[#E8E2D5]/70">
                      <div className="px-2 py-1 text-[10px] font-mono text-[#9A6F20] uppercase tracking-wider font-semibold flex items-center justify-between">
                        <span>Section Menus:</span>
                        <span className="font-hindi text-[10px]">॥ अनुभाग विभाजन ॥</span>
                      </div>
                      {DEV_MENU_ITEMS.map((item) => {
                        const isSubActive = currentTab === 'projects' && currentDevelopmentCategory === item.key;
                        return (
                          <button
                            key={item.key}
                            onClick={() => handleDevSectionClick(item.key)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                              isSubActive
                                ? 'bg-[#1C1917] text-[#E7C973] font-bold shadow-xs'
                                : 'text-[#57534E] hover:bg-stone-100 hover:text-[#1C1917]'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className="font-semibold text-xs sm:text-sm leading-none inline-flex items-center">{item.label}</span>
                              <span className="text-stone-400 font-light leading-none select-none text-xs sm:text-sm inline-flex items-center">|</span>
                              <span className="font-hindi text-xs sm:text-sm font-semibold leading-none inline-flex items-center">{item.hindi}</span>
                            </div>
                            <span className="text-[10px] font-mono opacity-70">
                              {item.badge}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

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
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#1C1917] text-[#FAF8F5] transition-all shadow-sm border border-[#C59B27]/40 cursor-pointer"
              >
                <span className="text-xs sm:text-sm font-semibold text-[#FAF8F5] leading-none inline-flex items-center">
                  Enquire Desk
                </span>
                <span className="text-stone-500 font-light text-xs sm:text-sm leading-none select-none inline-flex items-center">
                  |
                </span>
                <span className="font-hindi text-xs sm:text-sm font-semibold text-[#E7C973] leading-none inline-flex items-center">
                  संपर्क
                </span>
                <IconMinimalArrow size={12} color="gold" className="shrink-0 ml-1" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
