import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Megaphone, Search, DollarSign, Target } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SearchEngineMarketing() {
  useEffect(() => {
    setPageMeta(
      'Search Engine Marketing (SEM) - SEO & PPC Strategies',
      'Comprehensive search engine marketing services combining SEO and paid search advertising. Maximize search visibility, drive qualified traffic, and achieve top rankings with integrated SEM strategies that deliver measurable ROI.'
    );
  }, []);

  const features = [
    'Integrated SEO & PPC strategies',
    'Google Ads campaign management',
    'Bing Ads optimization',
    'Keyword research & targeting',
    'Ad copy creation & testing',
    'Landing page optimization',
    'Bid management & budgeting',
    'Comprehensive performance tracking',
  ];

  const channels = [
    {
      icon: Search,
      title: 'Organic SEO',
      description: 'Long-term rankings through optimization',
    },
    {
      icon: DollarSign,
      title: 'Paid Search',
      description: 'Immediate visibility with Google Ads',
    },
    {
      icon: Target,
      title: 'Targeting',
      description: 'Precise audience and keyword targeting',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">SEM</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Megaphone className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Search Engine Marketing
              </h1>
              <p className="text-xl text-muted-foreground">
                Maximize visibility across search engines with SEO and paid advertising
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Comprehensive SEM Solutions
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Search engine marketing combines the best of both worlds: organic SEO for long-term sustainable growth and paid search advertising for immediate visibility. This integrated approach ensures maximum presence in search results.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  I develop comprehensive SEM strategies that align SEO and PPC efforts, ensuring your brand dominates search results for high-value keywords while optimizing for maximum ROI across all channels.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {channels.map((channel, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`channel-${index}`}>
                      <channel.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{channel.title}</h4>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
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
                  <ServiceContactForm serviceName="Search Engine Marketing" />
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
