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
    <footer className="relative z-10 bg-gradient-to-b from-[#141210] via-[#0C0B0A] to-[#040404] text-stone-300 border-t border-white/10 shadow-[0_-12px_40px_rgba(0,0,0,0.6)]" aria-label="Corporate Footer">
      {/* Statutory Corporate Credentials Strip */}
      <div className="border-b border-white/10 bg-white/[0.03] py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-stone-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400 shrink-0" />
            <span>Ministry of Corporate Affairs Registered &middot; CIN: <strong className="text-amber-400 font-extrabold">{COMPANY_DATA.cin}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-amber-400 shrink-0" />
              <span>Aurangabad, Bihar (824101)</span>
            </span>
            <span className="text-stone-600">|</span>
            <span className="text-stone-300 font-semibold">RoC Patna Jurisdiction</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-28 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Corporate Profile & Official Logo with Radiant Glow */}
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

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md font-medium">
              Registered corporate enterprise based in Aurangabad, Bihar. Dedicated to institutional real-estate activities, transparent land acquisitions, and sustainable regional development under RoC Patna jurisdiction.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs space-y-2 shadow-inner">
              <div className="flex items-center gap-2 text-amber-400 font-mono font-extrabold">
                <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
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
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono font-extrabold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button 
                  onClick={() => handleLink('home')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Corporate Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('about')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  About the Company
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('services')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Capabilities &amp; Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('projects')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('calculator')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
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
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Client Voices &amp; Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('contact')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Governance */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono font-extrabold block">
              Governance
            </span>
            <ul className="space-y-2.5 text-xs text-stone-300">
              <li>
                <button 
                  onClick={() => handleLink('privacy')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('terms')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('disclaimer')} 
                  className="hover:text-amber-400 transition-colors cursor-pointer text-left font-semibold"
                >
                  Statutory Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://www.mca.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 text-left font-semibold"
                >
                  <span>MCA Verification</span>
                  <ArrowUpRight className="w-3 h-3 text-amber-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-400 font-mono font-extrabold block">
              Registered Office
            </span>
            <div className="text-xs text-stone-300 space-y-2 font-medium">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Building className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Jurisdiction: RoC Patna, Bihar</span>
              </div>
              <div className="pt-2 border-t border-white/10 text-[11px] space-y-1">
                <span className="font-bold text-amber-400 block">
                  Promoter Landmark:
                </span>
                <span className="block text-stone-300">
                  Siyaram &amp; Siya Shop (Near PNB Bank)
                </span>
                <a
                  href={SIYARAM_DATA.justdialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 font-bold"
                >
                  <span>Siyaram's on Justdial</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full rounded-xl py-3 px-4 text-xs uppercase tracking-[0.16em] text-white font-bold bg-gradient-to-r from-[#881337] via-[#991B1B] to-[#B45309] hover:opacity-95 shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_24px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2 cursor-pointer transition-all border border-amber-300/30"
              >
                <span>Submit Requirement</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-amber-200" />
              </button>
            </div>
          </div>
        </div>

        {/* Verified Public Corporate Registries Bar in Footer */}
        <div className="py-6 border-b border-white/10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="space-y-0.5">
            <span className="text-[10px] uppercase font-mono tracking-widest text-amber-400 font-bold block">
              Independent Third-Party Verification Registries
            </span>
            <span className="text-xs text-stone-400">
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
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.12] text-stone-200 border border-white/15 hover:border-amber-400/50 text-[11px] font-semibold font-mono flex items-center gap-1.5 transition-all shadow-xs hover:shadow-sm"
              >
                <span>{reg.name}</span>
                <ArrowUpRight className="w-3 h-3 text-amber-400" />
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Baba Baidyanath Real Estate Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-stone-500">
              Aurangabad, Bihar 824101
            </span>
            <button 
              onClick={() => handleLink('disclaimer')} 
              className="hover:text-amber-400 transition-colors cursor-pointer text-[11px] font-medium text-stone-400"
            >
              Statutory Real Estate Notice
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
