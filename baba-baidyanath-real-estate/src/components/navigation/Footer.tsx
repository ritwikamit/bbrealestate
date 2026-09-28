import React from 'react';
import { TabType } from '../../types';
import { COMPANY_DATA } from '../../data/company';
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
    <footer className="relative z-10 bg-gradient-to-b from-[#E5DAC8] to-[#DDD0BB] text-[#221B13] border-t border-[#D2C1A8] shadow-[0_-8px_30px_rgba(40,30,15,0.04)]" aria-label="Corporate Footer">
      {/* Statutory Corporate Credentials Strip */}
      <div className="border-b border-[#D2C1A8] bg-[#D9CBB6] py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#261E16]">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#881337] shrink-0" />
            <span>Ministry of Corporate Affairs Registered &middot; CIN: <strong className="text-[#881337] font-extrabold">{COMPANY_DATA.cin}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#881337] shrink-0" />
              <span>Aurangabad, Bihar (824101)</span>
            </span>
            <span className="text-[#8A744C]">|</span>
            <span className="text-[#33271C] font-semibold">RoC Patna Jurisdiction</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-28 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#B89B60]">
          
          {/* Col 1: Corporate Profile & Official Logo */}
          <div className="lg:col-span-5 space-y-6">
            {/* Official Master Logo (Pure Logo, No Rectangle) */}
            <div className="flex items-center -ml-1 mb-2">
              <CompanyLogo variant="full" size="xl" className="items-start text-left drop-shadow-[0_4px_12px_rgba(70,45,15,0.1)]" />
            </div>

            <p className="text-xs sm:text-sm text-[#382E23] leading-relaxed max-w-md font-medium">
              Registered corporate enterprise based in Aurangabad, Bihar. Dedicated to institutional real-estate activities, transparent land acquisitions, and sustainable regional development under RoC Patna jurisdiction.
            </p>

            <div className="p-4 rounded-xl bg-[#E8D6B4]/60 border border-[#B89B60] text-xs space-y-2 shadow-sm">
              <div className="flex items-center gap-2 text-[#881337] font-mono font-extrabold">
                <ShieldCheck className="w-3.5 h-3.5 text-[#881337]" />
                <span>CIN: {COMPANY_DATA.cin}</span>
              </div>
              <div className="text-[11px] text-[#3D3225] font-mono font-medium">
                Incorporated 7 Nov 2024 &bull; RoC Patna &bull; Authorised Capital: ₹1,00,000
              </div>
              <div className="text-[11px] text-[#241C14] font-mono font-semibold">
                Office: Kunda House, Near PNB Bank, MG Road, Yodha Nagar, Aurangabad 824101
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#881337] font-mono font-extrabold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#2A2218]">
              <li>
                <button 
                  onClick={() => handleLink('home')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Corporate Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('about')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  About the Company
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('services')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Capabilities &amp; Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('projects')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('calculator')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Land &amp; EMI Calculator
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    handleLink('home');
                    setTimeout(() => {
                      document.getElementById('client-voices-section')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Client Voices &amp; Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('contact')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Governance */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#881337] font-mono font-extrabold block">
              Governance
            </span>
            <ul className="space-y-2.5 text-xs text-[#2A2218]">
              <li>
                <button 
                  onClick={() => handleLink('privacy')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('terms')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('disclaimer')} 
                  className="hover:text-[#881337] transition-colors cursor-pointer text-left font-semibold"
                >
                  Statutory Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://www.mca.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#881337] transition-colors inline-flex items-center gap-1 text-left font-semibold"
                >
                  <span>MCA Verification</span>
                  <ArrowUpRight className="w-3 h-3 text-[#881337]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#881337] font-mono font-extrabold block">
              Registered Office
            </span>
            <div className="text-xs text-[#332A1F] space-y-2 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#881337] shrink-0 mt-0.5" />
                <span>
                  C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Building className="w-4 h-4 text-[#881337] shrink-0" />
                <span>Jurisdiction: RoC Patna, Bihar</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full rounded-xl py-3 px-4 text-xs uppercase tracking-[0.16em] text-white font-bold bg-gradient-to-r from-[#881337] via-[#991B1B] to-[#B45309] hover:opacity-95 shadow-md hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all border border-amber-300/30"
              >
                <span>Submit Requirement</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#524434]">
          <div>
            &copy; {new Date().getFullYear()} Baba Baidyanath Real Estate Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-[#524434]">
              Aurangabad, Bihar 824101
            </span>
            <button 
              onClick={() => handleLink('disclaimer')} 
              className="hover:text-[#881337] transition-colors cursor-pointer text-[11px] font-medium"
            >
              Statutory Real Estate Notice
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
