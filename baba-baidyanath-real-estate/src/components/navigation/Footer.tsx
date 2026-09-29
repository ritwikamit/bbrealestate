import React from 'react';
import { TabType } from '../../types';
import { COMPANY_DATA, SIYARAM_DATA, VERIFIED_REGISTRIES } from '../../data/company';
import { ShieldCheck, MapPin, Building, ArrowUpRight } from 'lucide-react';
import { CompanyLogo } from '../common/CompanyLogo';

interface FooterProps {
  onSelectTab: (tab: TabType) => void;
  onOpenEnquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab, onOpenEnquiry }) => {
  const handleLink = (tab: TabType) => {
    onSelectTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-[#0F0E0D] text-stone-300 border-t border-[#FACC15]/25 shadow-[0_-12px_40px_rgba(0,0,0,0.6)]" aria-label="Corporate Footer">
      {/* Radiant Yellow Gradient Top Accent Line */}
      <div className="border-yellow-gradient-line w-full" />
      
      {/* Statutory Corporate Credentials Strip */}
      <div className="border-b border-white/10 bg-white/[0.02] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-stone-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#E7C973] shrink-0" />
            <span>Ministry of Corporate Affairs Registered &middot; CIN: <strong className="text-[#E7C973] font-bold">{COMPANY_DATA.cin}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#E7C973] shrink-0" />
              <span>Aurangabad, Bihar (824101)</span>
            </span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-300 font-semibold">RoC Patna Jurisdiction</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-24 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Corporate Profile & Official Logo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center -ml-1 mb-2">
              <CompanyLogo
                variant="full"
                size="xl"
                theme="dark"
                glow={true}
                className="items-start text-left"
              />
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md font-medium font-jakarta">
              Registered corporate enterprise based in Aurangabad, Bihar. Dedicated to institutional real-estate activities, transparent land acquisitions, and sustainable regional development under RoC Patna jurisdiction.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-2 shadow-inner">
              <div className="flex items-center gap-2 text-[#E7C973] font-mono font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E7C973]" />
                <span>CIN: {COMPANY_DATA.cin}</span>
              </div>
              <div className="text-[11px] text-stone-400 font-mono font-medium">
                Incorporated 7 Nov 2024 &bull; RoC Patna &bull; Authorised Capital: ₹1,00,000
              </div>
              <div className="text-[11px] text-stone-300 font-mono font-semibold">
                Office: Kunda House, Near PNB Bank, MG Road, Yodha Nagar, Aurangabad 824101
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E7C973] font-mono font-bold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-stone-300 font-jakarta">
              <li>
                <button 
                  onClick={() => handleLink('home')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Corporate Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('about')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  About the Company
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('plotting')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Plotting Opportunities
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('locations')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Locations &amp; Corridors
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('association')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Associated with Vastu Vihar
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('calculator')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Bihar Land Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('contact')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Governance */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E7C973] font-mono font-bold block">
              Governance
            </span>
            <ul className="space-y-2.5 text-xs text-stone-300 font-jakarta">
              <li>
                <button 
                  onClick={() => handleLink('privacy')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('terms')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('disclaimer')} 
                  className="hover:text-[#E7C973] transition-colors cursor-pointer text-left font-medium"
                >
                  Statutory Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://www.mca.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#E7C973] transition-colors inline-flex items-center gap-1 text-left font-medium"
                >
                  <span>MCA Verification</span>
                  <ArrowUpRight className="w-3 h-3 text-[#E7C973]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#E7C973] font-mono font-bold block">
              Registered Office
            </span>
            <div className="text-xs text-stone-300 space-y-2 font-medium font-jakarta">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E7C973] shrink-0 mt-0.5" />
                <span>
                  C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Building className="w-4 h-4 text-[#E7C973] shrink-0" />
                <span>Jurisdiction: RoC Patna, Bihar</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] space-y-1">
                <span className="font-bold text-[#E7C973] block">
                  Promoter Landmark:
                </span>
                <span className="block text-stone-300">
                  Siyaram &amp; Siya Shop (Near PNB Bank)
                </span>
                <a
                  href={SIYARAM_DATA.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#E7C973] hover:text-white font-medium"
                >
                  <span>Siyaram's on Justdial</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full rounded-xl py-3 px-4 text-xs uppercase tracking-[0.14em] text-[#0F0E0D] font-bold bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] hover:opacity-95 shadow-[0_0_20px_rgba(197,155,39,0.3)] flex items-center justify-center gap-2 cursor-pointer transition-all border border-[#E7C973]/40"
              >
                <span>Enquire Now</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#0F0E0D]" />
              </button>
            </div>
          </div>
        </div>

        {/* Verified Public Corporate Registries Bar in Footer */}
        <div className="py-6 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-mono tracking-widest text-[#E7C973] font-bold block">
              Independent Third-Party Verification Registries
            </span>
            <span className="text-xs text-stone-400 font-jakarta">
              Publicly auditable corporate intelligence listings &amp; registration records
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
            {VERIFIED_REGISTRIES.map((reg) => (
              <a
                key={reg.id}
                href={reg.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-stone-200 border border-white/15 hover:border-[#C59B27]/50 text-[11px] font-semibold font-mono flex items-center gap-1.5 transition-all shadow-xs hover:shadow-sm"
              >
                <span>{reg.name}</span>
                <ArrowUpRight className="w-3 h-3 text-[#E7C973]" />
              </a>
            ))}
          </div>
        </div>

        {/* Centered Statutory Copyright & Linear ACCustom Labs Attribution */}
        <div className="pt-8 flex flex-col items-center justify-center text-center space-y-2.5">
          <div className="text-xs sm:text-sm text-stone-300 font-normal">
            &copy; 2026 Baba Baidyanath Real Estate Private Limited. All rights reserved.
          </div>
          
          <div className="inline-flex items-center justify-center gap-2 text-xs sm:text-[13px] text-stone-400 font-normal">
            <span>Designed and Developed by</span>
            <img
              src="/accustomlabs-transparent.png"
              alt="ACCustom Labs"
              className="h-[18px] sm:h-[19px] w-auto object-contain inline-block relative top-[1.5px] sm:top-[2px]"
              loading="lazy"
            />
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] text-stone-500 pt-2 font-hindi">
            <span>॥ सत्यमेव जयते ॥</span>
            <span>&bull;</span>
            <span>विश्वास, प्रामाणिकता और आपकी अपनी ज़मीन</span>
            <span>&bull;</span>
            <span>औरंगाबाद, बिहार (८२४१०१)</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
