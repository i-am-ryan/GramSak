
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Building } from 'lucide-react';

const BranchesSection = () => {
  const locations = [
    {
      id: 'head-office',
      name: 'Head Office',
      address: 'Boskruin View Office Park, 180 Girdwood Avenue, Bush Hill, Boskruin, Randburg, Gauteng',
      phone: '011 568 2130',
      mobile: '079 118 2887',
      email: 'admin@gramsak.co.za',
      established: 'Est. 2013'
    },
    {
      id: 'cosmo-city',
      name: 'Cosmo City Office',
      address: '85 Mauritania Crescent, Cosmo City Ext 2, Cosmo City, Gauteng 2188',
      phone: '011 568 2130',
      mobile: '079 118 2887',
      email: 'admin@gramsak.co.za',
      established: 'Est. 2016'
    },
    {
      id: 'welkom',
      name: 'Welkom Office',
      address: '27 Toronto Road, St Helena, Welkom, Free State 3088',
      phone: '011 568 2130',
      mobile: '079 118 2887',
      email: 'admin@gramsak.co.za',
      established: 'Est. 2018'
    },
    {
      id: 'eastern-cape',
      name: 'Eastern Cape Office',
      address: '7 Evergreen Walk, Laurie Dashwood, Enoch Mgijima NU1, Eastern Cape 5320',
      phone: '011 568 2130',
      mobile: '079 118 2887',
      email: 'admin@gramsak.co.za',
      established: 'Est. 2018'
    }
  ];

  return (
    <>
      {/* Partnerships Section with handshake background */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(22, 163, 74, 0.85), rgba(22, 163, 74, 0.85)), url('/lovable-uploads/linkedin-sales-solutions-YDVdprpgHv4-unsplash.jpg')`
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="mb-4 text-white border-white">
            Our Partners
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted
            <span className="block">Partnerships</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Working alongside South Africa's leading organizations to deliver exceptional engineering solutions
          </p>
        </div>
      </section>

      {/* Strategic Branch Network with flag background */}
      <section 
        className="relative py-20 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/edf95ecc-7cb3-4c1f-8c76-8744c06e5460.png')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white">
              Our Locations
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Strategic Branch Network
              <span className="block">Across South Africa</span>
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              With branches strategically located, we ensure rapid response times and local expertise for all your engineering needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location) => (
              <Card key={location.id} className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm hover-lift border-0 shadow-xl">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 mb-4 flex items-center justify-center bg-primary/10 rounded-full">
                      <MapPin className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {location.name}
                    </h3>
                    <Badge variant="outline" className="text-primary border-primary mb-3">
                      {location.established}
                    </Badge>
                    <div className="space-y-2 w-full">
                      <div className="flex items-start space-x-2">
                        <Building className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                        <p className="text-xs text-muted-foreground text-left">{location.address}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Phone className="h-4 w-4 text-primary" />
                        <p className="text-xs text-muted-foreground">{location.phone}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Mail className="h-4 w-4 text-primary" />
                        <p className="text-xs text-muted-foreground">{location.email}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BranchesSection;
