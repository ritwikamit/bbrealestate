import React from 'react';

export type IconColor = 'gold' | 'crimson' | 'amber' | 'emerald' | 'stone' | 'white';

interface GraphicalIconProps {
  className?: string;
  size?: number;
  color?: IconColor;
}

const colorMap: Record<IconColor, { stroke: string; fill?: string; glow?: string }> = {
  gold: { stroke: '#C59B27', fill: '#E7C973', glow: 'rgba(197, 155, 39, 0.4)' },
  crimson: { stroke: '#9A6F20', fill: '#E7C973', glow: 'rgba(154, 111, 32, 0.4)' },
  amber: { stroke: '#9A6F20', fill: '#FAF8F5', glow: 'rgba(197, 155, 39, 0.35)' },
  emerald: { stroke: '#059669', fill: '#A7F3D0', glow: 'rgba(5, 150, 105, 0.4)' },
  stone: { stroke: '#78716C', fill: '#D6D3D1', glow: 'rgba(120, 113, 108, 0.2)' },
  white: { stroke: '#FAF8F5', fill: '#FFFFFF', glow: 'rgba(255, 255, 255, 0.3)' },
};

/**
 * 1. Divine Crest Mark (Bespoke 4-point geometric star with central bindu)
 */
export const IconDivineSpark: React.FC<GraphicalIconProps> = ({ className = '', size = 16, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id={`gradSpark-${color}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF3D0" />
          <stop offset="50%" stopColor={c.stroke} />
          <stop offset="100%" stopColor="#7E561C" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L13.8 9.2C14.2 10.8 15.2 11.8 16.8 12.2L24 14L16.8 15.8C15.2 16.2 14.2 17.2 13.8 18.8L12 26L10.2 18.8C9.8 17.2 8.8 16.2 7.2 15.8L0 14L7.2 12.2C8.8 11.8 9.8 10.8 10.2 9.2L12 2Z"
        transform="scale(0.85) translate(2, 2)"
        stroke={`url(#gradSpark-${color})`}
        strokeWidth="1.2"
        fill={c.stroke}
        fillOpacity="0.15"
      />
      <circle cx="12" cy="12" r="1.5" fill="#FFFDF5" />
    </svg>
  );
};

/**
 * 2. Statutory Clear Title Seal (Geometric octagonal legal crest)
 */
export const IconTitleSeal: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon
        points="12,2 19,5 22,12 19,19 12,22 5,19 2,12 5,5"
        stroke={c.stroke}
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill={c.stroke}
        fillOpacity="0.08"
      />
      <circle cx="12" cy="12" r="5.5" stroke={c.stroke} strokeWidth="1" strokeDasharray="1.5 1.5" />
      <path d="M9.5 12L11 13.5L14.5 10" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/**
 * 3. Ministry / Corporate Chamber Crest (Fine-line classical pillar facade)
 */
export const IconCorporateChamber: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'crimson' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Pediment triangle */}
      <path d="M3 8L12 3L21 8" stroke={c.stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="2" y1="8.5" x2="22" y2="8.5" stroke={c.stroke} strokeWidth="1.2" />
      {/* Columns */}
      <line x1="6" y1="9.5" x2="6" y2="18" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="10" y1="9.5" x2="10" y2="18" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="14" y1="9.5" x2="14" y2="18" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="18" y1="9.5" x2="18" y2="18" stroke={c.stroke} strokeWidth="1.2" />
      {/* Base plinth */}
      <line x1="3" y1="18.5" x2="21" y2="18.5" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="1.5" y1="21" x2="22.5" y2="21" stroke={c.stroke} strokeWidth="1.4" />
      {/* Mini crest inside pediment */}
      <circle cx="12" cy="6.2" r="1" fill={c.stroke} />
    </svg>
  );
};

/**
 * 4. Vastu Harmonious Compass (Geometric 8-point Mandala Compass)
 */
