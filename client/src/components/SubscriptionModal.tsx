import { useState, useEffect } from 'react';
import { X, Mail, Bell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { useMutation } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

export default function SubscriptionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    const hasSeenModal = localStorage.getItem('hasSeenSubscriptionModal');
    
    if (!hasSeenModal) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  const subscribeMutation = useMutation({
    mutationFn: async (emailAddress: string) => {
      return apiRequest('POST', '/api/subscribe', { email: emailAddress });
    },
    onSuccess: () => {
      toast({
        title: 'Successfully Subscribed!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
      handleClose();
    },
    onError: () => {
      toast({
        title: 'Subscription Failed',
        description: 'Please try again later.',
        variant: 'destructive',
      });
    },
  });

  const handleClose = () => {
    setIsOpen(false);
    localStorage.setItem('hasSeenSubscriptionModal', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: 'Invalid Email',
        description: 'Please enter a valid email address.',
        variant: 'destructive',
      });
      return;
    }

    subscribeMutation.mutate(email);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-in zoom-in-95 duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          data-testid="button-close-modal"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center text-center mb-6">
          <div className="bg-blue-100 dark:bg-blue-900/30 rounded-full p-4 mb-4">
            <Bell className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Stay Updated!
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Subscribe to get the latest digital marketing tips, case studies, and exclusive offers.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="pl-10"
              data-testid="input-subscription-email"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={subscribeMutation.isPending}
            data-testid="button-subscribe"
          >
            {subscribeMutation.isPending ? 'Subscribing...' : 'Subscribe Now'}
          </Button>

          <button
            type="button"
            onClick={handleClose}
            className="w-full text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 transition-colors"
            data-testid="button-maybe-later"
          >
            Maybe later
          </button>
        </form>
      </div>
    </div>
  );
}
