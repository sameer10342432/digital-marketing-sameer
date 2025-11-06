import { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ChatbotWidget from './ChatbotWidget';

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(true);

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => {
            setIsOpen(true);
            setHasNewMessage(false);
          }}
          className="fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group animate-in zoom-in duration-300"
          data-testid="button-open-chatbot"
        >
          <MessageCircle className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
          {hasNewMessage && (
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-bold animate-pulse">
              !
            </span>
          )}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            Chat with us
          </span>
        </Button>
      )}
      
      {isOpen && (
        <ChatbotWidget 
          onClose={() => setIsOpen(false)}
          onMinimize={() => setIsOpen(false)}
        />
      )}
    </>
  );
}
