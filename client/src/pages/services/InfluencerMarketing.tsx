import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Users, CheckCircle, ArrowRight, Star, TrendingUp, Heart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function InfluencerMarketing() {
  useEffect(() => {
    setPageMeta(
      'Influencer Marketing Services - Connect with Your Audience Through Influencers',
      'Strategic influencer marketing campaigns to amplify your brand reach. Influencer discovery, partnership management, campaign execution, and performance tracking. Leverage authentic voices to drive engagement and sales.'
    );
  }, []);

  const features = [
    'Influencer discovery and vetting',
    'Campaign strategy and planning',
    'Contract negotiation and management',
    'Content creation oversight',
    'Campaign execution and monitoring',
    'Performance tracking and ROI analysis',
    'Multi-platform influencer campaigns',
    'Long-term partnership development',
  ];

  const process = [
    {
      step: '01',
      title: 'Goal Setting',
      description: 'Define campaign objectives, target audience, and success metrics.',
    },
    {
      step: '02',
      title: 'Influencer Discovery',
      description: 'Find and vet influencers that align with your brand values and audience.',
    },
    {
      step: '03',
      title: 'Campaign Strategy',
      description: 'Develop creative campaign concepts and partnership terms.',
    },
    {
      step: '04',
      title: 'Execution',
      description: 'Manage influencer relationships and oversee content creation.',
    },
    {
      step: '05',
      title: 'Amplification',
      description: 'Maximize campaign reach through paid amplification and cross-promotion.',
    },
    {
      step: '06',
      title: 'Analysis',
      description: 'Measure campaign performance and calculate ROI.',
    },
  ];

  const results = [
    { metric: '5M+', label: 'Total Reach' },
    { metric: '8.5%', label: 'Avg. Engagement' },
    { metric: '450%', label: 'ROI Achieved' },
    { metric: '25+', label: 'Partnerships' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Influencer Marketing
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Leverage trusted voices to amplify your brand and drive authentic engagement
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Why Influencer Marketing Works
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Consumers trust recommendations from people they follow more than traditional advertising. Influencer marketing taps into established trust and engaged communities.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  My strategic approach identifies the right influencers for your brand, manages authentic partnerships, and creates campaigns that drive real business results while maintaining brand integrity.
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
                  My Influencer Marketing Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  A strategic approach to building impactful influencer partnerships
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
                <Star className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Authentic Partnerships</h3>
                <p className="text-muted-foreground">
                  Work with influencers who genuinely align with your brand values
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Engaged Audiences</h3>
                <p className="text-muted-foreground">
                  Reach highly engaged communities that trust their influencer's recommendations
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Measurable Results</h3>
                <p className="text-muted-foreground">
                  Track engagement, conversions, and ROI from every influencer campaign
                </p>
              </Card>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Influencer Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Amplify Your Brand?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create an influencer marketing strategy that drives authentic engagement and sales.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-influencer-contact">
                      Get Strategy Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-influencer-portfolio"
                    >
                      View Campaigns
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
