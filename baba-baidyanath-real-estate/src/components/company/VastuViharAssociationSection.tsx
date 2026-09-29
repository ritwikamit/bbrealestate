import React from 'react';
import { ShieldCheck, ArrowUpRight } from 'lucide-react';

interface VastuViharAssociationSectionProps {
  onOpenEnquiry?: () => void;
}

export const VastuViharAssociationSection: React.FC<VastuViharAssociationSectionProps> = ({ onOpenEnquiry }) => {
  return (
    <section id="association-section" className="py-14 sm:py-20 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E8E2D5]" aria-label="Corporate Association">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl p-7 sm:p-10 lg:p-12 bg-white border border-[#E8E2D5] shadow-[0_15px_35px_rgba(28,25,23,0.05)] hover:border-[#FACC15]/50 transition-all duration-300 space-y-6">
          
          {/* Subtle Tag */}
          <div className="flex items-center gap-2">
            <span className="badge-yellow-theme px-3.5 py-1 rounded-full font-mono text-xs uppercase tracking-widest text-[#9A6F20] font-semibold inline-flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C59B27]" />
              <span>Corporate Association &middot; संस्थागत सहभागिता</span>
            </span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#1C1917] tracking-tight">
              Associated with Vastu Vihar
            </h2>
            <div className="font-hindi text-sm sm:text-base text-[#9A6F20] font-medium">
              ॥ वास्तु विहार के साथ सहभागिता ॥
            </div>
          </div>

          {/* Factual Restrained Copy */}
          <p className="text-sm sm:text-base text-[#57534E] leading-relaxed max-w-3xl font-normal">
            Baba Baidyanath Real Estate Private Limited operates in association with Vastu Vihar for plotting and regional land opportunities in Bihar. This association supports rigorous due diligence, layout planning standards, and professional transaction handling for clients seeking land assets.
          </p>

          <p className="text-xs sm:text-sm text-[#78716C] leading-relaxed max-w-2xl font-normal">
            Specific relationship and project documentation are provided directly during formal property consultations at our corporate office in Aurangabad.
          </p>

          {/* Consultation Desk Action */}
          <div className="pt-4 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="text-xs font-mono text-[#78716C]">
              Reference: Association &bull; RoC Patna Jurisdiction
            </div>

            {onOpenEnquiry && (
              <button
                onClick={onOpenEnquiry}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full btn-yellow-gradient font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] cursor-pointer shadow-xs"
              >
                <span>Consult on Land Opportunities</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0F0E0D]" />
              </button>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
