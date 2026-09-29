import React, { useState } from 'react';
import { UPCOMING_PORTFOLIO_NOTICE } from '../../data/projects';
import {
  IconModernTowers,
  IconTitleSeal,
  IconMinimalArrow
} from '../common/ThemeIcons';
import { MapPin, CheckCircle2 } from 'lucide-react';

import commercialComplexImg from '../../assets/commercial-complex.jpg';
import commercialPlazaTwoImg from '../../assets/commercial-plaza-two.jpg';
import residentialPlotsImg from '../../assets/residential-plots.jpg';
import plotsEnclaveTwoImg from '../../assets/plots-enclave-two.jpg';
import agriculturalLandImg from '../../assets/agricultural-land.jpg';
import farmlandEstateTwoImg from '../../assets/farmland-estate-two.jpg';
import luxuryVillasImg from '../../assets/luxury-villas.jpg';
import villasEstateTwoImg from '../../assets/villas-estate-two.jpg';

interface ProjectsSectionProps {
  onOpenEnquiry: () => void;
  showFilterMenu?: boolean;
  onViewAllDevelopments?: () => void;
  initialCategory?: 'all' | 'plots' | 'commercial' | 'farmlands' | 'villas';
  selectedCategory?: 'all' | 'plots' | 'commercial' | 'farmlands' | 'villas';
  onCategoryChange?: (category: 'all' | 'plots' | 'commercial' | 'farmlands' | 'villas') => void;
}

