import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { DollarSign, CheckCircle, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function PPCManagementServices() {
  useEffect(() => {
    setPageMeta(
      'PPC Management Services - Expert Pay-Per-Click Campaign Management',
      'Professional PPC management services for Google Ads, Microsoft Ads, and social media advertising. Expert campaign optimization, bid management, and ROI-focused strategies that deliver results.'
    );
  }, []);

  const features = [
    'Google Ads and Microsoft Ads management',
    'Social media PPC (Facebook, LinkedIn, Twitter)',
    'Shopping and display campaign optimization',
    'Advanced bid strategy and budget management',
    'Conversion tracking and attribution',
    'Ad copywriting and A/B testing',
    'Landing page optimization recommendations',
    'Detailed ROI reporting and analysis',
  ];

  const process = [
    {
      step: '01',
      title: 'Account Audit',
      description: 'Comprehensive analysis of your current PPC accounts and performance.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a data-driven PPC strategy aligned with your business goals.',
    },
    {
      step: '03',
      title: 'Campaign Structure',
      description: 'Build optimized campaign structures with targeted ad groups and keywords.',
    },
    {
      step: '04',
      title: 'Creative & Landing Pages',
      description: 'Develop compelling ad copy and optimize landing pages for conversions.',
    },
    {
      step: '05',
      title: 'Ongoing Optimization',
      description: 'Continuously test, analyze, and refine campaigns for better performance.',
    },
    {
      step: '06',
      title: 'Scaling & Growth',
      description: 'Scale winning campaigns and expand to new opportunities profitably.',
    },
  ];

  const results = [
    { metric: '7.5x', label: 'Average ROAS' },
    { metric: '58%', label: 'Lower CPC' },
    { metric: '240%', label: 'More Conversions' },
    { metric: '92%', label: 'Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <DollarSign className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                PPC Management Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Expert pay-per-click campaign management that maximizes ROI and drives growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Professional PPC Management Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  PPC advertising offers instant visibility and traffic, but without expert management, you'll waste budget on poorly performing campaigns. Professional PPC management ensures every dollar drives results.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My PPC management services combine strategic planning, continuous optimization, and advanced bid management to maximize your return on ad spend across Google Ads, Microsoft Ads, and social media platforms.
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
                  My PPC Management Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to profitable pay-per-click advertising
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
                <h3 className="text-xl font-semibold mb-3">Expert Management</h3>
                <p className="text-muted-foreground">
                  Certified PPC specialists managing your campaigns for maximum performance
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precision Targeting</h3>
                <p className="text-muted-foreground">
                  Reach the right audience at the right time with optimized targeting
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Maximum ROI</h3>
                <p className="text-muted-foreground">
                  Continuous optimization to reduce costs and increase conversions
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="PPC Management Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Maximize Your PPC ROI?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's optimize your pay-per-click campaigns for better performance and higher returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-ppc-management-contact">
                      Get Free PPC Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-ppc-management-portfolio"
                    >
                      View PPC Results
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
