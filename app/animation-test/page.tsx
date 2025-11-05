'use client';

import { FadeIn, SlideIn, Stagger, StaggerItem, ParallaxSection } from '@/components/animations';
import OrganicCard from '@/components/OrganicCard';
import WaveDivider from '@/components/WaveDivider';

export default function AnimationTestPage() {
  const programs = [
    { icon: '🌲', title: '보령소리탐사대', desc: '자연의 소리를 채집하는 생태 탐험' },
    { icon: '✍️', title: '자연시 쓰기', desc: '시로 표현하는 자연의 아름다움' },
    { icon: '🎨', title: '생태 미술', desc: '자연 재료로 만드는 예술 작품' },
    { icon: '🌱', title: '텃밭 가꾸기', desc: '직접 키우고 수확하는 기쁨' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero with Parallax */}
      <ParallaxSection speed={0.7}>
        <section className="relative bg-gradient-to-br from-primary/10 via-sky/5 to-sprout/10 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(74, 124, 89, 0.1) 0%, transparent 50%),
                               radial-gradient(circle at 80% 80%, rgba(135, 206, 235, 0.1) 0%, transparent 50%)`,
            }}
          />
          
          <WaveDivider position="bottom" color="#4A7C59" opacity={0.08} />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <FadeIn>
              <h1 className="font-heading text-display text-primary mb-4">
                🎬 절제된 우아함
              </h1>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <p className="font-body text-body-lg text-text/80 max-w-2xl mx-auto">
                미묘하지만 효과적인 애니메이션으로<br />
                사용자 경험을 향상시킵니다
              </p>
            </FadeIn>
          </div>
        </section>
      </ParallaxSection>

      {/* FadeIn 예시 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="font-heading text-heading-lg text-primary text-center mb-4">
            1. Fade In 애니메이션
          </h2>
          <p className="text-center font-body text-body text-text/70 mb-12">
            스크롤하면 서서히 나타나는 기본 애니메이션
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          <FadeIn delay={0}>
            <OrganicCard variant="primary" gradient>
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h3 className="font-heading text-heading-sm text-primary mb-2">
                  Delay 0s
                </h3>
                <p className="font-body text-caption text-text/70">
                  즉시 나타남
                </p>
              </div>
            </OrganicCard>
          </FadeIn>

          <FadeIn delay={0.2}>
            <OrganicCard variant="accent" gradient>
              <div className="text-center">
                <div className="text-4xl mb-3">⏱️</div>
                <h3 className="font-heading text-heading-sm text-sunset mb-2">
                  Delay 0.2s
                </h3>
                <p className="font-body text-caption text-text/70">
                  0.2초 후 나타남
                </p>
              </div>
            </OrganicCard>
          </FadeIn>

          <FadeIn delay={0.4}>
            <OrganicCard variant="white" gradient>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h3 className="font-heading text-heading-sm text-sky mb-2">
                  Delay 0.4s
                </h3>
                <p className="font-body text-caption text-text/70">
                  0.4초 후 나타남
                </p>
              </div>
            </OrganicCard>
          </FadeIn>
        </div>
      </section>

      {/* SlideIn 예시 */}
      <section className="bg-gradient-to-br from-secondary to-softGray/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="font-heading text-heading-lg text-primary text-center mb-4">
              2. Slide In 애니메이션
            </h2>
            <p className="text-center font-body text-body text-text/70 mb-12">
              방향을 지정하여 슬라이드하며 나타남
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <SlideIn direction="left">
              <OrganicCard variant="primary" gradient>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">←</div>
                  <div>
                    <h3 className="font-heading text-heading-md text-primary mb-2">
                      왼쪽에서
                    </h3>
                    <p className="font-body text-body text-text/80">
                      direction="left"로 왼쪽에서 오른쪽으로 슬라이드
                    </p>
                  </div>
                </div>
              </OrganicCard>
            </SlideIn>

            <SlideIn direction="right">
              <OrganicCard variant="accent" gradient>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">→</div>
                  <div>
                    <h3 className="font-heading text-heading-md text-sunset mb-2">
                      오른쪽에서
                    </h3>
                    <p className="font-body text-body text-text/80">
                      direction="right"로 오른쪽에서 왼쪽으로 슬라이드
                    </p>
                  </div>
                </div>
              </OrganicCard>
            </SlideIn>

            <SlideIn direction="up">
              <OrganicCard variant="white" gradient>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">↑</div>
                  <div>
                    <h3 className="font-heading text-heading-md text-sky mb-2">
                      아래에서 (기본)
                    </h3>
                    <p className="font-body text-body text-text/80">
                      direction="up"로 아래에서 위로 슬라이드 (기본값)
                    </p>
                  </div>
                </div>
              </OrganicCard>
            </SlideIn>

            <SlideIn direction="down">
              <OrganicCard variant="secondary" gradient>
                <div className="flex items-center gap-4">
                  <div className="text-4xl">↓</div>
                  <div>
                    <h3 className="font-heading text-heading-md text-earth mb-2">
                      위에서
                    </h3>
                    <p className="font-body text-body text-text/80">
                      direction="down"으로 위에서 아래로 슬라이드
                    </p>
                  </div>
                </div>
              </OrganicCard>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* Stagger 예시 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <h2 className="font-heading text-heading-lg text-primary text-center mb-4">
            3. Stagger 애니메이션 (순차)
          </h2>
          <p className="text-center font-body text-body text-text/70 mb-12">
            여러 요소가 순차적으로 나타나 리듬감 표현
          </p>
        </FadeIn>

        <Stagger staggerDelay={0.15}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program, index) => (
              <StaggerItem key={index}>
                <OrganicCard variant="white" gradient hover>
                  <div className="text-center">
                    <div className="text-5xl mb-4">{program.icon}</div>
                    <h3 className="font-heading text-heading-sm text-primary mb-2">
                      {program.title}
                    </h3>
                    <p className="font-body text-caption text-text/70">
                      {program.desc}
                    </p>
                  </div>
                </OrganicCard>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </section>

      {/* 조합 예시 */}
      <section className="bg-gradient-to-br from-accent/10 to-sunset/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <h2 className="font-heading text-heading-lg text-primary text-center mb-4">
              4. 애니메이션 조합
            </h2>
            <p className="text-center font-body text-body text-text/70 mb-12">
              다양한 애니메이션을 조합하여 풍부한 경험 제공
            </p>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-8">
            <SlideIn direction="left" delay={0.2}>
              <OrganicCard variant="primary" gradient>
                <h3 className="font-heading text-heading-md text-primary mb-4">
                  Feature 1
                </h3>
                <Stagger staggerDelay={0.1}>
                  <StaggerItem>
                    <p className="font-body text-body text-text/80 mb-3 flex items-start">
                      <span className="text-sprout mr-2">✓</span>
                      <span>왼쪽에서 슬라이드 되는 카드</span>
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="font-body text-body text-text/80 mb-3 flex items-start">
                      <span className="text-sprout mr-2">✓</span>
                      <span>내부 아이템은 순차적으로</span>
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="font-body text-body text-text/80 flex items-start">
                      <span className="text-sprout mr-2">✓</span>
                      <span>리듬감 있는 애니메이션</span>
                    </p>
                  </StaggerItem>
                </Stagger>
              </OrganicCard>
            </SlideIn>

            <SlideIn direction="right" delay={0.2}>
              <OrganicCard variant="accent" gradient>
                <h3 className="font-heading text-heading-md text-sunset mb-4">
                  Feature 2
                </h3>
                <Stagger staggerDelay={0.1}>
                  <StaggerItem>
                    <p className="font-body text-body text-text/80 mb-3 flex items-start">
                      <span className="text-sprout mr-2">✓</span>
                      <span>오른쪽에서 슬라이드</span>
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="font-body text-body text-text/80 mb-3 flex items-start">
                      <span className="text-sprout mr-2">✓</span>
                      <span>동시에 여러 애니메이션</span>
                    </p>
                  </StaggerItem>
                  <StaggerItem>
                    <p className="font-body text-body text-text/80 flex items-start">
                      <span className="text-sprout mr-2">✓</span>
                      <span>절제된 우아함 표현</span>
                    </p>
                  </StaggerItem>
                </Stagger>
              </OrganicCard>
            </SlideIn>
          </div>
        </div>
      </section>

      {/* 안내 메시지 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <FadeIn>
          <div className="bg-gradient-to-br from-primary/5 to-sky/5 rounded-3xl p-8 border-l-4 border-primary">
            <h3 className="font-heading text-heading-md text-primary mb-4">
              ✅ 절제된 우아함 애니메이션 완성!
            </h3>
            <div className="space-y-3 font-body text-body text-text/80">
              <p>
                <strong className="text-primary">FadeIn:</strong> 서서히 나타나는 기본 애니메이션
              </p>
              <p>
                <strong className="text-primary">SlideIn:</strong> 방향성 있는 슬라이드 인
              </p>
              <p>
                <strong className="text-primary">Stagger:</strong> 순차적으로 나타나는 리듬감
              </p>
              <p>
                <strong className="text-primary">Parallax:</strong> 미묘한 패럴랙스 효과 (히어로)
              </p>
              <p className="text-caption text-text/60 pt-4 border-t border-text/10">
                💡 <strong>접근성:</strong> prefers-reduced-motion 자동 지원<br/>
                📱 <strong>모바일:</strong> 패럴랙스는 데스크톱에만 적용<br/>
                ⚡ <strong>성능:</strong> GPU 가속 transform 사용
              </p>
            </div>
          </div>
        </FadeIn>
      </section>
    </div>
  );
}




