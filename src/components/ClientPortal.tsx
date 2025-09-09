
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  User, 
  FileText, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  Eye
} from 'lucide-react';

const ClientPortal = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const mockProjects = [
    {
      id: 'PRJ-001',
      name: 'Electrical Panel Upgrade',
      status: 'In Progress',
      progress: 75,
      lastUpdate: '2024-01-15'
    },
    {
      id: 'PRJ-002', 
      name: 'HVAC Installation',
      status: 'Completed',
      progress: 100,
      lastUpdate: '2024-01-10'
    }
  ];

  const mockInvoices = [
    {
      id: 'INV-001',
      project: 'Electrical Panel Upgrade',
      amount: 125000,
      status: 'Paid',
      date: '2024-01-01'
    },
    {
      id: 'INV-002',
      project: 'HVAC Installation', 
      amount: 85000,
      status: 'Pending',
      date: '2024-01-15'
    }
  ];

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    if (email && password) {
      setIsLoggedIn(true);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Completed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'In Progress':
        return <Clock className="h-4 w-4 text-blue-500" />;
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
    }
  };

  if (!isLoggedIn) {
    return (
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <div className="flex items-center space-x-2">
            <User className="h-6 w-6 text-primary" />
            <CardTitle>Client Portal Access</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
              />
            </div>
            <Button type="submit" className="w-full">
              Access Portal
            </Button>
          </form>
          <p className="text-sm text-muted-foreground mt-4 text-center">
            Demo: Use any email/password to access
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Projects Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Active Projects</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockProjects.map((project) => (
            <div key={project.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{project.name}</h3>
                <Badge 
                  variant={project.status === 'Completed' ? 'default' : 'secondary'}
                  className="flex items-center space-x-1"
                >
                  {getStatusIcon(project.status)}
                  <span>{project.status}</span>
                </Badge>
              </div>
              
              <div className="text-sm text-muted-foreground mb-2">
                Project ID: {project.id}
              </div>
              
              <div className="w-full bg-muted rounded-full h-2 mb-2">
                <div 
                  className="bg-primary h-2 rounded-full transition-all duration-300"
                  style={{ width: `${project.progress}%` }}
                ></div>
              </div>
              
              <div className="flex items-center justify-between text-sm">
                <span>{project.progress}% Complete</span>
                <span>Updated: {project.lastUpdate}</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Invoices */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Recent Invoices</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {mockInvoices.map((invoice) => (
            <div key={invoice.id} className="border rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">{invoice.id}</h3>
                <Badge 
                  variant={invoice.status === 'Paid' ? 'default' : 'secondary'}
                >
                  {invoice.status}
                </Badge>
              </div>
              
              <div className="text-sm text-muted-foreground mb-2">
                {invoice.project}
              </div>
              
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  R {invoice.amount.toLocaleString()}
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-muted-foreground">
                    {invoice.date}
                  </span>
                  <Button size="sm" variant="outline">
                    <Eye className="h-4 w-4 mr-1" />
                    View
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};

export default ClientPortal;
