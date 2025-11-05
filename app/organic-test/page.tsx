'use client';

import OrganicCard from '@/components/OrganicCard';
import OrganicBackground from '@/components/OrganicBackground';
import WaveDivider from '@/components/WaveDivider';
import { motion } from 'framer-motion';

export default function OrganicTestPage() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      {/* Hero Section with Organic Background */}
      <section className="relative bg-gradient-to-br from-primary/10 via-sky/5 to-sprout/10 py-20 overflow-hidden">
        {/* 유기적 배경 패턴 */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(74, 124, 89, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 80% 80%, rgba(135, 206, 235, 0.1) 0%, transparent 50%),
                             radial-gradient(circle at 40% 20%, rgba(184, 233, 148, 0.1) 0%, transparent 50%)`,
          }}
        />
        
        <WaveDivider position="bottom" color="#4A7C59" opacity={0.08} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-display text-primary mb-4"
          >
            🌿 유기적 형태 테스트
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-body text-body-lg text-text/80"
          >
            둥근 모서리, 그라데이션, 물결 모양의 자연스러운 디자인
          </motion.p>
        </div>
      </section>

      {/* 카드 예시 섹션 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="font-heading text-heading-lg text-primary text-center mb-12">
          유기적 카드 스타일
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Primary Gradient Card */}
          <OrganicCard variant="primary" gradient>
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌲</div>
              <div>
                <h3 className="font-heading text-heading-md text-primary mb-3">
                  숲의 초록
                </h3>
                <p className="font-body text-body text-text/80">
                  자연의 생명력을 담은 기본 카드입니다. 
                  둥근 모서리와 부드러운 그라데이션이 특징입니다.
                </p>
              </div>
            </div>
          </OrganicCard>

          {/* Accent Gradient Card */}
          <OrganicCard variant="accent" gradient>
            <div className="flex items-start gap-4">
              <div className="text-4xl">🌅</div>
              <div>
                <h3 className="font-heading text-heading-md text-sunset mb-3">
                  노을의 따뜻함
                </h3>
                <p className="font-body text-body text-text/80">
                  따뜻한 주황색 강조 카드입니다. 
                  호버 시 살짝 위로 올라가는 효과가 있습니다.
                </p>
              </div>
            </div>
          </OrganicCard>

          {/* White Card */}
          <OrganicCard variant="white" gradient>
            <div className="flex items-start gap-4">
              <div className="text-4xl">☁️</div>
              <div>
                <h3 className="font-heading text-heading-md text-sky mb-3">
                  하늘의 맑음
                </h3>
                <p className="font-body text-body text-text/80">
                  깨끗한 화이트 배경의 카드입니다. 
                  미묘한 그라데이션으로 입체감을 더했습니다.
                </p>
              </div>
            </div>
          </OrganicCard>

          {/* Secondary Card */}
          <OrganicCard variant="secondary" gradient>
            <div className="flex items-start gap-4">
              <div className="text-4xl">🏔️</div>
              <div>
                <h3 className="font-heading text-heading-md text-earth mb-3">
                  대지의 안정
                </h3>
                <p className="font-body text-body text-text/80">
                  흙빛 포인트가 있는 세컨더리 카드입니다. 
                  신뢰감 있는 정보를 담기에 적합합니다.
                </p>
              </div>
            </div>
          </OrganicCard>
        </div>

        {/* 버튼 스타일 */}
        <h2 className="font-heading text-heading-lg text-primary text-center mb-8">
          유기적 버튼 스타일
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <button className="px-8 py-4 bg-primary text-white rounded-full font-heading font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Primary 버튼
          </button>
          
          <button className="px-8 py-4 bg-accent text-white rounded-full font-heading font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Accent 버튼
          </button>
          
          <button className="px-8 py-4 bg-sky text-white rounded-full font-heading font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
            Sky 버튼
          </button>
          
          <button className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-heading font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
            Outline 버튼
          </button>
        </div>

        {/* 큰 Feature 카드 */}
        <h2 className="font-heading text-heading-lg text-primary text-center mb-8">
          Feature 카드
        </h2>

        <OrganicCard variant="white" gradient className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="inline-block bg-accent text-white text-caption px-4 py-2 rounded-full mb-4">
                ✨ Featured Program
              </span>
              <h3 className="font-heading text-heading-lg text-primary mb-4">
                보령소리탐사대
              </h3>
              <p className="font-body text-body text-text/80 mb-6">
                보령 지역의 생명 소리를 채집하고 기록하는 특별한 생태 탐험입니다. 
                숲속, 바닷가, 갯벌에서 들리는 다양한 자연의 소리를 귀 기울여 듣고, 
                이를 시로 표현하는 감동적인 경험을 제공합니다.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start font-body text-body">
                  <span className="text-sprout mr-2 text-xl">✓</span>
                  <span>매주 토요일 오전 10시</span>
                </li>
                <li className="flex items-start font-body text-body">
                  <span className="text-sprout mr-2 text-xl">✓</span>
                  <span>초등학생 및 학부모 대상</span>
                </li>
                <li className="flex items-start font-body text-body">
                  <span className="text-sprout mr-2 text-xl">✓</span>
                  <span>전문 생태 교육가 동행</span>
                </li>
              </ul>
              <button className="px-8 py-3 bg-primary text-white rounded-full font-heading font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                자세히 보기
              </button>
            </div>
            <div className="bg-gradient-to-br from-primary/10 to-sky/10 rounded-2xl p-8 h-64 flex items-center justify-center">
              <span className="text-6xl">🎧🌿</span>
            </div>
          </div>
        </OrganicCard>

        {/* Organic Background 예시 */}
        <h2 className="font-heading text-heading-lg text-primary text-center mb-8">
          유기적 배경 섹션
        </h2>

        <OrganicBackground variant="gradient" className="rounded-3xl p-12">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="font-heading text-heading-lg text-primary mb-4">
              자연과 함께하는 교육
            </h3>
            <p className="font-body text-body-lg text-text/80 mb-8">
              지구를 지키는 시학교는 아이들과 부모가 함께 자연의 소리에 귀 기울이며 
              생명의 소중함을 배우는 생태 교육 프로그램입니다.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-4xl mb-3">👂</div>
                <h4 className="font-heading text-heading-sm text-primary mb-2">관찰</h4>
                <p className="font-body text-caption text-text/70">
                  자연을 오감으로 느끼기
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-4xl mb-3">✍️</div>
                <h4 className="font-heading text-heading-sm text-primary mb-2">표현</h4>
                <p className="font-body text-caption text-text/70">
                  시로 감정 담아내기
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-md">
                <div className="text-4xl mb-3">🌱</div>
                <h4 className="font-heading text-heading-sm text-primary mb-2">성장</h4>
                <p className="font-body text-caption text-text/70">
                  생태적 감수성 키우기
                </p>
              </div>
            </div>
          </div>
        </OrganicBackground>
      </section>

      {/* 안내 메시지 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-gradient-to-br from-accent/10 to-sunset/5 rounded-3xl p-8 border-l-4 border-accent">
          <h3 className="font-heading text-heading-md text-earth mb-4">
            ✅ 유기적 형태 적용 완료!
          </h3>
          <div className="space-y-3 font-body text-body text-text/80">
            <p>
              <strong className="text-primary">둥근 모서리:</strong> rounded-2xl, rounded-3xl로 부드러운 느낌
            </p>
            <p>
              <strong className="text-primary">그라데이션:</strong> 여러 색상이 자연스럽게 섞이는 배경
            </p>
            <p>
              <strong className="text-primary">물결 모양:</strong> SVG로 섹션 구분선 표현
            </p>
            <p>
              <strong className="text-primary">호버 효과:</strong> scale-105로 살짝 커지는 인터랙티브 효과
            </p>
            <p>
              <strong className="text-primary">그림자:</strong> shadow-lg, shadow-xl, shadow-2xl로 깊이감 표현
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

