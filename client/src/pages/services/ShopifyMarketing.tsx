import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ShoppingBag, CheckCircle, ArrowRight, TrendingUp, Users, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function ShopifyMarketing() {
  useEffect(() => {
    setPageMeta(
      'Shopify Marketing - Grow Your Shopify Store Sales',
      'Complete marketing solutions for Shopify stores. SEO optimization, paid advertising, email marketing, and conversion optimization to increase your store revenue and customer acquisition.'
    );
  }, []);

  const features = [
    'Shopify SEO optimization',
    'Product page optimization',
    'Google Shopping campaigns',
    'Facebook & Instagram ads for Shopify',
    'Email marketing automation',
    'Abandoned cart recovery',
    'Conversion rate optimization',
    'Shopify app integration',
  ];

  const process = [
    {
      step: '01',
      title: 'Store Audit',
      description: 'Comprehensive analysis of your Shopify store performance.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create multi-channel marketing plan for growth.',
    },
    {
      step: '03',
      title: 'SEO Optimization',
      description: 'Optimize store for search engines and visibility.',
    },
    {
      step: '04',
      title: 'Ad Campaigns',
      description: 'Launch targeted campaigns across channels.',
    },
    {
      step: '05',
      title: 'Automation Setup',
      description: 'Implement email and marketing automation.',
    },
    {
      step: '06',
      title: 'Growth & Scale',
      description: 'Continuously optimize and scale successful tactics.',
    },
  ];

  const results = [
    { metric: '+380%', label: 'Revenue Growth' },
    { metric: '5.2x', label: 'Better ROAS' },
    { metric: '45%', label: 'Higher AOV' },
    { metric: '72%', label: 'Cart Recovery' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ShoppingBag className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Shopify Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Drive more sales and grow your Shopify store with proven marketing strategies
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Maximize Your Shopify Store Revenue
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Running a successful Shopify store requires more than just great products. Our specialized Shopify marketing services help you attract qualified traffic, convert more visitors, and maximize customer lifetime value.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From SEO and paid advertising to email automation and conversion optimization, we provide complete marketing solutions tailored specifically for Shopify stores to drive sustainable revenue growth.
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
                  Our Shopify Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Comprehensive strategies to grow your Shopify store
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
                <h3 className="text-xl font-semibold mb-3">Increase Revenue</h3>
                <p className="text-muted-foreground">
                  Drive more sales through optimized marketing campaigns
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Attract Customers</h3>
                <p className="text-muted-foreground">
                  Get your products in front of ready-to-buy shoppers
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Optimize & Scale</h3>
                <p className="text-muted-foreground">
                  Continuously improve performance and scale winners
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Shopify Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Shopify Store?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a comprehensive marketing strategy that drives sales and grows your Shopify business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-shopify-contact">
                      Get Store Analysis
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
