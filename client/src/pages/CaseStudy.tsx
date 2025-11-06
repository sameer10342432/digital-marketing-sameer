import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, Target, Lightbulb, TrendingUp, CheckCircle } from 'lucide-react';
import ecommerceImage from '@assets/generated_images/E-commerce_case_study_visual_0d25472d.png';
import { setPageMeta } from '@/lib/seo';

//todo: remove mock functionality
const caseStudyData = {
  id: 1,
  title: 'E-Commerce Growth Strategy',
  client: 'TechStyle Co.',
  category: 'SEO',
  industry: 'E-Commerce',
  duration: '6 Months',
  image: ecommerceImage,
  challenge: 'TechStyle Co., a growing e-commerce brand selling tech accessories, was struggling with low organic visibility despite having quality products. Their website received minimal organic traffic, and they were heavily dependent on paid advertising, resulting in high customer acquisition costs and unsustainable margins.',
  objectives: [
    'Increase organic search traffic by 200%',
    'Improve search rankings for high-intent keywords',
    'Reduce dependency on paid advertising',
    'Increase overall revenue while lowering CAC',
  ],
  strategy: {
    title: 'Our Comprehensive SEO Approach',
    description: 'We implemented a multi-faceted SEO strategy focusing on technical optimization, content development, and link building.',
    tactics: [
      {
        title: 'Technical SEO Audit & Optimization',
        points: [
          'Fixed critical crawl errors and broken links',
          'Improved site speed (reduced load time by 60%)',
          'Implemented proper schema markup for products',
          'Optimized mobile experience and Core Web Vitals',
        ],
      },
      {
        title: 'Content Strategy',
        points: [
          'Created 50+ SEO-optimized product descriptions',
          'Developed comprehensive buying guides and comparison articles',
          'Built out category pages with unique, valuable content',
          'Implemented internal linking structure for better page authority distribution',
        ],
      },
      {
        title: 'Link Building Campaign',
        points: [
          'Secured 40+ high-quality backlinks from tech publications',
          'Guest posting on industry-relevant websites',
          'Digital PR campaign resulting in features in major tech blogs',
          'Built relationships with complementary brands for link exchanges',
        ],
      },
    ],
  },
  results: {
    metrics: [
      { label: 'Organic Traffic Increase', value: '+250%', icon: TrendingUp },
      { label: 'Revenue Growth', value: '+180%', icon: TrendingUp },
      { label: 'Top 10 Rankings', value: '45 Keywords', icon: Target },
      { label: 'Conversion Rate', value: '3.2%', icon: CheckCircle },
    ],
    details: [
      'Organic traffic increased from 12,000 to 42,000 monthly visitors',
      'Achieved #1 rankings for 15 high-intent commercial keywords',
      'Reduced customer acquisition cost by 55%',
      'Organic revenue grew from $35K to $98K per month',
      'Overall conversion rate improved from 1.8% to 3.2%',
    ],
  },
  testimonial: {
    quote: 'Muhammad transformed our entire digital presence. The SEO strategy he implemented tripled our organic traffic and the ROI speaks for itself. Our business has never been healthier, and we\'re no longer hemorrhaging money on paid ads.',
    author: 'Sarah Johnson',
    role: 'CEO, TechStyle Co.',
  },
};

export default function CaseStudy() {
  const [, params] = useRoute('/portfolio/:id');

  useEffect(() => {
    setPageMeta(
      'E-Commerce Growth Case Study - 250% ROI with SEO Strategy',
      'Detailed case study showing how comprehensive SEO strategy tripled organic traffic and doubled revenue in 6 months. See proven results, metrics, and the complete marketing strategy implemented for TechStyle Co.'
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${caseStudyData.image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4">{caseStudyData.category}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {caseStudyData.title}
            </h1>
            <p className="text-xl text-muted-foreground">{caseStudyData.client}</p>
          </div>
        </section>

        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-8 group" data-testid="button-back-to-portfolio">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <Card className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Industry</p>
              <p className="text-lg font-semibold">{caseStudyData.industry}</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Service</p>
              <p className="text-lg font-semibold">{caseStudyData.category}</p>
            </Card>
            <Card className="p-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Duration</p>
              <p className="text-lg font-semibold">{caseStudyData.duration}</p>
            </Card>
          </div>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">The Challenge</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {caseStudyData.challenge}
            </p>
            <div className="bg-muted/30 p-6 rounded-xl">
              <h3 className="font-semibold mb-4">Key Objectives:</h3>
              <ul className="space-y-3">
                {caseStudyData.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{objective}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">{caseStudyData.strategy.title}</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {caseStudyData.strategy.description}
            </p>
            <div className="space-y-6">
              {caseStudyData.strategy.tactics.map((tactic, index) => (
                <Card key={index} className="p-6" data-testid={`card-tactic-${index}`}>
                  <h3 className="text-xl font-semibold mb-4">{tactic.title}</h3>
                  <ul className="space-y-3">
                    {tactic.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">The Results</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {caseStudyData.results.metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <Card key={index} className="p-6 text-center" data-testid={`card-metric-${index}`}>
                    <Icon className="h-8 w-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </Card>
                );
              })}
            </div>
            <Card className="p-6 bg-muted/30">
              <h3 className="font-semibold mb-4">Key Achievements:</h3>
              <ul className="space-y-3">
                {caseStudyData.results.details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          <section className="mb-16">
            <Card className="p-8 md:p-12 bg-primary/5 border-primary/10">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xl md:text-2xl font-serif italic mb-6 leading-relaxed">
                  "{caseStudyData.testimonial.quote}"
                </p>
                <div className="border-t pt-6">
                  <p className="font-semibold">{caseStudyData.testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{caseStudyData.testimonial.role}</p>
                </div>
              </div>
            </Card>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Similar Results?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss how data-driven marketing strategies can help you achieve your business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" data-testid="button-case-study-contact">Get In Touch</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" data-testid="button-view-more-projects">View More Projects</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
