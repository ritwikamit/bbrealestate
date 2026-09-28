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
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#070605] px-6 select-none"
        >
          {/* Subtle Ambient Golden Radial Halo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] bg-gradient-to-tr from-[#991B1B]/18 via-[#F59E0B]/22 to-transparent rounded-full blur-[100px] pointer-events-none" />

          {/* Minimalist Centered Container */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center text-center max-w-lg w-full px-4"
          >
            {/* Master Company Logo Lockup (Big & Grand) */}
            <div className="mb-10 sm:mb-12 w-full flex justify-center">
              <CompanyLogo
                variant="hero"
                size="2xl"
                className="drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)] transform scale-110 sm:scale-125 transition-transform duration-500"
              />
            </div>

            {/* Ultra-Minimal Hairline Progress Bar */}
            <div className="w-56 sm:w-64 h-[2px] bg-white/[0.1] rounded-full overflow-hidden relative shadow-[0_0_12px_rgba(245,158,11,0.2)]">
              <motion.div
                className="h-full bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Minimalist Tracking Text */}
            <div className="mt-4 flex items-center justify-between w-56 sm:w-64 text-[10px] font-mono tracking-[0.24em] uppercase text-stone-400">
              <span>INITIALIZING</span>
              <span className="text-[#FDE68A] font-semibold">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
