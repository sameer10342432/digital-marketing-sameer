import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Heart, CheckCircle, ArrowRight, Users, Shield, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function HealthcareDigitalMarketing() {
  useEffect(() => {
    setPageMeta(
      'Healthcare Digital Marketing - Patient Acquisition & Practice Growth',
      'HIPAA-compliant digital marketing for healthcare providers. Attract new patients, improve online reputation, and grow your medical practice with ethical, results-driven marketing strategies.'
    );
  }, []);

  const features = [
    'HIPAA-compliant marketing strategies',
    'Medical SEO and local search optimization',
    'Patient review management',
    'Healthcare content marketing',
    'Medical PPC advertising',
    'Practice website optimization',
    'Social media for healthcare providers',
    'Patient retention campaigns',
  ];

  const process = [
    {
      step: '01',
      title: 'Practice Assessment',
      description: 'Understand your specialty, target patients, and goals.',
    },
    {
      step: '02',
      title: 'Compliance Review',
      description: 'Ensure all marketing adheres to HIPAA regulations.',
    },
    {
      step: '03',
      title: 'Local SEO Setup',
      description: 'Optimize for local patient search and discovery.',
    },
    {
      step: '04',
      title: 'Content Strategy',
      description: 'Create educational, patient-focused content.',
    },
    {
      step: '05',
      title: 'Reputation Building',
      description: 'Build and manage online patient reviews.',
    },
    {
      step: '06',
      title: 'Growth Optimization',
      description: 'Continuously improve patient acquisition.',
    },
  ];

  const results = [
    { metric: '+275%', label: 'New Patients' },
    { metric: '4.8★', label: 'Avg. Rating' },
    { metric: '85%', label: 'Appointment Fill Rate' },
    { metric: '3.2x', label: 'Practice Growth' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Healthcare Digital Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Attract more patients and grow your medical practice with compliant, ethical marketing
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Grow Your Practice the Right Way
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Healthcare marketing requires a special approach that balances patient acquisition with strict compliance requirements. Our HIPAA-compliant strategies help you attract new patients, build trust, and grow your practice ethically.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From local SEO that puts you in front of patients searching for care to reputation management that builds credibility, we provide comprehensive digital marketing tailored specifically for healthcare providers.
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
                  Our Healthcare Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Compliant, effective strategies to grow your medical practice
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
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">HIPAA Compliant</h3>
                <p className="text-muted-foreground">
                  All marketing strategies adhere to healthcare regulations
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Patients</h3>
                <p className="text-muted-foreground">
                  Attract qualified patients actively seeking care
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Practice Growth</h3>
                <p className="text-muted-foreground">
                  Build sustainable growth for your medical practice
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Healthcare Digital Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your Practice?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a HIPAA-compliant marketing strategy that attracts new patients and grows your healthcare practice.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-healthcare-contact">
                      Get Practice Assessment
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
