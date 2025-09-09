import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  backgroundImage: string;
  recentProjects: string[];
  index: number;
  hoveredService: number | null;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

const ServiceCard = ({
  icon: Icon,
  title,
  description,
  backgroundImage,
  recentProjects,
  index,
  hoveredService,
  onMouseEnter,
  onMouseLeave
}: ServiceCardProps) => {
  return (
    <Card
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group min-h-[420px] sm:min-h-[450px] md:min-h-[480px]"
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Default Overlay */}
      <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${
        hoveredService === index ? 'opacity-0' : 'opacity-95'
      }`} />

      {/* Hover Overlay */}
      <div className={`absolute inset-0 bg-gramsak-green transition-opacity duration-500 ${
        hoveredService === index ? 'opacity-90' : 'opacity-0'
      }`} />

      <CardContent className="relative z-10 p-6 sm:p-8 h-full flex flex-col justify-between">
        {/* Default State Content */}
        <div className={`transition-all duration-500 ${
          hoveredService === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full bg-green-50 flex items-center justify-center">
            <Icon className="h-7 w-7 sm:h-8 sm:w-8 text-gramsak-green" />
          </div>
          
          <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-foreground leading-tight">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            {description}
          </p>
        </div>

        {/* Hover State Content */}
        <div className={`absolute inset-6 sm:inset-8 flex flex-col justify-between transition-all duration-500 ${
          hoveredService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex-1 overflow-y-auto">
            <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white leading-tight">
              {title}
            </h3>
            
            <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
            
            <div className="mb-4 sm:mb-6">
              <h4 className="text-sm font-semibold text-white/90 mb-2 sm:mb-3">Recent Projects:</h4>
              <ul className="space-y-1 sm:space-y-2">
                {recentProjects.map((project, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-xs sm:text-sm leading-relaxed">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;