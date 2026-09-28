import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import {
  IconDivineSpark,
  IconExecutiveSeal,
  IconPlotMatrix,
  IconVastuMandala,
  IconTitleSeal,
  IconMinimalArrow
} from '../common/ThemeIcons';
import { CompanyLogo } from '../common/CompanyLogo';

interface CompanyOverviewProps {
  onOpenEnquiry: () => void;
}

export const CompanyOverview: React.FC<CompanyOverviewProps> = ({ onOpenEnquiry }) => {
  return (
    <section
      id="company-overview"
      className="py-20 md:py-28 relative z-10 bg-transparent text-[#1C1917] border-y border-[#E7E2D8]"
      aria-label="Company Overview"
    >
      {/* Subtle Warm Luxury Watermark */}
      <div className="absolute top-12 right-8 opacity-[0.04] pointer-events-none hidden xl:block">
        <CompanyLogo variant="mark-only" size="xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs text-[#B45309] font-medium tracking-wide">
            <IconDivineSpark size={14} color="amber" />
            <span>Corporate Identity &bull; Registered in Bihar</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight [text-wrap:balance]">
            Sacred Integrity.<br />
            <span className="bg-gradient-to-r from-[#DC2626] via-[#B45309] to-[#D97706] bg-clip-text text-transparent">
              Dedicated to Lasting Value.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            Baba Baidyanath Real Estate Private Limited was established to bring uncompromising corporate governance, rigorous land due diligence, and sacred trust to real estate development in Aurangabad and premier growth corridors across Bihar and Purvanchal.
          </p>
        </div>

        {/* 2-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Factual Narrative in Ivory Surface with Gold Trim */}
          <div className="lg:col-span-7 rounded-2xl p-5 sm:p-9 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] space-y-6 text-[#44403C] leading-relaxed text-base">
            <p>
              In a regional market frequently hindered by fragmented family plots, disputed boundaries, and unregistered intermediaries, Baba Baidyanath Real Estate operates under a strictly registered corporate structure (CIN: <span className="font-mono text-xs font-semibold text-[#B45309] bg-[#FEF3C7] px-2 py-0.5 rounded border border-[#FDE68A]">{COMPANY_DATA.cin}</span>).
            </p>
            <p>
              Incorporated under the jurisdiction of the Registrar of Companies (RoC), Patna, our principal activities encompass real-estate operations with own and leased property. Rather than making unverified claims or circulating speculative brochures, we prioritize complete legal clarity, genealogical title checks (Khatiyan &amp; Jamabandi verifications), and Vastu-harmonized master planning.
            </p>

            <div className="pt-6 border-t border-[#E7E2D8]">
              <h3 className="font-serif text-xl text-[#1C1917] font-bold mb-4 flex items-center gap-2">
                <span>Corporate Governance &amp; Directorship</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {(COMPANY_DATA?.directors || []).map((director, index) => (
                  <div key={index} className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] hover:border-[#F59E0B]/50 transition-colors">
                    <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#B45309] font-semibold mb-1">
                      <IconExecutiveSeal size={14} color="crimson" />
                      <span>Appointed Director</span>
                    </div>
                    <div className="font-serif text-lg text-[#1C1917] font-bold">
                      {director}
                    </div>
                    <div className="text-xs text-[#78716C] mt-0.5">
                      Baba Baidyanath Real Estate Pvt Ltd
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenEnquiry}
                className="group text-xs uppercase tracking-wider font-semibold text-[#B45309] hover:text-[#DC2626] inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Initiate a Corporate or Land Discussion</span>
                <IconMinimalArrow size={14} color="amber" className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Column 2: Institutional Principles Bento (Rich Mixed Slate/White Cards) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_25px_rgba(28,25,23,0.05)] space-y-3 hover:border-[#F59E0B]/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/25">
                  <IconPlotMatrix size={20} color="amber" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Verified Title Due Diligence
                </h4>
              </div>
              <p className="text-sm text-[#57534E] leading-relaxed font-normal">
                Prior to entering any transaction or development agreement, exhaustive genealogical title searches, revenue register inspections (Khatiyan/Jamabandi), and physically verified boundary surveys are conducted.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_25px_rgba(28,25,23,0.05)] space-y-3 hover:border-[#DC2626]/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#DC2626]/10 border border-[#DC2626]/25">
                  <IconVastuMandala size={20} color="crimson" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Direct Regional Stewardship
                </h4>
              </div>
              <p className="text-sm text-[#57534E] leading-relaxed font-normal">
                Our registered headquarters in Aurangabad affords us deep, firsthand understanding of local land records, growth nodes along Grand Trunk Road (NH-19), and community stakeholder values.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_10px_25px_rgba(28,25,23,0.05)] space-y-3 hover:border-[#F59E0B]/40 transition-all">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/25">
                  <IconTitleSeal size={20} color="gold" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#1C1917]">
                  Zero Speculative Misrepresentation
                </h4>
              </div>
              <p className="text-sm text-[#57534E] leading-relaxed font-normal">
                In strict adherence to regulatory transparency, we never publish hypothetical architectural renders or fabricated unit listings before statutory sanctions and titles are formally secured.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
