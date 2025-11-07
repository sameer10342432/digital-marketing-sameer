import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Smile, CheckCircle, ArrowRight, MapPin, Users, Star } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SEOForDentists() {
  useEffect(() => {
    setPageMeta(
      'SEO for Dentists - Attract More Dental Patients',
      'Specialized SEO for dental practices. Local search optimization, patient review management, and dental marketing strategies to fill your appointment book with quality patients.'
    );
  }, []);

  const features = [
    'Local dental SEO optimization',
    'Google Business Profile management',
    'Patient review generation and management',
    'Dental service page optimization',
    'Local directory listings',
    'Dental content marketing',
    'Competitor analysis',
    'Monthly performance reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Practice Analysis',
      description: 'Assess your dental practice and target patient demographics.',
    },
    {
      step: '02',
      title: 'Local SEO Setup',
      description: 'Optimize for local search and map pack rankings.',
    },
    {
      step: '03',
      title: 'Website Optimization',
      description: 'Optimize dental service pages for search visibility.',
    },
    {
      step: '04',
      title: 'Review Strategy',
      description: 'Build systematic patient review generation.',
    },
    {
      step: '05',
      title: 'Content Marketing',
      description: 'Create educational dental content.',
    },
    {
      step: '06',
      title: 'Ongoing Growth',
      description: 'Continuously improve rankings and patient acquisition.',
    },
  ];

  const results = [
    { metric: '+380%', label: 'New Patients' },
    { metric: 'Top 3', label: 'Map Rankings' },
    { metric: '4.9★', label: 'Avg. Rating' },
    { metric: '90%', label: 'Booking Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Smile className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              SEO for Dentists
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill your appointment book with quality patients through targeted dental SEO
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Be Found by Patients Who Need You
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  When people search for a dentist near them, your practice should appear first. Our specialized dental SEO services help you dominate local search results, attract quality patients, and keep your schedule full.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From optimizing your Google Business Profile to managing patient reviews and creating dental content, we provide comprehensive SEO strategies tailored specifically for dental practices.
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
                  Our Dental SEO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proven strategies to attract more quality dental patients
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
                  Rank first when patients search for dentists nearby
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">5-Star Reputation</h3>
                <p className="text-muted-foreground">
                  Build exceptional online reputation that attracts patients
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Patients</h3>
                <p className="text-muted-foreground">
                  Fill your schedule with quality patient appointments
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="SEO for Dentists" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Attract More Patients?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a dental SEO strategy that keeps your appointment book full with quality patients.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-dental-contact">
                      Get Practice Analysis
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
