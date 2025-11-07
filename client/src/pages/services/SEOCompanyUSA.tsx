import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Search, CheckCircle, ArrowRight, Users, MapPin, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SEOCompanyUSA() {
  useEffect(() => {
    setPageMeta(
      'SEO Company USA - Top US-Based Search Engine Optimization Services',
      'Leading SEO company in USA with proven results. Professional search engine optimization services for US businesses. Local expertise, national reach, and Google-compliant strategies that deliver rankings and traffic.'
    );
  }, []);

  const features = [
    'US-based SEO experts with local market knowledge',
    'Comprehensive keyword research for US markets',
    'On-page SEO optimization and technical audits',
    'High-quality USA-based link building',
    'Local SEO for multi-location businesses',
    'Content strategy tailored for US audiences',
    'E-commerce SEO for US online stores',
    'Transparent reporting and ROI tracking',
  ];

  const process = [
    {
      step: '01',
      title: 'US Market Analysis',
      description: 'Analyze your industry, competitors, and target markets across the USA.',
    },
    {
      step: '02',
      title: 'Keyword Strategy',
      description: 'Identify high-value keywords with strong commercial intent for US searches.',
    },
    {
      step: '03',
      title: 'On-Page Optimization',
      description: 'Optimize your website structure, content, and technical elements for Google.',
    },
    {
      step: '04',
      title: 'Content Creation',
      description: 'Develop high-quality content that resonates with US audiences and ranks well.',
    },
    {
      step: '05',
      title: 'Link Building',
      description: 'Build authoritative backlinks from trusted US-based websites.',
    },
    {
      step: '06',
      title: 'Continuous Growth',
      description: 'Monitor rankings, traffic, and conversions while expanding your SEO footprint.',
    },
  ];

  const results = [
    { metric: '425%', label: 'Organic Traffic Increase' },
    { metric: '#1', label: 'Page 1 Rankings' },
    { metric: '85%', label: 'More Qualified Leads' },
    { metric: '98%', label: 'US Client Satisfaction' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Search className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                SEO Company USA
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Trusted US-based SEO services that deliver rankings, traffic, and revenue growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Choose a US-Based SEO Company
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Working with a US-based SEO company means partnering with experts who understand the American market, search behavior, and business landscape. Local expertise delivers better results.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  As a leading SEO company in the USA, I combine deep knowledge of US search trends, Google-compliant strategies, and proven optimization techniques to help American businesses dominate search results and grow their online presence.
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
                  My US SEO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Proven strategies tailored for success in US search markets
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
                <h3 className="text-xl font-semibold mb-3">US Market Expertise</h3>
                <p className="text-muted-foreground">
                  Deep understanding of American search behavior and business landscape
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Local & National SEO</h3>
                <p className="text-muted-foreground">
                  Optimize for local markets and national visibility across the USA
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
                <p className="text-muted-foreground">
                  Hundreds of successful SEO campaigns for US businesses
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="SEO Company USA" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Rank Higher in US Search Results?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Partner with a trusted US-based SEO company that delivers real results for American businesses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-seo-usa-contact">
                      Get Free SEO Analysis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-seo-usa-portfolio"
                    >
                      View Success Stories
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
