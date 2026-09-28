import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface StaggeredFadeProps {
  text: string;
  className?: string;
  baseDelay?: number;
}

export const StaggeredFade: React.FC<StaggeredFadeProps> = ({
  text = '',
  className = '',
  baseDelay = 0,
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  const characters = Array.from(text || '');

  return (
    <span ref={ref} className={`inline-block ${className}`}>
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{
            duration: 0.5,
            delay: baseDelay + index * 0.07,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );
};
