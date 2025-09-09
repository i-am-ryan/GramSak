import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Building, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Contact = () => {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);

  const locations = [
  {
  id: 'head-office',
  name: 'Gauteng Office',
  subName: 'Head Office',
  address: 'Boskruin View Office Park,180 Girdwood Avenue, Bush Hill, Boskruin, Randburg, Gauteng',
  phone: '011 568 2130',
  mobile: '079 118 2887',
  email: 'admin@gramsak.co.za',
  established: 'Est. 2013',
  backgroundImage: '/lovable-uploads/93d272f8-56f5-4a6e-b269-a6baf3e47828.png'
}
  ,
    {
      id: 'cosmo-city',
      name: 'Gauteng Office',
      address: '85 Mauritania Crescent, Cosmo City Ext 2, Cosmo City, Gauteng 2188',
      phone: '011 568 2130',
      mobile: '079 118 2887',
      email: 'admin@gramsak.co.za',
      established: 'Est. 2016',
      backgroundImage: '/lovable-uploads/2756124a-3c9c-471d-8044-41572d247fdd.png'
    },
    {
      id: 'welkom',
      name: 'Free State Office',
      address: '27 Toronto Road, St Helena, Welkom, Free State 3088',
      mobile: '079 118 2887',
      email: 'admin@gramsak.co.za',
      established: 'Est. 2018',
      backgroundImage: '/lovable-uploads/e30d7c45-da57-49b0-a6a3-7c81f75aa8b6.png'
    },
    {
      id: 'eastern-cape',
      name: 'Eastern Cape Office',
      address: '7 Evergreen Walk, Laurie Dashwood, Enoch Mgijima NU1, Eastern Cape 5320',
      mobile: '079 118 2887',
      email: 'admin@gramsak.co.za',
      established: 'Est. 2018',
      backgroundImage: '/lovable-uploads/1d456a02-038b-406a-8080-a4d6c0ddf435.png'
    },

    {
  id: 'joburg-skyline',
  name: 'North West Office',
  address: '11 Pikkenwyn Avenue, Safari Tuine, Rusternburg, 2199',
  mobile: '079 118 2887',
  email: 'admin@gramsak.co.za',
  established: 'Est. 2020',
  backgroundImage: '/lovable-uploads/clodagh-da-paixao-xvJVDUoGpoU-unsplash.jpg'
},
{
  id: 'joburg-street',
  name: 'Limpopo Office',
  address: ' 1 Hamman street, Groblersdal, 0470',
  mobile: '079 118 2887',
  email: 'admin@gramsak.co.za',
  established: 'Est. 2020',
  backgroundImage: '/lovable-uploads/gauta-nkwe-TjpMHG1Nzd4-unsplash.jpg'
}

  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with South African Flag - Moved heading up */}
      <section 
        className="pt-16 pb-16 bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/lovable-uploads/christin-hume-hBuwVLcYTnA-unsplash.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white">
              Contact Us
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Strategic Branch Network
            <span className="block text-gramsak-green">Across South Africa</span>
            </h1>
            <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto">
            With branches strategically located, we ensure rapid response times and local expertise for all your engineering needs.
            </p>
          </div>
        </div>
      </section>

      {/* Locations Grid - Made taller and more spacious */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((location) => (
              <div
                key={location.id}
                className="relative group h-[420px]"
                onMouseEnter={() => setHoveredLocation(location.id)}
                onMouseLeave={() => setHoveredLocation(null)}
              >
                <Card className="h-full hover-lift bg-card border-border hover:shadow-xl transition-all duration-500 cursor-pointer overflow-hidden">
                  <CardContent className="p-10 h-full flex flex-col justify-center">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 mb-8 flex items-center justify-center bg-primary/10 rounded-full">
                        <MapPin className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-xl text-foreground mb-4">
                        {location.name}
                      </h3>
                    {location.subName && (
  <p className="text-sm text-muted-foreground font-semibold">
    {location.subName}
  </p>
)}
                      <p className="text-sm text-muted-foreground mb-6">
                        {location.address.split(',')[1] || location.address.split(',')[0]}
                      </p>
                      <Badge variant="outline" className="text-primary border-primary">
                        {location.established}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>

                {/* Larger Hover Overlay */}
                <div className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                  hoveredLocation === location.id 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-4 pointer-events-none'
                }`}>
                  <div 
                    className="h-full bg-cover bg-center rounded-lg shadow-xl"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${location.backgroundImage})`
                    }}
                  >
                    <div className="h-full flex flex-col justify-between p-10 text-white">
                      <div>
                        <h4 className="font-bold text-xl mb-8">{location.name}</h4>
                        
                        <div className="space-y-5 mb-8">
                          <div className="flex items-start space-x-3">
                            <Building className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                            <p className="text-sm leading-relaxed">{location.address}</p>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Phone className="h-5 w-5 text-primary" />
                            <div>
                              <p className="text-sm">{location.phone}</p>
                              <p className="text-sm">{location.mobile}</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center space-x-3">
                            <Mail className="h-5 w-5 text-primary" />
                            <p className="text-sm">{location.email}</p>
                          </div>
                        </div>
                      </div>
                      
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section - Moved heading up and made subtitle green */}
      <section 
        className="py-20 bg-cover bg-center relative"
        style={{
          
          backgroundBlendMode: 'overlay'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 -mt-8">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-black">
              
              <span className="block text-gramsak-green">
                Get In Touch 
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 max-w-3xl mx-auto">
              Contact our team for expert consultation and competitive quotes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Phone className="h-8 w-8 text-primary transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Phone</h3>
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-primary/80">011 568 2130</p>
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-primary/80">079 118 2887</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <Mail className="h-8 w-8 text-primary transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Email</h3>
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-primary/80">admin@gramsak.co.za</p>
              </CardContent>
            </Card>

            <Card className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer group">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                  <MapPin className="h-8 w-8 text-primary transition-all duration-300 group-hover:animate-pulse" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Head Office</h3>
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-primary/80">Randburg, Gauteng</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
