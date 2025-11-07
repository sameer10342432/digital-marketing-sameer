import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Award, CheckCircle, ArrowRight, Users, Target, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function BestSEOAgency() {
  useEffect(() => {
    setPageMeta(
      'Best SEO Agency - Award-Winning Search Engine Optimization Services',
      'Partner with the best SEO agency for proven results. Award-winning search engine optimization services, expert SEO strategies, and transparent reporting. Top-rated SEO company with a track record of success.'
    );
  }, []);

  const features = [
    'Award-winning SEO strategies and execution',
    'Expert SEO team with proven track record',
    'Advanced keyword research and competitor analysis',
    'Technical SEO audits and implementation',
    'High-authority link building campaigns',
    'Content optimization for rankings and conversions',
    'Regular strategy reviews and refinement',
    'Transparent reporting and communication',
  ];

  const process = [
    {
      step: '01',
      title: 'Deep Discovery',
      description: 'Comprehensive analysis of your business, market, and SEO opportunities.',
    },
    {
      step: '02',
      title: 'Expert Strategy',
      description: 'Custom SEO roadmap based on industry best practices and your goals.',
    },
    {
      step: '03',
      title: 'Technical Excellence',
      description: 'Fix technical issues and optimize site architecture for search engines.',
    },
    {
      step: '04',
      title: 'Content Mastery',
      description: 'Create and optimize content that ranks and converts visitors.',
    },
    {
      step: '05',
      title: 'Authority Building',
      description: 'Build high-quality backlinks from authoritative, relevant websites.',
    },
    {
      step: '06',
      title: 'Continuous Excellence',
      description: 'Ongoing optimization, testing, and improvement for sustained growth.',
    },
  ];

  const results = [
    { metric: '#1', label: 'Industry Rankings' },
    { metric: '520%', label: 'Average Traffic Growth' },
    { metric: '4.9/5', label: 'Client Rating' },
    { metric: '250+', label: 'Success Stories' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Best SEO Agency
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Award-winning SEO services that deliver exceptional results and ROI
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  What Makes Us the Best SEO Agency
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Being the best means delivering exceptional results consistently. My SEO agency has helped hundreds of businesses achieve top rankings, massive traffic growth, and significant revenue increases.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I combine cutting-edge SEO techniques, transparent communication, and a relentless focus on ROI to help businesses dominate search results. My data-driven approach and commitment to excellence set me apart as a leading SEO agency.
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
                  My Best-in-Class SEO Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A proven methodology that delivers consistent, exceptional results
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
                <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
                <p className="text-muted-foreground">
                  Experienced SEO professionals with a proven track record of success
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Target className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Custom Strategies</h3>
                <p className="text-muted-foreground">
                  Tailored SEO strategies designed for your specific business and goals
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Exceptional Results</h3>
                <p className="text-muted-foreground">
                  Consistently delivering top rankings, traffic growth, and revenue increases
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Best SEO Agency" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Work With the Best?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Partner with an award-winning SEO agency that delivers exceptional results and ROI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-best-seo-contact">
                      Get Free SEO Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-best-seo-portfolio"
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
