import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { DollarSign, CheckCircle, ArrowRight, BarChart, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingROI() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing ROI - Maximize Returns on Your Marketing Investment',
      'Increase your digital marketing ROI with data-driven strategies and performance optimization. Track, measure, and improve returns across all marketing channels for maximum profitability.'
    );
  }, []);

  const features = [
    'Comprehensive ROI tracking and attribution',
    'Marketing analytics setup and optimization',
    'Conversion funnel analysis',
    'Customer lifetime value optimization',
    'Marketing budget allocation strategy',
    'Multi-channel attribution modeling',
    'Performance dashboards and reporting',
    'Continuous optimization recommendations',
  ];

  const process = [
    {
      step: '01',
      title: 'Current State Analysis',
      description: 'Audit existing marketing efforts and calculate current ROI.',
    },
    {
      step: '02',
      title: 'Tracking Setup',
      description: 'Implement comprehensive tracking across all channels.',
    },
    {
      step: '03',
      title: 'Attribution Modeling',
      description: 'Build attribution model to track customer journeys.',
    },
    {
      step: '04',
      title: 'Optimization Strategy',
      description: 'Identify opportunities to improve marketing efficiency.',
    },
    {
      step: '05',
      title: 'Implementation',
      description: 'Execute data-driven improvements across channels.',
    },
    {
      step: '06',
      title: 'Ongoing Monitoring',
      description: 'Continuously track, test, and optimize for better ROI.',
    },
  ];

  const results = [
    { metric: '+175%', label: 'Avg. ROI Increase' },
    { metric: '35%', label: 'Lower CAC' },
    { metric: '2.8x', label: 'Better ROAS' },
    { metric: '60%', label: 'More Conversions' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Digital Marketing ROI
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Maximize returns on every marketing dollar with data-driven optimization
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Marketing Spend Into Profit
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your marketing budget should drive measurable business results. We help you track, measure, and optimize every aspect of your digital marketing to maximize ROI and ensure every dollar works harder for your business.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Through comprehensive analytics, attribution modeling, and continuous optimization, we identify what's working, eliminate waste, and double down on high-performing strategies that drive profitable growth.
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
                  Our ROI Optimization Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Data-driven approach to maximizing marketing returns
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
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Full Visibility</h3>
                <p className="text-muted-foreground">
                  Track every marketing dollar and its impact on revenue
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Smarter Spending</h3>
                <p className="text-muted-foreground">
                  Allocate budget to channels and tactics that deliver results
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Continuous Growth</h3>
                <p className="text-muted-foreground">
                  Ongoing optimization that compounds ROI over time
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital Marketing ROI" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Maximize Your Marketing ROI?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's build a data-driven strategy that turns your marketing investment into measurable profit.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-roi-contact">
                      Get ROI Analysis
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
