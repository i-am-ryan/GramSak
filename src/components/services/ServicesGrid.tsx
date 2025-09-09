import { useState } from 'react';
import { Cog, Zap, Hammer, Building, Shield } from 'lucide-react';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      description: 'Air conditioning (installation, servicing & maintenance), autoclave servicing, medical gas, medical compressor maintenance, long-term generator and HVAC maintenance contracts, scheduled inspections, pressure testing, electrical fault-finding, and system diagnostics.',
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
      description: 'Power restoration, generator installations, transformer servicing, switchgear upgrades, Certificates of Compliance (COCs), distribution board upgrades, electrical reticulation repairs, backup power systems, DB rewiring, facility compliance and safety enhancements.',
      backgroundImage: '/lovable-uploads/2a363165-7977-4be3-8a47-3fa3b1a6ba47.png',
      recentProjects: [
        'SF6 Switchgear Replacement',
        'Rural Electrification Project',
        'Generator Installation'
      ]
    },
    {
      icon: Hammer,
      title: 'Civil Engineering',
      description: 'Specialising in minor civil engineering projects, including earthworks, road construction, and the installation of stormwater drainage systems. Providing essential foundational work that supports larger construction projects, ensuring site readiness and proper groundwork.',
      backgroundImage: '/lovable-uploads/john-kakuk-HvvPceHYLOg-unsplash.jpg',
      recentProjects: [
        'Road Construction Project',
        'Stormwater Drainage Systems',
        'Site Preparation Works'
      ]
    },
    {
      icon: Building,
      title: 'General Building',
      description: 'Proficient in constructing domestic, commercial, and low-income housing and industrial sheds. Specialising in extensive renovations, refurbishments, and property upgrades, including the installation of perimeter and security fencing.',
      backgroundImage: '/lovable-uploads/mufid-majnun-uGxwxSOv35A-unsplash.jpg',
      recentProjects: [
        'Low-Income Housing Project',
        'Commercial Building Renovation',
        'Industrial Shed Construction'
      ]
    },
    {
      icon: Shield,
      title: 'Fire Protection',
      description: 'Specialising in installing, modifying, and maintaining fire prevention and protection infrastructure. Services include installing, renewing, removing, and altering drenchers, sprinkler systems, and various fire installations to ensure ongoing safety and compliance.',
      backgroundImage: '/lovable-uploads/dust-pixels-V0GGSFSR44k-unsplash.jpg',
      recentProjects: [
        'Hospital Fire System Upgrade',
        'Industrial Sprinkler Installation',
        'Fire Detection System Maintenance'
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Mobile: 1 column, Tablet: 2 columns, Desktop: 3 columns, Large screens: 3 columns with better spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[90rem] mx-auto px-4 sm:px-6">
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
    </div>
  );
};

export default ServicesGrid;