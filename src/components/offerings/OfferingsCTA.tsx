
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const OfferingsCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/lovable-uploads/american-public-power-association-RQpeu8lbti4-unsplash.jpg')`
        }}
      ></div>
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Project?
        </h2>
        <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto

">
          Let us help you deliver your engineering project with precision, compliance,
          and excellence.
        </p>
       <Link to="/contact#contact">
  <Button 
    size="lg" 
    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
  >
    Contact Us
    <ArrowRight className="ml-2 h-5 w-5" />
  </Button>
</Link>
      </div>
    </section>
  );
};

export default OfferingsCTA;
