'use client';

import Link from 'next/link';
import { FaInstagram, FaBlog } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 소개 */}
          <div>
            <h3 className="text-xl font-bold mb-4">지구를 지키는 시학교</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              기후위기 시대, 아이와 부모가 함께 <br />자연의 소리에 귀 기울이며
              생명의 소중함을 배웁니다.
            </p>
          </div>

          {/* 바로가기 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">바로가기</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-white/80 hover:text-accent transition-colors">
                  시학교 소개
                </Link>
              </li>
              <li>
                <Link href="/activities" className="text-white/80 hover:text-accent transition-colors">
                  주요 활동
                </Link>
              </li>
              <li>
                <Link href="/education" className="text-white/80 hover:text-accent transition-colors">
                  교육 프로그램
                </Link>
              </li>
              <li>
                <Link href="/textbook" className="text-white/80 hover:text-accent transition-colors">
                  교재 소개
                </Link>
              </li>
            </ul>
          </div>

          {/* 소셜 미디어 */}
          <div>
            <h4 className="text-lg font-semibold mb-4">소식</h4>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors"
              >
                <FaInstagram size={24} />
                <span className="text-sm">Instagram</span>
              </a>
              <a
                href="https://blog.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-white/80 hover:text-accent transition-colors"
              >
                <FaBlog size={24} />
                <span className="text-sm">Blog</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/60">
          <p>&copy; 2025 지구를 지키는 시학교. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