export const IconVastuMandala: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke={c.stroke} strokeWidth="1.2" />
      <circle cx="12" cy="12" r="3" stroke={c.stroke} strokeWidth="0.8" fill={c.stroke} fillOpacity="0.1" />
      {/* Cardinal diamond */}
      <polygon points="12,4 13.5,10.5 20,12 13.5,13.5 12,20 10.5,13.5 4,12 10.5,10.5" stroke={c.stroke} strokeWidth="1.2" fill="none" />
      <circle cx="12" cy="12" r="1.2" fill="#FFFDF5" />
    </svg>
  );
};

/**
 * 5. Regional Geodesic Location Pin (Clean faceted geometric coordinate mark)
 */
export const IconGeoPin: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'amber' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z"
        stroke={c.stroke}
        strokeWidth="1.3"
        strokeLinejoin="round"
        fill={c.stroke}
        fillOpacity="0.08"
      />
      <circle cx="12" cy="9" r="3" stroke={c.stroke} strokeWidth="1.2" />
      <circle cx="12" cy="9" r="1.2" fill={c.stroke} />
    </svg>
  );
};

/**
 * 6. Verification Checked Mark (Minimalist concentric verification badge)
 */
export const IconVerifiedBadge: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'emerald' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9.5" stroke={c.stroke} strokeWidth="1.2" fill={c.stroke} fillOpacity="0.1" />
      <path
        d="M7.5 12.2L10.5 15.2L16.5 9"
        stroke={c.stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

/**
 * 7. Modern Land & Architectural Towers Icon
 */
export const IconModernTowers: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Tower 1 */}
      <rect x="4" y="9" width="5" height="12" stroke={c.stroke} strokeWidth="1.2" fill={c.stroke} fillOpacity="0.08" />
      <line x1="6.5" y1="12" x2="6.5" y2="18" stroke={c.stroke} strokeWidth="0.8" strokeDasharray="1 1.5" />
      {/* Center Tower High-rise */}
      <polygon points="10,5 12,3 14,5 14,21 10,21" stroke={c.stroke} strokeWidth="1.3" fill={c.stroke} fillOpacity="0.15" />
      <line x1="12" y1="7" x2="12" y2="19" stroke={c.stroke} strokeWidth="0.8" strokeDasharray="1 1.5" />
      {/* Tower 3 */}
      <rect x="15" y="8" width="5" height="13" stroke={c.stroke} strokeWidth="1.2" fill={c.stroke} fillOpacity="0.08" />
      <line x1="17.5" y1="11" x2="17.5" y2="18" stroke={c.stroke} strokeWidth="0.8" strokeDasharray="1 1.5" />
      {/* Horizon Baseline */}
      <line x1="2" y1="21.5" x2="22" y2="21.5" stroke={c.stroke} strokeWidth="1.3" />
    </svg>
  );
};

/**
 * 8. Land Plot & Survey Matrix Icon (Khatiyan / Boundary Survey)
 */
export const IconPlotMatrix: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'amber' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="3" width="18" height="18" rx="2" stroke={c.stroke} strokeWidth="1.2" fill={c.stroke} fillOpacity="0.06" />
      {/* Subdivision grid */}
      <line x1="3" y1="11" x2="21" y2="11" stroke={c.stroke} strokeWidth="1" strokeDasharray="2 2" />
      <line x1="12" y1="3" x2="12" y2="21" stroke={c.stroke} strokeWidth="1" strokeDasharray="2 2" />
      {/* Survey corner markers */}
      <circle cx="3" cy="3" r="1.5" fill={c.stroke} />
      <circle cx="21" cy="3" r="1.5" fill={c.stroke} />
      <circle cx="21" cy="21" r="1.5" fill={c.stroke} />
      <circle cx="3" cy="21" r="1.5" fill={c.stroke} />
      {/* Center Plot Core */}
      <rect x="7" y="6" width="4" height="3.5" stroke={c.stroke} strokeWidth="1" fill={c.stroke} fillOpacity="0.2" />
    </svg>
  );
};

