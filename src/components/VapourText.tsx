
import { useEffect, useState } from 'react';

interface VapourTextProps {
  text: string;
  className?: string;
}

const VapourText = ({ text, className = '' }: VapourTextProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`relative ${className}`}>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-1000 ${
              isVisible 
                ? 'opacity-100 transform translate-y-0' 
                : 'opacity-0 transform translate-y-8'
            }`}
            style={{ 
              transitionDelay: `${index * 50}ms`,
              textShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default VapourText;
