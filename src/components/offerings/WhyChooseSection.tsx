
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

const WhyChooseSection = () => {
  const reasons = [
    {
      title: 'Trusted engineering partner',
      description: 'with proven track record'
    },
    {
      title: 'Highly skilled, trade-tested',
      description: 'workforce'
    },
    {
      title: 'SABS-approved materials and',
      description: 'ISO-certified suppliers'
    },
    {
      title: 'Compliance with national',
      description: 'legislation and safety standards'
    },
    {
      title: 'On-time delivery within scope',
      description: 'and budget'
    },
    {
      title: 'Excellence as the foundation of',
      description: 'everything we do'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Excellence Driven
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Why Choose Gramsak?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12">
            Gramsak is a trusted engineering partner, known for delivering reliable, innovative, and cost-effective
            solutions across South Africa's construction and infrastructure landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((item, index) => (
            <Card key={index} className="text-center bg-white dark:bg-card hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground max-w-4xl mx-auto">
            We uphold the highest health, safety, and quality standards, using SABS-approved
            materials and partnering with ISO-certified suppliers to ensure long-lasting, compliant
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
