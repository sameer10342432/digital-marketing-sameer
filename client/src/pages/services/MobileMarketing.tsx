import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Smartphone, CheckCircle, ArrowRight, Users, Zap, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function MobileMarketing() {
  useEffect(() => {
    setPageMeta(
      'Mobile Marketing Services - Mobile App & SMS Marketing Solutions',
      'Professional mobile marketing services to reach customers on mobile devices. Mobile app marketing, SMS campaigns, in-app advertising, and mobile-optimized strategies for maximum engagement and conversions.'
    );
  }, []);

  const features = [
    'Mobile app marketing and user acquisition',
    'SMS and MMS marketing campaigns',
    'Mobile-optimized landing pages and funnels',
    'In-app advertising and mobile display ads',
    'Location-based mobile targeting',
    'Mobile push notifications strategy',
    'App store optimization (ASO)',
    'Mobile analytics and conversion tracking',
  ];

  const process = [
    {
      step: '01',
      title: 'Mobile Audit',
      description: 'Analyze your current mobile presence and identify optimization opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a comprehensive mobile marketing plan tailored to your audience.',
    },
    {
      step: '03',
      title: 'Channel Setup',
      description: 'Configure SMS platforms, mobile ads, and app marketing channels.',
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Deploy mobile campaigns across SMS, apps, and mobile advertising platforms.',
    },
    {
      step: '05',
      title: 'Optimization',
      description: 'Continuously test and improve mobile campaign performance.',
    },
    {
      step: '06',
      title: 'Scale & Expand',
      description: 'Expand successful mobile campaigns and reach more mobile users.',
    },
  ];

  const results = [
    { metric: '78%', label: 'Mobile Open Rate' },
    { metric: '450%', label: 'Mobile ROI' },
    { metric: '5M+', label: 'Mobile Users Reached' },
    { metric: '9x', label: 'App Downloads' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Smartphone className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Mobile Marketing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reach your audience where they spend most of their time - on mobile devices
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Mobile Marketing Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Over 60% of online traffic comes from mobile devices. Your customers are constantly on their phones, making mobile marketing essential for reaching them at the right moment.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My mobile marketing approach combines SMS campaigns, mobile app strategies, location-based targeting, and mobile-optimized content to drive engagement, conversions, and customer loyalty.
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
                  My Mobile Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven system for capturing and converting mobile audiences
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
                <h3 className="text-xl font-semibold mb-3">Mobile Audience</h3>
                <p className="text-muted-foreground">
                  Connect with billions of mobile users actively searching and shopping
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Instant Engagement</h3>
                <p className="text-muted-foreground">
                  Reach customers instantly with SMS, push notifications, and mobile ads
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Conversions</h3>
                <p className="text-muted-foreground">
                  Mobile-optimized experiences that drive action and boost conversion rates
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Mobile Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Dominate Mobile Marketing?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a mobile marketing strategy that captures your audience on their favorite devices.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-mobile-contact">
                      Get Free Mobile Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-mobile-portfolio"
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
