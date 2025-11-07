import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Video, CheckCircle, ArrowRight, Play, TrendingUp, Eye } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function VideoMarketing() {
  useEffect(() => {
    setPageMeta(
      'Video Marketing Services - Engage Audiences with Compelling Video Content',
      'Professional video marketing services to captivate your audience. Video strategy, production coordination, YouTube optimization, video ads, and distribution. Drive engagement and conversions with powerful video content.'
    );
  }, []);

  const features = [
    'Video marketing strategy development',
    'YouTube channel optimization and growth',
    'Video ad campaigns (YouTube, Facebook, Instagram)',
    'Product demo and explainer videos',
    'Brand storytelling and promotional videos',
    'Video SEO and thumbnail optimization',
    'Social media video content strategy',
    'Performance analytics and optimization',
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy Planning',
      description: 'Define video marketing goals, target audience, and content strategy.',
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Develop a content calendar and storyboard key video concepts.',
    },
    {
      step: '03',
      title: 'Production',
      description: 'Coordinate video production or create engaging video content.',
    },
    {
      step: '04',
      title: 'Optimization',
      description: 'Optimize videos for SEO, engagement, and platform algorithms.',
    },
    {
      step: '05',
      title: 'Distribution',
      description: 'Launch videos across multiple platforms and run video ad campaigns.',
    },
    {
      step: '06',
      title: 'Analysis & Scale',
      description: 'Analyze performance and scale successful video content.',
    },
  ];

  const results = [
    { metric: '3.5M+', label: 'Video Views' },
    { metric: '85%', label: 'Watch Time' },
    { metric: '6x', label: 'Engagement Rate' },
    { metric: '250%', label: 'Conversion Lift' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Video className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Video Marketing Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Captivate your audience and drive results with strategic video content
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Video Marketing Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Video content generates 1200% more shares than text and images combined. With consumers watching billions of hours of video daily, video marketing is essential for brand visibility and engagement.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My video marketing strategies combine compelling storytelling, platform optimization, and strategic distribution to create video content that educates, entertains, and converts your target audience.
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
                  My Video Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive approach to creating and distributing impactful video content
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
                <h3 className="text-xl font-semibold mb-3">Compelling Content</h3>
                <p className="text-muted-foreground">
                  Create video content that captures attention and tells your brand story
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Maximum Visibility</h3>
                <p className="text-muted-foreground">
                  Optimize videos for search and platform algorithms to maximize reach
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Drive Conversions</h3>
                <p className="text-muted-foreground">
                  Turn viewers into customers with strategic calls-to-action and optimization
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Video Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow with Video?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a video marketing strategy that engages your audience and drives results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-video-contact">
                      Get Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-video-portfolio"
                    >
                      View Video Work
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
