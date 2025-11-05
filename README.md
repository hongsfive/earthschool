# 지구를 지키는 시학교 홈페이지

세상의 소리를 듣는 학교, 지구의 마음을 읽는 우리

## 🌿 프로젝트 소개

'지구를 지키는 시학교'는 기후위기 시대, 아이와 부모가 함께 자연의 소리에 귀 기울이며 생명의 소중함을 배우는 생태 교육 공동체입니다.

### ✨ 주요 특징

- 🎨 **오가닉 미니멀리즘 디자인**: 자연의 따뜻함과 교육 전문성이 느껴지는 깔끔한 디자인
- 🎨 **맞춤 컬러 팔레트**: 지구와 자연을 상징하는 Deep Green, Warm Beige, Sunny Yellow
- 📱 **완벽한 반응형**: 모바일, 태블릿, 데스크톱 모든 기기에 최적화
- ✨ **부드러운 애니메이션**: Framer Motion을 활용한 감각적인 인터랙션
- ♿ **접근성 고려**: 시맨틱 HTML과 ARIA 속성 활용

## 🎨 컬러 팔레트

- **Primary (Deep Green)**: `#3A5B4F` - 숲의 깊은 색, 신뢰감과 자연 상징
- **Secondary (Warm Beige)**: `#F5F3ED` - 부드러운 종이 질감, 따뜻함과 안정감
- **Accent (Sunny Yellow)**: `#FBCB68` - 아이들의 활기, 희망, 시의 감성
- **Text (Dark Gray)**: `#333333` - 부드러운 가독성

## 📁 프로젝트 구조

```
earth-school-home/
├── app/
│   ├── page.tsx              # 메인 페이지
│   ├── about/                # 시학교 소개
│   ├── activities/           # 주요 활동
│   ├── education/            # 교육 프로그램
│   ├── textbook/             # 교재 소개
│   ├── news/                 # 소식
│   ├── layout.tsx            # 레이아웃
│   └── globals.css           # 글로벌 스타일
├── components/
│   ├── Navigation.tsx        # 네비게이션 바
│   ├── Footer.tsx            # 푸터
│   └── Hero.tsx              # 히어로 섹션
└── public/                   # 정적 파일
```

## 🚀 시작하기

### 필수 요구사항

- Node.js 18.0 이상
- npm 또는 yarn

### 설치

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 프로덕션 빌드
npm run build

# 프로덕션 서버 실행
npm start
```

개발 서버가 실행되면 [http://localhost:3000](http://localhost:3000)에서 확인할 수 있습니다.

## 🛠️ 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animation**: Framer Motion
- **Icons**: React Icons
- **Deployment**: Vercel (권장)

## 📄 페이지 구성

### 1. **홈 (/)** 
시학교의 핵심 가치와 주요 활동을 한눈에 보여주는 메인 페이지

### 2. **시학교 소개 (/about)**
- 우리의 이야기 (설립 배경, 이름의 의미)
- 우리의 미션
- 함께하는 사람들
- 시학교의 여정

### 3. **주요 활동 (/activities)**
- 보령소리탐사대 & 보령소리지도 앱
- 사운드워킹 & 컬러헌팅
- 마을학교 활동 아카이브

### 4. **교육 프로그램 (/education)**
- 소리로 만나는 생물다양성
- 우리 동네 사운드워킹
- 자연의 팔레트, 컬러헌팅
- 교육 프로그램 문의 폼

### 5. **교재 소개 (/textbook)**
- 학교 교육용 교재 소개
- 교재 특징 및 활용 방안
- 교재 구성
- 샘플 신청 및 도입 문의

### 6. **소식 (/news)**
- 소셜 미디어 링크 (Instagram, Blog)
- 최근 게시물
- 뉴스레터 구독
- 문의 정보

## 🎯 주요 기능

### 반응형 네비게이션
- 데스크톱: 가로 메뉴
- 모바일: 햄버거 메뉴 + 애니메이션

### 인터랙티브 요소
- 스크롤 애니메이션
- 호버 효과
- 부드러운 페이지 전환

### 문의 폼
- 이메일 유효성 검사
- 사용자 친화적 UI

## 📱 반응형 브레이크포인트

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 배포

### Vercel 배포 (권장)

```bash
# Vercel CLI 설치
npm i -g vercel

# 배포
vercel
```

또는 GitHub와 연동하여 자동 배포 설정 가능

## 📞 문의

- 📧 이메일: contact@earth-school.kr
- 📞 전화: 010-1234-5678
- 📷 Instagram: @earthschool_kr
- 📝 Blog: blog.earthschool.kr

## 📄 라이선스

© 2025 지구를 지키는 시학교. All rights reserved.

---

**함께 지구를 지켜요** 🌍💚
