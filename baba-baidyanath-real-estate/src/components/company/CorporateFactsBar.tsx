import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { IconCorporateChamber, IconVerifiedBadge, IconDeskPhone } from '../common/ThemeIcons';

export const CorporateFactsBar: React.FC = () => {
  return (
    <section id="corporate-facts" className="relative z-20 py-6 sm:py-8 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-label="Verified Corporate Facts">
      <div className="rounded-2xl bg-white/95 backdrop-blur-xl border border-[#E8E2D5] p-4 sm:p-8 shadow-[0_15px_35px_rgba(28,25,23,0.05)]">
        
        {/* Verification banner with Direct Desk Phone & CIN */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4 pb-4 sm:pb-6 border-b border-[#E8E2D5]">
          <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs tracking-wider uppercase text-[#9A6F20] font-semibold">
            <IconCorporateChamber size={16} color="gold" className="shrink-0" />
            <span>Ministry of Corporate Affairs (MCA) Registered Enterprise</span>
            <span className="text-[#C59B27] font-hindi font-medium">| भारत सरकार कॉर्पोरेट कार्य मंत्रालय</span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 w-full sm:w-auto">
            <a
              href="tel:+919876543210"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 text-[11px] sm:text-xs font-mono text-[#1C1917] hover:text-[#9A6F20] bg-[#FAF8F5] hover:bg-[#F5EFE6] px-3.5 py-1.5 rounded-lg border border-[#E8E2D5] shadow-xs transition-all hover:scale-[1.02]"
              title="Call Baba Baidyanath Real Estate Office"
            >
              <IconDeskPhone size={14} color="gold" className="shrink-0" />
              <span>Direct Desk: +91 98765 43210</span>
            </a>
            <div className="text-[11px] sm:text-xs text-[#57534E] font-mono tabular-nums bg-[#FAF8F5] px-2.5 py-1.5 rounded-lg border border-[#E8E2D5]">
              CIN: <span className="text-[#1C1917] font-bold">{COMPANY_DATA.cin}</span>
            </div>
          </div>
        </div>

        {/* Facts grid with authentic Hindi credentials */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
          
          <div className="border-l-2 border-[#C59B27] pl-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-medium">
                Incorporated
              </span>
              <span className="text-[10px] text-[#9A6F20] font-hindi">निगमन तिथि</span>
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1917] block font-bold tabular-nums">
              7 Nov 2024
            </span>
            <span className="text-xs text-[#78716C] block font-light">
              Companies Act 2013 (MCA)
            </span>
          </div>

          <div className="border-l-2 border-[#9A6F20] pl-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-medium">
                ROC Jurisdiction
              </span>
              <span className="text-[10px] text-[#9A6F20] font-hindi">क्षेत्राधिकार</span>
            </div>
            <span className="font-serif text-2xl sm:text-3xl text-[#1C1917] block font-bold">
              RoC Patna
            </span>
            <span className="text-xs text-[#78716C] block font-light">
              State of Bihar, India
            </span>
          </div>

          <div className="border-l-2 border-emerald-600 pl-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-medium">
                Statutory Status
              </span>
              <span className="text-[10px] text-emerald-700 font-hindi">विधिक स्थिति</span>
            </div>
            <div className="flex items-center gap-2">
              <IconVerifiedBadge size={16} color="emerald" className="shrink-0" />
              <span className="font-serif text-2xl sm:text-3xl text-emerald-700 font-bold">
                Active
              </span>
            </div>
            <span className="text-xs text-[#78716C] block font-light">
              Private, Unlisted Limited
            </span>
          </div>

          <div className="border-l-2 border-[#7E561C] pl-4 space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-[11px] uppercase tracking-widest text-[#78716C] block font-medium">
                Registered Seat
              </span>
              <span className="text-[10px] text-[#9A6F20] font-hindi">पंजीकृत कार्यालय</span>
            </div>
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
