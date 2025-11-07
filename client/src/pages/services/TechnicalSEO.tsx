import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Settings, Zap, Shield } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function TechnicalSEO() {
  useEffect(() => {
    setPageMeta(
      'Technical SEO Services - Fix Technical Issues & Improve Performance',
      'Professional technical SEO services including site speed optimization, Core Web Vitals, mobile optimization, crawlability, indexing, structured data, and technical audit implementation.'
    );
  }, []);

  const services = [
    'Site speed & Core Web Vitals optimization',
    'Mobile-first optimization',
    'Crawlability & indexability analysis',
    'XML sitemap optimization',
    'Robots.txt configuration',
    'Structured data (Schema) implementation',
    'Canonical tag implementation',
    'HTTPS & security optimization',
  ];

  const areas = [
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast page loads and Core Web Vitals',
    },
    {
      icon: Settings,
      title: 'Infrastructure',
      description: 'Proper site architecture and crawlability',
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'HTTPS, security headers, and best practices',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Technical SEO</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Settings className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Technical SEO Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Fix technical issues and build a solid SEO foundation
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Technical SEO That Works</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Technical SEO ensures search engines can properly crawl, index, and understand your website. 
                  We fix technical issues, optimize performance, and implement best practices for maximum visibility.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {areas.map((area, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`area-${index}`}>
                      <area.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{area.title}</h3>
                      <p className="text-sm text-muted-foreground">{area.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Technical SEO Services</h3>
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
                  <ServiceContactForm serviceName="Technical SEO" />
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
