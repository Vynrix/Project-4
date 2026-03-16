import { useState } from 'react';
import ParticleBackground from '../components/ParticleBackground';
import GlassCard from '../components/GlassCard';
import BottomNav from '../components/BottomNav';
import { Bot, Send, User } from 'lucide-react';

interface Message {
  type: 'user' | 'ai';
  content: string;
  timestamp: string;
}

export default function AICommandScreen() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      type: 'ai',
      content: 'Hello! I\'m your AI assistant. You can ask me to scan for leads, generate websites, start outreach campaigns, or show reports.',
      timestamp: '14:22',
    },
  ]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      type: 'user',
      content: input,
      timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
    };

    setMessages([...messages, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      let response = 'I understand. Processing your request...';
      
      if (input.toLowerCase().includes('scan')) {
        response = 'Starting lead scanner for Kochi restaurants. Found 23 businesses without websites. Would you like me to generate prototypes for them?';
      } else if (input.toLowerCase().includes('generate')) {
        response = 'Generating 10 website prototypes using AI. This will take approximately 2 minutes. I\'ll notify you when complete.';
      } else if (input.toLowerCase().includes('outreach')) {
        response = 'Starting outreach campaign. Composing personalized emails for 15 leads. Campaign will begin in 5 minutes.';
      } else if (input.toLowerCase().includes('revenue')) {
        response = 'Today\'s revenue: ₹12,000\nWeekly revenue: ₹84,000\nMonthly revenue: ₹1,82,000\nTotal clients: 21';
      }

      const aiMessage: Message = {
        type: 'ai',
        content: response,
        timestamp: new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }),
      };

      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="min-h-screen bg-[#0b0f14] pb-20 relative overflow-hidden max-w-[360px] mx-auto flex flex-col">
      <ParticleBackground />
      
      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <div className="p-6 border-b border-[#9dff00]/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#9dff00]/10 flex items-center justify-center">
              <Bot className="w-6 h-6 text-[#9dff00]" />
            </div>
            <div>
              <h1 
                className="text-xl text-white"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                AI Command Center
              </h1>
              <p 
                className="text-xs text-gray-500"
                style={{ fontFamily: 'Inter, sans-serif' }}
              >
                Online
              </p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start gap-3 ${
                message.type === 'user' ? 'flex-row-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.type === 'ai' ? 'bg-[#9dff00]/10' : 'bg-white/5'
                }`}
              >
                {message.type === 'ai' ? (
                  <Bot className="w-4 h-4 text-[#9dff00]" />
                ) : (
                  <User className="w-4 h-4 text-gray-400" />
                )}
              </div>
              <div className={`flex-1 ${message.type === 'user' ? 'flex flex-col items-end' : ''}`}>
                <GlassCard
                  className={`p-3 max-w-[80%] inline-block ${
                    message.type === 'user' ? 'bg-[#9dff00]/10' : ''
                  }`}
                >
                  <p
                    className={`text-sm ${
                      message.type === 'user' ? 'text-white' : 'text-gray-300'
                    }`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    {message.content}
                  </p>
                </GlassCard>
                <p
                  className="text-[10px] text-gray-600 mt-1"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="p-6 border-t border-[#9dff00]/10">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a command..."
              className="flex-1 bg-white/5 border border-[#9dff00]/20 rounded-lg px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[#9dff00]/50"
              style={{ fontFamily: 'Inter, sans-serif' }}
            />
            <button
              onClick={handleSend}
              className="w-12 h-12 bg-[#9dff00] rounded-lg flex items-center justify-center transition-all hover:shadow-[0_0_20px_rgba(157,255,0,0.4)]"
            >
              <Send className="w-5 h-5 text-[#0b0f14]" />
            </button>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
