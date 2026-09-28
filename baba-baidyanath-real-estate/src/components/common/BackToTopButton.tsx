import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.6, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 10 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          className="fixed z-40 bottom-20 right-4 sm:right-6 lg:bottom-8 lg:right-8 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0C0A09]/90 backdrop-blur-xl border border-[#F59E0B]/50 text-[#FDE68A] hover:text-[#0C0A09] hover:bg-gradient-to-r hover:from-[#B45309] hover:via-[#F59E0B] hover:to-[#D97706] shadow-[0_8px_24px_rgba(0,0,0,0.65),0_0_16px_rgba(245,158,11,0.25)] flex items-center justify-center cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F59E0B]"
          aria-label="Back to top"
          title="Back to top"
        >
          <ArrowUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
