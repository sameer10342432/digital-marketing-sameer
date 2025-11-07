import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Youtube, CheckCircle, ArrowRight, Play, TrendingUp, Users } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function YouTubeMarketing() {
  useEffect(() => {
    setPageMeta(
      'YouTube Marketing Services - Grow Your Channel & Drive Views',
      'Professional YouTube marketing services to grow your channel, increase subscribers, and boost video views. Channel optimization, video SEO, YouTube ads, and content strategy for maximum reach and engagement.'
    );
  }, []);

  const features = [
    'YouTube channel setup and optimization',
    'Video SEO and keyword research',
    'Thumbnail design and title optimization',
    'YouTube advertising campaigns',
    'Content strategy and planning',
    'Subscriber growth strategies',
    'Analytics and performance tracking',
    'YouTube Shorts strategy',
  ];

  const process = [
    {
      step: '01',
      title: 'Channel Audit',
      description: 'Analyze your channel performance, content, and identify growth opportunities.',
    },
    {
      step: '02',
      title: 'Content Strategy',
      description: 'Develop a video content strategy aligned with your audience and goals.',
    },
    {
      step: '03',
      title: 'SEO Optimization',
      description: 'Optimize titles, descriptions, tags, and thumbnails for maximum visibility.',
    },
    {
      step: '04',
      title: 'Content Creation',
      description: 'Plan and produce engaging video content that resonates with viewers.',
    },
    {
      step: '05',
      title: 'YouTube Ads',
      description: 'Launch targeted YouTube ad campaigns to expand reach and gain subscribers.',
    },
    {
      step: '06',
      title: 'Analyze & Scale',
      description: 'Monitor analytics and scale successful content strategies.',
    },
  ];

  const results = [
    { metric: '5M+', label: 'Total Views' },
    { metric: '850%', label: 'Subscriber Growth' },
    { metric: '8.5%', label: 'Avg. CTR' },
    { metric: '12 min', label: 'Avg. Watch Time' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Youtube className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                YouTube Marketing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Grow your YouTube channel and reach millions with strategic video marketing
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why YouTube Marketing Works
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  YouTube is the world's second-largest search engine with over 2 billion users. Video content is the most engaging format, making YouTube essential for building brand awareness and driving conversions.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My YouTube marketing approach combines strategic SEO optimization, compelling content creation, and targeted advertising to grow your channel, increase views, and build a loyal audience that drives business results.
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
                  My YouTube Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to growing your YouTube channel and audience
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
                <Play className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Video Dominance</h3>
                <p className="text-muted-foreground">
                  Leverage the power of video content to engage and convert audiences
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Massive Reach</h3>
                <p className="text-muted-foreground">
                  Access 2 billion+ users actively searching for video content
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Long-term Growth</h3>
                <p className="text-muted-foreground">
                  Build evergreen content that continues to drive traffic over time
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="YouTube Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your YouTube Channel?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a YouTube marketing strategy that expands your reach and drives real business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-youtube-contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-youtube-portfolio"
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
