import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { IconCorporateChamber, IconVerifiedBadge, IconDeskPhone } from '../common/ThemeIcons';

export const CorporateFactsBar: React.FC = () => {
  return (
    <section id="corporate-facts" className="relative z-20 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Verified Corporate Facts">
      <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E7E2D8] p-4 sm:p-8 shadow-[0_15px_35px_rgba(28,25,23,0.06)]">
        
        {/* Verification banner with Direct Desk Phone & CIN */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#E7E2D8]">
          <div className="flex items-center gap-2 text-[11px] sm:text-xs tracking-wider uppercase text-[#B45309] font-medium">
            <IconCorporateChamber size={16} color="amber" className="shrink-0" />
            <span>Ministry of Corporate Affairs (MCA) Registered Enterprise</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="tel:+919876543210"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#92400E] hover:text-[#78350F] bg-[#FEF3C7] hover:bg-[#FDE68A] px-3 py-1.5 rounded-lg border border-[#FDE68A] shadow-sm transition-all hover:scale-[1.02]"
              title="Call Baba Baidyanath Real Estate Office"
            >
              <IconDeskPhone size={14} color="amber" className="shrink-0" />
              <span>Direct Desk: +91 98765 43210</span>
            </a>
            <div className="text-[11px] sm:text-xs text-[#57534E] font-mono tabular-nums bg-[#FAF8F5] px-2.5 py-1.5 rounded-lg border border-[#E7E2D8]">
              CIN: <span className="text-[#1C1917] font-semibold">{COMPANY_DATA.cin}</span>
            </div>
          </div>
        </div>

        {/* Facts grid: 2 cols on mobile, 4 cols on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          
          <div className="border-l-2 border-[#DC2626] pl-4 space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-light">
              Incorporated
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1917] block font-bold tabular-nums">
              7 Nov 2024
            </span>
            <span className="text-xs text-[#78716C] block font-light">
              Companies Act 2013
            </span>
          </div>

          <div className="border-l-2 border-[#D97706] pl-4 space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-light">
              ROC Jurisdiction
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1917] block font-bold">
              RoC Patna
            </span>
            <span className="text-xs text-[#78716C] block font-light">
              State of Bihar, India
            </span>
          </div>

          <div className="border-l-2 border-emerald-600 pl-4 space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-light">
              Statutory Status
            </span>
            <div className="flex items-center gap-2">
              <IconVerifiedBadge size={16} color="emerald" className="shrink-0" />
              <span className="font-serif text-2xl sm:text-3xl text-emerald-700 font-bold">
                Active
              </span>
            </div>
            <span className="text-xs text-[#78716C] block font-light">
              Private, Unlisted
            </span>
          </div>

          <div className="border-l-2 border-[#B45309] pl-4 space-y-1">
            <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-light">
              Registered Seat
            </span>
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1917] block font-bold">
              Aurangabad
            </span>
            <span className="text-xs text-[#78716C] block font-light">
              PIN 824101, Bihar
            </span>
          </div>

        </div>

      </div>
    </section>
  );
};
