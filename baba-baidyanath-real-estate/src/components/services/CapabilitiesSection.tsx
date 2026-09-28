import React, { useState } from 'react';
import { CAPABILITY_AREAS } from '../../data/services';
import {
  IconModernTowers,
  IconVerifiedBadge,
  IconMinimalArrow,
  IconDivineSpark
} from '../common/ThemeIcons';

interface CapabilitiesSectionProps {
  onOpenEnquiry: () => void;
}

export const CapabilitiesSection: React.FC<CapabilitiesSectionProps> = ({ onOpenEnquiry }) => {
  const [activeTab, setActiveTab] = useState<string>(CAPABILITY_AREAS[0].id);

  const selectedService = CAPABILITY_AREAS.find((s) => s.id === activeTab) || CAPABILITY_AREAS[0];

  return (
    <section className="py-12 sm:py-20 md:py-28 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E7E2D8]" aria-label="Capabilities and Scope">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs text-[#B45309] font-medium tracking-wide">
              <IconModernTowers size={15} color="amber" />
              <span>Capabilities &amp; Scope of Development</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight">
              Strategic Practice Areas
            </h2>
            <p className="text-base text-[#57534E] leading-relaxed font-normal">
              Aligned with our registered corporate objects under the Ministry of Corporate Affairs for real estate activities with own or leased property.
            </p>
          </div>

          <div className="text-xs text-[#78716C] md:text-right font-mono flex items-center gap-2 bg-white px-3.5 py-2 rounded-lg border border-[#E7E2D8] shadow-sm self-start md:self-auto">
            <span>Corporate Objects</span>
            <span>&bull;</span>
            <span className="text-[#B45309] font-semibold">824101 Focus</span>
            <span>&bull;</span>
            <span className="text-[#1C1917] font-semibold">RoC Patna</span>
          </div>
        </div>

        {/* Interactive Capability Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Practice List Navigation */}
          <div className="lg:col-span-5 space-y-3">
            {CAPABILITY_AREAS.map((service) => {
              const isActive = activeTab === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveTab(service.id)}
                  className={`w-full text-left p-4 sm:p-5 transition-all duration-200 rounded-xl border cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B] flex items-center justify-between group ${
                    isActive
                      ? 'bg-white border-[#F59E0B] shadow-[0_8px_25px_rgba(245,158,11,0.18)]'
                      : 'bg-white/70 hover:bg-white border-[#E7E2D8] text-[#57534E]'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className={isActive ? 'text-[#B45309] font-bold' : 'text-[#78716C]'}>
                        {service.category}
                      </span>
                    </div>
                    <div className={`font-serif text-lg sm:text-xl font-bold transition-colors ${
                      isActive ? 'text-[#1C1917]' : 'text-[#44403C] group-hover:text-[#1C1917]'
                    }`}>
                      {service.title}
                    </div>
                  </div>
                  <IconMinimalArrow size={14} color={isActive ? 'amber' : 'stone'} className="transition-transform group-hover:translate-x-0.5" />
                </button>
              );
            })}
          </div>

          {/* Active Capability Detail Panel in Light Luxury Card */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-5 sm:p-9 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-semibold">
                  {selectedService.category}
                </span>
                <span className="text-xs text-[#78716C] font-mono">
                  BBRE / SPEC-0{CAPABILITY_AREAS.findIndex(s => s.id === selectedService.id) + 1}
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-bold mb-3">
                  {selectedService.title}
                </h3>
                <p className="text-base text-[#57534E] leading-relaxed font-normal">
                  {selectedService.overview || selectedService.description}
                </p>
              </div>

              {/* Scope Deliverables & Protocol Highlights */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-widest text-[#78716C] font-semibold">
                  Standard Operating Verification Protocols
                </h4>
                <div className="space-y-2.5">
                  {(selectedService.deliverables || selectedService.features || []).map((deliverable, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8]">
                      <IconVerifiedBadge size={16} color="amber" className="shrink-0 mt-0.5" />
                      <span className="text-sm text-[#292524] leading-snug">
                        {deliverable}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {selectedService.audience && (
                <div className="p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] flex items-center gap-3 text-xs text-[#57534E]">
                  <span className="text-[#B45309] font-mono uppercase tracking-wider font-semibold shrink-0">
                    Target Scope:
                  </span>
                  <span>{selectedService.audience}</span>
                </div>
              )}

              <div className="pt-4 border-t border-[#E7E2D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <div className="text-xs text-[#78716C]">
                  Statutory review &amp; registered documentation guaranteed.
                </div>
                <button
                  onClick={onOpenEnquiry}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs tracking-wider uppercase transition-all duration-300 btn-gold-border hover:scale-[1.02] cursor-pointer"
                >
                  <span>Enquire on this Scope</span>
                  <IconMinimalArrow size={14} color="stone" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
