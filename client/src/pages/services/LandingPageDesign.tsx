import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FileText, CheckCircle, ArrowRight, Target, TrendingUp, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LandingPageDesign() {
  useEffect(() => {
    setPageMeta(
      'Landing Page Design Services - High-Converting Landing Pages',
      'Professional landing page design services that convert visitors into customers. Conversion-focused design, A/B testing, compelling copy, and mobile optimization for maximum ROI on your ad campaigns.'
    );
  }, []);

  const features = [
    'Conversion-focused design and layout',
    'Compelling headlines and copywriting',
    'Clear call-to-action optimization',
    'Mobile-responsive design',
    'A/B testing and optimization',
    'Fast loading speed optimization',
    'Lead capture form design',
    'Analytics and tracking setup',
  ];

  const process = [
    {
      step: '01',
      title: 'Goal Definition',
      description: 'Understand your offer, target audience, and conversion goals.',
    },
    {
      step: '02',
      title: 'Design Strategy',
      description: 'Create a conversion-focused layout with strategic element placement.',
    },
    {
      step: '03',
      title: 'Copywriting',
      description: 'Craft compelling headlines, benefits, and calls-to-action.',
    },
    {
      step: '04',
      title: 'Visual Design',
      description: 'Design an attractive page that guides visitors toward conversion.',
    },
    {
      step: '05',
      title: 'Testing & Launch',
      description: 'Test across devices, optimize speed, and launch with tracking.',
    },
    {
      step: '06',
      title: 'Optimize & Scale',
      description: 'A/B test elements and continuously improve conversion rates.',
    },
  ];

  const results = [
    { metric: '35%', label: 'Avg. Conversion Rate' },
    { metric: '4.5x', label: 'Better ROI' },
    { metric: '2.8s', label: 'Load Time' },
    { metric: '65%', label: 'Lower CPA' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Landing Page Design
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Convert more visitors into customers with high-performing landing pages
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Landing Pages Drive Results
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A well-designed landing page can be the difference between wasted ad spend and profitable campaigns. Unlike your website, landing pages are laser-focused on a single conversion goal with no distractions.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My landing page design approach combines conversion psychology, persuasive copywriting, and strategic design to create pages that turn clicks into customers and maximize your advertising ROI.
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
                  My Landing Page Design Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven approach to creating landing pages that convert
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
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Laser-Focused</h3>
                <p className="text-muted-foreground">
                  Single goal, zero distractions - designed purely for conversions
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Fast Loading</h3>
                <p className="text-muted-foreground">
                  Optimized for speed to prevent visitor drop-off
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
                <p className="text-muted-foreground">
                  Continuously optimized based on real performance data
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Landing Page Design" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Boost Your Conversion Rates?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's design landing pages that turn your traffic into customers and maximize your marketing ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-landing-contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-landing-portfolio"
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
