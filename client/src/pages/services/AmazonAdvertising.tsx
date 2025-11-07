import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Package, CheckCircle, ArrowRight, TrendingUp, Target, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function AmazonAdvertising() {
  useEffect(() => {
    setPageMeta(
      'Amazon Advertising - Expert Amazon PPC Management Services',
      'Professional Amazon advertising management to increase product visibility and sales. Sponsored Products, Sponsored Brands, and Sponsored Display campaigns optimized for maximum ROI.'
    );
  }, []);

  const features = [
    'Amazon Sponsored Products campaigns',
    'Sponsored Brands and video ads',
    'Sponsored Display advertising',
    'Keyword research and optimization',
    'Bid management and strategy',
    'Product listing optimization',
    'A+ content and Enhanced Brand Content',
    'Performance tracking and reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Account Audit',
      description: 'Review Amazon seller account and advertising performance.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create comprehensive Amazon advertising plan.',
    },
    {
      step: '03',
      title: 'Campaign Setup',
      description: 'Launch optimized campaigns across ad types.',
    },
    {
      step: '04',
      title: 'Listing Optimization',
      description: 'Optimize product listings for better conversion.',
    },
    {
      step: '05',
      title: 'Bid Optimization',
      description: 'Continuously optimize bids for profitability.',
    },
    {
      step: '06',
      title: 'Scale & Grow',
      description: 'Scale successful campaigns to maximize sales.',
    },
  ];

  const results = [
    { metric: '+340%', label: 'Sales Increase' },
    { metric: '420%', label: 'Better ACoS' },
    { metric: '6.5x', label: 'ROAS' },
    { metric: 'Page 1', label: 'Product Rankings' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Package className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Amazon Advertising
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dominate Amazon search results and drive profitable sales with expert PPC management
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Win the Amazon Buy Box
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Amazon advertising requires specialized expertise to navigate the competitive marketplace profitably. Our Amazon PPC management services help you increase product visibility, win more sales, and maximize your advertising ROI.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From Sponsored Products to Sponsored Brands and Display ads, we optimize every aspect of your Amazon advertising to drive profitable growth while keeping your ACoS in check.
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
                  Our Amazon Advertising Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proven strategies to dominate Amazon and drive profitable sales
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
                <h3 className="text-xl font-semibold mb-3">Increase Visibility</h3>
                <p className="text-muted-foreground">
                  Get your products in front of ready-to-buy shoppers
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Targeting</h3>
                <p className="text-muted-foreground">
                  Reach the right customers with precision targeting
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Profitable Growth</h3>
                <p className="text-muted-foreground">
                  Maximize sales while maintaining healthy profit margins
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Amazon Advertising" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Dominate Amazon?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's optimize your Amazon advertising to drive more sales and maximize your ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-amazon-contact">
                      Get Account Audit
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
