import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Sparkles, CheckCircle, ArrowRight, Users, MapPin, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingAgencyUSA() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Agency USA - Leading US Marketing Services',
      'Top-rated digital marketing agency in USA. Full-service marketing solutions for American businesses including SEO, PPC, social media, and content marketing. US-based experts delivering proven results.'
    );
  }, []);

  const features = [
    'US-based digital marketing team',
    'Comprehensive SEO services for US markets',
    'PPC advertising on Google and social platforms',
    'Social media marketing and management',
    'Content marketing for US audiences',
    'Email marketing and automation',
    'Web design and development services',
    'Data-driven marketing analytics',
  ];

  const process = [
    {
      step: '01',
      title: 'Business Assessment',
      description: 'Understand your business goals, target market, and competitive landscape in the USA.',
    },
    {
      step: '02',
      title: 'Marketing Strategy',
      description: 'Develop a comprehensive digital marketing plan tailored for US audiences.',
    },
    {
      step: '03',
      title: 'Multi-Channel Setup',
      description: 'Establish your presence across key digital marketing channels.',
    },
    {
      step: '04',
      title: 'Campaign Execution',
      description: 'Launch integrated campaigns across SEO, PPC, social, and content channels.',
    },
    {
      step: '05',
      title: 'Performance Tracking',
      description: 'Monitor results with advanced analytics and detailed reporting.',
    },
    {
      step: '06',
      title: 'Continuous Improvement',
      description: 'Optimize campaigns based on data to maximize ROI and business growth.',
    },
  ];

  const results = [
    { metric: '380%', label: 'Avg Revenue Growth' },
    { metric: '6.8x', label: 'Marketing ROI' },
    { metric: '500+', label: 'US Clients Served' },
    { metric: '92%', label: 'Client Retention Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Sparkles className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Digital Marketing Agency USA
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Leading digital marketing agency serving businesses across the United States
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Partner With a US Digital Marketing Agency
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  American businesses need marketing partners who understand the US market dynamics, consumer behavior, and competitive landscape. Local expertise makes all the difference.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a leading digital marketing agency in the USA, I deliver data-driven strategies, integrated campaigns, and measurable results that help American businesses thrive online and achieve sustainable growth.
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
                  My Digital Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A comprehensive approach built for the American market
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
                <h3 className="text-xl font-semibold mb-3">US-Based Team</h3>
                <p className="text-muted-foreground">
                  American marketing experts who understand your audience and market
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local Expertise</h3>
                <p className="text-muted-foreground">
                  Deep knowledge of US consumer behavior and regional market dynamics
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                <p className="text-muted-foreground">
                  Track record of success helping US businesses grow online
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital Marketing Agency USA" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Grow Your US Business Online?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Partner with a trusted digital marketing agency that understands the American market.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-dm-usa-contact">
                      Get Free Marketing Assessment
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-dm-usa-portfolio"
                    >
                      View US Client Results
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
