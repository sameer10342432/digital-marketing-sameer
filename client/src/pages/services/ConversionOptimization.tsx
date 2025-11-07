import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Target, CheckCircle, ArrowRight, LineChart, Users, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function ConversionOptimization() {
  useEffect(() => {
    setPageMeta(
      'Conversion Rate Optimization Services - CRO That Increases Revenue',
      'Expert conversion rate optimization to turn more visitors into customers. A/B testing, user experience analysis, funnel optimization, and data-driven improvements. Increase revenue without spending more on ads.'
    );
  }, []);

  const features = [
    'Comprehensive conversion audit and analysis',
    'User behavior tracking and heatmap analysis',
    'A/B and multivariate testing',
    'Landing page optimization',
    'Checkout and form optimization',
    'User experience (UX) improvements',
    'Mobile conversion optimization',
    'Continuous testing and iteration',
  ];

  const process = [
    {
      step: '01',
      title: 'Data Analysis',
      description: 'Deep dive into analytics to identify conversion bottlenecks and opportunities.',
    },
    {
      step: '02',
      title: 'Research & Testing',
      description: 'Conduct user research, surveys, and behavior analysis to understand barriers.',
    },
    {
      step: '03',
      title: 'Hypothesis Development',
      description: 'Create data-backed hypotheses for improvements based on insights.',
    },
    {
      step: '04',
      title: 'Test Implementation',
      description: 'Design and launch A/B tests to validate improvement hypotheses.',
    },
    {
      step: '05',
      title: 'Results Analysis',
      description: 'Analyze test results and implement winning variations.',
    },
    {
      step: '06',
      title: 'Continuous Optimization',
      description: 'Ongoing testing and refinement for sustained conversion growth.',
    },
  ];

  const results = [
    { metric: '180%', label: 'Avg. Conversion Lift' },
    { metric: '45%', label: 'Revenue Increase' },
    { metric: '2.5x', label: 'Better ROI' },
    { metric: '60%', label: 'Lower CAC' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Conversion Rate Optimization
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Turn more visitors into customers and maximize revenue from existing traffic
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why CRO Matters for Growth
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Most businesses focus on driving more traffic, but converting existing traffic is often more cost-effective. Even a 1% conversion rate improvement can significantly impact revenue.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My data-driven CRO approach combines analytics, user research, and systematic testing to identify and remove conversion barriers, resulting in more customers without increasing ad spend.
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
                  My CRO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A systematic, data-driven approach to increasing conversions and revenue
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
                <LineChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
                <p className="text-muted-foreground">
                  Every change is backed by data and validated through rigorous testing
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">User-Focused</h3>
                <p className="text-muted-foreground">
                  Understand user behavior and remove friction from the customer journey
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Results</h3>
                <p className="text-muted-foreground">
                  See measurable improvements in conversions within the first 30-60 days
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Conversion Rate Optimization" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Increase Your Revenue?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's identify conversion opportunities and turn more visitors into paying customers.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-cro-contact">
                      Get Free CRO Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-cro-portfolio"
                    >
                      View Case Studies
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
