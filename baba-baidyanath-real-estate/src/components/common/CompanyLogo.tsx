import React from 'react';

interface CompanyLogoProps {
  variant?: 'horizontal' | 'vertical' | 'mark-only' | 'hero' | 'full';
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  theme?: 'dark' | 'light' | 'auto';
}

/**
 * 1:1 Pixel-Accurate Vector Masterpiece of the official Baba Baidyanath Real Estate logo
 * matched precisely to the user's uploaded master artwork:
 * - Lord Shiva's Sacred 3D Trishul (Trident) with center flaming blade and curving outer prongs
 * - Chandra (Golden Crescent Moon Cup) directly cradling the Trishul base
 * - Sacred Om (ॐ) with volumetric 3D metallic tubing, fiery crimson-to-gold molten gradient
 * - Crescent moon and bindu (dot) above the celestial right tail
 * - Modern 3D architectural skyscrapers with angled penthouse roofs & curtain-wall glass
 * - Sweeping 3D fluid golden foundation wave ribbon
 * - Stately typography: "BABA" in deep onyx black serif, "BAIDYANATH" in molten gold-to-crimson gradient
 * - Flanked by clean golden horizontal rule lines framing "REAL ESTATE PRIVATE LIMITED"
 */
export const CompanyLogo: React.FC<CompanyLogoProps> = ({
  variant = 'horizontal',
  className = '',
  size = 'md',
  theme = 'auto',
}) => {
  const isLightSurface = theme === 'light';

  // Master 1:1 Vector Emblem
  const MasterEmblem = ({
    width = 140,
    height = 105,
    showAura = true,
  }: {
    width?: number;
    height?: number;
    showAura?: boolean;
  }) => (
    <svg
      width={width}
      height={height}
      viewBox="0 0 520 380"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-300 group-hover:scale-[1.02]"
      aria-hidden="true"
    >
      <defs>
        {/* Exact Master Gradients matching the User's Image */}
        {/* 1. Om Volumetric Molten Gradient (Deep Crimson to 24K Polished Gold) */}
        <linearGradient id="exactOmGradient" x1="12%" y1="12%" x2="88%" y2="88%">
          <stop offset="0%" stopColor="#7F1313" />
          <stop offset="16%" stopColor="#B91C1C" />
          <stop offset="32%" stopColor="#DC2626" />
          <stop offset="50%" stopColor="#EA580C" />
          <stop offset="70%" stopColor="#F59E0B" />
          <stop offset="86%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#FEF08A" />
        </linearGradient>

        {/* 2. Top Specular Chrome Highlight for Tubular 3D Bevel */}
        <linearGradient id="exactOmHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0" />
          <stop offset="25%" stopColor="#FEF08A" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
          <stop offset="75%" stopColor="#FDE68A" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
        </linearGradient>

        {/* 3. Trishul Center Blade Facets */}
        <linearGradient id="exactTrishulLeft" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#7F1313" />
          <stop offset="45%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="exactTrishulRight" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#DC2626" />
        </linearGradient>

        {/* 4. Chandra (Crescent Moon Cup) Gold */}
        <linearGradient id="exactChandraGold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="30%" stopColor="#FBBF24" />
          <stop offset="70%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* 5. Modern Skyscraper Architectural Curtain-Wall Facades */}
        <linearGradient id="exactTowerCenter" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF5" />
          <stop offset="22%" stopColor="#FDE68A" />
          <stop offset="48%" stopColor="#F59E0B" />
          <stop offset="78%" stopColor="#B45309" />
          <stop offset="100%" stopColor="#451A03" />
        </linearGradient>
        <linearGradient id="exactTowerLeft" x1="0%" y1="100%" x2="50%" y2="0%">
          <stop offset="0%" stopColor="#450A0A" />
          <stop offset="35%" stopColor="#7F1D1D" />
          <stop offset="70%" stopColor="#B91C1C" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <linearGradient id="exactTowerRight" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDE68A" />
          <stop offset="35%" stopColor="#F59E0B" />
          <stop offset="75%" stopColor="#92400E" />
          <stop offset="100%" stopColor="#78350F" />
        </linearGradient>

        {/* 6. Sweeping 3D Foundation Ribbon */}
        <linearGradient id="exactWaveGold" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#92400E" stopOpacity="0.1" />
          <stop offset="15%" stopColor="#B45309" />
          <stop offset="38%" stopColor="#F59E0B" />
          <stop offset="55%" stopColor="#FFFBEB" />
          <stop offset="72%" stopColor="#FBBF24" />
          <stop offset="90%" stopColor="#D97706" />
          <stop offset="100%" stopColor="#92400E" stopOpacity="0.2" />
        </linearGradient>

        {/* 7. Sun Halo Ring Gradient */}
        <linearGradient id="exactSunHalo" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.85" />
          <stop offset="35%" stopColor="#FDE68A" stopOpacity="0.6" />
          <stop offset="70%" stopColor="#F59E0B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#DC2626" stopOpacity="0.1" />
        </linearGradient>

        {/* 8. 3D Cast Shadow Filter */}
        <filter id="exactLogoShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="5" stdDeviation="6" floodColor="#92400E" floodOpacity="0.3" />
          <feDropShadow dx="0" dy="2" stdDeviation="2" floodColor="#000000" floodOpacity="0.25" />
        </filter>
      </defs>

      <g filter="url(#exactLogoShadow)">
        {/* LAYER 1: Background Celestial Sun Halo Ring & Clouds (as in master photo) */}
        {showAura && (
          <g opacity="0.85">
            <circle cx="260" cy="195" r="130" stroke="url(#exactSunHalo)" strokeWidth="1.6" fill="none" strokeDasharray="5 3" />
            <circle cx="260" cy="195" r="133" stroke="#FFFBEB" strokeWidth="0.5" fill="none" opacity="0.4" />

            {/* Subtle Horizon Clouds */}
            <path d="M 155 125 Q 172 118 190 125 T 218 125" stroke="url(#exactSunHalo)" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />
            <path d="M 310 132 Q 328 124 346 132 T 375 132" stroke="url(#exactSunHalo)" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.6" />

            {/* Flying Birds in Golden Sunrise */}
            <path d="M 160 105 Q 166 100 172 105 Q 178 100 184 105" stroke="#D97706" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.75" />
            <path d="M 368 175 Q 373 170 378 175 Q 383 170 388 175" stroke="#D97706" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.6" />
          </g>
        )}

        {/* LAYER 2: Lord Shiva's Sacred 3D Trishul (Trident) */}
        <g id="trishul-exact">
          {/* Chandra (Golden Crescent Moon Cup) Cradling the Trident */}
          <path
            d="M 238 108 C 246 124 274 124 282 108 C 274 116 246 116 238 108 Z"
            fill="url(#exactChandraGold)"
          />
          <path
            d="M 240 107 C 248 119 272 119 280 107"
            stroke="#FFFDF5"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          {/* Central Pointed Trishul Flame Blade */}
          <polygon points="260,38 260,108 254,92 254,78 256,58" fill="url(#exactTrishulLeft)" />
          <polygon points="260,38 260,108 266,92 266,78 264,58" fill="url(#exactTrishulRight)" />
          <line x1="260" y1="38" x2="260" y2="108" stroke="#FFFDF5" strokeWidth="1.4" strokeLinecap="round" />

          {/* Left Curved Trishul Prong */}
          <path
            d="M 242 58 C 245 72 250 84 258 94 C 253 91 244 82 241 70 C 238 62 238 55 242 58 Z"
            fill="url(#exactTrishulLeft)"
          />
          <path
            d="M 242 58 C 245 70 249 80 256 90"
            stroke="#FDE68A"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          {/* Right Curved Trishul Prong */}
          <path
            d="M 278 58 C 275 72 270 84 262 94 C 267 91 276 82 279 70 C 282 62 282 55 278 58 Z"
            fill="url(#exactTrishulRight)"
          />
          <path
            d="M 278 58 C 275 70 271 80 264 90"
            stroke="#FFFDF5"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />

          {/* Golden Bindu Accent at Trishul Base */}
          <circle cx="260" cy="110" r="2.8" fill="#FFFDF5" />
        </g>

        {/* LAYER 3: The Sacred 3D Sculpted Om (ॐ) */}
        <g id="om-exact">
          {/* Top Loop */}
          <path
            d="M 186 144 C 206 108 260 98 290 126 C 314 148 303 174 275 184 C 255 191 243 184 246 173 C 248 162 264 158 272 162 C 283 168 287 151 276 140 C 258 122 220 126 202 154 C 193 166 187 156 186 144 Z"
            fill="url(#exactOmGradient)"
          />
          {/* Top Loop Specular Ridge */}
          <path
            d="M 194 140 C 210 114 252 106 278 124 C 298 140 290 158 278 166"
            stroke="url(#exactOmHighlight)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Lower Loop (Wrapping around skyscrapers) */}
          <path
            d="M 268 186 C 298 200 314 232 302 260 C 288 292 238 298 196 280 C 170 268 152 250 144 238 C 140 230 146 226 156 230 C 174 242 200 252 230 254 C 268 256 284 236 280 212 C 274 192 254 184 238 188 C 232 182 238 176 268 186 Z"
            fill="url(#exactOmGradient)"
          />
          {/* Lower Loop Specular Ridge */}
          <path
            d="M 270 192 C 292 206 304 230 295 252 C 284 276 245 284 210 270 C 185 260 168 246 156 236"
            stroke="url(#exactOmHighlight)"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />

          {/* Right Upward Sweeping Tail */}
          <path
            d="M 276 184 C 310 170 354 186 358 226 C 362 264 330 298 284 306 C 260 310 234 306 210 296 C 202 292 206 284 216 288 C 238 296 264 298 288 292 C 322 284 342 258 338 230 C 334 200 302 188 276 196 Z"
            fill="url(#exactOmGradient)"
          />
          {/* Right Tail Specular Ridge */}
          <path
            d="M 284 188 C 316 176 348 192 350 224 C 352 254 326 282 294 290"
            stroke="url(#exactOmHighlight)"
            strokeWidth="3.2"
            strokeLinecap="round"
            fill="none"
          />

          {/* Crescent Moon & Bindu atop Right Tail */}
          <path
            d="M 312 134 C 324 128 342 132 350 144 C 342 140 326 140 312 146 Z"
            fill="url(#exactOmGradient)"
          />
          <circle cx="338" cy="122" r="5.2" fill="url(#exactChandraGold)" />
          <circle cx="336.5" cy="120.5" r="1.6" fill="#FFFFFF" />
        </g>

        {/* LAYER 4: 3D Modern Real Estate Skyscrapers */}
        <g id="skyscrapers-exact">
          {/* Left Building */}
          <polygon points="214,264 214,212 230,198 230,264" fill="url(#exactTowerLeft)" />
          <polygon points="230,264 230,198 236,202 236,264" fill="url(#exactTowerCenter)" />
          <polygon points="214,212 226,196 236,202 230,198" fill="#FEF08A" opacity="0.9" />
          <line x1="216" y1="226" x2="228" y2="216" stroke="#FFFBEB" strokeWidth="0.8" opacity="0.6" />
          <line x1="216" y1="241" x2="228" y2="231" stroke="#FFFBEB" strokeWidth="0.8" opacity="0.6" />

          {/* Center Main High-Rise (Tallest with Angled Penthouse) */}
          <polygon points="238,264 238,176 258,154 258,264" fill="url(#exactTowerLeft)" />
          <polygon points="258,264 258,154 274,164 274,264" fill="url(#exactTowerCenter)" />
          <polygon points="238,176 252,150 274,164 258,154" fill="#FFFDF5" opacity="0.95" />
          {/* Glass Mullions */}
          <line x1="245" y1="184" x2="245" y2="264" stroke="#FDE68A" strokeWidth="1.2" opacity="0.75" />
          <line x1="252" y1="174" x2="252" y2="264" stroke="#FEF08A" strokeWidth="1.2" opacity="0.85" />
          <line x1="264" y1="171" x2="264" y2="264" stroke="#FFFFFF" strokeWidth="1.4" opacity="0.9" />
          <line x1="270" y1="176" x2="270" y2="264" stroke="#FDE68A" strokeWidth="1" opacity="0.75" />

          {/* Right Building */}
          <polygon points="276,264 276,206 292,192 292,264" fill="url(#exactTowerLeft)" />
          <polygon points="292,264 292,192 298,196 298,264" fill="url(#exactTowerRight)" />
          <polygon points="276,206 286,188 298,196 292,192" fill="#FEF08A" opacity="0.9" />
          <line x1="278" y1="221" x2="290" y2="212" stroke="#FEF08A" strokeWidth="0.8" opacity="0.6" />
        </g>

        {/* LAYER 5: 3D Sweeping Golden Foundation Wave Ribbon */}
        <g id="wave-exact">
          <path
            d="M 130 268 C 185 260 220 252 260 272 C 300 290 345 284 400 260 C 370 278 320 296 265 282 C 220 270 180 274 130 268 Z"
            fill="#78350F"
            opacity="0.6"
          />
          <path
            d="M 135 266 C 190 258 225 250 260 270 C 300 288 345 282 395 258 C 368 274 322 292 265 278 C 222 266 185 272 135 266 Z"
            fill="url(#exactWaveGold)"
          />
          <path
            d="M 145 264 C 195 256 228 251 262 268 C 298 284 340 278 388 256"
            stroke="#FFFDF5"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="none"
            opacity="0.95"
          />
        </g>
      </g>
    </svg>
  );

  // 1. Mark only (Favicons, compact badges, mobile headers)
  if (variant === 'mark-only') {
    const dim = size === 'sm' ? 38 : size === 'lg' ? 72 : size === 'xl' ? 104 : 52;
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <MasterEmblem width={dim * 1.33} height={dim} />
      </div>
    );
  }

  // 2. Full official vertical lockup (1:1 identical to the user's uploaded master artwork)
  if (variant === 'vertical' || variant === 'full') {
    const scale = size === 'xs' ? 0.35 : size === 'sm' ? 0.65 : size === 'lg' ? 1.25 : size === 'xl' ? 1.5 : 1;
    const isHeaderXs = size === 'xs';

    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <MasterEmblem 
          width={isHeaderXs ? 78 : 280 * scale} 
          height={isHeaderXs ? 56 : 205 * scale} 
        />

        {/* Primary Logotype: BABA in Onyx, BAIDYANATH in Molten Gold Gradient */}
        <div
          className="font-serif font-bold tracking-[0.22em] text-center uppercase"
          style={{
            fontSize: isHeaderXs ? '10px' : `${32 * scale}px`,
            letterSpacing: '0.22em',
            marginRight: '-0.22em',
            lineHeight: 1.15,
            marginTop: isHeaderXs ? '2px' : `${6 * scale}px`,
          }}
        >
          <span
            className={
              isLightSurface
                ? 'text-[#111111] drop-shadow-[0_1px_2px_rgba(0,0,0,0.12)]'
                : 'text-[#FAF8F5] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]'
            }
          >
            BABA{' '}
          </span>
          <span className="bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,158,11,0.5)]">
            BAIDYANATH
          </span>
        </div>

        {/* Clean Golden Rule Lines Framing REAL ESTATE PRIVATE LIMITED (Exact as in photo) */}
        <div
          className="flex items-center justify-center gap-2 w-full max-w-[420px] mx-auto"
          style={{ 
            marginTop: isHeaderXs ? '2px' : `${10 * scale}px`,
            maxWidth: isHeaderXs ? '145px' : `${420 * scale}px`
          }}
        >
          <span className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#DC2626] to-[#F59E0B]" />
          <span
            className={`font-serif uppercase tracking-[0.24em] whitespace-nowrap font-medium ${
              isLightSurface ? 'text-[#3E3A37]' : 'text-[#E7E5E4]'
            }`}
            style={{
              fontSize: isHeaderXs ? '5.5px' : `${10.5 * scale}px`,
              letterSpacing: '0.24em',
              marginRight: '-0.24em',
            }}
          >
            REAL ESTATE PRIVATE LIMITED
          </span>
          <span className="h-[1px] flex-1 bg-gradient-to-r from-[#F59E0B] via-[#DC2626] to-transparent" />
        </div>
      </div>
    );
  }

  // 3. Hero variant (Display Crest with Divine Radial Backlight)
  if (variant === 'hero') {
    return (
      <div className={`flex flex-col items-center text-center select-none ${className}`}>
        <div className="relative group">
          <div className="absolute -inset-10 bg-gradient-to-r from-[#DC2626]/25 via-[#F59E0B]/40 to-[#DC2626]/25 rounded-full blur-3xl opacity-80 pointer-events-none" />
          <MasterEmblem width={240} height={175} />
        </div>

        <div className="mt-2">
          <div
            className={`font-serif font-bold tracking-[0.24em] uppercase text-2xl sm:text-3xl md:text-4xl ${
              isLightSurface ? 'drop-shadow-none' : 'drop-shadow-[0_4px_16px_rgba(0,0,0,0.9)]'
            }`}
            style={{ marginRight: '-0.24em' }}
          >
            <span className={isLightSurface ? 'text-[#111111]' : 'text-[#FAF8F5]'}>BABA </span>
            <span className="bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A] bg-clip-text text-transparent drop-shadow-[0_2px_12px_rgba(245,158,11,0.5)]">
              BAIDYANATH
            </span>
          </div>

          <div className="flex items-center justify-center gap-3 mt-2.5 max-w-sm sm:max-w-md mx-auto">
            <span className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#DC2626] to-[#F59E0B]" />
            <span
              className={`font-serif text-[10px] sm:text-[11px] tracking-[0.28em] uppercase font-medium whitespace-nowrap ${
                isLightSurface ? 'text-[#3E3A37]' : 'text-[#E7E5E4]'
              }`}
              style={{ marginRight: '-0.28em' }}
            >
              REAL ESTATE PRIVATE LIMITED
            </span>
            <span className="h-[1.5px] flex-1 bg-gradient-to-r from-[#F59E0B] via-[#DC2626] to-transparent" />
          </div>
        </div>
      </div>
    );
  }

  // 4. Horizontal variant (Optimized for Header / Navbar with exact typography & 3D emblem)
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  return (
    <div className={`inline-flex items-center gap-2.5 sm:gap-3.5 select-none text-left ${className}`}>
      <div className="shrink-0">
        <MasterEmblem
          width={isSm ? 54 : isLg ? 88 : 70}
          height={isSm ? 40 : isLg ? 64 : 52}
          showAura={!isSm}
        />
      </div>
      <div className="flex flex-col justify-center">
        <div
          className={`font-serif font-bold tracking-[0.22em] uppercase leading-none ${
            isSm ? 'text-xs' : isLg ? 'text-lg sm:text-xl' : 'text-sm sm:text-base'
          }`}
          style={{ marginRight: '-0.22em' }}
        >
          <span
            className={
              isLightSurface
                ? 'text-[#111111]'
                : 'text-[#FAF8F5] drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]'
            }
          >
            BABA{' '}
          </span>
          <span className="bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A] bg-clip-text text-transparent drop-shadow-[0_1px_6px_rgba(245,158,11,0.4)]">
            BAIDYANATH
          </span>
        </div>

        <div className="flex items-center gap-1.5 mt-1 sm:mt-1.5">
          <span className="h-[1px] w-3 sm:w-4 bg-gradient-to-r from-transparent to-[#F59E0B] opacity-90" />
          <span
            className={`font-serif tracking-[0.24em] uppercase font-medium leading-none ${
              isLightSurface ? 'text-[#78716C]' : 'text-[#D6D3D1]'
            } ${isSm ? 'text-[7px]' : 'text-[8px] sm:text-[9.5px]'}`}
            style={{ marginRight: '-0.24em' }}
          >
            REAL ESTATE PRIVATE LIMITED
          </span>
          <span className="h-[1px] w-3 sm:w-4 bg-gradient-to-r from-[#F59E0B] to-transparent opacity-90" />
        </div>
      </div>
    </div>
  );
};
