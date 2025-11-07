import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Database, CheckCircle, ArrowRight, Zap, Users, BarChart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function CRMIntegrationServices() {
  useEffect(() => {
    setPageMeta(
      'CRM Integration Services - Connect Your Marketing & Sales Systems',
      'Seamlessly integrate your CRM with marketing automation, email platforms, and analytics tools. Streamline workflows, sync customer data, and drive better business results through connected systems.'
    );
  }, []);

  const features = [
    'Custom CRM integration and setup',
    'Marketing automation platform connections',
    'Email marketing platform synchronization',
    'Analytics and reporting integration',
    'Lead scoring and routing automation',
    'Data migration and cleanup',
    'Workflow automation between systems',
    'Ongoing support and maintenance',
  ];

  const process = [
    {
      step: '01',
      title: 'Requirements Analysis',
      description: 'Understand your systems, data flows, and integration needs.',
    },
    {
      step: '02',
      title: 'Integration Planning',
      description: 'Design integration architecture and data mapping strategy.',
    },
    {
      step: '03',
      title: 'Platform Setup',
      description: 'Configure all platforms and establish connections.',
    },
    {
      step: '04',
      title: 'Data Migration',
      description: 'Clean and migrate existing customer data safely.',
    },
    {
      step: '05',
      title: 'Testing',
      description: 'Thoroughly test all integrations and workflows.',
    },
    {
      step: '06',
      title: 'Training & Support',
      description: 'Train your team and provide ongoing support.',
    },
  ];

  const results = [
    { metric: '80%', label: 'Time Saved' },
    { metric: '99%', label: 'Data Accuracy' },
    { metric: '3x', label: 'Team Efficiency' },
    { metric: '$0', label: 'Manual Entry' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Database className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              CRM Integration Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect your marketing and sales systems for seamless customer management
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Unified Customer Data, Better Results
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Stop losing leads in disconnected systems. Our CRM integration services connect your marketing automation, email platforms, and analytics tools to create a unified view of your customers and streamline your workflows.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From initial setup to ongoing optimization, we ensure your systems work together seamlessly—eliminating manual data entry, reducing errors, and empowering your team with the insights they need to drive revenue.
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
                  Our Integration Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Seamless CRM integration that connects your entire marketing stack
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
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automated Workflows</h3>
                <p className="text-muted-foreground">
                  Eliminate manual data entry and sync information instantly
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Unified Customer View</h3>
                <p className="text-muted-foreground">
                  Access complete customer data across all platforms
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Insights</h3>
                <p className="text-muted-foreground">
                  Make data-driven decisions with complete analytics
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="CRM Integration Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Connect Your Systems?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's integrate your CRM with your marketing tools for seamless customer management.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-crm-contact">
                      Get Integration Plan
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
