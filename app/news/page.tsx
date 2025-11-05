'use client';

import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import { FaInstagram, FaBlog } from 'react-icons/fa';
import { HiExternalLink } from 'react-icons/hi';

export default function News() {
  const socialLinks = [
    {
      platform: 'Instagram',
      icon: <FaInstagram className="text-6xl" />,
      handle: '@earthschool_kr',
      url: 'https://instagram.com',
      description: '시학교의 일상과 활동 사진, 아이들의 모습을 매일 만나보세요. 스토리를 통해 실시간 소식도 전해드립니다.',
      color: 'from-pink-500 to-purple-600',
      bgColor: 'bg-gradient-to-br from-pink-50 to-purple-50',
    },
    {
      platform: 'Blog',
      icon: <FaBlog className="text-6xl" />,
      handle: 'blog.earthschool.kr',
      url: 'https://blog.com',
      description: '시학교의 교육 철학, 프로그램 후기, 생태 교육 자료 등 깊이 있는 콘텐츠를 블로그에서 확인하세요.',
      color: 'from-green-500 to-teal-600',
      bgColor: 'bg-gradient-to-br from-green-50 to-teal-50',
    },
  ];

  const recentPosts = [
    {
      title: '2025 보령소리탐사대 활동 시작!',
      date: '2025.03.15',
      excerpt: '올해도 보령의 생명 소리를 채집하는 탐사대 활동이 시작되었습니다. 아이들의 설레는 첫 탐사 이야기를 전합니다.',
      category: '활동 소식',
    },
    {
      title: '제주 사운드워킹 프로그램 후기',
      date: '2025.02.28',
      excerpt: '제주의 오름과 숲길을 걸으며 자연의 소리에 귀 기울인 특별한 경험. 참여 가족들의 생생한 후기를 만나보세요.',
      category: '프로그램 후기',
    },
    {
      title: '보령소리지도 앱 업데이트 안내',
      date: '2025.02.10',
      excerpt: '새로운 소리가 추가되고 사용자 경험이 개선된 보령소리지도 앱의 최신 버전을 만나보세요.',
      category: '공지사항',
    },
    {
      title: '봄을 맞이하는 컬러헌팅 안내',
      date: '2025.03.01',
      excerpt: '봄꽃이 만개하는 계절, 자연의 다채로운 색을 발견하는 컬러헌팅 프로그램에 초대합니다.',
      category: '프로그램 안내',
    },
  ];

  return (
    <>
      <Hero
        title="소식"
        subtitle="News & Updates"
        description="시학교의 가장 빠른 소식"
      />

      {/* 소셜 미디어 링크 */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              시학교와 소통하세요
            </h2>
            <p className="text-lg text-text/80">
              시학교의 생생한 활동 소식은 소셜 미디어에서 매일 만나보실 수 있습니다
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`${link.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 block`}
              >
                <div className="flex flex-col items-center text-center">
                  {/* 아이콘 */}
                  <div className={`bg-gradient-to-br ${link.color} text-white rounded-full p-6 mb-6 shadow-lg`}>
                    {link.icon}
                  </div>

                  {/* 플랫폼 정보 */}
                  <h3 className="text-2xl font-bold text-primary mb-2">
                    {link.platform}
                  </h3>
                  <p className="text-lg text-primary/70 mb-4 font-mono">
                    {link.handle}
                  </p>
                  <p className="text-text/80 leading-relaxed mb-6">
                    {link.description}
                  </p>

                  {/* 링크 버튼 */}
                  <div className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${link.color} text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300`}>
                    방문하기
                    <HiExternalLink className="text-xl" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* 최근 게시물 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              최근 소식
            </h2>
            <p className="text-lg text-text/80">
              시학교의 최신 활동과 소식을 확인하세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recentPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-accent rounded-full text-sm font-semibold text-text">
                    {post.category}
                  </span>
                  <span className="text-text/60 text-sm">{post.date}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                  {post.title}
                </h3>
                <p className="text-text/80 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                <button className="text-primary font-semibold hover:text-primary/70 transition-colors flex items-center gap-2">
                  자세히 보기
                  <HiExternalLink />
                </button>
              </motion.article>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <button className="px-8 py-4 bg-primary text-white rounded-full font-semibold hover:bg-primary/90 transition-all duration-300">
              더 많은 소식 보기
            </button>
          </motion.div>
        </div>
      </section>

      {/* 뉴스레터 구독 */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              뉴스레터 구독하기
            </h2>
            <p className="text-lg text-white/90 mb-8">
              시학교의 새로운 소식과 프로그램 정보를<br />
              이메일로 받아보세요
            </p>

            <form className="max-w-2xl mx-auto flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-6 py-4 rounded-full text-text focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-accent text-text rounded-full font-semibold hover:bg-accent/90 transition-all duration-300 whitespace-nowrap"
              >
                구독하기
              </button>
            </form>

            <p className="text-sm text-white/70 mt-6">
              * 개인정보는 뉴스레터 발송 목적으로만 사용됩니다
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gradient-to-b from-secondary to-accent/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
              문의하기
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl mb-3">📧</div>
                <h3 className="font-bold text-primary mb-2">이메일</h3>
                <p className="text-text/70">contact@earth-school.kr</p>
              </div>
              <div>
                <div className="text-4xl mb-3">📞</div>
                <h3 className="font-bold text-primary mb-2">전화</h3>
                <p className="text-text/70">010-1234-5678</p>
              </div>
              <div>
                <div className="text-4xl mb-3">💬</div>
                <h3 className="font-bold text-primary mb-2">카카오톡</h3>
                <p className="text-text/70">@시학교</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary/10 text-center">
              <p className="text-text/70">
                평일 오전 10시 - 오후 6시 (점심시간 12-1시)<br />
                주말 및 공휴일 휴무
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}


