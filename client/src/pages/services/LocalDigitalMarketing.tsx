import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, MapPin, Search, Star } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LocalDigitalMarketing() {
  useEffect(() => {
    setPageMeta(
      'Local Digital Marketing - Dominate Your Local Market Online',
      'Local digital marketing services to help you dominate your geographic area. Local SEO, Google My Business optimization, local PPC, and reputation management to attract nearby customers.'
    );
  }, []);

  const features = [
    'Local SEO optimization',
    'Google My Business management',
    'Local citation building',
    'Location-based PPC campaigns',
    'Local content marketing',
    'Online review management',
    'Local social media marketing',
    'Geo-targeted advertising',
  ];

  const process = [
    {
      icon: MapPin,
      title: 'Local Presence',
      description: 'Optimize your listings and citations across all local directories',
    },
    {
      icon: Search,
      title: 'Local Rankings',
      description: 'Dominate local search results for your target keywords',
    },
    {
      icon: Star,
      title: 'Reputation',
      description: 'Build and manage your online reputation with reviews',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Local Marketing</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Local Digital Marketing
              </h1>
              <p className="text-xl text-muted-foreground">
                Attract more local customers with targeted digital marketing strategies
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Own Your Local Market</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our local digital marketing services help businesses dominate their geographic area. We optimize your 
                  online presence to attract customers who are actively searching for your services nearby.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {process.map((item, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`process-${index}`}>
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Our Local Marketing Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="Local Digital Marketing" />
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
