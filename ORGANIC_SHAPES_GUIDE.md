# 🌿 지구를 지키는 시학교 - 유기적 형태 가이드

## 3단계: 유기적 형태 강화 완료! ✅

---

## 🎨 핵심 개념

기존의 딱딱한 사각형 디자인에서 **자연스러운 곡선과 유기적 형태**로 전환하여 
"자연과 함께하는 교육"이라는 브랜드 정체성을 시각적으로 표현합니다.

---

## 📦 새로운 컴포넌트

### 1. WaveDivider (물결 디바이더)
섹션 구분을 자연스러운 물결 모양으로 표현합니다.

**파일:** `components/WaveDivider.tsx`

**사용법:**
```tsx
import WaveDivider from '@/components/WaveDivider';

<section className="relative bg-primary/10 pb-20">
  {/* 콘텐츠 */}
  <WaveDivider position="bottom" color="#4A7C59" opacity={0.08} />
</section>
```

**Props:**
- `position`: 'top' | 'bottom' (디바이더 위치)
- `color`: 색상 (기본값: #4A7C59)
- `opacity`: 투명도 (기본값: 0.1)
- `flip`: 좌우 반전 (기본값: false)

---

### 2. OrganicBackground (유기적 배경)
radial-gradient를 활용한 자연스러운 배경 패턴입니다.

**파일:** `components/OrganicBackground.tsx`

**사용법:**
```tsx
import OrganicBackground from '@/components/OrganicBackground';

<OrganicBackground variant="gradient">
  <div className="py-20">
    {/* 콘텐츠 */}
  </div>
</OrganicBackground>
```

**Variants:**
- `primary`: 초록색 계열 그라데이션
- `secondary`: 베이지/그레이 계열
- `accent`: 주황색 계열
- `gradient`: 다채로운 그라데이션 (권장)

---

### 3. OrganicCard (유기적 카드)
둥근 모서리와 그라데이션이 적용된 카드 컴포넌트입니다.

**파일:** `components/OrganicCard.tsx`

**사용법:**
```tsx
import OrganicCard from '@/components/OrganicCard';

<OrganicCard variant="primary" gradient hover>
  <h3 className="font-heading text-heading-md text-primary mb-3">
    제목
  </h3>
  <p className="font-body text-body text-text/80">
    내용
  </p>
</OrganicCard>
```

**Props:**
- `variant`: 'primary' | 'secondary' | 'accent' | 'white'
- `gradient`: 그라데이션 활성화 (권장)
- `hover`: 호버 효과 (기본값: true)
- `className`: 추가 스타일

---

## 🎯 디자인 원칙

### 1. 둥근 모서리 (Rounded Corners)

**사용하는 클래스:**
- `rounded-2xl` (16px) - 일반 카드
- `rounded-3xl` (24px) - 큰 카드, Feature 섹션
- `rounded-full` - 버튼, 태그

**예시:**
```tsx
// 일반 카드
<div className="bg-white rounded-2xl p-6 shadow-lg">
  {/* 콘텐츠 */}
</div>

// 큰 Feature 카드
<div className="bg-white rounded-3xl p-12 shadow-xl">
  {/* 콘텐츠 */}
</div>

// 버튼
<button className="px-8 py-4 bg-primary text-white rounded-full">
  클릭하기
</button>
```

---

### 2. 유기적 그라데이션

**다방향 그라데이션:**
```tsx
// 대각선 그라데이션 (권장)
className="bg-gradient-to-br from-primary/10 via-sky/5 to-sprout/10"

// 2색 그라데이션
className="bg-gradient-to-r from-primary to-sky"

// 3색 그라데이션
className="bg-gradient-to-br from-primary/5 via-sky/5 to-sprout/5"
```

**Radial 그라데이션 (배경 패턴):**
```tsx
<div 
  className="absolute inset-0 opacity-20"
  style={{
    backgroundImage: `
      radial-gradient(circle at 20% 50%, rgba(74, 124, 89, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(135, 206, 235, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 20%, rgba(184, 233, 148, 0.1) 0%, transparent 50%)
    `,
  }}
/>
```

---

### 3. 자연스러운 그림자

**그림자 단계:**
- `shadow-md` - 미묘한 그림자 (기본 카드)
- `shadow-lg` - 중간 그림자 (호버 전)
- `shadow-xl` - 큰 그림자 (호버 시)
- `shadow-2xl` - 매우 큰 그림자 (강조 요소)

**호버 효과와 함께:**
```tsx
<div className="shadow-lg hover:shadow-2xl transition-all duration-300">
  {/* 콘텐츠 */}
</div>
```

---

### 4. 호버 인터랙션

**scale 효과:**
```tsx
// 살짝 커지기
className="hover:scale-105 transition-transform duration-300"

// 위로 올라가기
className="hover:-translate-y-1 transition-all duration-300"

// 조합
className="hover:scale-105 hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
```

**예시:**
```tsx
<button className="
  px-8 py-4 
  bg-primary text-white 
  rounded-full 
  shadow-lg 
  hover:shadow-2xl 
  hover:scale-105 
  transition-all duration-300
">
  버튼
</button>
```

---

### 5. 투명도와 레이어링

**backdrop-blur (글래스모피즘):**
```tsx
<div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6">
  {/* 반투명 카드 */}
</div>
```

**중첩 레이어:**
```tsx
<div className="relative">
  {/* 배경 패턴 */}
  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-sky/5" />
  
  {/* 콘텐츠 */}
  <div className="relative z-10">
    {/* 내용 */}
  </div>
</div>
```

---

## 🎨 실전 예시

### 예시 1: Hero 섹션
```tsx
<section className="relative bg-gradient-to-br from-primary/10 via-sky/5 to-sprout/10 py-20 overflow-hidden">
  {/* 유기적 배경 패턴 */}
  <div 
    className="absolute inset-0 opacity-20"
    style={{
      backgroundImage: `
        radial-gradient(circle at 20% 50%, rgba(74, 124, 89, 0.1) 0%, transparent 50%),
        radial-gradient(circle at 80% 80%, rgba(135, 206, 235, 0.1) 0%, transparent 50%)
      `,
    }}
  />
  
  {/* 물결 디바이더 */}
  <WaveDivider position="bottom" color="#4A7C59" opacity={0.08} />
  
  {/* 콘텐츠 */}
  <div className="relative z-10">
    <h1 className="font-heading text-display text-primary">제목</h1>
  </div>
</section>
```

---

### 예시 2: 프로그램 카드
```tsx
<OrganicCard variant="primary" gradient hover>
  <div className="flex items-start gap-4">
    <div className="text-4xl">🌲</div>
    <div>
      <h3 className="font-heading text-heading-md text-primary mb-3">
        보령소리탐사대
      </h3>
      <p className="font-body text-body text-text/80 mb-4">
        보령 지역의 생명 소리를 채집하고 기록하는 특별한 생태 탐험입니다.
      </p>
      <button className="
        px-6 py-3 
        bg-accent text-white 
        rounded-full 
        shadow-lg 
        hover:shadow-2xl 
        hover:scale-105 
        transition-all duration-300
      ">
        자세히 보기
      </button>
    </div>
  </div>
</OrganicCard>
```

---

### 예시 3: Feature 섹션
```tsx
<OrganicBackground variant="gradient" className="rounded-3xl p-12">
  <div className="grid md:grid-cols-3 gap-6">
    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
      <div className="text-4xl mb-3">👂</div>
      <h4 className="font-heading text-heading-sm text-primary mb-2">
        관찰
      </h4>
      <p className="font-body text-caption text-text/70">
        자연을 오감으로 느끼기
      </p>
    </div>
    {/* 더 많은 카드... */}
  </div>
</OrganicBackground>
```

---

### 예시 4: 버튼 모음
```tsx
<div className="flex gap-4">
  {/* Primary 버튼 */}
  <button className="
    px-8 py-4 
    bg-primary text-white 
    rounded-full 
    font-heading font-semibold 
    shadow-lg 
    hover:shadow-2xl 
    hover:scale-105 
    transition-all duration-300
  ">
    Primary
  </button>
  
  {/* Accent 버튼 */}
  <button className="
    px-8 py-4 
    bg-accent text-white 
    rounded-full 
    font-heading font-semibold 
    shadow-lg 
    hover:shadow-2xl 
    hover:scale-105 
    transition-all duration-300
  ">
    Accent
  </button>
  
  {/* Outline 버튼 */}
  <button className="
    px-8 py-4 
    bg-white text-primary 
    border-2 border-primary 
    rounded-full 
    font-heading font-semibold 
    shadow-md 
    hover:shadow-xl 
    hover:scale-105 
    transition-all duration-300
  ">
    Outline
  </button>
</div>
```

---

## ✅ 체크리스트

### 모든 페이지에 적용할 것:
- [ ] Hero 섹션에 WaveDivider 추가
- [ ] 카드에 rounded-2xl 또는 rounded-3xl 적용
- [ ] 버튼에 rounded-full 적용
- [ ] 그라데이션 배경 추가 (bg-gradient-to-br)
- [ ] 호버 효과 추가 (scale-105, shadow-2xl)
- [ ] 그림자로 깊이감 표현 (shadow-lg, shadow-xl)

---

## 🔍 테스트 페이지

### 유기적 형태 테스트:
```
http://localhost:3001/organic-test
```

이 페이지에서 다음을 확인하세요:
- ✅ 둥근 모서리가 부드러운가?
- ✅ 그라데이션이 자연스러운가?
- ✅ 호버 시 애니메이션이 작동하는가?
- ✅ 그림자로 입체감이 느껴지는가?
- ✅ 물결 모양이 잘 표시되는가?

---

## 🎯 디자인 비교

### Before (기존)
- ❌ 직선 사각형
- ❌ 단색 배경
- ❌ 평평한 느낌
- ❌ 정적인 인터랙션

### After (유기적 형태)
- ✅ 둥근 모서리 (rounded-2xl, rounded-3xl)
- ✅ 그라데이션 배경
- ✅ 입체적인 그림자
- ✅ 동적인 호버 효과
- ✅ 물결 모양 디바이더

---

## 🚀 다음 단계

현재 완료:
- ✅ 1단계: 컬러 팔레트
- ✅ 2단계: 타이포그래피
- ✅ 3단계: 유기적 형태 강화

다음 단계:
- 🔲 4단계: 인터랙티브 요소 추가 (스크롤 애니메이션, 패럴랙스 등)

---

## 💡 팁

### 성능 최적화:
```tsx
// will-change로 애니메이션 최적화
className="hover:scale-105 transition-transform duration-300 will-change-transform"
```

### 접근성:
```tsx
// 포커스 스타일도 추가
className="rounded-full focus:ring-4 focus:ring-primary/30"
```

### 반응형:
```tsx
// 모바일에서는 더 작은 둥근 모서리
className="rounded-xl md:rounded-2xl lg:rounded-3xl"
```

---

## 📚 참고 자료

- **Tailwind Rounded:** https://tailwindcss.com/docs/border-radius
- **Tailwind Gradients:** https://tailwindcss.com/docs/gradient-color-stops
- **Tailwind Shadows:** https://tailwindcss.com/docs/box-shadow
- **Framer Motion:** https://www.framer.com/motion/

