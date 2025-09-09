
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Eye, Calendar, Users } from 'lucide-react';

const LiveProjectMap = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      name: 'Eskom Substation Upgrade',
      location: 'Roodepoort, Gauteng',
      status: 'In Progress',
      progress: 75,
      client: 'Eskom Holdings',
      startDate: '2024-01-01',
      endDate: '2024-03-15',
      team: 12,
      coordinates: { x: 35, y: 45 }
    },
    {
      id: 2,
      name: 'Mining Equipment Maintenance',
      location: 'Rustenburg, North West',
      status: 'Completed',
      progress: 100,
      client: 'Platinum Mine Corp',
      startDate: '2023-11-01',
      endDate: '2024-01-10',
      team: 8,
      coordinates: { x: 25, y: 35 }
    },
    {
      id: 3,
      name: 'HVAC Installation',
      location: 'Polokwane, Limpopo',
      status: 'Planning',
      progress: 15,
      client: 'Hospital Group',
      startDate: '2024-02-01',
      endDate: '2024-05-30',
      team: 15,
      coordinates: { x: 45, y: 25 }
    },
    {
      id: 4,
      name: 'Fire Safety System',
      location: 'Johannesburg, Gauteng',
      status: 'In Progress',
      progress: 60,
      client: 'Corporate Tower',
      startDate: '2024-01-15',
      endDate: '2024-04-01',
      team: 6,
      coordinates: { x: 40, y: 50 }
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Planning': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Map View */}
      <div className="lg:col-span-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5" />
              <span>Live Project Map</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative w-full h-96 bg-muted rounded-lg overflow-hidden">
              {/* Simplified South Africa map background */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
                <svg 
                  className="w-full h-full opacity-20" 
                  viewBox="0 0 100 100"
                  fill="currentColor"
                >
                  <path d="M10,30 Q20,20 40,25 Q60,20 80,30 Q85,50 80,70 Q60,85 40,80 Q20,75 10,60 Z" />
                </svg>
              </div>
              
              {/* Project markers */}
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                  style={{ 
                    left: `${project.coordinates.x}%`, 
                    top: `${project.coordinates.y}%` 
                  }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className={`w-4 h-4 rounded-full ${getStatusColor(project.status)} animate-pulse`}></div>
                  <div className="absolute top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <div className="bg-white px-2 py-1 rounded shadow-lg text-xs font-medium">
                      {project.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex items-center justify-center space-x-6 mt-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Completed</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span>In Progress</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span>Planning</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Project Details */}
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
          </CardHeader>
          <CardContent>
            {selectedProject ? (
              <div className="space-y-4">
                {projects
                  .filter(p => p.id === selectedProject)
                  .map(project => (
                    <div key={project.id}>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-semibold">{project.name}</h3>
                        <Badge 
                          variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        >
                          {project.status}
                        </Badge>
                      </div>
                      
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-muted-foreground" />
                          <span>{project.location}</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Users className="h-4 w-4 text-muted-foreground" />
                          <span>{project.team} team members</span>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span>{project.startDate} - {project.endDate}</span>
                        </div>
                      </div>

                      <div className="mt-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm text-muted-foreground">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className="bg-primary h-2 rounded-full transition-all duration-300"
                            style={{ width: `${project.progress}%` }}
                          ></div>
                        </div>
                      </div>

                      <Button className="w-full mt-4" variant="outline">
                        <Eye className="mr-2 h-4 w-4" />
                        View Full Details
                      </Button>
                    </div>
                  ))
                }
              </div>
            ) : (
              <div className="text-center text-muted-foreground py-8">
                <MapPin className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Click on a project marker to view details</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Quick Stats */}
        <Card className="mt-4">
          <CardContent className="p-4">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-primary">{projects.length}</div>
                <div className="text-xs text-muted-foreground">Active Projects</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-primary">3</div>
                <div className="text-xs text-muted-foreground">Provinces</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LiveProjectMap;
