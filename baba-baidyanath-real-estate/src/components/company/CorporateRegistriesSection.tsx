import React from 'react';
import { VERIFIED_REGISTRIES, VerifiedRegistryItem } from '../../data/company';
import { ExternalLink, CheckCircle2, ShieldCheck, Globe, Database, Building2 } from 'lucide-react';
import {
  LogoZaubaCorp,
  LogoDNB,
  LogoTofler,
  LogoTracxn,
  LogoFalconeBiz,
  LogoJustdial
} from '../common/RegistryLogos';

interface CorporateRegistriesSectionProps {
  className?: string;
  showHeader?: boolean;
}

export const CorporateRegistriesSection: React.FC<CorporateRegistriesSectionProps> = ({
  className = '',
  showHeader = true
}) => {
  const getLogoComponent = (id: VerifiedRegistryItem['id']) => {
    switch (id) {
      case 'zaubacorp':
        return <LogoZaubaCorp size="md" />;
      case 'dnb':
        return <LogoDNB size="md" />;
      case 'tofler':
        return <LogoTofler size="md" />;
      case 'tracxn':
        return <LogoTracxn size="md" />;
      case 'falconebiz':
        return <LogoFalconeBiz size="md" />;
      case 'justdial':
        return <LogoJustdial size="md" />;
      default:
        return null;
    }
  };

  return (
    <section className={`w-full py-12 sm:py-16 md:py-20 relative z-10 ${className}`} aria-label="Corporate Registry Verifications">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {showHeader && (
          <div className="max-w-3xl mb-10 sm:mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-semibold text-emerald-800">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Independent Statutory Due Diligence &bull; Public Record</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#151311]">
              Verified on Leading Corporate Registries
            </h2>
            <p className="text-xs sm:text-base text-[#524E48] leading-relaxed">
              Baba Baidyanath Real Estate Private Limited is independently indexed across premier national and international business intelligence directories, company registries, and commercial credit databases.
            </p>
          </div>
        )}

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {VERIFIED_REGISTRIES.map((registry) => (
            <div
              key={registry.id}
              className="group rounded-2xl bg-white border border-[#E8E2D5] p-5 sm:p-6 shadow-sm hover:shadow-[0_15px_35px_rgba(40,25,10,0.08)] hover:border-[#D97706]/50 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Logo and Status Row */}
                <div className="flex items-center justify-between gap-3 pb-3 border-b border-[#E8E2D5]">
                  <div className="p-2 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-center shrink-0">
                    {getLogoComponent(registry.id)}
                  </div>
                  
                  <span className="text-[10px] font-mono bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full border border-emerald-200 font-bold flex items-center gap-1 shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span>{registry.status}</span>
                  </span>
                </div>

                {/* Registry Details */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#B45309]">
                      {registry.category}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#151311] group-hover:text-[#881337] transition-colors">
                    {registry.name}
                  </h3>
                  <p className="text-xs text-[#524E48] leading-relaxed">
                    {registry.description}
                  </p>
                </div>

                {/* Identifier Tag */}
                <div className="p-2.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] flex items-center justify-between text-[11px] font-mono text-[#524E48]">
                  <span className="text-[#78716C] uppercase text-[10px] font-semibold">{registry.identifierType}</span>
                  <span className="font-bold text-[#151311] truncate max-w-[180px] sm:max-w-[200px]" title={registry.identifierValue}>
                    {registry.identifierValue}
                  </span>
                </div>

              </div>

              {/* Direct Link Action */}
              <div className="pt-4 mt-4 border-t border-[#E8E2D5]">
                <a
                  href={registry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-stone-900/[0.04] hover:bg-[#881337] text-[#151311] hover:text-white border border-stone-800/15 hover:border-[#881337] text-xs font-semibold uppercase tracking-wider transition-all duration-200 cursor-pointer group-hover:shadow-sm active:scale-98"
                >
                  <span>Verify on {registry.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Footnote reassurance */}
        <div className="mt-8 p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#524E48]">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>All corporate records are publicly auditable and updated in sync with Ministry of Corporate Affairs (MCA) filings.</span>
          </div>
          <span className="font-mono text-[11px] font-semibold text-[#B45309] shrink-0">
            CIN: U68100BR2024PTC072121
          </span>
        </div>

      </div>
    </section>
  );
};
