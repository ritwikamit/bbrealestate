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
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-gradient-to-tr from-[#991B1B]/12 via-[#F59E0B]/15 to-transparent rounded-full blur-[80px] pointer-events-none" />

          {/* Minimalist Centered Container */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="relative z-10 flex flex-col items-center text-center max-w-sm w-full"
          >
            {/* Master Company Logo Lockup (Aligned as it is) */}
            <div className="mb-8">
              <CompanyLogo variant="full" size="md" />
            </div>

            {/* Ultra-Minimal Hairline Progress Bar */}
            <div className="w-48 h-[1.5px] bg-white/[0.08] rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-[#DC2626] via-[#F59E0B] to-[#FEF08A]"
                style={{ width: `${progress}%` }}
                transition={{ ease: 'linear' }}
              />
            </div>

            {/* Minimalist Tracking Text */}
            <div className="mt-4 flex items-center justify-between w-48 text-[9.5px] font-mono tracking-[0.22em] uppercase text-stone-500">
              <span>INITIALIZING</span>
              <span className="text-[#FDE68A]">{progress}%</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
