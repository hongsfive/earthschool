'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string | React.ReactNode;
  ctaButtons?: {
    text: string;
    href: string;
    primary?: boolean;
  }[];
}

const Hero = ({ title, subtitle, description, ctaButtons }: HeroProps) => {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-sky/5 to-sprout/10 pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* 유기적 배경 패턴 */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(74, 124, 89, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(135, 206, 235, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(184, 233, 148, 0.1) 0%, transparent 50%)`,
        }}
      />

      {/* 보타니컬 선화 (식물도감 스타일 · 장식) */}
      {/* 왼쪽 아래: 잎맥이 있는 가지 */}
      <svg
        aria-hidden="true"
        className="leaf-sway pointer-events-none absolute bottom-0 left-[1%] z-[1] w-40 opacity-50 md:w-56"
        style={{ ['--leaf-rot' as string]: '-6deg' }}
        viewBox="0 0 240 300"
        fill="none"
      >
        <g stroke="#4A7C59" strokeWidth="1.6" opacity="0.55" fill="none" strokeLinecap="round">
          <path d="M120,300 C118,220 115,150 122,70" />
          <path d="M120,240 C90,220 70,190 78,158 C112,168 128,200 120,240 Z" />
          <path d="M118,232 L86,178" strokeWidth="1" />
          <path d="M112,222 L96,198 M108,210 L100,196" strokeWidth="0.7" />
          <path d="M122,190 C152,172 172,142 164,110 C130,120 114,150 122,190 Z" />
          <path d="M124,182 L156,130" strokeWidth="1" />
          <path d="M130,172 L146,150 M134,160 L142,148" strokeWidth="0.7" />
          <path d="M121,120 C96,104 82,78 90,52 C118,62 130,90 121,120 Z" />
          <path d="M120,114 L94,70" strokeWidth="1" />
        </g>
      </svg>

      {/* 오른쪽 위: 작은 잎 (청록) */}
      <svg
        aria-hidden="true"
        className="leaf-sway--slow pointer-events-none absolute right-[3%] top-[8%] z-[1] hidden w-24 opacity-50 sm:block md:w-32"
        style={{ ['--leaf-rot' as string]: '18deg' }}
        viewBox="0 0 130 170"
        fill="none"
      >
        <g stroke="#6DB3B8" strokeWidth="1.5" opacity="0.5" fill="none" strokeLinecap="round">
          <path d="M65,170 C64,120 62,80 66,30" />
          <path d="M65,110 C40,96 28,70 36,44 C64,54 76,82 65,110 Z" />
          <path d="M64,104 L40,62" strokeWidth="0.9" />
          <path d="M66,84 C90,70 102,46 95,22 C70,32 58,58 66,84 Z" />
          <path d="M67,80 L90,42" strokeWidth="0.9" />
        </g>
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {subtitle && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-semibold text-sm md:text-base mb-4 uppercase tracking-wider"
            >
              {subtitle}
            </motion.p>
          )}
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl md:text-6xl font-bold text-primary mb-6"
          >
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl text-text max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            {description}
          </motion.p>

          {ctaButtons && ctaButtons.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              {ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.href}
                  className={`px-8 py-4 rounded-full font-semibold transition-colors duration-300 ${
                    button.primary
                      ? 'bg-accent text-text hover:bg-accent/90 shadow-sm'
                      : 'bg-primary text-white hover:bg-primary/90 shadow-sm'
                  }`}
                >
                  {button.text}
                </Link>
              ))}
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;


