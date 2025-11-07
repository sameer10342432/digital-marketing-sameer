import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Megaphone, CheckCircle, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalAdvertisingAgency() {
  useEffect(() => {
    setPageMeta(
      'Digital Advertising Agency - Multi-Channel Paid Media Campaigns',
      'Full-service digital advertising agency specializing in paid media campaigns. Google Ads, Facebook, display advertising, video ads, and programmatic buying for maximum reach and ROI.'
    );
  }, []);

  const features = [
    'Multi-channel advertising strategy',
    'Google Ads and Microsoft Advertising',
    'Social media advertising (Meta, LinkedIn, Twitter)',
    'Display and banner advertising campaigns',
    'Video advertising (YouTube, streaming platforms)',
    'Programmatic advertising and RTB',
    'Native advertising placements',
    'Comprehensive analytics and reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Media Planning',
      description: 'Develop a comprehensive media plan across multiple advertising channels.',
    },
    {
      step: '02',
      title: 'Audience Research',
      description: 'Identify and analyze your target audience across all platforms.',
    },
    {
      step: '03',
      title: 'Creative Development',
      description: 'Create compelling ad creatives optimized for each advertising platform.',
    },
    {
      step: '04',
      title: 'Campaign Execution',
      description: 'Launch coordinated campaigns across all selected advertising channels.',
    },
    {
      step: '05',
      title: 'Performance Monitoring',
      description: 'Track and analyze campaign performance in real-time across platforms.',
    },
    {
      step: '06',
      title: 'Continuous Optimization',
      description: 'Refine targeting, bidding, and creative to maximize advertising ROI.',
    },
  ];

  const results = [
    { metric: '6.5x', label: 'Average ROAS' },
    { metric: '45%', label: 'Lower Cost Per Click' },
    { metric: '15M+', label: 'Ad Impressions' },
    { metric: '180%', label: 'Conversion Increase' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Megaphone className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Digital Advertising Agency
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Strategic paid media campaigns that reach your audience across all digital channels
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Partner With Our Digital Advertising Agency
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Digital advertising is complex, with multiple platforms, bidding strategies, and audience targeting options. Success requires expertise across channels and data-driven optimization.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a full-service digital advertising agency, I manage your entire paid media strategy - from planning and creative to execution and optimization - delivering consistent results across all digital advertising channels.
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
                  My Digital Advertising Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive approach to multi-channel paid media success
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
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Cross-Channel Reach</h3>
                <p className="text-muted-foreground">
                  Connect with your audience across search, social, display, and video platforms
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Unified Strategy</h3>
                <p className="text-muted-foreground">
                  Coordinated campaigns that work together to maximize advertising impact
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven Results</h3>
                <p className="text-muted-foreground">
                  Continuous optimization based on performance data across all channels
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital Advertising Agency" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Scale Your Advertising?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a comprehensive digital advertising strategy that drives results across all channels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-digital-advertising-contact">
                      Get Free Media Plan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-digital-advertising-portfolio"
                    >
                      View Case Studies
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
