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
            scale: 1.03,
            filter: 'blur(6px)',
            transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-gradient-to-br from-[#0C0A09] via-[#050505] to-[#000000] px-6 select-none"
        >
          {/* Subtle Ambient Golden Radial Halo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-gradient-to-tr from-[#991B1B]/25 via-[#F59E0B]/22 to-transparent rounded-full blur-[130px] pointer-events-none"
          />

          {/* Minimalist Centered Container */}
          <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full px-4">
            
            {/* Step 1: Master Company Logo appears fully first */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 15 }}
              animate={logoReady ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 sm:mb-12 w-full flex justify-center relative"
            >
              <CompanyLogo
                variant="hero"
                size="2xl"
                theme="dark"
                glow={true}
                className="transform scale-110 sm:scale-125 transition-transform duration-500"
              />
            </motion.div>

            {/* Step 2: Hairline Progress Bar appears then smoothly loads the page */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={phase === 'loading' || phase === 'complete' ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="w-full flex flex-col items-center"
            >
              {/* Ultra-Minimal Hairline Progress Bar */}
              <div className="w-60 sm:w-72 h-[2.5px] bg-stone-800/90 border border-white/10 rounded-full overflow-hidden relative shadow-inner">
                <motion.div
                  className="h-full bg-gradient-to-r from-[#9A6F20] via-[#C59B27] to-[#E7C973] shadow-[0_0_14px_rgba(197,155,39,0.8)]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: 'easeOut', duration: 0.2 }}
                />
              </div>

              {/* Minimalist Tracking Text & Status */}
              <div className="mt-4 flex items-center justify-between w-60 sm:w-72 text-[9.5px] sm:text-[10px] font-mono tracking-[0.22em] uppercase text-stone-400 font-semibold">
                <span className="truncate pr-2">{getStatusText(progress)}</span>
                <span className="text-[#E7C973] font-bold shrink-0">
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

