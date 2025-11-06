'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Hero from '@/components/Hero';
import { HiVolumeUp, HiLocationMarker, HiColorSwatch } from 'react-icons/hi';

export default function Education() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    program: '',
    message: '',
  });

  const programs = [
    {
      icon: <HiVolumeUp className="text-5xl text-accent" />,
      title: '소리로 만나는 생물다양성',
      duration: '2시간 / 4시간 코스',
      participants: '20-30명',
      description: '\'보령소리지도\' 앱과 교재를 활용한 생물다양성 이론 및 실습. 자연의 소리를 통해 생태계의 다양성과 중요성을 배웁니다.',
      curriculum: [
        '생물다양성의 개념과 중요성',
        '보령소리지도 앱 체험',
        '소리를 통한 생물 관찰',
        '우리 지역 생태계 탐구',
      ],
    },
    {
      icon: <HiLocationMarker className="text-5xl text-accent" />,
      title: '우리 동네 사운드워킹',
      duration: '2-3시간',
      participants: '15-25명',
      description: '무심코 지나쳤던 일상의 소리에 귀 기울이며 공간을 새롭게 인식하는 감각 훈련. 주변 환경에 대한 새로운 관점을 얻게 됩니다.',
      curriculum: [
        '소리 듣기의 기초',
        '동네 소리 지도 만들기',
        '소리를 통한 환경 이해',
        '소리 기록 및 공유',
      ],
    },
    {
      icon: <HiColorSwatch className="text-5xl text-accent" />,
      title: '자연의 팔레트, 컬러헌팅',
      duration: '2-3시간',
      participants: '20-30명',
      description: '자연 속에서 다양한 색을 발견하고 기록하며 생태 감수성을 높이는 아트 워크숍. 시각적 관찰을 통해 자연의 아름다움을 재발견합니다.',
      curriculum: [
        '자연 속 색의 다양성',
        '컬러 헌팅 실습',
        '자연물 관찰과 기록',
        '나만의 자연 팔레트 만들기',
      ],
    },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Formspree 제출
    try {
      const response = await fetch('https://formspree.io/f/xovpgnpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('✅ 문의가 성공적으로 접수되었습니다!\n빠른 시일 내에 연락드리겠습니다. 😊');
        // 폼 초기화
        setFormData({
          name: '',
          organization: '',
          email: '',
          phone: '',
          program: '',
          message: '',
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      alert('❌ 문의 전송 중 오류가 발생했습니다.\n잠시 후 다시 시도해주세요.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Hero
        title="교육 프로그램"
        subtitle="Education Programs"
        description="찾아가는 시학교: 여러분의 공간에서 '지구'를 만납니다"
      />

      {/* 프로그램 소개 */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              프로그램 소개
            </h2>
            <p className="text-lg text-text/80 max-w-3xl mx-auto">
              학교, 도서관, 기관, 기업 어디든 좋습니다.<br />
              시학교가 검증한 감각 기반 생태 교육 프로그램을 귀 기관에 맞춤형으로 제공합니다.
            </p>
          </motion.div>

          <div className="space-y-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-3xl shadow-xl overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8 md:p-10">
                  {/* 아이콘 및 기본 정보 */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="inline-flex bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-6 mb-6">
                      {program.icon}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {program.title}
                    </h3>
                    <div className="space-y-2 text-text/70">
                      <p className="flex items-center gap-2 justify-center lg:justify-start">
                        <span className="font-semibold">소요시간:</span> {program.duration}
                      </p>
                      <p className="flex items-center gap-2 justify-center lg:justify-start">
                        <span className="font-semibold">참여인원:</span> {program.participants}
                      </p>
                    </div>
                  </div>

                  {/* 설명 및 커리큘럼 */}
                  <div className="lg:col-span-2">
                    <p className="text-lg text-text leading-relaxed mb-6">
                      {program.description}
                    </p>
                    
                    <h4 className="text-xl font-bold text-primary mb-4">
                      프로그램 구성
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {program.curriculum.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 bg-gradient-to-r from-primary/5 to-transparent rounded-lg p-3"
                        >
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-text">{item}</span>
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

      {/* 프로그램 특징 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              시학교 프로그램의 특징
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '검증된 콘텐츠',
                description: '2021년부터 마을학교에서 아이들에게 가장 큰 호응을 얻은 수업을 기반으로 제작되었습니다.',
              },
              {
                title: '맞춤형 구성',
                description: '기관의 특성과 참여자의 연령, 인원에 맞춰 프로그램을 조정할 수 있습니다.',
              },
              {
                title: '실용적 교육',
                description: '정규 교육 과정(통합교과, 과학, 미술 등)과 연계 가능한 커리큘럼을 제공합니다.',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl p-8 text-center"
              >
                <h3 className="text-xl font-bold text-primary mb-4">
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

      {/* 문의 폼 */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              교육 프로그램 문의
            </h2>
            <p className="text-lg text-white/90 mb-12 text-center">
              프로그램 상세 커리큘럼이 궁금하시거나 도입을 원하시면<br />
              아래 양식을 작성해 주세요.
            </p>

            <form 
              onSubmit={handleSubmit} 
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 space-y-6"
            >
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">이름 *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="이름을 입력하세요"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">기관명 *</label>
                  <input
                    type="text"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="학교/기관명을 입력하세요"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">이메일 *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">연락처 *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent"
                    placeholder="010-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">관심 프로그램 *</label>
                <select
                  name="program"
                  required
                  value={formData.program}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="" className="text-text">프로그램을 선택하세요</option>
                  <option value="biodiversity" className="text-text">소리로 만나는 생물다양성</option>
                  <option value="soundwalking" className="text-text">우리 동네 사운드워킹</option>
                  <option value="colorhunting" className="text-text">자연의 팔레트, 컬러헌팅</option>
                  <option value="custom" className="text-text">맞춤형 프로그램 문의</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">문의 내용</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="궁금하신 내용을 자유롭게 작성해 주세요"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-accent text-text font-bold rounded-lg hover:bg-accent/90 transition-all duration-300 text-lg"
              >
                문의하기
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}


