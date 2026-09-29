import React, { useState } from 'react';
import { IconMinimalArrow } from '../common/ThemeIcons';
import { MapPin, CheckCircle2, Clock } from 'lucide-react';

import residentialPlotsImg from '../../assets/residential-plots.jpg';
import plotsEnclaveTwoImg from '../../assets/plots-enclave-two.jpg';
import agriculturalLandImg from '../../assets/agricultural-land.jpg';

interface ProjectsSectionProps {
  onOpenEnquiry: () => void;
  showFilterMenu?: boolean;
  onViewAllDevelopments?: () => void;
  selectedCategory?: string;
  onCategoryChange?: (category: string) => void;
}

export type PlottingCategoryKey = 'all' | 'residential_plots' | 'land_parcels';

interface PlottingCard {
  id: string;
  category: 'residential_plots' | 'land_parcels';
  tag: string;
  tagHindi: string;
  title: string;
  location: string;
  image: string;
  status: string;
  overview: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
  isPlaceholder?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenEnquiry,
  showFilterMenu = true,
  onViewAllDevelopments,
  selectedCategory,
  onCategoryChange
}) => {
  const [internalFilter, setInternalFilter] = useState<PlottingCategoryKey>('all');

  const activeFilter = (selectedCategory as PlottingCategoryKey) || internalFilter;

  const handleFilterChange = (cat: PlottingCategoryKey) => {
    setInternalFilter(cat);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  const plottingCards: PlottingCard[] = [
    {
      id: 'residential-plots-1',
      category: 'residential_plots',
      tag: 'Residential Plot Layout',
      tagHindi: 'आवासीय भूखंड योजना',
      title: 'Aurangabad Urban Plotted Township',
      location: 'Aurangabad Urban Extension & Ring Road Corridor',
      image: residentialPlotsImg,
      status: 'Demarcated & Registry Ready',
      overview: 'Planned residential layout with clearly demarcated plots, wide paved avenues, curbstones, and designated open avenues in Aurangabad growth zones.',
      metrics: [
        { label: 'Plot Configurations', value: '1,200 – 3,600 Sq. Ft. (1 to 3 Katha)' },
        { label: 'Avenue Width', value: '30 to 40 Ft. Paved Access' },
        { label: 'Title Due Diligence', value: '100% Mutation & Khatiyan Clear' }
      ],
      highlights: [
        'Boundary demarcated individual plots with registered corner markers',
        'Direct link to arterial district corridors and NH-19',
        'Clear title records and mutation assistance'
      ]
    },
    {
      id: 'residential-plots-2',
      category: 'residential_plots',
      tag: 'Plotted Land Enclave',
      tagHindi: 'वसंत विहार आवासीय लेआउट',
      title: 'Vasant Vihar Plotted Enclave',
      location: 'Near GT Road NH-19 Sector, Aurangabad',
      image: plotsEnclaveTwoImg,
      status: 'Paved Access & Registry Ready',
      overview: 'Demarcated residential sectors featuring planned blacktop avenues, utility provisions, and verified Dakhil-Kharij mutation records.',
      metrics: [
        { label: 'Plot Sizing', value: '1 Katha, 2 Katha & 3 Katha Units' },
        { label: 'Main Avenue', value: '40 Ft. Planned Road' },
        { label: 'Registry Status', value: 'Immediate Registration Due Diligence' }
      ],
      highlights: [
        'Stone boundary demarcation with white corner marker pillars',
        'Strategic road connectivity to district administrative centers',
        'Possession and construction clearance'
      ]
    },
    {
      id: 'land-parcels-1',
      category: 'land_parcels',
      tag: 'Strategic Land Parcel',
      tagHindi: 'प्रमुख भूमि पार्सल',
      title: 'Grand Trunk Road Land Parcel',
      location: 'Grand Trunk Road / NH-19 Corridor, Aurangabad District',
      image: agriculturalLandImg,
      status: 'Title Pedigree Verified',
      overview: 'Large continuous land parcel suited for institutions, long-term capital preservation, or planned future development with arterial highway frontage.',
      metrics: [
        { label: 'Holding Size', value: 'Multi-Katha to Acreage Parcels' },
        { label: 'Road Frontage', value: 'Direct Arterial Corridor Access' },
        { label: 'Title Diligence', value: 'Complete Khatiyan Ancestral Lineage' }
      ],
      highlights: [
        'Complete Khatiyan lineage and unencumbered ancestral verification',
        'All-weather arterial road access directly off NH-19',
        'Single-owner registered sale deed records'
      ]
    }
  ];

  const filteredCards = activeFilter === 'all'
    ? plottingCards
    : plottingCards.filter((c) => c.category === activeFilter);

  return (
    <section id="plotting-section" className="py-12 sm:py-20 md:py-24 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E8E2D5]" aria-label="Plotting Opportunities">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header with Authentic Restrained Copy */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="flex items-center justify-center gap-2">
            <span className="badge-yellow-theme px-3.5 py-1 rounded-full font-hindi text-xs sm:text-sm text-[#9A6F20] font-semibold inline-flex items-center gap-1.5">
              <span>॥ भूखंड एवं भूमि अवसर ॥</span>
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-bold tracking-tight">
            Plotting Opportunities
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            Well-positioned land opportunities for buyers looking at larger property investments.
          </p>
          <p className="font-hindi text-xs sm:text-sm text-[#9A6F20] font-medium">
            स्पष्ट खतियान, निर्विवाद स्वामित्व एवं पारदर्शी विधिक प्रक्रिया के साथ सुरक्षित प्लॉटिंग।
          </p>
        </div>

        {/* Minimal Category Filter */}
        {showFilterMenu && (
          <div className="w-full flex justify-center mb-10 sm:mb-14 px-1 sm:px-4">
            <div className="w-full sm:w-auto max-w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center justify-start sm:justify-center gap-2 sm:gap-3 p-1 rounded-2xl bg-transparent overscroll-contain">
              
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center justify-center ${
                  activeFilter === 'all'
                    ? 'bg-[#1C1917] text-[#FAF8F5] shadow-[0_4px_16px_rgba(234,179,8,0.25)] border border-[#FACC15]/80'
                    : 'text-[#44403C] hover:text-[#1C1917] hover:bg-stone-200/40'
                }`}
              >
                <span className="inline-flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm font-semibold">All Plotting</span>
                  <span className="text-[#FACC15] font-light select-none text-xs sm:text-sm">|</span>
                  <span className={`font-hindi text-xs sm:text-sm font-semibold ${
                    activeFilter === 'all' ? 'text-[#FACC15]' : 'text-[#9A6F20]'
                  }`}>
                    समस्त अवसर
                  </span>
                </span>
              </button>

              <button
                onClick={() => handleFilterChange('residential_plots')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center justify-center ${
                  activeFilter === 'residential_plots'
                    ? 'bg-[#1C1917] text-[#FAF8F5] shadow-[0_4px_16px_rgba(234,179,8,0.25)] border border-[#FACC15]/80'
                    : 'text-[#44403C] hover:text-[#1C1917] hover:bg-stone-200/40'
                }`}
              >
                <span className="inline-flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm font-semibold">Residential Plots</span>
                  <span className="text-[#FACC15] font-light select-none text-xs sm:text-sm">|</span>
                  <span className={`font-hindi text-xs sm:text-sm font-semibold ${
                    activeFilter === 'residential_plots' ? 'text-[#FACC15]' : 'text-[#9A6F20]'
                  }`}>
                    आवासीय भूखंड
                  </span>
                </span>
              </button>

              <button
                onClick={() => handleFilterChange('land_parcels')}
                className={`px-4 sm:px-5 py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center justify-center ${
                  activeFilter === 'land_parcels'
                    ? 'bg-[#1C1917] text-[#FAF8F5] shadow-[0_4px_16px_rgba(234,179,8,0.25)] border border-[#FACC15]/80'
                    : 'text-[#44403C] hover:text-[#1C1917] hover:bg-stone-200/40'
                }`}
              >
                <span className="inline-flex items-baseline gap-2">
                  <span className="text-xs sm:text-sm font-semibold">Land Parcels</span>
                  <span className="text-[#FACC15] font-light select-none text-xs sm:text-sm">|</span>
                  <span className={`font-hindi text-xs sm:text-sm font-semibold ${
                    activeFilter === 'land_parcels' ? 'text-[#FACC15]' : 'text-[#9A6F20]'
                  }`}>
                    भूमि पार्सल
                  </span>
                </span>
              </button>

            </div>
          </div>
        )}

        {/* 2-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D5] hover:border-[#FACC15]/60 shadow-[0_15px_40px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_50px_rgba(234,179,8,0.12)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Image Container */}
              <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Visual Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-black/20 pointer-events-none" />

                {/* Top Badge: Category & Feasibility Status */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between gap-2">
                  <span className="px-2 sm:px-2.5 py-1 rounded-md bg-stone-950/90 border border-[#FACC15]/30 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-semibold text-[#FEF08A] uppercase tracking-wider shadow-xs">
                    {card.tag}
                  </span>
                  <span className="px-2 sm:px-2.5 py-1 rounded-md bg-stone-950/85 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-emerald-400 font-medium">
                    {card.status}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                  <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#FEF08A] font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FACC15] shrink-0" />
                    <span className="truncate">{card.location}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-sm leading-snug">
                    {card.title}
                  </h3>
                  <div className="font-hindi text-[11px] sm:text-xs text-stone-200 mt-0.5">
                    {card.tagHindi}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between space-y-4 sm:space-y-5">
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {card.overview}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5 p-3 sm:p-3.5 rounded-xl sm:rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5]">
                  {card.metrics.map((metric, i) => (
                    <div key={i} className="space-y-0.5">
                      <div className="text-[10px] uppercase tracking-wider font-mono text-[#78716C]">
                        {metric.label}
                      </div>
                      <div className="text-xs font-bold text-[#1C1917] leading-tight">
                        {metric.value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Highlights List */}
                <div className="space-y-2">
                  {card.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#3E3832]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9A6F20] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-3 border-t border-[#E8E2D5] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-[10.5px] sm:text-[11px] font-mono text-[#78716C] order-2 sm:order-1 text-center sm:text-left">
                    Ref: BBRE-{card.id.toUpperCase().slice(0, 8)}
                  </span>
                  <button
                    onClick={onOpenEnquiry}
                    className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl btn-yellow-gradient font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer shadow-xs"
                  >
                    <span>Request Details</span>
                    <IconMinimalArrow size={12} color="stone" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Clean Placeholder Card as required by instructions */}
          <div className="rounded-2xl sm:rounded-3xl bg-[#FAF8F5] border border-dashed border-[#D5CEBF] p-6 sm:p-8 flex flex-col justify-between items-center text-center space-y-5">
            <div className="space-y-2 my-auto">
              <div className="w-12 h-12 rounded-2xl bg-white border border-[#E8E2D5] flex items-center justify-center mx-auto text-[#9A6F20]">
                <Clock className="w-6 h-6 text-[#C59B27]" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-[#9A6F20] block font-semibold">
                Upcoming Plotting Location
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1C1917]">
                South Bihar Growth Corridor
              </h3>
              <p className="text-xs sm:text-sm text-[#78716C] max-w-sm mx-auto leading-relaxed">
                Project details will be added here once survey, demarcation, and title due diligence are completed.
              </p>
              <div className="font-hindi text-xs text-[#9A6F20]">
                विधिक एवं राजस्व अभिलेखों के सत्यापन के पश्चात विवरण यहाँ प्रकाशित किया जाएगा।
              </div>
            </div>

            <div className="w-full pt-4 border-t border-[#E8E2D5]/70 flex items-center justify-between">
              <span className="text-[11px] font-mono text-[#78716C]">
                Status: Under Due Diligence
              </span>
              <button
                onClick={onOpenEnquiry}
                className="px-4 py-2 rounded-lg bg-white hover:bg-stone-100 text-[#1C1917] border border-[#D5CEBF] text-xs font-semibold tracking-wider transition-all cursor-pointer shadow-2xs"
              >
                Register Early Interest
              </button>
            </div>
          </div>
        </div>

        {/* View All Button if provided */}
        {onViewAllDevelopments && (
          <div className="flex justify-center mt-8">
            <button
              onClick={onViewAllDevelopments}
              className="px-6 py-3 rounded-full border border-[#C59B27]/50 text-[#0F0E0D] hover:bg-[#1C1917] hover:text-[#E7C973] text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>View All Plotting Opportunities</span>
              <IconMinimalArrow size={12} color="gold" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
