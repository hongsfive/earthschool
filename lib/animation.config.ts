// 애니메이션 설정 통합 관리
export const animations = {
  // 기본 Fade In
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  // Slide In (아래에서 위로)
  slideInUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 30 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  // Slide In (왼쪽에서 오른쪽)
  slideInLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  // Slide In (오른쪽에서 왼쪽)
  slideInRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 30 },
    transition: { duration: 0.6, ease: 'easeOut' },
  },

  // Scale In (작게 시작)
  scaleIn: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.5, ease: 'easeOut' },
  },

  // Stagger Children (순차 애니메이션)
  staggerContainer: {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

// 모바일/데스크톱 구분 Duration
export const getDuration = (isMobile: boolean, base: number = 0.6) => {
  return isMobile ? base * 0.7 : base; // 모바일은 30% 빠르게
};

// viewport 기본 설정 (한 번만 애니메이션)
export const viewportOnce = {
  once: true,
  amount: 0.3, // 30% 보이면 트리거
};

// viewport 반복 설정
export const viewportRepeat = {
  once: false,
  amount: 0.5,
};




