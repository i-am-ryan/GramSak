
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, FileText, Shield, Wrench } from 'lucide-react';

const AIInputBox = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const suggestions = [
    { icon: Shield, text: "Safety compliance requirements", category: "Safety" },
    { icon: FileText, text: "CIDB registration process", category: "Compliance" },
    { icon: Wrench, text: "HVAC maintenance schedule", category: "Technical" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    // Simulate AI response
    setTimeout(() => {
      setResponse(`Based on your query about "${query}", here's what I found: For specific technical assistance, please contact our engineering team at +27 11 123 4567 or use our live chat for immediate support.`);
      setIsLoading(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion);
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardContent className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Bot className="h-6 w-6 text-primary" />
          <h3 className="text-lg font-semibold">AI Technical Assistant</h3>
          <Badge variant="secondary">Beta</Badge>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex space-x-2">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ask about safety protocols, compliance, or technical requirements..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <div className="animate-spin w-4 h-4 border-2 border-primary border-t-transparent rounded-full" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                onClick={() => handleSuggestionClick(suggestion.text)}
                className="flex items-center space-x-1"
              >
                <suggestion.icon className="h-3 w-3" />
                <span>{suggestion.text}</span>
              </Button>
            ))}
          </div>

          {response && (
            <div className="p-4 bg-muted rounded-lg">
              <p className="text-sm">{response}</p>
            </div>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default AIInputBox;
