import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Package, DollarSign, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingPackages() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Packages - Affordable All-in-One Solutions',
      'Comprehensive digital marketing packages for businesses of all sizes. Bundled services including SEO, PPC, social media, and content marketing at competitive pricing. Choose the package that fits your needs and budget.'
    );
  }, []);

  const packages = [
    {
      name: 'Starter',
      features: ['Basic SEO optimization', 'Social media setup', 'Monthly reporting', 'Email support'],
    },
    {
      name: 'Growth',
      features: ['Advanced SEO', 'PPC management', 'Social media marketing', 'Content creation', 'Weekly reporting'],
    },
    {
      name: 'Enterprise',
      features: ['Complete SEO suite', 'Multi-channel PPC', 'Full social media management', 'Content marketing', 'Dedicated account manager', 'Daily monitoring'],
    },
  ];

  const benefits = [
    {
      icon: Package,
      title: 'All-in-One',
      description: 'Complete marketing services in one package',
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective',
      description: 'Save money with bundled services',
    },
    {
      icon: Zap,
      title: 'Fast Results',
      description: 'Multi-channel approach for quick wins',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Marketing Packages</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Package className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Digital Marketing Packages
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive marketing solutions designed for your budget
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">All-in-One Marketing Solutions</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our marketing packages bundle the services you need at prices that fit your budget. 
                  From startups to enterprises, we have a package designed to drive your business growth.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`benefit-${index}`}>
                      <benefit.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Our Packages</h3>
                {packages.map((pkg, index) => (
                  <Card key={index} className="p-6 mb-6" data-testid={`package-${index}`}>
                    <h4 className="text-xl font-semibold mb-4">{pkg.name} Package</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {pkg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </Card>
                ))}
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="Digital Marketing Packages" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
