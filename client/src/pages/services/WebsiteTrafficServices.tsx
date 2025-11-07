import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { TrendingUp, CheckCircle, ArrowRight, Users, BarChart, Target } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function WebsiteTrafficServices() {
  useEffect(() => {
    setPageMeta(
      'Website Traffic Services - Drive More Qualified Visitors to Your Site',
      'Increase website traffic through strategic SEO, content marketing, and paid campaigns. Drive qualified visitors who convert into customers with our proven traffic generation strategies.'
    );
  }, []);

  const features = [
    'Comprehensive SEO strategy for organic traffic',
    'Targeted PPC campaigns for instant visitors',
    'Content marketing to attract ideal audience',
    'Social media traffic generation',
    'Email marketing campaigns',
    'Influencer partnerships and collaborations',
    'Traffic analysis and optimization',
    'Conversion rate optimization',
  ];

  const process = [
    {
      step: '01',
      title: 'Traffic Audit',
      description: 'Analyze current traffic sources and identify opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create multi-channel strategy for sustainable traffic growth.',
    },
    {
      step: '03',
      title: 'SEO Implementation',
      description: 'Optimize website for search engines and organic discovery.',
    },
    {
      step: '04',
      title: 'Paid Campaigns',
      description: 'Launch targeted ads for immediate traffic boost.',
    },
    {
      step: '05',
      title: 'Content Marketing',
      description: 'Create valuable content that attracts and engages visitors.',
    },
    {
      step: '06',
      title: 'Optimization',
      description: 'Continuously improve traffic quality and conversion rates.',
    },
  ];

  const results = [
    { metric: '+300%', label: 'Traffic Increase' },
    { metric: '45%', label: 'Organic Growth' },
    { metric: '2.8x', label: 'Better Quality' },
    { metric: '60%', label: 'Lower CPA' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Website Traffic Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Drive more qualified visitors to your website and turn traffic into revenue
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  More Traffic, Better Results
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  More website traffic means more opportunities to convert visitors into customers. Our comprehensive traffic generation strategies combine SEO, paid advertising, content marketing, and social media to drive qualified visitors who are ready to engage with your brand.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We don't just focus on increasing numbers—we prioritize quality traffic that converts. Every strategy is designed to attract your ideal customers and drive measurable business growth.
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
                  Our Traffic Generation Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Data-driven strategies to attract and convert qualified visitors
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
                <h3 className="text-xl font-semibold mb-3">Quality Visitors</h3>
                <p className="text-muted-foreground">
                  Attract the right audience who are interested in your products
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Data-Driven</h3>
                <p className="text-muted-foreground">
                  Make decisions based on analytics and performance data
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Conversion Focus</h3>
                <p className="text-muted-foreground">
                  Optimize for actions that matter to your business goals
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Website Traffic Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Increase Your Website Traffic?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a comprehensive traffic strategy that drives qualified visitors and measurable results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-traffic-contact">
                      Get Traffic Strategy
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
