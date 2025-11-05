# 🎨 지구를 지키는 시학교 - 컬러 가이드

## 새로운 컬러 팔레트 적용 완료! ✅

---

## 🌈 Primary Colors (메인 브랜드 컬러)

### 숲의 초록 `#4A7C59`
- **용도:** 메인 브랜드 컬러, 버튼, 제목
- **Tailwind:** `bg-primary`, `text-primary`, `border-primary`
- **예시:**
  ```tsx
  <h1 className="text-primary">지구를 지키는 시학교</h1>
  <button className="bg-primary text-white">자세히 보기</button>
  ```

### 하늘의 파랑 `#87CEEB`
- **용도:** 희망과 미래를 상징하는 포인트 컬러
- **Tailwind:** `bg-sky`, `text-sky`, `border-sky`
- **예시:**
  ```tsx
  <div className="bg-sky/10 border-l-4 border-sky">
    <p>희망의 메시지</p>
  </div>
  ```

### 흙의 갈색 `#8B6B47`
- **용도:** 안정감과 신뢰, 서브 헤딩
- **Tailwind:** `bg-earth`, `text-earth`, `border-earth`
- **예시:**
  ```tsx
  <h3 className="text-earth font-bold">안정적인 교육</h3>
  ```

---

## 🌱 Secondary Colors (보조 컬러)

### 새싹 연두 `#B8E994`
- **용도:** 성장과 생명력, 하이라이트
- **Tailwind:** `bg-sprout`, `text-sprout`
- **예시:**
  ```tsx
  <span className="bg-sprout/20 px-2 py-1 rounded">NEW</span>
  ```

### 노을 주황 `#FFB366`
- **용도:** 따뜻함과 활력, CTA 버튼 (accent)
- **Tailwind:** `bg-sunset` 또는 `bg-accent`
- **예시:**
  ```tsx
  <button className="bg-accent hover:bg-sunset/90">
    지금 신청하기
  </button>
  ```

### 물의 청록 `#6DB3B8`
- **용도:** 투명함과 순수, 보조 정보
- **Tailwind:** `bg-water`, `text-water`
- **예시:**
  ```tsx
  <div className="bg-water/10 rounded-lg">
    <p className="text-water">추가 정보</p>
  </div>
  ```

---

## 🎭 Neutral Colors (중립 컬러)

### 자연 화이트 `#FAFAF8`
- **용도:** 배경색 (body 기본값)
- **Tailwind:** `bg-secondary`
- **자동 적용됨**

### 부드러운 그레이 `#E5E5E3`
- **용도:** 섹션 구분, 카드 배경
- **Tailwind:** `bg-softGray`
- **예시:**
  ```tsx
  <section className="bg-softGray py-20">
    {/* 콘텐츠 */}
  </section>
  ```

### 깊은 차콜 `#3A3A3A`
- **용도:** 텍스트 컬러 (body 기본값)
- **Tailwind:** `text-charcoal` 또는 `text-text`
- **자동 적용됨**

---

## 🎨 사용 예시

### 예시 1: Hero 섹션
```tsx
<section className="bg-gradient-to-b from-primary/10 to-secondary">
  <h1 className="text-primary">지구를 지키는 시학교</h1>
  <p className="text-text">자연과 함께 배우는 생태 교육</p>
  <button className="bg-accent hover:bg-sunset/90">
    시작하기
  </button>
</section>
```

### 예시 2: 카드 컴포넌트
```tsx
<div className="bg-white border-l-4 border-sprout shadow-lg">
  <h3 className="text-primary">보령소리탐사대</h3>
  <p className="text-text/80">보령의 생명 소리를 채집한 특별한 이야기</p>
  <span className="text-water">자세히 보기 →</span>
</div>
```

### 예시 3: 알림 배너
```tsx
<div className="bg-sky/10 border border-sky/30 rounded-lg p-4">
  <p className="text-sky font-semibold">
    ✨ 새로운 프로그램이 출시되었습니다!
  </p>
</div>
```

---

## 🔄 변경 사항 요약

| 기존 | 새로운 | 변경점 |
|------|--------|--------|
| `primary: #3A5B4F` | `primary: #4A7C59` | 더 밝은 초록 |
| `secondary: #F5F3ED` (베이지) | `secondary: #FAFAF8` (화이트) | 배경색 변경 |
| `accent: #FBCB68` (노랑) | `accent: #FFB366` (주황) | 따뜻한 주황색 |
| `text: #333333` | `text: #3A3A3A` | 약간 더 밝음 |

### 추가된 색상
- ✅ `sky` - 하늘의 파랑
- ✅ `earth` - 흙의 갈색
- ✅ `sprout` - 새싹 연두
- ✅ `sunset` - 노을 주황
- ✅ `water` - 물의 청록
- ✅ `softGray` - 부드러운 그레이
- ✅ `charcoal` - 깊은 차콜

---

## 💡 팁

### 투명도 사용
```tsx
bg-primary/10    {/* 10% 투명도 */}
bg-primary/20    {/* 20% 투명도 */}
bg-primary/50    {/* 50% 투명도 */}
text-primary/80  {/* 80% 투명도 */}
```

### 그라데이션
```tsx
bg-gradient-to-r from-primary to-sky
bg-gradient-to-b from-sprout/20 to-transparent
```

### hover 효과
```tsx
hover:bg-primary hover:text-white
hover:border-sky transition-colors duration-300
```

---

## 🚀 다음 단계

현재 완료: ✅ 1단계 - 컬러 팔레트 변경

다음 단계:
- 🔲 2단계 - 폰트 적용 (나눔스퀘어, 노토산스)
- 🔲 3단계 - 유기적 형태 강화 (곡선, 그라데이션)
- 🔲 4단계 - 인터랙티브 요소 추가

---

## 📝 참고

브라우저에서 **http://localhost:3001**을 새로고침하면 새로운 컬러가 적용된 모습을 확인할 수 있습니다!

색상이 마음에 들지 않으면 언제든 `tailwind.config.js`에서 조정 가능합니다. 🎨

