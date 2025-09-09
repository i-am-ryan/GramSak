
import { useState } from 'react';

const AboutSection = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const imageGrid = [
    {
      src: '/lovable-uploads/4d687a5c-cdfb-401c-b5c0-a3e195ab746d.png',
      label: 'Power Substation',
      alt: 'Electrical substation with insulators'
    },
    {
      src: '/lovable-uploads/dff95d95-06e0-4b49-b6d8-7d1261df418b.png',
      label: 'Transmission Lines',
      alt: 'Power transmission tower in field'
    },
    {
      src: '/lovable-uploads/2fc1179d-b6cf-4aab-a175-3d368bcfb69f.png',
      label: 'Tower Infrastructure',
      alt: 'Inside view of transmission tower structure'
    },
    {
      src: '/lovable-uploads/f12e5445-5568-4e39-bf34-51962e3cecd0.png',
      label: 'Industrial Facility',
      alt: 'Industrial warehouse interior structure'
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        
        {/* 1. Intro Heading with Green Highlight */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-foreground">Engineering the Future,</span>
            <br />
            <span className="text-gramsak-green">One Project at a Time</span>
          </h2>
        </div>

        {/* 2. Clean Hero Strip */}
        <div className="text-center mb-16 animate-fade-in">
            <p className="text-lg md:text-xl text-black max-w-5xl mx-auto leading-relaxed">
            Gramsak is a proudly South African,  registered engineering firm that delivers reliable, 
            compliant, and efficient solutions to public and private institutions. From power systems and HVAC 
            to specialised hospital upgrades, we've completed projects across multiple provinces, including some 
            of the country's most remote regions.

          <h2 className="text-1xl md:text-6xl font-bold mb-6">
            <span className="text-foreground"></span>
            <br />
            <span className="text-gramsak-green">We work where others won't-reliably,safely, and professionally</span>
          </h2>
          </p>
        </div>

        {/* 3. Visual Grid/Mosaic */}
        <div className="mb-16 animate-scale-in">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {imageGrid.map((image, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                onMouseEnter={() => setHoveredImage(index)}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                  hoveredImage === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-xl font-semibold">{image.label}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Quote Banner */}
        <div className="mb-16 animate-slide-in-left">
          <div className="bg-gramsak-green py-12 px-5 rounded-2xl text-center shadow-lg">
            <blockquote className="text-white text-1xl md:text-4xl font-serif italic max-w-4xl mx-auto">
              "We work where others won't — reliably, safely, and professionally."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
