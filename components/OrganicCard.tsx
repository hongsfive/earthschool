'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface OrganicCardProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'white';
  className?: string;
  hover?: boolean;
  gradient?: boolean;
}

const OrganicCard = ({ 
  children, 
  variant = 'white',
  className = '',
  hover = true,
  gradient = false
}: OrganicCardProps) => {
  const variantStyles: Record<string, string> = {
    primary: gradient 
      ? 'bg-gradient-to-br from-primary/5 to-sky/10 border-l-4 border-primary'
      : 'bg-primary/5 border-l-4 border-primary',
    secondary: gradient
      ? 'bg-gradient-to-br from-secondary to-softGray/30 border-l-4 border-earth'
      : 'bg-secondary border-l-4 border-earth',
    accent: gradient
      ? 'bg-gradient-to-br from-accent/10 to-sunset/5 border-l-4 border-accent'
      : 'bg-accent/10 border-l-4 border-accent',
    white: gradient
      ? 'bg-gradient-to-br from-white to-softGray/20 border border-softGray'
      : 'bg-white border border-softGray',
  };

  const hoverClass = hover ? 'hover:shadow-2xl hover:-translate-y-1' : '';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`
        rounded-3xl 
        p-6 md:p-8 
        shadow-lg 
        transition-all 
        duration-300 
        ${variantStyles[variant]} 
        ${hoverClass}
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
};

export default OrganicCard;




