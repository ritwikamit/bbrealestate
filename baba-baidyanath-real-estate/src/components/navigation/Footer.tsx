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
    <footer className="relative z-10 bg-[#070605] text-[#D6D3D1] border-t border-[#F59E0B]/20" aria-label="Corporate Footer">
      {/* Statutory Corporate Credentials Strip */}
      <div className="border-b border-white/[0.08] bg-black/60 py-3 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-stone-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
            <span>Ministry of Corporate Affairs Registered &middot; CIN: <strong className="text-[#FDE68A] font-medium">{COMPANY_DATA.cin}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#F59E0B] shrink-0" />
              <span>Aurangabad, Bihar (824101)</span>
            </span>
            <span className="text-white/20">|</span>
            <span className="text-stone-400">RoC Patna Jurisdiction</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-28 lg:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Corporate Profile & Official Logo */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center -ml-2 mb-2">
              <CompanyLogo variant="full" size="xl" className="items-start text-left" />
            </div>

            <p className="text-xs sm:text-sm text-stone-400 leading-relaxed max-w-md font-light">
              Registered corporate enterprise based in Aurangabad, Bihar. Dedicated to institutional real-estate activities, transparent land acquisitions, and sustainable regional development under RoC Patna jurisdiction.
            </p>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-[#F59E0B]/20 text-xs space-y-2 backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#FDE68A] font-mono font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
                <span>CIN: {COMPANY_DATA.cin}</span>
              </div>
              <div className="text-[11px] text-stone-400 font-mono">
                Incorporated 7 Nov 2024 &bull; RoC Patna &bull; Authorised Capital: ₹1,00,000
              </div>
              <div className="text-[11px] text-stone-400 font-mono">
                Location: Aurangabad, Bihar 824101
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FDE68A] font-mono font-semibold block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => handleLink('home')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Corporate Overview
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('about')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  About the Company
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('services')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Capabilities &amp; Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('projects')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Project Portfolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('calculator')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
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
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Client Voices &amp; Reviews
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('contact')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Contact &amp; Location
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Statutory & Governance */}
          <div className="lg:col-span-2 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FDE68A] font-mono font-semibold block">
              Governance
            </span>
            <ul className="space-y-2.5 text-xs text-stone-400">
              <li>
                <button 
                  onClick={() => handleLink('privacy')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('terms')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleLink('disclaimer')} 
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Statutory Disclaimer
                </button>
              </li>
              <li>
                <a 
                  href="https://www.mca.gov.in/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-white transition-colors inline-flex items-center gap-1 text-left"
                >
                  <span>MCA Verification</span>
                  <ArrowUpRight className="w-3 h-3 text-[#F59E0B]" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Registered Office */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs uppercase tracking-[0.2em] text-[#FDE68A] font-mono font-semibold block">
              Registered Office
            </span>
            <div className="text-xs text-stone-300 space-y-2 font-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                <span>
                  C/O Kundan Kumar Singh, Near Gayatri Mandir, Aurangabad, Bihar 824101, India
                </span>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Building className="w-4 h-4 text-[#F59E0B] shrink-0" />
                <span>Jurisdiction: RoC Patna, Bihar</span>
              </div>
            </div>

            <div className="pt-3">
              <button
                onClick={onOpenEnquiry}
                className="w-full liquid-glass rounded-xl py-3 px-4 text-xs uppercase tracking-[0.16em] text-white/90 hover:text-white flex items-center justify-center gap-2 cursor-pointer btn-gold-border"
              >
                <span>Submit Requirement</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FDE68A]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 font-light">
          <div>
            &copy; {new Date().getFullYear()} Baba Baidyanath Real Estate Private Limited. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[11px] font-mono text-stone-400">
              Aurangabad, Bihar 824101
            </span>
            <button 
              onClick={() => handleLink('disclaimer')} 
              className="hover:text-white transition-colors cursor-pointer text-[11px]"
            >
              Statutory Real Estate Notice
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
