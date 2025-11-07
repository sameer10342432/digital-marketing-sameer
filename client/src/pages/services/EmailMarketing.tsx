import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Mail, CheckCircle, ArrowRight, Users, Zap, Target } from 'lucide-react';
import ecommerceImage from '@assets/generated_images/E-commerce_case_study_visual_0d25472d.png';
import { setPageMeta } from '@/lib/seo';

export default function EmailMarketing() {
  useEffect(() => {
    setPageMeta(
      'Email Marketing Services - Nurture Leads & Maximize Customer Value',
      'Professional email marketing with automated campaigns, segmentation, and CRM integration. Personalized sequences that drive conversions. 35%+ open rates with 8% click-through rates.'
    );
  }, []);
  const services = [
    'Email marketing strategy and planning',
    'List building and segmentation',
    'Email template design and development',
    'Copywriting and content creation',
    'Marketing automation and workflows',
    'A/B testing and optimization',
    'CRM integration and management',
    'Performance tracking and analytics',
  ];

  const automations = [
    {
      title: 'Welcome Series',
      description: 'Automated onboarding sequence to engage new subscribers',
    },
    {
      title: 'Abandoned Cart',
      description: 'Recover lost sales with timely cart abandonment emails',
    },
    {
      title: 'Lead Nurturing',
      description: 'Multi-touch sequences that guide prospects to conversion',
    },
    {
      title: 'Re-engagement',
      description: 'Win back inactive subscribers with targeted campaigns',
    },
    {
      title: 'Post-Purchase',
      description: 'Build loyalty with strategic post-purchase sequences',
    },
    {
      title: 'Birthday/Anniversary',
      description: 'Personalized offers based on customer milestones',
    },
  ];

  const process = [
    {
      step: '01',
      title: 'Strategy Development',
      description: 'Define goals, audience segments, and campaign roadmap aligned with business objectives.',
    },
    {
      step: '02',
      title: 'List Building',
      description: 'Implement ethical list growth strategies and segment audiences for targeting.',
    },
    {
      step: '03',
      title: 'Template Design',
      description: 'Create branded, mobile-responsive email templates that convert.',
    },
    {
      step: '04',
      title: 'Automation Setup',
      description: 'Build automated workflows for welcome series, nurturing, and retention.',
    },
    {
      step: '05',
      title: 'Campaign Execution',
      description: 'Launch campaigns with compelling copy and strategic timing.',
    },
    {
      step: '06',
      title: 'Test & Optimize',
      description: 'Continuous A/B testing and optimization based on performance data.',
    },
  ];

  const results = [
    { metric: '45%', label: 'Open Rate' },
    { metric: '12%', label: 'Click-Through Rate' },
    { metric: '+$150K', label: 'Revenue Generated' },
    { metric: '8x', label: 'ROI Average' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${ecommerceImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Email Marketing Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nurture leads and maximize customer lifetime value with strategic email campaigns
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Subscribers Into Customers
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Email marketing delivers the highest ROI of any digital marketing channel. With the right strategy, you can nurture leads, increase conversions, and build long-term customer relationships.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I create personalized email campaigns and automated workflows that engage subscribers at every stage of the customer journey, driving consistent revenue for your business.
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
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Automated Email Workflows
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Set up once, generate revenue on autopilot
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {automations.map((automation, index) => (
                  <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`automation-${index}`}>
                    <Zap className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{automation.title}</h3>
                    <p className="text-sm text-muted-foreground">{automation.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  My Email Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to building profitable email campaigns
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
                <h3 className="text-xl font-semibold mb-3">List Growth</h3>
                <p className="text-muted-foreground">
                  Build a quality email list of engaged subscribers who want to hear from you
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personalization</h3>
                <p className="text-muted-foreground">
                  Deliver relevant content to the right people at the right time
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automation</h3>
                <p className="text-muted-foreground">
                  Scale your email marketing with workflows that run on autopilot
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Email Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow With Email?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create an email marketing strategy that nurtures leads and drives consistent revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-email-contact">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-email-case-studies"
                    >
                      View Email Results
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
