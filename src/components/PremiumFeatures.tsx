
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Lock, Zap, Calendar, Map, Bot, Crown } from 'lucide-react';
import AIInputBox from './AIInputBox';
import InteractiveCalendar from './InteractiveCalendar';
import LiveProjectMap from './LiveProjectMap';

const PremiumFeatures = () => {
  const [aiUsageCount, setAiUsageCount] = useState(0);
  const [mapUsageCount, setMapUsageCount] = useState(0);
  const maxFreeUsage = 5;

  const handleAIUsage = () => {
    if (aiUsageCount < maxFreeUsage) {
      setAiUsageCount(prev => prev + 1);
    }
  };

  const handleMapUsage = () => {
    if (mapUsageCount < maxFreeUsage) {
      setMapUsageCount(prev => prev + 1);
    }
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-primary to-purple-600 text-white">
            <Crown className="mr-2 h-4 w-4" />
            Premium Features
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Next-Generation
            <span className="block text-primary">Engineering Tools</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of engineering project management with our AI-powered tools. 
            Try them free, then upgrade for unlimited access.
          </p>
        </div>

        {/* AI-Powered Technical Support */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Bot className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">AI-Powered Technical Support</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    {aiUsageCount}/{maxFreeUsage} Free Uses
                  </Badge>
                  {aiUsageCount >= maxFreeUsage && (
                    <Badge className="bg-orange-500">
                      <Lock className="mr-1 h-3 w-3" />
                      Upgrade Required
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Get instant answers to your engineering questions with our intelligent assistant. 
                Ask about safety protocols, compliance requirements, or technical specifications.
              </p>
              
              {aiUsageCount < maxFreeUsage ? (
                <div onClick={handleAIUsage}>
                  <AIInputBox />
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-lg">
                  <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Upgrade to Premium</h3>
                  <p className="text-muted-foreground mb-4">
                    You've reached your weekly limit. Upgrade for unlimited access to AI support.
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-purple-600">
                    <Crown className="mr-2 h-4 w-4" />
                    Upgrade Now - R299/month
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Interactive Scheduling */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Calendar className="h-6 w-6 text-primary" />
                <CardTitle className="text-2xl">Interactive Project Scheduling</CardTitle>
                <Badge className="bg-green-500">Always Free</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Advanced project scheduling with drag-and-drop functionality, resource allocation, 
                and milestone tracking. Perfect for complex engineering projects.
              </p>
              <InteractiveCalendar />
            </CardContent>
          </Card>
        </section>

        {/* Live Project Tracking */}
        <section className="mb-16">
          <Card className="max-w-4xl mx-auto">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Map className="h-6 w-6 text-primary" />
                  <CardTitle className="text-2xl">Live Project Tracking</CardTitle>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">
                    {mapUsageCount}/{maxFreeUsage} Free Views
                  </Badge>
                  {mapUsageCount >= maxFreeUsage && (
                    <Badge className="bg-orange-500">
                      <Lock className="mr-1 h-3 w-3" />
                      Upgrade Required
                    </Badge>
                  )}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                Real-time project visualization with GPS tracking, progress updates, 
                and resource deployment across all your engineering sites.
              </p>
              
              {mapUsageCount < maxFreeUsage ? (
                <div onClick={handleMapUsage}>
                  <LiveProjectMap />
                </div>
              ) : (
                <div className="text-center py-12 bg-muted/50 rounded-lg">
                  <Lock className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Premium Feature Locked</h3>
                  <p className="text-muted-foreground mb-4">
                    Weekly limit reached. Upgrade for unlimited project tracking access.
                  </p>
                  <Button className="bg-gradient-to-r from-primary to-purple-600">
                    <Crown className="mr-2 h-4 w-4" />
                    Upgrade Now - R299/month
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </section>

        {/* Pricing Card */}
        <div className="text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-primary to-purple-600 text-white">
            <CardContent className="p-8">
              <Crown className="h-16 w-16 mx-auto mb-4 text-yellow-300" />
              <h3 className="text-3xl font-bold mb-4">Premium Engineering Suite</h3>
              <p className="text-white/90 mb-6">
                Unlock unlimited access to all advanced features and tools. 
                Perfect for engineering firms managing multiple projects.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-yellow-300" />
                  <span>Unlimited AI Technical Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Map className="h-5 w-5 text-yellow-300" />
                  <span>Live Project Tracking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-yellow-300" />
                  <span>Advanced Scheduling</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-yellow-300" />
                  <span>Priority Support</span>
                </div>
              </div>
              
              <div className="text-center mb-6">
                <span className="text-4xl font-bold">R299</span>
                <span className="text-white/80">/month</span>
              </div>
              
              <Button size="lg" className="bg-white text-primary hover:bg-white/90 w-full">
                Start Premium Trial - 14 Days Free
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
