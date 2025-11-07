import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Scale, CheckCircle, ArrowRight, MapPin, Users, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LawFirmSEO() {
  useEffect(() => {
    setPageMeta(
      'Law Firm SEO - Attract More Quality Legal Clients',
      'Specialized SEO for law firms and attorneys. Local SEO, practice area optimization, and ethical marketing strategies to attract high-value legal clients and grow your firm.'
    );
  }, []);

  const features = [
    'Local SEO for law firms',
    'Practice area page optimization',
    'Google Business Profile management',
    'Legal directory listings and citations',
    'Content marketing for attorneys',
    'Review management and reputation',
    'Competitive legal market analysis',
    'Ethical compliance and advertising rules',
  ];

  const process = [
    {
      step: '01',
      title: 'Firm Assessment',
      description: 'Analyze your practice areas and target client demographics.',
    },
    {
      step: '02',
      title: 'Market Research',
      description: 'Study competitive legal market in your jurisdiction.',
    },
    {
      step: '03',
      title: 'Local SEO Setup',
      description: 'Optimize for local search and map rankings.',
    },
    {
      step: '04',
      title: 'Content Strategy',
      description: 'Create authoritative legal content that ranks.',
    },
    {
      step: '05',
      title: 'Citation Building',
      description: 'Build presence on legal directories.',
    },
    {
      step: '06',
      title: 'Ongoing Optimization',
      description: 'Continuously improve rankings and lead quality.',
    },
  ];

  const results = [
    { metric: '+340%', label: 'Quality Leads' },
    { metric: 'Page 1', label: 'Practice Rankings' },
    { metric: '3.8x', label: 'Client Acquisition' },
    { metric: '4.7★', label: 'Avg. Rating' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Scale className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Law Firm SEO
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Attract high-value legal clients through ethical, compliant SEO strategies
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Be Found by Clients Who Need You
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  When potential clients search for legal help, your firm should appear first. Our specialized law firm SEO services help attorneys rank higher in local search, attract qualified leads, and grow their practice—all while maintaining ethical compliance.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From optimizing practice area pages to building authoritative legal content and managing your online reputation, we provide comprehensive SEO strategies tailored specifically for law firms.
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
                  Our Law Firm SEO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Ethical, compliant strategies to attract quality legal clients
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
                <h3 className="text-xl font-semibold mb-3">Local Dominance</h3>
                <p className="text-muted-foreground">
                  Rank first when clients search for attorneys in your area
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Clients</h3>
                <p className="text-muted-foreground">
                  Attract motivated clients ready to hire legal services
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Grow Your Practice</h3>
                <p className="text-muted-foreground">
                  Expand your client base and increase case volume
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Law Firm SEO" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Attract More Legal Clients?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create an ethical SEO strategy that puts your law firm in front of clients who need your services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-lawfirm-contact">
                      Get SEO Analysis
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
