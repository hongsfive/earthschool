'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { animations, viewportOnce } from '@/lib/animation.config';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * 기본 Fade In 애니메이션 컴포넌트
 * 스크롤 시 서서히 나타남 (한 번만)
 */
export const FadeIn = ({ 
  children, 
  delay = 0, 
  duration,
  className = '' 
}: FadeInProps) => {
  const prefersReducedMotion = useReducedMotion();

  // 애니메이션 감소 설정 시 즉시 표시
  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={animations.fadeIn.initial}
      whileInView={animations.fadeIn.animate}
      viewport={viewportOnce}
      transition={{
        ...animations.fadeIn.transition,
        delay,
        duration: duration || animations.fadeIn.transition.duration,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};




