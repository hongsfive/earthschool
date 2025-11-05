# 배포 옵션 비교

## 현재 프로젝트: 지구를 지키는 시학교

### 폼 현황
- 교육 프로그램 페이지에 문의 폼 1개

---

## Option 1: Vercel 배포

### 폼 처리 방법: Formspree 연동

```tsx
// app/education/page.tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData),
  });
  
  if (response.ok) {
    alert('문의가 접수되었습니다!');
  }
};
```

**설정 단계:**
1. formspree.io 가입 (무료)
2. 폼 생성 → Form ID 받기
3. 코드에 ID 입력
4. 완료!

**장점:**
- ✅ Next.js 최적화 완벽
- ✅ 빌드 시간 많음 (6000분)
- ✅ 배포 가장 쉬움
- ✅ Image 최적화 자동

**단점:**
- ⚠️ 폼 설정 추가 작업 (5분)
- ⚠️ Formspree 무료 50개/월

**무료 제한:**
- Vercel: 무제한 (폼 아님)
- Formspree: 50개 제출/월

---

## Option 2: Netlify 배포

### 폼 처리 방법: Netlify Forms (내장)

```tsx
// app/education/page.tsx - form 태그만 수정
<form 
  onSubmit={handleSubmit} 
  name="education-inquiry"
  data-netlify="true"
  data-netlify-honeypot="bot-field"
>
  <input type="hidden" name="form-name" value="education-inquiry" />
  {/* 나머지 폼 필드 그대로 */}
</form>
```

**설정 단계:**
1. HTML에 속성 2줄 추가
2. 완료! (자동으로 이메일 전송됨)

**장점:**
- ✅ 폼 설정 매우 쉬움 (1분)
- ✅ 스팸 필터 자동
- ✅ 이메일 알림 자동
- ✅ 대시보드에서 제출 내역 확인

**단점:**
- ⚠️ 빌드 시간 적음 (300분)
- ⚠️ Next.js 최적화 약간 부족

**무료 제한:**
- Netlify: 100개 제출/월
- 빌드: 300분/월

---

## 실전 비교

### 현재 '지구를 지키는 시학교' 기준

| 항목 | Vercel + Formspree | Netlify |
|------|-------------------|---------|
| 폼 설정 난이도 | ⭐⭐⭐ (5분) | ⭐ (1분) |
| 폼 제출 무료 | 50개/월 | 100개/월 |
| 빌드 횟수 | 3000회/월 | 150회/월 |
| Next.js 최적화 | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| 배포 난이도 | ⭐ 쉬움 | ⭐ 쉬움 |

---

## 추천 시나리오

### ✅ Vercel을 선택하세요:
- 개발 중이라 자주 배포
- 폼 제출이 적을 것 같음 (월 50개 이하)
- Formspree 설정 괜찮음 (5분)
- Next.js 최적화 중요

### ✅ Netlify를 선택하세요:
- 폼이 정말 중요
- 폼 제출이 많을 것 같음 (월 50개 이상)
- 설정을 최소화하고 싶음
- 배포가 자주 없음 (주 1-2회)

---

## 최종 추천

**현재 프로젝트 기준:**

### 🥇 1순위: Vercel
- 이유: Next.js + 개발 단계라 배포 자주 함
- 폼은 Formspree로 충분 (5분 설정)

### 🥈 2순위: Netlify
- 이유: 폼이 정말 중요하다면
- HTML 속성 2줄만 추가하면 끝

**둘 다 훌륭한 선택입니다!** 🌿

