import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { TrendingUp, CheckCircle, ArrowRight, Shield, Users, BarChart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function FintechMarketingAgency() {
  useEffect(() => {
    setPageMeta(
      'Fintech Marketing Agency - Grow Your Financial Technology Brand',
      'Specialized digital marketing for fintech companies. User acquisition, brand awareness, and growth strategies for financial technology startups and established fintech platforms.'
    );
  }, []);

  const features = [
    'Fintech brand positioning and messaging',
    'User acquisition and onboarding optimization',
    'Compliance-friendly content marketing',
    'SaaS marketing strategies',
    'App store optimization (ASO)',
    'Thought leadership development',
    'B2B and B2C fintech campaigns',
    'Performance tracking and analytics',
  ];

  const process = [
    {
      step: '01',
      title: 'Market Positioning',
      description: 'Define your unique value in the competitive fintech space.',
    },
    {
      step: '02',
      title: 'Growth Strategy',
      description: 'Develop comprehensive user acquisition plan.',
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Build trust through educational, compliant content.',
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Execute multi-channel acquisition campaigns.',
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuously improve conversion and retention.',
    },
    {
      step: '06',
      title: 'Scale',
      description: 'Scale successful strategies for rapid growth.',
    },
  ];

  const results = [
    { metric: '+380%', label: 'User Growth' },
    { metric: '55%', label: 'Lower CAC' },
    { metric: '4.2x', label: 'Better LTV' },
    { metric: '88%', label: 'User Retention' },
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
              Fintech Marketing Agency
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Drive user acquisition and scale your financial technology platform
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Scale Your Fintech Platform
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Fintech marketing requires a unique blend of technical understanding, regulatory awareness, and growth expertise. We help fintech companies build trust, acquire users, and scale efficiently in a competitive market.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From positioning your brand to optimizing user onboarding and retention, we create comprehensive marketing strategies that drive sustainable growth while maintaining compliance and building credibility in the financial services space.
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
                  Our Fintech Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Growth strategies built for financial technology companies
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
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Build Trust</h3>
                <p className="text-muted-foreground">
                  Establish credibility in the financial services market
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Acquire Users</h3>
                <p className="text-muted-foreground">
                  Drive qualified user signups and activations
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scale Efficiently</h3>
                <p className="text-muted-foreground">
                  Optimize CAC and maximize user lifetime value
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Fintech Marketing Agency" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Scale Your Fintech?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a growth marketing strategy that drives user acquisition and scales your fintech platform.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-fintech-contact">
                      Get Growth Strategy
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
