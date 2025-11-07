import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Shield, CheckCircle, ArrowRight, Eye, Star, AlertCircle } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OnlineBrandManagement() {
  useEffect(() => {
    setPageMeta(
      'Online Brand Management - Protect & Enhance Your Digital Reputation',
      'Professional online brand management services to monitor, protect, and enhance your digital reputation. Review management, brand monitoring, and strategic reputation building for businesses.'
    );
  }, []);

  const features = [
    'Comprehensive brand monitoring across platforms',
    'Review management and response strategy',
    'Negative content suppression tactics',
    'Positive content promotion and amplification',
    'Social media brand protection',
    'Competitor brand analysis',
    'Crisis communication planning',
    'Regular brand health reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Brand Audit',
      description: 'Comprehensive analysis of your current online brand presence.',
    },
    {
      step: '02',
      title: 'Monitoring Setup',
      description: 'Implement tracking across all relevant platforms and channels.',
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Create customized brand management and protection strategy.',
    },
    {
      step: '04',
      title: 'Content Creation',
      description: 'Build positive brand content to strengthen online presence.',
    },
    {
      step: '05',
      title: 'Engagement',
      description: 'Actively manage reviews, comments, and brand mentions.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Continuously refine strategy based on brand performance.',
    },
  ];

  const results = [
    { metric: '24/7', label: 'Brand Monitoring' },
    { metric: '4.5★', label: 'Avg. Rating Boost' },
    { metric: '85%', label: 'Positive Sentiment' },
    { metric: '2x', label: 'Brand Trust' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Online Brand Management
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Protect, monitor, and enhance your brand reputation across all digital channels
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Your Brand Reputation Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  In today's digital world, your online reputation is everything. One negative review or social media comment can significantly impact your business. Our comprehensive brand management services help you monitor, protect, and enhance your digital reputation.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We combine advanced monitoring tools with strategic brand building to ensure your business maintains a positive online presence, builds customer trust, and drives sustainable growth.
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
                  Our Brand Management Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Systematic approach to protecting and enhancing your online reputation
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
                <Eye className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">
                  Track brand mentions and sentiment across all channels
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Review Management</h3>
                <p className="text-muted-foreground">
                  Build positive reviews and professionally handle negative feedback
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <AlertCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Crisis Response</h3>
                <p className="text-muted-foreground">
                  Quick action plans to mitigate negative brand situations
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Online Brand Management" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Protect Your Brand?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's build a comprehensive brand management strategy to protect and enhance your online reputation.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-brand-contact">
                      Get Brand Audit
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
