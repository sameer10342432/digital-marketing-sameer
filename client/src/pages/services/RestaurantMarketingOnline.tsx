import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { UtensilsCrossed, CheckCircle, ArrowRight, MapPin, Users, Star } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function RestaurantMarketingOnline() {
  useEffect(() => {
    setPageMeta(
      'Restaurant Marketing Online - Fill More Tables & Increase Orders',
      'Digital marketing for restaurants to increase foot traffic, online orders, and reservations. Local SEO, Google My Business, social media, and review management to grow your restaurant.'
    );
  }, []);

  const features = [
    'Local SEO for restaurant visibility',
    'Google Business Profile optimization',
    'Online ordering and delivery platform marketing',
    'Social media content and engagement',
    'Review management and reputation',
    'Menu optimization for search',
    'Paid advertising for local reach',
    'Email marketing for regular customers',
  ];

  const process = [
    {
      step: '01',
      title: 'Restaurant Assessment',
      description: 'Understand your cuisine, target diners, and local market.',
    },
    {
      step: '02',
      title: 'Local SEO Setup',
      description: 'Optimize for local search and map visibility.',
    },
    {
      step: '03',
      title: 'Reputation Building',
      description: 'Build and manage online reviews and ratings.',
    },
    {
      step: '04',
      title: 'Social Media',
      description: 'Create engaging food content and build following.',
    },
    {
      step: '05',
      title: 'Paid Campaigns',
      description: 'Launch targeted ads for local reach.',
    },
    {
      step: '06',
      title: 'Loyalty Programs',
      description: 'Build customer loyalty and repeat business.',
    },
  ];

  const results = [
    { metric: '+280%', label: 'Online Orders' },
    { metric: '4.8★', label: 'Avg. Rating' },
    { metric: '65%', label: 'More Reservations' },
    { metric: '3x', label: 'Social Engagement' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <UtensilsCrossed className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Restaurant Marketing Online
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Fill more tables and increase online orders with targeted restaurant marketing
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Be Found by Hungry Diners
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  When potential customers search for restaurants nearby, your establishment should appear first. Our specialized restaurant marketing services help you dominate local search, build a strong online reputation, and fill more tables.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  From optimizing your Google Business Profile to managing reviews and creating mouth-watering social media content, we provide comprehensive digital marketing tailored for restaurants.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {results.map((result, index) => (
                    <div key={index} className="text-center p-4 bg-muted/30 rounded-lg" data-testid={`stat-${index}`}>
                      <div className="text-3xl font-bold text-primary mb-1">{result.metric}</div>
                      <div className="text-sm text-muted-foreground">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Card className="p-8">
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
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Our Restaurant Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proven strategies to increase foot traffic and online orders
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((item, index) => (
                  <Card key={index} className="p-6" data-testid={`process-${index}`}>
                    <div className="text-4xl font-bold text-primary/20 mb-4">{item.step}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </Card>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              <Card className="p-6 text-center hover-elevate transition-all">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Visibility</h3>
                <p className="text-muted-foreground">
                  Appear first when diners search for restaurants nearby
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Reviews</h3>
                <p className="text-muted-foreground">
                  Build strong online reputation that attracts customers
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Customers</h3>
                <p className="text-muted-foreground">
                  Fill tables and increase online orders consistently
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Restaurant Marketing Online" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Fill More Tables?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a marketing strategy that brings more diners to your restaurant.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-restaurant-contact">
                      Get Marketing Plan
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
