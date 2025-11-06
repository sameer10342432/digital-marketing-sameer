import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { MousePointerClick, CheckCircle, ArrowRight, DollarSign, Target, TrendingUp } from 'lucide-react';
import ppcImage from '@assets/generated_images/PPC_campaign_case_study_e769767e.png';
import { setPageMeta } from '@/lib/seo';

export default function PPCCampaigns() {
  useEffect(() => {
    setPageMeta(
      'PPC Campaign Management - Google Ads, Facebook & LinkedIn Ads',
      'Data-driven PPC campaign management across Google Ads, Meta, and LinkedIn. Maximize ROI with strategic targeting, ad optimization, and conversion tracking. 300%+ ROI with 60% lower CPA.'
    );
  }, []);
  const platforms = [
    { name: 'Google Ads', description: 'Search, Display, Shopping, and YouTube campaigns' },
    { name: 'Meta Ads', description: 'Facebook and Instagram advertising' },
    { name: 'LinkedIn Ads', description: 'B2B lead generation and brand awareness' },
    { name: 'Twitter Ads', description: 'Engagement and conversion campaigns' },
  ];

  const features = [
    'Campaign strategy and planning',
    'Keyword research and audience targeting',
    'Ad copywriting and creative development',
    'Landing page optimization',
    'Bid management and budget optimization',
    'A/B testing and conversion optimization',
    'Comprehensive tracking and analytics setup',
    'Weekly performance reports and insights',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Strategy',
      description: 'Understand your business goals, target audience, and competitive landscape to build a winning strategy.',
    },
    {
      step: '02',
      title: 'Campaign Setup',
      description: 'Create optimized campaigns with proper structure, targeting, and tracking implementation.',
    },
    {
      step: '03',
      title: 'Launch & Monitor',
      description: 'Launch campaigns and closely monitor performance to identify optimization opportunities.',
    },
    {
      step: '04',
      title: 'Test & Optimize',
      description: 'Continuous A/B testing of ads, audiences, and landing pages to improve ROI.',
    },
    {
      step: '05',
      title: 'Scale Success',
      description: 'Scale winning campaigns while maintaining or improving cost per acquisition.',
    },
  ];

  const results = [
    { metric: '300%+', label: 'Avg. ROI' },
    { metric: '-60%', label: 'Lower CPA' },
    { metric: '8.2%', label: 'Avg. CTR' },
    { metric: '$12', label: 'Avg. Cost Per Lead' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ppcImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <MousePointerClick className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              PPC Campaign Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Data-driven paid advertising that delivers qualified leads and maximum ROI
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Strategic PPC That Drives Results
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  PPC advertising provides immediate visibility and qualified traffic. When managed correctly, it delivers predictable, scalable results while maintaining profitability.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I specialize in creating and managing high-performance PPC campaigns across multiple platforms, using data-driven strategies to maximize your return on ad spend.
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
                <Card className="p-8 mb-6">
                  <h3 className="text-2xl font-bold mb-6">Platforms I Manage</h3>
                  <div className="space-y-4">
                    {platforms.map((platform, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <h4 className="font-semibold mb-1">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground">{platform.description}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="mb-20">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  My PPC Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to creating profitable paid advertising campaigns
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.slice(0, 3).map((item, index) => (
                  <Card key={index} className="p-6" data-testid={`process-${index}`}>
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-3xl mx-auto">
                {process.slice(3).map((item, index) => (
                  <Card key={index + 3} className="p-6" data-testid={`process-${index + 3}`}>
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lower Costs</h3>
                <p className="text-muted-foreground">
                  Reduce your cost per acquisition by 40-60% through continuous optimization
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precise Targeting</h3>
                <p className="text-muted-foreground">
                  Reach your ideal customers with laser-focused audience targeting
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scalable Growth</h3>
                <p className="text-muted-foreground">
                  Scale winning campaigns predictably while maintaining profitability
                </p>
              </Card>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Maximize Your Ad Spend?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a PPC strategy that delivers qualified leads at a profitable cost per acquisition.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-ppc-contact">
                      Get Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-ppc-case-studies"
                    >
                      View PPC Results
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
