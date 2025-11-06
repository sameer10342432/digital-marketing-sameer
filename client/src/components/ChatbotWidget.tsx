import { useState, useRef, useEffect } from 'react';
import { X, Send, MessageCircle, Minimize2, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getChatResponse, getWelcomeMessage } from '@/lib/chatbotKnowledge';
import { useLocation } from 'wouter';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

const STORAGE_KEY = 'chatbot_history';

function loadChatHistory(): Message[] {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      return parsed.map((msg: any) => ({
        ...msg,
        timestamp: new Date(msg.timestamp)
      }));
    }
  } catch (error) {
    console.error('Failed to load chat history:', error);
  }
  return [];
}

function saveChatHistory(messages: Message[]) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  } catch (error) {
    console.error('Failed to save chat history:', error);
  }
}

function getPageSuggestions(path: string): string[] {
  const suggestions: Record<string, string[]> = {
    '/': ['View Services', 'Check Portfolio', 'Pricing Info', 'Free Tools'],
    '/services': ['SEO Details', 'PPC Info', 'Social Media', 'Get Quote'],
    '/portfolio': ['Similar Results', 'Case Studies', 'Get Started', 'Pricing'],
    '/blog': ['Latest Articles', 'SEO Tips', 'PPC Guide', 'Services'],
    '/tools': ['View All Tools', 'ROI Calculator', 'Services', 'Get Help'],
    '/contact': ['WhatsApp Now', 'Pricing Info', 'Free Consultation', 'Services']
  };
  
  return suggestions[path] || suggestions['/'];
}

export default function ChatbotWidget({ onClose, onMinimize }: { onClose: () => void; onMinimize: () => void }) {
  const [location] = useLocation();
  const storedMessages = loadChatHistory();
  const initialMessages: Message[] = storedMessages.length > 0
    ? storedMessages
    : [{
        role: 'assistant',
        content: getWelcomeMessage().message,
        timestamp: new Date()
      }];
  
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [quickReplies, setQuickReplies] = useState<string[]>(getPageSuggestions(location));
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    saveChatHistory(messages);
  }, [messages]);

  useEffect(() => {
    setQuickReplies(getPageSuggestions(location));
  }, [location]);

  const handleClearHistory = () => {
    const welcomeMsg: Message = {
      role: 'assistant',
      content: getWelcomeMessage().message,
      timestamp: new Date()
    };
    setMessages([welcomeMsg]);
    setQuickReplies(getPageSuggestions(location));
    localStorage.removeItem(STORAGE_KEY);
  };

  const handleSend = async (text?: string) => {
    const messageText = text || input.trim();
    if (!messageText || isTyping) return;

    setInput('');
    setQuickReplies([]);
    
    const userMessage: Message = {
      role: 'user',
      content: messageText,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const response = getChatResponse(messageText);
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: response.message,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
      setQuickReplies(response.quickReplies || getPageSuggestions(location));
      setIsTyping(false);
    }, 500 + Math.random() * 500);
  };

  const handleQuickReply = (reply: string) => {
    handleSend(reply);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
  };

  return (
    <div className="fixed bottom-44 right-6 z-50 w-80 md:w-96 h-[500px] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 text-white p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-white/20 p-2 rounded-full">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-blue-700" />
          </div>
          <div>
            <h3 className="font-semibold text-sm" data-testid="text-chatbot-title">Marketing Assistant</h3>
            <p className="text-xs text-blue-100">Online • Instant replies</p>
          </div>
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClearHistory}
            className="text-white hover:bg-white/20 h-8 w-8"
            title="Clear chat history"
            data-testid="button-clear-chat"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onMinimize}
            className="text-white hover:bg-white/20 h-8 w-8"
            data-testid="button-minimize-chatbot"
          >
            <Minimize2 className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-white hover:bg-white/20 h-8 w-8"
            data-testid="button-close-chatbot"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      </div>

      <div 
        className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-blue-50/30 to-white dark:from-gray-800/30 dark:to-gray-900"
        ref={scrollRef}
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.03"%3E%3Cpath d="M0 40L40 0H20L0 20M40 40V20L20 40"/%3E%3C/g%3E%3C/svg%3E")',
        }}
      >
        <div className="space-y-3">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} animate-in slide-in-from-bottom-2 duration-200`}
              data-testid={`message-${message.role}-${index}`}
            >
              <div className={`max-w-[85%] ${message.role === 'user' ? 'order-2' : 'order-1'}`}>
                <div
                  className={`rounded-lg px-4 py-2 shadow-sm ${
                    message.role === 'user'
                      ? 'bg-blue-600 text-white rounded-br-none'
                      : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 rounded-bl-none'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap leading-relaxed">{message.content}</p>
                </div>
                <p className={`text-xs text-gray-500 dark:text-gray-400 mt-1 px-1 ${message.role === 'user' ? 'text-right' : 'text-left'}`}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start animate-in slide-in-from-bottom-2 duration-200">
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg rounded-bl-none px-4 py-3 shadow-sm">
                <div className="flex gap-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            </div>
          )}

          {quickReplies.length > 0 && !isTyping && (
            <div className="flex flex-wrap gap-2 justify-start animate-in slide-in-from-bottom-2 duration-300">
              {quickReplies.map((reply, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickReply(reply)}
                  className="bg-white dark:bg-gray-800 border-2 border-blue-500 dark:border-blue-600 text-blue-700 dark:text-blue-400 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 shadow-sm"
                  data-testid={`quick-reply-${index}`}
                >
                  {reply}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            disabled={isTyping}
            className="flex-1 rounded-full border-2 focus:border-blue-500 dark:focus:border-blue-600 bg-gray-50 dark:bg-gray-800"
            data-testid="input-chatbot-message"
          />
          <Button
            onClick={() => handleSend()}
            disabled={isTyping || !input.trim()}
            size="icon"
            className="bg-blue-600 hover:bg-blue-700 rounded-full h-10 w-10 shadow-md"
            data-testid="button-send-message"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
          ⚡ Powered by AI • 100% Free • No API Required
        </p>
      </div>
    </div>
  );
}
