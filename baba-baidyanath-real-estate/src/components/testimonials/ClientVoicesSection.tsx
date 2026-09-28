import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Star,
  MapPin,
  Building2,
  UserCheck,
  Sparkles,
  ArrowUpRight
} from 'lucide-react';
import { IconDivineSpark } from '../common/ThemeIcons';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  category: 'residential' | 'landowner' | 'nri' | 'commercial';
  categoryLabel: string;
  rating: number;
  highlight: string;
  quote: string;
  projectOrDeal: string;
  verificationBadge: string;
  date: string;
  avatarInitials: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Dr. Anand Kishore Verma',
    role: 'Senior Physician & Land Invester',
    location: 'Aurangabad, Bihar',
    category: 'residential',
    categoryLabel: 'Residential Plot Buyer',
    rating: 5,
    highlight: 'Flawless 30-Year Chain Registry & Jamabandi Mutation',
    quote:
      'Finding genuinely clear-title land along the NH-19 corridor without cumbersome middlemen had always been daunting. Baba Baidyanath Real Estate provided complete transparent Khatiyan records, certified LPC, and boundary demarcations from Day 1. The corporate professionalism in Aurangabad is unprecedented.',
    projectOrDeal: '2.5 Katha Villa Plot · Gayatri Mandir Corridor',
    verificationBadge: 'Registry & Mutation Verified',
    date: 'January 2025',
    avatarInitials: 'AV',
  },
  {
    id: '2',
    name: 'Rameshwar Prasad Singh',
    role: 'Agricultural Estate Owner',
    location: 'Kutumba, Aurangabad',
    category: 'landowner',
    categoryLabel: 'Joint Development Partner',
    rating: 5,
    highlight: 'Fair Valuation & Ironclad Corporate Agreement',
    quote:
      'Our family had 8 Bighas of ancestral road-touch land. We were hesitant about private developers, but the directors of Baba Baidyanath sat with our entire family, mapped out transparent revenue-sharing, and completed all MCA legal documentation with absolute honesty and respect for local traditions.',
    projectOrDeal: '8 Bigha Joint Venture · Aurangabad-Amba Road',
    verificationBadge: 'MCA RoC Registered JDA',
    date: 'December 2024',
    avatarInitials: 'RS',
  },
  {
    id: '3',
    name: 'Priyanka Sinha, CFA',
    role: 'Investment Vice President',
    location: 'Bengaluru / Native of Patna',
    category: 'nri',
    categoryLabel: 'Outstation Investor',
    rating: 5,
    highlight: 'Complete Remote Transparency & Milestone Updates',
    quote:
      'Living in Bengaluru, tracking real estate in Bihar is tough. Baba Baidyanath’s team handled video-call plot surveys, soil testing documentation, and legal due diligence with zero ambiguity. It is refreshing to see institutional governance in Magadh real estate.',
    projectOrDeal: 'Commercial Corner Asset · Patna-Aurangabad Expressway Link',
    verificationBadge: 'Digital Deed Escrow Cleared',
    date: 'February 2025',
    avatarInitials: 'PS',
  },
  {
    id: '4',
    name: 'Er. Alok Ranjan',
    role: 'Infrastructure Contractor',
    location: 'Deoghar, Jharkhand',
    category: 'commercial',
    categoryLabel: 'Commercial Land Owner',
    rating: 5,
    highlight: 'Sacred Brand Values Reflected in Execution',
    quote:
      'Their reverence for Baba Baidyanath isn’t just branding—it dictates their ethics. Clear road easements, 40-foot wide arterial master-planning, and strictly Vastu-aligned layout zoning. Truly building with generational pride for Bihar and Jharkhand.',
    projectOrDeal: 'Freehold Commercial Plot · Deoghar Corridor',
    verificationBadge: 'Master Layout Approved',
    date: 'November 2024',
    avatarInitials: 'AR',
  },
  {
    id: '5',
    name: 'Prof. Subhash Chandra Jha',
    role: 'Retired University Dean',
    location: 'Patna / Aurangabad',
    category: 'residential',
    categoryLabel: 'Retirement Home Buyer',
    rating: 5,
    highlight: 'Peace of Mind & Zero Broker Interference',
    quote:
      'At my age, one wants zero court disputes or hidden encumbrances. The legal cell at Baba Baidyanath Real Estate verified every single revenue page before taking a single rupee in advance. I recommend them to every family seeking peace of mind.',
    projectOrDeal: 'Vastu Enclave Parcel · South Aurangabad',
    verificationBadge: '100% Encumbrance Free',
    date: 'January 2025',
    avatarInitials: 'SJ',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'All Testimonials' },
  { key: 'residential', label: 'Plot & Home Buyers' },
  { key: 'landowner', label: 'Landowners & JV' },
  { key: 'nri', label: 'Outstation & NRI' },
  { key: 'commercial', label: 'Commercial Land' },
];

