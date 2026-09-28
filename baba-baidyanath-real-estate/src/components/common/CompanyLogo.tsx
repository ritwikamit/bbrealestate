import React from 'react';
import logoImg from '../../assets/logo.png';

export interface CompanyLogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark-only' | 'hero' | 'full';
  className?: string;
  imgClassName?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | 'custom';
  theme?: 'dark' | 'light' | 'auto';
  alt?: string;
}

/**
 * Official Master Logo of Baba Baidyanath Real Estate Private Limited.
 * Renders the authentic, unadulterated high-resolution brand artwork
 * exactly as provided.
 */
export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'horizontal',
  className = '',
  imgClassName = '',
  size = 'md',
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

  return (
    <div className={`inline-flex items-center justify-center shrink-0 select-none ${className}`}>
      <img
        src={logoImg}
        alt={alt}
        className={`${heightClass} ${imgClassName} w-auto max-w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
        loading="eager"
        decoding="async"
      />
    </div>
  );
};
