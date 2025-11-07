import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Users, CheckCircle, ArrowRight, Target, TrendingUp, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function CustomerAcquisitionStrategy() {
  useEffect(() => {
    setPageMeta(
      'Customer Acquisition Strategy - Systematic Approach to Growth',
      'Develop data-driven customer acquisition strategies that scale. Multi-channel approach to attract, convert, and retain ideal customers while optimizing acquisition costs.'
    );
  }, []);

  const features = [
    'Customer persona development and research',
    'Multi-channel acquisition strategy',
    'Customer lifetime value optimization',
    'Acquisition cost (CAC) reduction tactics',
    'Growth marketing experiments',
    'Performance tracking and analytics',
    'Retention and referral programs',
    'Scalable growth playbooks',
  ];

  const process = [
    {
      step: '01',
      title: 'Market Research',
      description: 'Deep dive into your target market and ideal customers.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create comprehensive acquisition roadmap.',
    },
    {
      step: '03',
      title: 'Channel Selection',
      description: 'Identify most effective channels for your business.',
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Execute acquisition campaigns across channels.',
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Test, measure, and refine for better results.',
    },
    {
      step: '06',
      title: 'Scale',
      description: 'Scale winning strategies for sustainable growth.',
    },
  ];

  const results = [
    { metric: '+280%', label: 'Customer Growth' },
    { metric: '45%', label: 'Lower CAC' },
    { metric: '3.5x', label: 'Better LTV' },
    { metric: '92%', label: 'Retention Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Users className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Customer Acquisition Strategy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build systematic, scalable strategies to acquire and retain your ideal customers
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Acquire Customers Profitably
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Sustainable growth requires a systematic approach to customer acquisition. We develop multi-channel strategies that attract your ideal customers, optimize acquisition costs, and maximize customer lifetime value.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From identifying the right channels to optimizing conversion funnels and retention tactics, we create comprehensive acquisition playbooks that scale with your business and deliver predictable, profitable growth.
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
                  Our Acquisition Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Data-driven approach to building scalable customer acquisition
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
                <h3 className="text-xl font-semibold mb-3">Right Customers</h3>
                <p className="text-muted-foreground">
                  Attract ideal customers who convert and retain
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lower CAC</h3>
                <p className="text-muted-foreground">
                  Reduce customer acquisition costs through optimization
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scalable Growth</h3>
                <p className="text-muted-foreground">
                  Build repeatable systems that grow with your business
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Customer Acquisition Strategy" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Scale Customer Acquisition?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's build a comprehensive acquisition strategy that drives predictable, profitable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-acquisition-contact">
                      Get Acquisition Plan
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
