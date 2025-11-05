import { useEffect, useState } from 'react';

/**
 * 사용자가 애니메이션 감소를 설정했는지 확인하는 Hook
 * 접근성을 위해 중요함
 */
export const useReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // 브라우저가 prefers-reduced-motion을 지원하는지 확인
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    // 초기값 설정
    setPrefersReducedMotion(mediaQuery.matches);

    // 값이 변경되면 업데이트
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // 이벤트 리스너 등록
    mediaQuery.addEventListener('change', handleChange);

    // 클린업
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};




