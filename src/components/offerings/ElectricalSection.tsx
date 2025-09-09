
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Zap } from 'lucide-react';

const ElectricalSection = () => {
  const services = [
    'Electrical construction and reticulation',
    'HV, MV, and LV installations',
    'Industrial, commercial, and domestic electrical works',
    'Electrical maintenance, inspection, and COCs (single- and three-phase)',
    'Automation, instrumentation, and control systems',
    'Generator installation and servicing',
    'Alarm, CCTV, and access control systems'
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Electrical Solutions
            </Badge>
            <div className="flex items-center mb-6">
              <Zap className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Electrical Engineering
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Comprehensive electrical solutions from construction to maintenance, covering all voltage levels and specialized systems.
            </p>
            <div className="space-y-4">
              {services.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/emmanuel-ikwuegbu-_2AlIm-F6pw-unsplash.jpg"
              alt="Electrical Engineer Working"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElectricalSection;