/**
 * 9. Calculator & Financial Feasibility Glyph
 */
export const IconMathFeasibility: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="3" width="16" height="18" rx="2.5" stroke={c.stroke} strokeWidth="1.3" fill={c.stroke} fillOpacity="0.06" />
      {/* Display screen */}
      <rect x="6.5" y="5.5" width="11" height="4" rx="1" stroke={c.stroke} strokeWidth="1" fill={c.stroke} fillOpacity="0.15" />
      {/* Keypad Grid */}
      <circle cx="8" cy="13" r="1" fill={c.stroke} />
      <circle cx="12" cy="13" r="1" fill={c.stroke} />
      <circle cx="16" cy="13" r="1" fill={c.stroke} />
      <circle cx="8" cy="17" r="1" fill={c.stroke} />
      <circle cx="12" cy="17" r="1" fill={c.stroke} />
      <circle cx="16" cy="17" r="1" fill={c.stroke} />
    </svg>
  );
};

/**
 * 10. Direct Desk Phone & Communications Monoline Glyph
 */
export const IconDeskPhone: React.FC<GraphicalIconProps> = ({ className = '', size = 16, color = 'amber' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
        stroke={c.stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={c.stroke}
        fillOpacity="0.1"
      />
      <circle cx="18" cy="6" r="2" stroke={c.stroke} strokeWidth="1" />
      <line x1="18" y1="2" x2="18" y2="4" stroke={c.stroke} strokeWidth="1" strokeLinecap="round" />
      <line x1="22" y1="6" x2="20" y2="6" stroke={c.stroke} strokeWidth="1" strokeLinecap="round" />
    </svg>
  );
};

/**
 * 11. Minimal Arrow Directional Chevron / Arrow
 */
export const IconMinimalArrow: React.FC<GraphicalIconProps> = ({ className = '', size = 14, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M7 17L17 7M17 7H9M17 7V15" stroke={c.stroke} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

/**
 * 12. Director & Governance Executive Seal
 */
export const IconExecutiveSeal: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'crimson' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="7.5" r="4.5" stroke={c.stroke} strokeWidth="1.3" fill={c.stroke} fillOpacity="0.1" />
      <path
        d="M4.5 20C4.5 16 7.8 14 12 14C16.2 14 19.5 16 19.5 20"
        stroke={c.stroke}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <circle cx="12" cy="7.5" r="1.5" fill={c.stroke} />
    </svg>
  );
};

/**
 * 13. Statutory Ledger & Public Filing Dossier
 */
export const IconStatutoryLedger: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 4C4 2.9 4.9 2 6 2H15L20 7V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V4Z" stroke={c.stroke} strokeWidth="1.3" fill={c.stroke} fillOpacity="0.06" />
      <polyline points="14 2 14 8 20 8" stroke={c.stroke} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="8" y1="13" x2="16" y2="13" stroke={c.stroke} strokeWidth="1.2" strokeLinecap="round" />
      <line x1="8" y1="17" x2="13" y2="17" stroke={c.stroke} strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
};

/**
 * 14. Capital Vault & Authorized Shares Icon
 */
export const IconCapitalVault: React.FC<GraphicalIconProps> = ({ className = '', size = 18, color = 'gold' }) => {
  const c = colorMap[color];
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="6" width="18" height="13" rx="2" stroke={c.stroke} strokeWidth="1.3" fill={c.stroke} fillOpacity="0.08" />
      <circle cx="12" cy="12.5" r="2.5" stroke={c.stroke} strokeWidth="1.2" />
      <line x1="12" y1="10" x2="12" y2="15" stroke={c.stroke} strokeWidth="1" />
      <line x1="9.5" y1="12.5" x2="14.5" y2="12.5" stroke={c.stroke} strokeWidth="1" />
    </svg>
  );
};

