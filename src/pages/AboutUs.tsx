import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Lightbulb, Target, Heart, Shield, Users, Award, CheckCircle, Eye, Home, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';

const AboutUs = () => {
  const values = [
    {
      icon: Shield,
      title: 'Professionalism',
      description: 'We uphold the highest standards of integrity, conduct, and expertise in every aspect of our work.'
    },
    {
      icon: CheckCircle,
      title: 'Proactiveness',
      description: 'We anticipate challenges, identify opportunities, and act decisively to deliver value.'
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'We build lasting relationships by understanding our clients\' unique needs and offering tailored, hands-on support.'
    },
    {
      icon: Award,
      title: 'Promise Fulfilment',
      description: 'We do what we say. We take pride in delivering on our commitments reliably and consistently.'
    }
  ];

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section with Background - Updated text colors */}
        <section 
          className="relative py-32 bg-cover bg-center"
          style={{ backgroundImage: `url(/lovable-uploads/3c7e7f56-8da2-4389-a6bf-f6c9555d6753.png)` }}
        >
          <div className="relative container mx-auto px-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-6 text-white border-white">
                About Gramsak
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                <span className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">Building Excellence</span>
                <span className="block text-gramsak-green"> Since 2013</span>
              </h1>
              <p className="text-xl text-white drop-shadow-md max-w-3xl mx-auto">
                  100% Black female-owned, Level 1 B-BBEE multi-disciplinary engineering firm.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Company Overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-4xl font-bold mb-6 text-foreground">
                  Who We Are
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Gramsak (Pty) Ltd is a 100% Black female-owned, Level 1 B-BBEE engineering firm established in 2013. We specialise in delivering reliable, innovative, and cost-effective engineering solutions to the public and private sectors and have a strong footprint in several industries.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our team includes professionally registered engineers, alongside qualified and trade-tested technicians. This deep technical bench enables us to deliver complex, multi-disciplinary projects across various sectors and geographic locations, including rural and remote areas throughout all nine provinces.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/9984f1e9-b325-48f6-8bb0-4d3a4178d753.png"
                  alt="Construction workers on site"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            <div className="mb-20">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-6xl mx-auto text-center">
                Gramsak holds CIDB gradings in Electrical Engineering—building, Electrical Engineering—infrastructure, Mechanical Engineering, Civil Engineering, General Building, and Specialist Works: Fire Protection and complies with all relevant statutory and regulatory requirements. We are committed to the highest levels of health and safety and use SABS-approved materials and ISO-certified suppliers.
              </p>
            </div>

            <div className="mb-20">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-6xl mx-auto text-center">
                With extensive experience in diverse projects, particularly in critical environments such as hospitals, clinics, and utility infrastructure. Gramsak is uniquely positioned to deliver engineering projects that demand precision, speed, and compliance.
              </p>
            </div>

            <div className="mb-20">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-6xl mx-auto text-center">
                We take pride in mobilising skilled resources, ensuring quality workmanship, and exceeding expectations through responsive service delivery and enduring client partnerships.
              </p>
            </div>

            {/* Our Reach Section */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-6">
                  <MapPin className="h-8 w-8 text-gramsak-green mr-3" />
                  <h2 className="text-4xl font-bold text-foreground">Our Reach</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  Gramsak has completed engineering projects in multiple provinces. Whether urban or deep rural, we deliver with precision.
                </p>
              </div>
              
              <div className="text-center">
                <Card className="inline-block p-8 bg-gramsak-green/5 border-gramsak-green/20 max-w-2xl">
                  <CardContent className="p-0">
                    <div className="flex items-center justify-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gramsak-green/10 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-gramsak-green" />
                      </div>
                      <h3 className="font-bold text-xl text-foreground">
                        National Coverage
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-center">
                      From bustling urban centers to remote rural communities across all nine provinces
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Credentials Section */}
            <div 
              className="relative py-16 px-8 rounded-2xl mb-20 bg-cover bg-center"
              style={{ backgroundImage: `url(/lovable-uploads/faaaca32-6256-4207-a5b7-bee4219b8aba.png)` }}
            >
              <div className="absolute inset-0 bg-black/80 rounded-2xl"></div>
              <div className="relative text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Our Credentials</h2>
                <p className="text-lg mb-4">
                  Gramsak is fully compliant with national regulatory standards and proudly holds the following registrations and certifications:
                </p>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold mb-2">Construction Industry Development Board (CIDB):</h3>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    <Badge className="bg-white text-black px-4 py-2">7ME</Badge>
                    <Badge className="bg-white text-black px-4 py-2">7EP</Badge>
                    <Badge className="bg-white text-black px-4 py-2">6EB</Badge>
                    <Badge className="bg-white text-black px-4 py-2">5GB</Badge>
                    <Badge className="bg-white text-black px-4 py-2">5SQ</Badge>
                    <Badge className="bg-white text-black px-4 py-2">5SF</Badge>
                    <Badge className="bg-white text-black px-4 py-2">1CE</Badge>
                    <Badge className="bg-white text-black px-4 py-2">1SH</Badge>
                    <Badge className="bg-white text-black px-4 py-2">1SO</Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm mb-6">
                  <div>• Central Supplier Database (CSD)</div>
                  <div>• Department of Labour (DOL)</div>
                  <div>• South African Revenue Service (SARS)</div>
                  <div>• Unemployment Insurance Fund (UIF)</div>
                  <div>• National Home Builders Registration Council (NHBRC)</div>
                  <div>• Registered Electrical Contractor</div>
                </div>
                <p className="text-lg">
                  We maintain all statutory registrations and remain committed to quality, safety, and legal compliance across all projects.
                </p>
              </div>
            </div>

            {/* Our People */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div className="relative">
                <img
                  src="/lovable-uploads/81df7670-552a-4013-8652-3d0eb2bf964c.png"
                  alt="Workers on construction site"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
              <div>
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-gramsak-green mr-3" />
                  <h2 className="text-4xl font-bold text-foreground">Our People</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our success is built on quality workmanship, attention to detail, and a reputation for reliability. All Gramsak personnel are trained to the highest standards and remain fully compliant with industry regulations and best practices.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  A shared commitment to professionalism, safety, and excellence in service delivery drives our team.
                </p>
              </div>
            </div>

            {/* Standards Section with better contrast */}
            <div 
              className="relative py-16 px-8 rounded-2xl mb-20 bg-cover bg-center"
              style={{ backgroundImage: `url(/lovable-uploads/c13e8b50-b73d-4faf-9240-b82995959080.png)` }}
            >
              <div className="absolute inset-0 bg-gramsak-green/95 rounded-2xl"></div>
              <div className="relative text-center text-white">
                <h2 className="text-3xl font-bold mb-6">Our Standards</h2>
                <p className="text-lg leading-relaxed max-w-4xl mx-auto">
                  Gramsak works with SABS-approved, premium-quality materials applied strictly according to manufacturers' specifications. We partner with certified suppliers, ensuring consistent product quality and safety compliance across all our operations. Each team member is trained in specific tasks, contributing to superior workmanship and job satisfaction across our organisation.
                </p>
              </div>
            </div>

            {/* Health & Safety */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="flex items-center mb-6">
                  <Shield className="h-8 w-8 text-gramsak-green mr-3" />
                  <h2 className="text-4xl font-bold text-foreground">Health & Safety</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Health and safety are integral to our operations. Gramsak maintains an impeccable safety record and prioritises compliance with the Occupational Health and Safety Act (OSHACT 85 of 1993).
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  All staff undergo regular safety training and fully understand their responsibilities in maintaining a safe working environment. Our safety protocols are continually reviewed and updated to ensure alignment with best practices and legal requirements.
                </p>
              </div>
              <div className="relative">
                <img
                  src="/lovable-uploads/2d727ee6-40c1-4a19-a0f7-5b4ebaa494a9.png"
                  alt="Safety first sign"
                  className="rounded-2xl shadow-lg w-full"
                />
              </div>
            </div>

            {/* Vision and Mission */}
            <div className="mb-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Vision - Updated text color to match Mission */}
                <Card className="relative overflow-hidden bg-gradient-to-br from-gramsak-green to-gramsak-green/80 text-white">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                        <Lightbulb className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white">Our Vision</h3>
                    </div>
                    <p className="text-lg leading-relaxed text-white">
                        To enhance client productivity by becoming a trusted extension of their operations — delivering expertise, tools, and solutions that directly support their success.
                    </p>

                    {/* Vision image overlay */}
                    <div className="absolute top-4 right-4 opacity-20">
                      <img
                        src="/lovable-uploads/5fb464bb-9e14-4909-87d6-22c69ba2296e.png"
                        alt="Innovation lightbulb"
                        className="w-24 h-24 object-cover rounded-full"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Mission */}
                <Card className="bg-background border-2 border-gramsak-green">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-green-50 dark:bg-green-950 rounded-full flex items-center justify-center mr-4">
                        <Target className="h-8 w-8 text-gramsak-green" />
                      </div>
                      <h3 className="text-2xl font-bold text-foreground">Our Mission</h3>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      To achieve customer satisfaction through exceptional service delivery, innovative engineering solutions, and a consistent focus on responsiveness and reliability in everything we do.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Core Values with hover effects */}
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
                <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {values.map((value, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group hover:bg-gramsak-green hover:text-white cursor-pointer">
                    <CardContent className="p-6 text-center">
                      <div className="w-16 h-16 bg-green-50 dark:bg-green-950 group-hover:bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                        <value.icon className="h-8 w-8 text-gramsak-green group-hover:text-white transition-colors duration-300" />
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-white transition-colors duration-300">{value.title}</h3>
                      <p className="text-muted-foreground group-hover:text-white/90 text-sm leading-relaxed transition-colors duration-300">{value.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AboutUs;