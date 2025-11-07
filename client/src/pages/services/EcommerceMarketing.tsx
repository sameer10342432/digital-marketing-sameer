import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ShoppingCart, CheckCircle, ArrowRight, TrendingUp, DollarSign, Users } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function EcommerceMarketing() {
  useEffect(() => {
    setPageMeta(
      'E-commerce Marketing Services - Grow Your Online Store Sales',
      'Complete e-commerce marketing solutions to increase online sales. SEO for product pages, Google Shopping ads, email campaigns, conversion optimization, and retention strategies. Drive revenue growth for your online store.'
    );
  }, []);

  const features = [
    'E-commerce SEO and product page optimization',
    'Google Shopping and Performance Max campaigns',
    'Facebook and Instagram shopping ads',
    'Email marketing and abandoned cart recovery',
    'Conversion rate optimization for checkout',
    'Customer retention and loyalty programs',
    'Product feed optimization',
    'Analytics and revenue tracking',
  ];

  const process = [
    {
      step: '01',
      title: 'Store Audit',
      description: 'Comprehensive analysis of your store performance and growth opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a multi-channel marketing strategy tailored to your products and audience.',
    },
    {
      step: '03',
      title: 'Campaign Setup',
      description: 'Launch SEO, paid ads, and email campaigns optimized for e-commerce.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Continuous optimization of product pages, ads, and checkout flow.',
    },
    {
      step: '05',
      title: 'Retention',
      description: 'Implement strategies to increase customer lifetime value and repeat purchases.',
    },
    {
      step: '06',
      title: 'Scale & Grow',
      description: 'Scale successful campaigns and expand to new channels and markets.',
    },
  ];

  const results = [
    { metric: '185%', label: 'Revenue Growth' },
    { metric: '4.2x', label: 'Average ROAS' },
    { metric: '65%', label: 'More Orders' },
    { metric: '35%', label: 'Higher AOV' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                E-commerce Marketing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete marketing solutions to grow your online store and maximize revenue
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why E-commerce Marketing Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With millions of online stores competing for customers, a comprehensive marketing strategy is essential to stand out and drive consistent sales growth.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My e-commerce marketing approach combines SEO, paid advertising, email marketing, and conversion optimization to attract customers, drive sales, and build long-term loyalty.
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
                  My E-commerce Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive approach to growing your online store revenue
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
                <h3 className="text-xl font-semibold mb-3">Revenue Growth</h3>
                <p className="text-muted-foreground">
                  Systematic strategies to increase monthly revenue and store profitability
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher AOV</h3>
                <p className="text-muted-foreground">
                  Increase average order value through upsells and strategic bundling
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Customer Retention</h3>
                <p className="text-muted-foreground">
                  Build loyalty and increase customer lifetime value with retention campaigns
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="E-commerce Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Online Store?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a comprehensive marketing strategy to increase your e-commerce revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-ecommerce-contact">
                      Get Free Store Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-ecommerce-portfolio"
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
