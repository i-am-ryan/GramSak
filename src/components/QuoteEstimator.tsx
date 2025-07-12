
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calculator, Download } from 'lucide-react';

const QuoteEstimator = () => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [projectSize, setProjectSize] = useState('medium');
  const [estimatedCost, setEstimatedCost] = useState<number | null>(null);

  const services = [
    { id: 'building', name: 'General Building', basePrice: 50000 },
    { id: 'mechanical', name: 'Mechanical Engineering', basePrice: 75000 },
    { id: 'electrical', name: 'Electrical Engineering', basePrice: 60000 },
    { id: 'equipment', name: 'Equipment Supply', basePrice: 40000 },
    { id: 'mining', name: 'Mining Maintenance', basePrice: 80000 },
    { id: 'fire', name: 'Fire Services', basePrice: 45000 }
  ];

  const sizeMultipliers = {
    small: 0.7,
    medium: 1.0,
    large: 1.5,
    enterprise: 2.5
  };

  const calculateEstimate = () => {
    if (selectedServices.length === 0) return;

    const baseTotal = selectedServices.reduce((total, serviceId) => {
      const service = services.find(s => s.id === serviceId);
      return total + (service?.basePrice || 0);
    }, 0);

    const multiplier = sizeMultipliers[projectSize as keyof typeof sizeMultipliers];
    const estimated = baseTotal * multiplier;
    setEstimatedCost(estimated);
  };

  const handleServiceToggle = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  return (
    <Card className="max-w-2xl mx-auto hover-lift">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Calculator className="h-6 w-6 text-primary" />
          <CardTitle className="text-2xl">Quote Estimator</CardTitle>
        </div>
        <p className="text-muted-foreground">
          Get a rough cost estimate for your project
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Service Selection */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Select Services
          </Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {services.map((service) => (
              <div key={service.id} className="flex items-center space-x-2">
                <Checkbox
                  id={service.id}
                  checked={selectedServices.includes(service.id)}
                  onCheckedChange={() => handleServiceToggle(service.id)}
                />
                <Label htmlFor={service.id} className="flex-1 cursor-pointer">
                  {service.name}
                </Label>
              </div>
            ))}
          </div>
        </div>

        {/* Project Size */}
        <div>
          <Label className="text-base font-semibold mb-3 block">
            Project Size
          </Label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {Object.keys(sizeMultipliers).map((size) => (
              <Button
                key={size}
                variant={projectSize === size ? "default" : "outline"}
                onClick={() => setProjectSize(size)}
                className="capitalize"
              >
                {size}
              </Button>
            ))}
          </div>
        </div>

        {/* Calculate Button */}
        <Button 
          onClick={calculateEstimate}
          className="w-full"
          disabled={selectedServices.length === 0}
        >
          Calculate Estimate
        </Button>

        {/* Results */}
        {estimatedCost && (
          <div className="border-t pt-6 animate-fade-in">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Estimated Project Cost
              </p>
              <div className="text-3xl font-bold text-primary mb-4">
                R {estimatedCost.toLocaleString()}
              </div>
              <Badge variant="secondary" className="mb-4">
                This is a rough estimate
              </Badge>
              <p className="text-sm text-muted-foreground mb-4">
                Final costs may vary based on project specifics, materials, and timeline
              </p>
              <Button className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download Detailed Quote
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default QuoteEstimator;
