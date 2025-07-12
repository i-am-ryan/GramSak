
import { useState } from 'react';
import { Cog, Zap } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      description: 'HVAC systems, boilers, pumps, steam reticulation, water treatment, conveyor systems, and mechanical installations.',
      backgroundImage: '/lovable-uploads/2732746e-b784-4321-b2ad-8bf81ef6a03d.png',
      recentProjects: [
        'Eskom Conveyor Systems',
        'Mining HVAC Upgrade',
        'Water Treatment Plant'
      ]
    },
    {
      icon: Zap,
      title: 'Electrical Engineering',
      description: 'Transmission, substation installations, public lighting, electrification, backup power systems, and electrical equipment supply.',
      backgroundImage: '/lovable-uploads/2a363165-7977-4be3-8a47-3fa3b1a6ba47.png',
      recentProjects: [
        'SF6 Switchgear Replacement',
        'Rural Electrification Project',
        'Generator Installation'
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {services.map((service, index) => (
        <ServiceCard
          key={index}
          {...service}
          index={index}
          hoveredService={hoveredService}
          onMouseEnter={setHoveredService}
          onMouseLeave={() => setHoveredService(null)}
        />
      ))}
    </div>
  );
};

export default ServicesGrid;
