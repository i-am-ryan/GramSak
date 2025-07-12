
import { ReactNode } from 'react';
import { Card } from '@/components/ui/card';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

const GlassCard = ({ children, className = '', hover = true }: GlassCardProps) => {
  return (
    <Card 
      className={`
        backdrop-blur-lg bg-white/10 border border-white/20 
        shadow-xl shadow-black/10
        ${hover ? 'hover:bg-white/20 hover:shadow-2xl transition-all duration-300' : ''}
        ${className}
      `}
    >
      {children}
    </Card>
  );
};

export default GlassCard;
