import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Users, CheckCircle, ArrowRight, TrendingUp, Target, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingCoaches() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing for Coaches - Attract More High-Value Clients',
      'Specialized digital marketing for coaches and consultants. Build your personal brand, attract ideal clients, and fill your coaching practice with targeted marketing strategies.'
    );
  }, []);

  const features = [
    'Personal brand development and positioning',
    'LinkedIn thought leadership strategy',
    'Lead generation funnel creation',
    'Content marketing and blogging',
    'Email nurture sequence setup',
    'Social media content strategy',
    'Webinar and workshop promotion',
    'Client testimonial management',
  ];

  const process = [
    {
      step: '01',
      title: 'Niche Positioning',
      description: 'Define your unique coaching value proposition.',
    },
    {
      step: '02',
      title: 'Brand Strategy',
      description: 'Build compelling personal brand and messaging.',
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Create valuable content that attracts ideal clients.',
    },
    {
      step: '04',
      title: 'Lead Magnet',
      description: 'Develop irresistible lead magnets for client capture.',
    },
    {
      step: '05',
      title: 'Nurture System',
      description: 'Build automated email sequences that convert.',
    },
    {
      step: '06',
      title: 'Scale & Optimize',
      description: 'Continuously refine and scale client acquisition.',
    },
  ];

  const results = [
    { metric: '+420%', label: 'Lead Growth' },
    { metric: '65%', label: 'Conversion Rate' },
    { metric: '$8k+', label: 'Avg. Client Value' },
    { metric: '3.5x', label: 'Business Growth' },
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
              Digital Marketing for Coaches
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build your coaching brand and attract high-value clients consistently
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Fill Your Coaching Practice
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a coach, your success depends on consistently attracting the right clients. Our specialized marketing strategies help you build a strong personal brand, establish thought leadership, and create systems that generate qualified leads on autopilot.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From content marketing and LinkedIn positioning to lead magnets and automated nurture sequences, we provide complete marketing solutions tailored for coaching businesses.
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
                  Our Coach Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to building your coaching brand and client base
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
                <h3 className="text-xl font-semibold mb-3">Ideal Clients</h3>
                <p className="text-muted-foreground">
                  Attract clients who value your expertise and can afford it
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Thought Leadership</h3>
                <p className="text-muted-foreground">
                  Establish authority and credibility in your niche
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Predictable Revenue</h3>
                <p className="text-muted-foreground">
                  Build systems for consistent client acquisition
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital Marketing for Coaches" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Coaching Practice?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a marketing strategy that attracts high-value clients and builds your coaching brand.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-coach-contact">
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
