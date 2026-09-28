import React, { useState } from 'react';
import { UPCOMING_PORTFOLIO_NOTICE } from '../../data/projects';
import {
  IconModernTowers,
  IconTitleSeal,
  IconMinimalArrow
} from '../common/ThemeIcons';
import { MapPin, ArrowRight, ShieldCheck, Sparkles, Layers, CheckCircle2 } from 'lucide-react';

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
  title: string;
  location: string;
  image: string;
  tag: string;
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
    <section id="projects-section" className="py-12 sm:py-20 md:py-28 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E7E2D8]" aria-label="Project Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-6">
          <div className="max-w-3xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs text-[#B45309] font-medium tracking-wide">
              <IconModernTowers size={15} color="amber" />
              <span>Developments &amp; Opportunities</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight">
              Property Showcase &amp; Feasibility Portfolio
            </h2>
            <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
              Explore our strategic asset classes across residential plots, commercial hubs, fertile agricultural land, and luxury gated estates in Aurangabad and Bihar.
            </p>
          </div>

          {/* Asset Class Filter Pills (Horizontally swipeable on mobile/tablet) */}
          <div className="w-full md:w-auto overflow-x-auto no-scrollbar flex items-center gap-1.5 sm:gap-2 bg-stone-100/80 p-1.5 rounded-2xl border border-[#E7E2D8] select-none">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'all'
                  ? 'bg-white text-[#881337] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setSelectedFilter('plots')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'plots'
                  ? 'bg-white text-[#881337] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Residential Plots
            </button>
            <button
              onClick={() => setSelectedFilter('commercial')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'commercial'
                  ? 'bg-white text-[#881337] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Commercial
            </button>
            <button
              onClick={() => setSelectedFilter('agricultural')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'agricultural'
                  ? 'bg-white text-[#881337] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Agricultural
            </button>
            <button
              onClick={() => setSelectedFilter('villas')}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedFilter === 'villas'
                  ? 'bg-white text-[#881337] shadow-sm font-bold'
                  : 'text-[#57534E] hover:text-[#1C1917]'
              }`}
            >
              Luxury Villas
            </button>
          </div>
        </div>

        {/* 4-Card Visual Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          {filteredCards.map((card) => (
            <div
              key={card.id}
              className="group rounded-3xl bg-white border border-[#E7E2D8] shadow-[0_15px_40px_rgba(28,25,23,0.06)] hover:shadow-[0_20px_50px_rgba(28,25,23,0.12)] transition-all duration-300 flex flex-col overflow-hidden"
            >
              {/* Card Image Container with Smooth Hover Zoom */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-stone-100">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Visual Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

                {/* Top Badge: Category & Feasibility Status */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-mono font-bold text-[#881337] border border-white/60 shadow-sm uppercase tracking-wider">
                    {card.tag}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-stone-900/80 backdrop-blur-md text-[11px] font-mono text-emerald-400 border border-emerald-500/30 font-medium">
                    {card.status}
                  </span>
                </div>

                {/* Bottom Overlay Title on Image */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <div className="flex items-center gap-1.5 text-xs text-amber-300/90 font-mono mb-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="truncate">{card.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-white drop-shadow-sm">
                    {card.title}
                  </h3>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed">
                  {card.overview}
                </p>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 p-3.5 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D8]">
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
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Action CTA */}
                <div className="pt-3 border-t border-[#E7E2D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <span className="text-[11px] font-mono text-[#78716C] order-2 sm:order-1 text-center sm:text-left">
                    Ref: BBRE-{card.id.toUpperCase().slice(0, 8)}
                  </span>
                  <button
                    onClick={onOpenEnquiry}
                    className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#881337] via-[#991B1B] to-[#B45309] text-white font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer shadow-sm hover:shadow-md"
                  >
                    <span>Request Dossier</span>
                    <IconMinimalArrow size={12} color="amber" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate Statutory Notice Container */}
        <div className="rounded-3xl p-6 sm:p-10 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] space-y-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-2xl bg-[#FEF3C7] border border-[#FDE68A] shrink-0">
                <IconTitleSeal size={22} color="amber" />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-[#B45309] font-mono font-bold">
                  <span>Regulatory Clearance Protocol</span>
                </div>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#1C1917]">
                  {UPCOMING_PORTFOLIO_NOTICE.headline}
                </h4>
                <p className="text-xs sm:text-sm text-[#57534E] leading-relaxed max-w-2xl">
                  {UPCOMING_PORTFOLIO_NOTICE.statement} We adhere strictly to RERA disclosure standards and statutory land survey certifications prior to booking formalization.
                </p>
              </div>
            </div>

            <button
              onClick={onOpenEnquiry}
              className="w-full md:w-auto shrink-0 px-6 py-3 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs tracking-wider uppercase transition-all duration-300 btn-gold-border hover:scale-[1.02] cursor-pointer inline-flex items-center justify-center gap-2"
            >
              <span>Register Buyer Interest</span>
              <IconMinimalArrow size={13} color="stone" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
