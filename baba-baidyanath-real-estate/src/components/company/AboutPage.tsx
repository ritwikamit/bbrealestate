import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import {
  ShieldCheck,
  UserCheck,
  Landmark,
  Award,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  FileCheck,
  Building2,
  MapPin,
  Scale,
  FileText,
  Calendar,
  CreditCard,
  Briefcase
} from 'lucide-react';
import aboutHeroBg from '../../assets/about-hero-bg.png';

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
      {/* 1. HERO SECTION: OFFICIAL PANORAMIC ARTWORK BACKGROUND */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 pb-12 sm:pt-6 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Panoramic Masterpiece Banner Container */}
          <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] overflow-hidden border border-[#E7E2D8] bg-[#FBF9F5] shadow-[0_25px_60px_rgba(28,25,23,0.07)] transition-all">
            
            {/* Master Artwork Image - Rendered exactly as provided with zero changes */}
            <div className="relative w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-[#F5EFEB] via-[#FAF8F5] to-[#F5EFEB]">
              <img
                src={aboutHeroBg}
                alt="Baba Baidyanath Real Estate Private Limited"
                className="w-full h-auto max-h-[580px] object-contain object-center select-none"
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Quick Hero Floating Information Bar */}
            <div className="border-t border-[#E7E2D8] bg-white/95 backdrop-blur-xl px-6 py-4 sm:px-10 sm:py-5 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                <span className="font-mono text-xs font-semibold text-[#1C1917] tracking-wider uppercase">
                  CIN: {COMPANY_DATA.cin}
                </span>
                <span className="hidden sm:inline text-xs text-[#78716C]">&bull;</span>
                <span className="hidden sm:inline font-mono text-xs text-[#78716C]">
                  ROC Patna &bull; Active Company
                </span>
              </div>

              <div className="flex items-center gap-3">
                {onOpenEnquiry && (
                  <button
                    onClick={onOpenEnquiry}
                    className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 hover:scale-[1.02] shadow-[0_4px_16px_rgba(245,158,11,0.25)] transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#0C0A09]" />
                    <span>Inquire Now</span>
                  </button>
                )}

                <button
                  onClick={scrollToDossier}
                  className="px-4 py-2.5 rounded-full bg-[#FAF8F5] hover:bg-[#F3EFE6] text-[#1C1917] border border-[#E7E2D8] text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <span>MCA Dossier</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
                </button>
              </div>
            </div>

          </div>

          {/* Section Introduction Narrative */}
          <div className="max-w-4xl mx-auto text-center space-y-4 pt-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] font-medium tracking-wide mx-auto">
              <Building2 className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Corporate Heritage &bull; Institutional Standards</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#1C1917] tracking-tight [text-wrap:balance]">
              Built On Sacred Values.<br />
              <span className="bg-gradient-to-r from-[#DC2626] via-[#B45309] to-[#D97706] bg-clip-text text-transparent">
                Committed to Lasting Value.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed max-w-2xl mx-auto font-normal">
              Baba Baidyanath Real Estate Private Limited was founded to bring uncompromising corporate governance, verifiable land due diligence, and absolute transparency to real estate development in Aurangabad and emerging growth corridors across Bihar.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. CORE PILLARS OF GOVERNANCE (3 ELEGANT CARDS) */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-8 rounded-3xl bg-white border border-[#E7E2D8] shadow-[0_12px_35px_rgba(28,25,23,0.05)] space-y-4 hover:border-[#F59E0B]/50 transition-all group">
            <div className="p-3 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] w-fit group-hover:scale-105 transition-transform">
              <ShieldCheck className="w-6 h-6 text-[#D97706]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Statutory Incorporation
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed font-normal">
              Officially incorporated under the Indian Companies Act, 2013 on 7 November 2024. Active legal standing with the Registrar of Companies (ROC), Patna.
            </p>
            <div className="pt-2 text-xs font-mono text-[#B45309] flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>ROC Registered Entity</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E7E2D8] shadow-[0_12px_35px_rgba(28,25,23,0.05)] space-y-4 hover:border-emerald-300 transition-all group">
            <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200 w-fit group-hover:scale-105 transition-transform">
              <MapPin className="w-6 h-6 text-emerald-700" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Permanent Regional Domicile
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed font-normal">
              Registered headquarters located directly in Aurangabad, Bihar (PIN 824101). Deep local roots, immediate accessibility, and accountable oversight.
            </p>
            <div className="pt-2 text-xs font-mono text-emerald-700 flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct Regional Presence</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-[#E7E2D8] shadow-[0_12px_35px_rgba(28,25,23,0.05)] space-y-4 hover:border-[#F59E0B]/50 transition-all group">
            <div className="p-3 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] w-fit group-hover:scale-105 transition-transform">
              <Scale className="w-6 h-6 text-[#D97706]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
              Title &amp; Boundary Integrity
            </h3>
            <p className="text-sm text-[#57534E] leading-relaxed font-normal">
              Every parcel undergoes genealogical Khatiyan, Jamabandi, and mutation verification. Zero speculative promises, unverified claims, or unauthorized brokers.
            </p>
            <div className="pt-2 text-xs font-mono text-[#B45309] flex items-center gap-1.5 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>100% Due Diligence Standard</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OFFICIAL STATUTORY DOSSIER (MINISTRY OF CORPORATE AFFAIRS) */}
      {/* ========================================================================= */}
      <section id="corporate-dossier" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 scroll-mt-24">
        <div className="rounded-3xl p-7 sm:p-12 lg:p-14 bg-white border border-[#E7E2D8] shadow-[0_20px_50px_rgba(28,25,23,0.06)] space-y-10">
          
          {/* Dossier Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E7E2D8] pb-6 gap-3">
            <div>
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] font-mono font-semibold">
                <FileText className="w-4 h-4 text-[#D97706]" />
                <span>Statutory Compliance &bull; Public Record</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917] mt-1">
                Corporate Registration Record
              </h2>
            </div>
            
            <div className="flex items-center gap-2 self-start sm:self-auto">
              <span className="text-xs font-mono bg-[#FAF8F5] text-[#57534E] px-3.5 py-1.5 rounded-full border border-[#E7E2D8]">
                MCA &bull; ROC PATNA
              </span>
              <span className="text-xs font-mono bg-emerald-50 text-emerald-700 px-3.5 py-1.5 rounded-full border border-emerald-200 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>ACTIVE</span>
              </span>
            </div>
          </div>

          {/* Facts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
            
            <div className="space-y-5">
              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Legal Entity Name
                </span>
                <span className="font-serif text-lg font-bold text-[#1C1917] block mt-1">
                  Baba Baidyanath Real Estate Private Limited
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Corporate Identification Number (CIN)
                </span>
                <span className="font-mono text-sm sm:text-base font-bold text-[#B45309] block mt-1">
                  {COMPANY_DATA.cin}
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Registration Number
                </span>
                <span className="font-mono text-sm font-semibold text-[#1C1917] block mt-1">
                  072121
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Company Category &amp; Class
                </span>
                <span className="font-medium text-[#1C1917] block mt-1">
                  Company limited by shares / Non-government company / Private unlisted
                </span>
              </div>
            </div>

            <div className="space-y-5">
              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Date of Incorporation
                </span>
                <span className="font-medium text-[#1C1917] block mt-1 flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-[#D97706]" />
                  <span>7 November 2024</span>
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Registrar of Companies (RoC)
                </span>
                <span className="font-medium text-[#1C1917] block mt-1 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#D97706]" />
                  <span>RoC Patna (Bihar)</span>
                </span>
              </div>

              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Capital Structure
                </span>
                <span className="font-medium text-[#1C1917] block mt-1 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[#D97706]" />
                  <span>Authorised Capital: ₹1,00,000 &bull; Paid-up Capital: ₹1,00,000</span>
                </span>
              </div>

              <div>
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Registered Office Address
                </span>
                <span className="font-medium text-[#1C1917] block mt-1 leading-relaxed">
                  {COMPANY_DATA.registeredAddress}
                </span>
              </div>

            </div>

          </div>

          {/* Board of Directors */}
          <div className="pt-6 border-t border-[#E7E2D8] space-y-5">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-semibold block">
                Executive Leadership
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#1C1917] mt-0.5">
                Board of Directors
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(COMPANY_DATA?.directors || []).map((director, index) => (
                <div key={index} className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D8] flex items-center justify-between hover:border-[#F59E0B]/40 transition-colors">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706]">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-serif text-lg font-bold text-[#1C1917]">
                        {director}
                      </div>
                      <div className="text-xs text-[#78716C] mt-0.5">
                        Director &bull; Appointed November 2024
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-3 py-1 rounded-md border border-emerald-200 font-semibold shrink-0">
                    MCA Verified
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation CTA Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FAF8F5] via-[#F3EFE6] to-[#FAF8F5] border border-[#E7E2D8] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="font-serif text-xl font-bold text-[#1C1917]">
                Require Institutional Due Diligence or Land Advisory?
              </h4>
              <p className="text-xs sm:text-sm text-[#57534E]">
                Our executive desk is available for confidential discussions regarding property in Aurangabad.
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