interface ClientVoicesSectionProps {
  onOpenEnquiry?: () => void;
}

export const ClientVoicesSection: React.FC<ClientVoicesSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const filteredTestimonials = selectedCategory === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter((t) => t.category === selectedCategory);

  // Keep index within bounds when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  // Autoplay functionality
  useEffect(() => {
    if (!isAutoPlaying || filteredTestimonials.length <= 1) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
    }, 6500);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isAutoPlaying, filteredTestimonials.length]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % filteredTestimonials.length);
  };

  const currentItem = filteredTestimonials[currentIndex] || filteredTestimonials[0];

  return (
    <section
      id="client-voices-section"
      className="py-20 sm:py-28 relative z-10 border-t border-[#E7E2D8] bg-[#FAF8F5] overflow-hidden"
      aria-label="Client Voices & Testimonials"
    >
      {/* Decorative ambient background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#991B1B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Minimalist Typographic Hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-[11px] text-[#92400E] font-mono uppercase tracking-widest">
              <IconDivineSpark size={12} color="gold" />
              <span>Social Proof &amp; Verified Trust</span>
            </div>

            <h2 className="font-cinzel text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
              Client Voices &amp; Enduring Trust
            </h2>

            <p className="font-outfit text-sm sm:text-base text-[#57534E] leading-relaxed">
              Read first-hand accounts from land buyers, local landowners, and outstation families who have partnered with Baba Baidyanath Real Estate across Bihar.
            </p>
          </div>

          {/* Social Proof Metric Highlights */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0 bg-white p-4 rounded-2xl border border-[#E7E2D8] shadow-sm">
            <div className="border-r border-[#E7E2D8] pr-4 sm:pr-6 text-left">
              <div className="flex items-center gap-1 text-[#F59E0B] font-bold text-lg sm:text-xl">
                <span>5.0</span>
                <div className="flex text-[#F59E0B]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#F59E0B]" />
                  ))}
                </div>
              </div>
              <span className="text-[10.5px] text-[#78716C] font-mono uppercase tracking-wider block mt-0.5">
                Client Rating
              </span>
            </div>
            <div className="text-left">
              <div className="text-lg sm:text-xl font-bold text-[#1C1917] font-cinzel">
                100%
              </div>
              <span className="text-[10.5px] text-[#78716C] font-mono uppercase tracking-wider block mt-0.5">
                Clear Title Record
              </span>
            </div>
          </div>
        </div>

        {/* Category Filters in Minimalist Style */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`shrink-0 px-4 py-2 rounded-full text-xs font-outfit font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#1C1917] text-white shadow-md'
                    : 'bg-white text-[#57534E] border border-[#E7E2D8] hover:border-[#F59E0B]/50 hover:text-[#1C1917]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Carousel Showcase Card */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            {currentItem && (
              <motion.div
                key={`${selectedCategory}-${currentIndex}`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
                className="rounded-3xl bg-white border border-[#E7E2D8] p-6 sm:p-10 lg:p-12 shadow-[0_20px_50px_rgba(28,25,23,0.06)] relative overflow-hidden"
              >
                {/* Subtle Watermark Quote */}
                <div className="absolute top-6 right-6 sm:top-10 sm:right-10 text-[#F59E0B]/10 pointer-events-none">
                  <Quote className="w-24 h-24 sm:w-36 sm:h-36" />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative z-10 items-center">
                  
                  {/* Left Column: Client Identity & Credentials */}
                  <div className="lg:col-span-4 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E7E2D8] pb-6 lg:pb-0 lg:pr-8">
                    <div>
                      {/* Category & Verified Badge */}
                      <div className="flex flex-wrap items-center gap-2 mb-4">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#92400E] text-[11px] font-medium font-outfit">
                          <Building2 className="w-3 h-3 text-[#B45309]" />
                          {currentItem.categoryLabel}
                        </span>

                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-[10.5px] font-medium border border-emerald-200">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" />
                          {currentItem.verificationBadge}
                        </span>
                      </div>

                      {/* Avatar & Name Lockup */}
                      <div className="flex items-center gap-4 mt-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#991B1B] via-[#B45309] to-[#F59E0B] text-white flex items-center justify-center font-cinzel font-bold text-lg shadow-md shrink-0">
                          {currentItem.avatarInitials}
                        </div>
                        <div>
                          <h3 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
                            {currentItem.name}
                          </h3>
                          <p className="text-xs text-[#78716C] font-outfit">
                            {currentItem.role}
                          </p>
                          <div className="flex items-center gap-1 text-[11px] text-[#B45309] font-medium mt-1">
                            <MapPin className="w-3 h-3 text-[#B45309]" />
                            <span>{currentItem.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* 5-Star Rating */}
                      <div className="flex items-center gap-1.5 mt-5">
                        <div className="flex text-[#F59E0B]">
                          {[...Array(currentItem.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#F59E0B]" />
                          ))}
                        </div>
                        <span className="text-xs text-[#78716C] font-mono">
                          ({currentItem.date})
                        </span>
                      </div>
                    </div>

                    {/* Associated Project / Plot details */}
                    <div className="mt-6 pt-5 border-t border-[#F5F0E6]">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#78716C] block">
                        Verified Development
                      </span>
                      <span className="text-xs font-semibold text-[#1C1917] font-outfit block mt-0.5">
                        {currentItem.projectOrDeal}
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Key Headline & Authentic Quote */}
                  <div className="lg:col-span-8 flex flex-col justify-center space-y-5">
                    {/* Highlighted Quote Title */}
                    <div className="relative">
                      <h4 className="font-cinzel text-xl sm:text-2xl lg:text-3xl font-semibold text-[#1C1917] leading-snug">
                        &ldquo;{currentItem.highlight}&rdquo;
                      </h4>
                    </div>

                    {/* Detailed Testimonial Body */}
                    <p className="font-outfit text-sm sm:text-base lg:text-lg text-[#44403C] leading-relaxed font-normal">
                      {currentItem.quote}
                    </p>

                    {/* Corporate Assurance Line */}
                    <div className="pt-2 flex items-center gap-2 text-xs text-[#78716C] font-outfit">
                      <UserCheck className="w-3.5 h-3.5 text-[#B45309]" />
                      <span>Verified client testimonial recorded under corporate feedback registry.</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Minimalist Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Pagination Dots */}
            <div className="flex items-center gap-2">
              {filteredTestimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#B45309]'
                      : 'w-2 bg-[#E7E2D8] hover:bg-[#A8A29E]'
                  }`}
                />
              ))}
            </div>

            {/* Prev / Next Minimal Buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                aria-label="Previous testimonial"
                className="w-11 h-11 rounded-full bg-white border border-[#E7E2D8] hover:border-[#B45309] text-[#1C1917] hover:text-[#B45309] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                aria-label="Next testimonial"
                className="w-11 h-11 rounded-full bg-[#1C1917] text-white hover:bg-[#B45309] flex items-center justify-center transition-all duration-200 cursor-pointer shadow-sm hover:scale-105 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Trust Banner with Quick Consultation Action */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-[#FFFBEB] to-[#FAF8F5] border border-[#FDE68A]/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1 text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start text-xs font-semibold text-[#B45309] uppercase tracking-wider font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>Looking to Buy, Sell, or Partner in Aurangabad?</span>
            </div>
            <p className="text-xs sm:text-sm text-[#57534E] font-outfit">
              Experience the same standard of legal diligence and transparent corporate handling.
            </p>
          </div>

          <button
            onClick={onOpenEnquiry}
            className="shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs tracking-wider uppercase btn-gold-border hover:scale-[1.02] transition-all cursor-pointer inline-flex items-center gap-2 font-outfit"
          >
            <span>Request Legal Consultation</span>
            <ArrowUpRight className="w-4 h-4 text-[#0C0A09]" />
          </button>
        </div>

      </div>
    </section>
  );
};
