import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { Search, CheckCircle, ArrowRight, TrendingUp, Target, BarChart } from 'lucide-react';
import seoImage from '@assets/generated_images/SEO_project_visual_b20d6e80.png';
import { setPageMeta } from '@/lib/seo';

export default function SEOOptimization() {
  useEffect(() => {
    setPageMeta(
      'SEO Optimization Services - Rank Higher & Drive Organic Traffic',
      'Professional SEO services to dominate search rankings. Comprehensive keyword research, technical audits, on-page/off-page optimization, and link building. Average 250% traffic increase within 6 months.'
    );
  }, []);
  const features = [
    'Comprehensive keyword research and competitor analysis',
    'Technical SEO audits and optimization',
    'On-page SEO (meta tags, headers, content optimization)',
    'Off-page SEO and strategic link building',
    'Local SEO for geographic targeting',
    'SEO content creation and optimization',
    'Google Search Console and Analytics setup',
    'Monthly reporting with actionable insights',
  ];

  const process = [
    {
      step: '01',
      title: 'SEO Audit',
      description: 'Comprehensive analysis of your current SEO performance, technical issues, and opportunities.',
    },
    {
      step: '02',
      title: 'Keyword Research',
      description: 'In-depth keyword research to identify high-value opportunities aligned with business goals.',
    },
    {
      step: '03',
      title: 'On-Page Optimization',
      description: 'Optimize content, meta tags, headers, and internal linking for target keywords.',
    },
    {
      step: '04',
      title: 'Technical SEO',
      description: 'Fix technical issues, improve site speed, mobile optimization, and structured data.',
    },
    {
      step: '05',
      title: 'Link Building',
      description: 'Strategic outreach and content marketing to earn high-quality backlinks.',
    },
    {
      step: '06',
      title: 'Monitor & Optimize',
      description: 'Continuous monitoring, testing, and optimization based on performance data.',
    },
  ];

  const results = [
    { metric: '+250%', label: 'Avg. Traffic Increase' },
    { metric: '6 Months', label: 'To See Major Results' },
    { metric: 'Top 10', label: 'Rankings Achieved' },
    { metric: '3.5x', label: 'ROI on Average' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${seoImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              SEO Optimization Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dominate search rankings and drive qualified organic traffic that converts
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why SEO Matters for Your Business
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  SEO is the foundation of sustainable digital growth. Unlike paid advertising, organic rankings provide long-term visibility and continuous traffic without ongoing ad spend.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My comprehensive SEO strategies combine technical optimization, high-quality content, and strategic link building to improve your search rankings and drive qualified traffic that converts.
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
                  My SEO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven, step-by-step approach to achieving and maintaining top search rankings
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
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Increased Traffic</h3>
                <p className="text-muted-foreground">
                  Drive 200-300% more organic visitors to your website within 6 months
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Rankings</h3>
                <p className="text-muted-foreground">
                  Achieve top 10 rankings for high-intent keywords in your industry
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <BarChart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Higher ROI</h3>
                <p className="text-muted-foreground">
                  Generate sustainable revenue with lower customer acquisition costs
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="SEO Optimization" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Dominate Search Rankings?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's discuss how a comprehensive SEO strategy can drive organic growth for your business.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-seo-contact">
                      Get Free SEO Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-seo-case-studies"
                    >
                      View SEO Case Studies
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
