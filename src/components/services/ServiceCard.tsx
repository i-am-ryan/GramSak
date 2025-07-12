
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
      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer group h-80"
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

      <CardContent className="relative z-10 p-8 h-full flex flex-col justify-between">
        {/* Default State Content */}
        <div className={`transition-all duration-500 ${
          hoveredService === index ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
        }`}>
          <div className="w-16 h-16 mb-6 rounded-full bg-green-50 flex items-center justify-center">
            <Icon className="h-8 w-8 text-gramsak-green" />
          </div>
          
          <h3 className="text-xl font-bold mb-4 text-foreground">
            {title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed text-sm">
            {description}
          </p>
        </div>

        {/* Hover State Content */}
        <div className={`absolute inset-8 flex flex-col justify-between transition-all duration-500 ${
          hoveredService === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div>
            <div className="w-12 h-12 mb-4 rounded-full bg-white/20 flex items-center justify-center">
              <Icon className="h-6 w-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-4 text-white">
              {title}
            </h3>
            
            <p className="text-white/90 mb-6 text-sm leading-relaxed">
              {description}
            </p>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-white/90 mb-3">Recent Projects:</h4>
              <ul className="space-y-2">
                {recentProjects.map((project, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-white/90 text-sm leading-relaxed">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Button 
            variant="ghost" 
            className="self-start text-white hover:bg-white/20 p-0 h-auto font-semibold"
          >
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
