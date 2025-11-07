import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { TrendingUp, CheckCircle, ArrowRight, Target, BarChart, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function FunnelOptimization() {
  useEffect(() => {
    setPageMeta(
      'Funnel Optimization - Convert More Visitors Into Customers',
      'Optimize your sales funnel to convert more leads into customers. Data-driven analysis, A/B testing, and systematic improvements to every stage of your customer journey.'
    );
  }, []);

  const features = [
    'Complete funnel analysis and mapping',
    'Conversion bottleneck identification',
    'A/B testing and experimentation',
    'Landing page optimization',
    'Checkout flow improvements',
    'Email sequence optimization',
    'User experience enhancements',
    'Performance tracking and reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Funnel Audit',
      description: 'Comprehensive analysis of your current conversion funnel.',
    },
    {
      step: '02',
      title: 'Data Analysis',
      description: 'Identify drop-off points and optimization opportunities.',
    },
    {
      step: '03',
      title: 'Hypothesis Development',
      description: 'Create testable hypotheses for improving conversions.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute improvements and set up A/B tests.',
    },
    {
      step: '05',
      title: 'Testing & Iteration',
      description: 'Run experiments and analyze results.',
    },
    {
      step: '06',
      title: 'Continuous Optimization',
      description: 'Ongoing testing and refinement for better results.',
    },
  ];

  const results = [
    { metric: '+185%', label: 'Conversion Increase' },
    { metric: '40%', label: 'Lower Bounce Rate' },
    { metric: '2.5x', label: 'Better ROI' },
    { metric: '65%', label: 'More Revenue' },
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
              Funnel Optimization
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Turn more visitors into customers with data-driven funnel optimization
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Maximize Every Step of the Journey
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your sales funnel is where marketing meets revenue. Every improvement compounds—reducing friction at each stage dramatically increases overall conversion rates. We analyze, test, and optimize every touchpoint to maximize your results.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Through systematic testing and data-driven optimization, we identify what's holding back conversions and implement proven improvements that drive measurable revenue growth—without needing more traffic.
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
                  Our Optimization Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Systematic approach to improving conversion at every funnel stage
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
                  Convert more visitors without increasing traffic costs
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
                <h3 className="text-xl font-semibold mb-3">Compounding Results</h3>
                <p className="text-muted-foreground">
                  Small improvements at each stage create massive impact
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Funnel Optimization" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Optimize Your Funnel?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's analyze your conversion funnel and implement improvements that drive measurable revenue growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-funnel-contact">
                      Get Funnel Audit
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
