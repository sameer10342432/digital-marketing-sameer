import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Search, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function KeywordResearchServices() {
  useEffect(() => {
    setPageMeta(
      'Keyword Research Services - Find High-Value SEO Keywords',
      'Professional keyword research services to identify high-value search terms for your business. Competitor analysis, search intent mapping, and keyword opportunity identification for maximum SEO impact.'
    );
  }, []);

  const services = [
    'In-depth keyword discovery',
    'Search volume & difficulty analysis',
    'Competitor keyword analysis',
    'Search intent mapping',
    'Long-tail keyword opportunities',
    'Keyword gap analysis',
    'Content topic clustering',
    'Keyword prioritization roadmap',
  ];

  const deliverables = [
    {
      icon: Search,
      title: 'Keyword List',
      description: 'Comprehensive list of high-value keywords with metrics',
    },
    {
      icon: Target,
      title: 'Strategy Document',
      description: 'Keyword targeting strategy aligned with business goals',
    },
    {
      icon: TrendingUp,
      title: 'Opportunity Report',
      description: 'Quick-win opportunities and long-term keyword targets',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Keyword Research</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Keyword Research Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Discover the keywords that will drive qualified traffic and revenue
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Strategic Keyword Research</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Effective SEO starts with targeting the right keywords. Our keyword research services identify 
                  high-value opportunities that align with your business goals and customer search behavior.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {deliverables.map((item, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`deliverable-${index}`}>
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">What's Included</h3>
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
                  <ServiceContactForm serviceName="Keyword Research Services" />
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
