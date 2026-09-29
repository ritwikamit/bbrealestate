import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import {
  ShieldCheck,
  UserCheck,
  Landmark,
  FileText,
  Calendar,
  CreditCard,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Search,
  Scale,
  Compass,
  FileCheck
} from 'lucide-react';
import { SiyaramShowcaseCard } from '../common/SiyaramShowcaseCard';
import { CorporateRegistriesSection } from './CorporateRegistriesSection';
import { FAQSection } from './FAQSection';

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
    <div className="relative z-10 w-full text-[#1C1917] pb-24">
      
      {/* ========================================================================= */}
      {/* 1. EDITORIAL HERO: MINIMAL, TIMELESS, AUTHENTIC */}
      {/* ========================================================================= */}
      <section className="relative w-full pt-8 sm:pt-12 pb-14 sm:pb-20 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-5">
            {/* Authentic Sanskrit Invocation */}
            <div className="flex items-center gap-2 text-[#9A6F20]">
              <span className="font-hindi text-sm sm:text-base font-semibold tracking-wide">
                ॥ श्री बाबा बैद्यनाथाय नमः ॥
              </span>
            </div>

            {/* Editorial Headline */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight leading-[1.15]">
              Clear Title Diligence.
              <span className="block text-[#9A6F20]">
                Grounded in Aurangabad.
              </span>
            </h1>

            {/* Hindi Heritage Subheading */}
            <p className="font-hindi text-lg sm:text-xl text-[#785415] font-medium">
              ॥ विश्वास, समर्पण और आपका अपना आशियाना ॥
            </p>

            {/* Grounded Human Narrative */}
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
              Baba Baidyanath Real Estate Private Limited was incorporated in Bihar to replace ambiguous verbal land deals with formal corporate governance, verified Khatiyan due diligence, and systematically planned plotted developments across Aurangabad and South Bihar.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {onOpenEnquiry && (
                <button
                  onClick={onOpenEnquiry}
                  className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold text-xs uppercase tracking-wider transition-all duration-200 shadow-sm hover:scale-[1.02] cursor-pointer inline-flex items-center gap-2"
                >
                  <span>Consult Corporate Office</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0F0E0D]" />
                </button>
              )}

              <button
                onClick={scrollToDossier}
                className="px-6 py-3.5 rounded-full bg-white hover:bg-stone-50 text-[#1C1917] border border-[#D5CEBF] text-xs font-semibold tracking-wider uppercase transition-all duration-200 inline-flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>View MCA Statutory Dossier</span>
                <span className="text-[#9A6F20]">&darr;</span>
              </button>
            </div>

          </div>

          {/* Quick Factual Badges Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 pt-8 border-t border-[#E8E2D5]">
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5]/80 shadow-2xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block">Corporate Status</span>
              <span className="text-sm font-bold text-[#1C1917] flex items-center gap-1.5 mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Active / RoC Patna
              </span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5]/80 shadow-2xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block">Incorporation</span>
              <span className="text-sm font-bold text-[#1C1917] mt-1 block">7 November 2024</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5]/80 shadow-2xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block">Registration No.</span>
              <span className="text-sm font-mono font-bold text-[#9A6F20] mt-1 block">072121</span>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#E8E2D5]/80 shadow-2xs">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#78716C] block">Corporate HQ</span>
              <span className="text-sm font-bold text-[#1C1917] mt-1 block">Aurangabad (824101)</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. EXECUTIVE STEWARDSHIP: BOARD OF DIRECTORS */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#9A6F20] font-mono font-bold">
              Leadership &bull; नेतृत्व
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
              Board of Directors
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              Founded and directed by Kundan Kumar Singh and Vikas Kumar Singh, bringing grounded local accountability, business integrity, and personal accessibility to every land development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(COMPANY_DATA?.directors || []).map((director, index) => (
              <div
                key={index}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E2D5] shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] text-[#9A6F20]">
                      <UserCheck className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                      MCA Verified Director
                    </span>
                  </div>

                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#1C1917]">
                      {director}
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#9A6F20] font-semibold mt-1">
                      Director &bull; Baba Baidyanath Real Estate Pvt. Ltd.
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                    Appointed at statutory incorporation on 7 November 2024. Actively oversees title due diligence, land acquisition protocols, boundary infrastructure, and direct stakeholder communications.
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs text-[#78716C]">
                  <span>RoC Patna Jurisdiction</span>
                  <span className="font-hindi text-[#9A6F20] font-medium">॥ प्रत्यक्ष संपर्क एवं परामर्श ॥</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. GROUND PRACTICE: HOW WE VERIFY LAND IN BIHAR */}
      {/* ========================================================================= */}
      <section className="py-14 sm:py-20 border-b border-[#E8E2D5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs uppercase tracking-widest text-[#9A6F20] font-mono font-bold">
              Our Methodology &bull; कार्यप्रणाली
            </span>
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917]">
              How We Verify &amp; Deliver Land in Bihar
            </h2>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed">
              We eliminate the ambiguity of unverified property brokerage through a disciplined four-stage due diligence workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-2xs space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C59B27]/40 flex items-center justify-center text-[#9A6F20] font-mono font-bold text-sm">
                01
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Khatiyan &amp; CS/RS Survey Cross-Check
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                We trace property records through Cadastral Survey (CS) and Revisional Survey (RS) maps against circle revenue registers to ensure unbroken hereditary title.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-2xs space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C59B27]/40 flex items-center justify-center text-[#9A6F20] font-mono font-bold text-sm">
                02
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Jamabandi &amp; Mutation Legality
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Prior to any engagement, we verify current Jamabandi, clear lagan (rent) receipts, and examine District Sub-Registrar records to confirm zero encumbrances or pending disputes.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-2xs space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C59B27]/40 flex items-center justify-center text-[#9A6F20] font-mono font-bold text-sm">
                03
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Total Station Boundary Demarcation
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                Every layout is surveyed using high-precision Total Station equipment. We install permanent corner pillars, dedicate 30 to 40-foot internal roads, and mark exact boundaries on ground.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-2xs space-y-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-[#C59B27]/40 flex items-center justify-center text-[#9A6F20] font-mono font-bold text-sm">
                04
              </div>
              <h3 className="font-serif text-lg font-bold text-[#1C1917]">
                Clear Registry &amp; Mutation Support
              </h3>
              <p className="text-xs text-[#57534E] leading-relaxed">
                We handle the complete conveyance process with full circle rate compliance, direct deed registration at the registry office, and follow-through assistance for prompt mutation.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. OFFICIAL STATUTORY DOSSIER (MINISTRY OF CORPORATE AFFAIRS) */}
      {/* ========================================================================= */}
      <section id="corporate-dossier" className="py-14 sm:py-20 border-b border-[#E8E2D5] scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="rounded-3xl p-6 sm:p-10 lg:p-12 bg-white border border-[#E8E2D5] shadow-sm space-y-8">
            
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#E8E2D5] pb-6 gap-4">
              <div>
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#9A6F20] font-mono font-bold">
                  <FileText className="w-4 h-4 text-[#9A6F20]" />
                  <span>Public Statutory Record &bull; MCA21</span>
                </div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1C1917] mt-1">
                  Official Corporate Registration Profile
                </h2>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono bg-[#FAF8F5] text-[#57534E] px-3.5 py-1.5 rounded-full border border-[#E8E2D5]">
                  GOVT. OF INDIA &bull; ROC PATNA
                </span>
                <span className="text-xs font-mono bg-emerald-50 text-emerald-800 px-3.5 py-1.5 rounded-full border border-emerald-200 font-bold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span>ACTIVE</span>
                </span>
              </div>
            </div>

            {/* Dossier 2-Column Data Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-sm">
              
              <div className="space-y-4">
                <div className="border-b border-[#E8E2D5] pb-3">
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Full Legal Entity Name
                  </span>
                  <span className="font-serif text-lg font-bold text-[#1C1917] block mt-0.5">
                    Baba Baidyanath Real Estate Private Limited
                  </span>
                </div>

                <div className="border-b border-[#E8E2D5] pb-3">
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Corporate Identification Number (CIN)
                  </span>
                  <span className="font-mono text-base font-bold text-[#9A6F20] block mt-0.5">
                    {COMPANY_DATA.cin}
                  </span>
                </div>

                <div className="border-b border-[#E8E2D5] pb-3">
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Company Registration Number
                  </span>
                  <span className="font-mono text-sm font-semibold text-[#1C1917] block mt-0.5">
                    072121
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Company Category &amp; Class
                  </span>
                  <span className="font-medium text-[#1C1917] block mt-0.5">
                    Company limited by shares &bull; Non-govt company &bull; Private unlisted
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="border-b border-[#E8E2D5] pb-3">
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Date of Statutory Incorporation
                  </span>
                  <span className="font-medium text-[#1C1917] block mt-0.5 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#9A6F20]" />
                    <span>7 November 2024</span>
                  </span>
                </div>

                <div className="border-b border-[#E8E2D5] pb-3">
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Registrar of Companies
                  </span>
                  <span className="font-medium text-[#1C1917] block mt-0.5 flex items-center gap-2">
                    <Landmark className="w-4 h-4 text-[#9A6F20]" />
                    <span>RoC Patna (Bihar)</span>
                  </span>
                </div>

                <div className="border-b border-[#E8E2D5] pb-3">
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Capital Structure
                  </span>
                  <span className="font-medium text-[#1C1917] block mt-0.5 flex items-center gap-2">
                    <CreditCard className="w-4 h-4 text-[#9A6F20]" />
                    <span>Authorised: ₹1,00,000 &bull; Paid-up: ₹1,00,000</span>
                  </span>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#78716C] font-mono block">
                    Head Office &amp; Address for Correspondence
                  </span>
                  <span className="font-medium text-[#1C1917] block mt-0.5 text-xs sm:text-sm">
                    {COMPANY_DATA.officeAddress}
                  </span>
                </div>
              </div>

            </div>

            {/* Promoter's Allied Commercial Heritage: Siyaram's Showroom */}
            <div className="pt-6 border-t border-[#E8E2D5]">
              <SiyaramShowcaseCard />
            </div>

            {/* Direct Consultation Notice */}
            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Require Title Documents or Land Consultation?
                </h4>
                <p className="text-xs text-[#57534E] mt-0.5">
                  Visit our office at Kunda House, MG Road, Aurangabad, or speak directly with our directors.
                </p>
              </div>

              {onOpenEnquiry && (
                <button
                  onClick={onOpenEnquiry}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold text-xs uppercase tracking-wider cursor-pointer inline-flex items-center gap-2 hover:scale-[1.02] transition-all shrink-0"
                >
                  <span>Open Enquiry Desk</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#0F0E0D]" />
                </button>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. FREQUENTLY ASKED QUESTIONS */}
      {/* ========================================================================= */}
      <FAQSection />

      {/* ========================================================================= */}
      {/* 6. THIRD-PARTY VERIFIED REGISTRIES & DIRECTORIES */}
      {/* ========================================================================= */}
      <CorporateRegistriesSection />

    </div>
  );
};
