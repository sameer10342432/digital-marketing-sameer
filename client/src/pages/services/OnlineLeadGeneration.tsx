import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Users, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OnlineLeadGeneration() {
  useEffect(() => {
    setPageMeta(
      'Online Lead Generation Services - Generate Quality Leads',
      'Professional online lead generation services using multi-channel strategies. PPC, SEO, content marketing, landing page optimization, and lead nurturing to fill your sales pipeline with qualified leads.'
    );
  }, []);

  const services = [
    'Multi-channel lead generation strategy',
    'Landing page design & optimization',
    'Lead magnet creation',
    'PPC campaigns for lead gen',
    'SEO for lead generation',
    'Content marketing & downloads',
    'Email lead nurturing sequences',
    'Lead tracking & analytics',
  ];

  const channels = [
    {
      icon: Target,
      title: 'Paid Advertising',
      description: 'PPC campaigns optimized for lead generation',
    },
    {
      icon: TrendingUp,
      title: 'Organic Search',
      description: 'SEO content that attracts and converts leads',
    },
    {
      icon: Users,
      title: 'Content Marketing',
      description: 'Valuable resources that generate qualified leads',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Lead Generation</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Online Lead Generation Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Fill your sales pipeline with high-quality, qualified leads
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Strategic Lead Generation</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  We use proven multi-channel strategies to generate qualified leads for your business. 
                  From optimized landing pages to targeted campaigns, we deliver leads ready to convert into customers.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {channels.map((channel, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`channel-${index}`}>
                      <channel.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{channel.title}</h3>
                      <p className="text-sm text-muted-foreground">{channel.description}</p>
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
                  <ServiceContactForm serviceName="Online Lead Generation" />
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
