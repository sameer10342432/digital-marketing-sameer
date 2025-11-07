import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { RefreshCcw, CheckCircle, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function RemarketingCampaigns() {
  useEffect(() => {
    setPageMeta(
      'Remarketing Campaigns - Retargeting Ads That Convert Visitors',
      'Expert remarketing and retargeting campaign management. Re-engage website visitors across Google, Facebook, and display networks. Convert interested prospects into customers with strategic remarketing.'
    );
  }, []);

  const features = [
    'Google Ads remarketing campaigns',
    'Facebook and Instagram retargeting',
    'Dynamic product remarketing for e-commerce',
    'Cross-platform audience building',
    'Customer list and email remarketing',
    'Video remarketing on YouTube',
    'Sequential messaging campaigns',
    'Conversion tracking and attribution',
  ];

  const process = [
    {
      step: '01',
      title: 'Audience Segmentation',
      description: 'Create detailed audience segments based on user behavior and engagement.',
    },
    {
      step: '02',
      title: 'Pixel & Tag Setup',
      description: 'Install tracking pixels and configure audience building across platforms.',
    },
    {
      step: '03',
      title: 'Creative Strategy',
      description: 'Design personalized ads tailored to each audience segment.',
    },
    {
      step: '04',
      title: 'Campaign Launch',
      description: 'Deploy remarketing campaigns across multiple advertising platforms.',
    },
    {
      step: '05',
      title: 'Frequency Management',
      description: 'Optimize ad frequency to stay top-of-mind without overwhelming users.',
    },
    {
      step: '06',
      title: 'Conversion Optimization',
      description: 'Continuously refine campaigns to maximize conversion rates and ROI.',
    },
  ];

  const results = [
    { metric: '12x', label: 'Higher Conversion Rate' },
    { metric: '76%', label: 'Lower CPA' },
    { metric: '8.5x', label: 'Average ROAS' },
    { metric: '4M+', label: 'Remarketing Impressions' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <RefreshCcw className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Remarketing Campaigns
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Re-engage interested visitors and convert them into customers with strategic remarketing
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Remarketing Works
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Only 2% of website visitors convert on their first visit. Remarketing keeps your brand in front of interested prospects, bringing them back when they're ready to buy.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My remarketing approach uses strategic audience segmentation, personalized messaging, and cross-platform campaigns to re-engage warm leads and drive conversions at a fraction of the cost of new customer acquisition.
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
                  My Remarketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A data-driven system for converting warm leads into customers
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
                <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Warm Audiences</h3>
                <p className="text-muted-foreground">
                  Target people who already know your brand and have shown interest
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Precise Targeting</h3>
                <p className="text-muted-foreground">
                  Segment audiences by behavior and deliver personalized messages
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">High ROI</h3>
                <p className="text-muted-foreground">
                  Lower costs and higher conversions compared to cold traffic campaigns
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Remarketing Campaigns" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Convert More Visitors?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create remarketing campaigns that bring back interested prospects and drive conversions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-remarketing-contact">
                      Get Free Campaign Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-remarketing-portfolio"
                    >
                      View Case Studies
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
