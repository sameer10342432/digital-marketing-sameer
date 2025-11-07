import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, ShoppingBag, Heart, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function B2CMarketingServices() {
  useEffect(() => {
    setPageMeta(
      'B2C Marketing Services - Drive Consumer Sales & Brand Loyalty',
      'Consumer-focused B2C marketing services to drive sales and build brand loyalty. Social media marketing, influencer partnerships, emotional branding, and conversion optimization for direct-to-consumer businesses.'
    );
  }, []);

  const services = [
    'Social media marketing & advertising',
    'Influencer marketing campaigns',
    'E-commerce optimization',
    'Email marketing & automation',
    'Customer loyalty programs',
    'Retargeting & remarketing',
    'Brand storytelling & content',
    'Conversion rate optimization',
  ];

  const focus = [
    {
      icon: ShoppingBag,
      title: 'Drive Sales',
      description: 'Optimize every touchpoint for maximum conversions',
    },
    {
      icon: Heart,
      title: 'Build Loyalty',
      description: 'Create emotional connections with your customers',
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'Quick-impact campaigns that drive immediate sales',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">B2C Marketing</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <ShoppingBag className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                B2C Marketing Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Connect with consumers and drive sales with emotional marketing
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Consumer Marketing Excellence</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  B2C marketing is all about connecting emotionally with consumers and driving immediate action. 
                  We create campaigns that resonate with your audience and optimize every step of the customer journey.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {focus.map((item, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`focus-${index}`}>
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">B2C Marketing Services</h3>
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
                  <ServiceContactForm serviceName="B2C Marketing Services" />
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
