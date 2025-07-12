
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';

const ProjectTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 'PRJ-2024-001',
      title: 'Eskom SF6 Switchgear Replacement',
      client: 'Eskom Holdings',
      location: 'Johannesburg, Gauteng',
      value: 'R 2.5M',
      status: 'Completed',
      startDate: '2024-01-15',
      endDate: '2024-03-30',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'PRJ-2024-002',
      title: 'Mining Conveyor Belt Installation',
      client: 'Platinum Mines Ltd',
      location: 'Rustenburg, North West',
      value: 'R 1.8M',
      status: 'In Progress',
      startDate: '2024-02-01',
      endDate: '2024-04-15',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'PRJ-2024-003',
      title: 'Hospital HVAC System Upgrade',
      client: 'Gauteng Health Department',
      location: 'Pretoria, Gauteng',
      value: 'R 3.2M',
      status: 'Planning',
      startDate: '2024-04-01',
      endDate: '2024-07-30',
      progress: 25,
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'PRJ-2024-004',
      title: 'Generator Maintenance Contract',
      client: 'South African National Parks',
      location: 'Multiple Locations',
      value: 'R 1.2M',
      status: 'Completed',
      startDate: '2023-01-01',
      endDate: '2028-12-31',
      progress: 100,
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const getStatusColor = (status: string) => {
    const colors = {
      'Completed': 'bg-green-100 text-green-800',
      'In Progress': 'bg-blue-100 text-blue-800',
      'Planning': 'bg-yellow-100 text-yellow-800',
      'Quoted': 'bg-gray-100 text-gray-800'
    };
    return colors[status as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const currentProject = projects[currentIndex];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Project Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Track our current and completed projects across South Africa
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            {/* Project Image */}
            <div className="relative h-64 md:h-80">
              <img
                src={currentProject.image}
                alt={currentProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute top-4 right-4">
                <Badge className={getStatusColor(currentProject.status)}>
                  {currentProject.status}
                </Badge>
              </div>
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold mb-2">{currentProject.title}</h3>
                <p className="text-white/90">{currentProject.client}</p>
              </div>
            </div>

            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{currentProject.location}</span>
                  </div>
                  <div className="flex items-center text-muted-foreground mb-2">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{currentProject.startDate} - {currentProject.endDate}</span>
                  </div>
                  <div className="text-lg font-semibold text-primary">
                    Contract Value: {currentProject.value}
                  </div>
                </div>
                
                <div>
                  <div className="mb-2">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progress</span>
                      <span>{currentProject.progress}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${currentProject.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Project ID: {currentProject.id}
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <Button 
                  variant="outline" 
                  onClick={prevProject}
                  className="flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-2" />
                  Previous
                </Button>
                
                <div className="flex space-x-2">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentIndex ? 'bg-primary' : 'bg-muted'
                      }`}
                    />
                  ))}
                </div>
                
                <Button 
                  variant="outline" 
                  onClick={nextProject}
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ProjectTimeline;
