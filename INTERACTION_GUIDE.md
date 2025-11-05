# 🎬 지구를 지키는 시학교 - 인터랙티브 가이드

## 4단계: "절제된 우아함" 애니메이션 완료! ✅

---

## 🎯 컨셉: 절제된 우아함

**"적절한 곳에, 적절한 정도로"**

- ✅ 미묘하지만 효과적
- ✅ 사용자 경험 향상
- ✅ 성능과 접근성 고려
- ❌ 과도한 움직임 지양
- ❌ 3D, 복잡한 효과 제외

---

## 📦 생성된 컴포넌트

### 1. FadeIn - 기본 페이드 인

**파일:** `components/animations/FadeIn.tsx`

**특징:**
- 스크롤 시 서서히 나타남
- 가장 기본적이고 부드러운 애니메이션
- 한 번만 실행 (viewport once)

**사용법:**
```tsx
import { FadeIn } from '@/components/animations';

<FadeIn delay={0.2} duration={0.8}>
  <h2>제목이 서서히 나타납니다</h2>
</FadeIn>
```

**Props:**
- `delay`: 지연 시간 (기본값: 0)
- `duration`: 애니메이션 시간 (기본값: 0.6초)
- `className`: 추가 스타일

---

### 2. SlideIn - 방향성 슬라이드

**파일:** `components/animations/SlideIn.tsx`

**특징:**
- 지정된 방향에서 슬라이드하며 나타남
- 4방향 지원 (up, down, left, right)
- 페이드 + 이동 효과 조합

**사용법:**
```tsx
import { SlideIn } from '@/components/animations';

<SlideIn direction="left" delay={0}>
  <div>왼쪽에서 슬라이드</div>
</SlideIn>

<SlideIn direction="up"> {/* 기본값 */}
  <div>아래에서 위로</div>
</SlideIn>
```

**Props:**
- `direction`: 'up' | 'down' | 'left' | 'right' (기본값: 'up')
- `delay`: 지연 시간
- `duration`: 애니메이션 시간
- `className`: 추가 스타일

---

### 3. Stagger - 순차 애니메이션

**파일:** `components/animations/Stagger.tsx`

**특징:**
- 여러 자식 요소가 순차적으로 나타남
- 리듬감 있는 연출
- `Stagger` + `StaggerItem` 조합

**사용법:**
```tsx
import { Stagger, StaggerItem } from '@/components/animations';

<Stagger staggerDelay={0.1}>
  <StaggerItem>
    <Card>카드 1</Card>
  </StaggerItem>
  <StaggerItem>
    <Card>카드 2</Card>
  </StaggerItem>
  <StaggerItem>
    <Card>카드 3</Card>
  </StaggerItem>
</Stagger>
```

**Props (Stagger):**
- `staggerDelay`: 각 아이템 간 지연 (기본값: 0.1초)
- `className`: 추가 스타일

**Props (StaggerItem):**
- `className`: 추가 스타일

---

### 4. ParallaxSection - 패럴랙스 스크롤

**파일:** `components/animations/ParallaxSection.tsx`

**특징:**
- 배경이 스크롤보다 느리게 움직임
- 깊이감 표현
- ⚠️ 모바일에서는 자동 비활성화 (성능)

**사용법:**
```tsx
import { ParallaxSection } from '@/components/animations';

<ParallaxSection speed={0.7}>
  <section className="hero">
    {/* Hero 콘텐츠 */}
  </section>
</ParallaxSection>
```

**Props:**
- `speed`: 스크롤 속도 (0.5 = 느리게, 1.5 = 빠르게, 기본값: 0.5)
- `className`: 추가 스타일

**권장:**
- Hero 섹션에만 사용
- speed는 0.5~0.8 권장 (미묘하게)
- 너무 많이 사용하지 말 것

---

## 🛠️ 유틸리티 & 설정

### animation.config.ts

**파일:** `lib/animation.config.ts`

통일된 애니메이션 설정 관리:

```ts
import { animations } from '@/lib/animation.config';

// 직접 사용 가능
<motion.div
  initial={animations.fadeIn.initial}
  animate={animations.fadeIn.animate}
  transition={animations.fadeIn.transition}
/>
```

---

### useReducedMotion Hook

**파일:** `hooks/useReducedMotion.ts`

접근성을 위한 모션 감소 설정 감지:

