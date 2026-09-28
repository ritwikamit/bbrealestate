import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import {
  ShieldCheck,
  UserCheck,
  Landmark,
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
  PhoneCall,
  ExternalLink
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
    <div className="relative z-10 w-full text-[#151311] pb-24">
      
      {/* ========================================================================= */}
      {/* 1. REFINED & CRYSTAL CLEAR HERO STAGE */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-4 sm:pt-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Panoramic Masterpiece Display Card */}
          <div className="relative w-full rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-b from-[#FDFBF7] via-[#FAF6F0] to-[#F5EFEB] border border-[#E8E2D5] shadow-[0_20px_60px_rgba(40,25,10,0.06)] overflow-hidden transition-all duration-300 hover:shadow-[0_25px_70px_rgba(40,25,10,0.09)]">
            
            {/* Top Accent Strip */}
            <div className="h-1.5 w-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706]" />

            {/* Verification Status Banner */}
            <div className="px-6 py-3.5 sm:px-10 border-b border-[#E8E2D5] bg-white/70 backdrop-blur-md flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-600" />
                </span>
                <span className="font-mono text-xs font-semibold text-[#151311] tracking-wider uppercase">
                  Official Corporate Portal &bull; Registered in Bihar
                </span>
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#78716C]">
                <span className="text-[#B45309] font-bold">CIN:</span>
                <span className="text-[#151311] font-semibold">{COMPANY_DATA.cin}</span>
                <span className="hidden sm:inline">&bull;</span>
                <span className="hidden sm:inline text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">Active</span>
              </div>
            </div>

            {/* Master Artwork Image - Rendered at Full Sharpness & Clarity Without Any Changes */}
            <div className="relative w-full flex items-center justify-center p-3 sm:p-6 md:p-8 bg-transparent">
              <img
                src={aboutHeroBg}
                alt="Baba Baidyanath Real Estate Private Limited"
                className="w-full h-auto max-h-[580px] object-contain object-center select-none"
                style={{ imageRendering: 'auto' }}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Bottom Floating Action Bar */}
            <div className="px-6 py-4 sm:px-10 sm:py-5 border-t border-[#E8E2D5] bg-white/90 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <div className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-bold">
                  Statutory Jurisdiction
                </div>
                <div className="text-sm font-serif font-bold text-[#151311] mt-0.5">
                  Registrar of Companies (RoC), Patna &bull; Aurangabad, Bihar 824101
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
                {onOpenEnquiry && (
                  <button
                    onClick={onOpenEnquiry}
                    className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs uppercase tracking-[0.14em] cursor-pointer inline-flex items-center justify-center gap-2 hover:scale-[1.02] shadow-[0_4px_16px_rgba(245,158,11,0.28)] transition-all"
                  >
                    <Sparkles className="w-4 h-4 text-[#0C0A09]" />
                    <span>Inquire Online</span>
                  </button>
                )}

                <button
                  onClick={scrollToDossier}
                  className="px-5 py-3 rounded-full bg-white hover:bg-[#FAF8F5] text-[#151311] border border-[#DCD5C8] text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-1.5 cursor-pointer shadow-sm hover:border-[#B45309]"
                >
                  <span>View MCA Record</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B45309]" />
                </button>
              </div>
            </div>

          </div>

          {/* Clear Executive Summary Narrative */}
          <div className="max-w-4xl mx-auto text-center space-y-4 pt-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-xs text-[#92400E] font-medium tracking-wide">
              <Building2 className="w-3.5 h-3.5 text-[#D97706]" />
              <span>Corporate Heritage &bull; Institutional Standards</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-[#151311] tracking-tight leading-[1.14]">
              Built On Sacred Values.<br />
              <span className="bg-gradient-to-r from-[#DC2626] via-[#B45309] to-[#D97706] bg-clip-text text-transparent">
                Engineered For Lasting Value.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#524E48] leading-relaxed max-w-2xl mx-auto font-normal">
              Baba Baidyanath Real Estate Private Limited was incorporated to bring uncompromising statutory governance, complete land title diligence, and institutional accountability to real estate development in Aurangabad and emerging growth corridors across Bihar.
            </p>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. REFINED 4-PILLAR TRUST METRICS */}
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
              <span>Near Gayatri Mandir, Aurangabad</span>
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
      {/* 3. REFINED STATUTORY CORPORATE DOSSIER */}
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

              <div>
                <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                  Official Registered Office
                </span>
                <span className="font-medium text-[#151311] block mt-0.5 leading-relaxed">
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
