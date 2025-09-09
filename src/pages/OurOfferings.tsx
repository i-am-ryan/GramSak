import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, Zap, Cog, Hammer, Building, Shield, ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const OurOfferings = () => {
  const electricalServices = [
    'Electrical construction and reticulation',
    'HV, MV, and LV installations',
    'Industrial, commercial, and domestic electrical works',
    'Electrical maintenance, inspection, and COCs (single- and three-phase)',
    'Automation, instrumentation, and control systems',
    'Generator installation and servicing',
    'Alarm, CCTV, and access control systems'
  ];

  const mechanicalServices = [
    'HVAC system design, installation, and maintenance',
    'Boiler and steam plant construction (coal, diesel, and gas)',
    'Medical gas infrastructure and sterilisation systems',
    'Central heating and cooling tower installations',
    'Fire protection: water mist, gas suppression, and detection systems',
    'Water treatment and energy management solutions',
    'Belt conveyor systems and building management systems'
  ];

  const civilServices = [
    'Site clearing, bulk earthworks, and trenching for utility installations (pipes and cables)',
    'Construction of surface and subsurface drainage systems, culverts, and channels',
    'Construction of minor access roads, driveways, and pedestrian walkways using various materials',
    'Simple concrete slab laying and minor foundation construction'
  ];

  const generalBuildingServices = [
    'Turnkey solutions for domestic, commercial, and low-income housing projects',
    'Construction of industrial sheds, warehouses, and specialised commercial buildings',
    'Extensive refurbishment, alteration, and modernisation of existing structures',
    'Installation of boundary walls, perimeter fencing, and specialised security barriers'
  ];

  const fireProtectionServices = [
    'Installation, repair, and modification of drenchers, wet and dry pipe sprinkler systems, and fire hydrants',
    'Implementation of gas suppression systems for sensitive areas like data centres and archives',
    'Design and installation of fire detection, alarm, and early warning systems',
    'Comprehensive inspection, testing, and maintenance of all fire protection infrastructure to ensure operational readiness and compliance'
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-slate-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/2fcbc1b5-3d3f-441f-90c9-0cbbed5816e2.png')`
          }}
        ></div>
        <div className="relative container mx-auto px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-white border-white">
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Our services
              <span className="block text-gramsak-green">and Offerings</span>
            </h1>
            <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto">
              Gramsak delivers a robust and compliant portfolio of electrical and mechanical
              services, guided by our CIDB Grading Designations.
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
             Gramsak delivers a robust and compliant engineering services portfolio. Our certifications empower us to execute complex, multidisciplinary, and specialised projects across the following sectors:
            </p>
          </div>
        </div>
      </section>

      {/* Electrical Engineering Section */}
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
                {electricalServices.map((item, index) => (
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

      {/* Mechanical Engineering Section */}
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
                {mechanicalServices.map((item, index) => (
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

      {/* Civil Engineering Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Civil Solutions
              </Badge>
              <div className="flex items-center mb-6">
                <Hammer className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Civil Engineering
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Specialising in minor civil engineering projects, including earthworks, road construction, and the installation of stormwater drainage systems.
              </p>
              <div className="space-y-4">
                {civilServices.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/abdul-zreika-maVHoAWycOs-unsplash.jpg"
                alt="Civil Engineering Works"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* General Building Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="/lovable-uploads/oleksandr-skochko-82mn5g4QXAg-unsplash.jpg"
                alt="General Building Construction"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Building Solutions
              </Badge>
              <div className="flex items-center mb-6">
                <Building className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  General Building
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Proficient in constructing domestic, commercial, and low-income housing and industrial sheds. Specialising in extensive renovations and refurbishments.
              </p>
              <div className="space-y-4">
                {generalBuildingServices.map((item, index) => (
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

      {/* Fire Protection Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <Badge variant="outline" className="mb-4 text-primary border-primary">
                Fire Protection Solutions
              </Badge>
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-primary mr-4" />
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                  Fire Protection
                </h2>
              </div>
              <p className="text-lg text-muted-foreground mb-8">
                Specialising in installing, modifying, and maintaining fire prevention and protection infrastructure to ensure ongoing safety and compliance.
              </p>
              <div className="space-y-4">
                {fireProtectionServices.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="/lovable-uploads/valentin-lacoste-ao2mLuR_oVw-unsplash.jpg"
                alt="Fire Protection Systems"
                className="rounded-lg shadow-lg w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
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

          <div className="text-center">
            <p className="text-muted-foreground max-w-4xl mx-auto">
              We uphold the highest health, safety, and quality standards, using SABS-approved
              materials and partnering with ISO-certified suppliers to ensure long-lasting, compliant
              outcomes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/lovable-uploads/american-public-power-association-RQpeu8lbti4-unsplash.jpg')`
          }}
        ></div>
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto mb-8">
            Let us help you deliver your engineering project with precision, compliance,
            and excellence.
          </p>
          <Link to="/contact#contact">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg"
            >
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default OurOfferings;