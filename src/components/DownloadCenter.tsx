
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download, FileText, Award, Shield } from 'lucide-react';

const DownloadCenter = () => {
  const documents = [
    {
      title: 'CIDB Registration Certificate',
      description: 'Construction Industry Development Board certification',
      type: 'Compliance',
      icon: Award,
      size: '2.4 MB',
      updated: '2024-01-15'
    },
    {
      title: 'NHBRC Registration',
      description: 'National Home Builders Registration Council certificate',
      type: 'Compliance',
      icon: Shield,
      size: '1.8 MB',
      updated: '2024-01-10'
    },
    {
      title: 'SABS Compliance Certificate',
      description: 'South African Bureau of Standards certification',
      type: 'Quality',
      icon: FileText,
      size: '3.2 MB',
      updated: '2024-01-05'
    },
    {
      title: 'B-BBEE Certificate',
      description: 'Level 1 Broad-Based Black Economic Empowerment certificate',
      type: 'Empowerment',
      icon: Award,
      size: '2.1 MB',
      updated: '2024-01-01'
    },
    {
      title: 'Company Profile',
      description: 'Comprehensive company overview and capabilities',
      type: 'Corporate',
      icon: FileText,
      size: '5.6 MB',
      updated: '2024-01-20'
    },
    {
      title: 'Health & Safety Policy',
      description: 'Comprehensive safety procedures and protocols',
      type: 'Safety',
      icon: Shield,
      size: '4.3 MB',
      updated: '2024-01-12'
    }
  ];

  const getTypeColor = (type: string) => {
    const colors = {
      Compliance: 'bg-blue-100 text-blue-800',
      Quality: 'bg-green-100 text-green-800',
      Empowerment: 'bg-purple-100 text-purple-800',
      Corporate: 'bg-gray-100 text-gray-800',
      Safety: 'bg-red-100 text-red-800'
    };
    return colors[type as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <section id="downloads" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Documentation
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Download Center
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Access all our compliance documents, certificates, and company information
          </p>
        </div>

        {/* Certification Logos */}
        <div className="mb-12">
          <img 
            src="/lovable-uploads/605e1cfe-5328-48a2-b881-70b45538d6d1.png" 
            alt="Compliance Certifications - CIDB, NHBRC, COIDA, CSD"
            className="w-full max-w-4xl mx-auto"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {documents.map((doc, index) => (
            <Card key={index} className="hover-lift">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <doc.icon className="h-8 w-8 text-primary" />
                  <Badge className={getTypeColor(doc.type)}>
                    {doc.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold mb-2">{doc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {doc.description}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span>{doc.size}</span>
                  <span>Updated: {doc.updated}</span>
                </div>

                <Button className="w-full" variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="inline-block p-6 bg-primary/5 border-primary/20">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <div className="text-left">
                <h3 className="font-bold text-lg mb-1">
                  Level 1 B-BBEE Certified
                </h3>
                <p className="text-muted-foreground">
                  Proudly contributing to South Africa's economic transformation
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DownloadCenter;
