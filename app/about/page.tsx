'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { HiHeart, HiLightBulb, HiUserGroup } from 'react-icons/hi';

export default function About() {
  const values = [
    {
      icon: <HiHeart className="text-5xl text-accent" />,
      title: '지구를 지키는',
      description: '기후위기 대응을 통해 지구를 살리자는 우리의 다짐입니다.',
    },
    {
      icon: <HiLightBulb className="text-5xl text-accent" />,
      title: '시(詩)',
      description: '동요와 그림책에서 시작된 운문처럼, 감성적이고 다정한 방식으로 자연을 만납니다.',
    },
    {
      icon: <HiUserGroup className="text-5xl text-accent" />,
      title: '학교',
      description: '2021년 시작된 마을학교처럼, 엄마, 아빠, 아이들이 함께 배우고 성장하는 공동체입니다.',
    },
  ];

  return (
    <>
      <Hero
        title="시학교 소개"
        subtitle="About Us"
        description="세상의 소리를 듣는 학교, 지구의 마음을 읽는 우리"
      />

      {/* 이름의 의미 */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              왜 '시학교'인가요?
            </h2>
            <p className="text-lg text-text/80 max-w-3xl mx-auto">
              우리의 이름에는 지구를 살리고자 하는 진심과, 감성적으로 자연을 만나며, <br />
              함께 배우고 성장하는 공동체를 지향하는 의미가 담겨 있습니다.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="flex justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  {value.title}
                </h3>
                <p className="text-text/80 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 우리의 미션 */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              우리의 미션
            </h2>
            
            <div className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                "듣지 못했던 소리를 듣게 될 때,<br />세상은 다르게 보입니다"
              </h3>
              
              <div className="space-y-6 text-lg text-text leading-relaxed">
                <p>
                  시학교는 <strong className="text-primary">'감각'</strong>을 통해 기후위기를 배웁니다.
                </p>
                <p>
                  제주의 사운드워킹, 보령의 컬러헌팅, 그리고 <strong className="text-primary">'보령소리지도'</strong> 앱은 
                  모두 자연의 목소리에 귀 기울이는 과정입니다.
                </p>
                <p>
                  우리는 이 경험이 아이들을 <strong className="text-primary">기후위기 시대의 주체</strong>로 
                  성장시킬 것이라 믿습니다.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 함께하는 사람들 */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              함께하는 사람들
            </h2>
            <p className="text-lg text-white/90 mb-12 max-w-3xl mx-auto">
              시학교는 교육자, 예술가, 환경운동가, 그리고 무엇보다 
              지구를 사랑하는 부모와 아이들이 함께 만들어가는 공동체입니다.
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
              <p className="text-xl md:text-2xl leading-relaxed">
                2021년부터 시작된 마을학교의 경험을 바탕으로,<br />
                더 많은 아이들에게 생태 감수성을 전하기 위해<br />
                오늘도 한 걸음씩 나아갑니다.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Timeline */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
              시학교의 여정
            </h2>
            
            <div className="space-y-8">
              {[
                { year: '2021', title: '마을학교 시작', description: '엄마, 아빠, 아이들이 함께하는 마을학교로 첫 걸음을 떼었습니다.' },
                { year: '2024', title: '찾아가는 에너지전환교육', description: '보령시에너지센터와 함께 초등학교 20곳을 선정하여 에너지전환교육을 실시했습니다.' },
                { year: '2025', title: '보령소리탐사대', description: '제주도에서의 사운드워킹 경험을 바탕으로 보령의 소리를 담는 소리탐사대를 시작했습니다.' },
                { year: '2025', title: '소리로 만나는 생물다양성', description: '농촌신활력사업에 참여하여 소리로 만나는 생물다양성 수업을 기획하고 교재를 제작했습니다.' },
                { year: 'Now', title: '교육 프로그램 확장', description: '학교와 기관을 위한 맞춤형 생태 교육 프로그램을 개발하고 있습니다.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-primary font-bold text-lg">{item.year}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-text/80">{item.description}</p>
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


