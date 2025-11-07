import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Link2, Award, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function BacklinkBuilding() {
  useEffect(() => {
    setPageMeta(
      'Backlink Building Services - High-Quality SEO Link Building',
      'Professional backlink building services to improve domain authority and search rankings. White-hat link building strategies including content outreach, guest posting, digital PR, and broken link building.'
    );
  }, []);

  const strategies = [
    'Content marketing & outreach',
    'Guest posting on authority sites',
    'Digital PR & media coverage',
    'Broken link building',
    'Resource page link building',
    'Competitor backlink analysis',
    'Link reclamation',
    'Niche directory submissions',
  ];

  const benefits = [
    {
      icon: Link2,
      title: 'Quality Links',
      description: 'High-authority backlinks from relevant websites',
    },
    {
      icon: Award,
      title: 'White-Hat Only',
      description: 'Ethical strategies that comply with Google guidelines',
    },
    {
      icon: TrendingUp,
      title: 'Sustainable Growth',
      description: 'Build long-term authority and rankings',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Link Building</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Link2 className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Backlink Building Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Build high-quality backlinks that boost authority and search rankings
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Ethical Link Building That Works</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Quality backlinks are essential for SEO success. We use white-hat link building strategies 
                  to earn high-authority backlinks that improve your domain authority and search rankings.
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

                <h3 className="text-2xl font-bold mb-6">Link Building Strategies</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {strategies.map((strategy, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`strategy-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{strategy}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="Backlink Building" />
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
