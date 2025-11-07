import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Cloud, Users, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SaaSMarketingAgency() {
  useEffect(() => {
    setPageMeta(
      'SaaS Marketing Agency - Grow Your Software Business',
      'Specialized SaaS marketing agency focused on customer acquisition, retention, and revenue growth. Expert in product-led growth, freemium models, trial optimization, and reducing churn for SaaS companies.'
    );
  }, []);

  const services = [
    'SaaS SEO & content marketing',
    'Product-led growth strategies',
    'Free trial optimization',
    'Onboarding & activation campaigns',
    'Customer retention programs',
    'Churn reduction strategies',
    'Referral & viral loops',
    'SaaS metrics tracking & optimization',
  ];

  const expertise = [
    {
      icon: Cloud,
      title: 'SaaS Expertise',
      description: 'Deep understanding of SaaS business models',
    },
    {
      icon: Users,
      title: 'Customer Lifecycle',
      description: 'Optimize acquisition, activation, and retention',
    },
    {
      icon: TrendingUp,
      title: 'MRR Growth',
      description: 'Focus on metrics that drive recurring revenue',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">SaaS Marketing</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Cloud className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SaaS Marketing Agency
              </h1>
              <p className="text-xl text-muted-foreground">
                Specialized marketing for SaaS companies looking to scale
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Expert SaaS Marketing</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  SaaS marketing requires a unique approach. We understand product-led growth, subscription models, 
                  and the metrics that matter—from MRR to LTV to churn. Our strategies are built for SaaS success.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {expertise.map((item, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`expertise-${index}`}>
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">SaaS Marketing Services</h3>
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
                  <ServiceContactForm serviceName="SaaS Marketing Agency" />
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
