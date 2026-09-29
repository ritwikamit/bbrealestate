import React from 'react';
import { motion } from 'framer-motion';
import { TabType } from '../../types';
import {
  IconDivineSpark,
  IconTitleSeal,
  IconCorporateChamber,
  IconVastuMandala,
  IconGeoPin,
  IconMinimalArrow
} from '../common/ThemeIcons';

interface HeroProps {
  onSelectTab?: (tab: TabType) => void;
  onOpenEnquiry?: () => void;
  onExplorePortfolio?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onSelectTab,
  onOpenEnquiry,
  onExplorePortfolio,
}) => {
  const handleExplore = () => {
    if (onExplorePortfolio) {
      onExplorePortfolio();
    } else if (onSelectTab) {
      onSelectTab('projects');
    } else {
      document.getElementById('projects-section')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEnquiry = () => {
    if (onOpenEnquiry) {
      onOpenEnquiry();
    }
  };

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[90vh] max-h-[960px] bg-[#0A0908] overflow-hidden flex flex-col justify-between"
      aria-label="Welcome to Baba Baidyanath Real Estate"
    >
      {/* 1. Cinematic Full-Screen Video Background */}
      <video
        ref={(el) => {
          if (el) {
            el.play().catch(() => {});
          }
        }}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-95 filter brightness-110 contrast-110"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* 2. Contrast Gradients for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0F0E0D]/60 via-black/20 to-[#0F0E0D]/80 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAF8F5] via-[#FAF8F5]/30 to-transparent pointer-events-none" />

      {/* Subtle Luminous Golden & Yellow Particle Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <motion.div
          animate={{
            y: [-15, 20, -15],
            x: [-8, 12, -8],
            opacity: [0.35, 0.7, 0.35],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-radial from-[#FACC15]/30 via-[#EAB308]/15 to-transparent blur-3xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [12, -12, 12],
            opacity: [0.3, 0.65, 0.3],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-radial from-[#FEF08A]/25 via-[#FACC15]/20 to-transparent blur-3xl"
        />
      </div>

      {/* 3. Top Sacred Pre-Headline Shloka */}
      <div className="relative z-10 pt-6 sm:pt-8 px-4 sm:px-6 flex flex-col items-center text-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex items-center justify-center gap-2 sm:gap-3 max-w-[95vw] sm:max-w-4xl"
        >
          <span className="font-hindi text-xs sm:text-sm md:text-[15px] tracking-widest text-[#FEF08A] font-medium text-center [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(234,179,8,0.5)]">
            ॥ श्री बाबा बैद्यनाथाय नमः ॥ पूर्वोत्तरे प्रज्वलिकानिधाने सदा वसंतं गिरिजासमेतम्। सुरासुराराधितपादपद्यं श्रीवैद्यनाथं तमहं नमामि।।
          </span>
        </motion.div>
      </div>

      {/* 4. Central Hero Showcase: Minimal Architectural Typography + Hindi Heritage */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-6 sm:py-10 my-auto max-w-5xl mx-auto w-full">
        
        {/* Corporate Identification Tag */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-3 sm:mb-4 flex items-center justify-center gap-2 text-stone-300 font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.24em]"
        >
          <span className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-r from-transparent to-[#FACC15]" />
          <span className="text-[#FEF08A] font-semibold">EST. 2024</span>
          <span className="text-stone-400">&bull;</span>
          <span className="text-stone-200">AURANGABAD, BIHAR</span>
          <span className="text-stone-400">&bull;</span>
          <span className="text-[#FEF08A] hidden md:inline">ROC PATNA</span>
          <span className="w-6 sm:w-10 h-[1.5px] bg-gradient-to-l from-transparent to-[#FACC15]" />
        </motion.div>

        {/* Majestic Classical Chiselled Title (Cinzel Typography) */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-cinzel text-white font-bold leading-[1.15] sm:leading-[1.12] tracking-[0.03em] sm:tracking-[0.05em] mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl select-none drop-shadow-[0_4px_35px_rgba(0,0,0,0.95)] max-w-full"
        >
          <span className="block text-[#FAF8F5] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]">
            WHERE SACRED TRUST
          </span>
          <span className="block mt-1 sm:mt-2 text-yellow-gradient drop-shadow-[0_4px_35px_rgba(250,204,21,0.55)]">
            SHAPES TIMELESS LANDMARKS
          </span>
        </motion.h1>

        {/* Authentic Hindi Regional Ribbon & Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-1 mb-5 sm:mb-7"
        >
          <div className="font-hindi text-sm sm:text-lg md:text-xl text-[#E7C973] font-semibold tracking-wide drop-shadow-md">
            ॥ बाबा बैद्यनाथ की पावन भूमि पर प्रामाणिक एवं सुरक्षित भूमि निवेश ॥
          </div>
          <div className="font-hindi text-xs sm:text-sm text-stone-300 font-normal">
            विश्वास, पारदर्शिता और आपकी अपनी ज़मीन — औरंगाबाद, बिहार
          </div>
        </motion.div>

        {/* Factual Grounded Corporate Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-jakarta text-[#E7E5E4] font-normal leading-relaxed max-w-xl sm:max-w-2xl lg:max-w-3xl mb-7 sm:mb-9 text-xs sm:text-base md:text-lg [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] px-2"
        >
          Registered under the Ministry of Corporate Affairs (RoC Patna), we provide verified clear-title residential plots, commercial spaces, and agricultural parcels with direct access to NH-19 and arterial corridors across Aurangabad and South Bihar.
        </motion.p>

        {/* Dual High-Impact Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary Golden-Yellow Shimmer CTA */}
          <button
            onClick={handleExplore}
            className="w-full sm:w-auto group relative overflow-hidden h-12 sm:h-14 px-8 sm:px-10 rounded-full btn-yellow-gradient font-bold tracking-[0.14em] uppercase text-xs sm:text-sm hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer font-jakarta"
          >
            <span>Explore Developments</span>
            <IconMinimalArrow size={14} color="stone" className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Liquid Glass Secondary CTA */}
          <button
            onClick={handleEnquiry}
            className="w-full sm:w-auto h-12 sm:h-14 liquid-glass text-white/95 hover:text-white uppercase font-semibold rounded-full px-8 sm:px-10 tracking-[0.16em] text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-[#FACC15]/40 hover:border-[#FEF08A] hover:bg-white/[0.12] font-jakarta"
          >
            <IconDivineSpark size={14} color="gold" />
            <span>Consultation Desk</span>
          </button>
        </motion.div>
      </div>

      {/* 5. Bottom Trust Credentials Strip with Yellow Gradient Divider */}
      <div className="relative z-10 bg-[#0F0E0D]/85 backdrop-blur-md">
        <div className="border-yellow-gradient-line w-full" />
        <div className="py-4 sm:py-5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 text-center sm:text-left">
          
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#C59B27]/15 border border-[#C59B27]/30 flex items-center justify-center shrink-0">
              <IconTitleSeal size={18} color="gold" />
            </div>
            <div className="text-left font-jakarta">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">100% Clear Title</span>
              <span className="block text-[10px] text-[#E7C973] font-hindi">निर्दोष एवं स्पष्ट खतियान</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#C59B27]/15 border border-[#C59B27]/30 flex items-center justify-center shrink-0">
              <IconCorporateChamber size={18} color="gold" />
            </div>
            <div className="text-left font-jakarta">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">RoC Patna Registered</span>
              <span className="block text-[10px] text-[#E7C973] font-hindi">कंपनी अधिनियम २०१३</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#C59B27]/15 border border-[#C59B27]/30 flex items-center justify-center shrink-0">
              <IconVastuMandala size={18} color="gold" />
            </div>
            <div className="text-left font-jakarta">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">Vastu Aligned</span>
              <span className="block text-[10px] text-[#E7C973] font-hindi">वास्तु सम्मत विन्यास</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#C59B27]/15 border border-[#C59B27]/30 flex items-center justify-center shrink-0">
              <IconGeoPin size={18} color="gold" />
            </div>
            <div className="text-left font-jakarta">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">Prime Bihar Corridors</span>
              <span className="block text-[10px] text-[#E7C973] font-hindi">औरंगाबाद एवं मगध क्षेत्र</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);
};
