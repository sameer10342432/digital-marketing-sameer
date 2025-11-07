import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { TrendingUp, CheckCircle, ArrowRight, Search, BarChart, Clock } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OrganicTrafficGrowth() {
  useEffect(() => {
    setPageMeta(
      'Organic Traffic Growth - Sustainable SEO Strategies for Long-Term Success',
      'Grow organic website traffic through proven SEO strategies. Increase search visibility, attract qualified visitors, and build sustainable traffic growth without ongoing ad spend.'
    );
  }, []);

  const features = [
    'Comprehensive keyword strategy and research',
    'Technical SEO optimization',
    'High-quality content creation',
    'Strategic link building campaigns',
    'On-page optimization',
    'User experience improvements',
    'Core Web Vitals optimization',
    'Ongoing performance monitoring',
  ];

  const process = [
    {
      step: '01',
      title: 'Traffic Analysis',
      description: 'Analyze current organic traffic and identify growth opportunities.',
    },
    {
      step: '02',
      title: 'Keyword Strategy',
      description: 'Develop comprehensive keyword targeting strategy.',
    },
    {
      step: '03',
      title: 'Technical SEO',
      description: 'Fix technical issues blocking organic growth.',
    },
    {
      step: '04',
      title: 'Content Strategy',
      description: 'Create valuable content that attracts organic traffic.',
    },
    {
      step: '05',
      title: 'Link Building',
      description: 'Build authoritative backlinks to boost rankings.',
    },
    {
      step: '06',
      title: 'Continuous Growth',
      description: 'Monitor, refine, and scale successful strategies.',
    },
  ];

  const results = [
    { metric: '+400%', label: 'Organic Growth' },
    { metric: '90 Days', label: 'To See Results' },
    { metric: '$0', label: 'Per Click Cost' },
    { metric: '24/7', label: 'Traffic Flow' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Organic Traffic Growth
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build sustainable traffic that compounds over time without ongoing ad spend
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Sustainable Growth Through SEO
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Organic traffic is the foundation of sustainable digital growth. Unlike paid advertising that stops when you stop spending, organic traffic continues to flow 24/7 once you achieve strong search rankings.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our proven strategies focus on long-term growth through technical optimization, valuable content creation, and strategic link building—delivering compounding returns on your investment.
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
                  Our Organic Growth Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Systematic approach to building sustainable organic traffic
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
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Rankings</h3>
                <p className="text-muted-foreground">
                  Dominate search results for valuable keywords
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Compounding Returns</h3>
                <p className="text-muted-foreground">
                  Traffic and results that grow exponentially over time
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Clock className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Long-Term Value</h3>
                <p className="text-muted-foreground">
                  Build sustainable traffic source without ongoing ad costs
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Organic Traffic Growth" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Organic Traffic?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's build a sustainable SEO strategy that delivers compounding organic traffic growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-organic-contact">
                      Get Growth Strategy
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
