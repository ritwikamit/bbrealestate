import React, { useState } from 'react';
import { TabType } from '../../types';
import { X, Menu } from 'lucide-react';
import {
  IconCorporateChamber,
  IconExecutiveSeal,
  IconModernTowers,
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
  onOpenEnquiry?: () => void;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onSelectTab,
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
    { label: 'Scope', tab: 'services', icon: IconModernTowers },
    { label: 'Portfolio', tab: 'projects', icon: IconVastuMandala },
    { label: 'Calc', tab: 'calculator', icon: IconMathFeasibility },
  ];

  const handleTabClick = (tab: TabType) => {
    onSelectTab(tab);
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

          {/* Drawer sheet styled with dark obsidian & gold luxury theme */}
          <div className="relative z-10 bg-[#0E0C0A]/95 backdrop-blur-2xl border-t border-white/15 rounded-t-3xl p-5 pb-24 shadow-[0_-12px_45px_rgba(0,0,0,0.8)] max-h-[85vh] overflow-y-auto">
            {/* Grab Handle */}
            <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-amber-400 font-bold block">
                  Quick Navigation &amp; Governance
                </span>
                <span className="text-sm font-serif text-white font-bold">
                  Baba Baidyanath Real Estate
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-stone-200 transition-colors cursor-pointer"
                aria-label="Close menu drawer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Action Buttons */}
            <div className="grid grid-cols-2 gap-2.5 mb-5">
              <button
                onClick={() => {
                  setDrawerOpen(false);
                  onOpenEnquiry?.();
                }}
                className="p-3 rounded-xl bg-gradient-to-r from-[#881337] via-[#991B1B] to-[#B45309] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.25)] border border-amber-300/40 active:scale-98 transition-transform cursor-pointer"
              >
                <IconDivineSpark size={14} color="amber" />
                <span>Enquire Now</span>
              </button>
              <a
                href={`tel:${COMPANY_DATA.phone}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-stone-200 font-semibold text-xs border border-white/15 shadow-sm flex items-center justify-center gap-1.5 active:scale-98 transition-transform cursor-pointer"
              >
                <IconDeskPhone size={14} color="amber" />
                <span>Direct Desk</span>
              </a>
            </div>

            {/* Navigation Grid */}
            <div className="space-y-1 mb-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 font-semibold block px-2 mb-2">
                All Portals
              </span>
              {[
                { label: 'Corporate Overview', tab: 'home' as TabType, icon: IconCorporateChamber },
                { label: 'About Company & Heritage', tab: 'about' as TabType, icon: IconExecutiveSeal },
                { label: 'Core Capabilities & Practice', tab: 'services' as TabType, icon: IconModernTowers },
                { label: 'Development Portfolio', tab: 'projects' as TabType, icon: IconVastuMandala },
                { label: 'Bihar Land & EMI Calculator', tab: 'calculator' as TabType, icon: IconMathFeasibility },
                { label: 'Headquarters & Location', tab: 'contact' as TabType, icon: IconGeoPin },
              ].map((item) => {
                const isActive = currentTab === item.tab;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleTabClick(item.tab)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs tracking-wide transition-all cursor-pointer ${
                      isActive
                        ? 'bg-white/10 text-amber-400 font-bold border border-amber-400/30 shadow-sm'
                        : 'text-stone-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent size={16} color={isActive ? 'amber' : 'stone'} />
                      <span>{item.label}</span>
                    </div>
                    <IconMinimalArrow size={12} color={isActive ? 'amber' : 'stone'} />
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
                  <IconTitleSeal size={14} color="amber" />
                  <span>Disclaimer</span>
                </button>
                <button
                  onClick={() => handleTabClick('privacy')}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-left flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <IconTitleSeal size={14} color="amber" />
                  <span>Privacy Policy</span>
                </button>
                <button
                  onClick={() => handleTabClick('terms')}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-left flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <IconTitleSeal size={14} color="amber" />
                  <span>Terms of Service</span>
                </button>
                <a
                  href="https://www.mca.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-left flex items-center gap-1.5 text-amber-400 font-medium cursor-pointer shadow-xs"
                >
                  <IconTitleSeal size={14} color="amber" />
                  <span>MCA Portal</span>
                </a>
              </div>
              <div className="text-[10px] text-stone-500 font-mono pt-2 text-center">
                CIN: {COMPANY_DATA.cin} &bull; RoC Patna
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Permanent Sleek Lucid Bottom Navigation Bar for Smartphone & Tablet */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0908]/90 backdrop-blur-2xl border-t border-white/10 shadow-[0_-8px_30px_rgba(0,0,0,0.7)] px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),0.5rem)]"
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
                    ? 'text-amber-400'
                    : 'text-stone-400 hover:text-stone-200'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                <div className="relative">
                  <IconComponent size={20} color={isActive ? 'amber' : 'stone'} />
                  {isActive && (
                    <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-amber-400 shadow-[0_0_6px_rgba(245,158,11,0.8)]" />
                  )}
                </div>
                <span
                  className={`text-[9.5px] tracking-wider uppercase mt-1 truncate max-w-full ${
                    isActive ? 'font-bold text-amber-400 drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]' : 'font-medium text-stone-400'
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
              drawerOpen ? 'text-amber-400' : 'text-stone-400 hover:text-stone-200'
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
