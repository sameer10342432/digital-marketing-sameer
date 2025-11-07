import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { TrendingUp, CheckCircle, ArrowRight, Target, BarChart, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SalesFunnelDesign() {
  useEffect(() => {
    setPageMeta(
      'Sales Funnel Design - Convert More Leads Into Customers',
      'Professional sales funnel design and optimization services. Create high-converting funnels that guide prospects through your sales process and maximize customer acquisition.'
    );
  }, []);

  const features = [
    'Complete funnel strategy and mapping',
    'Landing page design and optimization',
    'Email sequence development',
    'Lead nurturing automation',
    'Conversion optimization',
    'A/B testing and experimentation',
    'CRM integration and setup',
    'Performance tracking and analytics',
  ];

  const process = [
    {
      step: '01',
      title: 'Funnel Strategy',
      description: 'Map customer journey and conversion path.',
    },
    {
      step: '02',
      title: 'Page Design',
      description: 'Create high-converting landing pages.',
    },
    {
      step: '03',
      title: 'Email Sequences',
      description: 'Develop nurture and conversion sequences.',
    },
    {
      step: '04',
      title: 'Automation Setup',
      description: 'Configure marketing automation workflows.',
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Test funnel thoroughly before launching.',
    },
    {
      step: '06',
      title: 'Optimize & Scale',
      description: 'Continuously improve conversion rates.',
    },
  ];

  const results = [
    { metric: '+280%', label: 'Conversion Rate' },
    { metric: '58%', label: 'Lead-to-Customer' },
    { metric: '3.5x', label: 'Revenue Growth' },
    { metric: '42%', label: 'Lower CAC' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Sales Funnel Design
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build high-converting sales funnels that guide prospects to purchase
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Prospects Into Customers
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A well-designed sales funnel is the difference between sporadic sales and predictable revenue growth. Our sales funnel design services create optimized conversion paths that guide prospects seamlessly from awareness to purchase.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From landing pages and lead magnets to nurture sequences and conversion optimization, we build complete sales funnels that convert more leads into paying customers while reducing acquisition costs.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-muted/30 rounded-lg" data-testid={`stat-${index}`}>
                      <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                  <ul className="space-y-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Funnel Design Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to building funnels that convert
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, index) => (
                  <Card key={index} className="p-6" data-testid={`process-${index}`}>
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Conversions</h3>
                <p className="text-muted-foreground">
                  Convert more leads without increasing ad spend
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
                <p className="text-muted-foreground">
                  Every decision backed by analytics and testing
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automated Growth</h3>
                <p className="text-muted-foreground">
                  Sales funnels that work 24/7 without manual intervention
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Sales Funnel Design" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your Sales Funnel?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's design a high-converting sales funnel that turns prospects into customers predictably.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-funnel-contact">
                      Get Funnel Strategy
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
