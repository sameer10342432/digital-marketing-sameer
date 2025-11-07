import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ShoppingCart, CheckCircle, ArrowRight, Search, TrendingUp, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function EcommerceSEOServices() {
  useEffect(() => {
    setPageMeta(
      'E-commerce SEO Services - Drive More Organic Sales',
      'Specialized SEO for online stores. Product page optimization, category SEO, technical e-commerce optimization, and link building strategies that increase organic traffic and revenue.'
    );
  }, []);

  const features = [
    'Product page SEO optimization',
    'Category page structure and optimization',
    'E-commerce technical SEO',
    'Schema markup for products',
    'Site speed and Core Web Vitals',
    'Internal linking strategy',
    'Content marketing for e-commerce',
    'Conversion rate optimization',
  ];

  const process = [
    {
      step: '01',
      title: 'Store Audit',
      description: 'Comprehensive SEO audit of your online store.',
    },
    {
      step: '02',
      title: 'Keyword Research',
      description: 'Identify high-intent product and category keywords.',
    },
    {
      step: '03',
      title: 'Technical Optimization',
      description: 'Fix technical issues affecting rankings and crawling.',
    },
    {
      step: '04',
      title: 'On-Page SEO',
      description: 'Optimize product pages and categories.',
    },
    {
      step: '05',
      title: 'Content Strategy',
      description: 'Create valuable content to attract organic traffic.',
    },
    {
      step: '06',
      title: 'Link Building',
      description: 'Build authoritative backlinks for product pages.',
    },
  ];

  const results = [
    { metric: '+420%', label: 'Organic Traffic' },
    { metric: '180%', label: 'Revenue Increase' },
    { metric: '3.8x', label: 'Better ROI' },
    { metric: 'Page 1', label: 'Product Rankings' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <ShoppingCart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              E-commerce SEO Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Increase organic sales with specialized SEO for online stores
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Rank Your Products & Drive Sales
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  E-commerce SEO requires a specialized approach. From optimizing thousands of product pages to fixing technical issues that affect crawling and indexing, we help online stores rank higher and convert more organic traffic into sales.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our e-commerce SEO strategies focus on driving qualified traffic that converts—optimizing product pages, improving site structure, and building authority to dominate competitive product searches.
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
                  Our E-commerce SEO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Systematic approach to ranking products and driving organic sales
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
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Rankings</h3>
                <p className="text-muted-foreground">
                  Rank products on page 1 for high-intent keywords
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Traffic</h3>
                <p className="text-muted-foreground">
                  Drive qualified shoppers to your product pages
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Increased Sales</h3>
                <p className="text-muted-foreground">
                  Convert organic traffic into revenue and profit
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="E-commerce SEO Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Increase Organic Sales?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's optimize your online store to rank higher and drive more organic revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-ecommerce-contact">
                      Get Store Audit
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
