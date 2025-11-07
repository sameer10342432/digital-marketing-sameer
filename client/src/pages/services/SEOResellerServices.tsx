import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Search, CheckCircle, ArrowRight, TrendingUp, Users, Shield } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SEOResellerServices() {
  useEffect(() => {
    setPageMeta(
      'SEO Reseller Services - White Label SEO Solutions for Agencies',
      'Partner with us for white-label SEO reseller services. Scale your agency with professional SEO solutions, transparent reporting, and dedicated support. Perfect for agencies looking to expand their service offerings.'
    );
  }, []);

  const features = [
    'Complete white-label SEO services',
    'Custom branded reports and dashboards',
    'Dedicated account management',
    'Scalable pricing for agencies',
    'Full keyword research and strategy',
    'Technical SEO and on-page optimization',
    'High-quality link building campaigns',
    'Monthly performance reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Partnership Setup',
      description: 'Establish white-label partnership and configure branding requirements.',
    },
    {
      step: '02',
      title: 'Client Onboarding',
      description: 'Seamlessly onboard your clients with our streamlined process.',
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Create customized SEO strategies for each client.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute comprehensive SEO campaigns with full transparency.',
    },
    {
      step: '05',
      title: 'Reporting',
      description: 'Deliver branded reports to keep your clients informed.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Continuously refine strategies based on performance data.',
    },
  ];

  const results = [
    { metric: '100%', label: 'White Label' },
    { metric: '24/7', label: 'Support' },
    { metric: '50+', label: 'Agency Partners' },
    { metric: '98%', label: 'Client Retention' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              SEO Reseller Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              White-label SEO solutions that help agencies scale and deliver exceptional results
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Scale Your Agency with White-Label SEO
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Partner with us to offer premium SEO services under your own brand. Our white-label SEO reseller program provides everything you need to expand your service offerings without hiring an in-house team.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We handle all the heavy lifting while you maintain complete control of client relationships. Perfect for agencies, consultants, and web design firms looking to add professional SEO services.
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
                  Our Partnership Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A seamless white-label partnership designed for agency success
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
                <h3 className="text-xl font-semibold mb-3">100% White Label</h3>
                <p className="text-muted-foreground">
                  All services delivered under your brand with custom reporting
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Dedicated Support</h3>
                <p className="text-muted-foreground">
                  Direct access to SEO experts and account managers
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
                <p className="text-muted-foreground">
                  Grow your client base with flexible, scalable pricing
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="SEO Reseller Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Partner with Us?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Join our white-label SEO reseller program and start offering premium SEO services to your clients today.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-partner-contact">
                      Become a Partner
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
