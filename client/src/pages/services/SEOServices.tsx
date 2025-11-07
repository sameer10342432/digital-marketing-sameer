import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Search, TrendingUp, FileSearch, Link2 } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SEOServices() {
  useEffect(() => {
    setPageMeta(
      'SEO Services - Professional Search Engine Optimization',
      'Expert SEO services to improve search rankings and drive organic traffic. Comprehensive keyword research, technical SEO, on-page optimization, link building, and local SEO to achieve top 10 rankings and 250%+ traffic growth.'
    );
  }, []);

  const features = [
    'Comprehensive SEO audit',
    'Keyword research & strategy',
    'Technical SEO optimization',
    'On-page SEO optimization',
    'Off-page SEO & link building',
    'Local SEO optimization',
    'Content optimization',
    'Monthly reporting & analysis',
  ];

  const process = [
    {
      icon: FileSearch,
      title: 'SEO Audit',
      description: 'Complete analysis of your website\'s current SEO performance',
    },
    {
      icon: Search,
      title: 'Keyword Research',
      description: 'Identify high-value keywords for your business',
    },
    {
      icon: TrendingUp,
      title: 'Optimization',
      description: 'Implement on-page and technical improvements',
    },
    {
      icon: Link2,
      title: 'Link Building',
      description: 'Build authoritative backlinks to boost rankings',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Search Engine Optimization</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SEO Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Rank higher in search results and drive qualified organic traffic
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Professional SEO Services
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My SEO services help businesses improve their search engine rankings and drive organic traffic that converts. With comprehensive keyword research, technical optimization, and strategic link building, I deliver sustainable growth in search visibility.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Unlike quick fixes, my approach focuses on long-term results through white-hat techniques that comply with search engine guidelines and deliver lasting improvements.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  {process.map((step, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`process-${index}`}>
                      <step.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{step.title}</h4>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
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
                  <ServiceContactForm serviceName="SEO Services" />
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
