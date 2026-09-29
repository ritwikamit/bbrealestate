import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { EnquiryForm } from '../enquiry/EnquiryForm';
import { MapPin, Navigation, Clock, ShieldCheck, Building, ExternalLink, ArrowUpRight } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';
import { SiyaramShowcaseCard } from '../common/SiyaramShowcaseCard';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 relative z-10 bg-transparent text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="mb-4">
            <CompanyLogo variant="horizontal" size="lg" theme="light" />
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-[#9A6F20] font-mono font-semibold">
            Direct Institutional Desk &bull; Aurangabad Headquarters
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917] tracking-tight">
            Connect With Our Corporate Office
          </h1>
          <div className="font-hindi text-base sm:text-lg text-[#9A6F20] font-medium">
            ॥ संपर्क एवं स्थल निरीक्षण कार्यालय — औरंगाबाद, बिहार ॥
          </div>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            We welcome direct inquiries from property seekers, institutional partners, and landowners in Aurangabad, Rohtas, Gaya, and adjacent corridors.
          </p>
        </div>

        {/* 2-Column Contact Layout in Light Luxury Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Corporate Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 sm:p-9 rounded-3xl bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] space-y-6">
              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-medium block mb-1">
                  Corporate Registration
                </span>
                <span className="font-serif text-2xl text-[#1C1917] font-bold">
                  Baba Baidyanath Real Estate Pvt. Ltd.
                </span>
              </div>

              <div className="space-y-4 text-[#44403C]">
                
                {/* Primary Office Address */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono font-bold">
                      Corporate Office Address
                    </span>
                    <span className="text-sm font-semibold text-[#1C1917] leading-relaxed block mt-0.5">
                      {COMPANY_DATA.officeAddress || COMPANY_DATA.registeredAddress}
                    </span>
                    <span className="text-xs text-[#B45309] font-mono mt-1 block font-medium">
                      Landmark: Near PNB Bank, MG Road, Yodha Nagar
                    </span>
                  </div>
                </div>

                {/* CIN */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] shrink-0 mt-0.5">
                    <Building className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono font-bold">
                      Corporate Identity Number (CIN)
                    </span>
                    <span className="font-mono text-sm font-bold text-[#B45309] block mt-0.5">
                      {COMPANY_DATA.cin}
                    </span>
                  </div>
                </div>

                {/* Office Working Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono font-bold">
                      Office Working Hours
                    </span>
                    <span className="text-sm font-medium text-[#1C1917] block mt-0.5">
                      10:00 AM – 6:00 PM (Monday to Saturday)
                    </span>
                    <span className="text-xs text-[#78716C] font-light">
                      Closed on Sundays &amp; Gazetted Holidays
                    </span>
                  </div>
                </div>

              </div>

              {/* Action Link to Google Maps */}
              <div className="pt-4 border-t border-[#E7E2D8]">
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#B45309] via-[#F59E0B] to-[#D97706] text-[#0C0A09] font-bold text-xs uppercase tracking-[0.16em] transition-all duration-200 cursor-pointer shadow-[0_4px_16px_rgba(245,158,11,0.25)] hover:scale-[1.02]"
                >
                  <Navigation className="w-4 h-4 text-[#0C0A09]" />
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-4 h-4 text-[#0C0A09]" />
                </a>
              </div>
            </div>

            {/* Promoter's Flagship Siyaram Landmark Card */}
            <SiyaramShowcaseCard />

            {/* Privacy note card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-sm flex items-start gap-3 text-xs text-[#57534E] leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
              <span>
                To maintain statutory integrity and client confidentiality, personal consultations with company directors are scheduled by prior confirmed appointment.
              </span>
            </div>

          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl p-7 sm:p-9 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] text-[#1C1917]">
              <EnquiryForm 
                title="Send a Direct Message"
                subtitle="Fill out the requirements schedule below for residential plots, commercial space, or landowner joint developments."
              />
            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* INTERACTIVE EMBEDDED GOOGLE MAP SECTION */}
        {/* ========================================================================= */}
        <div className="rounded-3xl overflow-hidden bg-white border border-[#E7E2D8] shadow-[0_15px_40px_rgba(28,25,23,0.06)]">
          
          <div className="px-6 py-4 bg-[#FAF8F5] border-b border-[#E7E2D8] flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <MapPin className="w-5 h-5 text-[#D97706]" />
              <span className="font-serif text-lg font-bold text-[#1C1917]">
                Office Location Map &bull; Yodha Nagar, MG Road
              </span>
            </div>
            <span className="font-mono text-xs text-[#78716C]">
              Coordinates: 24.750898, 84.369678
            </span>
          </div>

          <div className="w-full relative h-[420px] sm:h-[480px] bg-[#E5E3DF]">
            <iframe
              title="Baba Baidyanath Real Estate Office Map"
              src={COMPANY_DATA.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          <div className="px-6 py-3.5 bg-[#FAF8F5] border-t border-[#E7E2D8] flex flex-wrap items-center justify-between gap-3 text-xs text-[#57534E]">
            <span className="font-medium">
              Kunda House, Near PNB Bank, MG Road, Yodha Nagar, Aurangabad-Bihar-824101
            </span>
            <a
              href={COMPANY_DATA.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-[#B45309] font-bold hover:underline inline-flex items-center gap-1"
            >
              <span>Get Turn-by-Turn Directions</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
