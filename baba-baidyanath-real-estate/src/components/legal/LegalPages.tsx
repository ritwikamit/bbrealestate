import React from 'react';
import { COMPANY_DATA } from '../../data/company';
import { ShieldCheck, Scale, AlertTriangle } from 'lucide-react';

interface LegalPageProps {
  type: 'privacy' | 'terms' | 'disclaimer';
}

export const LegalPage: React.FC<LegalPageProps> = ({ type }) => {
  return (
    <div className="py-16 md:py-24 relative z-10 bg-transparent text-[#1C1917]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {type === 'privacy' && (
          <div className="space-y-8 rounded-2xl p-8 sm:p-12 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)]">
            <div className="space-y-3 border-b border-[#E7E2D8] pb-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B45309] font-mono font-medium">
                <ShieldCheck className="w-4 h-4 text-[#D97706]" />
                <span>Statutory Compliance Policy</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
                Privacy Policy
              </h1>
              <p className="text-xs text-[#78716C] font-mono">
                Effective: 7 November 2024 &bull; Last Reviewed: September 2026
              </p>
            </div>

            <div className="space-y-6 text-[#57534E] text-sm sm:text-base leading-relaxed font-normal">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  1. Corporate Identity &amp; Controller
                </h2>
                <p>
                  This Privacy Policy governs the collection, processing, and handling of information by <strong>Baba Baidyanath Real Estate Private Limited</strong> (CIN: {COMPANY_DATA.cin}), having its registered office at {COMPANY_DATA.registeredAddress}.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  2. Information We Collect
                </h2>
                <p>
                  We collect information strictly submitted voluntarily by users through our requirement registration forms, email inquiries, or telephonic discussions:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-[#78716C]">
                  <li>Full legal or representative name</li>
                  <li>Direct contact telephone/mobile number</li>
                  <li>Email address (where provided)</li>
                  <li>Property preference, acreage requirement, budget bracket, or land parcel location details</li>
                </ul>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  3. Non-Commercialization Guarantee
                </h2>
                <p>
                  Baba Baidyanath Real Estate Private Limited does not sell, rent, monetize, or trade client or landowner information to third-party telemarketers, advertising networks, or unverified brokers. All inquiries are maintained with strict commercial confidentiality.
                </p>
              </section>
            </div>
          </div>
        )}

        {type === 'terms' && (
          <div className="space-y-8 rounded-2xl p-8 sm:p-12 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)]">
            <div className="space-y-3 border-b border-[#E7E2D8] pb-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B45309] font-mono font-medium">
                <Scale className="w-4 h-4 text-[#D97706]" />
                <span>Legal Engagement Terms</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
                Terms of Use
              </h1>
              <p className="text-xs text-[#78716C] font-mono">
                Effective: 7 November 2024 &bull; Applicable Law: Republic of India
              </p>
            </div>

            <div className="space-y-6 text-[#57534E] text-sm sm:text-base leading-relaxed font-normal">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  1. Information Accuracy &amp; Non-Binding Nature
                </h2>
                <p>
                  The content published on this corporate website is for general informational awareness regarding Baba Baidyanath Real Estate Private Limited. It does not constitute a formal contract, deed of conveyance, or guarantee of property appreciation.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  2. Land &amp; Property Transactions
                </h2>
                <p>
                  All real estate transactions, sale deeds, leases, and joint development agreements require independent physical verification, revenue record inspection, mutual agreement on terms, and registration before competent sub-registrar authorities in accordance with the Registration Act, 1908 and Bihar RERA guidelines.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  3. Jurisdiction
                </h2>
                <p>
                  Any disputes arising out of or in connection with the use of this website or corporate dealings shall be subject to the exclusive jurisdiction of the competent courts in Aurangabad, Bihar, and the High Court of Judicature at Patna.
                </p>
              </section>
            </div>
          </div>
        )}

        {type === 'disclaimer' && (
          <div className="space-y-8 rounded-2xl p-8 sm:p-12 bg-white border border-[#E7E2D8] shadow-[0_15px_35px_rgba(28,25,23,0.06)]">
            <div className="space-y-3 border-b border-[#E7E2D8] pb-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#B45309] font-mono font-medium">
                <AlertTriangle className="w-4 h-4 text-[#D97706]" />
                <span>Statutory &amp; Regulatory Transparency</span>
              </div>
              <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#1C1917]">
                Regulatory Disclaimer
              </h1>
              <p className="text-xs text-[#78716C] font-mono">
                Statutory Notice Pursuant to Bihar RERA &amp; MCA Guidelines
              </p>
            </div>

            <div className="space-y-6 text-[#57534E] text-sm sm:text-base leading-relaxed font-normal">
              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  1. RERA Compliance Notice
                </h2>
                <p>
                  Baba Baidyanath Real Estate Private Limited strictly complies with the Real Estate (Regulation and Development) Act, 2016 (RERA) and Bihar RERA Rules. No prospective layout, plotting scheme, or building project is offered for public sale, booking, or advance token collection prior to securing all mandatory statutory sanctions and official RERA registration.
                </p>
              </section>

              <section className="space-y-3">
                <h2 className="font-serif text-2xl font-bold text-[#1C1917]">
                  2. Calculators &amp; Estimations
                </h2>
                <p>
                  The land area conversion and EMI tools provided on this portal are for preliminary estimation and general planning only. Actual plot boundaries are governed by physical Amin survey demarcations and registered deed schedules.
                </p>
              </section>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
