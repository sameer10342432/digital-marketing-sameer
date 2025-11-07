import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Search, CheckCircle, ArrowRight, Target, DollarSign, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function GoogleAdsManagement() {
  useEffect(() => {
    setPageMeta(
      'Google Ads Management Services - Professional PPC Campaign Management',
      'Expert Google Ads management services to maximize ROI. Strategic campaign setup, keyword optimization, ad copy testing, and continuous performance monitoring. Average 3-4x ROAS for clients.'
    );
  }, []);

  const features = [
    'Comprehensive Google Ads account audit and setup',
    'Strategic keyword research and bid management',
    'Compelling ad copy creation and A/B testing',
    'Landing page optimization for higher conversions',
    'Advanced audience targeting and remarketing',
    'Conversion tracking and Google Analytics integration',
    'Shopping and Performance Max campaign management',
    'Detailed monthly reporting and optimization',
  ];

  const process = [
    {
      step: '01',
      title: 'Account Audit',
      description: 'Deep analysis of your current Google Ads performance and identification of opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized campaign strategy aligned with your business goals and budget.',
    },
    {
      step: '03',
      title: 'Campaign Setup',
      description: 'Build optimized campaigns with proper structure, keywords, and ad groups.',
    },
    {
      step: '04',
      title: 'Launch & Monitor',
      description: 'Launch campaigns and monitor performance metrics in real-time.',
    },
    {
      step: '05',
      title: 'Optimize & Test',
      description: 'Continuous testing of ad copy, keywords, and bidding strategies.',
    },
    {
      step: '06',
      title: 'Scale & Expand',
      description: 'Scale winning campaigns and expand to new opportunities.',
    },
  ];

  const results = [
    { metric: '3-4x', label: 'Average ROAS' },
    { metric: '40%', label: 'Lower CPC' },
    { metric: '2.5x', label: 'Higher CTR' },
    { metric: '60%', label: 'More Conversions' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Google Ads Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional Google Ads campaigns that drive qualified leads and maximize ROI
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Google Ads for Your Business?
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Google Ads delivers immediate visibility and qualified traffic. With expert management, you can outperform competitors while maintaining a profitable cost per acquisition.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My data-driven approach combines strategic targeting, compelling ad copy, and continuous optimization to maximize your advertising investment and drive measurable business results.
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
                  My Google Ads Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven approach to building and scaling profitable Google Ads campaigns
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
                <h3 className="text-xl font-semibold mb-3">Precision Targeting</h3>
                <p className="text-muted-foreground">
                  Reach your ideal customers at the exact moment they're searching for your services
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Maximize ROI</h3>
                <p className="text-muted-foreground">
                  Data-driven optimization to get the most value from every advertising dollar
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scalable Growth</h3>
                <p className="text-muted-foreground">
                  Scale successful campaigns to drive consistent, predictable business growth
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Google Ads Management" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Drive More Qualified Leads?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a Google Ads strategy that delivers measurable results for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-google-ads-contact">
                      Get Free Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-google-ads-portfolio"
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
