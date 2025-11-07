import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { Mail } from 'lucide-react';
import { useMutation } from '@tanstack/react-query';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { insertContactSchema, type InsertContact } from '@shared/schema';
import { z } from 'zod';

interface ServiceContactFormProps {
  serviceName: string;
}

const formSchema = insertContactSchema.extend({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type FormData = z.infer<typeof formSchema>;

export default function ServiceContactForm({ serviceName }: ServiceContactFormProps) {
  const { toast } = useToast();
  
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      service: serviceName,
      message: '',
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContact) => {
      const res = await apiRequest('POST', '/api/contact', data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/contacts'] });
      toast({
        title: 'Message Sent!',
        description: "Thank you for your inquiry. I'll get back to you within 24 hours.",
      });
      form.reset({
        name: '',
        email: '',
        service: serviceName,
        message: '',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again.',
        variant: 'destructive',
      });
    },
  });

  const handleSubmit = (data: FormData) => {
    contactMutation.mutate(data);
  };

  return (
    <Card className="p-8">
      <div className="flex items-center gap-3 mb-6">
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
          <Mail className="h-6 w-6 text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-bold">Get Started Today</h3>
          <p className="text-muted-foreground">Let's discuss your project</p>
        </div>
      </div>
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4" data-testid="form-service-contact">
        <div>
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            {...form.register('name')}
            className="mt-2"
            data-testid="input-service-name"
          />
          {form.formState.errors.name && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.name.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">Email *</Label>
          <Input
            id="email"
            type="email"
            {...form.register('email')}
            className="mt-2"
            data-testid="input-service-email"
          />
          {form.formState.errors.email && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="message">Message *</Label>
          <Textarea
            id="message"
            {...form.register('message')}
            rows={4}
            placeholder="Tell me about your project and goals..."
            className="mt-2"
            data-testid="textarea-service-message"
          />
          {form.formState.errors.message && (
            <p className="text-sm text-destructive mt-1">{form.formState.errors.message.message}</p>
          )}
        </div>
        <Button
          type="submit"
          size="lg"
          className="w-full"
          data-testid="button-submit-service-contact"
          disabled={contactMutation.isPending}
        >
          {contactMutation.isPending ? 'Sending...' : 'Send Inquiry'}
        </Button>
      </form>
    </Card>
  );
}
