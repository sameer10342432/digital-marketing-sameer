import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { Share2, CheckCircle, ArrowRight, Users, Heart, TrendingUp } from 'lucide-react';
import socialImage from '@assets/generated_images/Social_media_campaign_visual_941ce000.png';
import { setPageMeta } from '@/lib/seo';

export default function SocialMediaMarketing() {
  useEffect(() => {
    setPageMeta(
      'Social Media Marketing - Build Engaged Communities & Drive Sales',
      'Strategic social media marketing across Instagram, Facebook, LinkedIn, Twitter, and TikTok. Content strategy, community management, and paid campaigns. 50K+ followers in 12 months.'
    );
  }, []);
  const platforms = [
    { name: 'Instagram', focus: 'Visual storytelling and brand building' },
    { name: 'Facebook', focus: 'Community engagement and paid advertising' },
    { name: 'LinkedIn', focus: 'B2B networking and thought leadership' },
    { name: 'Twitter', focus: 'Real-time engagement and customer service' },
    { name: 'TikTok', focus: 'Viral content and younger demographics' },
    { name: 'Pinterest', focus: 'Visual discovery and product promotion' },
  ];

  const services = [
    'Social media strategy and planning',
    'Content calendar creation and management',
    'Professional content creation (graphics, videos, copy)',
    'Community management and engagement',
    'Social media advertising campaigns',
    'Influencer collaboration and partnerships',
    'Analytics tracking and reporting',
    'Crisis management and reputation monitoring',
  ];

  const process = [
    {
      step: '01',
      title: 'Audit & Strategy',
      description: 'Analyze current presence, competitor landscape, and create platform-specific strategies.',
    },
    {
      step: '02',
      title: 'Content Planning',
      description: 'Develop content calendar with diverse content types aligned to business goals.',
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Create engaging visuals, videos, and copy that resonates with your audience.',
    },
    {
      step: '04',
      title: 'Publishing & Engagement',
      description: 'Schedule posts and actively engage with your community daily.',
    },
    {
      step: '05',
      title: 'Paid Amplification',
      description: 'Boost top-performing content and run targeted ad campaigns.',
    },
    {
      step: '06',
      title: 'Analytics & Optimization',
      description: 'Track performance metrics and optimize strategy based on data insights.',
    },
  ];

  const results = [
    { metric: '50K+', label: 'Avg. Followers Gained' },
    { metric: '420%', label: 'Engagement Increase' },
    { metric: '2M+', label: 'Monthly Impressions' },
    { metric: '15%', label: 'Engagement Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${socialImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <Share2 className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Social Media Marketing
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Build engaged communities that drive brand awareness and business growth
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Turn Followers Into Customers
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Social media is more than just posting content—it's about building genuine connections with your audience and creating a community around your brand.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I develop comprehensive social media strategies that combine engaging organic content with targeted paid campaigns to build brand awareness, drive engagement, and generate real business results.
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
                  <h3 className="text-2xl font-bold mb-6">Platforms I Manage</h3>
                  <div className="space-y-4">
                    {platforms.map((platform, index) => (
                      <div key={index} className="pb-4 border-b last:border-0 last:pb-0">
                        <h4 className="font-semibold mb-1">{platform.name}</h4>
                        <p className="text-sm text-muted-foreground">{platform.focus}</p>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="mb-20">
              <Card className="p-8">
                <h3 className="text-2xl font-bold mb-6">Comprehensive Social Media Services</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  My Social Media Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to building and engaging your social media community
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
                <h3 className="text-xl font-semibold mb-3">Audience Growth</h3>
                <p className="text-muted-foreground">
                  Build a highly engaged following of your ideal customers
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <Heart className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Brand Loyalty</h3>
                <p className="text-muted-foreground">
                  Create emotional connections that turn followers into brand advocates
                </p>
              </Card>
              <Card className="p-6 text-center hover-elevate transition-all">
                <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Drive Sales</h3>
                <p className="text-muted-foreground">
                  Convert social engagement into measurable business revenue
                </p>
              </Card>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Build Your Community?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's create a social media strategy that builds genuine engagement and drives business growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-social-contact">
                      Get Strategy Session
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-social-case-studies"
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
