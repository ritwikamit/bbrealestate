import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { ShieldCheck, UserCheck, Landmark, Award, Sparkles, ArrowRight, CheckCircle2, FileCheck, Building2, MapPin } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';

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
    <div className="relative z-10 w-full text-[#1C1917]">
      
      {/* ========================================================================= */}
      {/* 1. CINEMATIC HERO SECTION: DARK, BLURRY, LUCID LUXURY */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
        
        {/* Deep Lucid Backdrop with Dynamic Ambient Radial Glows */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#0F0E0C]/96 via-[#151310]/92 to-[#0B0A09]/96 border border-white/[0.12] shadow-[0_30px_90px_rgba(0,0,0,0.7)] backdrop-blur-3xl overflow-hidden p-6 sm:p-10 md:p-14 lg:p-16">
            
            {/* Ambient Background Aura Blobs (Blurry, Lucid Ethereal Lighting) */}
            <div 
              aria-hidden="true" 
              className="absolute -top-32 -left-32 w-96 h-96 bg-gradient-to-br from-[#DC2626]/20 via-[#F59E0B]/25 to-transparent rounded-full blur-[100px] pointer-events-none"
            />
            <div 
              aria-hidden="true" 
              className="absolute top-1/4 -right-32 w-[32rem] h-[32rem] bg-gradient-to-bl from-[#F59E0B]/20 via-[#B45309]/15 to-transparent rounded-full blur-[120px] pointer-events-none"
            />
            <div 
              aria-hidden="true" 
              className="absolute -bottom-24 left-1/3 w-80 h-80 bg-gradient-to-t from-[#FEF08A]/10 to-transparent rounded-full blur-[90px] pointer-events-none"
            />

            {/* Subtle Architectural Dot Grid Overlay */}
            <div 
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.035] pointer-events-none"
            />

            {/* Hero Main Content Grid */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              
              {/* Left Column: Narrative, Badges & Actions */}
              <div className="lg:col-span-7 space-y-6 sm:space-y-7 text-left">
                
                {/* Glowing Lucid Top Pill */}
                <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.05] border border-[#F59E0B]/30 backdrop-blur-md shadow-[0_2px_12px_rgba(245,158,11,0.15)]">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#F59E0B] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F59E0B]" />
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-[#FDE68A] uppercase tracking-wider font-medium">
                    MCA Verified &bull; ROC Patna &bull; Active
                  </span>
                </div>

                {/* Main Headline with Molten Gold Gradient Accent */}
                <div className="space-y-3">
                  <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.12]">
                    Sacred Roots.{' '}
                    <span className="bg-gradient-to-r from-[#FFF5EA] via-[#FBBF24] to-[#F59E0B] bg-clip-text text-transparent drop-shadow-[0_2px_18px_rgba(245,158,11,0.3)] block sm:inline">
                      Enduring Trust.
                    </span>
                  </h1>
                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-normal max-w-xl">
                    Baba Baidyanath Real Estate Private Limited was founded to bring institutional accountability, transparent land titling, and sacred integrity to real estate development across Aurangabad, Bihar, and the Purvanchal corridor.
                  </p>
                </div>

                {/* Lucid Feature Pills */}
                <div className="flex flex-wrap gap-2.5 pt-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs text-stone-200">
                    <Building2 className="w-3.5 h-3.5 text-[#F59E0B]" />
                    <span>Incorporated 7 Nov 2024</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs text-stone-200">
                    <FileCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>100% Clear Title Verification</span>
                  </div>
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md text-xs text-stone-200">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>HQ in Aurangabad, Bihar</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-3.5 pt-2">
                  {onOpenEnquiry && (
                    <button
                      onClick={onOpenEnquiry}
                      className="px-6 sm:px-8 py-3.5 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs uppercase tracking-[0.16em] cursor-pointer inline-flex items-center gap-2 shadow-[0_8px_24px_rgba(245,158,11,0.35)] hover:scale-[1.02] hover:shadow-[0_12px_32px_rgba(245,158,11,0.5)] transition-all"
                    >
                      <Sparkles className="w-4 h-4 text-[#0C0A09]" />
                      <span>Corporate Inquiry</span>
                    </button>
                  )}

                  <button
                    onClick={scrollToDossier}
                    className="px-5 sm:px-6 py-3.5 rounded-full bg-white/[0.06] hover:bg-white/[0.1] text-stone-200 border border-white/[0.12] hover:border-white/[0.25] text-xs font-semibold uppercase tracking-wider backdrop-blur-md transition-all inline-flex items-center gap-2 cursor-pointer"
                  >
                    <span>View Statutory Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                  </button>
                </div>

              </div>

              {/* Right Column: Lucid 3D Glass Pedestal showcasing the Master Logo */}
              <div className="lg:col-span-5 flex justify-center">
                <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-white/[0.01] border border-white/[0.14] backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.8)] text-center group">
                  
                  {/* Subtle Inner Glow */}
                  <div 
                    aria-hidden="true"
                    className="absolute -inset-1 bg-gradient-to-r from-[#DC2626]/20 via-[#F59E0B]/30 to-[#FEF08A]/15 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                  />

                  {/* Logo Container with Ambient Spotlight */}
                  <div className="relative z-10 flex flex-col items-center">
                    <div className="relative mb-5 p-2">
                      <CompanyLogo variant="hero" size="xl" className="drop-shadow-[0_15px_30px_rgba(0,0,0,0.9)]" />
                    </div>

                    {/* Pedestal Divider */}
                    <div className="w-full flex items-center justify-center gap-3 my-3">
                      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
                      <span className="font-mono text-[10px] text-[#FDE68A] tracking-[0.25em] uppercase font-semibold">
                        Master Brandmark
                      </span>
                      <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#F59E0B]/40 to-transparent" />
                    </div>

                    {/* Key Corporate Metrics inside Lucid Card */}
                    <div className="w-full grid grid-cols-2 gap-2.5 mt-2 text-left">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] backdrop-blur-md">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">
                          CIN
                        </span>
                        <span className="font-mono text-[11px] sm:text-xs font-bold text-amber-300 block truncate mt-0.5">
                          {COMPANY_DATA.cin}
                        </span>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-white/[0.08] backdrop-blur-md">
                        <span className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block">
                          Status
                        </span>
                        <span className="text-[11px] sm:text-xs font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span>Active / RoC</span>
                        </span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 2. THREE PILLARS SNAPSHOT GRID */}
      {/* ========================================================================= */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 pb-20">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_30px_rgba(28,25,23,0.06)] space-y-3 hover:border-[#F59E0B]/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] w-fit">
              <ShieldCheck className="w-5 h-5 text-[#D97706]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Statutory Incorporation
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
              Formed under the Companies Act 2013 on 7 November 2024, holding active corporate standing under the Registrar of Companies (RoC Patna).
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_30px_rgba(28,25,23,0.06)] space-y-3 hover:border-emerald-300 transition-colors">
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 w-fit">
              <Landmark className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Registered Jurisdiction
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
              Permanent domicile in Aurangabad district, Bihar, giving us immediate proximity, deep local roots, and accountable oversight over land transactions.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_30px_rgba(28,25,23,0.06)] space-y-3 hover:border-[#F59E0B]/40 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] w-fit">
              <Award className="w-5 h-5 text-[#D97706]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Transparent Charter
            </h3>
            <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed font-normal">
              Authorized for real estate activities with own or leased property, operating free of speculative commitments and misleading representations.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. DETAILED STATUTORY CORPORATE DOSSIER */}
        {/* ========================================================================= */}
        <div id="corporate-dossier" className="rounded-3xl p-7 sm:p-12 bg-white border border-[#E7E2D8] shadow-[0_20px_50px_rgba(28,25,23,0.06)] space-y-8 scroll-mt-24">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E7E2D8] pb-5 gap-2">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-semibold block">
                Ministry of Corporate Affairs Official Record
              </span>
              <h2 className="font-serif text-2xl font-bold text-[#1C1917] mt-0.5">
                Statutory Corporate Profile
              </h2>
            </div>
            <span className="text-xs text-[#78716C] font-mono self-start sm:self-auto bg-[#FAF8F5] px-3 py-1 rounded-full border border-[#E7E2D8]">
              GOVT. OF INDIA &bull; ROC PATNA
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
            <div className="space-y-4">
              <div className="border-b border-[#E7E2D8] pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Corporate Name
                </span>
                <span className="font-serif text-lg font-bold text-[#1C1917] block mt-0.5">
                  Baba Baidyanath Real Estate Private Limited
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Corporate Identity Number (CIN)
                </span>
                <span className="font-mono text-sm font-semibold text-[#B45309] block mt-0.5">
                  {COMPANY_DATA.cin}
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Date of Incorporation
                </span>
                <span className="font-medium text-[#1C1917] block mt-0.5">
                  7 November 2024
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Company Category &amp; Class
                </span>
                <span className="font-medium text-[#1C1917] block mt-0.5">
                  Company limited by shares / Non-govt company / Private unlisted
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="border-b border-[#E7E2D8] pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Registrar of Companies
                </span>
                <span className="font-medium text-[#1C1917] block mt-0.5">
                  RoC Patna (Bihar)
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Capital Structure
                </span>
                <span className="font-medium text-[#1C1917] block mt-0.5">
                  Authorised Capital: ₹1,00,000 &bull; Paid-up Capital: ₹1,00,000
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-3">
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Registered Office Address
                </span>
                <span className="font-medium text-[#1C1917] block mt-0.5 leading-snug">
                  {COMPANY_DATA.registeredAddress}
                </span>
              </div>

              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#78716C] block">
                  Company Operating Status
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-emerald-700">Active / Good Standing</span>
                </div>
              </div>
            </div>
          </div>

          {/* Directorship Section */}
          <div className="pt-6 border-t border-[#E7E2D8] space-y-4">
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Board of Directors
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(COMPANY_DATA?.directors || []).map((director, index) => (
                <div key={index} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706]">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="font-serif text-lg font-bold text-[#1C1917]">
                        {director}
                      </div>
                      <div className="text-xs text-[#78716C]">
                        Director &bull; Appointed Nov 2024
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    MCA Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
};