```tsx
import { useReducedMotion } from '@/hooks/useReducedMotion';

const prefersReducedMotion = useReducedMotion();

if (prefersReducedMotion) {
  // 애니메이션 없이 즉시 표시
  return <div>{children}</div>;
}

// 애니메이션 적용
return <motion.div ...>
```

**자동 적용:**
모든 애니메이션 컴포넌트에 자동으로 적용되어 있음!

---

## 📝 사용 예시

### 예시 1: 기본 Hero 섹션

```tsx
import { FadeIn, ParallaxSection } from '@/components/animations';

<ParallaxSection speed={0.7}>
  <section className="hero">
    <FadeIn>
      <h1>지구를 지키는 시학교</h1>
    </FadeIn>
    
    <FadeIn delay={0.2}>
      <p>자연과 함께 배우는 생태 교육</p>
    </FadeIn>
    
    <FadeIn delay={0.4}>
      <button>자세히 보기</button>
    </FadeIn>
  </section>
</ParallaxSection>
```

---

### 예시 2: 프로그램 카드 리스트

```tsx
import { Stagger, StaggerItem } from '@/components/animations';
import OrganicCard from '@/components/OrganicCard';

<Stagger staggerDelay={0.15}>
  <div className="grid md:grid-cols-3 gap-6">
    {programs.map((program) => (
      <StaggerItem key={program.id}>
        <OrganicCard variant="white" gradient hover>
          <h3>{program.title}</h3>
          <p>{program.description}</p>
        </OrganicCard>
      </StaggerItem>
    ))}
  </div>
</Stagger>
```

---

### 예시 3: 좌우 레이아웃

```tsx
import { SlideIn } from '@/components/animations';

<div className="grid md:grid-cols-2 gap-8">
  <SlideIn direction="left">
    <div>왼쪽 콘텐츠</div>
  </SlideIn>
  
  <SlideIn direction="right">
    <div>오른쪽 콘텐츠</div>
  </SlideIn>
</div>
```

---

### 예시 4: 섹션별 애니메이션

```tsx
import { FadeIn, SlideIn, Stagger, StaggerItem } from '@/components/animations';

{/* 섹션 제목 */}
<SlideIn direction="up">
  <h2 className="text-center">주요 프로그램</h2>
</SlideIn>

{/* 설명 */}
<FadeIn delay={0.2}>
  <p className="text-center">자연과 함께 배우는 다양한 활동</p>
</FadeIn>

{/* 카드들 */}
<Stagger staggerDelay={0.1}>
  {items.map((item) => (
    <StaggerItem key={item.id}>
      <Card {...item} />
    </StaggerItem>
  ))}
</Stagger>
```

---

## ✅ 적용 체크리스트

### 🟢 필수 적용
- [x] Hero 섹션에 FadeIn 또는 ParallaxSection
- [x] 주요 제목에 SlideIn 또는 FadeIn
- [x] 카드 리스트에 Stagger
- [x] 모든 컴포넌트 접근성 확인

### 🟡 권장 적용
- [x] 중요한 CTA 버튼에 FadeIn
- [x] 좌우 레이아웃에 SlideIn (left/right)
- [x] 소개 섹션에 순차 애니메이션

### 🔴 주의사항
- [ ] 한 섹션에 너무 많은 애니메이션 ❌
- [ ] 3초 이상 긴 애니메이션 ❌
- [ ] 모바일에서 복잡한 패럴랙스 ❌
- [ ] 접근성 무시 ❌

---

## 🎯 디자인 원칙

### 1. 적절한 타이밍
```tsx
// ✅ 좋은 예: 0.3~0.6초
<FadeIn duration={0.6}>

// ❌ 나쁜 예: 너무 느림
<FadeIn duration={2.0}>
```

### 2. 순차 지연
```tsx
// ✅ 좋은 예: 0.1~0.2초 간격
<Stagger staggerDelay={0.1}>

// ❌ 나쁜 예: 너무 긴 간격
<Stagger staggerDelay={0.5}>
```

### 3. 한 화면에 적절한 양
```tsx
// ✅ 좋은 예: 3~5개 요소
<FadeIn><h2>제목</h2></FadeIn>
<FadeIn delay={0.2}><p>설명</p></FadeIn>
<Stagger> {/* 3개 카드 */} </Stagger>

// ❌ 나쁜 예: 모든 요소에 애니메이션
<FadeIn><span>모든</span></FadeIn>
<FadeIn><span>단어에</span></FadeIn>
<FadeIn><span>애니메이션</span></FadeIn>
```

