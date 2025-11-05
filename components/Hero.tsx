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
    <section className="relative bg-gradient-to-b from-primary/10 to-secondary pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    button.primary
                      ? 'bg-accent text-text hover:bg-accent/90 shadow-lg hover:shadow-xl'
                      : 'bg-primary text-white hover:bg-primary/90'
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


