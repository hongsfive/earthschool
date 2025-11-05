'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { HiVolumeUp, HiColorSwatch, HiMap } from 'react-icons/hi';

export default function Activities() {
  const projects = [
    {
      icon: <HiMap className="text-6xl text-accent" />,
      title: '마을학교',
      subtitle: '2021년부터의 활동 아카이브',
      description: '시학교의 시작이었던 마을학교. 2021년부터 엄마, 아빠, 아이들이 함께 모여 자연을 배우고 경험하며 성장해왔습니다. 이 경험들이 오늘날 시학교의 모든 프로그램의 기반이 되었습니다.',
      features: [
        '기후위기와 생물다양성 배우기',
        '기후위기 대응 캠페인',
        '가족 단위 생태 교육',
        '플로깅',
      ],
      bgColor: 'from-primary/10 to-secondary',
    },
    {
      icon: <HiVolumeUp className="text-6xl text-accent" />,
      title: '보령소리탐사대',
      subtitle: '보령의 생명 소리를 채집하다',
      description: '보령소리탐사대는 보령의 갯벌, 숲, 마을에 숨 쉬는 소리들을 기록했습니다. 이 소리들은 \'보령소리지도\' 앱에 담겨, 언제 어디서든 보령의 생명다양성을 만나는 창구가 되었습니다.',
      features: [
        '보령의 다양한 생태계 소리 채집',
        '보령소리지도 모바일 앱 제작',
        '생물다양성 교육 콘텐츠 개발',
        '지역 생태계 보존 활동',
      ],
      bgColor: 'from-primary/5 to-accent/10',
    },
    {
      icon: <HiColorSwatch className="text-6xl text-accent" />,
      title: '소리로 만나는 생물다양성',
      subtitle: '소리와 생물다양성의 만남',
      description: '소리를 통해 다양한 생명을 만나며 생물다양성을 일깨우는 교육을 실시하고 교재를 제작합니다.',
      features: [
        '사운드워킹: 소리를 통해 자연을 만나다',
        '컬러헌팅: 자연 속 색을 발견하고 기록하기',
        '감각 기반 생태 교육 프로그램',
        '지역별 맞춤형 자연 탐사 활동',
      ],
      bgColor: 'from-accent/10 to-primary/5',
    },
  ];

  return (
    <>
      <Hero
        title="주요 활동"
        subtitle="Our Activities"
        description="시학교가 걸어온 길, 우리가 기록한 지구의 목소리"
      />

      {/* 프로젝트 상세 */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`bg-gradient-to-br ${project.bgColor} rounded-3xl p-8 md:p-12 shadow-xl`}
              >
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  {/* Icon */}
                  <div className="flex-shrink-0">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      {project.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xl text-primary/70 mb-6 font-semibold">
                      {project.subtitle}
                    </p>
                    <p className="text-lg text-text leading-relaxed mb-8">
                      {project.description}
                    </p>

                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {project.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-white/60 rounded-lg p-4"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 보령소리지도 앱 특별 소개 */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <HiVolumeUp className="text-8xl text-accent mx-auto mb-8" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              보령소리지도 앱
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              보령의 갯벌, 숲, 마을 곳곳에서 채집한 생명의 소리들을 언제 어디서든 만나보세요.
              앱을 통해 보령의 생물다양성을 직접 체험할 수 있습니다.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mt-12">
              <h3 className="text-2xl font-bold mb-6">앱 주요 기능</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h4 className="text-accent font-bold text-lg mb-2">소리 지도</h4>
                  <p className="text-white/80">보령의 생명 소리를 지도에서 확인하고 듣기</p>
                </div>
                <div>
                  <h4 className="text-accent font-bold text-lg mb-2">소리 수집</h4>
                  <p className="text-white/80">내 주변의 소리를 녹음해서 공유하기</p>
                </div>
                <div>
                  <h4 className="text-accent font-bold text-lg mb-2">소리 창고</h4>
                  <p className="text-white/80">보령의 소리들이 모인 소리 창고</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button className="px-8 py-4 bg-accent text-text rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 text-lg">
                앱 체험하기
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">
              우리의 성과
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { number: '4+', label: '년간 활동' },
                { number: '100+', label: '참여 가족' },
                { number: '50+', label: '채집한 소리' },
                { number: '20+', label: '교육 프로그램' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8"
                >
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-text/70 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


