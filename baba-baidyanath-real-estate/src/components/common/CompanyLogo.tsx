import React from 'react';
import logoImg from '../../assets/logo.png';

export interface CompanyLogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark-only' | 'hero' | 'full';
  className?: string;
  imgClassName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'custom';
  theme?: 'dark' | 'light' | 'auto';
  withContainer?: boolean;
  glow?: boolean;
  alt?: string;
}

/**
 * Official Master Logo of Baba Baidyanath Real Estate Private Limited.
 * Renders the authentic brand artwork with perfect contrast guarantees:
 * - On light surfaces (Navbar, Content), renders with crystal-clear native contrast.
 * - On dark surfaces (Loading screen, dark footer), ensures the dark Om strokes and
 *   black typography never blend into the background by providing an elegant
 *   high-contrast warm ivory halo / contrast badge.
 */
export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'horizontal',
  className = '',
  imgClassName = '',
  size = 'md',
  theme = 'auto',
  withContainer = false,
  glow,
  alt = 'Baba Baidyanath Real Estate Private Limited',
}) => {
  const sizeMap: Record<string, string> = {
    xs: 'h-8 sm:h-9',
    sm: 'h-10 sm:h-12',
    md: 'h-13 sm:h-15',
    lg: 'h-18 sm:h-22',
    xl: 'h-24 sm:h-28 md:h-32',
    '2xl': 'h-32 sm:h-40 md:h-48',
    '3xl': 'h-44 sm:h-52 md:h-60',
    custom: '',
  };

  const heightClass =
    variant === 'hero'
      ? 'h-32 sm:h-44 md:h-52'
      : size === 'custom'
      ? ''
      : sizeMap[size] || sizeMap.md;

  const isDark = theme === 'dark';
  const shouldGlow = glow ?? isDark;

  // For dark backgrounds: soft white-gold edge radiance so black Om & black typography are 100% visible
  const darkFilterStyle: React.CSSProperties = isDark && !withContainer
    ? {
        filter:
          'drop-shadow(0 0 1.5px rgba(255, 255, 255, 0.95)) ' +
          'drop-shadow(0 0 8px rgba(197, 155, 39, 0.6)) ' +
          'drop-shadow(0 0 20px rgba(197, 155, 39, 0.35))',
      }
    : {};

  if (withContainer) {
    return (
      <div
        className={`inline-flex items-center justify-center p-2.5 sm:p-3 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] shadow-sm select-none ${className}`}
      >
        <img
          src={logoImg}
          alt={alt}
          className={`${heightClass} ${imgClassName} w-auto max-w-full object-contain transition-transform duration-300 hover:scale-[1.02]`}
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 select-none ${className}`}>
      {shouldGlow && (
        <div
          className="absolute inset-0 -z-10 rounded-full blur-2xl opacity-40 bg-radial from-[#C59B27]/40 via-[#9A6F20]/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />
      )}
      <img
        src={logoImg}
        alt={alt}
        style={darkFilterStyle}
        className={`${heightClass} ${imgClassName} w-auto max-w-full object-contain transition-all duration-300 hover:scale-[1.02]`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
