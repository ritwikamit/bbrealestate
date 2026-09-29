import React from 'react';
import { TabType } from '../../types';
import {
  NavIconHome,
  NavIconDevelopments,
  NavIconCalculator,
  NavIconCall,
  NavIconEnquire
} from '../common/BottomNavIcons';

interface MobileBottomNavProps {
  currentTab: TabType;
  onSelectTab: (tab: TabType) => void;
  onOpenEnquiry?: () => void;
}

/**
 * Minimalist Luxury Quick Menu for Smartphone & Tablet:
 * - Streamlined to 5 essential quick actions (no redundant drawers; header menu handles full sitemap)
 * - Native vector icons built and verified via custom-icons skill
 * - Harmonious royal yellow gradient theme accents
 * - Clean active states with ZERO distracting floating dots
 * - Safe area padding for edge-to-edge iOS and Android screens
 */
export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  currentTab,
  onSelectTab,
  onOpenEnquiry,
}) => {
  const handleTabClick = (tab: TabType) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav
      aria-label="Smartphone and Tablet Quick Menu"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0F0E0D]/95 backdrop-blur-2xl shadow-[0_-10px_35px_rgba(0,0,0,0.7)]"
    >
      {/* Radiant Yellow Gradient Top Micro-Divider Line */}
      <div className="border-yellow-gradient-line w-full" />

      {/* 5-Column Symmetrical Quick Action Grid */}
      <div className="max-w-md mx-auto grid grid-cols-5 items-center px-1.5 pt-2 pb-[max(env(safe-area-inset-bottom),0.6rem)] gap-1">
        
        {/* 1. Home */}
        <button
          onClick={() => handleTabClick('home')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            currentTab === 'home'
              ? 'text-[#FACC15] bg-yellow-500/10 border border-[#FACC15]/40 shadow-xs'
              : 'text-stone-400 hover:text-stone-200'
          }`}
          aria-label="Home"
        >
          <NavIconHome
            size={20}
            className={`transition-colors duration-200 ${
              currentTab === 'home'
                ? 'text-[#FACC15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                : 'text-stone-400'
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 truncate max-w-full ${
              currentTab === 'home' ? 'font-bold text-[#FACC15]' : 'font-medium text-stone-400'
            }`}
          >
            Home
          </span>
          <span className="text-[9px] font-hindi text-stone-500 -mt-0.5 leading-tight">
            होम
          </span>
        </button>

        {/* 2. Plotting */}
        <button
          onClick={() => handleTabClick('plotting')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            currentTab === 'plotting' || currentTab === 'projects'
              ? 'text-[#FACC15] bg-yellow-500/10 border border-[#FACC15]/40 shadow-xs'
              : 'text-stone-400 hover:text-stone-200'
          }`}
          aria-label="Plotting Opportunities"
        >
          <NavIconDevelopments
            size={20}
            className={`transition-colors duration-200 ${
              currentTab === 'plotting' || currentTab === 'projects'
                ? 'text-[#FACC15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                : 'text-stone-400'
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 truncate max-w-full ${
              currentTab === 'plotting' || currentTab === 'projects' ? 'font-bold text-[#FACC15]' : 'font-medium text-stone-400'
            }`}
          >
            Plotting
          </span>
          <span className="text-[9px] font-hindi text-stone-500 -mt-0.5 leading-tight">
            प्लॉटिंग
          </span>
        </button>

        {/* 3. Land & EMI Calculator */}
        <button
          onClick={() => handleTabClick('calculator')}
          className={`flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 ${
            currentTab === 'calculator'
              ? 'text-[#FACC15] bg-yellow-500/10 border border-[#FACC15]/40 shadow-xs'
              : 'text-stone-400 hover:text-stone-200'
          }`}
          aria-label="Land & EMI Calculator"
        >
          <NavIconCalculator
            size={20}
            className={`transition-colors duration-200 ${
              currentTab === 'calculator'
                ? 'text-[#FACC15] drop-shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                : 'text-stone-400'
            }`}
          />
          <span
            className={`text-[10px] tracking-wider uppercase mt-1 truncate max-w-full ${
              currentTab === 'calculator' ? 'font-bold text-[#FACC15]' : 'font-medium text-stone-400'
            }`}
          >
            Calc
          </span>
          <span className="text-[9px] font-hindi text-stone-500 -mt-0.5 leading-tight">
            कैलकुलेटर
          </span>
        </button>

        {/* 4. Direct Call Desk */}
        <a
          href="tel:+919876543210"
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 text-stone-400 hover:text-stone-200"
          aria-label="Direct Desk Call"
        >
          <NavIconCall
            size={20}
            className="text-stone-400 hover:text-[#FEF08A] transition-colors duration-200"
          />
          <span className="text-[10px] tracking-wider uppercase mt-1 truncate max-w-full font-medium text-stone-400">
            Call
          </span>
          <span className="text-[9px] font-hindi text-stone-500 -mt-0.5 leading-tight">
            कॉल करें
          </span>
        </a>

        {/* 5. Primary Enquire Desk Consultation Action */}
        <button
          onClick={() => onOpenEnquiry?.()}
          className="flex flex-col items-center justify-center py-1.5 px-1 rounded-xl transition-all duration-200 cursor-pointer select-none active:scale-95 text-[#FAF8F5] bg-gradient-to-r from-stone-900 to-stone-950 border border-[#FACC15]/60 hover:border-[#FEF08A] shadow-[0_2px_12px_rgba(234,179,8,0.25)]"
          aria-label="Open Enquire Desk"
        >
          <NavIconEnquire
            size={20}
            className="text-[#FACC15] drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]"
          />
          <span className="text-[10px] tracking-wider uppercase mt-1 truncate max-w-full font-bold text-[#FEF08A]">
            Enquire
          </span>
          <span className="text-[9px] font-hindi text-[#FACC15] -mt-0.5 leading-tight font-medium">
            संपर्क
          </span>
        </button>

      </div>
    </nav>
  );
};
