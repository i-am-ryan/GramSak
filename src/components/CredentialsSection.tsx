
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import { Shield, CheckCircle, FileText, Award, Building, Zap } from 'lucide-react';

const CredentialsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const credentials = [
    {
      icon: Building,
      title: 'Construction Industry Development Board (CIDB)',
      details: '6EB, 7EP, 7ME',
      color: 'text-blue-600'
    },
    {
      icon: FileText,
      title: 'Central Supplier Database (CSD)',
      details: 'Registered Supplier',
      color: 'text-green-600'
    },
    {
      icon: Shield,
      title: 'Department of Labour (DOL)',
      details: 'Compliant Registration',
      color: 'text-purple-600'
    },
    {
      icon: CheckCircle,
      title: 'South African Revenue Service (SARS)',
      details: 'Tax Compliant',
      color: 'text-red-600'
    },
    {
      icon: Award,
      title: 'Unemployment Insurance Fund (UIF)',
      details: 'Registered Contributor',
      color: 'text-orange-600'
    },
    {
      icon: Building,
      title: 'National Home Builders Registration Council (NHBRC)',
      details: 'Registered Builder',
      color: 'text-teal-600'
    },
    {
      icon: Zap,
      title: 'Registered Electrical Contractor',
      details: 'Licensed & Certified',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50/50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Credentials
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Our Credentials
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Gramsak is fully compliant with national regulatory standards and proudly holds the following registrations and certifications:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {credentials.map((credential, index) => (
            <div
              key={index}
              className={`bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:shadow-primary/10 group border border-gray-200 dark:border-gray-700 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg bg-gray-50 dark:bg-gray-700 group-hover:bg-primary/10 transition-all duration-300`}>
                  <credential.icon className={`h-6 w-6 ${credential.color} group-hover:scale-110 transition-transform duration-300`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                    {credential.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {credential.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div
          className={`text-center bg-primary/5 dark:bg-primary/10 rounded-lg p-8 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '700ms' }}
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            We maintain all statutory registrations and remain committed to quality, safety, and legal compliance across all projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CredentialsSection;
