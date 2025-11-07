import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Building, Users, Target } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function B2BDigitalMarketing() {
  useEffect(() => {
    setPageMeta(
      'B2B Digital Marketing Services - Generate Quality Business Leads',
      'Specialized B2B digital marketing services to generate qualified business leads. LinkedIn advertising, B2B SEO, account-based marketing, content marketing, and lead nurturing for complex sales cycles.'
    );
  }, []);

  const services = [
    'B2B SEO & content marketing',
    'LinkedIn advertising & outreach',
    'Account-based marketing (ABM)',
    'B2B lead generation campaigns',
    'Marketing automation & CRM',
    'Whitepapers & case studies',
    'Webinar marketing',
    'Sales enablement content',
  ];

  const approach = [
    {
      icon: Building,
      title: 'B2B Expertise',
      description: 'Deep understanding of complex B2B sales cycles',
    },
    {
      icon: Users,
      title: 'Decision Makers',
      description: 'Target C-level and key decision makers',
    },
    {
      icon: Target,
      title: 'Quality Leads',
      description: 'Focus on high-value accounts and qualified leads',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">B2B Marketing</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                B2B Digital Marketing
              </h1>
              <p className="text-xl text-muted-foreground">
                Generate qualified business leads and shorten your sales cycle
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Strategic B2B Marketing</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  B2B marketing requires a different approach than B2C. We understand complex buying committees, 
                  long sales cycles, and the content needed to move prospects through the funnel.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {approach.map((item, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`approach-${index}`}>
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">B2B Marketing Services</h3>
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
                  <ServiceContactForm serviceName="B2B Digital Marketing" />
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
