import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Layers, CheckCircle, ArrowRight, Users, Zap, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function FullServiceDigitalAgency() {
  useEffect(() => {
    setPageMeta(
      'Full Service Digital Agency - Complete Digital Marketing Solutions',
      'Full-service digital marketing agency offering integrated solutions. SEO, PPC, social media, content marketing, web design, and analytics. Your complete digital marketing partner for business growth.'
    );
  }, []);

  const features = [
    'Complete digital marketing strategy',
    'SEO and organic search optimization',
    'PPC advertising across all platforms',
    'Social media marketing and management',
    'Content creation and marketing',
    'Web design and development',
    'Email marketing automation',
    'Analytics and performance reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Business Discovery',
      description: 'Understand your business, goals, challenges, and target audience deeply.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create an integrated digital marketing strategy across all channels.',
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Execute campaigns across SEO, PPC, social, content, and other channels.',
    },
    {
      step: '04',
      title: 'Content & Creative',
      description: 'Develop engaging content and creative assets for all marketing channels.',
    },
    {
      step: '05',
      title: 'Monitoring & Analysis',
      description: 'Track performance across all channels with unified analytics.',
    },
    {
      step: '06',
      title: 'Optimization & Growth',
      description: 'Continuously improve and scale successful strategies for maximum ROI.',
    },
  ];

  const results = [
    { metric: '350%', label: 'Average Revenue Growth' },
    { metric: '7.2x', label: 'Marketing ROI' },
    { metric: '25M+', label: 'Total Impressions' },
    { metric: '95%', label: 'Client Retention' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Layers className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Full Service Digital Agency
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Complete digital marketing solutions to grow your business online
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose a Full Service Digital Agency
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Managing multiple marketing channels with different specialists is complex and inefficient. A full-service agency provides integrated strategies that work together seamlessly.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As your complete digital marketing partner, I handle everything from strategy to execution across all channels - SEO, PPC, social media, content, and more - delivering cohesive campaigns that maximize your marketing ROI.
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
                  My Full Service Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  An integrated approach to digital marketing success
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
                <h3 className="text-xl font-semibold mb-3">Single Partner</h3>
                <p className="text-muted-foreground">
                  One agency managing all your digital marketing needs efficiently
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Integrated Strategy</h3>
                <p className="text-muted-foreground">
                  Coordinated campaigns across all channels for maximum impact
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Results</h3>
                <p className="text-muted-foreground">
                  Unified strategy and execution that delivers superior ROI
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Full Service Digital Agency" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready for Complete Digital Marketing?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's build an integrated digital marketing strategy that drives real business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-full-service-contact">
                      Get Free Strategy Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-full-service-portfolio"
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
