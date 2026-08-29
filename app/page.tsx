'use client';

import Link from 'next/link';
import Hero from '@/components/Hero';
import { FadeIn, SlideIn, Stagger, StaggerItem } from '@/components/animations';
import { HiVolumeUp, HiAcademicCap, HiBookOpen } from 'react-icons/hi';

export default function Home() {
  // 아이콘 색은 브랜드 초록(primary)으로 통일 — 주황(accent)은 1차 행동 버튼 전용
  const features = [
    {
      icon: <HiVolumeUp className="text-primary" />,
      title: '보령소리탐사대',
      description: '보령의 생명 소리를 채집한 특별한 이야기. 보령소리지도 앱으로 언제든 만나보세요.',
      link: '/activities',
    },
    {
      icon: <HiAcademicCap className="text-primary" />,
      title: '찾아가는 생태 교육',
      description: '학교와 기관을 위한 맞춤형 생태 교육 프로그램을 제공합니다.',
      link: '/education',
    },
    {
      icon: <HiBookOpen className="text-primary" />,
      title: '특별 교재',
      description: '소리로 배우는 생물다양성. 검증된 콘텐츠로 만든 교육용 교재를 소개합니다.',
      link: '/textbook',
    },
  ];

  return (
    <>
      <Hero
        title="지구를 지키는 시학교"
        subtitle="세상의 소리를 듣는 학교, 지구의 마음을 읽는 우리"
        description={
          <span>
            기후위기 시대, 아이와 부모가 함께<br />
            자연의 소리에 귀 기울이며 생명의 소중함을 배웁니다.
          </span>
        }
        ctaButtons={[
          { text: '시학교 이야기 보기', href: '/about', primary: true },
          { text: '교육 프로그램 보기', href: '/education' },
        ]}
      />

      {/* Quick Links Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                시학교의 핵심 활동
              </h2>
              <p className="font-body text-lg text-text/80">
                듣지 못했던 소리를 듣게 될 때, 세상은 다르게 보입니다
              </p>
            </div>
          </SlideIn>

          {/* 비대칭 벤토: 대표 활동(소리탐사대)을 큰 셀로, 나머지 둘을 작은 셀로 */}
          <Stagger staggerDelay={0.12} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <StaggerItem
                key={index}
                className={index === 0 ? 'md:row-span-2' : ''}
              >
                <Link
                  href={feature.link}
                  className={`group flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 h-full ${
                    index === 0 ? 'p-10 justify-center' : 'p-8'
                  }`}
                >
                  <div className={`mb-5 ${index === 0 ? 'text-6xl' : 'text-4xl'}`}>
                    {feature.icon}
                  </div>
                  <h3 className={`font-heading font-bold text-primary mb-3 ${
                    index === 0 ? 'text-3xl' : 'text-2xl'
                  }`}>
                    {feature.title}
                  </h3>
                  <p className="font-body text-text/80 leading-relaxed">
                    {feature.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 font-heading font-semibold text-sm text-primary/70 group-hover:text-primary transition-colors">
                    자세히 보기
                    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              왜 '시학교'인가요?
            </h2>
          </FadeIn>
          
          <Stagger staggerDelay={0.2} className="space-y-6 font-body text-lg leading-relaxed">
            <StaggerItem>
              <p>
                <strong className="text-sprout">지구를 지키는:</strong> 기후위기 대응을 통해 지구를 살리자는 우리의 다짐입니다.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                <strong className="text-sprout">시(詩):</strong> 동요와 그림책에서 시작된 '운문'처럼, 감성적이고 다정한 방식으로 자연을 만납니다.
              </p>
            </StaggerItem>
            <StaggerItem>
              <p>
                <strong className="text-sprout">학교:</strong> 2021년 시작된 마을학교처럼, 엄마, 아빠, 아이들이 함께 배우고 성장하는 공동체입니다.
              </p>
            </StaggerItem>
          </Stagger>
          
          <FadeIn delay={0.2}>
            {/* 2차 행동: 브랜드 톤에 맞춰 흰색 아웃라인(주황은 1차 행동 전용) */}
            <Link
              href="/about"
              className="inline-block mt-8 px-8 py-4 border-2 border-white/70 text-white rounded-full font-heading font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
            >
              더 알아보기
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-secondary to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
              함께 지구를 지켜요
            </h2>
          </SlideIn>
          
          <FadeIn delay={0.1}>
            <p className="font-body text-lg text-text mb-8">
              시학교의 교육 프로그램과 교재로 아이들에게 생태 감수성을 선물하세요.
            </p>
          </FadeIn>

          <FadeIn delay={0.15}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* 1차 행동(주황): 페이지 전체의 최종 전환 = 문의. 폼으로 직행 */}
              <Link
                href="/education#contact"
                className="px-8 py-4 bg-accent text-text rounded-full font-heading font-semibold hover:bg-accent/90 transition-colors duration-300 shadow-sm"
              >
                문의하기
              </Link>
              {/* 2차 행동(초록 아웃라인): 교재 소개 열람 */}
              <Link
                href="/textbook"
                className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-heading font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
              >
                교재 소개 보기
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
