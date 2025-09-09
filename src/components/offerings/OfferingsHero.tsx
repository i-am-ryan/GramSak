
import { Badge } from '@/components/ui/badge';

const OfferingsHero = () => {
  return (
    <section className="relative py-32 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-black/30"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/lovable-uploads/2fcbc1b5-3d3f-441f-90c9-0cbbed5816e2.png')`
        }}
      ></div>
      <div className="relative container mx-auto px-4">
        <div className="text-center">
          <Badge variant="outline" className="mb-6 text-white border-white">
            Our Services
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Our services
            <span className="block text-gramsak-green">and Offerings</span>
            </h1>
          <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto">
            Gramsak delivers a robust and compliant portfolio of electrical and mechanical
            services, guided by our CIDB Grading Designations.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OfferingsHero;
