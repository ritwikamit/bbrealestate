import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { EnquiryForm } from '../enquiry/EnquiryForm';
import { MapPin, Navigation, Clock, ShieldCheck, Building } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';

export const ContactPage: React.FC = () => {
  return (
    <div className="py-16 md:py-24 relative z-10 bg-transparent text-[#1C1917]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <div className="mb-4">
            <CompanyLogo variant="horizontal" size="lg" />
          </div>
          <div className="text-xs uppercase tracking-[0.25em] text-[#B45309] font-mono font-medium">
            Direct Institutional Desk &bull; Aurangabad Headquarters
          </div>
          <h1 className="font-serif text-4xl sm:text-6xl font-bold text-[#1C1917] tracking-tight">
            Connect With Our Corporate Office
          </h1>
          <p className="text-base sm:text-lg text-[#57534E] leading-relaxed font-normal">
            We welcome direct inquiries from property seekers, institutional partners, and landowners in Aurangabad, Rohtas, Gaya, and adjacent corridors.
          </p>
        </div>

        {/* 2-Column Contact Layout in Light Luxury Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Column 1: Corporate Details */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] space-y-6">
              <div className="border-b border-[#E7E2D8] pb-4">
                <span className="text-xs uppercase tracking-widest text-[#B45309] font-mono font-medium block mb-1">
                  Corporate Registration
                </span>
                <span className="font-serif text-2xl text-[#1C1917] font-bold">
                  Baba Baidyanath Real Estate Pvt. Ltd.
                </span>
              </div>

              <div className="space-y-4 text-[#44403C]">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono">
                      Registered Office
                    </span>
                    <span className="text-sm font-medium text-[#1C1917] leading-relaxed block mt-0.5">
                      {COMPANY_DATA.registeredAddress}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] shrink-0 mt-0.5">
                    <Building className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono">
                      Corporate Identity Number (CIN)
                    </span>
                    <span className="font-mono text-sm font-bold text-[#B45309] block mt-0.5">
                      {COMPANY_DATA.cin}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-[#FEF3C7] border border-[#FDE68A] text-[#D97706] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#D97706]" />
                  </div>
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-[#78716C] block font-mono">
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

              <div className="pt-4 border-t border-[#E7E2D8]">
                <a
                  href={COMPANY_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#FAF8F5] hover:bg-white text-[#1C1917] border border-[#E7E2D8] hover:border-[#F59E0B] text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer shadow-sm"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>Navigate with Google Maps</span>
                </a>
              </div>
            </div>

            {/* Privacy note card */}
            <div className="p-6 rounded-2xl bg-white border border-[#E7E2D8] shadow-sm flex items-start gap-3 text-xs text-[#57534E] leading-relaxed">
              <ShieldCheck className="w-5 h-5 text-[#D97706] shrink-0 mt-0.5" />
              <span>
                To maintain ethical standards and client privacy, all preliminary site reviews and title checks are handled strictly under non-disclosure protocols.
              </span>
            </div>

          </div>

          {/* Column 2: Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl p-7 sm:p-9 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)] text-[#1C1917]">
              <EnquiryForm 
                title="Send a Direct Message"
                subtitle="Fill out the requirements schedule below for residential plots, commercial space, or landowner joint developments."
              />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
