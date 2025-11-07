import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShoppingCart, Target, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function PPCForEcommerce() {
  useEffect(() => {
    setPageMeta(
      'PPC for E-commerce - Drive Sales with Targeted Shopping Ads',
      'Specialized PPC management for e-commerce businesses. Google Shopping ads, dynamic remarketing, product feed optimization, and conversion tracking to maximize ROAS and drive profitable sales.'
    );
  }, []);

  const features = [
    'Google Shopping campaigns',
    'Dynamic remarketing ads',
    'Product feed optimization',
    'Shopping ad bid management',
    'Performance Max campaigns',
    'Amazon PPC management',
    'Facebook & Instagram shop ads',
    'Conversion tracking & attribution',
  ];

  const platforms = [
    { name: 'Google Shopping', description: 'Product listings and shopping ads' },
    { name: 'Facebook & Instagram', description: 'Dynamic catalog ads and shop features' },
    { name: 'Amazon Advertising', description: 'Sponsored products and display ads' },
    { name: 'Pinterest Shopping', description: 'Product pins and shopping ads' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">E-commerce PPC</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                PPC for E-commerce
              </h1>
              <p className="text-xl text-muted-foreground">
                Drive profitable sales with data-driven e-commerce PPC campaigns
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">E-commerce PPC That Delivers ROI</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our e-commerce PPC services are designed to maximize your return on ad spend. We manage shopping campaigns, 
                  optimize product feeds, and use advanced strategies to drive qualified traffic that converts into sales.
                </p>

                <h3 className="text-2xl font-bold mb-6">Advertising Platforms</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {platforms.map((platform, index) => (
                    <Card key={index} className="p-6" data-testid={`platform-${index}`}>
                      <h4 className="font-semibold mb-2">{platform.name}</h4>
                      <p className="text-sm text-muted-foreground">{platform.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
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
                  <ServiceContactForm serviceName="PPC for E-commerce" />
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
