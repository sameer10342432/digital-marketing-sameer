import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Heart, CheckCircle, ArrowRight, Users, TrendingUp, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingNonprofits() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing for Nonprofits - Amplify Your Mission & Impact',
      'Cost-effective digital marketing for nonprofit organizations. Donor acquisition, volunteer recruitment, awareness campaigns, and fundraising strategies that maximize impact on limited budgets.'
    );
  }, []);

  const features = [
    'Donor acquisition campaigns',
    'Google Ad Grants management ($10k/month free)',
    'Social media for cause awareness',
    'Email fundraising campaigns',
    'Volunteer recruitment strategies',
    'SEO for nonprofit visibility',
    'Content storytelling and impact reports',
    'Donation page optimization',
  ];

  const process = [
    {
      step: '01',
      title: 'Mission Assessment',
      description: 'Understand your cause, goals, and target audience.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create cost-effective marketing plan for impact.',
    },
    {
      step: '03',
      title: 'Google Grants Setup',
      description: 'Apply for and manage $10k monthly Google Ad Grants.',
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Execute awareness and fundraising campaigns.',
    },
    {
      step: '05',
      title: 'Community Building',
      description: 'Grow engaged supporter community.',
    },
    {
      step: '06',
      title: 'Impact Tracking',
      description: 'Measure and communicate results to stakeholders.',
    },
  ];

  const results = [
    { metric: '+420%', label: 'Donor Growth' },
    { metric: '$10k', label: 'Free Google Ads/mo' },
    { metric: '3.5x', label: 'More Donations' },
    { metric: '250%', label: 'Volunteer Signups' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Digital Marketing for Nonprofits
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Amplify your mission and maximize impact with budget-friendly marketing strategies
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Make Every Dollar Count
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Nonprofit marketing requires maximizing impact on limited budgets. Our specialized strategies help you reach more supporters, acquire donors, recruit volunteers, and increase fundraising—all while making every marketing dollar count.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From leveraging free Google Ad Grants to optimizing donation pages and building engaged communities, we help nonprofits amplify their mission and drive meaningful impact through strategic digital marketing.
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
                  Our Nonprofit Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Budget-friendly strategies to grow your impact and reach
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
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Build Community</h3>
                <p className="text-muted-foreground">
                  Engage supporters and build loyal donor community
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Increase Donations</h3>
                <p className="text-muted-foreground">
                  Optimize fundraising campaigns for maximum impact
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expand Reach</h3>
                <p className="text-muted-foreground">
                  Amplify your message to reach more supporters
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital Marketing for Nonprofits" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Amplify Your Mission?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a cost-effective marketing strategy that maximizes your nonprofit's impact and reach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-nonprofit-contact">
                      Get Marketing Strategy
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
