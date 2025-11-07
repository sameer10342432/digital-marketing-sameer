import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Linkedin, CheckCircle, ArrowRight, Building2, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LinkedInAdvertising() {
  useEffect(() => {
    setPageMeta(
      'LinkedIn Advertising Services - B2B Lead Generation & Brand Awareness',
      'Professional LinkedIn advertising services for B2B marketing. Sponsored content, InMail campaigns, lead generation, and account-based marketing to reach decision-makers and drive quality leads.'
    );
  }, []);

  const features = [
    'LinkedIn campaign strategy and planning',
    'Sponsored content and text ads',
    'LinkedIn InMail campaigns',
    'Lead generation forms and tracking',
    'Account-based marketing (ABM) campaigns',
    'Audience targeting and segmentation',
    'A/B testing and optimization',
    'Detailed analytics and ROI reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Target Audience',
      description: 'Identify and segment your ideal B2B audience using LinkedIn\'s professional targeting.',
    },
    {
      step: '02',
      title: 'Campaign Strategy',
      description: 'Develop a LinkedIn advertising strategy aligned with your business objectives.',
    },
    {
      step: '03',
      title: 'Creative Development',
      description: 'Create professional ad content that resonates with decision-makers.',
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Set up tracking, audiences, and launch campaigns with optimal settings.',
    },
    {
      step: '05',
      title: 'Optimize Performance',
      description: 'Monitor and refine campaigns to improve lead quality and lower costs.',
    },
    {
      step: '06',
      title: 'Scale & Grow',
      description: 'Expand successful campaigns and increase reach to qualified prospects.',
    },
  ];

  const results = [
    { metric: '4x', label: 'Better Lead Quality' },
    { metric: '65%', label: 'Lower CPL' },
    { metric: '250+', label: 'Qualified Leads/Month' },
    { metric: '6.5%', label: 'Avg. CTR' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Linkedin className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                LinkedIn Advertising
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Reach decision-makers and generate high-quality B2B leads with LinkedIn ads
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why LinkedIn Advertising for B2B
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  LinkedIn is the world's largest professional network with over 900 million users, making it the ideal platform for B2B marketing, lead generation, and reaching key decision-makers.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My LinkedIn advertising approach leverages precise professional targeting, compelling content, and strategic campaign management to deliver high-quality leads that convert into customers.
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
                  My LinkedIn Advertising Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A data-driven approach to B2B lead generation on LinkedIn
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
                <Building2 className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Professional Network</h3>
                <p className="text-muted-foreground">
                  Access 900M+ professionals and decision-makers in your industry
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precision Targeting</h3>
                <p className="text-muted-foreground">
                  Target by job title, company, industry, skills, and seniority level
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Leads</h3>
                <p className="text-muted-foreground">
                  Generate high-quality B2B leads that convert into customers
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="LinkedIn Advertising" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Generate Quality B2B Leads?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a LinkedIn advertising strategy that connects you with decision-makers and drives business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-linkedin-contact">
                      Get Free Strategy Call
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-linkedin-portfolio"
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
