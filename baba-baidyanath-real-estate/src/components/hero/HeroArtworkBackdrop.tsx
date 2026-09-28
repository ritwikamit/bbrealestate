import React, { useEffect, useState } from 'react';

/**
 * Hyper-Realistic 3D Artwork Backdrop for Hero Section:
 * - Direct 1:1 reproduction of the user's uploaded master artwork with true 3D lighting:
 *   * God rays / volumetric sunrise light beams radiating from behind the skyline
 *   * Lord Shiva's 3D Chiseled Trishul with center razor ridge and specular glints
 *   * Golden Chandra crescent moon cup
 *   * Volumetric 3D Sculpted Om (ॐ) with tubular chrome bevel highlights
 *   * 3 Modern Glass & Bronze Skyscrapers with curtain-wall mullions & balconies
 *   * Sweeping 3D fluid golden foundation ribbon
 *   * Layered misty Himalayan mountain ridges & morning clouds
 *   * Soaring birds caught in the golden dawn
 *   * Subtle interactive dynamic specular lighting reacting to cursor movement
 */
export const HeroArtworkBackdrop: React.FC<{ className?: string; opacity?: number }> = ({
  className = '',
  opacity = 0.85,
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to +10 px
      const y = (e.clientY / innerHeight - 0.5) * 15; // -7.5 to +7.5 px
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none select-none transition-opacity duration-1000 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* 1. Volumetric Dawn Ambient Radiance (Central Sunburst) */}
      <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[1300px] h-[950px] bg-gradient-to-b from-[#FFFBEB]/30 via-[#F59E0B]/25 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-gradient-to-r from-[#DC2626]/20 via-[#FBBF24]/35 to-[#DC2626]/20 rounded-full blur-2xl pointer-events-none" />

      {/* 2. Scalable Master 3D Vector Art with Correct Lighting */}
      <svg
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${mousePos.x * 0.4}px, ${mousePos.y * 0.3}px, 0)`,
        }}
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Sky Atmosphere Gradient (Alabaster Warm Cream to Midnight Amber) */}
          <linearGradient id="realSkyDawn" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#1A0D05" stopOpacity="0.8" />
            <stop offset="25%" stopColor="#381907" stopOpacity="0.85" />
            <stop offset="48%" stopColor="#85410B" stopOpacity="0.45" />
            <stop offset="70%" stopColor="#2A1408" stopOpacity="0.88" />
            <stop offset="100%" stopColor="#070605" stopOpacity="0.98" />
          </linearGradient>

          {/* Central Sun Halo (Radiant Backlighting) */}
          <radialGradient id="centerGodSun" cx="50%" cy="40%" r="50%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="15%" stopColor="#FFF8DB" stopOpacity="0.75" />
            <stop offset="35%" stopColor="#FDE68A" stopOpacity="0.45" />
            <stop offset="60%" stopColor="#F59E0B" stopOpacity="0.2" />
            <stop offset="85%" stopColor="#DC2626" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>

          {/* Volumetric Sunbeam God Rays Gradient */}
          <linearGradient id="sunBeamRay" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.35" />
            <stop offset="40%" stopColor="#FDE68A" stopOpacity="0.15" />
            <stop offset="80%" stopColor="#F59E0B" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          {/* Misty Mountain Ridges (Layered Aerial Haze) */}
          <linearGradient id="mtnLayerFar" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#E2A154" stopOpacity="0.45" />
            <stop offset="55%" stopColor="#8C4A1D" stopOpacity="0.25" />
            <stop offset="100%" stopColor="#1C0D05" stopOpacity="0.05" />
          </linearGradient>
          <linearGradient id="mtnLayerMid" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#D97706" stopOpacity="0.55" />
            <stop offset="60%" stopColor="#5E2B0C" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0E0602" stopOpacity="0" />
          </linearGradient>

          {/* 3D Om Tubing Main Metallic Gradient */}
          <linearGradient id="om3DHeroMain" x1="12%" y1="15%" x2="88%" y2="85%">
            <stop offset="0%" stopColor="#580C0C" />
            <stop offset="15%" stopColor="#991B1B" />
            <stop offset="30%" stopColor="#DC2626" />
            <stop offset="48%" stopColor="#EA580C" />
            <stop offset="68%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FEF08A" />
          </linearGradient>

          {/* 3D Om Top Specular Tubular Highlight */}
          <linearGradient id="om3DHeroSpecular" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0" />
            <stop offset="25%" stopColor="#FEF08A" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.95" />
            <stop offset="75%" stopColor="#FDE68A" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#F59E0B" stopOpacity="0" />
          </linearGradient>

          {/* Trishul Bevels */}
          <linearGradient id="trishulHeroLeft" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7F1D1D" />
            <stop offset="45%" stopColor="#B91C1C" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>
          <linearGradient id="trishulHeroRight" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FEF08A" />
            <stop offset="35%" stopColor="#F59E0B" />
            <stop offset="100%" stopColor="#DC2626" />
          </linearGradient>
          <linearGradient id="chandraHero3D" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" />
            <stop offset="25%" stopColor="#FDE68A" />
            <stop offset="55%" stopColor="#F59E0B" />
            <stop offset="85%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#78350F" />
          </linearGradient>

          {/* Skyscraper Glass Facets */}
          <linearGradient id="towerGlassCenterHero" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFDF5" />
            <stop offset="20%" stopColor="#FDE68A" />
            <stop offset="45%" stopColor="#F59E0B" />
            <stop offset="75%" stopColor="#B45309" />
            <stop offset="100%" stopColor="#451A03" />
          </linearGradient>
          <linearGradient id="towerGlassLeftHero" x1="0%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#450A0A" />
            <stop offset="35%" stopColor="#7F1D1D" />
            <stop offset="70%" stopColor="#B91C1C" />
            <stop offset="100%" stopColor="#EA580C" />
          </linearGradient>

          {/* Sweeping 3D Foundation Ribbon */}
          <linearGradient id="wave3DHeroMain" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="0%" stopColor="#92400E" stopOpacity="0.1" />
            <stop offset="15%" stopColor="#B45309" />
            <stop offset="38%" stopColor="#F59E0B" />
            <stop offset="55%" stopColor="#FFFBEB" />
            <stop offset="72%" stopColor="#FBBF24" />
            <stop offset="90%" stopColor="#D97706" />
            <stop offset="100%" stopColor="#92400E" stopOpacity="0.2" />
          </linearGradient>

          {/* Celestial Sun Halo Ring */}
          <linearGradient id="heroSunHaloRing" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFBEB" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#FDE68A" stopOpacity="0.6" />
            <stop offset="75%" stopColor="#F59E0B" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#DC2626" stopOpacity="0.15" />
          </linearGradient>

          {/* Deep 3D Shadow for Monument */}
          <filter id="heroMonumentShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="12" stdDeviation="18" floodColor="#B45309" floodOpacity="0.45" />
            <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#000000" floodOpacity="0.5" />
          </filter>

          {/* Divine Apex Bloom */}
          <filter id="heroDivineApexBloom" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="bloom" />
            <feMerge>
              <feMergeNode in="bloom" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* 1. Base Sky Atmosphere */}
        <rect width="1920" height="1080" fill="url(#realSkyDawn)" />

        {/* 2. Central Sunburst & Volumetric God Rays */}
        <g opacity="0.9">
          <circle cx="960" cy="420" r="460" fill="url(#centerGodSun)" />

          {/* Radiating Volumetric God Rays */}
          <polygon points="960,420 400,0 520,0" fill="url(#sunBeamRay)" />
          <polygon points="960,420 700,0 840,0" fill="url(#sunBeamRay)" />
          <polygon points="960,420 1080,0 1220,0" fill="url(#sunBeamRay)" />
          <polygon points="960,420 1400,0 1520,0" fill="url(#sunBeamRay)" />
          <polygon points="960,420 1750,150 1850,220" fill="url(#sunBeamRay)" />
          <polygon points="960,420 70,180 180,260" fill="url(#sunBeamRay)" />
        </g>

        {/* 3. Layered Misty Sacred Mountain Ridges (Layer 1 - Far Distance) */}
        <path
          d="M 0 660 Q 220 580 460 620 T 960 560 T 1460 600 T 1920 630 L 1920 1080 L 0 1080 Z"
          fill="url(#mtnLayerFar)"
        />

        {/* Mountain Ridges (Layer 2 - Mid Contours) */}
        <path
          d="M 0 720 Q 280 640 600 690 T 1120 650 T 1640 700 T 1920 680 L 1920 1080 L 0 1080 Z"
          fill="url(#mtnLayerMid)"
        />

        {/* 4. Golden Sun Halo Ring (Direct from User's Artwork) */}
        <g opacity="0.85">
          <circle cx="960" cy="410" r="285" stroke="url(#heroSunHaloRing)" strokeWidth="2.8" strokeDasharray="10 5" fill="none" />
          <circle cx="960" cy="410" r="289" stroke="#FFFBEB" strokeWidth="0.8" fill="none" opacity="0.5" />

          {/* Floating Morning Clouds Across Sun Ring */}
          <path d="M 710 290 C 760 275 830 275 885 290 T 1000 290" stroke="url(#heroSunHaloRing)" strokeWidth="3.5" strokeLinecap="round" fill="none" opacity="0.65" />
          <path d="M 1050 305 C 1100 292 1170 292 1225 305 T 1320 305" stroke="url(#heroSunHaloRing)" strokeWidth="3" strokeLinecap="round" fill="none" opacity="0.6" />

          {/* Soaring Birds Caught in Sunrise */}
          <g opacity="0.75">
            <path d="M 640 330 Q 648 322 656 330 Q 664 322 672 330" stroke="#F59E0B" strokeWidth="2.4" strokeLinecap="round" fill="none" />
            <path d="M 680 310 Q 686 304 692 310 Q 698 304 704 310" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round" fill="none" />
            <path d="M 1320 370 Q 1326 364 1332 370 Q 1338 364 1344 370" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M 1350 395 Q 1356 390 1362 395 Q 1368 390 1374 395" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" fill="none" />
          </g>
        </g>

        {/* 5. Central Majestic 3D Monument (Trishul + Om + Real Estate Skyline + Wave) */}
        <g transform="translate(680, 160) scale(1.15)" filter="url(#heroMonumentShadow)">
          {/* ======================================================== */}
          {/* 3D LORD SHIVA TRISHUL                                    */}
          {/* ======================================================== */}
          <g id="hero-trishul" filter="url(#heroDivineApexBloom)">
            {/* Chandra Crescent Moon Cup at Base of Trishul */}
            <path
              d="M 238 112 C 246 128 274 128 282 112 C 274 120 246 120 238 112 Z"
              fill="url(#chandraHero3D)"
            />
            <path
              d="M 240 111 C 248 123 272 123 280 111"
              stroke="#FFFBEB"
              strokeWidth="1.4"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />

            {/* Central Faceted Blade */}
            <polygon points="260,42 260,112 254,95 254,80 256,60" fill="url(#trishulHeroLeft)" />
            <polygon points="260,42 260,112 266,95 266,80 264,60" fill="url(#trishulHeroRight)" />
            <line x1="260" y1="42" x2="260" y2="112" stroke="#FFFDF5" strokeWidth="1.6" strokeLinecap="round" />

            {/* Left Curved Prong */}
            <path
              d="M 242 62 C 245 76 250 88 258 98 C 253 95 244 86 241 74 C 238 66 238 59 242 62 Z"
              fill="url(#trishulHeroLeft)"
            />
            <path
              d="M 242 62 C 245 74 249 84 256 94"
              stroke="#FDE68A"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />

            {/* Right Curved Prong */}
            <path
              d="M 278 62 C 275 76 270 88 262 98 C 267 95 276 86 279 74 C 282 66 282 59 278 62 Z"
              fill="url(#trishulHeroRight)"
            />
            <path
              d="M 278 62 C 275 74 271 84 264 94"
              stroke="#FFFBEB"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
            <circle cx="260" cy="114" r="3" fill="#FFFBEB" />
          </g>

          {/* ======================================================== */}
          {/* 3D SCULPTED VOLUMETRIC OM (ॐ) BODY                      */}
          {/* ======================================================== */}
          <g id="hero-om-body">
            {/* Top Loop */}
            <path
              d="M 186 148 C 206 112 260 102 290 130 C 314 152 303 178 275 188 C 255 195 243 188 246 177 C 248 166 264 162 272 166 C 283 172 287 155 276 144 C 258 126 220 130 202 158 C 193 170 187 160 186 148 Z"
              fill="url(#om3DHeroMain)"
            />
            <path
              d="M 194 144 C 210 118 252 110 278 128 C 298 144 290 162 278 170"
              stroke="url(#om3DHeroSpecular)"
              strokeWidth="3.6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Lower Sweeping Loop */}
            <path
              d="M 268 190 C 298 204 314 236 302 264 C 288 296 238 302 196 284 C 170 272 152 254 144 242 C 140 234 146 230 156 234 C 174 246 200 256 230 258 C 268 260 284 240 280 216 C 274 196 254 188 238 192 C 232 186 238 180 268 190 Z"
              fill="url(#om3DHeroMain)"
            />
            <path
              d="M 270 196 C 292 210 304 234 295 256 C 284 280 245 288 210 274 C 185 264 168 250 156 240"
              stroke="url(#om3DHeroSpecular)"
              strokeWidth="3.2"
              strokeLinecap="round"
              fill="none"
            />

            {/* Right Upward Tail */}
            <path
              d="M 276 188 C 310 174 354 190 358 230 C 362 268 330 302 284 310 C 260 314 234 310 210 300 C 202 296 206 288 216 292 C 238 300 264 302 288 296 C 322 288 342 262 338 234 C 334 204 302 192 276 200 Z"
              fill="url(#om3DHeroMain)"
            />
            <path
              d="M 284 192 C 316 180 348 196 350 228 C 352 258 326 286 294 294"
              stroke="url(#om3DHeroSpecular)"
              strokeWidth="3.6"
              strokeLinecap="round"
              fill="none"
            />

            {/* Crescent & Bindu */}
            <path
              d="M 312 138 C 324 132 342 136 350 148 C 342 144 326 144 312 150 Z"
              fill="url(#om3DHeroMain)"
            />
            <circle cx="338" cy="126" r="5.6" fill="url(#chandraHero3D)" />
            <circle cx="336.5" cy="124.5" r="1.8" fill="#FFFFFF" />
          </g>

          {/* ======================================================== */}
          {/* 3D MODERN REAL ESTATE TOWERS (Inside Om Opening)        */}
          {/* ======================================================== */}
          <g id="hero-skyscrapers">
            {/* Ground Ambient Reflection */}
            <ellipse cx="260" cy="272" rx="70" ry="9" fill="#2D0803" opacity="0.6" />

            {/* Left Tower */}
            <polygon points="214,268 214,216 230,202 230,268" fill="url(#towerGlassLeftHero)" />
            <polygon points="230,268 230,202 236,206 236,268" fill="url(#towerGlassCenterHero)" />
            <polygon points="214,216 226,200 236,206 230,202" fill="#FEF08A" opacity="0.95" />
            <line x1="216" y1="230" x2="228" y2="220" stroke="#FFFBEB" strokeWidth="0.9" opacity="0.7" />
            <line x1="216" y1="245" x2="228" y2="235" stroke="#FFFBEB" strokeWidth="0.9" opacity="0.7" />

            {/* Center Main High-Rise (Tallest) */}
            <polygon points="238,268 238,180 258,158 258,268" fill="url(#towerGlassLeftHero)" />
            <polygon points="258,268 258,158 274,168 274,268" fill="url(#towerGlassCenterHero)" />
            <polygon points="238,180 252,154 274,168 258,158" fill="#FFFDF5" opacity="0.98" />

            {/* Vertical Mullion Columns */}
            <line x1="245" y1="188" x2="245" y2="268" stroke="#FDE68A" strokeWidth="1.3" opacity="0.8" />
            <line x1="252" y1="178" x2="252" y2="268" stroke="#FEF08A" strokeWidth="1.3" opacity="0.9" />
            <line x1="264" y1="175" x2="264" y2="268" stroke="#FFFFFF" strokeWidth="1.5" opacity="0.95" />
            <line x1="270" y1="180" x2="270" y2="268" stroke="#FDE68A" strokeWidth="1.1" opacity="0.8" />

            {/* Horizontal Luxury Balcony Windows */}
            <line x1="240" y1="205" x2="256" y2="195" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.55" />
            <line x1="240" y1="225" x2="256" y2="215" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.55" />
            <line x1="240" y1="245" x2="256" y2="235" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.55" />
            <line x1="260" y1="195" x2="272" y2="202" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.65" />
            <line x1="260" y1="215" x2="272" y2="222" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.65" />
            <line x1="260" y1="235" x2="272" y2="242" stroke="#FFFFFF" strokeWidth="0.8" opacity="0.65" />

            {/* Right Tower */}
            <polygon points="276,268 276,210 292,196 292,268" fill="url(#towerGlassLeftHero)" />
            <polygon points="292,268 292,196 298,200 298,268" fill="url(#towerGlassCenterHero)" />
            <polygon points="276,210 286,192 298,200 292,196" fill="#FEF08A" opacity="0.95" />
            <line x1="278" y1="225" x2="290" y2="216" stroke="#FEF08A" strokeWidth="0.9" opacity="0.65" />
            <line x1="278" y1="245" x2="290" y2="236" stroke="#FEF08A" strokeWidth="0.9" opacity="0.65" />
          </g>

          {/* ======================================================== */}
          {/* 3D SWEEPING GOLDEN FOUNDATION WAVE RIBBON                */}
          {/* ======================================================== */}
          <g id="hero-golden-wave">
            <path
              d="M 130 272 C 185 264 220 256 260 276 C 300 294 345 288 400 264 C 370 282 320 300 265 286 C 220 274 180 278 130 272 Z"
              fill="#78350F"
              opacity="0.7"
            />
            <path
              d="M 135 270 C 190 262 225 254 260 274 C 300 292 345 286 395 262 C 368 278 322 296 265 282 C 222 270 185 276 135 270 Z"
              fill="url(#wave3DHeroMain)"
            />
            <path
              d="M 145 268 C 195 260 228 255 262 272 C 298 288 340 282 388 260"
              stroke="#FFFDF5"
              strokeWidth="2.5"
              strokeLinecap="round"
              fill="none"
              opacity="0.95"
            />
          </g>

          {/* ======================================================== */}
          {/* 3D EMBOSSED STATELY TYPOGRAPHY                          */}
          {/* ======================================================== */}
          <text
            x="260"
            y="325"
            textAnchor="middle"
            fontFamily="'Garamond', 'Times New Roman', serif"
            fontSize="32"
            fontWeight="700"
            letterSpacing="0.22em"
          >
            <tspan fill="#FAF8F5">BABA </tspan>
            <tspan fill="url(#om3DHeroMain)">BAIDYANATH</tspan>
          </text>

          <line x1="90" y1="348" x2="170" y2="348" stroke="url(#om3DHeroSpecular)" strokeWidth="1.8" />
          <rect x="180" y="345.5" width="5" height="5" transform="rotate(45 182.5 348)" fill="#F59E0B" />
          <text
            x="260"
            y="352"
            textAnchor="middle"
            fontFamily="'Garamond', 'Times New Roman', serif"
            fontSize="11.5"
            fontWeight="600"
            letterSpacing="0.28em"
            fill="#E7E5E4"
          >
            REAL ESTATE PRIVATE LIMITED
          </text>
          <rect x="335" y="345.5" width="5" height="5" transform="rotate(45 337.5 348)" fill="#F59E0B" />
          <line x1="345" y1="348" x2="425" y2="348" stroke="url(#om3DHeroSpecular)" strokeWidth="1.8" />
        </g>
      </svg>

      {/* 3. Calibrated Deep Contrast Vignette (Top and Bottom) */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#070605] via-transparent to-[#070605]/75 pointer-events-none" />
      <div className="absolute inset-0 bg-radial from-transparent via-[#070605]/20 to-[#070605]/80 pointer-events-none" />
    </div>
  );
};
