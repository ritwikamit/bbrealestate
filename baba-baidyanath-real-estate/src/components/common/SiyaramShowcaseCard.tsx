import React from 'react';
import { SIYARAM_DATA } from '../../data/company';
import { MapPin, ExternalLink, Store } from 'lucide-react';
import siyaramsLogo from '../../assets/siyarams-logo.webp';

interface SiyaramShowcaseCardProps {
  className?: string;
  variant?: 'full' | 'compact';
}

export const SiyaramShowcaseCard: React.FC<SiyaramShowcaseCardProps> = ({
  className = '',
  variant = 'full',
}) => {
  return (
    <div className={`rounded-2xl p-5 sm:p-7 bg-[#FAF8F5] border border-[#E5DEC9] shadow-sm space-y-4 ${className}`}>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#E5DEC9] pb-4">
        <div className="flex items-center gap-3">
          <div className="p-2.5 rounded-xl bg-amber-100/70 border border-amber-200/80 text-[#881337]">
            <Store className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] uppercase tracking-widest text-[#8B4513] font-mono font-bold block">
              Promoter's Flagship Commercial Establishment
            </span>
            <h4 className="font-serif text-lg font-bold text-[#171513]">
              {SIYARAM_DATA.name}
            </h4>
          </div>
        </div>

        {/* Official Siyaram's Brand Logo */}
        <div className="w-28 sm:w-32 h-11 px-3 py-1.5 rounded-xl bg-white border border-[#E5DEC9] shadow-xs flex items-center justify-center shrink-0 overflow-hidden">
          <img
            src={siyaramsLogo}
            alt="Siyaram's Official Brand Logo"
            className="max-h-full max-w-full w-auto h-auto object-contain object-center transition-transform duration-200 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      </div>

      <div className="space-y-2 text-xs sm:text-sm text-[#443C34] leading-relaxed">
        <p>
          The promoters of Baba Baidyanath Real Estate Private Limited also own and operate the premier <strong>Siyaram's</strong> showroom in Aurangabad (<em>Siyaram &amp; Siya Shop</em>). Established at the same building landmark near PNB Bank, Yodha Nagar, it reflects our multi-decade commercial standing and trusted regional reputation.
        </p>
        <div className="flex items-start gap-2 text-xs font-mono text-[#574E45] pt-1">
          <MapPin className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
          <span>
            {SIYARAM_DATA.landmark} &bull; <strong className="text-[#881337] font-semibold">Same physical map location as the Real Estate Office</strong>
          </span>
        </div>
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
        <a
          href={SIYARAM_DATA.justdialUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-2.5 rounded-xl bg-[#0076D7] hover:bg-[#0060B2] text-white text-xs font-bold transition-all shadow-sm cursor-pointer hover:shadow-md active:scale-98"
        >
          <span>View on Justdial</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>

        <a
          href={SIYARAM_DATA.googleMapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-3 sm:py-2.5 rounded-xl bg-stone-900/[0.06] hover:bg-stone-900/[0.1] text-[#171513] border border-stone-800/15 text-xs font-semibold transition-all cursor-pointer active:scale-98"
        >
          <MapPin className="w-3.5 h-3.5 text-[#881337]" />
          <span>Google Map Directions</span>
        </a>
      </div>
    </div>
  );
};
