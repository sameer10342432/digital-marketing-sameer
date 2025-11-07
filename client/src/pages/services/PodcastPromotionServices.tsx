import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Mic, CheckCircle, ArrowRight, Users, TrendingUp, BarChart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function PodcastPromotionServices() {
  useEffect(() => {
    setPageMeta(
      'Podcast Promotion Services - Grow Your Audience & Downloads',
      'Comprehensive podcast marketing to increase listeners, downloads, and subscriber growth. Multi-channel promotion strategies to amplify your podcast reach and build engaged audience.'
    );
  }, []);

  const features = [
    'Podcast SEO and discoverability',
    'Social media promotion strategy',
    'Guest outreach and booking',
    'Listener acquisition campaigns',
    'Email list building from podcast',
    'Show note optimization',
    'Sponsorship opportunity development',
    'Analytics and growth tracking',
  ];

  const process = [
    {
      step: '01',
      title: 'Podcast Audit',
      description: 'Analyze current podcast performance and opportunities.',
    },
    {
      step: '02',
      title: 'Growth Strategy',
      description: 'Develop comprehensive podcast promotion plan.',
    },
    {
      step: '03',
      title: 'Optimization',
      description: 'Optimize podcast for discovery and conversion.',
    },
    {
      step: '04',
      title: 'Promotion Launch',
      description: 'Execute multi-channel promotion campaigns.',
    },
    {
      step: '05',
      title: 'Guest Strategy',
      description: 'Book high-value guests and cross-promote.',
    },
    {
      step: '06',
      title: 'Scale Audience',
      description: 'Continuously grow and engage listener base.',
    },
  ];

  const results = [
    { metric: '+520%', label: 'Download Growth' },
    { metric: '3.5x', label: 'Subscriber Increase' },
    { metric: 'Top 10%', label: 'Category Ranking' },
    { metric: '85%', label: 'Listener Retention' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Mic className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Podcast Promotion Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Grow your podcast audience and amplify your message to more listeners
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Build Your Podcast Audience
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Great content alone isn't enough—you need strategic promotion to grow your podcast audience. Our specialized podcast marketing services help you increase downloads, attract loyal listeners, and build a community around your show.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From podcast SEO and social promotion to guest booking and sponsorship development, we provide complete marketing solutions to grow your podcast and amplify your voice.
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
                  Our Podcast Promotion Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to growing your podcast audience
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
                <h3 className="text-xl font-semibold mb-3">More Listeners</h3>
                <p className="text-muted-foreground">
                  Attract ideal audience members who love your content
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Rankings</h3>
                <p className="text-muted-foreground">
                  Climb podcast charts and increase discoverability
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Build Community</h3>
                <p className="text-muted-foreground">
                  Engage loyal listeners who share and promote your show
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Podcast Promotion Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Podcast?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a promotion strategy that amplifies your podcast and builds a loyal listener base.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-podcast-contact">
                      Get Promotion Plan
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
