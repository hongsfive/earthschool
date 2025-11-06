'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { viewportOnce } from '@/lib/animation.config';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface StaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

/**
 * Stagger 애니메이션 컴포넌트
 * 자식 요소들이 순차적으로 나타남
 */
export const Stagger = ({ 
  children, 
  staggerDelay = 0.1,
  className = '' 
}: StaggerProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Stagger의 자식 아이템 컴포넌트
 */
export const StaggerItem = ({ 
  children, 
  className = '' 
}: { 
  children: ReactNode; 
  className?: string;
}) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.42, 0, 0.58, 1] as const,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};




