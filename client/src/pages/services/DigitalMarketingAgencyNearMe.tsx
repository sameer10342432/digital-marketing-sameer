import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { MapPin, CheckCircle, ArrowRight, Users, TrendingUp, Shield } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingAgencyNearMe() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Agency Near Me - Local Expert Marketing Services',
      'Find a trusted local digital marketing agency that delivers results. Full-service marketing solutions with personalized service, local market expertise, and proven track record.'
    );
  }, []);

  const features = [
    'Local market expertise and insights',
    'Personalized service and direct access',
    'Complete digital marketing services',
    'SEO, PPC, and social media marketing',
    'Web design and development',
    'Content creation and strategy',
    'Regular in-person meetings available',
    'Proven results for local businesses',
  ];

  const process = [
    {
      step: '01',
      title: 'Free Consultation',
      description: 'Discuss your business goals and challenges.',
    },
    {
      step: '02',
      title: 'Market Analysis',
      description: 'Analyze your local market and opportunities.',
    },
    {
      step: '03',
      title: 'Custom Strategy',
      description: 'Develop tailored marketing plan for your business.',
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Execute comprehensive marketing campaigns.',
    },
    {
      step: '05',
      title: 'Regular Reporting',
      description: 'Transparent reporting on results and ROI.',
    },
    {
      step: '06',
      title: 'Ongoing Optimization',
      description: 'Continuously improve performance and results.',
    },
  ];

  const results = [
    { metric: '250+', label: 'Local Clients Served' },
    { metric: '4.9★', label: 'Average Rating' },
    { metric: '380%', label: 'Avg. ROI' },
    { metric: '95%', label: 'Client Retention' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Digital Marketing Agency Near Me
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted local partner for digital marketing success
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Work with a Local Marketing Partner
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Looking for a digital marketing agency you can trust? We provide full-service digital marketing with the personal touch of a local partner who understands your market and is invested in your success.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Unlike distant agencies, we offer personalized service, local market expertise, and the ability to meet in person when needed. We're your neighbors, and your success is our success.
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
                  How we work with local businesses to drive growth
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
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of your local market dynamics
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Personal Service</h3>
                <p className="text-muted-foreground">
                  Direct access to your dedicated marketing team
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track record of success with local businesses
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital Marketing Agency Near Me" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work with a Local Partner?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's discuss how our local digital marketing expertise can help grow your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-local-agency-contact">
                      Get Free Consultation
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
