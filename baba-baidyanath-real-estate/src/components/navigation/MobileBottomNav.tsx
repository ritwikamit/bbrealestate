import React, { useState } from 'react';
import { TabType } from '../../types';
import { X, Menu } from 'lucide-react';
import {
  IconCorporateChamber,
  IconExecutiveSeal,
  IconVastuMandala,
  IconMathFeasibility,
  IconDeskPhone,
  IconTitleSeal,
  IconGeoPin,
  IconMinimalArrow,
  IconDivineSpark
} from '../common/ThemeIcons';
import { COMPANY_DATA } from '../../data/company';

interface MobileBottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onSelectDevelopmentCategory?: (category: 'all' | 'plots' | 'commercial' | 'farmlands' | 'villas') => void;
  currentDevelopmentCategory?: string;
  onOpenEnquiry?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onSelectTab,
  onSelectDevelopmentCategory,
  currentDevelopmentCategory = 'all',
  onOpenEnquiry,
}) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const mainTabs: {
    label: string;
    tab: TabType;
    icon: React.FC<{ className?: string; size?: number; color?: 'gold' | 'amber' | 'crimson' | 'emerald' | 'stone' | 'white' }>;
  }[] = [
    { label: 'Home', tab: 'home', icon: IconCorporateChamber },
    { label: 'About', tab: 'about', icon: IconExecutiveSeal },
    { label: 'Projects', tab: 'projects', icon: IconVastuMandala },
    { label: 'Calc', tab: 'calculator', icon: IconMathFeasibility },
    { label: 'Contact', tab: 'contact', icon: IconGeoPin },
  ];

  const handleTabClick = (tab: TabType) => {
    onSelectTab(tab);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDevCategoryClick = (cat: 'all' | 'plots' | 'commercial' | 'farmlands' | 'villas') => {
    if (onSelectDevelopmentCategory) {
      onSelectDevelopmentCategory(cat);
    } else {
      onSelectTab('projects');
    }
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Quick More Drawer Modal on Mobile & Tablet */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end" role="dialog" aria-modal="true">
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer sheet */}
          <div className="relative z-10 bg-[#0F0E0D]/98 backdrop-blur-2xl border-t border-[#C59B27]/30 rounded-t-3xl p-5 pb-24 shadow-[0_-12px_45px_rgba(0,0,0,0.8)] max-h-[85vh] overflow-y-auto">
            {/* Grab Handle */}
            <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E7C973] font-bold block">
                  Quick Navigation &amp; Governance
                </span>
                <span className="text-sm font-serif text-white font-bold">
                  बाबा बैद्यनाथ रियल एस्टेट प्राइवेट लिमिटेड
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 transition-colors cursor-pointer"
                aria-label="Close menu drawer"
              >
                <X className="w-5 h-5 text-[#E7C973]" />
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenEnquiry?.();
                }}
                className="p-3 rounded-xl bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(197,155,39,0.3)] border border-[#E7C973]/40 active:scale-98 transition-transform cursor-pointer"
              >
                <IconDivineSpark size={14} color="gold" />
                <span className="leading-none inline-flex items-center text-xs font-bold">Enquire Desk</span>
                <span className="text-stone-700 font-light leading-none select-none text-xs inline-flex items-center">|</span>
                <span className="font-hindi text-xs font-bold leading-none inline-flex items-center">संपर्क</span>
              </button>
              <a
                href={`tel:${COMPANY_DATA.phone}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-200 font-semibold text-xs border border-white/15 shadow-sm flex items-center justify-center gap-1.5 active:scale-98 transition-transform cursor-pointer"
              >
                <IconDeskPhone size={14} color="gold" />
                <span>Direct Desk</span>
              </a>
            </div>

            {/* Navigation Grid */}
            <div className="space-y-1 mb-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-semibold block px-2 mb-2">
                All Portals / समस्त अनुभाग
              </span>
              {[
                { label: 'Corporate Overview', hindi: 'मुखपृष्ठ', tab: 'home' as TabType, icon: IconCorporateChamber },
                { label: 'About Company & Heritage', hindi: 'कंपनी परिचय', tab: 'about' as TabType, icon: IconExecutiveSeal },
                { label: 'Development Portfolio', hindi: 'परियोजनाएं', tab: 'projects' as TabType, icon: IconVastuMandala },
                { label: 'Bihar Land & EMI Calculator', hindi: 'भूमि मापी यंत्र', tab: 'calculator' as TabType, icon: IconMathFeasibility },
                { label: 'Headquarters & Location', hindi: 'संपर्क व कार्यालय', tab: 'contact' as TabType, icon: IconGeoPin },
              ].map((item) => {
                const isActive = currentTab === item.tab;
                const IconComponent = item.icon;

                if (item.tab === 'projects') {
                  return (
                    <div key={item.tab} className="rounded-xl border border-white/10 bg-white/[0.03] overflow-hidden">
                      <button
                        onClick={() => handleTabClick('projects')}
                        className={`w-full flex items-center justify-between p-3 text-xs tracking-wide transition-all cursor-pointer ${
                          isActive
                            ? 'bg-white/10 text-[#E7C973] font-bold'
                            : 'text-stone-300 hover:bg-white/5'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <IconComponent size={16} color={isActive ? 'gold' : 'stone'} />
                          <span>{item.label}</span>
                          <span className="text-[10.5px] text-stone-400 font-hindi">({item.hindi})</span>
                        </div>
                        <IconMinimalArrow size={12} color={isActive ? 'gold' : 'stone'} />
                      </button>

                      {/* Development Sub-sections in Mobile Drawer */}
                      <div className="px-3 pb-3 pt-1 space-y-1 bg-black/30 border-t border-white/5">
                        <span className="text-[9.5px] font-mono text-[#E7C973] uppercase tracking-wider font-semibold block px-1 py-0.5">
                          Section Menus:
                        </span>
                        {[
                          { key: 'all' as const, label: 'All Sites', hindi: 'समस्त' },
                          { key: 'plots' as const, label: 'Plots', hindi: 'भूखंड' },
                          { key: 'commercial' as const, label: 'Commercial', hindi: 'व्यावसायिक' },
                          { key: 'farmlands' as const, label: 'Farmlands', hindi: 'फार्मलैंड्स' },
                          { key: 'villas' as const, label: 'Villas', hindi: 'विला' },
                        ].map((sub) => {
                          const isSubActive = currentTab === 'projects' && currentDevelopmentCategory === sub.key;
                          return (
                            <button
                              key={sub.key}
                              onClick={() => handleDevCategoryClick(sub.key)}
                              className={`w-full text-left px-2.5 py-1.5 rounded-lg text-xs transition-all flex items-center justify-between cursor-pointer ${
                                isSubActive
                                  ? 'bg-[#C59B27]/20 text-[#E7C973] font-bold border border-[#C59B27]/40'
                                  : 'text-stone-400 hover:bg-white/5 hover:text-stone-200'
                              }`}
                            >
                              <div className="flex items-center gap-1.5">
                                <span className="text-xs leading-none">{sub.label}</span>
                                <span className="text-stone-600 font-light select-none text-xs leading-none">|</span>
                                <span className="font-hindi text-xs leading-none">{sub.hindi}</span>
                              </div>
                              <span className="text-[9px] font-mono opacity-60">
                                {sub.key === 'all' ? 'All' : '2 Sites'}
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
                    key={item.tab}
                    onClick={() => handleTabClick(item.tab)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white/10 text-[#E7C973] font-bold border border-[#C59B27]/40 shadow-sm'
                        : 'text-stone-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent size={16} color={isActive ? 'gold' : 'stone'} />
                      <span>{item.label}</span>
                      <span className="text-[10.5px] text-stone-400 font-hindi">({item.hindi})</span>
                    </div>
                    <IconMinimalArrow size={12} color={isActive ? 'gold' : 'stone'} />
                  </button>
                );
              })}
            </div>

            {/* Statutory & Legal Links */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-semibold block px-2">
                Statutory &amp; Compliance
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-300">
                <button
                  onClick={() => handleTabClick('disclaimer')}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-left flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>Disclaimer</span>
                </button>
                <button
                  onClick={() => handleTabClick('privacy')}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-left flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>Privacy Policy</span>
                </button>
                <button
                  onClick={() => handleTabClick('terms')}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-left flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>Terms</span>
                </button>
                <a
                  href="https://www.mca.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-left flex items-center gap-1.5 text-[#E7C973] font-medium cursor-pointer shadow-xs"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>MCA Portal</span>
                </a>
              </div>
              <div className="text-[10px] text-stone-500 font-mono pt-2 text-center">
                CIN: {COMPANY_DATA.cin} &bull; RoC Patna &bull; औरंगाबाद, बिहार
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Permanent Bottom Nav */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F0E0D]/95 backdrop-blur-2xl border-t border-[#C59B27]/25 shadow-[0_-8px_30px_rgba(0,0,0,0.7)] px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),0.5rem)]"
      >
        <div className="max-w-md mx-auto grid grid-cols-6 items-center">
          {mainTabs.map((item) => {
            const isActive = currentTab === item.tab;
            const IconComponent = item.icon;
            return (
              <button
                key={item.tab}
                onClick={() => handleTabClick(item.tab)}
                className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
                  isActive
                    ? 'text-[#E7C973]'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                <div className="relative">
                  <IconComponent size={20} color={isActive ? 'gold' : 'stone'} />
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#E7C973] shadow-[0_0_6px_rgba(231,201,115,0.8)]" />
                  )}
                </div>
                <span
                  className={`text-[9.5px] tracking-wider uppercase mt-1 truncate max-w-full ${
                    isActive ? 'font-bold text-[#E7C973]' : 'font-medium text-stone-400'
                  }`}
                >
                  {item.label}
                </span>
              </button>
            );
          })}

          {/* More / Menu Drawer Toggle */}
          <button
            onClick={() => setDrawerOpen(!drawerOpen)}
            className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
              drawerOpen ? 'text-[#E7C973]' : 'text-stone-400 hover:text-stone-200'
            }`}
            aria-label="More navigation options"
          >
            <div className="relative">
              <Menu className="w-5 h-5 text-current" />
            </div>
            <span className="text-[9.5px] tracking-wider uppercase mt-1 font-medium text-stone-400">
              More
            </span>
          </button>
        </div>
      </nav>
    </>
  );
};
