import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { GraduationCap, CheckCircle, ArrowRight, Users, TrendingUp, DollarSign } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OnlineCourseMarketing() {
  useEffect(() => {
    setPageMeta(
      'Online Course Marketing - Sell More Courses & Grow Revenue',
      'Marketing strategies to launch and scale online courses. Student acquisition, course launch campaigns, evergreen funnels, and strategies to maximize course sales and revenue.'
    );
  }, []);

  const features = [
    'Course launch campaign strategy',
    'Evergreen funnel development',
    'Email marketing automation',
    'Student acquisition ads',
    'Landing page optimization',
    'Affiliate program setup',
    'Content marketing for course topics',
    'Student testimonial management',
  ];

  const process = [
    {
      step: '01',
      title: 'Course Positioning',
      description: 'Define unique value and target student persona.',
    },
    {
      step: '02',
      title: 'Launch Strategy',
      description: 'Create comprehensive course launch plan.',
    },
    {
      step: '03',
      title: 'Funnel Development',
      description: 'Build conversion-optimized sales funnel.',
    },
    {
      step: '04',
      title: 'Campaign Execution',
      description: 'Launch multi-channel marketing campaigns.',
    },
    {
      step: '05',
      title: 'Evergreen Automation',
      description: 'Set up automated evergreen funnel.',
    },
    {
      step: '06',
      title: 'Scale & Optimize',
      description: 'Continuously improve enrollment and revenue.',
    },
  ];

  const results = [
    { metric: '+520%', label: 'Course Sales' },
    { metric: '45%', label: 'Conversion Rate' },
    { metric: '$12k+', label: 'Avg. Launch Revenue' },
    { metric: '4.2x', label: 'Student Growth' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Online Course Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Launch and scale your online courses with proven marketing strategies
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Your Expertise Into Revenue
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Creating a great course is just the beginning. Our specialized course marketing strategies help you attract the right students, maximize enrollments, and build a sustainable online education business.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From high-converting course launches to evergreen funnels that sell 24/7, we provide complete marketing solutions to turn your knowledge into consistent revenue streams.
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
                  Our Course Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proven strategies to maximize course enrollments and revenue
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
                <h3 className="text-xl font-semibold mb-3">More Students</h3>
                <p className="text-muted-foreground">
                  Attract qualified students eager to learn from you
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher Conversions</h3>
                <p className="text-muted-foreground">
                  Optimize funnels to turn visitors into paying students
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <DollarSign className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Recurring Revenue</h3>
                <p className="text-muted-foreground">
                  Build evergreen systems that sell courses automatically
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Online Course Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Scale Your Course Sales?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a marketing strategy that fills your courses and maximizes your online education revenue.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-course-contact">
                      Get Launch Strategy
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
