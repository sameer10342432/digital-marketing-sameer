import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { MapPin, CheckCircle, ArrowRight, Star, Navigation, Building } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LocalSEO() {
  useEffect(() => {
    setPageMeta(
      'Local SEO Services - Dominate Local Search Results',
      'Professional local SEO services to boost your visibility in local search. Google Business Profile optimization, local citations, review management, and geo-targeted content. Rank higher in Google Maps and local pack.'
    );
  }, []);

  const features = [
    'Google Business Profile optimization',
    'Local keyword research and targeting',
    'NAP citation building and management',
    'Local link building and directory submissions',
    'Review generation and reputation management',
    'Local content strategy and optimization',
    'Google Maps ranking optimization',
    'Competitor analysis and local market insights',
  ];

  const process = [
    {
      step: '01',
      title: 'Local Audit',
      description: 'Comprehensive analysis of your current local search presence and opportunities.',
    },
    {
      step: '02',
      title: 'GBP Optimization',
      description: 'Complete optimization of your Google Business Profile for maximum visibility.',
    },
    {
      step: '03',
      title: 'Citation Building',
      description: 'Create and optimize citations across top local directories and platforms.',
    },
    {
      step: '04',
      title: 'Review Strategy',
      description: 'Implement systems to generate positive reviews and manage reputation.',
    },
    {
      step: '05',
      title: 'Content Creation',
      description: 'Develop geo-targeted content optimized for local search queries.',
    },
    {
      step: '06',
      title: 'Track & Improve',
      description: 'Monitor local rankings and continuously optimize for better results.',
    },
  ];

  const results = [
    { metric: 'Top 3', label: 'Local Pack Rankings' },
    { metric: '300%', label: 'More Local Calls' },
    { metric: '4.8★', label: 'Average Rating' },
    { metric: '5x', label: 'Store Visits' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Local SEO Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Dominate local search results and drive customers to your business
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Local SEO Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  76% of people who search for something nearby visit a business within 24 hours. Local SEO ensures your business appears when customers are actively looking for your services in your area.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My comprehensive local SEO strategies help you dominate the local pack, Google Maps, and geo-targeted search results to drive more foot traffic, calls, and local customers.
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
                  My Local SEO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven system for dominating local search and attracting nearby customers
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
                <Building className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Foot Traffic</h3>
                <p className="text-muted-foreground">
                  Increase store visits and walk-ins from customers searching nearby
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Reviews</h3>
                <p className="text-muted-foreground">
                  Build a strong reputation with more positive reviews from happy customers
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Navigation className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Maps Visibility</h3>
                <p className="text-muted-foreground">
                  Appear at the top of Google Maps when people search in your area
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Local SEO Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Dominate Local Search?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's get your business found by customers in your area who are ready to buy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-local-seo-contact">
                      Get Free Local Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-local-seo-portfolio"
                    >
                      View Success Stories
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
