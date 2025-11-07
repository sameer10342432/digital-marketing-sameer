import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Facebook, CheckCircle, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function FacebookAdvertising() {
  useEffect(() => {
    setPageMeta(
      'Facebook Advertising Services - Meta Ads Campaign Management',
      'Professional Facebook and Instagram advertising services. Strategic ad campaigns, audience targeting, creative optimization, and performance tracking. Drive engagement and conversions with Meta ads.'
    );
  }, []);

  const features = [
    'Facebook & Instagram campaign strategy',
    'Advanced audience research and targeting',
    'Engaging ad creative design and copywriting',
    'A/B testing for ads and audiences',
    'Facebook Pixel setup and conversion tracking',
    'Retargeting campaigns for website visitors',
    'Lead generation and messenger campaigns',
    'Detailed performance reporting and insights',
  ];

  const process = [
    {
      step: '01',
      title: 'Audience Research',
      description: 'Deep analysis of your target audience demographics, interests, and behaviors.',
    },
    {
      step: '02',
      title: 'Campaign Strategy',
      description: 'Develop a comprehensive advertising strategy aligned with your goals.',
    },
    {
      step: '03',
      title: 'Creative Development',
      description: 'Create compelling ad visuals and copy that resonate with your audience.',
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Set up tracking, audiences, and launch campaigns with optimal settings.',
    },
    {
      step: '05',
      title: 'Testing & Optimization',
      description: 'Continuously test and refine campaigns for better performance.',
    },
    {
      step: '06',
      title: 'Scale Success',
      description: 'Scale winning campaigns and expand reach profitably.',
    },
  ];

  const results = [
    { metric: '5x', label: 'Average ROAS' },
    { metric: '2.5M+', label: 'People Reached' },
    { metric: '35%', label: 'Lower CPA' },
    { metric: '3x', label: 'More Leads' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Facebook className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Facebook Advertising
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reach billions of users with targeted Facebook and Instagram ad campaigns
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Facebook Advertising Works
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Facebook and Instagram offer unparalleled targeting capabilities, allowing you to reach your ideal customers based on demographics, interests, behaviors, and more.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My strategic approach combines data-driven audience targeting, compelling creative, and continuous optimization to drive engagement, leads, and sales at scale.
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
                  My Facebook Ads Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to creating high-performing Meta advertising campaigns
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
                <h3 className="text-xl font-semibold mb-3">Massive Reach</h3>
                <p className="text-muted-foreground">
                  Access billions of active users on Facebook and Instagram platforms
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precise Targeting</h3>
                <p className="text-muted-foreground">
                  Advanced targeting options to reach your exact ideal customer profile
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  Data-backed strategies that deliver consistent ROI and business growth
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Facebook Advertising" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Scale Your Business with Facebook Ads?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a Facebook advertising strategy that drives real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-facebook-contact">
                      Get Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-facebook-portfolio"
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
