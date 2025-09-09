
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { 
  Download, 
  Shield, 
  FileText, 
  Award, 
  Calendar,
  Lock,
  CheckCircle
} from 'lucide-react';

const TenderToolkit = () => {
  const [email, setEmail] = useState('');
  const [accessCode, setAccessCode] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const documents = [
    { 
      name: 'CIDB Registration Certificate', 
      size: '2.4 MB', 
      updated: '2024-01-15',
      icon: Award,
      category: 'Compliance'
    },
    { 
      name: 'NHBRC Registration', 
      size: '1.8 MB', 
      updated: '2024-01-10',
      icon: Shield,
      category: 'Compliance'
    },
    { 
      name: 'Safety Records & Statistics', 
      size: '3.2 MB', 
      updated: '2024-01-20',
      icon: Shield,
      category: 'Safety'
    },
    { 
      name: 'Method Statements Template', 
      size: '2.1 MB', 
      updated: '2024-01-18',
      icon: FileText,
      category: 'Documentation'
    },
    { 
      name: 'Risk Assessment Framework', 
      size: '1.9 MB', 
      updated: '2024-01-17',
      icon: FileText,
      category: 'Safety'
    },
    { 
      name: 'B-BBEE Level 1 Certificate', 
      size: '2.0 MB', 
      updated: '2024-01-01',
      icon: Award,
      category: 'Empowerment'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && accessCode) {
      setIsAuthenticated(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lock className="h-6 w-6 text-primary" />
            <CardTitle>Tender Toolkit Access</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Email Address</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="procurement@company.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Access Code</label>
              <Input
                type="password"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)}
                placeholder="Enter provided access code"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Access Toolkit
            </Button>
            <p className="text-sm text-muted-foreground text-center">
              Contact us at +27 11 123 4567 for access credentials
            </p>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <CheckCircle className="h-8 w-8 text-green-500" />
          <h2 className="text-2xl font-bold">Tender Toolkit Portal</h2>
        </div>
        <p className="text-muted-foreground">
          All compliance documents and certifications for procurement officers
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {documents.map((doc, index) => (
          <Card key={index} className="hover-lift">
            <CardContent className="p-4">
              <div className="flex items-start justify-between mb-3">
                <doc.icon className="h-8 w-8 text-primary" />
                <Badge variant="outline">{doc.category}</Badge>
              </div>
              
              <h3 className="font-semibold mb-2">{doc.name}</h3>
              
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                <span>{doc.size}</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>{doc.updated}</span>
                </div>
              </div>

              <Button variant="outline" className="w-full">
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="p-6">
          <div className="flex items-center space-x-4">
            <Award className="h-12 w-12 text-primary" />
            <div>
              <h3 className="font-bold text-lg mb-2">Quick Compliance Request</h3>
              <p className="text-muted-foreground mb-4">
                Need a custom compliance letter or additional documentation?
              </p>
              <Button>Request Custom Documentation</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TenderToolkit;