interface PortfolioCard {
  id: string;
  category: 'plots' | 'commercial' | 'farmlands' | 'villas';
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

export interface SectionConfig {
  key: 'plots' | 'commercial' | 'farmlands' | 'villas';
  menuLabel: string;
  menuHindi: string;
  sectionTitle: string;
  sectionHindi: string;
  description: string;
}

export const SECTIONS_CONFIG: SectionConfig[] = [
  {
    key: 'plots',
    menuLabel: 'Plots',
    menuHindi: 'भूखंड',
    sectionTitle: 'Residential Plotted Townships & Layouts',
    sectionHindi: '॥ आवासीय भूखंड एवं नियोजित टाउनशिप ॥',
    description: 'Master-planned residential plotted enclaves with 30–40 ft arterial roads, clear individual Dakhil-Kharij mutation records, boundary demarcation, and complete registry readiness in Aurangabad growth zones.'
  },
  {
    key: 'commercial',
    menuLabel: 'Commercial',
    menuHindi: 'व्यावसायिक',
    sectionTitle: 'Commercial Hubs & Highway Plazas',
    sectionHindi: '॥ व्यावसायिक संकुल एवं व्यापार केंद्र ॥',
    description: 'High-visibility arterial frontage land parcels, multi-level retail hubs, and enterprise logistics corridors across NH-19 and GT Road economic bypasses.'
  },
  {
    key: 'farmlands',
    menuLabel: 'Farmlands',
    menuHindi: 'फार्मलैंड्स',
    sectionTitle: 'Agro Farmlands & Eco Orchards',
    sectionHindi: '॥ फार्मलैंड, बागवानी एवं कृषि फार्म ॥',
    description: 'Canal-irrigated, fertile agricultural land parcels and managed orchard estates with clear genealogical Khatiyan records and unencumbered titles.'
  },
  {
    key: 'villas',
    menuLabel: 'Villas',
    menuHindi: 'विला',
    sectionTitle: 'Bespoke Country Villas & Estates',
    sectionHindi: '॥ आरण्या विला एवं कंट्री होम्स ॥',
    description: 'Sandstone masonry, timber pergolas, private cobblestone driveways, and expansive private gardens nestled in Aurangabad\'s serene green belts.'
  }
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenEnquiry,
  showFilterMenu = true,
  onViewAllDevelopments,
  initialCategory = 'all',
  selectedCategory,
  onCategoryChange
}) => {
  const [internalFilter, setInternalFilter] = useState<'all' | 'plots' | 'commercial' | 'farmlands' | 'villas'>(initialCategory);

  const activeFilter = selectedCategory !== undefined ? selectedCategory : internalFilter;

  const handleFilterChange = (cat: 'all' | 'plots' | 'commercial' | 'farmlands' | 'villas') => {
    setInternalFilter(cat);
    if (onCategoryChange) {
      onCategoryChange(cat);
    }
  };

  React.useEffect(() => {
    if (initialCategory && selectedCategory === undefined) {
      setInternalFilter(initialCategory);
    }
  }, [initialCategory, selectedCategory]);

  const portfolioCards: PortfolioCard[] = [
    // 1. PLOTS (2 Projects)
    {
      id: 'residential-plots-1',
      category: 'plots',
      tag: 'Master-Planned Plotted Layout',
      tagHindi: 'आवासीय भूखंड योजना',
      title: 'Aurangabad Urban Plotted Township',
      location: 'Aurangabad Urban Extension & Ring Road Corridors',
      image: residentialPlotsImg,
      status: 'Demarcated & Registered Layout',
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
      id: 'residential-plots-2',
      category: 'plots',
      tag: 'Gated Residential Plotted Colony',
      tagHindi: 'वसंत विहार आवासीय लेआउट',
      title: 'Vasant Vihar Plotted Enclave',
      location: 'Near GT Road NH-19 & Gayatri Mandir Sector, Aurangabad',
      image: plotsEnclaveTwoImg,
      status: 'Paved Access & Registry Ready',
      overview: 'Demarcated residential sectors featuring blacktop asphalt avenues, underground power ducting, street light installations, and clear individual Dakhil-Kharij verification.',
      metrics: [
        { label: 'Plot Sizing', value: '1 Katha, 2 Katha & 3 Katha Units' },
        { label: 'Main Boulevard', value: '45 Ft. Tree-Lined Road' },
        { label: 'Registry Status', value: 'Spot Mutation Assistance' }
      ],
      highlights: [
        'Stone boundary walls with white corner marker pillars',
        'Walking distance to commercial amenities and institutions',
        'Immediate possession and construction clearance'
      ]
    },

    // 2. COMMERCIAL (2 Projects)
    {
      id: 'commercial-1',
      category: 'commercial',
      tag: 'Commercial & Institutional Hub',
      tagHindi: 'व्यावसायिक एवं कॉर्पोरेट संकुल',
      title: 'Grand Trunk Commercial Center',
      location: 'Grand Trunk Road / NH-19 Arterial Frontage, Aurangabad',
      image: commercialComplexImg,
      status: 'Frontage Egress Approved',
      overview: 'High-visibility commercial complex planned for regional retail outlets, corporate offices, banking institutions, and warehousing hubs along the high-speed highway corridor.',
      metrics: [
        { label: 'Frontage Acreage', value: 'Wide High-Speed Corridor Access' },
        { label: 'Typology', value: 'Retail Plaza & Corporate Office Floors' },
        { label: 'Access Approval', value: 'NHAI Egress & Regional Compliance' }
      ],
      highlights: [
        'Direct frontage on National Highway 19 (Grand Trunk Road)',
        'Dedicated multi-bay customer parking and dual service drives',
        'Engineered for institutional retail and corporate occupants'
      ]
    },
    {
      id: 'commercial-2',
      category: 'commercial',
      tag: 'Retail & Banking Plaza',
      tagHindi: 'अपटाउन व्यावसायिक एवं बैंकिंग प्लाजा',
      title: 'Uptown Arcade & Business Center',
      location: 'MG Road Commercial District, Aurangabad',
      image: commercialPlazaTwoImg,
      status: 'Civil Structure Complete',
      overview: 'Modern two-level commercial arcade featuring double-height retail showrooms, scheduled bank branches, wide pedestrian colonnades, and surface parking.',
      metrics: [
        { label: 'Unit Sizes', value: '450 – 2,800 Sq. Ft. Showrooms' },
        { label: 'Floor Plates', value: 'Column-Free Flexible Retail' },
        { label: 'Infrastructure', value: 'Power Backup & Fire Safety Compliant' }
      ],
      highlights: [
        'Prime location in Aurangabad commercial hub near PNB Bank',
        'Floor-to-ceiling glass facades with maximum signage visibility',
        'High daily pedestrian footfall and established civic catchment'
      ]
    },

    // 3. FARMLANDS (2 Projects)
    {
      id: 'farmlands-1',
      category: 'farmlands',
      tag: 'Fertile Agricultural Farmland',
      tagHindi: 'सोन कछार कृषि प्रक्षेत्र',
      title: 'Son Basin Agricultural & Farm Estates',
      location: 'Son River Agro Corridor & Canal Belt, Aurangabad District',
      image: agriculturalLandImg,
      status: 'Title Pedigree & Lineage Verified',
      overview: 'Fertile agricultural holdings and farm estate parcels with perennial canal irrigation, ideal for high-yield farming, horticulture, and long-term land banking.',
      metrics: [
        { label: 'Holding Size', value: 'Multi-Bigha Continuous Acreage' },
        { label: 'Water Source', value: 'Perennial Canal & Ground Water' },
        { label: 'Soil Quality', value: 'Rich Alluvial Agricultural Soil' }
      ],
      highlights: [
        'Complete Khatiyan lineage and unencumbered ancestral verification',
        'All-weather arterial farm road access',
        'Free from any joint-tenancy or inheritance title disputes'
      ]
    },
    {
      id: 'farmlands-2',
      category: 'farmlands',
      tag: 'Solar-Irrigated Agro Estates',
      tagHindi: 'मगध सोलर सिंचित कृषि फार्म',
      title: 'Magadh Managed Orchards & Agro Estates',
      location: 'Daudnagar & Son Valley Belt, Aurangabad District',
      image: farmlandEstateTwoImg,
      status: 'Fenced & Canal-Connected',
      overview: 'Managed agro-farm parcels featuring productive mango orchard rows, drip irrigation infrastructure, dedicated solar water pumps, and traditional stone boundary walls.',
      metrics: [
        { label: 'Holding Unit', value: '5 Bigha to 25 Bigha Parcels' },
        { label: 'Irrigation', value: 'Solar Pumping System & Drip Network' },
        { label: 'Produce', value: 'Langra & Malda Mango Orchard Agroforestry' }
      ],
      highlights: [
        'Perimeter stone wall fencing with iron entry gates',
        'Continuous deep alluvium soil with sweet underground water table',
        'Single-owner registered sale deed ready for immediate transfer'
      ]
    },

    // 4. VILLAS (2 Projects)
    {
      id: 'villas-1',
      category: 'villas',
      tag: 'Luxury Gated Enclave',
      tagHindi: 'प्रीमियम विला एन्क्लेव',
      title: 'The Palms Executive Villa Enclave',
      location: 'Prime Suburban Residential Zone, Aurangabad',
      image: luxuryVillasImg,
      status: 'Underground Infrastructure Laid',
      overview: 'Exclusive low-density gated community comprising contemporary villa estates, lush tree avenues, private driveways, and round-the-clock security infrastructure.',
      metrics: [
        { label: 'Development Style', value: 'Independent Luxury Residences' },
        { label: 'Community Infrastructure', value: 'Gated 24/7 Security & Utilities' },
        { label: 'Design Theme', value: 'Modern Tropical Contemporary' }
      ],
      highlights: [
        'Underground utility ducts for electricity and high-speed fiber',
        'Private manicured lawns and generous setbacks on all four sides',
        'Strict building bye-laws ensuring low density and privacy'
      ]
    },
    {
      id: 'villas-2',
      category: 'villas',
      tag: 'Bespoke Modern Villa Estates',
      tagHindi: 'आरण्या कंट्री एस्टेट विला',
      title: 'Aaronya Country Estate Villas',
      location: 'Heritage Green Belt, Aurangabad Outskirts',
      image: villasEstateTwoImg,
      status: 'Model Villa Ready for Preview',
      overview: 'Bespoke single-family residences crafted with natural sandstone masonry, timber louvers, private cobblestone driveways, and expansive private gardens.',
      metrics: [
        { label: 'Villa Built-up', value: '3,200 – 4,800 Sq. Ft. (4 & 5 BHK)' },
        { label: 'Plot Area', value: '4 Katha to 6 Katha per Estate' },
        { label: 'Architecture', value: 'Natural Stone & Teak Wood Facade' }
      ],
      highlights: [
        'Private cobbled driveways with automated vehicle gates',
        'Vastu-compliant east-facing entrances and central courtyards',
        'Private terrace gardens with panoramic views of the countryside'
      ]
    }
  ];

  const sectionsToDisplay = activeFilter === 'all'
    ? SECTIONS_CONFIG
    : SECTIONS_CONFIG.filter((s) => s.key === activeFilter);

  return (
    <section id="projects-section" className="py-12 sm:py-20 md:py-24 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E8E2D5]" aria-label="Project Portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Header with authentic Hindi invocation */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-10">
          <div className="flex items-center justify-center gap-2 text-[#9A6F20] tracking-wide">
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

        {/* Single Aesthetically Centered Navigation Menu (Optimized for Smartphone, Tablet & Desktop) */}
        {showFilterMenu ? (
          <div className="w-full flex justify-center mb-10 sm:mb-14 px-1 sm:px-4">
            <div className="w-full sm:w-auto max-w-full overflow-x-auto no-scrollbar scroll-smooth flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2.5 p-1.5 sm:p-2 rounded-2xl bg-white/95 border border-[#E8E2D5] shadow-[0_10px_30px_rgba(28,25,23,0.04)] overscroll-contain">
              <button
                onClick={() => handleFilterChange('all')}
                className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 ${
                  activeFilter === 'all'
                    ? 'bg-[#1C1917] text-[#FAF8F5] shadow-sm border border-[#C59B27]/40'
                    : 'text-[#44403C] hover:text-[#1C1917] hover:bg-stone-100/70'
                }`}
              >
                <span className="text-xs sm:text-sm font-semibold leading-none flex items-center">
                  All Sites
                </span>
                <span className="text-stone-300 font-light leading-none select-none text-xs sm:text-sm flex items-center">
                  |
                </span>
                <span className={`font-hindi text-xs sm:text-sm font-semibold leading-none flex items-center ${
                  activeFilter === 'all' ? 'text-[#E7C973]' : 'text-[#9A6F20]'
                }`}>
                  समस्त
                </span>
              </button>

              {SECTIONS_CONFIG.map((sec) => {
                const isActive = activeFilter === sec.key;
                return (
                  <button
                    key={sec.key}
                    onClick={() => handleFilterChange(sec.key)}
                    className={`px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 inline-flex items-center justify-center gap-1.5 sm:gap-2 ${
                      isActive
                        ? 'bg-[#1C1917] text-[#FAF8F5] shadow-sm border border-[#C59B27]/40'
                        : 'text-[#44403C] hover:text-[#1C1917] hover:bg-stone-100/70'
                    }`}
                  >
                    <span className="text-xs sm:text-sm font-semibold leading-none flex items-center">
                      {sec.menuLabel}
                    </span>
                    <span className="text-stone-300 font-light leading-none select-none text-xs sm:text-sm flex items-center">
                      |
                    </span>
                    <span className={`font-hindi text-xs sm:text-sm font-semibold leading-none flex items-center ${
                      isActive ? 'text-[#E7C973]' : 'text-[#9A6F20]'
                    }`}>
                      {sec.menuHindi}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : onViewAllDevelopments ? (
          <div className="flex justify-center mb-10">
            <button
              onClick={onViewAllDevelopments}
              className="px-6 py-3 rounded-full border border-[#C59B27]/50 text-[#0F0E0D] hover:bg-[#1C1917] hover:text-[#E7C973] text-xs font-semibold uppercase tracking-wider transition-all inline-flex items-center gap-2 cursor-pointer shadow-2xs"
            >
              <span>Explore All Developments</span>
              <IconMinimalArrow size={12} color="gold" />
            </button>
          </div>
        ) : null}

        {/* Rendered as Separate Sections */}
        <div className="space-y-12 sm:space-y-16 md:space-y-20 mb-12 sm:mb-14">
          {sectionsToDisplay.map((sec) => {
            const sectionCards = portfolioCards.filter((c) => c.category === sec.key);
            return (
              <div
                key={sec.key}
                id={`section-${sec.key}`}
                className="space-y-6 sm:space-y-8 pt-4 first:pt-0"
              >
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 border-b border-[#E8E2D5] pb-3 sm:pb-4">
                  <div className="space-y-1">
                    <span className="font-hindi text-xs sm:text-sm text-[#9A6F20] font-semibold block">
                      {sec.sectionHindi}
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-bold text-[#1C1917] leading-tight">
                      {sec.sectionTitle}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#57534E] max-w-2xl leading-relaxed">
                      {sec.description}
                    </p>
                  </div>

                  <span className="text-[11px] sm:text-xs font-mono text-[#9A6F20] font-semibold shrink-0 self-start sm:self-end bg-stone-100/80 px-2.5 py-1 rounded-md border border-[#E8E2D5]">
                    2 Verified Developments
                  </span>
                </div>

                {/* 2-Card Visual Showcase Grid for this Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                  {sectionCards.map((card) => (
                    <div
                      key={card.id}
                      className="group rounded-2xl sm:rounded-3xl bg-white border border-[#E8E2D5] shadow-[0_15px_40px_rgba(28,25,23,0.05)] hover:shadow-[0_20px_50px_rgba(28,25,23,0.1)] transition-all duration-300 flex flex-col overflow-hidden"
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
                          <span className="px-2 sm:px-2.5 py-1 rounded-md bg-stone-950/85 backdrop-blur-md text-[10px] sm:text-[11px] font-mono font-semibold text-[#E7C973] uppercase tracking-wider">
                            {card.tag}
                          </span>
                          <span className="px-2 sm:px-2.5 py-1 rounded-md bg-stone-950/85 backdrop-blur-md text-[10px] sm:text-[11px] font-mono text-emerald-400 font-medium">
                            {card.status}
                          </span>
                        </div>

                        {/* Bottom Overlay Title on Image */}
                        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 text-white">
                          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-[#E7C973] font-mono mb-1">
                            <MapPin className="w-3.5 h-3.5 text-[#E7C973] shrink-0" />
                            <span className="truncate">{card.location}</span>
                          </div>
                          <h4 className="font-serif text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-sm leading-snug">
                            {card.title}
                          </h4>
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
                            className="order-1 sm:order-2 w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] text-[#0F0E0D] font-bold text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] active:scale-98 cursor-pointer shadow-xs hover:shadow-sm"
                          >
                            <span>Request Dossier</span>
                            <IconMinimalArrow size={12} color="stone" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
