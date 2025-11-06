import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '923081800344';
  const message = 'Hi! I would like to inquire about your digital marketing services.';
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid="button-whatsapp"
      aria-label="Contact us on WhatsApp"
    >
      <div className="relative">
        <div className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          {isHovered && (
            <span className="text-sm font-medium whitespace-nowrap animate-in slide-in-from-right-2">
              Chat with us
            </span>
          )}
        </div>
        
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
        
        <div className="absolute inset-0 bg-[#25D366] rounded-full animate-ping opacity-20" />
      </div>
    </a>
  );
}
