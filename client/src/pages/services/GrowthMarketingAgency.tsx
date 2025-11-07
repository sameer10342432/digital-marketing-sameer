import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Rocket, TrendingUp, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function GrowthMarketingAgency() {
  useEffect(() => {
    setPageMeta(
      'Growth Marketing Agency - Rapid, Sustainable Business Growth',
      'Data-driven growth marketing agency specializing in rapid customer acquisition and retention. Experiment-driven strategies, growth hacking, funnel optimization, and viral marketing for scalable growth.'
    );
  }, []);

  const services = [
    'Growth strategy & planning',
    'Customer acquisition funnels',
    'Viral marketing campaigns',
    'Referral program design',
    'Growth hacking experiments',
    'Product-led growth strategies',
    'Retention & engagement optimization',
    'Data analytics & growth metrics',
  ];

  const approach = [
    {
      icon: Zap,
      title: 'Rapid Experimentation',
      description: 'Test, learn, and scale winning tactics quickly',
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven',
      description: 'Every decision backed by metrics and analytics',
    },
    {
      icon: Rocket,
      title: 'Scalable Systems',
      description: 'Build growth engines that compound over time',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Growth Marketing</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Growth Marketing Agency
              </h1>
              <p className="text-xl text-muted-foreground">
                Accelerate your growth with data-driven experiments and proven tactics
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Fuel Your Business Growth</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Growth marketing goes beyond traditional marketing. We use rapid experimentation, data analysis, 
                  and creative tactics to find and scale the channels that drive sustainable business growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {approach.map((item, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`approach-${index}`}>
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Growth Services</h3>
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
                  <ServiceContactForm serviceName="Growth Marketing Agency" />
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
