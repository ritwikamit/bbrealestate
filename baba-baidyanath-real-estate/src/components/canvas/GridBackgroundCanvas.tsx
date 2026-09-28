import React, { useEffect, useRef } from 'react';

interface GridBackgroundCanvasProps {
  currentTab?: string;
  className?: string;
}

/**
 * Architectural Luxury Grid Canvas for Light Theme Body:
 * - Razor-sharp High-DPI rendering (retina-ready)
 * - Distinct, elegant architectural intersection points (solid core + micro-halo)
 * - Smooth cubic Hermite fade from the left and right screen edges
 * - Warm golden-bronze aesthetic matching the brand palette
 * - Perfectly serene (no distracting mouse-tracking animation)
 */
export const GridBackgroundCanvas: React.FC<GridBackgroundCanvasProps> = ({ currentTab, className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;

    const render = () => {
      const parent = canvas.parentElement;
      const width = parent ? parent.clientWidth : window.innerWidth;
      const height = Math.max(parent ? parent.clientHeight : window.innerHeight, window.innerHeight);
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      // Set actual canvas pixels for sharp retina rendering
      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.save();
      ctx.scale(dpr, dpr);
      ctx.clearRect(0, 0, width, height);

      const GRID_SIZE = 52; // Golden architectural cell size
      const MARGIN_X = Math.max(48, width * 0.06); // Subtle 6% edge fade for wide visibility
      const MARGIN_Y = 40; // Soft fade at top/bottom

      // Offset grid so it centers nicely
      const offsetX = (width % GRID_SIZE) / 2;

      // 1. Draw Vertical Grid Lines
      let colIndex = 0;
      for (let x = offsetX; x <= width; x += GRID_SIZE, colIndex++) {
        const rawFadeX = Math.min(1, Math.max(0, Math.min(x / MARGIN_X, (width - x) / MARGIN_X)));
        // Smoothstep cubic curve: 3x^2 - 2x^3
        const fadeX = rawFadeX * rawFadeX * (3 - 2 * rawFadeX);
        if (fadeX <= 0.01) continue;

        const isMajor = colIndex % 4 === 0;
        const lineAlpha = (isMajor ? 0.24 : 0.16) * fadeX;
        ctx.beginPath();
        ctx.moveTo(Math.round(x) + 0.5, 0);
        ctx.lineTo(Math.round(x) + 0.5, height);
        ctx.strokeStyle = isMajor ? `rgba(180, 83, 9, ${lineAlpha})` : `rgba(194, 120, 3, ${lineAlpha})`;
        ctx.lineWidth = isMajor ? 0.55 : 0.35;
        ctx.stroke();
      }

      // 2. Draw Horizontal Grid Lines
      let rowIndex = 0;
      for (let y = 0; y <= height; y += GRID_SIZE, rowIndex++) {
        const rawFadeY = Math.min(1, Math.max(0, Math.min(y / MARGIN_Y, (height - y) / MARGIN_Y)));
        const fadeY = rawFadeY * rawFadeY * (3 - 2 * rawFadeY);
        const isMajor = rowIndex % 4 === 0;

        // Draw horizontal lines across segments to incorporate horizontal fadeX smoothly
        for (let x = offsetX; x < width; x += GRID_SIZE) {
          const nextX = Math.min(width, x + GRID_SIZE);
          const midX = (x + nextX) / 2;

          const rawFadeX = Math.min(1, Math.max(0, Math.min(midX / MARGIN_X, (width - midX) / MARGIN_X)));
          const fadeX = rawFadeX * rawFadeX * (3 - 2 * rawFadeX);
          if (fadeX <= 0.01) continue;

          const lineAlpha = (isMajor ? 0.24 : 0.16) * fadeX * fadeY;
          ctx.beginPath();
          ctx.moveTo(Math.round(x), Math.round(y) + 0.5);
          ctx.lineTo(Math.round(nextX), Math.round(y) + 0.5);
          ctx.strokeStyle = isMajor ? `rgba(180, 83, 9, ${lineAlpha})` : `rgba(194, 120, 3, ${lineAlpha})`;
          ctx.lineWidth = isMajor ? 0.55 : 0.35;
          ctx.stroke();
        }
      }

      // 3. Draw Delicate Thin Architectural Intersection Points (Nodes)
      for (let x = offsetX; x <= width; x += GRID_SIZE) {
        const rawFadeX = Math.min(1, Math.max(0, Math.min(x / MARGIN_X, (width - x) / MARGIN_X)));
        const fadeX = rawFadeX * rawFadeX * (3 - 2 * rawFadeX);
        if (fadeX <= 0.01) continue;

        for (let y = 0; y <= height; y += GRID_SIZE) {
          const rawFadeY = Math.min(1, Math.max(0, Math.min(y / MARGIN_Y, (height - y) / MARGIN_Y)));
          const fadeY = rawFadeY * rawFadeY * (3 - 2 * rawFadeY);
          const combinedFade = fadeX * fadeY;
          if (combinedFade <= 0.01) continue;

          const px = Math.round(x);
          const py = Math.round(y);

          // Thin micro outer halo ring at intersection
          ctx.beginPath();
          ctx.arc(px, py, 2.2, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(245, 158, 11, ${0.4 * combinedFade})`;
          ctx.lineWidth = 0.4;
          ctx.stroke();

          // Thin solid core intersection point
          ctx.beginPath();
          ctx.arc(px, py, 1.0, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(180, 83, 9, ${0.65 * combinedFade})`;
          ctx.fill();
        }
      }

      ctx.restore();
    };

    render();

    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Periodic check in case DOM height changes as elements mount
    const resizeObserver = new ResizeObserver(() => {
      render();
    });
    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [currentTab]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none z-0 filter blur-[0.75px] ${className}`}
      aria-hidden="true"
    />
  );
};
