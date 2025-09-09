
import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

const NewPartners = () => {
  const partners = [
    {
      id: 1,
     
      logo: '/lovable-uploads/cfdaaec7-b991-4b5b-8d03-9bd3c369dfdb.png',
    },
    {
      id: 2,
      
      logo: '/lovable-uploads/Abb.PNG',
    },
    {
      id: 3,
      
      logo: '/lovable-uploads/Aden.PNG',
    },
    {
      id: 4,
     
      logo: '/lovable-uploads/4bf4fe10-4f05-4c06-8e33-96337af1e006.png',
    },
    {
      id: 5,
      
      logo: '/lovable-uploads/00c59b33-0fc1-423c-b3d3-6c07d5e1cd9c.png',
    },
    {
      id: 6,
      
      logo: '/lovable-uploads/afd2aedf-d134-449d-b723-276be789ee65.png',
    },
    {
      id: 7,
      
      logo: '/lovable-uploads/b0dd95cb-dfb6-42f5-b55c-13866db08c44.png',
    },
    {
      id: 8,
     
      logo: '/lovable-uploads/16fbd124-f9dc-4bae-99d0-e6ec799f5ce5.png',
    },
    {
      id: 9,
     
      logo: '/lovable-uploads/5268c1c7-d6d2-40e3-8256-daa288af8877.png',
    },
    {
      id: 10,
      
      logo: '/lovable-uploads/e43329a9-5672-49e3-b923-3525dd912634.png',
    },
    {
      id: 11,
     
      logo: '/lovable-uploads/JASA.PNG',
    },
    {
      id: 12,
     
      logo: '/lovable-uploads/d955575a-adec-4758-beff-9513c7ce47ca.png',
    }
  ];

  const PartnerCard = ({ partner, index }: { partner: typeof partners[0], index: number }) => {
    const { ref, inView } = useInView({
      threshold: 0.2,
      triggerOnce: true
    });

    return (
      <div
        ref={ref}
        className={`transition-all duration-700 ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 100}ms` }}
      >
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100 dark:border-gray-700 group">
          <div className="relative">
            <div className="w-full h-32 flex items-center justify-center mb-4">
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <h3 className="text-lg font-bold text-center text-foreground group-hover:text-primary transition-colors duration-300">
              {partner.name}
            </h3>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative pt-20 pb-16 bg-cover bg-center overflow-hidden"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/a2202fba-c882-492e-9ede-6629074eb700.png')`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/5"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white backdrop-blur-sm bg-white/10">
              Strategic Partnerships
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-fade-in">
              Our Valued
              <span className="block text-gramsak-green">
                Partners
              </span>
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              Collaborating with industry leaders to deliver innovative engineering solutions and exceptional project outcomes across South Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {partners.map((partner, index) => (
              <PartnerCard key={partner.id} partner={partner} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Interested in Partnering with Gramsak?
          </h2>
          <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join our network of trusted partners and collaborate on innovative engineering projects across South Africa.
          </p>
   <Link to="/contact#contact">
  <button className="bg-white text-primary px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
    Get in Touch
  </button>
</Link>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewPartners;
