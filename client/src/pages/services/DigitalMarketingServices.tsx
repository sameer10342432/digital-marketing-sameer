import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, TrendingUp, BarChart, Globe, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingServices() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Services - Complete Online Marketing Solutions',
      'Comprehensive digital marketing services to grow your business online. Expert SEO, PPC management, social media marketing, content creation, and email campaigns that drive traffic, leads, and sales with proven ROI.'
    );
  }, []);

  const services = [
    'Search engine optimization (SEO)',
    'Pay-per-click advertising (PPC)',
    'Social media marketing',
    'Content marketing & creation',
    'Email marketing campaigns',
    'Conversion rate optimization',
    'Marketing automation',
    'Analytics & reporting',
  ];

  const results = [
    { metric: '250%+', label: 'Average ROI', icon: TrendingUp },
    { metric: '3.5x', label: 'Traffic Growth', icon: BarChart },
    { metric: '100+', label: 'Happy Clients', icon: Globe },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Complete Solutions</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Digital Marketing Services
              </h1>
              <p className="text-xl text-muted-foreground">
                End-to-end marketing services to accelerate your business growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Complete Digital Marketing Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My digital marketing services cover every aspect of your online presence. Whether you need to improve search rankings, drive paid traffic, engage on social media, or nurture leads through email, I provide integrated solutions that work together seamlessly.
                </p>
                
                <div className="grid grid-cols-3 gap-6 mb-8">
                  {results.map((result, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`stat-${index}`}>
                      <result.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                    </Card>
                  ))}
                </div>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">Services Included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ServiceContactForm serviceName="Digital Marketing Services" />
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
