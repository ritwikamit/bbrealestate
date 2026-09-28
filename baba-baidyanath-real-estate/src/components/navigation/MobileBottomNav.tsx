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
    { label: 'Services', tab: 'services', icon: IconModernTowers },
    { label: 'Projects', tab: 'projects', icon: IconVastuMandala },
    { label: 'Calc', tab: 'calculator', icon: IconMathFeasibility },
  ];

  const handleTabClick = (tab: TabType) => {
    onSelectTab(tab);
    setDrawerOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 1. Quick More Drawer Modal on Mobile */}
      {drawerOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <div
            onClick={() => setDrawerOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Drawer sheet */}
          <div className="relative z-10 bg-[#0C0A09] border-t border-white/[0.15] rounded-t-3xl p-5 pb-28 shadow-[0_-12px_40px_rgba(0,0,0,0.95)] max-h-[85vh] overflow-y-auto">
            {/* Grab Handle */}
            <div className="w-12 h-1 bg-stone-700 rounded-full mx-auto mb-4" />

            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#F59E0B] font-semibold block">
                  Quick Navigation &amp; Help
                </span>
                <span className="text-sm font-serif text-white font-medium">
                  Baba Baidyanath Real Estate
                </span>
              </div>
              <button
                onClick={() => setDrawerOpen(false)}
                className="p-2 rounded-full bg-white/10 text-stone-300 hover:text-white"
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
                className="p-3 rounded-xl bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 btn-gold-border shadow-lg cursor-pointer"
              >
                <IconDivineSpark size={14} color="stone" />
                <span>Enquire Now</span>
              </button>
              <a
                href="tel:+919876543210"
                className="p-3 rounded-xl bg-white/[0.08] hover:bg-white/[0.12] text-[#FDE68A] font-semibold text-xs border border-white/15 flex items-center justify-center gap-1.5"
              >
                <IconDeskPhone size={14} color="amber" />
                <span>Direct Desk</span>
              </a>
            </div>

            {/* Navigation Grid */}
            <div className="space-y-1 mb-5">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block px-2 mb-2">
                All Portals
              </span>
              {[
                { label: 'Corporate Overview', tab: 'home' as TabType, icon: IconCorporateChamber },
                { label: 'About Company & Heritage', tab: 'about' as TabType, icon: IconExecutiveSeal },
                { label: 'Core Capabilities', tab: 'services' as TabType, icon: IconModernTowers },
                { label: 'Development Portfolio', tab: 'projects' as TabType, icon: IconVastuMandala },
                { label: 'Bihar Land & EMI Calculator', tab: 'calculator' as TabType, icon: IconMathFeasibility },
                { label: 'Headquarters & Contact', tab: 'contact' as TabType, icon: IconGeoPin },
              ].map((item) => {
                const isActive = currentTab === item.tab;
                const IconComponent = item.icon;
                return (
                  <button
                    key={item.tab}
                    onClick={() => handleTabClick(item.tab)}
                    className={`w-full flex items-center justify-between p-3 rounded-xl text-xs tracking-wide transition-all ${
                      isActive
                        ? 'bg-[#F59E0B]/15 text-[#FDE68A] font-semibold border border-[#F59E0B]/30'
                        : 'text-stone-300 hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <IconComponent size={16} color={isActive ? 'gold' : 'stone'} />
                      <span>{item.label}</span>
                    </div>
                    <IconMinimalArrow size={12} color={isActive ? 'amber' : 'stone'} />
                  </button>
                );
              })}
            </div>

            {/* Statutory & Legal Links */}
            <div className="pt-3 border-t border-white/10 space-y-2">
              <span className="text-[10px] uppercase font-mono tracking-widest text-stone-400 block px-2">
                Statutory &amp; Compliance
              </span>
              <div className="grid grid-cols-2 gap-2 text-[11px] text-stone-400">
                <button
                  onClick={() => handleTabClick('disclaimer')}
                  className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-left flex items-center gap-1.5"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>Disclaimer</span>
                </button>
                <button
                  onClick={() => handleTabClick('privacy')}
                  className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-left flex items-center gap-1.5"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>Privacy Policy</span>
                </button>
                <button
                  onClick={() => handleTabClick('terms')}
                  className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-left flex items-center gap-1.5"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>Terms of Service</span>
                </button>
                <a
                  href="https://www.mca.gov.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-left flex items-center gap-1.5 text-[#FDE68A]"
                >
                  <IconTitleSeal size={14} color="gold" />
                  <span>MCA Portal</span>
                </a>
              </div>
              <div className="text-[10px] text-stone-400 font-mono pt-2 text-center">
                CIN: {COMPANY_DATA.cin} &bull; RoC Patna
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 2. Permanent Sleek Lucid Bottom Navigation Bar for Smartphone & Tablet */}
      <nav
        aria-label="Mobile Bottom Navigation"
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0A0A0A]/95 backdrop-blur-2xl border-t border-white/[0.12] shadow-[0_-8px_32px_rgba(0,0,0,0.85)] px-2 pt-1.5 pb-[max(env(safe-area-inset-bottom),0.5rem)]"
      >
        <div className="max-w-md mx-auto grid grid-cols-6 items-center">
          {mainTabs.map((item) => {
            const isActive = currentTab === item.tab;
            const IconComponent = item.icon;
            return (
              <button
                key={item.tab}
                onClick={() => handleTabClick(item.tab)}
                className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all duration-200 cursor-pointer select-none ${
                  isActive
                    ? 'text-[#F59E0B]'
                    : 'text-stone-400 hover:text-stone-200 active:scale-95'
                }`}
                aria-label={`Go to ${item.label}`}
              >
                <div className="relative">
                  <IconComponent size={20} color={isActive ? 'gold' : 'stone'} />
                </div>
                <span
                  className={`text-[9.5px] tracking-wider uppercase mt-1 font-medium truncate max-w-full ${
                    isActive ? 'font-bold text-white' : 'text-stone-400'
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
            className={`flex flex-col items-center justify-center py-1 px-0.5 rounded-xl transition-all duration-200 cursor-pointer select-none ${
              drawerOpen ? 'text-[#F59E0B]' : 'text-stone-400 hover:text-stone-200 active:scale-95'
            }`}
            aria-label="More navigation options"
          >
            <div className="relative">
              <Menu className="w-5 h-5" />
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
