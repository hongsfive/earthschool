# 📝 지구를 지키는 시학교 - 타이포그래피 가이드

## 2단계: 타이포그래피 적용 완료! ✅

---

## 🔤 폰트 패밀리 (Font Family)

### 한글 폰트

#### 나눔고딕 (Nanum Gothic) - 제목용
- **용도:** H1, H2, H3, H4 등 모든 제목
- **특징:** 굵고 명확한 가독성, 강한 인상
- **Tailwind:** `font-heading` 또는 `font-nanum`
- **Weight:** 400 (Regular), 700 (Bold), 800 (ExtraBold)

**예시:**
```tsx
<h1 className="font-heading text-display text-primary">
  지구를 지키는 시학교
</h1>
```

#### 노토산스 (Noto Sans KR) - 본문용
- **용도:** 본문, 설명, 일반 텍스트
- **특징:** 부드럽고 읽기 편한 폰트
- **Tailwind:** `font-body` 또는 `font-noto`
- **Weight:** 400 (Regular), 500 (Medium), 700 (Bold)

**예시:**
```tsx
<p className="font-body text-body text-text/80">
  기후위기 시대, 아이와 부모가 함께 자연의 소리에 귀 기울이며...
</p>
```

---

### 영문 폰트

#### Poppins - 영문 제목용
- **용도:** 영문 제목, 브랜드 네임
- **Tailwind:** `font-poppins`
- **Weight:** 400, 500, 600, 700, 800

**예시:**
```tsx
<h2 className="font-poppins text-heading-lg">
  Natural Harmony Design
</h2>
```

#### Inter - 영문 본문용
- **용도:** 영문 본문, 설명
- **Tailwind:** `font-inter`
- **Weight:** Variable (100~900)

**예시:**
```tsx
<p className="font-inter text-body">
  In an era of climate crisis...
</p>
```

---

## 📏 폰트 크기 (Font Size)

### 제목 크기

| 용도 | 클래스 | 크기 | 행간 | 예시 |
|------|--------|------|------|------|
| **H1 대제목** | `text-display` | 48px (3rem) | 1.2 | 메인 히어로 제목 |
| **H2 중제목** | `text-heading-lg` | 36px (2.25rem) | 1.3 | 섹션 제목 |
| **H3 소제목** | `text-heading-md` | 24px (1.5rem) | 1.4 | 카드 제목 |
| **H4 작은 제목** | `text-heading-sm` | 20px (1.25rem) | 1.5 | 서브 타이틀 |

### 본문 크기

| 용도 | 클래스 | 크기 | 행간 | 예시 |
|------|--------|------|------|------|
| **강조 본문** | `text-body-lg` | 18px (1.125rem) | 1.7 | 리드 문단 |
| **일반 본문** | `text-body` | 16px (1rem) | 1.7 | 일반 텍스트 |
| **보조 텍스트** | `text-caption` | 14px (0.875rem) | 1.6 | 날짜, 태그 |
| **작은 텍스트** | `text-caption-sm` | 12px (0.75rem) | 1.5 | 저작권 표시 |

---

## 🎨 사용 예시

### 예시 1: 히어로 섹션
```tsx
<section className="bg-gradient-to-b from-primary/10 to-secondary py-20">
  <h1 className="font-heading text-display text-primary text-center mb-4">
    지구를 지키는 시학교
  </h1>
  <p className="font-body text-body-lg text-center text-text/80 max-w-2xl mx-auto">
    기후위기 시대, 아이와 부모가 함께 자연의 소리에 귀 기울이며 
    생명의 소중함을 배웁니다.
  </p>
</section>
```

### 예시 2: 카드 컴포넌트
```tsx
<div className="bg-white rounded-lg shadow-lg p-6">
  <span className="font-body text-caption text-accent uppercase">
    Featured Program
  </span>
  <h3 className="font-heading text-heading-md text-primary mt-2 mb-3">
    보령소리탐사대
  </h3>
  <p className="font-body text-body text-text/80 mb-4">
    보령 지역의 생명 소리를 채집하고 기록하는 특별한 생태 탐험입니다.
  </p>
  <span className="font-body text-caption text-text/60">
    📅 매주 토요일 오전 10시
  </span>
</div>
```

### 예시 3: 리스트
```tsx
<ul className="space-y-3">
  <li className="font-body text-body text-text/80">
    <strong className="font-heading text-primary">관찰:</strong> 
    자연을 오감으로 느끼기
  </li>
  <li className="font-body text-body text-text/80">
    <strong className="font-heading text-primary">표현:</strong> 
    시로 감정 담아내기
  </li>
</ul>
```

