import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { 
  Search, 
  Megaphone, 
  Globe, 
  Share2, 
  DollarSign, 
  FileText, 
  Mail as MailIcon, 
  Palette,
  TrendingUp,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function AllServices() {
  useEffect(() => {
    setPageMeta(
      'All Digital Marketing Services - Complete Marketing Solutions',
      'Explore our complete range of digital marketing services including SEO, PPC, social media marketing, content marketing, email marketing, and web design. Data-driven strategies that deliver measurable results and ROI.'
    );
  }, []);

  const services = [
    {
      title: 'Digital Marketing Agency',
      description: 'Full-service digital marketing solutions tailored to your business goals. Comprehensive strategies combining SEO, paid ads, content, and social media for maximum impact.',
      icon: Sparkles,
      link: '/services/digital-marketing-agency',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      title: 'Digital Marketing Services',
      description: 'End-to-end digital marketing services designed to grow your online presence, drive traffic, and increase conversions across all digital channels.',
      icon: TrendingUp,
      link: '/services/digital-marketing-services',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      title: 'SEO Services',
      description: 'Professional search engine optimization to improve rankings, drive organic traffic, and increase visibility in search results for high-value keywords.',
      icon: Search,
      link: '/services/seo-services',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      title: 'Social Media Marketing',
      description: 'Build engaged communities and drive conversions through strategic social media campaigns across Facebook, Instagram, LinkedIn, and Twitter.',
      icon: Share2,
      link: '/services/social-media-marketing',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
    {
      title: 'PPC Advertising',
      description: 'Targeted pay-per-click campaigns that maximize ROI through strategic ad placement, audience targeting, and continuous optimization.',
      icon: DollarSign,
      link: '/services/ppc-campaigns',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      title: 'Content Marketing',
      description: 'Strategic content creation and distribution to attract, engage, and convert your target audience while building brand authority.',
      icon: FileText,
      link: '/services/content-strategy',
      color: 'text-orange-500',
      bgColor: 'bg-orange-500/10',
    },
    {
      title: 'Email Marketing',
      description: 'Personalized email campaigns that nurture leads, retain customers, and drive conversions with targeted messaging and automation.',
      icon: MailIcon,
      link: '/services/email-marketing',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      title: 'Web Design Services',
      description: 'Beautiful, conversion-focused websites built with modern design principles, user experience best practices, and mobile-first approach.',
      icon: Palette,
      link: '/services/web-design-services',
      color: 'text-indigo-500',
      bgColor: 'bg-indigo-500/10',
    },
    {
      title: 'Search Engine Marketing',
      description: 'Comprehensive SEM strategies combining SEO and paid search to maximize visibility and drive qualified traffic from search engines.',
      icon: Megaphone,
      link: '/services/search-engine-marketing',
      color: 'text-cyan-500',
      bgColor: 'bg-cyan-500/10',
    },
    {
      title: 'Online Marketing Agency',
      description: 'Complete online marketing solutions integrating multiple channels and tactics to achieve your business objectives and growth targets.',
      icon: Globe,
      link: '/services/online-marketing-agency',
      color: 'text-teal-500',
      bgColor: 'bg-teal-500/10',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-gradient-to-b from-primary/5 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                All Digital Marketing Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Comprehensive marketing solutions to help your business grow. From SEO to social media, 
                we offer data-driven strategies that deliver measurable results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="p-6 hover-elevate transition-all group cursor-pointer"
                  data-testid={`card-service-${index}`}
                >
                  <Link href={service.link}>
                    <div>
                      <div className={`h-16 w-16 rounded-xl ${service.bgColor} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                        <service.icon className={`h-8 w-8 ${service.color}`} />
                      </div>
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                        Learn More
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </div>
                    </div>
                  </Link>
                </Card>
              ))}
            </div>

            <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Not Sure Which Service You Need?
                </h2>
                <p className="text-lg mb-8 opacity-90 leading-relaxed">
                  Let's discuss your business goals and create a custom marketing strategy 
                  that combines the right services for maximum impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button size="lg" variant="secondary" className="text-lg px-8 py-6" data-testid="button-contact-cta">
                      Get Free Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <Link href="/portfolio">
                    <Button
                      size="lg"
                      variant="outline"
                      className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                      data-testid="button-portfolio-cta"
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
