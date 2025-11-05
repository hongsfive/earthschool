'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { HiCheckCircle, HiDownload, HiMail } from 'react-icons/hi';

export default function Textbook() {
  const features = [
    {
      title: '검증된 콘텐츠',
      description: '시학교 마을학교에서 아이들에게 가장 큰 호응을 얻은 수업을 기반으로 제작되었습니다.',
    },
    {
      title: '실용적 구성',
      description: '\'보령소리지도\' 앱과 연동하여 교실에서도 생생한 자연의 소리를 들으며 학습할 수 있습니다.',
    },
    {
      title: '학교 맞춤형',
      description: '정규 교육 과정(통합교과, 과학, 미술 등)과 연계 가능한 가이드라인을 제공합니다.',
    },
    {
      title: '체험 중심',
      description: '이론뿐만 아니라 직접 체험하고 관찰하는 활동 중심의 커리큘럼으로 구성되어 있습니다.',
    },
  ];

  const contents = [
    { chapter: '1장', title: '생물다양성이란 무엇일까?', topics: ['생물다양성의 개념', '우리 주변의 다양한 생명', '생물다양성이 중요한 이유'] },
    { chapter: '2장', title: '소리로 듣는 자연', topics: ['자연의 소리 탐구', '보령소리지도 활용법', '소리를 통한 생물 관찰'] },
    { chapter: '3장', title: '우리 지역의 생태계', topics: ['갯벌 생태계', '숲 생태계', '마을 생태계'] },
    { chapter: '4장', title: '생물다양성 지키기', topics: ['위기에 처한 생물들', '우리가 할 수 있는 일', '함께 만드는 지속 가능한 미래'] },
  ];

  return (
    <>
      <Hero
        title="교재 소개"
        subtitle="Educational Materials"
        description="교실에서 만나는 생생한 자연의 소리"
      />

      {/* 교재 소개 */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* 교재 이미지 (목업) */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-gradient-to-br from-primary to-primary/70 rounded-3xl p-12 shadow-2xl aspect-[3/4] flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-6">📚</div>
                  <h3 className="text-3xl font-bold mb-4">
                    소리로 만나는<br />생물다양성
                  </h3>
                  <p className="text-white/90 text-lg">
                    학교 교육용 교재
                  </p>
                  <div className="mt-6 text-accent text-xl font-semibold">
                    제작 중
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 교재 정보 */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                학교 교육용 교재<br />
                <span className="text-accent">소리로 만나는 생물다양성</span>
              </h2>
              
              <p className="text-lg text-text leading-relaxed mb-8">
                보령소리탐사대의 경험을 바탕으로 
                제작된 생물다양성 교육용 교재입니다. 아이들이 소리를 통해 자연을 
                발견하고 생태계의 중요성을 이해할 수 있도록 구성되어 있습니다.
              </p>

              <div className="bg-white rounded-2xl p-6 shadow-lg space-y-3">
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-accent text-2xl flex-shrink-0" />
                  <span className="text-text"><strong>대상:</strong> 초등학교 3-6학년</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-accent text-2xl flex-shrink-0" />
                  <span className="text-text"><strong>구성:</strong> 학생용 교재 + 교사용 가이드</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-accent text-2xl flex-shrink-0" />
                  <span className="text-text"><strong>특징:</strong> 소리자료와 함께 구성되어 있습니다.</span>
                </div>
                <div className="flex items-center gap-3">
                  <HiCheckCircle className="text-accent text-2xl flex-shrink-0" />
                  <span className="text-text"><strong>상태:</strong> 제작 중 (2025년 11월말 출간 예정)</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 교재 특징 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              교재의 특징
            </h2>
            <p className="text-lg text-text/80">
              시학교만의 독특한 접근 방식으로 생물다양성을 배웁니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {feature.title}
                </h3>
                <p className="text-text/80 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 교재 구성 */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              교재 구성
            </h2>

            <div className="space-y-6">
              {contents.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6"
                >
                  <div className="flex flex-col md:flex-row md:items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold text-lg">
                          {item.chapter}
                        </span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold mb-3">
                        {item.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {item.topics.map((topic, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-white/20 rounded-full text-sm"
                          >
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* 활용 방안 */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              활용 방안
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: '정규 수업',
                  description: '과학, 사회, 미술 등 다양한 교과와 연계하여 정규 수업 시간에 활용할 수 있습니다.',
                },
                {
                  title: '창의적 체험활동',
                  description: '동아리 활동, 자율 활동 등 창의적 체험활동 시간에 생태 교육 자료로 사용할 수 있습니다.',
                },
                {
                  title: '가정 학습',
                  description: '부모와 아이가 함께 읽고 실천하며 가정에서도 생태 감수성을 기를 수 있습니다.',
                },
              ].map((use, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg text-center"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {use.title}
                  </h3>
                  <p className="text-text/80 leading-relaxed">
                    {use.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-white to-accent/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              교재에 관심이 있으신가요?
            </h2>
            <p className="text-lg text-text mb-8">
              교재 샘플(PDF) 미리보기를 신청하시거나<br />
              도입 문의를 해주시면 상세한 안내를 드리겠습니다.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-accent text-text rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 flex items-center justify-center gap-2">
                <HiDownload className="text-xl" />
                샘플 미리보기 신청
              </button>
              <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 flex items-center justify-center gap-2">
                <HiMail className="text-xl" />
                도입 문의하기
              </button>
            </div>

            <div className="mt-12 bg-white rounded-2xl p-6 shadow-lg inline-block">
              <p className="text-text/70">
                📧 <strong>이메일:</strong> contact@earth-school.kr<br />
                📞 <strong>문의:</strong> 010-1234-5678
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


