import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Zap, CheckCircle, ArrowRight, Clock, Users, BarChart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function MarketingAutomation() {
  useEffect(() => {
    setPageMeta(
      'Marketing Automation Services - Scale Your Marketing Efficiently',
      'Automate and scale your marketing with intelligent automation workflows. Email sequences, lead nurturing, and customer journeys that convert more leads while saving time and resources.'
    );
  }, []);

  const features = [
    'Email marketing automation workflows',
    'Lead nurturing and scoring systems',
    'Customer segmentation and personalization',
    'Marketing CRM integration',
    'Behavioral trigger campaigns',
    'Drip campaign setup and optimization',
    'Abandoned cart recovery automation',
    'Performance tracking and analytics',
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy Planning',
      description: 'Map customer journey and identify automation opportunities.',
    },
    {
      step: '02',
      title: 'Platform Setup',
      description: 'Configure marketing automation platform and integrations.',
    },
    {
      step: '03',
      title: 'Workflow Creation',
      description: 'Build automated campaigns and customer journeys.',
    },
    {
      step: '04',
      title: 'Content Development',
      description: 'Create email templates and marketing content.',
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Test workflows thoroughly before launching.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Monitor performance and optimize for better results.',
    },
  ];

  const results = [
    { metric: '75%', label: 'Time Saved' },
    { metric: '+250%', label: 'Lead Conversion' },
    { metric: '24/7', label: 'Marketing Works' },
    { metric: '5x', label: 'Better ROI' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Marketing Automation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Scale your marketing and nurture leads automatically while you focus on growth
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Work Smarter, Not Harder
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Marketing automation allows you to deliver personalized experiences at scale. Nurture leads, engage customers, and drive conversions automatically—without manual intervention. Your marketing works 24/7 while you sleep.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From welcome sequences to abandoned cart recovery and re-engagement campaigns, we build intelligent automation workflows that guide prospects through your sales funnel and turn customers into loyal advocates.
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
                  Our Automation Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to building marketing automation that converts
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
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Save Time</h3>
                <p className="text-muted-foreground">
                  Automate repetitive tasks and free up your team's time
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalization at Scale</h3>
                <p className="text-muted-foreground">
                  Deliver personalized experiences to thousands of prospects
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Conversions</h3>
                <p className="text-muted-foreground">
                  Guide leads through optimized journeys that drive action
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Marketing Automation" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Automate Your Marketing?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's build intelligent automation workflows that nurture leads and drive conversions 24/7.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-automation-contact">
                      Get Automation Strategy
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
