
import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Shield, Calendar } from 'lucide-react';

const SafetyWidget = () => {
  const [daysSinceIncident, setDaysSinceIncident] = useState(0);

  useEffect(() => {
    // Calculate days since last incident (example: Jan 1, 2023)
    const lastIncidentDate = new Date('2023-01-01');
    const today = new Date();
    const timeDiff = today.getTime() - lastIncidentDate.getTime();
    const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));
    setDaysSinceIncident(daysDiff);
  }, []);

  return (
    <Card className="bg-green-50 dark:bg-green-950 border-green-200 dark:border-green-800 hover-lift">
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <div className="flex items-center space-x-2">
          <Shield className="h-5 w-5 text-green-600" />
          <CardTitle className="text-lg font-semibold text-green-700 dark:text-green-300">
            Safety Record
          </CardTitle>
        </div>
        <Badge variant="secondary" className="ml-auto bg-green-100 text-green-800">
          Excellent
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {daysSinceIncident.toLocaleString()}
          </div>
          <p className="text-sm text-green-700 dark:text-green-300 mb-3">
            Days without incident
          </p>
          <div className="flex items-center justify-center text-xs text-muted-foreground">
            <Calendar className="h-4 w-4 mr-1" />
            Updated daily
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SafetyWidget;
