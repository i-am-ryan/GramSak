import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const electricalProjects = [
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Johannesburg Region – Chris Hani Baragwanath Academic Hospital',
      scope: 'Upgrade of 6 Electrical Distribution Boards',
      deliverables: '6 DBs upgraded',
      date: '2025'
    },
    {
      client: 'Gauteng Department of Health',
      location: 'Sedibeng Region – Kopanong Hospital',
      scope: 'Pressure Test, Repair Armoured Cable & Rewire DB',
      deliverables: 'Cable tested and repaired; DB rewired',
      date: '2024'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Springs Region – Far East Rand Hospital',
      scope: 'Replace Transformer, Switchgear, and Cables',
      deliverables: 'Equipment replaced and functional',
      date: '2023–2024'
    },
    {
      client: 'South African National Parks (SANParks)',
      location: 'Pretoria',
      scope: 'Generator Maintenance Contract (5 years)',
      deliverables: 'Quarterly inspections and servicing',
      date: '2023–2028'
    },
    {
      client: 'South African Post Office SOC Limited',
      location: 'Pretoria',
      scope: 'Power Restoration & Generator Repairs',
      deliverables: '100% power restored; generator operational',
      date: '2023'
    },
    {
      client: 'South African Post Office SOC Limited',
      location: 'Ormonde – Wits Mail Centre',
      scope: 'Repairs to Electrical Reticulation',
      deliverables: 'Power restored; backup functional',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Johannesburg Region – Chris Hani Baragwanath Academic Hospital',
      scope: 'Emergency Repairs to Generators',
      deliverables: 'Generators repaired',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Westrand Region – Carletonville FPS',
      scope: 'Major Service on Generator (APP Project)',
      deliverables: 'Generator service completed',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Tshwane Region – Jubilee Regional Hospital',
      scope: 'Minor Servicing & Repair of Generators',
      deliverables: 'Emergency generators restored',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Westrand Region – Sterkfontein Hospital',
      scope: 'Pressure Test Ring Cable, Repair LT Panel, COC',
      deliverables: 'Cable tested; LT panel fixed; COC issued',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Sedibeng Region – Kopanong Hospital',
      scope: 'Service & Repair 250kV Generator',
      deliverables: 'Generator serviced and operational',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Tshwane Region – Weskoppies Hospital',
      scope: 'Service 5 Standby Generators',
      deliverables: 'All units serviced and tested',
      date: '2023'
    },
    
  ];

  const mechanicalProjects = [
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Tshwane Region – Pretoria Regional Office',
      scope: 'Maintenance of Split-Type Air-Conditioners',
      deliverables: 'Units maintained and operational',
      date: '2024'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Johannesburg Region – Charlotte Maxeke Johannesburg Academic Hospital',
      scope: 'Emergency Replacement of Stolen Medical Gas Pipes',
      deliverables: 'Lines restored in Ward 566',
      date: '2024'
    },
    {
      client: 'Onderstepoort Biological Products Ltd',
      location: 'Onderstepoort',
      scope: 'Onsite Refrigeration Contractor Services',
      deliverables: 'Refrigeration systems maintained',
      date: '2023–2024'
    },

    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Tshwane Region – Soshanguve 2 Clinic',
      scope: 'Supply, Install & Maintain AC Units',
      deliverables: '5 new installed, 17 maintained',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Tshwane Region – Dark City EMS',
      scope: 'Install Air-Conditioning Units',
      deliverables: 'Units installed and running',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Westrand Region – Westonaria Cluster',
      scope: 'Major Service on Midwall Split ACs',
      deliverables: 'Units fully serviced',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Johannesburg Region – Hillbrow Community Health Centre (CHC)',
      scope: 'Major Service and Repair of Autoclaves',
      deliverables: 'All autoclaves serviced and tested',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Johannesburg Region – Chris Hani Baragwanath Academic Hospital',
      scope: 'Servicing of Medical Compressors',
      deliverables: 'Compressors serviced across 7 locations',
      date: '2023'
    },
    {
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Johannesburg Region – Rahima Moosa Mother and Child Hospital',
      scope: 'Repairs to Autoclaves in CSSD and Milkroom',
      deliverables: 'Units functional',
      date: '2023'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/lovable-uploads/a96f4031-1e5b-4388-83e6-144f9ab3032d.png')`
        }}
      >
        <div className="container mx-auto px-4">
          <div className="text-center">
            <Badge variant="outline" className="mb-6 text-white border-white">
              Our Projects
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Engineering
              <span className="block text-gramsak-green">Excellence</span>
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
Delivering precision and innovation across multiple engineering projects.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="electrical" className="w-full">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
              <TabsList className="grid w-full max-w-md grid-cols-2 bg-muted p-1">
                <TabsTrigger 
                  value="electrical" 
                  className="data-[state=active]:bg-gramsak-green data-[state=active]:text-white"
                >
                  ⚡ Electrical Engineering
                </TabsTrigger>
                <TabsTrigger 
                  value="mechanical"
                  className="data-[state=active]:bg-gramsak-green data-[state=active]:text-white"
                >
                  🔧 Mechanical Engineering
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Electrical Engineering Projects */}
            <TabsContent value="electrical">
              <div className="space-y-8">
                {/* Portfolio Header */}
                <Card className="bg-gramsak-green text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Electrical Projects Portfolio</h3>
                        <p className="text-white/90">Power systems, electrical infrastructure, and maintenance solutions</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Projects Table */}
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-semibold">Client</TableHead>
                          <TableHead className="font-semibold">Location</TableHead>
                          <TableHead className="font-semibold">Project Scope</TableHead>
                          <TableHead className="font-semibold">Key Deliverables</TableHead>
                          <TableHead className="font-semibold">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {electricalProjects.map((project, index) => (
                          <TableRow key={index} className="hover:bg-muted/30">
                            <TableCell className="font-medium text-sm">{project.client}</TableCell>
                            <TableCell className="text-sm">
                              <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-gramsak-green mt-0.5 flex-shrink-0" />
                                <span>{project.location}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm">{project.scope}</TableCell>
                            <TableCell className="text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>{project.deliverables}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <Badge variant="outline">{project.date}</Badge>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Banner moved to bottom */}
                <div 
                  className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/7926fbcd-feb5-4157-b1ff-c2b53cb8364d.png')`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl font-bold mb-4">Precision Control Systems</h2>
                      <p className="text-xl">Expert installation and maintenance of complex electrical systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Mechanical Engineering Projects */}
            <TabsContent value="mechanical">
              <div className="space-y-8">
                {/* Portfolio Header */}
                <Card className="bg-gramsak-green text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3">
                      <div className="bg-white/20 p-2 rounded-full">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Mechanical Projects Portfolio</h3>
                        <p className="text-white/90">HVAC systems, medical gas infrastructure, and mechanical maintenance</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Projects Table */}
                <Card>
                  <CardContent className="p-0">
                    <Table>
                      <TableHeader>
                        <TableRow className="bg-muted/50">
                          <TableHead className="font-semibold">Client</TableHead>
                          <TableHead className="font-semibold">Location</TableHead>
                          <TableHead className="font-semibold">Project Scope</TableHead>
                          <TableHead className="font-semibold">Key Deliverables</TableHead>
                          <TableHead className="font-semibold">Date</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {mechanicalProjects.map((project, index) => (
                          <TableRow key={index} className="hover:bg-muted/30">
                            <TableCell className="font-medium text-sm">{project.client}</TableCell>
                            <TableCell className="text-sm">
                              <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-gramsak-green mt-0.5 flex-shrink-0" />
                                <span>{project.location}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm">{project.scope}</TableCell>
                            <TableCell className="text-sm">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span>{project.deliverables}</span>
                              </div>
                            </TableCell>
                            <TableCell className="text-sm">
                              <div className="flex items-center space-x-2">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <Badge variant="outline">{project.date}</Badge>
                              </div>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>

                {/* Banner moved to bottom */}
                <div 
                  className="relative h-64 bg-cover bg-center rounded-lg overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('/lovable-uploads/2208fa3e-5ee9-41ab-831d-b23a8ddebcbf.png')`
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl font-bold mb-4">Mechanical Engineering Projects</h2>
                      <p className="text-xl">HVAC, medical systems, and specialized mechanical solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