---

## 🔧 성능 최적화

### GPU 가속 활용
모든 애니메이션은 `transform`과 `opacity`만 사용:
- ✅ `translateX`, `translateY`, `scale`
- ✅ `opacity`
- ❌ `left`, `top`, `width`, `height` (리플로우 발생)

### 모바일 최적화
```tsx
// ParallaxSection은 자동으로 모바일에서 비활성화
<ParallaxSection> 
  {/* 모바일: 일반 섹션, 데스크톱: 패럴랙스 */}
</ParallaxSection>
```

### Viewport 설정
```ts
// animation.config.ts
export const viewportOnce = {
  once: true,      // 한 번만 실행
  amount: 0.3,     // 30% 보이면 트리거
};
```

---

## ♿ 접근성

### 자동 지원
모든 컴포넌트는 `useReducedMotion`을 자동으로 사용:

```tsx
// 사용자가 애니메이션 감소를 설정하면
// → 애니메이션 없이 즉시 표시
if (prefersReducedMotion) {
  return <div>{children}</div>;
}
```

### 테스트 방법
1. **Windows:** 설정 → 접근성 → 시각 효과 → "Windows에서 애니메이션 표시" 끄기
2. **Mac:** 시스템 환경설정 → 손쉬운 사용 → 디스플레이 → "움직임 줄이기" 체크
3. **브라우저:** DevTools → Rendering → "Emulate CSS media prefers-reduced-motion"

---

## 🔍 테스트 페이지

### 애니메이션 테스트:
```
http://localhost:3001/animation-test
```

확인 사항:
- ✅ 스크롤 시 요소가 나타나는가?
- ✅ 순차 애니메이션이 리듬감 있는가?
- ✅ 패럴랙스가 미묘하게 작동하는가?
- ✅ 모바일에서 부드러운가?
- ✅ 접근성 설정 시 즉시 표시되는가?

---

## 📊 Before & After

### Before (3단계까지)
```tsx
<section>
  <h2>제목</h2>
  <div className="grid">
    <Card />
    <Card />
    <Card />
  </div>
</section>
```

### After (4단계)
```tsx
<section>
  <SlideIn direction="up">
    <h2>제목</h2>
  </SlideIn>
  
  <Stagger staggerDelay={0.1}>
    <div className="grid">
      <StaggerItem><Card /></StaggerItem>
      <StaggerItem><Card /></StaggerItem>
      <StaggerItem><Card /></StaggerItem>
    </div>
  </Stagger>
</section>
```

**효과:**
- ✅ 동적이고 생동감 있음
- ✅ 사용자의 시선 유도
- ✅ 전문적인 느낌
- ✅ 기억에 남는 경험

---

## 🚀 다음 단계

현재 완료:
- ✅ 1단계: 컬러 팔레트
- ✅ 2단계: 타이포그래피
- ✅ 3단계: 유기적 형태
- ✅ 4단계: 인터랙티브 요소

다음:
- 🔲 실제 페이지에 애니메이션 적용
- 🔲 전체 페이지 통합 테스트
- 🔲 성능 최적화
- 🔲 배포 준비

---

## 💡 Tips

### 1. 점진적 적용
```
1차: Hero 섹션만
2차: 프로그램 카드
3차: 나머지 섹션
```

### 2. 일관성 유지
```
같은 종류의 요소는 같은 애니메이션
예: 모든 카드 리스트 → Stagger
```

### 3. 과하지 않게
```
"의심스러우면, 애니메이션을 빼라"
- 꼭 필요한 곳에만 적용
```

### 4. 테스트
```
1. 데스크톱 브라우저
2. 모바일 브라우저
3. 접근성 설정 켜고
4. 느린 네트워크에서
```

---

## 📚 참고 자료

- **Framer Motion:** https://www.framer.com/motion/
- **Intersection Observer:** https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
- **prefers-reduced-motion:** https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion
- **WCAG Animation Guidelines:** https://www.w3.org/WAI/WCAG21/Understanding/animation-from-interactions.html

---

## 🎉 완성!

**"절제된 우아함"** 컨셉의 인터랙티브 애니메이션이 준비되었습니다!

이제 실제 페이지에 적용하여 생동감 있는 웹사이트를 완성하세요! ✨




