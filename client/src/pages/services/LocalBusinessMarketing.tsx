import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Store, CheckCircle, ArrowRight, MapPin, Users, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LocalBusinessMarketing() {
  useEffect(() => {
    setPageMeta(
      'Local Business Marketing - Dominate Your Local Market',
      'Digital marketing for local businesses to attract nearby customers. Local SEO, Google Business optimization, and community-focused strategies that drive foot traffic and local sales.'
    );
  }, []);

  const features = [
    'Local SEO and map pack rankings',
    'Google Business Profile management',
    'Local directory listings and citations',
    'Neighborhood-targeted advertising',
    'Review generation and management',
    'Community engagement strategies',
    'Local content marketing',
    'Performance tracking and reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Local Market Analysis',
      description: 'Study your local market and competition.',
    },
    {
      step: '02',
      title: 'Local SEO Setup',
      description: 'Optimize for local search visibility.',
    },
    {
      step: '03',
      title: 'Citation Building',
      description: 'Build presence on local directories.',
    },
    {
      step: '04',
      title: 'Review Management',
      description: 'Generate and manage customer reviews.',
    },
    {
      step: '05',
      title: 'Community Marketing',
      description: 'Engage with local community online.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Continuously improve local presence.',
    },
  ];

  const results = [
    { metric: '+350%', label: 'Local Traffic' },
    { metric: 'Top 3', label: 'Map Rankings' },
    { metric: '4.6★', label: 'Avg. Rating' },
    { metric: '2.8x', label: 'More Customers' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Store className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Local Business Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Attract more local customers and dominate your neighborhood market
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Own Your Local Market
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Local businesses thrive on neighborhood visibility and community reputation. Our specialized local business marketing services help you dominate local search, attract nearby customers, and build a loyal community following.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From appearing first in Google Maps to managing reviews and building local citations, we provide everything you need to become the go-to business in your area.
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
                  Our Local Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proven strategies to dominate your local market
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
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Visibility</h3>
                <p className="text-muted-foreground">
                  Be found by customers searching in your area
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Foot Traffic</h3>
                <p className="text-muted-foreground">
                  Drive nearby customers to your physical location
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Growth</h3>
                <p className="text-muted-foreground">
                  Build sustainable local customer base
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Local Business Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Dominate Your Local Market?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a local marketing strategy that attracts nearby customers and grows your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-local-contact">
                      Get Local Strategy
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
