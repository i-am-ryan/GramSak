import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const navigate = useNavigate();

  // Your uploaded mining and construction images
  const backgroundImages = [
    "/lovable-uploads/ffa3d4fe-efd0-409f-a93b-b408752dea0f.png", // Construction site with workers
    "/lovable-uploads/744f89a6-1d2c-4ca4-801d-d1f1c909bac9.png", // Modern building complex
    "/lovable-uploads/a10b3d56-9e6a-4b37-b7fd-f8736081c8d5.png", // Electrical substation
    "/lovable-uploads/150ff3ad-8b1b-49da-8cfa-ba35d3b9fb98.png", // Mining dump truck
    "/lovable-uploads/afa5e2ec-a0c1-4012-8def-6f4f92a2b97b.png", // Large mining truck
    "/lovable-uploads/568a9ffa-b235-4172-8d5d-b459df8074d1.png", // Mining excavators
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + backgroundImages.length) % backgroundImages.length);
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleProjectsClick = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background Images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        {/* Enhanced overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Navigation Arrows - Hidden on mobile */}
      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
        onClick={prevImage}
      >
        <ArrowLeft className="h-5 w-5 lg:h-6 lg:w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white"
        onClick={nextImage}
      >
        <ArrowRight className="h-5 w-5 lg:h-6 lg:w-6" />
      </Button>

      {/* Content Container */}
      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="text-center text-white space-y-6 sm:space-y-8 max-w-5xl mx-auto">
            
            {/* Main Tagline - Responsive Font Sizes */}
            <div className="space-y-3 sm:space-y-4 lg:space-y-6 mb-8 sm:mb-10 lg:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                RELIABLE, INNOVATIVE,
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                AND COST-EFFECTIVE
              </h1>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-white">
                ENGINEERING SOLUTIONS
              </h1>
            </div>

            {/* Description Text - Better mobile spacing and sizing */}
            <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-12 lg:mb-16">
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed text-gray-200 px-2 sm:px-4">
                Delivering high-performance multi-disciplinary engineering solutions with proven experience, certified excellence, and a passion for service.
              </p>
            </div>

            {/* CTA Buttons - Better mobile stacking */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center max-w-lg sm:max-w-none mx-auto">
              <Button 
                onClick={handleServicesClick}
                size="lg" 
                className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-primary hover:bg-primary/90 text-white font-semibold min-w-[180px] sm:min-w-[200px]"
              >
                Explore Our Services
              </Button>
              
              <Link to="/projects" className="w-full sm:w-auto">
                <Button  
                  size="lg" 
                  variant="outline"
                  className="w-full sm:w-auto text-base sm:text-lg px-8 sm:px-10 lg:px-12 py-4 sm:py-5 lg:py-6 bg-white hover:bg-gray-50 text-gray-900 border-2 border-white font-semibold min-w-[180px] sm:min-w-[200px]"
                >
                  View Our Projects
                  <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Indicators - Better mobile positioning */}
      <div className="absolute bottom-4 sm:bottom-6 lg:bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;