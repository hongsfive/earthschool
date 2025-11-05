'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { animations, viewportOnce } from '@/lib/animation.config';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface SlideInProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * Slide In 애니메이션 컴포넌트
 * 지정된 방향에서 슬라이드하며 나타남
 */
export const SlideIn = ({ 
  children, 
  direction = 'up',
  delay = 0,
  duration,
  className = '' 
}: SlideInProps) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  // 방향에 따라 애니메이션 선택
  const getAnimation = () => {
    switch (direction) {
      case 'up':
        return animations.slideInUp;
      case 'left':
        return animations.slideInLeft;
      case 'right':
        return animations.slideInRight;
      case 'down':
        return {
          initial: { opacity: 0, y: -30 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -30 },
          transition: { duration: 0.6, ease: 'easeOut' },
        };
      default:
        return animations.slideInUp;
    }
  };

  const animation = getAnimation();

  return (
    <motion.div
      initial={animation.initial}
      whileInView={animation.animate}
      viewport={viewportOnce}
      transition={{
        ...animation.transition,
        delay,
        duration: duration || animation.transition.duration,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};




