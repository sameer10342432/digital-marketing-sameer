import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Users, CheckCircle, ArrowRight, TrendingUp, DollarSign, RefreshCcw } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function MembershipSiteMarketing() {
  useEffect(() => {
    setPageMeta(
      'Membership Site Marketing - Build Recurring Revenue Streams',
      'Marketing strategies for membership sites and subscription businesses. Member acquisition, retention strategies, and growth tactics to build sustainable recurring revenue.'
    );
  }, []);

  const features = [
    'Member acquisition campaigns',
    'Retention and engagement strategies',
    'Churn reduction tactics',
    'Email nurture sequences',
    'Content marketing for members',
    'Community building strategies',
    'Pricing and offer optimization',
    'Lifetime value maximization',
  ];

  const process = [
    {
      step: '01',
      title: 'Membership Assessment',
      description: 'Analyze membership value and target audience.',
    },
    {
      step: '02',
      title: 'Acquisition Strategy',
      description: 'Build member acquisition funnel.',
    },
    {
      step: '03',
      title: 'Onboarding Setup',
      description: 'Create engaging new member experience.',
    },
    {
      step: '04',
      title: 'Retention System',
      description: 'Build automated engagement and retention.',
    },
    {
      step: '05',
      title: 'Community Growth',
      description: 'Foster active, engaged member community.',
    },
    {
      step: '06',
      title: 'Scale Revenue',
      description: 'Optimize pricing and maximize MRR growth.',
    },
  ];

  const results = [
    { metric: '+480%', label: 'Member Growth' },
    { metric: '92%', label: 'Retention Rate' },
    { metric: '$45k', label: 'Monthly Recurring Revenue' },
    { metric: '18mo', label: 'Avg. LTV' },
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
              Membership Site Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build and scale recurring revenue through membership growth and retention
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Build Predictable Recurring Revenue
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Membership sites offer sustainable recurring revenue, but success requires both acquiring new members and keeping them engaged. Our specialized strategies help you grow membership, reduce churn, and maximize lifetime value.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From acquisition funnels to retention campaigns and community building, we provide complete marketing solutions to turn your membership into a thriving, profitable subscription business.
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
                  Our Membership Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to building and scaling membership revenue
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
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Grow Members</h3>
                <p className="text-muted-foreground">
                  Attract and convert qualified members consistently
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <RefreshCcw className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Reduce Churn</h3>
                <p className="text-muted-foreground">
                  Keep members engaged and subscribed longer
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Maximize MRR</h3>
                <p className="text-muted-foreground">
                  Build predictable, scalable recurring revenue
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Membership Site Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Scale Your Membership?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a marketing strategy that grows your membership and builds sustainable recurring revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-membership-contact">
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
