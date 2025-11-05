'use client';

interface OrganicBackgroundProps {
  variant?: 'primary' | 'secondary' | 'accent' | 'gradient';
  children: React.ReactNode;
  className?: string;
}

const OrganicBackground = ({ 
  variant = 'primary', 
  children,
  className = ''
}: OrganicBackgroundProps) => {
  const backgroundStyles: Record<string, string> = {
    primary: 'bg-gradient-to-br from-primary/5 via-sky/5 to-sprout/5',
    secondary: 'bg-gradient-to-br from-secondary via-softGray/30 to-secondary',
    accent: 'bg-gradient-to-br from-accent/10 via-sunset/5 to-water/10',
    gradient: 'bg-gradient-to-br from-primary/10 via-sky/5 to-sprout/10',
  };

  return (
    <div className={`relative ${backgroundStyles[variant]} ${className}`}>
      {/* 유기적 배경 패턴 */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(74, 124, 89, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 80% 80%, rgba(135, 206, 235, 0.05) 0%, transparent 50%),
                           radial-gradient(circle at 40% 20%, rgba(184, 233, 148, 0.05) 0%, transparent 50%)`,
        }}
      />
      
      {/* 콘텐츠 */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default OrganicBackground;

