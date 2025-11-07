import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Sparkles, Target, Users, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingAgency() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Agency - Full-Service Marketing Solutions',
      'Premier digital marketing agency offering comprehensive marketing solutions. Expert services in SEO, PPC, social media, content marketing, and analytics to drive business growth and achieve 250%+ ROI.'
    );
  }, []);

  const features = [
    'Full-service digital marketing strategy',
    'Multi-channel campaign management',
    'SEO and content marketing',
    'Paid advertising (PPC, social ads)',
    'Social media management',
    'Email marketing automation',
    'Analytics and performance tracking',
    'Conversion rate optimization',
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Data-driven strategies aligned with your business goals',
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Dedicated specialists across all marketing disciplines',
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Track record of delivering 250%+ ROI for clients',
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
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Digital Marketing Agency
              </h1>
              <p className="text-xl text-muted-foreground">
                Your complete digital marketing partner for sustainable business growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Full-Service Marketing Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a full-service digital marketing agency, I provide comprehensive solutions that integrate all aspects of your online presence. From strategy development to execution and optimization, every marketing channel works together to achieve your business goals.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  With proven expertise across SEO, paid advertising, social media, content marketing, and email campaigns, I deliver data-driven strategies that consistently outperform industry benchmarks.
                </p>
                
                <Card className="p-8 mb-8">
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

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`benefit-${index}`}>
                      <benefit.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{benefit.title}</h4>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ServiceContactForm serviceName="Digital Marketing Agency" />
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
