import React from 'react';
import logoImg from '../../assets/logo.png';

export interface CompanyLogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark-only' | 'hero' | 'full';
  className?: string;
  imgClassName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'custom';
  theme?: 'dark' | 'light' | 'auto';
  glow?: boolean;
  alt?: string;
}

/**
 * Official Master Logo of Baba Baidyanath Real Estate Private Limited.
 * Renders the authentic brand artwork with optional multi-layer luminous glow.
 * For dark surfaces (Header, Loading Screen, Footer), the glow applies a crisp
 * hairline white edge contour + warm golden radiant aura so every letter and emblem
 * line is 100% visible and striking.
 */
export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'horizontal',
  className = '',
  imgClassName = '',
  size = 'md',
  theme = 'auto',
  glow,
  alt = 'Baba Baidyanath Real Estate Private Limited',
}) => {
  // Height sizing mapped to standard proportional containers
  const sizeMap: Record<string, string> = {
    xs: 'h-8 sm:h-9',
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-20 sm:h-24',
    xl: 'h-28 sm:h-32 md:h-36',
    '2xl': 'h-36 sm:h-44 md:h-52',
    '3xl': 'h-48 sm:h-56 md:h-64',
    custom: '',
  };

  const heightClass =
    variant === 'hero'
      ? 'h-36 sm:h-48 md:h-56'
      : size === 'custom'
      ? ''
      : sizeMap[size] || sizeMap.md;

  const isDark = theme === 'dark';
  const shouldGlow = glow ?? isDark;

  // Luminous contour + gold aura filter:
  // 1. A hairline white contour (0 0 1.2px #fff) highlights every black letter & line
  // 2. Multi-tier amber/gold radiant drop-shadows create the celestial glowing aura
  const glowStyle: React.CSSProperties = shouldGlow
    ? {
        filter:
          'drop-shadow(0 0 1.2px rgba(255, 255, 255, 0.95)) ' +
          'drop-shadow(0 0 7px rgba(245, 158, 11, 0.75)) ' +
          'drop-shadow(0 0 18px rgba(245, 158, 11, 0.45)) ' +
          'drop-shadow(0 0 32px rgba(217, 119, 6, 0.25))',
      }
    : {};

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}>
      {shouldGlow && (
        <div
          className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-50 bg-radial from-amber-500/35 via-amber-600/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}
      <img
        src={logoImg}
        alt={alt}
        style={glowStyle}
        className={`${heightClass} ${imgClassName} w-auto max-w-full object-contain transition-all duration-300 hover:scale-[1.03] hover:brightness-105`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
