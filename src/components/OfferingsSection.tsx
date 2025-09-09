
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Zap, Cog, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const OfferingsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const offerings = [
    {
      icon: Zap,
      title: 'Electrical Engineering',
      items: [
        'Electrical construction and reticulation',
        'HV, MV, LV installations',
        'Industrial, commercial, and domestic projects',
        'COCs (single & 3-phase), inspections, maintenance',
        'Automation and control systems',
        'Generator installation & servicing',
        'CCTV, alarm, access control systems'
      ],
      color: 'text-gramsak-green',
      bgColor: 'bg-green-50'
    },
    {
      icon: Cog,
      title: 'Mechanical Engineering',
      items: [
        'HVAC design, install, and maintenance',
        'Boiler and steam plant construction',
        'Medical gas and sterilisation systems',
        'Fire protection and water mist systems',
        'Water treatment and energy management',
        'Building management and belt conveyor systems'
      ],
      color: 'text-gramsak-green',
      bgColor: 'bg-green-50'
    },
    {
      icon: CheckCircle,
      title: 'Why Choose Gramsak',
      items: [
        'CIDB Graded & CSD Registered',
        'Specialists in Public Sector Infrastructure',
        'Projects Delivered in Deep Rural Areas',
        '3-Phase Electrical Certificate of Compliance Authority',
        'BBBEE Level 1 Compliant',
        'Responsive, Scalable & Cost-Efficient Service Delivery'
      ],
      color: 'text-gramsak-green',
      bgColor: 'bg-green-50'
    }
  ];

  const nextOffering = () => {
    setCurrentIndex((prev) => (prev + 1) % offerings.length);
  };

  const prevOffering = () => {
    setCurrentIndex((prev) => (prev - 1 + offerings.length) % offerings.length);
  };

  const currentOffering = offerings[currentIndex];

  return (
    <section id="offerings" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-gramsak-green border-gramsak-green">
            Our Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive Engineering
            <span className="block text-gramsak-green">Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Multi-disciplinary engineering expertise across electrical and mechanical domains
          </p>
        </div>

        {/* Horizontal Solutions Carousel */}
        <div className="relative max-w-4xl mx-auto">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-green-50 border-gramsak-green hover:border-gramsak-green -translate-x-16"
            onClick={prevOffering}
          >
            <ChevronLeft className="h-4 w-4 text-gramsak-green" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-green-50 border-gramsak-green hover:border-gramsak-green translate-x-16"
            onClick={nextOffering}
          >
            <ChevronRight className="h-4 w-4 text-gramsak-green" />
          </Button>

          {/* Solution Card */}
          <Card className="hover-lift transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10">
            <CardContent className="p-8">
              <div className={`w-16 h-16 mb-6 rounded-full ${currentOffering.bgColor} flex items-center justify-center mx-auto`}>
                <currentOffering.icon className={`h-8 w-8 ${currentOffering.color}`} />
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-center text-gramsak-green">
                {currentOffering.title}
              </h3>
              
              <ul className="space-y-3">
                {currentOffering.items.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className={`h-5 w-5 flex-shrink-0 mt-0.5 ${currentOffering.color}`} />
                    <span className="text-muted-foreground leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Solution Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {offerings.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-gramsak-green' : 'bg-gray-300 hover:bg-green-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferingsSection;
