import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Link as LinkIcon, CheckCircle, ArrowRight, Award, TrendingUp, Globe } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function LinkBuilding() {
  useEffect(() => {
    setPageMeta(
      'Link Building Services - Build High-Quality Backlinks',
      'Professional link building services to boost your domain authority and search rankings. White-hat strategies including guest posting, digital PR, broken link building, and content outreach. Earn quality backlinks from authoritative sites.'
    );
  }, []);

  const features = [
    'High-authority backlink acquisition',
    'Guest posting on relevant industry sites',
    'Digital PR and media outreach',
    'Broken link building opportunities',
    'Resource page link building',
    'Content-driven link attraction',
    'Competitor backlink analysis',
    'Toxic link audit and cleanup',
  ];

  const process = [
    {
      step: '01',
      title: 'Backlink Audit',
      description: 'Analyze your current backlink profile and identify opportunities.',
    },
    {
      step: '02',
      title: 'Strategy Planning',
      description: 'Develop a customized link building strategy for your industry.',
    },
    {
      step: '03',
      title: 'Prospect Research',
      description: 'Identify high-quality, relevant websites for link opportunities.',
    },
    {
      step: '04',
      title: 'Content Creation',
      description: 'Create valuable content that naturally attracts backlinks.',
    },
    {
      step: '05',
      title: 'Outreach & Placement',
      description: 'Build relationships and secure placements on authoritative sites.',
    },
    {
      step: '06',
      title: 'Monitor & Report',
      description: 'Track new backlinks and measure impact on rankings.',
    },
  ];

  const results = [
    { metric: '150+', label: 'Quality Backlinks' },
    { metric: '+45', label: 'Domain Authority' },
    { metric: '200%', label: 'Traffic Increase' },
    { metric: 'Top 5', label: 'Keyword Rankings' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <LinkIcon className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Link Building Services
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Earn high-quality backlinks to boost authority and search rankings
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Link Building Is Essential
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Backlinks remain one of Google's top ranking factors. Quality links from authoritative websites signal trust and relevance, directly improving your search visibility.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My white-hat link building approach focuses on earning natural, high-quality backlinks through valuable content, strategic outreach, and building genuine relationships in your industry.
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
                  My Link Building Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A strategic, white-hat approach to earning high-quality backlinks
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
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Over Quantity</h3>
                <p className="text-muted-foreground">
                  Focus on high-authority, relevant backlinks that actually move the needle
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">White-Hat Only</h3>
                <p className="text-muted-foreground">
                  100% safe, manual link building that follows Google's guidelines
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Measurable Impact</h3>
                <p className="text-muted-foreground">
                  Track domain authority growth and improved rankings over time
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Link Building Services" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your Authority?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a strategic link building campaign to boost your search rankings.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-linkbuilding-contact">
                      Get Free Backlink Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-linkbuilding-portfolio"
                    >
                      View Results
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
