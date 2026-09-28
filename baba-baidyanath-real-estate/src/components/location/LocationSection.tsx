import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { Navigation, Clock, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 md:py-28 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E7E2D8]" aria-label="Corporate Registered Location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16 space-y-3 sm:space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-[#B45309] font-mono font-medium">
            Registered Seat &bull; Operational Presence
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight">
            Aurangabad, Bihar (824101)
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            Strategically located in historic Magadh along the Grand Trunk Road (NH-19) national economic corridor.
          </p>
        </div>

        {/* 2-Column Location & Connectivity Grid in Light Luxury Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Address Details Card */}
          <div className="lg:col-span-6 rounded-2xl p-5 sm:p-9 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] flex flex-col justify-between space-y-6 sm:space-y-8">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-medium">
                  Official MCA Registered Address
                </span>
                <span className="text-xs text-[#78716C] font-mono">
                  STATE CODE: 10 (BR)
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#78716C] block font-mono">
                  Registered Domicile
                </span>
                <p className="font-serif text-2xl sm:text-3xl text-[#1C1917] font-bold leading-relaxed">
                  {COMPANY_DATA.registeredAddress}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8]">
                  <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono mb-1">
                    Prominent Landmark
                  </span>
                  <span className="text-sm font-semibold text-[#1C1917] block">
                    Near Gayatri Mandir
                  </span>
                  <span className="text-xs text-[#78716C] mt-0.5 block font-light">
                    Aurangabad Town Centre
                  </span>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8]">
                  <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono mb-1">
                    Postal Code
                  </span>
                  <span className="font-mono text-base font-bold text-[#B45309] block">
                    824101
                  </span>
                  <span className="text-xs text-[#78716C] mt-0.5 block font-light">
                    Aurangabad Head Post Office
                  </span>
                </div>
              </div>

            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-4 border-t border-[#E7E2D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#78716C]">
                <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Prior appointment recommended</span>
              </div>

              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.18em] bg-white text-[#1C1917] inline-flex items-center justify-center gap-2 cursor-pointer btn-gold-border transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#D97706]" />
                <span className="font-semibold">Open in Google Maps</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#78716C]" />
              </a>
            </div>
          </div>

          {/* Regional Transit & Economic Arteries */}
          <div className="lg:col-span-6 rounded-2xl p-7 sm:p-9 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-medium">
                  Connectivity & Arteries
                </span>
                <span className="text-xs text-emerald-700 font-mono font-semibold">
                  STRATEGIC ACCESS
                </span>
              </div>

              <div className="space-y-3.5">
                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] hover:border-[#F59E0B]/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#B45309]">
                      Grand Trunk Road (NH-19 / Old NH-2)
                    </span>
                    <span className="text-[11px] text-[#78716C] font-mono">Golden Quadrilateral</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed font-normal">
                    Direct arterial connectivity connecting Kolkata, Dhanbad, Varanasi, and Delhi with fast commercial transit through Aurangabad.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] hover:border-[#F59E0B]/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#B45309]">
                      Patna - Aurangabad Corridor (NH-139)
                    </span>
                    <span className="text-[11px] text-[#78716C] font-mono">State Capital Link</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed font-normal">
                    Direct north-south highway connecting Aurangabad through Arwal directly into the state capital Patna.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] hover:border-[#F59E0B]/50 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-[#B45309]">
                      Rail Connectivity (Anugrah Narayan Road - AUBR)
                    </span>
                    <span className="text-[11px] text-[#78716C] font-mono">Grand Chord Line</span>
                  </div>
                  <p className="text-xs text-[#57534E] leading-relaxed font-normal">
                    Located on East Central Railway's Grand Chord line, connecting major passenger and freight corridors across Eastern and Northern India.
                  </p>
                </div>
              </div>

            </div>

            <div className="p-4 rounded-xl bg-[#FAF8F5] border border-[#E7E2D8] text-xs text-[#57534E]">
              <strong className="text-[#1C1917] font-semibold">Visiting Note:</strong> To ensure privacy and proper record documentation, consultations with company directors are arranged by prior written or telephonic appointment.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
