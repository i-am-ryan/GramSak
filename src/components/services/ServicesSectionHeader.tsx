
import { Badge } from '@/components/ui/badge';

const ServicesSectionHeader = () => {
  return (
    <div className="text-center mb-16">
      <Badge variant="outline" className="mb-4 text-gramsak-green border-gramsak-green">
        Our Services
      </Badge>
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
        Engineering Solutions
        <span className="block text-gramsak-green">Across All Sectors</span>
      </h2>
       <p className="text-lg md:text-xl text-black max-w-5xl mx-auto leading-relaxed">
        Comprehensive engineering services delivered with excellence and reliability
      </p>
    </div>
  );
};

export default ServicesSectionHeader;
