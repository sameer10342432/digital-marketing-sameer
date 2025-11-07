import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Target, DollarSign, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function PerformanceMarketing() {
  useEffect(() => {
    setPageMeta(
      'Performance Marketing Services - Pay for Results Only',
      'Results-driven performance marketing services where you pay for measurable outcomes. CPA, CPL, and ROAS-optimized campaigns across paid search, social, display, and affiliate channels.'
    );
  }, []);

  const services = [
    'PPC campaign optimization for conversions',
    'Affiliate marketing management',
    'CPA & CPL campaign setup',
    'Conversion rate optimization',
    'Landing page A/B testing',
    'Attribution modeling & tracking',
    'Multi-channel campaign management',
    'Performance analytics & reporting',
  ];

  const metrics = [
    {
      icon: DollarSign,
      title: 'Cost Per Acquisition',
      description: 'Pay only for confirmed customers or leads',
    },
    {
      icon: Target,
      title: 'ROAS Focused',
      description: 'Maximize return on ad spend across channels',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Growth',
      description: 'Scale what works, cut what doesn\'t',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Performance Marketing</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Performance Marketing Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Marketing focused on measurable results and ROI
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Results-Driven Marketing</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Performance marketing means you only pay for results. We optimize every campaign for maximum ROI, 
                  focusing on the metrics that matter most to your business—conversions, leads, and revenue.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {metrics.map((metric, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`metric-${index}`}>
                      <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{metric.title}</h3>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Our Services</h3>
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
                  <ServiceContactForm serviceName="Performance Marketing" />
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
