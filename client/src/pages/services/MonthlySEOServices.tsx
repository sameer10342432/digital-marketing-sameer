import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Calendar, TrendingUp, BarChart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function MonthlySEOServices() {
  useEffect(() => {
    setPageMeta(
      'Monthly SEO Services - Ongoing SEO Management & Optimization',
      'Affordable monthly SEO services with ongoing optimization, content creation, link building, and performance tracking. Flexible monthly plans to continuously improve your search rankings and organic traffic.'
    );
  }, []);

  const monthlyServices = [
    'Ongoing keyword research & optimization',
    'Monthly content creation & publishing',
    'Continuous link building',
    'Technical SEO monitoring & fixes',
    'Competitor analysis & tracking',
    'Monthly performance reports',
    'Google Analytics & Search Console monitoring',
    'Strategy adjustments & recommendations',
  ];

  const benefits = [
    {
      icon: Calendar,
      title: 'Consistent Growth',
      description: 'Continuous optimization for sustained improvement',
    },
    {
      icon: TrendingUp,
      title: 'Scalable Results',
      description: 'Build momentum month over month',
    },
    {
      icon: BarChart,
      title: 'Full Transparency',
      description: 'Detailed monthly reports on all activities',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Monthly SEO</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Monthly SEO Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Ongoing SEO management to grow your organic traffic every month
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Continuous SEO Improvement</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  SEO is not a one-time project—it requires ongoing effort. Our monthly SEO services provide 
                  continuous optimization, content creation, and monitoring to steadily improve your search rankings.
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

                <h3 className="text-2xl font-bold mb-6">What's Included Each Month</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {monthlyServices.map((service, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`service-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="Monthly SEO Services" />
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
