'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { FadeIn, SlideIn, Stagger, StaggerItem } from '@/components/animations';
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

  const activities = [
    {
      emoji: '🎵',
      title: '소리 교육',
      description: '계절의 소리, 생명의 소리를 통해 생물다양성을 배웁니다',
    },
    {
      emoji: '🎨',
      title: '색채 탐험',
      description: '자연이 만든 색을 찾으며 관찰력과 감수성을 기릅니다',
    },
    {
      emoji: '📚',
      title: '교재 개발',
      description: '학교와 가정에서 활용할 수 있는 환경교육 콘텐츠를 만듭니다',
    },
    {
      emoji: '🌱',
      title: '현장 교육',
      description: '보령을 시작으로 전국에 찾아가는 생태교육을 실현합니다',
    },
  ];

  return (
    <>
      <Hero
        title="시학교 소개"
        subtitle="About Us"
        description={
          <span>
            엄마, 아빠, 우리가 함께 지키는<br />
            지구 이야기
          </span>
        }
      />

      {/* 시학교 소개 */}
      <section className="py-20 bg-secondary">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg">
              <div className="space-y-6 text-lg text-text leading-relaxed">
                <p>
                  <strong className="text-primary text-xl">지구를지키는시학교</strong>는 2021년, 
                  기후위기 시대를 마주한 부모들의 작은 결심에서 시작되었습니다.
                </p>
                <p>
                  우리 아이들이 살아갈 지구를 위해 무엇이든 해야겠다는 마음으로 모인 우리는,
                  동요와 그림책으로 시작해 <strong className="text-primary">'시(詩)'</strong>처럼 
                  아름답게 지구를 배우는 학교를 만들었습니다.
                </p>
                <p>
                  <strong className="text-accent">4년간 부모와 아이가 함께 80회 이상</strong>의 수업을 진행하며
                  기후위기 대응, 생물다양성, 에너지전환을 넘어
                  이제는 <strong className="text-primary">소리로 만나는 생물다양성</strong>이라는 
                  새로운 방법으로 자연의 소중함을 일깨우는 교육을 펼쳐가고 있습니다.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 우리의 미션 */}
      <section className="py-20 bg-gradient-to-b from-white to-primary/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
              우리의 미션
            </h2>
          </SlideIn>
          
          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 md:p-12 mb-12">
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-6 text-center">
                "사라져가는 자연의 소리를 듣고,<br />색을 찾아, 마음에 담다"
              </h3>
              
              <p className="font-body text-lg text-text/90 leading-relaxed text-center max-w-3xl mx-auto">
                우리는 자연의 언어인 <strong className="text-primary">'소리'</strong>와 
                <strong className="text-primary"> '색'</strong>을 통해
                아이들이 생태감수성을 키우고 지구와 친구가 되도록 돕습니다.
              </p>
            </div>
          </FadeIn>

          {/* 우리가 하는 일 */}
          <div className="mb-12">
            <SlideIn direction="up" delay={0.3}>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
                우리가 하는 일
              </h3>
            </SlideIn>
            
            <Stagger staggerDelay={0.1} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {activities.map((activity, index) => (
                <StaggerItem key={index}>
                  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    <div className="text-4xl mb-4">{activity.emoji}</div>
                    <h4 className="font-heading text-xl font-bold text-primary mb-3">
                      {activity.title}
                    </h4>
                    <p className="font-body text-text/80 leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* 우리가 꿈꾸는 변화 */}
          <FadeIn delay={0.6}>
            <div className="bg-primary text-white rounded-3xl p-8 md:p-12">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-6 text-center">
                우리가 꿈꾸는 변화
              </h3>
              <div className="space-y-4 text-lg leading-relaxed text-center max-w-3xl mx-auto">
                <p>
                  의무감에서 시작된 환경교육이 아닌,<br />
                  <strong className="text-accent">자연을 사랑하는 마음에서 우러나오는 진짜 변화.</strong>
                </p>
                <p>
                  작은 소리에 귀 기울이고, 미세한 색의 변화를 알아차리는<br />
                  <strong className="text-accent">세심한 아이들이 만들어갈 지속가능한 미래.</strong>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 이름의 의미 - 왜 '시학교'인가요? */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideIn direction="up">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-6">
                왜 '시학교'인가요?
              </h2>
              <p className="font-body text-lg text-text/80 max-w-3xl mx-auto">
                우리의 이름에는 지구를 살리고자 하는 진심과, 감성적으로 자연을 만나며, <br />
                함께 배우고 성장하는 공동체를 지향하는 의미가 담겨 있습니다.
              </p>
            </div>
          </SlideIn>

          <Stagger staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className="flex justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="font-body text-text/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
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


