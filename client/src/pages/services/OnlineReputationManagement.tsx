import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Shield, CheckCircle, ArrowRight, Star, TrendingUp, AlertTriangle } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OnlineReputationManagement() {
  useEffect(() => {
    setPageMeta(
      'Online Reputation Management Services - Protect & Build Your Brand',
      'Professional online reputation management to monitor, protect, and improve your brand image. Review management, negative content suppression, brand monitoring, and positive content promotion for businesses.'
    );
  }, []);

  const features = [
    'Brand and reputation monitoring',
    'Review management and response',
    'Negative content suppression',
    'Positive content creation and promotion',
    'Social media reputation management',
    'Crisis management and response',
    'Search result optimization',
    'Ongoing reputation tracking and reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Reputation Audit',
      description: 'Comprehensive analysis of your online presence, reviews, and brand mentions.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a customized reputation management strategy for your goals.',
    },
    {
      step: '03',
      title: 'Monitoring Setup',
      description: 'Implement tools to track mentions, reviews, and brand sentiment.',
    },
    {
      step: '04',
      title: 'Content Suppression',
      description: 'Push down negative content with strategic SEO and content creation.',
    },
    {
      step: '05',
      title: 'Positive Promotion',
      description: 'Create and promote positive content to strengthen brand image.',
    },
    {
      step: '06',
      title: 'Ongoing Management',
      description: 'Continuous monitoring, response, and optimization of your reputation.',
    },
  ];

  const results = [
    { metric: '4.7★', label: 'Avg. Rating Improved' },
    { metric: '350%', label: 'More Positive Reviews' },
    { metric: '92%', label: 'Negative Suppressed' },
    { metric: '24/7', label: 'Brand Monitoring' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Online Reputation Management
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Protect and enhance your brand's online reputation with expert management
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Reputation Management Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your online reputation directly impacts customer trust, sales, and business growth. 93% of consumers read online reviews before making a purchase decision, and negative content can cost you thousands in lost revenue.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My reputation management approach proactively monitors your brand, responds to reviews, suppresses negative content, and promotes positive stories to build trust and drive business growth.
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
                  My Reputation Management Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive approach to protecting and enhancing your brand online
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
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Protect Your Brand</h3>
                <p className="text-muted-foreground">
                  Monitor and respond to threats to your brand reputation in real-time
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Build Trust</h3>
                <p className="text-muted-foreground">
                  Increase positive reviews and testimonials to build customer confidence
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <AlertTriangle className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Crisis Ready</h3>
                <p className="text-muted-foreground">
                  Rapid response to reputation threats and negative publicity
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Online Reputation Management" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Protect Your Online Reputation?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's build and protect your brand's online reputation to drive trust, credibility, and business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-reputation-contact">
                      Get Free Reputation Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-reputation-portfolio"
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
