import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import {
  ShieldCheck,
  UserCheck,
  Landmark,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  MapPin,
  Scale,
  FileText,
  Calendar,
  CreditCard
} from 'lucide-react';
import aboutHeroBg from '../../assets/about-hero-bg.png';
import { SiyaramShowcaseCard } from '../common/SiyaramShowcaseCard';

interface AboutPageProps {
  onOpenEnquiry?: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenEnquiry }) => {
  const scrollToDossier = () => {
    const el = document.getElementById('corporate-dossier');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative z-10 w-full text-[#151311] pb-24">
      
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: 4K PHOTO FULLY VISIBLE IN BACKGROUND + LUCID TRANSPARENT OVERLAY */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Hero Container with 4K Photo in Background */}
          <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden min-h-[560px] sm:min-h-[620px] md:min-h-[680px] lg:min-h-[740px] border border-[#E8E2D5] shadow-[0_25px_70px_rgba(40,25,10,0.08)] flex flex-col justify-start p-6 sm:p-10 md:p-12 lg:p-14 transition-all">
            
            {/* The 4K Photo with Artistic Blur Effect in the Background */}
            <div className="absolute inset-0 -z-10 bg-[#FAF6F0] overflow-hidden">
              <img
                src={aboutHeroBg}
                alt="Baba Baidyanath Real Estate 4K Master Artwork"
                className="w-full h-full object-cover object-center select-none scale-105 filter blur-[6px] transition-all duration-700"
                loading="eager"
                decoding="async"
              />
              <div 
                aria-hidden="true" 
                className="absolute inset-0 bg-gradient-to-r from-white/20 via-transparent to-transparent pointer-events-none" 
              />
            </div>

            {/* Top Statutory Accreditation Badge (No dot, clean editorial typography) */}
            <div className="relative z-10 flex items-center justify-between gap-4">
              <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-stone-900/[0.06] border border-stone-800/10 text-xs font-mono text-[#262320]">
                <span className="font-bold tracking-wider text-[#1A1816]">
                  CIN: {COMPANY_DATA.cin}
                </span>
                <span className="font-semibold text-emerald-800 bg-emerald-700/10 px-2 py-0.5 rounded-md">
                  Active / RoC Patna
                </span>
              </div>
            </div>

            {/* Content Positioned Right Below the Accreditation Badge */}
            <div className="relative z-10 max-w-2xl mt-4 sm:mt-5 space-y-4 bg-transparent border-0 shadow-none p-0">
              
              {/* Brand Tag */}
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#8B4513]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#B45309]" />
                <span>Corporate Heritage &bull; Institutional Standards</span>
              </div>

              {/* Editorial Headline */}
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#171513] tracking-tight leading-[1.18]">
                Built On Sacred Values.<br />
                <span className="text-[#881337]">
                  Committed to Lasting Value.
                </span>
              </h1>

              {/* Narrative */}
              <p className="text-sm sm:text-base text-[#3E3832] leading-relaxed font-normal max-w-xl">
                Baba Baidyanath Real Estate Private Limited was founded to bring uncompromising corporate governance, verifiable land due diligence, and absolute transparency to real estate development in Aurangabad and emerging growth corridors across Bihar.
              </p>

              {/* Bespoke Luxury Action Buttons */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                {onOpenEnquiry && (
                  <button
                    onClick={onOpenEnquiry}
                    className="px-6 py-3 rounded-xl bg-[#881337] hover:bg-[#70102D] text-white font-semibold text-xs tracking-wider uppercase transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer inline-flex items-center gap-2"
                  >
                    <span>Direct Consultation</span>
                  </button>
                )}

                <button
                  onClick={scrollToDossier}
                  className="px-5 py-3 rounded-xl bg-stone-900/[0.05] hover:bg-stone-900/[0.09] text-[#171513] border border-stone-800/15 text-xs font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-1.5 cursor-pointer shadow-none"
                >
                  <span>View Statutory Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#881337]" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE PILLARS OF GOVERNANCE (4 REFINED TRUST METRICS) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          
          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all space-y-2.5">
            <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] w-fit">
              <ShieldCheck className="w-5 h-5 text-[#D97706]" />
            </div>
            <div className="font-serif text-lg font-bold text-[#151311]">
              MCA Incorporated
            </div>
            <p className="text-xs text-[#524E48] leading-relaxed">
              Incorporated 7 Nov 2024 under the Companies Act 2013 with RoC Patna jurisdiction.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>CIN: {COMPANY_DATA.cin}</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all space-y-2.5">
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 w-fit">
              <MapPin className="w-5 h-5 text-emerald-700" />
            </div>
            <div className="font-serif text-lg font-bold text-[#151311]">
              Local Bihar Domicile
            </div>
            <p className="text-xs text-[#524E48] leading-relaxed">
              Permanent headquarters in Aurangabad, Bihar (PIN 824101), giving immediate local accessibility.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Kunda House, MG Road</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all space-y-2.5">
            <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] w-fit">
              <Scale className="w-5 h-5 text-[#D97706]" />
            </div>
            <div className="font-serif text-lg font-bold text-[#151311]">
              Title Due Diligence
            </div>
            <p className="text-xs text-[#524E48] leading-relaxed">
              Genealogical Khatiyan, Jamabandi, and mutation verification conducted before any property commitment.
            </p>
            <div className="pt-1 text-[11px] font-mono text-[#B45309] font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>100% Clear Title Standard</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-sm hover:shadow-md transition-all space-y-2.5">
            <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-200 w-fit">
              <Landmark className="w-5 h-5 text-amber-700" />
            </div>
            <div className="font-serif text-lg font-bold text-[#151311]">
              Zero Speculation
            </div>
            <p className="text-xs text-[#524E48] leading-relaxed">
              Operating strictly under approved real estate charter. No unverified brochures or speculative brokerage.
            </p>
            <div className="pt-1 text-[11px] font-mono text-emerald-700 font-semibold flex items-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-600" />
              <span>Transparent Commercial Model</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. REFINED STATUTORY CORPORATE DOSSIER (MCA / ROC PATNA) */}
      {/* ========================================================================= */}
      <section id="corporate-dossier" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 scroll-mt-24">
        <div className="rounded-3xl p-7 sm:p-12 bg-white border border-[#E8E2D5] shadow-[0_20px_50px_rgba(40,25,10,0.06)] space-y-8">
          
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8E2D5] pb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] font-mono font-bold">
                <FileText className="w-4 h-4 text-[#D97706]" />
                <span>Statutory Compliance &bull; Public Record</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#151311] mt-1">
                Official Corporate Registration Dossier
              </h2>
            </div>
            
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-mono bg-[#FAF8F5] text-[#524E48] px-3.5 py-1.5 rounded-full border border-[#E8E2D5] font-medium">
                GOVT. OF INDIA &bull; ROC PATNA
              </span>
              <span className="text-xs font-mono bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full border border-emerald-200 font-bold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ACTIVE</span>
              </span>
            </div>
          </div>

          {/* Dossier Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            
            <div className="space-y-4">
              <div className="border-b border-[#E8E2D5] pb-3.5">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Legal Corporate Entity Name
                </span>
                <span className="font-serif text-lg font-bold text-[#151311] block mt-0.5">
                  Baba Baidyanath Real Estate Private Limited
                </span>
              </div>

              <div className="border-b border-[#E8E2D5] pb-3.5">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Corporate Identification Number (CIN)
                </span>
                <span className="font-mono text-base font-bold text-[#B45309] block mt-0.5">
                  {COMPANY_DATA.cin}
                </span>
              </div>

              <div className="border-b border-[#E8E2D5] pb-3.5">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Registration Number
                </span>
                <span className="font-mono text-sm font-semibold text-[#151311] block mt-0.5">
                  072121
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Company Category &amp; Class
                </span>
                <span className="font-medium text-[#151311] block mt-0.5">
                  Company limited by shares / Non-government company / Private unlisted
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-b border-[#E8E2D5] pb-3.5">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Date of Statutory Incorporation
                </span>
                <span className="font-medium text-[#151311] block mt-0.5 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D97706]" />
                  <span>7 November 2024</span>
                </span>
              </div>

              <div className="border-b border-[#E8E2D5] pb-3.5">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Registrar of Companies (RoC)
                </span>
                <span className="font-medium text-[#151311] block mt-0.5 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#D97706]" />
                  <span>RoC Patna (Bihar)</span>
                </span>
              </div>

              <div className="border-b border-[#E8E2D5] pb-3.5">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Capital Structure
                </span>
                <span className="font-medium text-[#151311] block mt-0.5 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#D97706]" />
                  <span>Authorised: ₹1,00,000 &bull; Paid-up: ₹1,00,000</span>
                </span>
              </div>

              <div className="border-b border-[#E8E2D5] pb-3.5">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Corporate Office Address
                </span>
                <span className="font-medium text-[#151311] block mt-0.5 leading-relaxed">
                  {COMPANY_DATA.officeAddress}
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  MCA Registered Office
                </span>
                <span className="font-medium text-[#151311] block mt-0.5 leading-relaxed text-xs text-[#524E48]">
                  {COMPANY_DATA.registeredAddress}
                </span>
              </div>

            </div>

          </div>

          {/* Board of Directors */}
          <div className="pt-6 border-t border-[#E8E2D5] space-y-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-bold block">
                Executive Leadership
              </span>
              <h3 className="font-serif text-xl font-bold text-[#151311] mt-0.5">
                Board of Directors
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(COMPANY_DATA?.directors || []).map((director, index) => (
                <div key={index} className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-between hover:border-[#F59E0B]/40 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706]">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-lg font-bold text-[#151311]">
                        {director}
                      </div>
                      <div className="text-xs text-[#78716C] mt-0.5">
                        Director &bull; Appointed November 2024
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 font-bold shrink-0">
                    MCA Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Promoter's Allied Commercial Heritage: Siyaram's Showroom */}
          <div className="pt-6 border-t border-[#E8E2D5]">
            <SiyaramShowcaseCard />
          </div>

          {/* Consultation CTA Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-[#F3EFE6] to-[#FAF8F5] border border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-xl font-bold text-[#151311]">
                Need Legal Due Diligence or Land Advisory?
              </h4>
              <p className="text-xs sm:text-sm text-[#524E48]">
                Connect with our corporate office for confidential property and joint-development inquiries.
              </p>
            </div>

            {onOpenEnquiry && (
              <button
                onClick={onOpenEnquiry}
                className="px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 hover:scale-[1.02] shadow-[0_4px_16px_rgba(245,158,11,0.25)] transition-all shrink-0"
              >
                <span>Direct Consultation</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#0C0A09]" />
              </button>
            )}
          </div>

        </div>
      </section>

    </div>
  );
};
