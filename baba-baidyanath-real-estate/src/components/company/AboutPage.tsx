import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { ShieldCheck, UserCheck, Landmark, Award, Sparkles } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';

interface AboutPageProps {
  onOpenEnquiry: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <div className="py-16 md:py-24 relative z-10 bg-transparent text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="max-w-3xl space-y-5">
          <CompanyLogo variant="hero" theme="light" className="items-start text-left mb-2" />
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs text-[#B45309] font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Corporate Heritage &amp; Governance</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917] tracking-tight">
            About Baba Baidyanath Real Estate
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            Founded in Aurangabad, Bihar, on the core principles of statutory compliance, rigorous land title integrity, and regional real estate stewardship.
          </p>
        </div>

        {/* Corporate Snapshot Grid in Light Luxury Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_30px_rgba(28,25,23,0.06)] space-y-3">
            <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] w-fit">
              <ShieldCheck className="w-5 h-5 text-[#D97706]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Statutory Incorporation
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed font-normal">
              Formed under the Companies Act 2013 on 7 November 2024, holding active corporate standing under the Registrar of Companies (RoC Patna).
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_30px_rgba(28,25,23,0.06)] space-y-3">
            <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 w-fit">
              <Landmark className="w-5 h-5 text-emerald-700" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Registered Jurisdiction
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed font-normal">
              Permanent domicile in Aurangabad district, Bihar, giving us immediate proximity and accountable oversight over land transactions.
            </p>
          </div>

          <div className="p-7 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_30px_rgba(28,25,23,0.06)] space-y-3">
            <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] w-fit">
              <Award className="w-5 h-5 text-[#D97706]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#1C1917]">
              Transparent Charter
            </h3>
            <p className="text-xs text-[#57534E] leading-relaxed font-normal">
              Authorized for real estate activities with own or leased property, operating free of speculative commitments and misleading representations.
            </p>
          </div>
        </div>

        {/* Detailed Corporate Dossier in Light Luxury Glass */}
        <div className="rounded-2xl p-8 sm:p-12 bg-white border border-[#E7E2D8] shadow-[0_20px_50px_rgba(28,25,23,0.06)] space-y-8">
          
          <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-5">
            <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-semibold">
              Ministry of Corporate Affairs Official Record
            </span>
            <span className="text-xs text-[#78716C] font-mono">
              MCA / ROC PATNA
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
                  Authorised Capital: ₹1,00,000 · Paid-up Capital: ₹1,00,000
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
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="font-semibold text-emerald-700">Active</span>
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
                        Director · Appointed Nov 2024
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
