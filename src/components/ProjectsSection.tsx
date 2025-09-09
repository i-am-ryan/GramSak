
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, MapPin, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const electricalProjects = [
    {
      title: 'Upgrade of 6 Electrical DBs',
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Chris Hani Baragwanath Academic Hospital',
      year: '2025',
      scope: 'Upgrade of 6 Electrical Distribution Boards',
      deliverables: '6 DBs upgraded',
      image: '/lovable-uploads/c8662369-851e-4b18-a662-da6cee29b6b9.png'
    },
    {
      title: 'Generator Maintenance Contract',
      client: 'South African National Parks (SANParks)',
      location: 'Pretoria',
      year: '2023–2028',
      scope: 'Generator Maintenance Contract (5 years)',
      deliverables: 'Quarterly inspections and servicing',
      image: '/lovable-uploads/107ea52c-ab7b-4529-85ac-2c15f9272db9.png'
    },
    {
      title: 'Power Restoration & Generator Repairs',
      client: 'South African Post Office SOC Limited',
      location: 'Pretoria',
      year: '2023',
      scope: 'Power Restoration & Generator Repairs',
      deliverables: '100% power restored; generator operational',
      image: '/lovable-uploads/c8662369-851e-4b18-a662-da6cee29b6b9.png'
    },
    {
      title: 'Replace Transformer & Switchgear',
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Far East Rand Hospital',
      year: '2023–2024',
      scope: 'Replace Transformer, Switchgear, and Cables',
      deliverables: 'Equipment replaced and functional',
      image: '/lovable-uploads/107ea52c-ab7b-4529-85ac-2c15f9272db9.png'
    }
  ];

  const mechanicalProjects = [
    {
      title: 'AC Installation & Maintenance',
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Soshanguve 2 Clinic',
      year: '2023',
      scope: 'Supply, Install & Maintain AC Units',
      deliverables: '5 new installed, 17 maintained',
      image: '/lovable-uploads/107ea52c-ab7b-4529-85ac-2c15f9272db9.png'
    },
    {
      title: 'Autoclave & Compressor Servicing',
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Hillbrow Community Health Centre',
      year: '2023',
      scope: 'Major Service and Repair of Autoclaves',
      deliverables: 'All autoclaves serviced and tested',
      image: '/lovable-uploads/c8662369-851e-4b18-a662-da6cee29b6b9.png'
    },
    {
      title: 'Medical Gas Pipe Replacement',
      client: 'Gauteng Department of Infrastructure Development',
      location: 'Charlotte Maxeke Johannesburg Academic Hospital',
      year: '2024',
      scope: 'Emergency Replacement of Stolen Medical Gas Pipes',
      deliverables: 'Lines restored in Ward 566',
      image: '/lovable-uploads/107ea52c-ab7b-4529-85ac-2c15f9272db9.png'
    },
    {
      title: 'Refrigeration Maintenance',
      client: 'Onderstepoort Biological Products Ltd',
      location: 'Onderstepoort',
      year: '2023–2024',
      scope: 'Onsite Refrigeration Contractor Services',
      deliverables: 'Refrigeration systems maintained',
      image: '/lovable-uploads/c8662369-851e-4b18-a662-da6cee29b6b9.png'
    }
  ];

  const allProjects = [...electricalProjects, ...mechanicalProjects];
  const itemsPerPage = 3;
  const totalPages = Math.ceil(allProjects.length / itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentProjects = () => {
    const start = currentIndex * itemsPerPage;
    return allProjects.slice(start, start + itemsPerPage);
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-red-600 border-red-600">
            Our Projects
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven Track Record
            <span className="block text-red-600">Across Industries</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From major public infrastructure to specialized industrial projects, 
            we deliver excellence across all sectors.
          </p>
        </div>

        {/* Project Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-red-50 border-red-200 hover:border-red-300"
            onClick={prevSlide}
            disabled={currentIndex === 0}
          >
            <ChevronLeft className="h-4 w-4 text-red-600" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-red-50 border-red-200 hover:border-red-300"
            onClick={nextSlide}
            disabled={currentIndex === totalPages - 1}
          >
            <ChevronRight className="h-4 w-4 text-red-600" />
          </Button>

          {/* Projects Grid */}
          <div className="mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {getCurrentProjects().map((project, index) => (
                <Card key={index} className="group hover-lift overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-red-500/10">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-red-600 hover:bg-red-700">
                        {project.year}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                    <p className="text-red-600 font-medium mb-2">{project.client}</p>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      {project.location}
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <p className="text-sm font-medium text-foreground">Scope: {project.scope}</p>
                      <p className="text-sm text-muted-foreground">Deliverables: {project.deliverables}</p>
                    </div>
                    
                    <Button variant="outline" className="w-full group border-red-200 hover:border-red-300 hover:bg-red-50">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 text-red-600" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {Array.from({ length: totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-red-600' : 'bg-gray-300 hover:bg-red-300'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="text-lg px-8 py-4 bg-red-600 hover:bg-red-700 text-white">
            View All Projects
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
