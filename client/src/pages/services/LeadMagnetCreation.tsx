import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Gift, CheckCircle, ArrowRight, Users, TrendingUp, Target } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LeadMagnetCreation() {
  useEffect(() => {
    setPageMeta(
      'Lead Magnet Creation - Build Your Email List & Generate Leads',
      'Create irresistible lead magnets that attract your ideal customers. Strategic lead generation assets that build email lists, capture qualified leads, and drive business growth.'
    );
  }, []);

  const features = [
    'Lead magnet ideation and strategy',
    'High-value content creation',
    'Landing page design and optimization',
    'Email opt-in form integration',
    'Delivery automation setup',
    'Lead nurture sequence development',
    'A/B testing and optimization',
    'Performance tracking and reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Audience Research',
      description: 'Identify ideal customer pain points and desires.',
    },
    {
      step: '02',
      title: 'Magnet Strategy',
      description: 'Design lead magnet that solves specific problem.',
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Create high-value, professional lead magnet.',
    },
    {
      step: '04',
      title: 'Landing Page',
      description: 'Build conversion-optimized opt-in page.',
    },
    {
      step: '05',
      title: 'Automation Setup',
      description: 'Configure delivery and nurture sequences.',
    },
    {
      step: '06',
      title: 'Promote & Optimize',
      description: 'Drive traffic and continuously improve conversion.',
    },
  ];

  const results = [
    { metric: '+580%', label: 'List Growth' },
    { metric: '52%', label: 'Conversion Rate' },
    { metric: '3.8x', label: 'Lead Quality' },
    { metric: '68%', label: 'Email Open Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Gift className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Lead Magnet Creation
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create irresistible offers that build your list and generate qualified leads
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Visitors Into Subscribers
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your email list is one of your most valuable business assets. Our lead magnet creation services help you build that list with high-converting offers that attract your ideal customers and position you as an authority.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From ebooks and checklists to templates and training videos, we create professional lead magnets that provide real value and convert visitors into engaged subscribers ready to hear from you.
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
                  Our Lead Magnet Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to creating lead magnets that convert
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
                <h3 className="text-xl font-semibold mb-3">Grow Your List</h3>
                <p className="text-muted-foreground">
                  Build email list with qualified subscribers
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Leads</h3>
                <p className="text-muted-foreground">
                  Attract ideal customers who want your solution
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Build Authority</h3>
                <p className="text-muted-foreground">
                  Establish expertise through valuable content
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Lead Magnet Creation" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your Email List?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a lead magnet that attracts your ideal customers and grows your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-leadmagnet-contact">
                      Get Lead Magnet Strategy
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
