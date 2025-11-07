import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Instagram, CheckCircle, ArrowRight, Users, Heart, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function InstagramMarketing() {
  useEffect(() => {
    setPageMeta(
      'Instagram Marketing Services - Grow Your Instagram Presence',
      'Professional Instagram marketing services to build your brand, engage followers, and drive conversions. Content strategy, influencer partnerships, Instagram ads, and community management for business growth.'
    );
  }, []);

  const features = [
    'Instagram content strategy and calendar',
    'Professional content creation and photography',
    'Instagram Stories and Reels optimization',
    'Hashtag research and strategy',
    'Instagram Shopping setup and optimization',
    'Community engagement and management',
    'Instagram advertising campaigns',
    'Analytics and performance tracking',
  ];

  const process = [
    {
      step: '01',
      title: 'Brand Analysis',
      description: 'Analyze your brand identity, target audience, and Instagram presence to develop strategy.',
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Create a content calendar with engaging posts, stories, and reels aligned with your goals.',
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Produce high-quality visual content that resonates with your target audience.',
    },
    {
      step: '04',
      title: 'Community Building',
      description: 'Engage with followers, respond to comments, and build an authentic community.',
    },
    {
      step: '05',
      title: 'Paid Campaigns',
      description: 'Launch targeted Instagram ad campaigns to expand reach and drive conversions.',
    },
    {
      step: '06',
      title: 'Track & Optimize',
      description: 'Monitor performance metrics and optimize strategy for continuous growth.',
    },
  ];

  const results = [
    { metric: '500%', label: 'Follower Growth' },
    { metric: '12%', label: 'Avg. Engagement Rate' },
    { metric: '3.5M+', label: 'Impressions Generated' },
    { metric: '8x', label: 'ROI on Ads' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Instagram className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Instagram Marketing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Build a powerful Instagram presence that drives engagement and business growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Instagram Marketing Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  With over 2 billion active users, Instagram is a powerful platform for building brand awareness, connecting with customers, and driving sales through visual storytelling.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My Instagram marketing approach combines authentic content creation, strategic hashtag use, community engagement, and targeted advertising to grow your presence and achieve measurable business results.
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
                  My Instagram Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven system for growing your Instagram presence and driving results
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
                <h3 className="text-xl font-semibold mb-3">Audience Growth</h3>
                <p className="text-muted-foreground">
                  Build a loyal following of engaged users interested in your brand
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">High Engagement</h3>
                <p className="text-muted-foreground">
                  Create content that sparks conversations and builds community
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Business Results</h3>
                <p className="text-muted-foreground">
                  Drive traffic, leads, and sales through strategic Instagram marketing
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Instagram Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Instagram Presence?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create an Instagram marketing strategy that builds your brand and drives real business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-instagram-contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-instagram-portfolio"
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
