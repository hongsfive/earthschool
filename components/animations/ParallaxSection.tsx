'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { ReactNode, useRef } from 'react';
import { useReducedMotion } from '@/hooks/useReducedMotion';

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number; // 0.5 = 느리게, 1.5 = 빠르게
  className?: string;
}

/**
 * 패럴랙스 스크롤 섹션
 * 배경이 스크롤보다 느리게 움직여 깊이감 표현
 * ⚠️ 모바일 성능을 위해 미묘하게 사용
 */
export const ParallaxSection = ({ 
  children, 
  speed = 0.5,
  className = '' 
}: ParallaxSectionProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // 스크롤에 따라 Y 위치 변경
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${(1 - speed) * 50}%`]);

  // 애니메이션 감소 설정 또는 모바일에서는 패럴랙스 비활성화
  if (prefersReducedMotion || typeof window !== 'undefined' && window.innerWidth < 768) {
    return (
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
};




