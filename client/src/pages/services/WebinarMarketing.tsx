import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Video, CheckCircle, ArrowRight, Users, TrendingUp, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function WebinarMarketing() {
  useEffect(() => {
    setPageMeta(
      'Webinar Marketing - Fill Webinars & Convert Attendees',
      'Complete webinar marketing solutions to maximize registrations, attendance, and sales. Proven strategies to promote webinars, engage audiences, and convert attendees into customers.'
    );
  }, []);

  const features = [
    'Webinar registration page optimization',
    'Multi-channel promotion campaigns',
    'Email sequence automation',
    'Retargeting and reminder campaigns',
    'Landing page A/B testing',
    'Attendance optimization tactics',
    'Post-webinar follow-up sequences',
    'Replay and evergreen funnel setup',
  ];

  const process = [
    {
      step: '01',
      title: 'Webinar Strategy',
      description: 'Define topic, offer, and target audience.',
    },
    {
      step: '02',
      title: 'Landing Page',
      description: 'Create high-converting registration page.',
    },
    {
      step: '03',
      title: 'Promotion Campaign',
      description: 'Launch multi-channel webinar promotion.',
    },
    {
      step: '04',
      title: 'Reminder Sequence',
      description: 'Set up automated reminders to boost attendance.',
    },
    {
      step: '05',
      title: 'Webinar Delivery',
      description: 'Optimize webinar for engagement and sales.',
    },
    {
      step: '06',
      title: 'Follow-Up & Replay',
      description: 'Convert attendees and no-shows into customers.',
    },
  ];

  const results = [
    { metric: '+620%', label: 'Registration Growth' },
    { metric: '68%', label: 'Attendance Rate' },
    { metric: '42%', label: 'Conversion Rate' },
    { metric: '$85k', label: 'Avg. Webinar Revenue' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Video className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Webinar Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill your webinars and convert attendees into customers with proven strategies
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Webinars Into Revenue
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Webinars are powerful tools for generating leads and sales, but success requires strategic promotion and optimization. Our webinar marketing services help you maximize registrations, boost attendance, and convert attendees into paying customers.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From creating high-converting registration pages to automated email sequences and post-webinar follow-up, we handle every aspect of webinar marketing to drive maximum ROI.
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
                  Our Webinar Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Systematic approach to filling webinars and maximizing conversions
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
                <h3 className="text-xl font-semibold mb-3">More Registrations</h3>
                <p className="text-muted-foreground">
                  Fill your webinar with qualified, interested attendees
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Attendance</h3>
                <p className="text-muted-foreground">
                  Get more registrants to actually show up and engage
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Conversions</h3>
                <p className="text-muted-foreground">
                  Turn attendees into customers with optimized follow-up
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Webinar Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Fill Your Webinars?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a webinar marketing strategy that maximizes registrations, attendance, and sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-webinar-contact">
                      Get Webinar Strategy
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
