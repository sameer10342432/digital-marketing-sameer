import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Award, Briefcase } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function WhiteLabelSEO() {
  useEffect(() => {
    setPageMeta(
      'White Label SEO Services - SEO for Agencies & Resellers',
      'Professional white label SEO services for agencies, resellers, and consultants. Fully branded SEO campaigns, reports, and deliverables under your agency name. Scale your service offerings without hiring.'
    );
  }, []);

  const services = [
    'Complete white label SEO campaigns',
    'Branded reporting & deliverables',
    'Technical SEO audits & fixes',
    'Content creation & optimization',
    'Link building campaigns',
    'Local SEO services',
    'Client portal access (optional)',
    'Dedicated account manager',
  ];

  const benefits = [
    {
      icon: Briefcase,
      title: 'Your Brand',
      description: 'All work delivered under your agency branding',
    },
    {
      icon: Users,
      title: 'Scale Easily',
      description: 'Handle more clients without hiring staff',
    },
    {
      icon: Award,
      title: 'Expert Execution',
      description: 'Professional SEO from experienced specialists',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">White Label</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                White Label SEO Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Expert SEO services delivered under your agency brand
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Partner with SEO Experts</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  White label SEO allows you to offer professional SEO services without building an in-house team. 
                  We handle all the work while you maintain the client relationship and branding.
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

                <h3 className="text-2xl font-bold mb-6">White Label SEO Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`service-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="White Label SEO" />
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
