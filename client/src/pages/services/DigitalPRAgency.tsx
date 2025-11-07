import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Megaphone, CheckCircle, ArrowRight, Newspaper, Award, TrendingUp } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function DigitalPRAgency() {
  useEffect(() => {
    setPageMeta(
      'Digital PR Agency - Earn Media Coverage & Brand Authority',
      'Build brand awareness and earn high-quality backlinks through strategic digital PR campaigns. Media outreach, press release distribution, and journalist relationships that amplify your brand story.'
    );
  }, []);

  const features = [
    'Strategic media outreach and relationship building',
    'Press release creation and distribution',
    'Journalist and influencer targeting',
    'High-authority backlink acquisition',
    'Brand mention monitoring and tracking',
    'Crisis communication management',
    'Thought leadership positioning',
    'Comprehensive PR performance reporting',
  ];

  const process = [
    {
      step: '01',
      title: 'Brand Analysis',
      description: 'Deep dive into your brand story, values, and unique selling points.',
    },
    {
      step: '02',
      title: 'Media Strategy',
      description: 'Develop targeted PR strategy and identify key publications.',
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Craft compelling press releases and newsworthy content.',
    },
    {
      step: '04',
      title: 'Outreach Campaign',
      description: 'Pitch to journalists, bloggers, and industry publications.',
    },
    {
      step: '05',
      title: 'Placement Secured',
      description: 'Secure media coverage and high-authority backlinks.',
    },
    {
      step: '06',
      title: 'Amplification',
      description: 'Maximize reach through social media and content distribution.',
    },
  ];

  const results = [
    { metric: '150+', label: 'Media Outlets' },
    { metric: '85%', label: 'Placement Rate' },
    { metric: 'DR 70+', label: 'Avg. Site Authority' },
    { metric: '3x', label: 'Brand Visibility' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Megaphone className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Digital PR Agency
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Amplify your brand story and earn authoritative media coverage that builds trust
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Earn Media Coverage That Matters
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Digital PR is more than press releases—it's about building meaningful relationships with journalists and earning coverage in publications your audience trusts. Our strategic approach combines traditional PR tactics with modern digital marketing.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We help you tell your brand story in a way that resonates with media outlets, earns high-quality backlinks, and drives measurable business results through increased brand authority and visibility.
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
                  Our Digital PR Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic media outreach that earns coverage and builds brand authority
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
                <Newspaper className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Media Coverage</h3>
                <p className="text-muted-foreground">
                  Earn features in top-tier publications and industry media
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Authority</h3>
                <p className="text-muted-foreground">
                  Build trust and credibility through authoritative mentions
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Quality Backlinks</h3>
                <p className="text-muted-foreground">
                  Acquire high-authority links that boost SEO performance
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Digital PR Agency" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Amplify Your Brand Story?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a digital PR strategy that earns media coverage and builds lasting brand authority.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-pr-contact">
                      Start Your PR Campaign
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
