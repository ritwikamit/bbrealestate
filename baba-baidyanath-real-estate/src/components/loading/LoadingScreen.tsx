import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CompanyLogo } from '../common/CompanyLogo';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            onComplete?.();
          }, 350);
          return 100;
        }
        const increment = Math.floor(Math.random() * 18) + 12;
        return Math.min(prev + increment, 100);
      });
    }, 90);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="minimalist-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#0C0A09] via-[#050505] to-[#000000] px-6 select-none"
        >
          {/* Subtle Ambient Golden Radial Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-gradient-to-tr from-[#991B1B]/25 via-[#F59E0B]/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

          {/* Minimalist Centered Container */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center text-center max-w-lg w-full px-4"
          >
            {/* Master Company Logo Lockup (with luminous contour glow for dark theme) */}
            <div className="mb-10 sm:mb-12 w-full flex justify-center relative">
              <CompanyLogo
                variant="hero"
                size="2xl"
                theme="dark"
                glow={true}
                className="transform scale-110 sm:scale-125 transition-transform duration-500"
              />
            </div>

            {/* Ultra-Minimal Hairline Progress Bar */}
            <div className="w-56 sm:w-64 h-[2.5px] bg-stone-800 border border-white/10 rounded-full overflow-hidden relative shadow-inner">
              <motion.div
                className="h-full bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A] shadow-[0_0_12px_rgba(245,158,11,0.7)]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Minimalist Tracking Text */}
            <div className="mt-4 flex items-center justify-between w-56 sm:w-64 text-[10px] font-mono tracking-[0.24em] uppercase text-stone-400 font-semibold">
              <span>INITIALIZING</span>
              <span className="text-[#F59E0B] font-extrabold drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
