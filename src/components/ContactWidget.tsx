
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MessageCircle, X } from 'lucide-react';

const ContactWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactMethods = [
    {
      icon: Phone,
      label: 'Call Us',
      value: '+27 11 568 2130',
      action: () => window.open('tel:+27115682130')
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'admin@gramsak.co.za',
      action: () => window.open('mailto:admin@gramsak.co.za')
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Quick Support',
      action: () => window.open('https://mail.google.com/mail/?view=cm&fs=1&to=admin@gramsak.co.za')
    }

  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isExpanded && (
        <Card className="mb-4 w-72 animate-scale-in">
          <CardContent className="p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold">Quick Contact</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsExpanded(false)}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="space-y-3">
              {contactMethods.map((method, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start"
                  onClick={method.action}
                >
                  <method.icon className="mr-3 h-4 w-4" />
                  <div className="text-left">
                    <div className="font-medium">{method.label}</div>
                    <div className="text-xs text-muted-foreground">{method.value}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      <Button
        size="lg"
        className="rounded-full w-14 h-14 shadow-lg"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <X className="h-6 w-6" /> : <Phone className="h-6 w-6" />}
      </Button>
    </div>
  );
};

export default ContactWidget;
