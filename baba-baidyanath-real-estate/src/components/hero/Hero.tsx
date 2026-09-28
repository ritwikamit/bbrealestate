import React, { useRef } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
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

interface StaggeredFadeProps {
  text: string;
  className?: string;
}

const StaggeredFade: React.FC<StaggeredFadeProps> = ({ text, className = '' }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const charVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.45,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const words = text.split(' ');
  let charCounter = 0;

  return (
    <span ref={ref} className={`inline-flex flex-wrap justify-center gap-x-2 sm:gap-x-3.5 ${className}`}>
      {words.map((word, wordIdx) => {
        const wordChars = Array.from(word);
        return (
          <span key={wordIdx} className="inline-block whitespace-nowrap">
            {wordChars.map((char) => {
              const currentCharIndex = charCounter++;
              return (
                <motion.span
                  key={currentCharIndex}
                  custom={currentCharIndex}
                  variants={charVariants}
                  initial="hidden"
                  animate={isInView ? 'show' : 'hidden'}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </span>
  );
};

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
      className="relative w-full min-h-[92vh] lg:min-h-[96vh] bg-[#020202] overflow-hidden flex flex-col justify-between"
      aria-label="Welcome to Baba Baidyanath Real Estate"
    >
      {/* 1. Cinematic Full-Screen Video Background - 100% Crystal Clear Visibility */}
      <video
        ref={(el) => {
          if (el) {
            el.play().catch(() => {});
          }
        }}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none opacity-100 filter brightness-120 contrast-115 saturate-115"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260619_191346_9d19d66e-86a4-47f7-8dc6-712c1788c3b2.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* 2. Ultra-Lightweight Contrast Gradient - Minimal shading only at edges so animation is fully visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070605] to-transparent pointer-events-none" />

      {/* Subtle Luminous Golden Particle Sparks */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
        <motion.div
          animate={{
            y: [-15, 20, -15],
            x: [-8, 12, -8],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/5 w-80 h-80 rounded-full bg-radial from-[#F59E0B]/25 via-transparent to-transparent blur-2xl"
        />
        <motion.div
          animate={{
            y: [20, -20, 20],
            x: [12, -12, 12],
            opacity: [0.35, 0.65, 0.35],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-1/4 right-1/5 w-96 h-96 rounded-full bg-radial from-[#FEF08A]/20 via-[#B45309]/15 to-transparent blur-3xl"
        />
      </div>

      {/* 3. Top Sacred Pre-Headline Shloka Badge */}
      <div className="relative z-10 pt-5 sm:pt-10 px-4 sm:px-6 flex flex-col items-center text-center max-w-full">
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 rounded-full bg-gradient-to-r from-[#991B1B]/40 via-[#B45309]/40 to-[#991B1B]/40 border border-[#F59E0B]/45 backdrop-blur-xl shadow-[0_0_35px_rgba(245,158,11,0.25)] max-w-[95vw] sm:max-w-3xl"
        >
          <IconDivineSpark size={14} color="gold" className="shrink-0 animate-pulse" />
          <span className="font-sans text-[11px] sm:text-xs md:text-sm tracking-wide text-[#FEF08A] font-medium text-center [text-wrap:balance] drop-shadow-sm">
            पूर्वोत्तरे प्रज्वलिकानिधाने सदा वसंतं गिरिजासमेतम्। सुरासुराराधितपादपद्यं श्रीवैद्यनाथं तमहं नमामि।।
          </span>
          <IconDivineSpark size={14} color="gold" className="shrink-0 animate-pulse" />
        </motion.div>
      </div>

      {/* 4. Central Hero Showcase: Pure Typography + Redesigned Content Hierarchy */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-8 py-6 sm:py-10 my-auto max-w-5xl mx-auto w-full">
        
        {/* Subtle Corporate Identification Tag */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-3 sm:mb-4 flex items-center justify-center gap-2 text-stone-300 font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.24em]"
        >
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-r from-transparent to-[#F59E0B]/70" />
          <span className="text-[#FDE68A] font-semibold">EST. 2024</span>
          <span className="text-stone-400">&bull;</span>
          <span className="text-stone-300">AURANGABAD, BIHAR</span>
          <span className="text-stone-400">&bull;</span>
          <span className="text-[#FBBF24] hidden md:inline">ROC PATNA</span>
          <span className="w-6 sm:w-10 h-[1px] bg-gradient-to-l from-transparent to-[#F59E0B]/70" />
        </motion.div>

        {/* Majestic Classical Chiselled Title (Cinzel Typography) with guaranteed word-nowrap */}
        <h1 className="font-cinzel text-white font-bold leading-[1.15] sm:leading-[1.12] tracking-[0.02em] sm:tracking-[0.04em] mb-4 sm:mb-6 text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl select-none drop-shadow-[0_4px_35px_rgba(0,0,0,0.95)] max-w-full">
          <div className="block">
            <StaggeredFade text="WHERE SACRED TRUST" className="text-[#FAF8F5] drop-shadow-[0_2px_15px_rgba(0,0,0,0.9)]" />
          </div>
          <div className="block mt-1 sm:mt-2.5">
            <StaggeredFade
              text="SHAPES TIMELESS LANDMARKS"
              className="bg-gradient-to-r from-[#FEF08A] via-[#F59E0B] to-[#EF4444] bg-clip-text text-transparent drop-shadow-[0_4px_35px_rgba(245,158,11,0.55)]"
            />
          </div>
        </h1>

        {/* Refined Luxury Editorial Narrative (Outfit / Sans Typography) */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
          className="font-outfit text-[#E7E5E4] font-normal leading-relaxed max-w-xl sm:max-w-2xl lg:max-w-3xl mb-7 sm:mb-9 text-xs sm:text-base md:text-lg [text-wrap:balance] drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] px-2"
        >
          Rooted in the divine grace of Baba Baidyanath Dham and regulated under the Ministry of Corporate Affairs,
          we develop verified clear-title residential enclaves, commercial master-spaces, and freehold plotted land parcels—building
          enduring value across <span className="text-[#FDE68A] font-medium">Aurangabad</span>, <span className="text-[#FDE68A] font-medium">Patna</span>, <span className="text-[#FDE68A] font-medium">Deoghar</span>, and Bihar&apos;s prime growth corridors.
        </motion.p>

        {/* Dual High-Impact Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto"
        >
          {/* Primary Golden Shimmer CTA */}
          <button
            onClick={handleExplore}
            className="w-full sm:w-auto group relative overflow-hidden h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold tracking-[0.16em] uppercase text-xs sm:text-sm btn-gold-border hover:scale-[1.03] transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer shadow-[0_10px_30px_rgba(245,158,11,0.25)] font-outfit"
          >
            <span>Explore Developments</span>
            <IconMinimalArrow size={14} color="stone" className="transition-transform group-hover:translate-x-1" />
          </button>

          {/* Liquid Glass Secondary CTA */}
          <button
            onClick={handleEnquiry}
            className="w-full sm:w-auto h-12 sm:h-14 liquid-glass text-white/95 hover:text-white uppercase font-bold rounded-full px-8 sm:px-10 tracking-[0.18em] text-xs sm:text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer btn-gold-border hover:bg-white/[0.12] font-outfit"
          >
            <IconDivineSpark size={14} color="gold" />
            <span>Schedule Consultation</span>
          </button>
        </motion.div>
      </div>

      {/* 5. Bottom Trust Credentials Strip */}
      <div className="relative z-10 border-t border-white/[0.08] bg-black/60 backdrop-blur-md py-4 sm:py-5 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/12 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
              <IconTitleSeal size={18} color="gold" />
            </div>
            <div className="text-left font-outfit">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">100% Clear Title</span>
              <span className="block text-[9.5px] text-stone-400">Strict legal due diligence</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#DC2626]/12 border border-[#DC2626]/30 flex items-center justify-center shrink-0">
              <IconCorporateChamber size={18} color="crimson" />
            </div>
            <div className="text-left font-outfit">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">RoC Patna Registered</span>
              <span className="block text-[9.5px] text-stone-400">MCA Corporate Compliance</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#F59E0B]/12 border border-[#F59E0B]/30 flex items-center justify-center shrink-0">
              <IconVastuMandala size={18} color="gold" />
            </div>
            <div className="text-left font-outfit">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">Vastu Aligned</span>
              <span className="block text-[9.5px] text-stone-400">Harmonious living geometry</span>
            </div>
          </div>

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <div className="w-8 h-8 rounded-lg bg-[#EA580C]/12 border border-[#EA580C]/30 flex items-center justify-center shrink-0">
              <IconGeoPin size={18} color="amber" />
            </div>
            <div className="text-left font-outfit">
              <span className="block text-[11px] font-semibold text-white uppercase tracking-wider">Prime Bihar Corridors</span>
              <span className="block text-[9.5px] text-stone-400">Aurangabad &bull; Patna &bull; Deoghar</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
