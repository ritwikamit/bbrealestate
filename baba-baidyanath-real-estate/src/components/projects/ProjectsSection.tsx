import React, { useState } from 'react';
import { UPCOMING_PORTFOLIO_NOTICE } from '../../data/projects';
import {
  IconModernTowers,
  IconTitleSeal,
  IconMinimalArrow
} from '../common/ThemeIcons';
import { MapPin, CheckCircle2 } from 'lucide-react';

import commercialComplexImg from '../../assets/commercial-complex.jpg';
import residentialPlotsImg from '../../assets/residential-plots.jpg';
import agriculturalLandImg from '../../assets/agricultural-land.jpg';
import luxuryVillasImg from '../../assets/luxury-villas.jpg';

interface ProjectsSectionProps {
  onOpenEnquiry: () => void;
}

interface PortfolioCard {
  id: string;
  category: string;
  tag: string;
  tagHindi: string;
  title: string;
  location: string;
  image: string;
  status: string;
  overview: string;
  metrics: { label: string; value: string }[];
  highlights: string[];
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onOpenEnquiry }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'plots' | 'commercial' | 'agricultural' | 'villas'>('all');

  const portfolioCards: PortfolioCard[] = [
    {
      id: 'residential-plots',
      category: 'plots',
      tag: 'Planned Plotted Development',
      tagHindi: 'आवासीय भूखंड योजना',
      title: 'Aurangabad Urban Plotted Township',
      location: 'Aurangabad Urban Extension & Ring Road Corridors',
      image: residentialPlotsImg,
      status: 'Feasibility & Demarcation Stage',
      overview: 'Master-planned residential enclave with clearly demarcated plots, paved tree-lined avenues, curbstones, modern street infrastructure, and dedicated community spaces.',
      metrics: [
        { label: 'Plot Configurations', value: '1,200 – 3,600 Sq. Ft. (1 to 3 Katha)' },
        { label: 'Avenue Width', value: '30 to 40 Ft. Paved Access' },
        { label: 'Title Due Diligence', value: '100% Mutation & Khatiyan Clear' }
      ],
      highlights: [
        'Boundary-demarcated individual plots with registered corner markers',
        'Direct link to arterial district corridors and NH-19',
        'Vastu-compliant rectangular layout orientation'
      ]
    },
    {
      id: 'commercial-complex',
      category: 'commercial',
      tag: 'Commercial & Institutional Hub',
      tagHindi: 'व्यावसायिक एवं कॉर्पोरेट संकुल',
      title: 'Grand Trunk Commercial Center',
      location: 'Grand Trunk Road / NH-19 Arterial Frontage, Aurangabad',
      image: commercialComplexImg,
      status: 'Master Layout Feasibility',
      overview: 'High-visibility commercial and logistics complex designed for corporate offices, regional retail plazas, banking institutions, and warehousing hubs.',
      metrics: [
        { label: 'Frontage Acreage', value: 'Wide High-Speed Corridor Access' },
        { label: 'Typology', value: 'Retail Plaza & Corporate Office Floors' },
        { label: 'Access Approval', value: 'NHAI Egress & Regional Compliance' }
      ],
      highlights: [
        'Strategic placement on high-density freight and transit route',
        'Dedicated multi-bay parking and wide internal service drives',
        'Grade-A institutional construction standards'
      ]
    },
    {
      id: 'agricultural-land',
      category: 'agricultural',
      tag: 'Fertile Agricultural Farmland',
      tagHindi: 'सोन कछार कृषि प्रक्षेत्र',
      title: 'Son Basin Agricultural & Farm Estates',
      location: 'Son River Agro Corridor & Canal Belt, Aurangabad District',
      image: agriculturalLandImg,
      status: 'Title Pedigree & Lineage Verified',
      overview: 'Vast fertile agricultural holdings and scenic farm estate parcels with perennial canal irrigation, ideal for high-yield farming, agro-forestry, and long-term land banking.',
      metrics: [
        { label: 'Holding Size', value: 'Multi-Bigha Continuous Acreage' },
        { label: 'Water Source', value: 'Perennial Canal & Ground Water' },
        { label: 'Soil Quality', value: 'Rich Alluvial Agricultural Soil' }
      ],
      highlights: [
        'Complete Khatiyan lineage and unencumbered ancestral verification',
        'All-weather arterial dirt and paved farm road access',
        'Free from any joint-tenancy or inheritance title disputes'
      ]
    },
    {
      id: 'luxury-villas',
      category: 'villas',
      tag: 'Luxury Gated Enclave',
      tagHindi: 'प्रीमियम विला एन्क्लेव',
      title: 'The Palms Executive Villa Enclave',
      location: 'Prime Suburban Residential Zone, Aurangabad',
      image: luxuryVillasImg,
      status: 'Architectural Concept Structuring',
      overview: 'Exclusive low-density gated community comprising contemporary villa estates, lush tropical landscaping, private driveways, and security infrastructure.',
      metrics: [
        { label: 'Development Style', value: 'Independent Luxury Residences' },
        { label: 'Community Infrastructure', value: 'Gated 24/7 Security & Utilities' },
        { label: 'Design Theme', value: 'Modern Tropical Contemporary' }
      ],
      highlights: [
        'Underground utility ducts for electricity and high-speed data',
        'Private manicured lawns and generous setbacks',
        'Institutional quality property management protocol'
      ]
    }
  ];

  const filteredCards = selectedFilter === 'all'
    ? portfolioCards
    : portfolioCards.filter(c => c.category === selectedFilter);

  return (
    <section id="projects-section" className="py-12 sm:py-20 md:py-24 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E8E2D5]" aria-label="Project Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with authentic Hindi badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="flex items-center gap-2 text-[#9A6F20] tracking-wide">
              <span className="font-hindi text-sm sm:text-base text-[#9A6F20] font-semibold">
                ॥ आगामी प्रमुख विकास परियोजनाएं ॥
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1917] font-bold tracking-tight">
              Strategic Land &amp; Plotted Developments
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
              स्पष्ट खतियान, निर्विवाद स्वामित्व एवं पारदर्शी विधिक प्रक्रिया के साथ आवासीय, व्यावसायिक एवं कृषि भूखंड।
            </p>
          </div>

          {/* Asset Class Filter Pills */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar flex items-center gap-1.5 sm:gap-2 bg-white/90 p-1.5 rounded-2xl border border-[#E8E2D5] select-none shadow-xs">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-[#1C1917] text-[#E7C973] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              All Assets / समस्त
            </button>
            <button
              onClick={() => setSelectedFilter('plots')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'plots'
                  ? 'bg-[#1C1917] text-[#E7C973] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Plots / भूखंड
            </button>
            <button
              onClick={() => setSelectedFilter('commercial')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'commercial'
                  ? 'bg-[#1C1917] text-[#E7C973] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Commercial / व्यावसायिक
            </button>
            <button
              onClick={() => setSelectedFilter('agricultural')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'agricultural'
                  ? 'bg-[#1C1917] text-[#E7C973] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Farmland / कृषि भूमि
            </button>
            <button
              onClick={() => setSelectedFilter('villas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'villas'
                  ? 'bg-[#1C1917] text-[#E7C973] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Villas / विला
            </button>
          </div>
        </div>

        {/* 4-Card Visual Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-3xl bg-white border border-[#E8E2D5] shadow-[0_15px_40px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_50px_rgba(28,25,23,0.1)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Image Container */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Visual Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge: Category & Feasibility Status */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-[#FAF8F5]/95 backdrop-blur-md text-[11px] font-mono font-bold text-[#9A6F20] border border-[#C59B27]/30 shadow-xs uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30 font-medium">
                    {card.status}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-[#E7C973] font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5 text-[#E7C973]" />
                    <span className="truncate">{card.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                    {card.title}
                  </h3>
                  <div className="font-hindi text-xs text-stone-200 mt-0.5">
                    {card.tagHindi}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {card.overview}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5]">
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
                  <span className="text-[11px] font-mono text-[#78716C] order-2 sm:order-1 text-center sm:text-left">
                    Ref: BBRE-{card.id.toUpperCase().slice(0, 8)}
                  </span>
                  <button
                    onClick={onOpenEnquiry}
                    className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer shadow-xs hover:shadow-sm"
                  >
                    <span>Request Dossier</span>
                    <IconMinimalArrow size={12} color="stone" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Statutory Notice Container */}
        <div className="rounded-2xl p-6 bg-white border border-[#E8E2D5] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <IconTitleSeal size={20} color="gold" className="shrink-0 mt-1" />
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#1C1917] font-mono">
                {UPCOMING_PORTFOLIO_NOTICE.title}
              </h4>
              <p className="text-xs text-[#57534E] mt-0.5 max-w-3xl leading-relaxed">
                {UPCOMING_PORTFOLIO_NOTICE.body}
              </p>
            </div>
          </div>
          <button
            onClick={onOpenEnquiry}
            className="shrink-0 px-4 py-2 rounded-lg bg-[#FAF8F5] hover:bg-[#F5EFE6] border border-[#E8E2D5] text-xs font-semibold text-[#1C1917] hover:text-[#9A6F20] transition-colors cursor-pointer"
          >
            Express Early Interest
          </button>
        </div>

      </div>
    </section>
  );
};
