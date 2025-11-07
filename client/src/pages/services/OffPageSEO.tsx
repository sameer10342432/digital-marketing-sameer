import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Link, Users, Award } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OffPageSEO() {
  useEffect(() => {
    setPageMeta(
      'Off-Page SEO Services - Build Authority & Trust',
      'Professional off-page SEO services including link building, brand mentions, social signals, and digital PR. Improve domain authority and search rankings with ethical off-page optimization strategies.'
    );
  }, []);

  const services = [
    'High-quality backlink acquisition',
    'Digital PR & media outreach',
    'Brand mention building',
    'Social media signals',
    'Influencer collaborations',
    'Guest posting & content syndication',
    'Forum & community engagement',
    'Online reputation management',
  ];

  const strategies = [
    {
      icon: Link,
      title: 'Link Building',
      description: 'Earn authoritative backlinks from relevant websites',
    },
    {
      icon: Users,
      title: 'Brand Awareness',
      description: 'Build brand mentions and social signals',
    },
    {
      icon: Award,
      title: 'Authority',
      description: 'Establish your site as an industry authority',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Off-Page SEO</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Link className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Off-Page SEO Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Build authority, trust, and rankings beyond your website
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Strategic Off-Page Optimization</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Off-page SEO builds your website's authority and reputation across the internet. Through strategic 
                  link building, brand mentions, and digital PR, we help you earn the trust of search engines and users.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {strategies.map((strategy, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`strategy-${index}`}>
                      <strategy.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{strategy.title}</h3>
                      <p className="text-sm text-muted-foreground">{strategy.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Our Off-Page SEO Services</h3>
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
                  <ServiceContactForm serviceName="Off-Page SEO" />
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
