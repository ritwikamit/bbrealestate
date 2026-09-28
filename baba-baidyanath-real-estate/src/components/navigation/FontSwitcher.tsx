import React, { useState, useEffect, useRef } from 'react';
import { Type, Check, ChevronDown } from 'lucide-react';

export interface FontPreset {
  id: string;
  name: string;
  category: string;
  headingFont: string;
  bodyFont: string;
  previewClass: string;
}

export const FONT_PRESETS: FontPreset[] = [
  {
    id: 'architectural',
    name: 'Architectural Modern',
    category: 'Clean Geometric Luxury',
    headingFont: 'Outfit',
    bodyFont: 'Plus Jakarta Sans',
    previewClass: 'font-[Outfit]',
  },
  {
    id: 'editorial',
    name: 'Editorial Luxury',
    category: 'High-End Editorial Serif',
    headingFont: 'Playfair Display',
    bodyFont: 'Plus Jakarta Sans',
    previewClass: 'font-[Playfair_Display]',
  },
  {
    id: 'heritage',
    name: 'Heritage Monumental',
    category: 'Prestige Inscriptional',
    headingFont: 'Cinzel',
    bodyFont: 'Inter',
    previewClass: 'font-[Cinzel]',
  },
  {
    id: 'executive',
    name: 'Executive Clean',
    category: 'Contemporary Tech-Minimal',
    headingFont: 'Inter',
    bodyFont: 'Inter',
    previewClass: 'font-[Inter]',
  },
  {
    id: 'classic',
    name: 'Classic Estate',
    category: 'Traditional Book Serif',
    headingFont: 'Cormorant Garamond',
    bodyFont: 'Plus Jakarta Sans',
    previewClass: 'font-[Cormorant_Garamond]',
  },
];

export const FontSwitcher: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const [currentFont, setCurrentFont] = useState<string>('architectural');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('bb_font_preset') || 'architectural';
    applyFont(saved);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const applyFont = (fontId: string) => {
    setCurrentFont(fontId);
    localStorage.setItem('bb_font_preset', fontId);
    if (fontId === 'architectural') {
      document.documentElement.removeAttribute('data-font');
    } else {
      document.documentElement.setAttribute('data-font', fontId);
    }
  };

  const activePreset = FONT_PRESETS.find((p) => p.id === currentFont) || FONT_PRESETS[0];

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs transition-all duration-200 cursor-pointer border ${
          isOpen
            ? 'bg-[#C5A059]/20 border-[#C5A059]/50 text-[#F5F2EA]'
            : 'bg-white/[0.04] hover:bg-white/[0.08] border-white/10 text-[#D9D4C8] hover:text-[#F5F2EA]'
        }`}
        title="Change application typography font"
        aria-label="Change font"
        aria-expanded={isOpen}
      >
        <Type className="w-3.5 h-3.5 text-[#E0C07D]" />
        {!compact && (
          <span className="text-[11px] font-mono text-[#8E968F] hidden sm:inline">Font:</span>
        )}
        <span className="text-[11px] font-medium text-[#F5F2EA]">{activePreset.headingFont}</span>
        <ChevronDown className={`w-3 h-3 text-[#8E968F] transition-transform duration-200 ${isOpen ? 'rotate-180 text-[#E0C07D]' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1.5 w-64 rounded-xl bg-[#141A17]/95 border border-[#C5A059]/30 shadow-2xl backdrop-blur-xl py-2 z-50 animate-in fade-in zoom-in-95 duration-150">
          <div className="px-3 py-1.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider font-mono text-[#8E968F]">Typography Style</span>
            <span className="text-[9px] font-mono text-[#E0C07D] bg-[#C5A059]/15 px-1.5 py-0.5 rounded">Real-time</span>
          </div>

          <div className="py-1">
            {FONT_PRESETS.map((preset) => {
              const isSelected = preset.id === currentFont;
              return (
                <button
                  key={preset.id}
                  onClick={() => {
                    applyFont(preset.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 flex items-center justify-between transition-colors group cursor-pointer ${
                    isSelected ? 'bg-[#C5A059]/15 text-[#F5F2EA]' : 'text-[#D9D4C8] hover:bg-white/[0.05] hover:text-white'
                  }`}
                >
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span
                        className="text-sm font-semibold tracking-wide"
                        style={{ fontFamily: `"${preset.headingFont}", sans-serif` }}
                      >
                        {preset.name}
                      </span>
                      {preset.id === 'architectural' && (
                        <span className="text-[9px] px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 font-mono">
                          New
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] text-[#8E968F] font-mono">
                      {preset.headingFont} + {preset.bodyFont}
                    </span>
                  </div>

                  {isSelected && (
                    <Check className="w-4 h-4 text-[#E0C07D] flex-shrink-0" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
