import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Home, CheckCircle, ArrowRight, MapPin, Users, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingRealEstate() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing for Real Estate - Generate More Property Leads',
      'Specialized digital marketing for real estate agents and agencies. Local SEO, property listing optimization, lead generation campaigns, and virtual tour marketing to sell more properties.'
    );
  }, []);

  const features = [
    'Local SEO for real estate agents',
    'Property listing optimization',
    'Google Business Profile management',
    'Facebook and Instagram property ads',
    'Virtual tour and video marketing',
    'Lead generation landing pages',
    'Email nurture campaigns for buyers/sellers',
    'Real estate market reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Market Analysis',
      description: 'Analyze local real estate market and competition.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create customized marketing plan for your market.',
    },
    {
      step: '03',
      title: 'Local SEO Setup',
      description: 'Optimize for local search and map rankings.',
    },
    {
      step: '04',
      title: 'Ad Campaigns',
      description: 'Launch targeted ads for property listings.',
    },
    {
      step: '05',
      title: 'Lead Nurturing',
      description: 'Set up automated follow-up systems.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Refine campaigns for maximum lead quality.',
    },
  ];

  const results = [
    { metric: '+320%', label: 'Lead Increase' },
    { metric: '65%', label: 'Qualified Leads' },
    { metric: '3.5x', label: 'Better ROI' },
    { metric: '2x', label: 'Faster Sales' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Home className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Digital Marketing for Real Estate
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Generate more qualified leads and sell properties faster with targeted marketing
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Dominate Your Local Real Estate Market
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  In real estate, visibility is everything. Our specialized digital marketing strategies help you dominate local search results, showcase properties effectively, and generate a consistent flow of qualified buyer and seller leads.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From local SEO and Google Ads to social media property showcases and automated lead nurturing, we provide complete digital marketing solutions tailored specifically for real estate professionals.
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
                  Our Real Estate Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proven strategies to generate leads and close more deals
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
                <h3 className="text-xl font-semibold mb-3">Local Dominance</h3>
                <p className="text-muted-foreground">
                  Appear first when buyers search for homes in your area
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Leads</h3>
                <p className="text-muted-foreground">
                  Attract motivated buyers and sellers ready to transact
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Closings</h3>
                <p className="text-muted-foreground">
                  Convert more leads into successful property transactions
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital Marketing for Real Estate" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Generate More Real Estate Leads?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a customized marketing strategy that drives consistent, qualified leads for your real estate business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-realestate-contact">
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
