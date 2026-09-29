import React from 'react';
import { COMPANY_DATA, SIYARAM_DATA } from '../../data/company';
import { Navigation, Clock, ArrowUpRight, MapPin, Building2, ExternalLink } from 'lucide-react';
import siyaramsLogo from '../../assets/siyarams-logo.webp';

export const LocationSection: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 md:py-28 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E7E2D8]" aria-label="Corporate Location and Map">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3 sm:space-y-4">
          <div className="text-xs uppercase tracking-[0.25em] text-[#B45309] font-mono font-medium">
            Registered Seat &bull; Operational Headquarters
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight">
            Corporate Office &bull; Aurangabad, Bihar
          </h2>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            Centrally situated on MG Road, Yodha Nagar in Aurangabad along the historic Grand Trunk Road economic corridor.
          </p>
        </div>

        {/* 2-Column Location & Interactive Map Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Column 1: Detailed Address & Credentials Card */}
          <div className="lg:col-span-5 rounded-3xl p-6 sm:p-9 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              
              <div className="flex items-center justify-between border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-bold flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#D97706]" />
                  <span>Corporate Office Address</span>
                </span>
                <span className="text-xs text-[#78716C] font-mono font-semibold">
                  PIN 824101
                </span>
              </div>

              {/* Main Address */}
              <div className="space-y-2">
                <span className="text-xs uppercase tracking-wider text-[#78716C] block font-mono">
                  Official Office Domicile
                </span>
                <p className="font-serif text-xl sm:text-2xl text-[#1C1917] font-bold leading-relaxed">
                  {COMPANY_DATA.officeAddress || COMPANY_DATA.registeredAddress}
                </p>
              </div>

              {/* Specific Locality Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D8]">
                  <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono mb-1">
                    Key Landmark
                  </span>
                  <span className="text-sm font-bold text-[#1C1917] block">
                    Near PNB Bank
                  </span>
                  <span className="text-xs text-[#78716C] mt-0.5 block">
                    MG Road &bull; Yodha Nagar
                  </span>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D8]">
                  <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono mb-1">
                    Geo Coordinates
                  </span>
                  <span className="font-mono text-sm font-bold text-[#B45309] block">
                    24°45'03.2"N 84°22'10.8"E
                  </span>
                  <span className="text-xs text-[#78716C] mt-0.5 block">
                    24.750898, 84.369678
                  </span>
                </div>
              </div>

              {/* Statutory Registered Address Note */}
              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E7E2D8] text-xs text-[#57534E] space-y-1">
                <span className="font-mono text-[10px] text-[#78716C] uppercase tracking-wider block font-bold">
                  MCA Registered Office
                </span>
                <p className="text-xs text-[#44403C]">
                  {COMPANY_DATA.registeredAddress}
                </p>
              </div>

              {/* Promoter's Siyaram's Landmark Card */}
              <div className="p-4 sm:p-5 rounded-2xl bg-[#FAF8F5] border border-[#E5DEC9] space-y-2.5">
                <div className="flex items-center justify-between gap-3 border-b border-[#E5DEC9] pb-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#9A6F20] font-bold flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-[#9A6F20]" />
                    <span>Promoter's Commercial Landmark</span>
                  </div>
                  <img
                    src={siyaramsLogo}
                    alt="Siyaram's"
                    className="h-5 w-auto object-contain"
                    loading="lazy"
                  />
                </div>
                <div className="text-xs text-[#443C34] leading-relaxed">
                  <strong>Siyaram &amp; Siya Shop</strong> (Near PNB Bank, Yodha Nagar) — identical physical map location as the real estate corporate office.
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href={SIYARAM_DATA.justdialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] font-semibold text-[#0076D7] hover:underline inline-flex items-center gap-1"
                  >
                    <span>View Siyaram's on Justdial</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

            </div>

            {/* Direct Google Maps Action */}
            <div className="pt-4 border-t border-[#E7E2D8] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-[#78716C]">
                <Clock className="w-3.5 h-3.5 text-[#D97706]" />
                <span>Working: Mon–Sat (10AM–6PM)</span>
              </div>

              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full px-6 py-3 text-xs uppercase tracking-[0.16em] bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] inline-flex items-center justify-center gap-2 cursor-pointer font-bold shadow-[0_4px_16px_rgba(245,158,11,0.25)] hover:scale-[1.02] transition-all"
              >
                <Navigation className="w-3.5 h-3.5 text-[#0C0A09]" />
                <span>Open in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#0C0A09]" />
              </a>
            </div>
          </div>

          {/* Column 2: Interactive Embedded Google Map */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] flex flex-col min-h-[420px] lg:min-h-[520px]">
            
            {/* Map Top Bar */}
            <div className="px-6 py-3.5 bg-[#FAF8F5] border-b border-[#E7E2D8] flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#1C1917]">
                <MapPin className="w-4 h-4 text-[#D97706]" />
                <span>Live Google Maps Navigation</span>
              </div>
              <span className="text-xs font-mono text-emerald-700 font-medium flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Verified Coordinates</span>
              </span>
            </div>

            {/* Embedded Google Map Iframe */}
            <div className="flex-1 w-full relative min-h-[360px] bg-[#E5E3DF]">
              <iframe
                title="Baba Baidyanath Real Estate Office Location"
                src={COMPANY_DATA.mapEmbedUrl}
                className="w-full h-full min-h-[380px] lg:min-h-[460px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Map Bottom Bar */}
            <div className="px-6 py-3 bg-[#FAF8F5] border-t border-[#E7E2D8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#78716C]">
              <span>Kunda House, Near PNB Bank, MG Road, Yodha Nagar, Aurangabad</span>
              <a
                href={COMPANY_DATA.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-xs text-[#B45309] font-bold hover:underline inline-flex items-center gap-1"
              >
                <span>Direct Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
