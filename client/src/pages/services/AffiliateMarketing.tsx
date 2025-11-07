import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Users, CheckCircle, ArrowRight, DollarSign, TrendingUp, Network } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function AffiliateMarketing() {
  useEffect(() => {
    setPageMeta(
      'Affiliate Marketing Services - Build & Scale Your Affiliate Program',
      'Professional affiliate marketing services to build, manage, and scale your affiliate program. Partner recruitment, commission structures, tracking systems, and performance optimization for maximum ROI.'
    );
  }, []);

  const features = [
    'Affiliate program strategy and setup',
    'Affiliate network management',
    'Partner recruitment and onboarding',
    'Commission structure optimization',
    'Tracking and attribution systems',
    'Creative assets and marketing materials',
    'Performance monitoring and reporting',
    'Fraud detection and prevention',
  ];

  const process = [
    {
      step: '01',
      title: 'Program Design',
      description: 'Design a competitive affiliate program structure with attractive commissions.',
    },
    {
      step: '02',
      title: 'Platform Setup',
      description: 'Implement tracking software and create affiliate dashboards.',
    },
    {
      step: '03',
      title: 'Partner Recruitment',
      description: 'Identify and recruit high-quality affiliates aligned with your brand.',
    },
    {
      step: '04',
      title: 'Onboarding & Training',
      description: 'Provide affiliates with tools, resources, and training for success.',
    },
    {
      step: '05',
      title: 'Ongoing Management',
      description: 'Support affiliates, optimize campaigns, and maintain relationships.',
    },
    {
      step: '06',
      title: 'Scale & Optimize',
      description: 'Expand partner network and optimize for higher revenue.',
    },
  ];

  const results = [
    { metric: '450%', label: 'Revenue Increase' },
    { metric: '200+', label: 'Active Affiliates' },
    { metric: '15:1', label: 'Avg. ROI' },
    { metric: '$2.5M', label: 'Affiliate Revenue' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Affiliate Marketing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Build and scale a profitable affiliate program that drives consistent revenue
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Affiliate Marketing Works
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Affiliate marketing is a performance-based strategy where you only pay for results. Partner with influencers, bloggers, and content creators who promote your products to their audiences, expanding your reach without upfront costs.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My affiliate marketing approach builds and manages high-performing programs with strategic partner recruitment, optimized commission structures, and robust tracking systems that drive sustainable revenue growth.
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
                  My Affiliate Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven system for building and scaling profitable affiliate programs
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
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Performance-Based</h3>
                <p className="text-muted-foreground">
                  Only pay for actual results - sales, leads, or conversions
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Network className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Expand Reach</h3>
                <p className="text-muted-foreground">
                  Tap into new audiences through trusted partner networks
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scalable Revenue</h3>
                <p className="text-muted-foreground">
                  Build a sustainable revenue channel that grows with your business
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Affiliate Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your Affiliate Program?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a performance-based marketing strategy that drives revenue through strategic partnerships.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-affiliate-contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-affiliate-portfolio"
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
