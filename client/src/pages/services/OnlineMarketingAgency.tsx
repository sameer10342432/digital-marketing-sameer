import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Globe, Layers, Users, BarChart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OnlineMarketingAgency() {
  useEffect(() => {
    setPageMeta(
      'Online Marketing Agency - Integrated Digital Marketing Solutions',
      'Full-service online marketing agency specializing in integrated multi-channel strategies. Expert services across SEO, paid advertising, social media, email marketing, and analytics to drive growth and achieve business objectives.'
    );
  }, []);

  const features = [
    'Multi-channel marketing strategies',
    'Brand development & positioning',
    'Integrated campaign management',
    'Digital advertising across platforms',
    'Social media & community building',
    'Email marketing & automation',
    'Content marketing & creation',
    'Analytics & performance optimization',
  ];

  const advantages = [
    {
      icon: Layers,
      title: 'Integrated Approach',
      description: 'All marketing channels working in harmony',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Specialists across every digital discipline',
    },
    {
      icon: BarChart,
      title: 'Data-Driven',
      description: 'Decisions backed by analytics and insights',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Full-Service Agency</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Online Marketing Agency
              </h1>
              <p className="text-xl text-muted-foreground">
                Complete online marketing solutions for ambitious businesses
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Full-Service Online Marketing
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a full-service online marketing agency, I provide comprehensive solutions that integrate all aspects of digital marketing. From strategy and planning to execution and optimization, every channel is coordinated to achieve your business objectives.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With expertise spanning SEO, paid advertising, social media, content marketing, and email campaigns, I deliver holistic strategies that maximize ROI and drive sustainable business growth.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {advantages.map((advantage, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`advantage-${index}`}>
                      <advantage.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{advantage.title}</h4>
                      <p className="text-sm text-muted-foreground">{advantage.description}</p>
                    </Card>
                  ))}
                </div>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ServiceContactForm serviceName="Online Marketing Agency" />
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
