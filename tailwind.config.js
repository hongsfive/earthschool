/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (메인 브랜드 컬러)
        primary: '#4A7C59',     // 숲의 초록
        sky: '#87CEEB',         // 하늘의 파랑
        earth: '#8B6B47',       // 흙의 갈색
        
        // Secondary Colors (보조 컬러)
        sprout: '#B8E994',      // 새싹 연두
        sunset: '#FFB366',      // 노을 주황
        water: '#6DB3B8',       // 물의 청록
        
        // Accent & Special
        accent: '#FFB366',      // 노을 주황 (기존 accent 대체)
        secondary: '#FAFAF8',   // 자연 화이트 (배경색)
        
        // Neutral Colors
        softGray: '#E5E5E3',    // 부드러운 그레이
        charcoal: '#3A3A3A',    // 깊은 차콜
        text: '#3A3A3A',        // 텍스트 (차콜)
      },
      fontFamily: {
        // 제목용 폰트
        heading: ['var(--font-nanum)', 'var(--font-poppins)', 'sans-serif'],
        // 본문용 폰트
        body: ['var(--font-noto-sans)', 'var(--font-inter)', 'sans-serif'],
        // 개별 폰트
        nanum: ['var(--font-nanum)', 'sans-serif'],
        noto: ['var(--font-noto-sans)', 'sans-serif'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
        inter: ['var(--font-inter)', 'sans-serif'],
      },
      fontSize: {
        // H1 (대제목)
        'display': ['3rem', { lineHeight: '1.2', fontWeight: '700' }],      // 48px
        // H2 (중제목)
        'heading-lg': ['2.25rem', { lineHeight: '1.3', fontWeight: '700' }], // 36px
        // H3 (소제목)
        'heading-md': ['1.5rem', { lineHeight: '1.4', fontWeight: '600' }],  // 24px
        // H4 (작은 제목)
        'heading-sm': ['1.25rem', { lineHeight: '1.5', fontWeight: '600' }], // 20px
        // Body (본문)
        'body-lg': ['1.125rem', { lineHeight: '1.7', fontWeight: '400' }],   // 18px
        'body': ['1rem', { lineHeight: '1.7', fontWeight: '400' }],          // 16px
        // Caption (보조 텍스트)
        'caption': ['0.875rem', { lineHeight: '1.6', fontWeight: '400' }],   // 14px
        'caption-sm': ['0.75rem', { lineHeight: '1.5', fontWeight: '400' }], // 12px
      },
    },
  },
  plugins: [],
}

