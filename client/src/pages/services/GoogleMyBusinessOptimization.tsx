import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Star, Image } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function GoogleMyBusinessOptimization() {
  useEffect(() => {
    setPageMeta(
      'Google My Business Optimization - Dominate Local Search Results',
      'Professional Google My Business (GMB) optimization services to improve local search rankings. Complete GMB setup, optimization, posting, review management, and local SEO integration.'
    );
  }, []);

  const services = [
    'Complete GMB profile setup & verification',
    'Business information optimization',
    'Category & attribute optimization',
    'Photo & video optimization',
    'Google Posts management',
    'Review generation & management',
    'Q&A monitoring & responses',
    'GMB insights & reporting',
  ];

  const benefits = [
    {
      icon: MapPin,
      title: 'Local Visibility',
      description: 'Appear in Google Maps and local pack results',
    },
    {
      icon: Star,
      title: 'Build Trust',
      description: 'Showcase reviews and build credibility',
    },
    {
      icon: Image,
      title: 'Engage Customers',
      description: 'Share updates, offers, and visual content',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Google My Business</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Google My Business Optimization
              </h1>
              <p className="text-xl text-muted-foreground">
                Dominate local search with a fully optimized Google Business Profile
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Maximize Your Local Presence</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Your Google My Business profile is often the first impression potential customers have of your business. 
                  We optimize every aspect of your profile to improve visibility, build trust, and drive more local customers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`benefit-${index}`}>
                      <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">What We Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`service-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="Google My Business Optimization" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
