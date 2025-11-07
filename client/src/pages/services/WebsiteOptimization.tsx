import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Zap, CheckCircle, ArrowRight, Gauge, TrendingUp, Search } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function WebsiteOptimization() {
  useEffect(() => {
    setPageMeta(
      'Website Optimization Services - Improve Speed, Performance & SEO',
      'Professional website optimization services to improve page speed, user experience, and search rankings. Technical SEO, performance optimization, mobile responsiveness, and conversion improvements for better results.'
    );
  }, []);

  const features = [
    'Page speed optimization and performance',
    'Mobile responsiveness and optimization',
    'Technical SEO improvements',
    'Core Web Vitals optimization',
    'Image and code optimization',
    'Database and server optimization',
    'Security and SSL implementation',
    'Ongoing monitoring and maintenance',
  ];

  const process = [
    {
      step: '01',
      title: 'Website Audit',
      description: 'Comprehensive analysis of performance, speed, SEO, and user experience issues.',
    },
    {
      step: '02',
      title: 'Priority Analysis',
      description: 'Identify critical issues impacting performance and business goals.',
    },
    {
      step: '03',
      title: 'Speed Optimization',
      description: 'Optimize images, code, caching, and server response times.',
    },
    {
      step: '04',
      title: 'Technical SEO',
      description: 'Fix crawl errors, improve site structure, and implement schema markup.',
    },
    {
      step: '05',
      title: 'Mobile Optimization',
      description: 'Ensure perfect mobile experience and responsive design.',
    },
    {
      step: '06',
      title: 'Monitor & Maintain',
      description: 'Ongoing monitoring and optimization for sustained performance.',
    },
  ];

  const results = [
    { metric: '3.2s', label: 'Avg. Load Time' },
    { metric: '85%', label: 'Faster Performance' },
    { metric: '95+', label: 'PageSpeed Score' },
    { metric: '180%', label: 'Traffic Increase' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Website Optimization
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Boost website speed, performance, and rankings with expert optimization
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Website Optimization Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  A slow website costs you customers and search rankings. Every second of delay can decrease conversions by 7% and increase bounce rates. Google prioritizes fast, optimized websites in search results.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My website optimization approach combines technical expertise, performance improvements, and SEO best practices to deliver faster loading times, better user experience, and higher search rankings that drive business growth.
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
                  My Optimization Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A systematic approach to improving website performance and results
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
                <Gauge className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                <p className="text-muted-foreground">
                  Improve page load times for better user experience and conversions
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Search className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Better Rankings</h3>
                <p className="text-muted-foreground">
                  Boost search engine rankings with technical SEO improvements
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">More Conversions</h3>
                <p className="text-muted-foreground">
                  Increase sales and leads with faster, optimized user experience
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Website Optimization" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Optimize Your Website?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's improve your website's performance, speed, and search rankings for better business results.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-optimization-contact">
                      Get Free Website Audit
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-optimization-portfolio"
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
