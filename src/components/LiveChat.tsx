
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Send, X, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: string;
}

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Gramsak Support, your virtual assistant. I understand that power outages or HVAC failures can be critical. How can I help you today?",
      sender: 'bot',
      timestamp: new Date().toLocaleTimeString()
    }
  ]);
  const [inputValue, setInputValue] = useState('');

  const quickReplies = [
    "Request a quote",
    "Our services", 
    "Compliance & credentials",
    "Project portfolio",
    "Contact us"
  ];

  const botResponses = {
    "request a quote": "Sure — let's get started! Could you share your project type (Electrical or Mechanical) and location? I'll email you a tailored pricing estimate within 1 business day. Please call +27 11 568 2130 or email admin@gramsak.co.za with your details.",
    "our services": "We specialize in:\n• **Electrical Engineering** — Power restoration, generators, transformers, switchgear upgrades, COCs.\n• **Mechanical Engineering** — HVAC, medical gas, boilers, autoclaves, site maintenance.\n\nFor detailed information, visit our services page or call +27 11 568 2130.",
    "compliance & credentials": "Our credentials include:\n• CIDB Grades: 6EB, 7EP, 7ME\n• BBBEE Level 1 (100% Black female-owned)\n• NHBRC Certified\n• ISO 9001:2000\n• SABS-approved materials\n• OSHACT compliant H&S",
    "project portfolio": "Here's what we've delivered — from hospital generator repairs to HVAC upgrades. Visit our projects page to see our complete portfolio, or contact us at +27 11 568 2130 for specific case studies.",
    "contact us": "📞 Phone: +27 11 568 2130\n📱 Mobile: +27 79 118 2887\n✉️ Email: admin@gramsak.co.za\n💬 WhatsApp: https://wa.me/27791182887\n\n🏢 **Head Office:** Boskruin View Office Park, 180 Girdwood Avenue, Bush Hill, Randburg, Gauteng\n📍 **Regional:** Cosmo City, Gauteng | Welkom, Free State | Eastern Cape (Enoch Mgijima NU1)",
    "default": "Thank you for your message. For immediate technical assistance, please call +27 11 568 2130 or email admin@gramsak.co.za. Our registered engineers and trade-tested technicians are ready to help with your electrical and mechanical engineering needs."
  };

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text,
      sender: 'user',
      timestamp: new Date().toLocaleTimeString()
    };

    setMessages(prev => [...prev, userMessage]);

    // Bot response
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let botResponse = botResponses.default;
      
      for (const [key, response] of Object.entries(botResponses)) {
        if (lowerText.includes(key)) {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        sender: 'bot',
        timestamp: new Date().toLocaleTimeString()
      };

      setMessages(prev => [...prev, botMessage]);
    }, 1000);

    setInputValue('');
  };

  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-20 left-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="rounded-full w-14 h-14 shadow-lg bg-primary hover:bg-primary/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
        <Badge className="absolute -top-2 -right-2 bg-green-500 text-white animate-pulse">
          Live
        </Badge>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-50 w-80 animate-scale-in">
      <Card className="shadow-2xl">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Bot className="mr-2 h-5 w-5" />
              Gramsak Support
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center text-sm">
            <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
            Online now
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          {/* Messages */}
          <div className="h-64 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{message.text}</p>
                  <span className="text-xs opacity-70 mt-1 block">
                    {message.timestamp}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Replies */}
          <div className="px-4 pb-2">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((reply) => (
                <Button
                  key={reply}
                  variant="outline"
                  size="sm"
                  onClick={() => handleQuickReply(reply)}
                  className="text-xs"
                >
                  {reply}
                </Button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                onKeyPress={(e) => e.key === 'Enter' && sendMessage(inputValue)}
                className="flex-1"
              />
              <Button onClick={() => sendMessage(inputValue)}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LiveChat;
