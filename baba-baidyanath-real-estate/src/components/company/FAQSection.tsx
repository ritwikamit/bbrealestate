import React, { useState } from 'react';
import { FAQS } from '../../data/faqs';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 md:py-28 relative z-10 bg-transparent text-[#1C1917] border-b border-[#E7E2D8]" aria-label="Frequently Asked Questions">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-xs text-[#B45309] font-medium tracking-wide">
            <HelpCircle className="w-3.5 h-3.5 text-[#D97706]" />
            <span>Transparency &amp; Verification</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#1C1917] font-bold tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-base text-[#57534E] leading-relaxed max-w-xl mx-auto font-normal">
            Clear, honest answers regarding our corporate registration, project timelines, and engagement practices.
          </p>
        </div>

        {/* Accordion list in Light Luxury Panels */}
        <div className="space-y-3.5">
          {(FAQS || []).map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white border border-[#F59E0B]/60 shadow-[0_10px_30px_rgba(245,158,11,0.14)]'
                    : 'bg-white/80 hover:bg-white border border-[#E7E2D8] shadow-sm'
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#F59E0B]"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#1C1917] leading-snug">
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-full transition-all duration-200 shrink-0 ${
                    isOpen ? 'bg-[#FEF3C7] text-[#92400E] rotate-180' : 'bg-[#FAF8F5] text-[#78716C]'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-7 sm:px-7 text-sm sm:text-base text-[#57534E] leading-relaxed border-t border-[#E7E2D8] pt-4 font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