### 예시 4: 버튼
```tsx
{/* 큰 버튼 */}
<button className="font-heading text-body-lg bg-primary text-white px-8 py-4">
  프로그램 신청하기
</button>

{/* 일반 버튼 */}
<button className="font-body text-body bg-accent text-white px-6 py-3">
  자세히 보기
</button>

{/* 작은 버튼 */}
<button className="font-body text-caption bg-secondary border border-primary text-primary px-4 py-2">
  더 알아보기
</button>
```

---

## 🔧 Tailwind 클래스 조합

### 제목 스타일 조합
```tsx
// 기본 제목
<h2 className="font-heading text-heading-lg text-primary">

// 굵은 제목
<h2 className="font-heading text-heading-lg text-primary font-bold">

// 중앙 정렬 제목
<h2 className="font-heading text-heading-lg text-primary text-center">

// 그라데이션 제목
<h2 className="font-heading text-heading-lg bg-gradient-to-r from-primary to-sky bg-clip-text text-transparent">
```

### 본문 스타일 조합
```tsx
// 기본 본문
<p className="font-body text-body text-text">

// 회색 본문 (80% 투명도)
<p className="font-body text-body text-text/80">

// 큰 본문 (리드)
<p className="font-body text-body-lg text-text/90 leading-relaxed">

// 작은 보조 텍스트
<span className="font-body text-caption text-text/60">
```

---

## 📱 반응형 폰트

모바일, 태블릿, 데스크톱에 맞춰 폰트 크기를 조정할 수 있습니다:

```tsx
<h1 className="
  font-heading 
  text-3xl sm:text-4xl md:text-5xl lg:text-display 
  text-primary
">
  지구를 지키는 시학교
</h1>

<p className="
  font-body 
  text-sm sm:text-base md:text-body-lg 
  text-text/80
">
  본문 내용...
</p>
```

---

## 🎯 디자인 원칙

### 1. 계층 구조 명확히
- H1은 페이지당 1개만
- H2는 주요 섹션 제목
- H3는 서브 섹션
- 본문은 일관된 크기 유지

### 2. 가독성 우선
- 최소 행간: 1.5 (본문은 1.7 권장)
- 한 줄 최대 글자 수: 50~75자
- 제목과 본문 사이 충분한 여백

### 3. 대비 확보
- 제목: 굵은 폰트 + 큰 크기
- 본문: 보통 폰트 + 적절한 행간
- 보조 텍스트: 작은 크기 + 낮은 투명도

### 4. 일관성 유지
- 같은 레벨의 제목은 같은 스타일
- 버튼 텍스트는 일관된 크기
- 캡션은 통일된 스타일

---

## ✅ 적용 체크리스트

- [x] 나눔고딕, 노토산스 폰트 로드
- [x] Poppins, Inter 영문 폰트 로드
- [x] 폰트 크기 시스템 정의
- [x] H1~H6 기본 스타일 설정
- [x] 본문 행간 1.7 적용
- [x] Tailwind 폰트 클래스 생성

---

## 🔍 테스트 방법

### 폰트 테스트 페이지 확인:
```
http://localhost:3001/font-test
```

이 페이지에서 다음을 확인하세요:
- ✅ 제목과 본문의 폰트가 다른가?
- ✅ 한글 폰트가 선명하게 보이는가?
- ✅ 행간이 적절한가?
- ✅ 크기 계층이 명확한가?

### 브라우저 개발자 도구로 확인:
1. F12 → Elements 탭
2. 제목 요소 선택
3. Computed 탭에서 `font-family` 확인
4. "Nanum Gothic" 또는 "Noto Sans KR"이 표시되어야 함

---

## 💡 문제 해결

### 폰트가 적용되지 않는 경우:
1. **캐시 삭제:** Ctrl + Shift + R
2. **개발 서버 재시작:** 터미널에서 Ctrl+C 후 `npm run dev`
3. **폰트 로딩 확인:** 
   - F12 → Network 탭
   - "Fonts" 필터 선택
   - 폰트 파일이 로드되는지 확인

### 폰트가 너무 두꺼운 경우:
```tsx
// font-bold 제거
<h2 className="font-heading text-heading-lg"> {/* font-bold 없음 */}
```

### 한글이 깨지는 경우:
- HTML lang 속성 확인: `<html lang="ko">`
- 폰트 subset 확인 (현재 'latin'으로 설정됨)

---

## 🚀 다음 단계

현재 완료:
- ✅ 1단계: 컬러 팔레트
- ✅ 2단계: 타이포그래피

다음 단계:
- 🔲 3단계: 유기적 형태 강화 (곡선, 그라데이션)
- 🔲 4단계: 인터랙티브 요소 추가

---

## 📚 참고 자료

- **Google Fonts:** https://fonts.google.com/
- **Next.js Font Optimization:** https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- **Tailwind Typography:** https://tailwindcss.com/docs/font-family

