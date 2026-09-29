import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CompanyLogo } from '../common/CompanyLogo';
import logoImg from '../../assets/logo.png';

interface LoadingScreenProps {
  onComplete?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const skipLoading = typeof window !== 'undefined' && (window.location.search.includes('noload') || navigator.webdriver);
  if (skipLoading) return null;

  const [logoReady, setLogoReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<'logo' | 'loading' | 'complete'>('logo');
  const [isVisible, setIsVisible] = useState(true);

  // 1. Ensure the logo image is preloaded and fully decoded in memory before rendering
  useEffect(() => {
    const img = new Image();
    img.src = logoImg;

    const handleReady = () => {
      // Allow a brief moment for pristine frame rendering
      setTimeout(() => {
        setLogoReady(true);
      }, 150);
    };

    if (img.complete) {
      handleReady();
    } else {
      img.onload = handleReady;
      img.onerror = handleReady;
    }
  }, []);

  // 2. Phase 1: Logo appears fully first and holds the spotlight so every part is seen
  useEffect(() => {
    if (!logoReady) return;

    const startLoadingTimer = setTimeout(() => {
      setPhase('loading');
    }, 400);

    return () => clearTimeout(startLoadingTimer);
  }, [logoReady]);

  // 3. Phase 2: Then load the page with realistic smooth progress simulation
  useEffect(() => {
    if (phase !== 'loading') return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setPhase('complete');
          return 100;
        }
        const step = Math.floor(Math.random() * 20) + 15;
        return Math.min(prev + step, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [phase]);

  // 4. Phase 3: Once 100% loaded, hold briefly then smoothly transition to Home
  useEffect(() => {
    if (phase !== 'complete') return;

    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      onComplete?.();
    }, 250);

    return () => clearTimeout(exitTimer);
  }, [phase, onComplete]);

  // Dynamic institutional status messages during loading
  const getStatusText = (p: number) => {
    if (p < 30) return 'INITIALIZING ARCHITECTURAL ENGINE';
    if (p < 65) return 'VERIFYING ROC PATNA JURISDICTION';
    if (p < 90) return 'PREPARING EXECUTIVE INTERFACE';
    if (p < 100) return 'FINALIZING ENVIRONMENT';
    return 'WELCOME TO BABA BAIDYANATH';
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="master-loading-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-b from-[#FAF8F5] via-[#F5EFE6] to-[#EAE2D2] px-6 select-none"
        >
          {/* Minimalist Centered Container */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full px-4">
            
            {/* Master Company Logo - Crisp and naturally visible without glow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={logoReady ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="mb-8 sm:mb-10 w-full flex justify-center relative"
            >
              <CompanyLogo
                variant="horizontal"
                size="2xl"
                theme="light"
                glow={false}
                className="transform scale-100 sm:scale-110 transition-transform duration-300"
              />
            </motion.div>

            {/* Hairline Progress Bar */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={phase === 'loading' || phase === 'complete' ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="w-full flex flex-col items-center"
            >
              {/* Minimal Hairline Progress Bar */}
              <div className="w-56 sm:w-64 h-[2px] bg-[#E8E2D5] rounded-full overflow-hidden relative">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>

              {/* Minimal Tracking Text & Status */}
              <div className="mt-3 flex items-center justify-between w-56 sm:w-64 text-[10px] font-mono tracking-[0.2em] uppercase text-[#78716C] font-medium">
                <span className="truncate pr-2">{getStatusText(progress)}</span>
                <span className="text-[#9A6F20] font-bold shrink-0">
                  {progress}%
                </span>
              </div>
            </motion.div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

