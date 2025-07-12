
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calculator, 
  FileText, 
  Users, 
  Brain, 
  Calendar,
  MapPin,
  Download,
  ArrowRight 
} from 'lucide-react';

const AppFeaturesSection = () => {
  const appFeatures = [
    {
      icon: Calculator,
      title: 'Quote Estimator',
      description: 'Get instant project cost estimates with our smart pricing calculator',
      preview: 'Calculate rough project costs in seconds'
    },
    {
      icon: FileText,
      title: 'Tender Toolkit',
      description: 'Access all compliance documents and tender requirements instantly',
      preview: 'Streamlined procurement process'
    },
    {
      icon: Users,
      title: 'Client Portal',
      description: 'Track your projects, view invoices, and access documents',
      preview: 'Real-time project updates'
    },
    {
      icon: Brain,
      title: 'AI Technical Support',
      description: 'Get instant answers to technical questions and compliance queries',
      preview: '5 free queries per week',
      premium: true
    },
    {
      icon: Calendar,
      title: 'Schedule Maintenance',
      description: 'Book maintenance visits and track service schedules',
      preview: 'Smart scheduling system',
      premium: true
    },
    {
      icon: MapPin,
      title: 'Live Project Tracking',
      description: 'Real-time project location and progress monitoring',
      preview: 'GPS-enabled project updates',
      premium: true
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Gramsak App
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Advanced Tools & Features
            <span className="block text-primary">Download Our App</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Access powerful engineering tools, project management features, and premium AI support 
            through our dedicated mobile and web application.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {appFeatures.map((feature, index) => (
            <Card key={index} className="hover-lift relative">
              {feature.premium && (
                <div className="absolute top-4 right-4">
                  <Badge className="bg-gradient-to-r from-gold to-yellow-500 text-black">
                    Premium
                  </Badge>
                </div>
              )}
              
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="text-sm text-primary font-medium">{feature.preview}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-4">
              <Download className="mr-2 h-5 w-5" />
              Download Gramsak App
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-4">
              View App Features
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-muted/30">
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">Premium Features Available</h3>
                <p className="text-sm text-muted-foreground">
                  AI Technical Support, Advanced Scheduling, and Live Project Tracking available 
                  with premium subscription. Free users get 5 uses per week.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeaturesSection;
