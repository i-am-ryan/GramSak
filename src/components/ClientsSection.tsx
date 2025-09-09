
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Download, Building, Zap, Droplets } from 'lucide-react';

const ClientsSection = () => {
  const clients = [
    {
      name: 'Gauteng Province',
      subtitle: 'Infrastructure Development',
      description: 'The Gauteng Department of Infrastructure Development oversees planning, delivery, and maintenance of public infrastructure — including hospitals, clinics, schools, and government buildings across Gauteng Province.',
      work: 'Term maintenance contracts for electrical works, generators, HVAC systems, CCTV, and access control. Proven track record in upgrades and refurbishments.',
      icon: Building,
      category: 'Government'
    },
    {
      name: 'South African National Parks',
      subtitle: 'SANParks',
      description: 'The national conservation authority managing South Africa\'s national parks, wildlife reserves, and related infrastructure.',
      work: 'Long-term generator maintenance and backup power systems to ensure operational continuity in remote sites.',
      icon: Building,
      category: 'Conservation'
    },
    {
      name: 'Department of Public Works & Infrastructure',
      subtitle: 'Republic of South Africa',
      description: 'National government department responsible for public assets, facilities management, and infrastructure for public services across the country.',
      work: 'Refurbishments, upgrades, mechanical and electrical engineering solutions for key facilities.',
      icon: Building,
      category: 'Government'
    },
    {
      name: 'Lepelle Northern Water',
      subtitle: 'Water Utility',
      description: 'Public water utility providing bulk water supply to municipalities and industries in Limpopo Province.',
      work: 'Electrical panel replacements, pump station upgrades, switchgear, and mechanical maintenance for critical pump infrastructure.',
      icon: Droplets,
      category: 'Utilities'
    },
    {
      name: 'Eskom',
      subtitle: 'Electricity Utility',
      description: 'South Africa\'s primary electricity public utility — responsible for generating, transmitting, and distributing electricity to industrial, mining, and residential sectors.',
      work: 'Conveyor belt installations, fencing, substation maintenance, and critical infrastructure protection projects.',
      icon: Zap,
      category: 'Utilities'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Clients
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by Industry Leaders
            <span className="block text-primary">& Public Sector Clients</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We proudly serve South Africa's most respected organizations, 
            delivering excellence across government, utilities, and private sectors.
          </p>
        </div>

        {/* Client Logos Section */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/5a7001e9-c0be-4611-81b0-f17f2da8b9c9.png" 
            alt="Gramsak Clients"
            className="w-full max-w-4xl mx-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Client Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {clients.map((client, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <client.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2 mb-1">
                      <h3 className="font-bold text-lg">{client.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {client.category}
                      </Badge>
                    </div>
                    <p className="text-primary font-medium text-sm">{client.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {client.description}
                </p>
                
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-sm mb-2">Work with Gramsak:</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {client.work}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-primary/5 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Need an engineering partner trusted by South Africa's biggest clients?
              </h3>
              <p className="text-muted-foreground mb-6">
                Join our prestigious client list and experience the Gramsak difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Contact us today
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-4 w-4" />
                  Download Client Portfolio
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
