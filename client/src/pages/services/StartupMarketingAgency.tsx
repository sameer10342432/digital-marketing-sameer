import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Rocket, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function StartupMarketingAgency() {
  useEffect(() => {
    setPageMeta(
      'Startup Marketing Agency - Launch & Scale Your Startup',
      'Marketing agency specialized in startups and early-stage companies. Go-to-market strategies, product launches, growth hacking, and customer acquisition on lean budgets. Help your startup gain traction.'
    );
  }, []);

  const services = [
    'Go-to-market strategy',
    'Product launch campaigns',
    'Lean startup marketing',
    'Growth hacking & experiments',
    'Investor & PR outreach',
    'Product-market fit validation',
    'Early adopter acquisition',
    'Startup branding & positioning',
  ];

  const advantages = [
    {
      icon: Rocket,
      title: 'Startup DNA',
      description: 'We understand the unique challenges startups face',
    },
    {
      icon: Target,
      title: 'Lean Approach',
      description: 'Maximum results with minimal budget',
    },
    {
      icon: TrendingUp,
      title: 'Growth Focus',
      description: 'Strategies designed for rapid customer acquisition',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Startup Marketing</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Startup Marketing Agency
              </h1>
              <p className="text-xl text-muted-foreground">
                Launch, grow, and scale your startup with proven marketing strategies
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Marketing Built for Startups</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Startups need different marketing than established businesses. We specialize in helping early-stage 
                  companies find product-market fit, acquire first customers, and scale on limited budgets.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {advantages.map((advantage, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`advantage-${index}`}>
                      <advantage.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{advantage.title}</h3>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Startup Marketing Services</h3>
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
                  <ServiceContactForm serviceName="Startup Marketing Agency" />
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
