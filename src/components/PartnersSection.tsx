
import { Badge } from '@/components/ui/badge';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const PartnersSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const partners = [
    {
      name: 'Gauteng Department of Infrastructure Development',
      logo: '/lovable-uploads/c0af317d-77e9-4747-b44d-43448d0aa13d.png',
      description: 'Infrastructure Development'
    },
    {
      name: 'Gauteng Department of Health',
      logo: '/lovable-uploads/a1a22417-2ecf-4059-be81-44e9f3da37de.png',
      description: 'Healthcare Infrastructure'
    },
    {
      name: 'South African National Parks',
      logo: '/lovable-uploads/0e0a6627-00a5-44e7-85ac-e01d46163cd1.png',
      description: 'Conservation & Wildlife'
    },
    {
      name: 'South African Post Office',
      logo: '/lovable-uploads/75fe71be-3de1-49cb-b8d8-a88abf8bee21.png',
      description: 'Postal Services'
    },
    {
      name: 'Lepelle Northern Water',
      logo: '/lovable-uploads/163df19e-4331-4064-9b44-c90021baed9a.png',
      description: 'Water Utility'
    },
    {
      name: 'MMT Consulting Engineers',
      logo: '/lovable-uploads/a4f96bf7-8604-4e40-93d8-f3120ed2ac7e.png',
      description: 'Engineering Consulting'
    },
    {
      name: 'Dawaila Projects',
      logo: '/lovable-uploads/fd68adfe-e1d1-4c59-87b1-f59a2c4dda7f.png',
      description: 'Project Management'
    },
    {
      name: 'Mpumalanga Public Works',
      logo: '/lovable-uploads/2fb61044-d03f-433d-99a5-65e322cef090.png',
      description: 'Public Infrastructure'
    },
    {
      name: 'City of Tshwane',
      logo: '/lovable-uploads/5c3d00f4-68cb-4dfb-8e7c-6456027eb8e4.png',
      description: 'Municipal Services'
    },
    {
      name: 'Onderstepoort Biological Products',
      logo: '/lovable-uploads/c47b14da-82ee-45a0-940a-7973dc9714e9.png',
      description: 'Biological Products'
    },
    {
      name: 'CIDB',
      logo: '/lovable-uploads/1b470024-8dd7-4c83-a692-d5725e55fda2.png',
      description: 'Construction Industry Development'
    }
  ];

  const itemsPerPage = 4;
  const totalPages = Math.ceil(partners.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentPartners = () => {
    const start = currentIndex * itemsPerPage;
    return partners.slice(start, start + itemsPerPage);
  };

  return (
    <section id="partners" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-red-600 border-red-600">
            Our Partners
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry
            <span className="block text-red-600">Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Partnering with South Africa's leading public and private sector organizations
          </p>
        </div>

        {/* Partners Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-red-50 border-red-200 hover:border-red-300"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 text-red-600" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-red-50 border-red-200 hover:border-red-300"
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4 text-red-600" />
          </Button>

          {/* Partners Grid */}
          <div className="mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {getCurrentPartners().map((partner, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:shadow-red-500/10 group cursor-pointer"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-4 flex items-center justify-center bg-gray-50 dark:bg-gray-700 rounded-lg group-hover:bg-red-50 transition-colors">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-sm text-foreground mb-2 leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {partner.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300 hover:bg-red-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
