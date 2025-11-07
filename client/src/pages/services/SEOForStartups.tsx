import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Rocket, TrendingUp, Target } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SEOForStartups() {
  useEffect(() => {
    setPageMeta(
      'SEO for Startups - Scale Your Startup with Strategic SEO',
      'Specialized SEO services for startups and early-stage companies. Growth-focused strategies, technical SEO, content marketing, and link building to establish online presence and acquire customers cost-effectively.'
    );
  }, []);

  const features = [
    'Startup-focused SEO strategy',
    'Technical SEO foundation',
    'Keyword research for product-market fit',
    'Content marketing for growth',
    'Competitive analysis',
    'Link building & PR outreach',
    'Performance tracking & analytics',
    'Scalable SEO processes',
  ];

  const benefits = [
    {
      icon: Rocket,
      title: 'Fast Growth',
      description: 'SEO strategies designed for rapid startup growth',
    },
    {
      icon: Target,
      title: 'Product-Market Fit',
      description: 'Target the right keywords for your ideal customers',
    },
    {
      icon: TrendingUp,
      title: 'Cost-Effective',
      description: 'Acquire customers at a fraction of paid advertising cost',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Startup SEO</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Rocket className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SEO for Startups
              </h1>
              <p className="text-xl text-muted-foreground">
                Scale your startup with strategic SEO that drives sustainable growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">SEO Built for Startup Growth</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Startups need different SEO strategies than established companies. We focus on rapid growth, 
                  cost-effective customer acquisition, and building a strong organic foundation for long-term success.
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

                <h3 className="text-2xl font-bold mb-6">What We Offer</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="SEO for Startups" />
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
