import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Award, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingExpert() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Expert - Professional Marketing Consultation',
      'Hire an experienced digital marketing expert for strategic guidance, campaign optimization, and growth strategies. Get expert advice on SEO, PPC, social media, content marketing, and analytics.'
    );
  }, []);

  const expertise = [
    'SEO & organic growth strategy',
    'PPC campaign optimization',
    'Social media marketing',
    'Content marketing strategy',
    'Email marketing & automation',
    'Conversion rate optimization',
    'Marketing analytics & reporting',
    'Growth hacking & experimentation',
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Proven Expertise',
      description: '10+ years experience driving business growth',
    },
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'Data-driven strategies aligned with your goals',
    },
    {
      icon: TrendingUp,
      title: 'Measurable Results',
      description: 'Focus on metrics that matter to your business',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Expert Consultation</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Digital Marketing Expert
              </h1>
              <p className="text-xl text-muted-foreground">
                Get expert guidance to accelerate your digital marketing success
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Expert Marketing Guidance</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Work directly with a seasoned digital marketing expert who has helped hundreds of businesses 
                  achieve their growth goals. Get strategic advice, campaign optimization, and hands-on guidance.
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

                <h3 className="text-2xl font-bold mb-6">Areas of Expertise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {expertise.map((item, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`expertise-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="Digital Marketing Expert" />
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
