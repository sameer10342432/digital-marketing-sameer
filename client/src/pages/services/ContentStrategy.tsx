import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { FileText, CheckCircle, ArrowRight, BookOpen, Video, Image as ImageIcon } from 'lucide-react';
import blogImage from '@assets/generated_images/Content_marketing_blog_image_555c248e.png';
import { setPageMeta } from '@/lib/seo';

export default function ContentStrategy() {
  useEffect(() => {
    setPageMeta(
      'Content Marketing Strategy - Create Content That Attracts & Converts',
      'Strategic content marketing services including blog writing, video scripts, infographics, case studies, and whitepapers. SEO-optimized content that drives traffic and generates leads. 10K+ views per piece.'
    );
  }, []);
  const contentTypes = [
    {
      icon: BookOpen,
      title: 'Blog Content',
      description: 'SEO-optimized articles that attract and educate your audience',
    },
    {
      icon: Video,
      title: 'Video Scripts',
      description: 'Compelling scripts for YouTube, social media, and promotional videos',
    },
    {
      icon: ImageIcon,
      title: 'Infographics',
      description: 'Visual content that simplifies complex information',
    },
    {
      icon: FileText,
      title: 'Case Studies',
      description: 'Data-driven success stories that build trust and credibility',
    },
    {
      icon: BookOpen,
      title: 'Whitepapers & Ebooks',
      description: 'In-depth resources for lead generation and thought leadership',
    },
    {
      icon: FileText,
      title: 'Landing Pages',
      description: 'Conversion-focused copy that turns visitors into customers',
    },
  ];

  const services = [
    'Content strategy and planning',
    'Audience research and persona development',
    'Content calendar creation',
    'SEO-optimized blog writing',
    'Video script and storyboard development',
    'Social media content creation',
    'Email newsletter writing',
    'Content distribution and promotion',
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'Understand your audience, goals, and competitive landscape through comprehensive research.',
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Create a content roadmap aligned with business objectives and audience needs.',
    },
    {
      step: '03',
      title: 'Content Creation',
      description: 'Produce high-quality, engaging content across chosen formats and channels.',
    },
    {
      step: '04',
      title: 'SEO Optimization',
      description: 'Optimize all content for search engines while maintaining readability.',
    },
    {
      step: '05',
      title: 'Distribution',
      description: 'Publish and promote content across relevant channels for maximum reach.',
    },
    {
      step: '06',
      title: 'Analysis & Refinement',
      description: 'Track performance metrics and refine strategy based on data insights.',
    },
  ];

  const results = [
    { metric: '10K+', label: 'Avg. Views Per Post' },
    { metric: '200+', label: 'Leads Per Month' },
    { metric: '5x', label: 'Organic Traffic' },
    { metric: '65%', label: 'Engagement Rate' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${blogImage})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <FileText className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Content Marketing Strategy
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Create compelling content that attracts, engages, and converts your target audience
            </p>
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Content That Drives Results
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Great content is the foundation of modern marketing. It attracts organic traffic, establishes thought leadership, nurtures leads, and drives conversions—all while building trust with your audience.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  I develop comprehensive content strategies that align with your business goals, creating valuable content that resonates with your target audience and drives measurable results.
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
                    {services.map((service, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{service}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Content Formats I Create
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Diverse content types to engage your audience across all touchpoints
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {contentTypes.map((type, index) => {
                  const Icon = type.icon;
                  return (
                    <Card key={index} className="p-6 hover-elevate transition-all" data-testid={`content-type-${index}`}>
                      <Icon className="h-10 w-10 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">{type.title}</h3>
                      <p className="text-sm text-muted-foreground">{type.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  My Content Process
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Strategic approach to creating content that delivers business results
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

            <div className="bg-muted/30 rounded-2xl p-8 md:p-12 mb-20">
              <h2 className="text-3xl font-bold mb-6 text-center">Why Content Marketing Works</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-4">3x</div>
                  <p className="text-muted-foreground">Content marketing generates 3x more leads than traditional marketing at 62% less cost</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-4">70%</div>
                  <p className="text-muted-foreground">70% of consumers prefer learning about a company through articles rather than ads</p>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-4">82%</div>
                  <p className="text-muted-foreground">82% of marketers actively use content marketing as a core strategy</p>
                </div>
              </div>
            </div>

            <div className="mb-20">
              <div className="max-w-3xl mx-auto">
                <ServiceContactForm serviceName="Content Marketing" />
              </div>
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Create Content That Converts?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's develop a content strategy that establishes your brand as an industry leader and drives sustainable growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-content-contact">
                      Get Content Strategy
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-content-case-studies"
                    >
                      View Content Results
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
