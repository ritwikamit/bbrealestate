import React from 'react';
import { MapPin, Navigation, ArrowUpRight, Compass, ShieldCheck } from 'lucide-react';
import { COMPANY_DATA } from '../../data/company';

interface LocationSectionProps {
  onOpenEnquiry?: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenEnquiry }) => {
  const corridors = [
    {
      city: 'Aurangabad',
      state: 'Bihar',
      pin: '824101',
      title: 'Grand Trunk Road (NH-19) Corridor',
      hindi: 'राष्ट्रीय राजमार्ग १९ (जी.टी. रोड) कॉरिडोर',
      type: 'Primary Commercial & Plotting Artery',
      connectivity: 'Direct high-speed four-lane highway connectivity across South Bihar',
      highlights: [
        'Strategic road frontage with clear highway egress',
        'Direct connectivity to Varanasi, Sasaram, Gaya, and Patna arteries',
        'High long-term capital preservation value for large holdings'
      ]
    },
    {
      city: 'Aurangabad',
      state: 'Bihar',
      pin: '824101',
      title: 'Urban Extension & Ring Road Sector',
      hindi: 'शहरी विस्तार एवं रिंग रोड क्षेत्र',
      type: 'Residential Plotted Growth Zone',
      connectivity: 'Arterial 30 to 40 ft link roads to central administrative district',
      highlights: [
        'Demarcated residential layout townships with road planning',
        'Close proximity to collectorate, civil courts, and medical facilities',
        '100% individual Dakhil-Kharij mutation due diligence'
      ]
    },
    {
      city: 'Aurangabad',
      state: 'Bihar',
      pin: '824101',
      title: 'MG Road & Yodha Nagar District',
      hindi: 'महात्मा गांधी मार्ग एवं योद्धा नगर',
      type: 'Corporate Headquarters & Civic Landmark',
      connectivity: 'Central civic artery near Punjab National Bank',
      highlights: [
        'Corporate office at Kunda House',
        'Promoter landmark: Siyaram & Siya Shop',
        'Direct consultation desk for land verification and title review'
      ]
    }
  ];

  return (
    <section id="locations-section" className="py-14 sm:py-20 md:py-24 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E8E2D5]" aria-label="Locations">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2">
            <span className="badge-yellow-theme px-3.5 py-1 rounded-full font-hindi text-xs sm:text-sm text-[#9A6F20] font-semibold inline-flex items-center gap-1.5">
              <span>॥ रणनीतिक भौगोलिक उपस्थिति ॥</span>
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-bold tracking-tight">
            Strategic Bihar Locations
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            Carefully evaluated land positions focused on connectivity, scale, and long-term value across Aurangabad and South Bihar.
          </p>
          <div className="font-hindi text-xs sm:text-sm text-[#9A6F20] font-medium">
            बिहार → औरंगाबाद → प्रमुख राष्ट्रीय राजमार्ग एवं नियोजित विस्तार क्षेत्र
          </div>
        </div>

        {/* Regional Hierarchy Presentation */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-stone-600">
            <span className="font-bold text-[#1C1917] bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#E8E2D5]">
              State: Bihar
            </span>
            <span className="text-[#C59B27] font-bold">&rarr;</span>
            <span className="font-bold text-[#1C1917] bg-[#FAF8F5] px-3 py-1.5 rounded-lg border border-[#E8E2D5]">
              District Seat: Aurangabad
            </span>
            <span className="text-[#C59B27] font-bold">&rarr;</span>
            <span className="font-bold text-[#9A6F20] bg-yellow-500/10 px-3 py-1.5 rounded-lg border border-[#FACC15]/40">
              Verified Plotting Corridors
            </span>
          </div>
          <div className="text-stone-500 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#9A6F20]" />
            <span>All locations verified against RoC Patna jurisdiction</span>
          </div>
        </div>

        {/* 3-Column Corridors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {corridors.map((c, i) => (
            <div
              key={i}
              className="rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D5] hover:border-[#FACC15]/60 shadow-[0_15px_35px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_45px_rgba(234,179,8,0.1)] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#9A6F20] font-semibold">
                    <MapPin className="w-4 h-4 text-[#C59B27]" />
                    <span>{c.city}, {c.state}</span>
                  </div>
                  <span className="text-[10.5px] font-mono text-stone-400 bg-stone-100 px-2 py-0.5 rounded">
                    PIN {c.pin}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917] leading-tight">
                    {c.title}
                  </h3>
                  <div className="font-hindi text-xs text-[#9A6F20] mt-1 font-medium">
                    {c.hindi}
                  </div>
                  <span className="inline-block mt-2 text-[11px] font-mono uppercase tracking-wider text-[#78716C] bg-[#FAF8F5] px-2.5 py-1 rounded border border-[#E8E2D5]">
                    {c.type}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {c.connectivity}
                </p>

                <div className="space-y-2 pt-2 border-t border-[#E8E2D5]">
                  {c.highlights.map((h, hi) => (
                    <div key={hi} className="flex items-start gap-2 text-xs text-[#3E3832]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C59B27] mt-1.5 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#E8E2D5]">
                <button
                  onClick={onOpenEnquiry}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl btn-yellow-gradient font-bold text-xs uppercase tracking-wider transition-all cursor-pointer shadow-2xs hover:scale-[1.02]"
                >
                  <span>Enquire for this Corridor</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#0F0E0D]" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
