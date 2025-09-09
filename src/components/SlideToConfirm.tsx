
import { useState, useRef } from 'react';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface SlideToConfirmProps {
  onConfirm: () => void;
  text?: string;
  confirmText?: string;
}

const SlideToConfirm = ({ 
  onConfirm, 
  text = "Slide to confirm", 
  confirmText = "Confirmed!" 
}: SlideToConfirmProps) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    
    const rect = sliderRef.current.getBoundingClientRect();
    const newPosition = Math.max(0, Math.min(e.clientX - rect.left - 20, rect.width - 60));
    setPosition(newPosition);

    if (newPosition >= rect.width - 80) {
      setIsConfirmed(true);
      setIsDragging(false);
      onConfirm();
    }
  };

  const handleMouseUp = () => {
    if (!isConfirmed) {
      setPosition(0);
    }
    setIsDragging(false);
  };

  return (
    <div 
      ref={sliderRef}
      className="relative w-full h-12 bg-muted rounded-full overflow-hidden cursor-pointer select-none"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium">
        {isConfirmed ? confirmText : text}
      </div>
      
      <div
        className={`absolute top-1 left-1 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 ${
          isConfirmed ? 'bg-green-500 text-white' : 'bg-primary text-white'
        }`}
        style={{ transform: `translateX(${position}px)` }}
        onMouseDown={handleMouseDown}
      >
        {isConfirmed ? <CheckCircle className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
      </div>
    </div>
  );
};

export default SlideToConfirm;
