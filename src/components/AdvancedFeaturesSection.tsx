
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  Bot, 
  MapPin, 
  FileText, 
  Shield,
  Zap,
  Users,
  Award
} from 'lucide-react';
import GlassCard from './GlassCard';

const AdvancedFeaturesSection = () => {
  const features = [
    {
      icon: Bot,
      title: 'AI Technical Assistant',
      description: 'Get instant answers to technical queries, safety protocols, and compliance requirements.',
      badge: 'Beta',
      color: 'bg-blue-500'
    },
    {
      icon: Calendar,
      title: 'Smart Scheduling',
      description: 'Interactive calendar for maintenance visits, project milestones, and team schedules.',
      badge: 'Live',
      color: 'bg-green-500'
    },
    {
      icon: MapPin,
      title: 'Live Project Map',
      description: 'Real-time project tracking across all provinces with detailed progress updates.',
      badge: 'Real-time',
      color: 'bg-purple-500'
    },
    {
      icon: FileText,
      title: 'Tender Toolkit',
      description: 'Secure portal for procurement officers with all compliance documents and certifications.',
      badge: 'Secure',
      color: 'bg-orange-500'
    },
    {
      icon: Shield,
      title: 'Digital Maintenance Logs',
      description: 'Transparent client access to inspections, safety checklists, and warranty tracking.',
      badge: 'Premium',
      color: 'bg-red-500'
    },
    {
      icon: Award,
      title: 'B-BBEE Calculator',
      description: 'Show clients how choosing Gramsak boosts their procurement points and transformation goals.',
      badge: 'Impact',
      color: 'bg-indigo-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-blue-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Advanced Solutions
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation
            <span className="block text-primary">Engineering Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge technology solutions designed to streamline procurement, enhance transparency, and deliver exceptional client experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <GlassCard 
              key={index}
              className="group relative overflow-hidden"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div className={`p-3 rounded-lg ${feature.color} text-white`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {feature.badge}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <Button variant="outline" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </GlassCard>
          ))}
        </div>

        {/* CTA Section */}
        <GlassCard className="text-center">
          <CardContent className="p-8">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="flex items-center space-x-2">
                <Zap className="h-8 w-8 text-primary" />
                <Users className="h-8 w-8 text-primary" />
                <Shield className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-4">
              Ready to Experience the Future of Engineering?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Join leading organizations who trust Gramsak's innovative approach to engineering excellence. 
              Book a demonstration of our advanced tools and see the difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8">
                Schedule Demo
              </Button>
              <Button size="lg" variant="outline" className="px-8">
                Request Access
              </Button>
            </div>
          </CardContent>
        </GlassCard>
      </div>
    </section>
  );
};

export default AdvancedFeaturesSection;
