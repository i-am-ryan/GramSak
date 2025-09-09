
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Partners = () => {
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  const partners = [
    {
      id: 1,
      name: 'South African National Parks',
      logo: '/lovable-uploads/64ddb9f4-d0ee-4c24-a0de-42ec9b3d326a.png',
      about: 'The body managing South Africa\'s national parks and conservation areas.',
      role: 'Gramsak provides backup power systems, maintenance, and infrastructure upgrades to keep park operations running reliably in remote locations.'
    },
    {
      id: 2,
      name: 'Gauteng Province – Health',
      logo: '/lovable-uploads/4c8edc85-7974-48c1-8e26-2fefeaa12b85.png',
      about: 'The Gauteng Department of Health delivers public healthcare services and manages hospitals and clinics across the province.',
      role: 'Gramsak supports hospital infrastructure upgrades, electrical and mechanical systems maintenance, and urgent emergency power solutions.'
    },
    {
      id: 3,
      name: 'Gauteng Province – Infrastructure Development',
      logo: '/lovable-uploads/ec64c34a-ef48-4092-9698-7549cd67f925.png',
      about: 'The provincial department responsible for planning, building, and maintaining public infrastructure in Gauteng, including schools, hospitals, and government buildings.',
      role: 'Long-term maintenance contracts, refurbishments, HVAC systems, backup generators, and site upgrades.'
    },
    {
      id: 4,
      name: 'MMT Consulting Engineers',
      logo: '/lovable-uploads/375ee9de-c2c1-4f40-99b0-79514f30fae1.png',
      about: 'A South African consulting engineering firm providing civil, structural, electrical, and mechanical design services.',
      role: 'Partner for engineering design, project management, and joint delivery on complex multidisciplinary projects.'
    },
    {
      id: 5,
      name: 'Dawaila',
      logo: '/lovable-uploads/Dawaila.PNG',
      about: 'Dawaila is a private sector company focusing in Building Construction and Development, Civil Engineering, Mechanical Engineering, and Electrical Engineering. .',
      role: 'Collaborates with Gramsak on specialist building works, civil projects, and sustainable site solutions.'
    },
    {
      id: 6,
      name: 'South African Post Office',
      logo: '/lovable-uploads/a634de58-b52e-4942-a4d0-6d7df12091ab.png',
      about: 'The national postal and logistics service provider for South Africa.',
      role: 'Infrastructure maintenance, backup power systems, and electrical upgrades at distribution centers and sorting facilities.'
    },
    {
      id: 7,
      name: 'City of Tshwane',
      logo: '/lovable-uploads/94383b72-f70c-43a3-a504-483b11fbd3a3.png',
      about: 'Government entity that supports social infrastructure development and manages delivery of public facilities.',
      role: 'General building works, electrical installations, and site compliance for community projects.'
    },
    {
      id: 8,
      name: 'Lepelle Northern Water',
      logo: '/lovable-uploads/451e0702-8a2d-4cf6-8ee3-d7c33dbfabb2.png',
      about: 'Regional water board responsible for bulk water supply in Limpopo Province.',
      role: 'Mechanical and electrical upgrades for pump stations, switchgear installations, and operational maintenance.'
    },
    {
      id: 9,
      name: 'Public Works, Roads & Transport',
      logo: '/lovable-uploads/8e74b415-14c3-4efb-996b-f1be5c3d2cd3.png',
      about: 'Provincial department overseeing the construction, maintenance, and management of roads, public buildings, and transport infrastructure.',
      role: 'Construction, civil works, road project support, and critical building maintenance.'
    },
    {
      id: 10,
      name: 'Onderstepoort Biological Products',
      logo: '/lovable-uploads/90c47b44-00a4-4884-b8a0-a7ca62dcd79e.png',
      about: 'A state-owned company producing vaccines for animal health in South Africa and Africa.',
      role: 'Provides electrical maintenance, backup power solutions, and site safety compliance upgrades for OBP\'s manufacturing facilities.'
    },
    {
      id: 11,
      name: 'Construction Industry Development Board',
      logo: '/lovable-uploads/a5fdc9a7-db97-4839-b1e8-a4256b807d8e.png',
      about: 'The CIDB is South Africa\'s official regulatory body for the construction industry. It maintains a national register of contractors, grades construction firms by capability, and ensures fair, compliant public procurement.',
      role: 'Gramsak is a fully CIDB-graded contractor — registered and compliant for a wide range of civil, electrical, and general building works, meeting all industry quality, safety, and delivery standards.'
    },
     {
      id: 12,
      name: 'Independent Development Trust (IDT)',
      logo: '/lovable-uploads/IDT.PNG',
      about: 'Public sector entity managing social infrastructure projects.',
      role: 'Implementation partner for public infrastructure maintenance and engineering projects.'
    },
     {
      id: 13,
      name: 'Jiraflo',
      logo: '/lovable-uploads/Jiraflo.PNG',
      about: 'Jiraflo is a private sector company focusing on smart and sustainable built environment projects, especially in housing and community infrastructure.',
      role: 'Collaborates with Gramsak on specialist electrical, mechanical works and sustainable site solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section with handshake background */}
      <section 
        className="relative pt-20 pb-16 bg-cover bg-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/linkedin-sales-solutions-YDVdprpgHv4-unsplash.jpg')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 text-white border-white">
              Our Partners
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
              Trusted
              <span className="block text-gramsak-green">Clients</span>
            </h1>
            <p className="text-lg text-white/90 max-w-3xl mx-auto">
              Working alongside South Africa's leading organisations to deliver exceptional engineering solutions
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {partners.map((partner) => (
              <Card 
                key={partner.id}
                className="group cursor-pointer hover-lift bg-card border-border hover:shadow-xl transition-all duration-300 hover:shadow-primary/10"
                onClick={() => setSelectedPartner(partner)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <div className="w-32 h-32 mb-6 flex items-center justify-center bg-muted dark:bg-muted/50 rounded-lg group-hover:bg-primary/5 transition-colors">
                      <img
                        src={partner.logo}
                        alt={partner.name}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-4 leading-tight">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-primary transition-colors">
                      Click to learn more
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedPartner && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-card rounded-lg p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto border border-border">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 flex items-center justify-center bg-muted rounded-lg">
                  <img
                    src={selectedPartner.logo}
                    alt={selectedPartner.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <h2 className="text-2xl font-bold text-foreground">{selectedPartner.name}</h2>
              </div>
              <button
                onClick={() => setSelectedPartner(null)}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">About</h3>
                <p className="text-muted-foreground">{selectedPartner.about}</p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Role with Gramsak</h3>
                <p className="text-muted-foreground">{selectedPartner.role}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Partners;
