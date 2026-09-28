import React from 'react';
import { UPCOMING_PORTFOLIO_NOTICE } from '../../data/projects';
import {
  IconModernTowers,
  IconDivineSpark,
  IconVastuMandala,
  IconTitleSeal
} from '../common/ThemeIcons';

interface ProjectsSectionProps {
  onOpenEnquiry: () => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="projects-section" className="py-12 sm:py-20 md:py-28 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E7E2D8]" aria-label="Project Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs text-[#B45309] font-medium tracking-wide">
            <IconModernTowers size={15} color="amber" />
            <span>Developments &amp; Opportunities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight">
            Project Portfolio
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            In strict compliance with our corporate transparency policy and statutory directives, only regulatory-cleared developments are published.
          </p>
        </div>

        {/* Portfolio Status Container in Light Luxury Card */}
        <div className="rounded-2xl p-5 sm:p-12 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] space-y-8 sm:space-y-10">
          
          {/* Main Statement Box */}
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FEF3C7] border border-[#FDE68A] text-xs font-semibold uppercase tracking-wider text-[#92400E]">
              <IconDivineSpark size={14} color="amber" />
              <span>{UPCOMING_PORTFOLIO_NOTICE.headline}</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-4xl text-[#1C1917] font-bold">
              {UPCOMING_PORTFOLIO_NOTICE.statement}
            </h3>
            <p className="text-sm sm:text-base text-[#57534E] leading-relaxed font-normal">
              We do not publish speculative renderings, arbitrary price claims, or premature bookings. Each real-estate project undergoes comprehensive boundary surveyance, land title verification, and statutory clearances before public unveiling.
            </p>
          </div>

          {/* Active Corridor Feasibility Tracks */}
          <div className="space-y-4 pt-6 border-t border-[#E7E2D8]">
            <h4 className="text-xs uppercase tracking-widest text-[#B45309] font-semibold font-mono">
              Active Focus Corridors in Feasibility Phase
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(UPCOMING_PORTFOLIO_NOTICE.focusAreas || []).map((area, idx) => (
                <div key={idx} className="p-6 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] hover:border-[#F59E0B]/60 hover:bg-white transition-all space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-[#B45309] font-semibold">
                    <div className="flex items-center gap-1.5">
                      <IconVastuMandala size={15} color="amber" />
                      <span>Corridor 0{idx + 1}</span>
                    </div>
                    {area.status && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FEF3C7] text-[#92400E] border border-[#FDE68A]">
                        {area.status}
                      </span>
                    )}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#1C1917]">
                    {area.title}
                  </div>
                  <div className="text-xs text-[#78716C] font-mono">
                    {area.typology}
                  </div>
                  {area.notes && (
                    <div className="text-xs text-[#57534E] pt-1 leading-relaxed">
                      {area.notes}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Institutional Advisory Notice */}
          <div className="pt-6 border-t border-[#E7E2D8] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 p-6 rounded-xl bg-[#FEF3C7]/40 border border-[#FDE68A]">
            <div className="flex items-start gap-4">
              <div className="p-2.5 rounded-lg bg-[#FEF3C7] border border-[#FDE68A] shrink-0">
                <IconTitleSeal size={20} color="amber" />
              </div>
              <div className="space-y-1">
                <div className="text-sm font-semibold text-[#1C1917]">
                  Advance Notification Registry for Qualified Buyers &amp; Landowners
                </div>
                <div className="text-xs text-[#57534E]">
                  Register your requirement confidentially with our corporate desk to receive official statutory prospectuses upon clearance.
                </div>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="w-full md:w-auto shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs tracking-wider uppercase transition-all duration-300 btn-gold-border hover:scale-[1.02] cursor-pointer"
            >
              Register Interest
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
