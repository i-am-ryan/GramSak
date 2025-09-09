
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Cog } from 'lucide-react';

const MechanicalSection = () => {
  const services = [
    'HVAC system design, installation, and maintenance',
    'Boiler and steam plant construction (coal, diesel, and gas)',
    'Medical gas infrastructure and sterilisation systems',
    'Central heating and cooling tower installations',
    'Fire protection: water mist, gas suppression, and detection systems',
    'Water treatment and energy management solutions',
    'Belt conveyor systems and building management systems'
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src="/lovable-uploads/thisisengineering-lx8CooX66ms-unsplash.jpg"
              alt="Mechanical Systems"
              className="rounded-lg shadow-lg w-full h-[500px] object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <Badge variant="outline" className="mb-4 text-primary border-primary">
              Mechanical Solutions
            </Badge>
            <div className="flex items-center mb-6">
              <Cog className="h-8 w-8 text-primary mr-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Mechanical Engineering
              </h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Advanced mechanical systems for industrial, commercial, and specialized applications, ensuring optimal performance and efficiency.
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
        </div>
      </div>
    </section>
  );
};

export default MechanicalSection;
