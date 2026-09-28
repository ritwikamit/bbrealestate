import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

/**
 * Zauba Corp Official Vector Brand Logo
 */
export const LogoZaubaCorp: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const height = size === 'sm' ? 24 : size === 'lg' ? 38 : 30;
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg height={height} viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto">
        {/* Emblem - Geometric Z block in green/teal */}
        <rect x="2" y="4" width="32" height="32" rx="8" fill="#0D9488" />
        <path d="M10 13H26L14 27H26" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        {/* Wordmark */}
        <text x="42" y="22" fill="#0F172A" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.04em">
          ZAUBA
        </text>
        <text x="105" y="22" fill="#0D9488" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="0.04em">
          CORP
        </text>
        <text x="43" y="32" fill="#64748B" fontFamily="monospace" fontWeight="600" fontSize="7.5" letterSpacing="0.16em">
          COMPANY REGISTRY
        </text>
      </svg>
    </div>
  );
};

/**
 * Dun & Bradstreet (D&B) Official Vector Brand Logo
 */
export const LogoDNB: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const height = size === 'sm' ? 24 : size === 'lg' ? 38 : 30;
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg height={height} viewBox="0 0 175 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto">
        {/* D&B Circle Symbol */}
        <circle cx="20" cy="20" r="16" fill="#002D62" />
        <text x="9" y="26" fill="#00A3E0" fontFamily="serif, Georgia, Times" fontWeight="bold" fontSize="18" fontStyle="italic">
          d
        </text>
        <text x="17" y="24" fill="#FFFFFF" fontFamily="serif, Georgia, Times" fontWeight="bold" fontSize="13">
          &amp;
        </text>
        <text x="23" y="26" fill="#00A3E0" fontFamily="serif, Georgia, Times" fontWeight="bold" fontSize="18" fontStyle="italic">
          b
        </text>
        {/* Wordmark */}
        <text x="44" y="20" fill="#002D62" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="14" letterSpacing="0.02em">
          dun &amp; bradstreet
        </text>
        <text x="45" y="31" fill="#64748B" fontFamily="monospace" fontWeight="600" fontSize="7.5" letterSpacing="0.14em">
          GLOBAL DIRECTORY
        </text>
      </svg>
    </div>
  );
};

/**
 * Tofler Official Vector Brand Logo
 */
export const LogoTofler: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const height = size === 'sm' ? 24 : size === 'lg' ? 38 : 30;
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg height={height} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto">
        {/* Tofler Bird in Flight Symbol */}
        <rect x="2" y="4" width="32" height="32" rx="8" fill="#FF5722" />
        <path d="M10 22C14 16 20 14 26 12C23 18 19 22 14 26C12 28 10 26 10 22Z" fill="white" />
        <path d="M16 17C19 13 24 10 27 9C25 14 22 17 18 20Z" fill="#FFE0B2" />
        {/* Wordmark */}
        <text x="42" y="24" fill="#1E293B" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.02em">
          tofler
        </text>
        <circle cx="94" cy="14" r="2.5" fill="#FF5722" />
        <text x="43" y="33" fill="#64748B" fontFamily="monospace" fontWeight="600" fontSize="7.5" letterSpacing="0.14em">
          BUSINESS INTELLIGENCE
        </text>
      </svg>
    </div>
  );
};

/**
 * Tracxn Official Vector Brand Logo
 */
export const LogoTracxn: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const height = size === 'sm' ? 24 : size === 'lg' ? 38 : 30;
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg height={height} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto">
        {/* Tracxn Hex Prism Icon */}
        <rect x="2" y="4" width="32" height="32" rx="8" fill="#1E40AF" />
        <polygon points="18,10 26,15 26,25 18,30 10,25 10,15" fill="#3B82F6" stroke="#93C5FD" strokeWidth="1.5" />
        <circle cx="18" cy="20" r="3" fill="#FFFFFF" />
        {/* Wordmark */}
        <text x="42" y="24" fill="#0F172A" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="17" letterSpacing="-0.01em">
          Tracxn
        </text>
        <text x="43" y="33" fill="#64748B" fontFamily="monospace" fontWeight="600" fontSize="7.5" letterSpacing="0.14em">
          MARKET INTELLIGENCE
        </text>
      </svg>
    </div>
  );
};

/**
 * FalconeBiz Official Vector Brand Logo
 */
export const LogoFalconeBiz: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const height = size === 'sm' ? 24 : size === 'lg' ? 38 : 30;
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg height={height} viewBox="0 0 170 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto">
        {/* Falcone Wing / Shield Emblem */}
        <rect x="2" y="4" width="32" height="32" rx="8" fill="#1E293B" />
        <path d="M8 25L18 11L28 25L18 21L8 25Z" fill="#38BDF8" />
        <path d="M13 23L18 16L23 23L18 21L13 23Z" fill="#FFFFFF" />
        {/* Wordmark */}
        <text x="42" y="22" fill="#0F172A" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.02em">
          FALCONE
        </text>
        <text x="114" y="22" fill="#0284C7" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="15" letterSpacing="0.02em">
          BIZ
        </text>
        <text x="43" y="32" fill="#64748B" fontFamily="monospace" fontWeight="600" fontSize="7.5" letterSpacing="0.14em">
          CORPORATE REGISTRY
        </text>
      </svg>
    </div>
  );
};

/**
 * Justdial Official Vector Brand Logo
 */
export const LogoJustdial: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  const height = size === 'sm' ? 24 : size === 'lg' ? 38 : 30;
  return (
    <div className={`inline-flex items-center gap-2 select-none ${className}`}>
      <svg height={height} viewBox="0 0 150 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-auto">
        {/* Justdial JD Icon */}
        <rect x="2" y="4" width="32" height="32" rx="8" fill="#FF7000" />
        <text x="7" y="27" fill="#FFFFFF" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" fontStyle="italic">
          jd
        </text>
        {/* Wordmark */}
        <text x="42" y="22" fill="#0076D7" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.02em">
          Just
        </text>
        <text x="72" y="22" fill="#FF7000" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="800" fontSize="16" letterSpacing="-0.02em">
          dial
        </text>
        <text x="43" y="32" fill="#64748B" fontFamily="monospace" fontWeight="600" fontSize="7.5" letterSpacing="0.14em">
          VERIFIED LISTING
        </text>
      </svg>
    </div>
  );
};
