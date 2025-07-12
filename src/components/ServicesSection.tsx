
import ServicesSectionHeader from './services/ServicesSectionHeader';
import ServicesGrid from './services/ServicesGrid';

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-20 bg-background overflow-hidden">
      {/* New Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(/lovable-uploads/88c61acb-b0bf-4d36-a53c-64cf7a6280b3.png)` }}
      />
      {/* White overlay for text readability */}
      <div className="absolute inset-0 bg-white/90"></div>
      {/* Gradient blend at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <ServicesSectionHeader />
        <ServicesGrid />
      </div>
    </section>
  );
};

export default ServicesSection;
