import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { DollarSign, CheckCircle, ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function PaidSearchAdvertising() {
  useEffect(() => {
    setPageMeta(
      'Paid Search Advertising - Expert Google Ads & PPC Management',
      'Professional paid search advertising services to drive qualified leads and maximize ROI. Expert Google Ads, Bing Ads management with strategic bidding and conversion optimization.'
    );
  }, []);

  const features = [
    'Google Ads campaign setup and management',
    'Microsoft Advertising (Bing Ads)',
    'Keyword research and bid strategy',
    'Ad copywriting and A/B testing',
    'Landing page optimization',
    'Conversion tracking and analytics',
    'Remarketing campaigns',
    'Detailed performance reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Account Audit',
      description: 'Review existing campaigns or assess your paid search opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Planning',
      description: 'Develop comprehensive paid search strategy aligned with goals.',
    },
    {
      step: '03',
      title: 'Campaign Setup',
      description: 'Build optimized campaigns with compelling ad copy.',
    },
    {
      step: '04',
      title: 'Launch & Monitor',
      description: 'Launch campaigns and closely monitor initial performance.',
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuously test and optimize for better results.',
    },
    {
      step: '06',
      title: 'Scale',
      description: 'Scale successful campaigns to maximize ROI.',
    },
  ];

  const results = [
    { metric: '350%', label: 'Avg. ROI' },
    { metric: '40%', label: 'Lower CPC' },
    { metric: '5.2%', label: 'Avg. CTR' },
    { metric: '95%', label: 'Quality Score' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <DollarSign className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Paid Search Advertising
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Drive immediate results with expertly managed paid search campaigns
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Get in Front of Customers Ready to Buy
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Paid search advertising puts your business at the top of search results when potential customers are actively looking for your products or services. With the right strategy, you can drive qualified leads and maximize your advertising ROI.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our expert team manages every aspect of your paid search campaigns—from keyword research and ad creation to bid optimization and conversion tracking—ensuring every dollar works harder for your business.
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
                  Our Paid Search Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to maximizing your paid search ROI
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
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Instant Visibility</h3>
                <p className="text-muted-foreground">
                  Get your business in front of searchers immediately
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precision Targeting</h3>
                <p className="text-muted-foreground">
                  Reach the right audience at the right time with smart targeting
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Measurable ROI</h3>
                <p className="text-muted-foreground">
                  Track every click, conversion, and dollar spent
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Paid Search Advertising" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Drive Qualified Leads?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a paid search strategy that delivers immediate results and long-term growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-ppc-contact">
                      Start Your Campaign
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
