
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Zap, Cog, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrackRecordSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const projects = [
    {
      id: 'electrical',
      title: 'Emergency repair of generators ',
      client: 'Department of Health',
      location: 'Chris Hani Baragwanath Academic Hospital',
      description: 'Rapid deployment and repair of critical power generators to restore backup power supply and ensure uninterrupted hospital operations during emergencies.',
      status: 'Completed',
      statusColor: 'bg-green-500',
      image: '/lovable-uploads/abhijeet-gaikwad-wUuq69GGLnU-unsplash.jpg',
      icon: Zap,
      details: 'Rapid deployment and repair of critical power generators to restore backup power supply and ensure uninterrupted hospital operations during emergencies.'
    },
    {
      id: 'maintenance',
      title: 'Replacement of electrical infrastructure ',
      client: 'Department of Health',
      location: 'Far East Rand Hospital',
      description: 'Upgrade and modernization of outdated electrical systems to enhance safety, efficiency, and compliance with health sector regulations.',
      status: 'Completed',
      statusColor: 'bg-green-500',
      image: '/lovable-uploads/fahim-junaid-7MjXpkxFseU-unsplash.jpg',
      icon: Cog,
      details: 'Upgrade and modernization of outdated electrical systems to enhance safety, efficiency, and compliance with health sector regulations.'
    },
    {
      id: 'mechanical',
      title: 'HVAC installation and servicing ',
      client: 'Department of Health',
      location: 'Soshanguve Clinic',
      description: 'Professional installation and routine servicing of heating, ventilation, and air conditioning systems to improve indoor air quality and patient comfort.',
      status: 'Completed',
      statusColor: 'bg-green-500',
      image: '/lovable-uploads/d40452a8-22e5-4f83-82e6-6aa6874b1207.png',
      icon: Building2,
      details: 'Professional installation and routine servicing of heating, ventilation, and air conditioning systems to improve indoor air quality and patient comfort.'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Section with Industrial Pipes Image */}
      <div className="relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{ backgroundImage: `url(/lovable-uploads/3b59075d-4d90-49e7-8cc3-f961efc01a8d.png)` }}
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
        
        {/* Header Content with Background */}
        <div className="relative z-10 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <Badge variant="outline" className="mb-4 text-white border-white/50 bg-white/10 backdrop-blur-sm">
                Our Track Record
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Proven Track Record
                <span className="block text-green-400">Across Industries</span>
              </h2>
              <p className="text-lg text-white/90 max-w-3xl mx-auto">
                Delivering excellence across electrical and mechanical engineering projects throughout South Africa
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section with Regular Background */}
      <div className="bg-muted/30 dark:bg-muted/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {projects.map((project) => (
              <div
                key={project.id}
                className="relative"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <Card className="overflow-hidden hover-lift bg-card border-border hover:shadow-xl transition-all duration-300">
                  <div className="relative">
                    <div
                      className="h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url(${project.image})` }}
                    >
                      <div className="absolute inset-0 bg-black/40"></div>
                      <div className="absolute top-4 left-4">
                        <Badge className={`${project.statusColor} text-white`}>
                          {project.status}
                        </Badge>
                      </div>
                      <div className="absolute top-4 right-4">
                        <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                          <project.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg text-foreground mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm text-primary mb-2">{project.client}</p>
                    <p className="text-xs text-muted-foreground mb-3">{project.location}</p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    {/* Hover overlay with additional details */}
                    {hoveredProject === project.id && (
                      <div className="absolute inset-0 bg-card/95 dark:bg-card/95 backdrop-blur-sm p-6 flex flex-col justify-center">
                        <h4 className="font-bold text-lg text-foreground mb-4">{project.title}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{project.details}</p>
                        <div className="space-y-2">
                          <p className="text-sm"><span className="font-semibold">Client:</span> {project.client}</p>
                          <p className="text-sm"><span className="font-semibold">Location:</span> {project.location}</p>
                          <p className="text-sm"><span className="font-semibold">Status:</span> {project.status}</p>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
                Click to Learn More
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackRecordSection;
