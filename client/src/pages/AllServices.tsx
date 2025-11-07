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
  ArrowRight,
  Target,
  MapPin,
  ShoppingCart,
  Link as LinkIcon,
  Users,
  Video,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Zap,
  Shield,
  Smartphone,
  RefreshCcw,
  Layers,
  Award
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
      title: 'SEO Optimization',
      description: 'Dominate search rankings and drive qualified organic traffic through comprehensive keyword research, technical optimization, and strategic link building.',
      icon: Search,
      link: '/services/seo-optimization',
      color: 'text-emerald-500',
      bgColor: 'bg-emerald-500/10',
    },
    {
      title: 'Local SEO Services',
      description: 'Boost visibility in local search results with Google Business Profile optimization, local citations, and geo-targeted strategies to attract nearby customers.',
      icon: MapPin,
      link: '/services/local-seo',
      color: 'text-rose-500',
      bgColor: 'bg-rose-500/10',
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
      title: 'Facebook Advertising',
      description: 'Reach billions of users with targeted Facebook and Instagram ad campaigns. Advanced audience targeting, creative optimization, and conversion tracking.',
      icon: Facebook,
      link: '/services/facebook-advertising',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
    },
    {
      title: 'Google Ads Management',
      description: 'Professional Google Ads campaigns that drive qualified leads and maximize ROI through strategic keyword bidding, ad copy testing, and conversion optimization.',
      icon: Search,
      link: '/services/google-ads-management',
      color: 'text-amber-500',
      bgColor: 'bg-amber-500/10',
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
      title: 'Conversion Rate Optimization',
      description: 'Turn more visitors into customers with data-driven CRO strategies. A/B testing, user experience optimization, and systematic improvements.',
      icon: Target,
      link: '/services/conversion-optimization',
      color: 'text-violet-500',
      bgColor: 'bg-violet-500/10',
    },
    {
      title: 'E-commerce Marketing',
      description: 'Complete marketing solutions for online stores. Product page SEO, Google Shopping ads, email campaigns, and conversion optimization to maximize revenue.',
      icon: ShoppingCart,
      link: '/services/ecommerce-marketing',
      color: 'text-lime-500',
      bgColor: 'bg-lime-500/10',
    },
    {
      title: 'Link Building Services',
      description: 'Earn high-quality backlinks from authoritative websites through white-hat strategies including guest posting, digital PR, and content outreach.',
      icon: LinkIcon,
      link: '/services/link-building',
      color: 'text-sky-500',
      bgColor: 'bg-sky-500/10',
    },
    {
      title: 'Influencer Marketing',
      description: 'Amplify your brand reach through strategic influencer partnerships. Influencer discovery, campaign management, and performance tracking.',
      icon: Users,
      link: '/services/influencer-marketing',
      color: 'text-fuchsia-500',
      bgColor: 'bg-fuchsia-500/10',
    },
    {
      title: 'Video Marketing',
      description: 'Engage audiences with compelling video content. YouTube optimization, video ad campaigns, and strategic video distribution across platforms.',
      icon: Video,
      link: '/services/video-marketing',
      color: 'text-red-600',
      bgColor: 'bg-red-600/10',
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
    {
      title: 'Instagram Marketing',
      description: 'Build a powerful Instagram presence that drives engagement and business growth. Content strategy, Stories, Reels, influencer partnerships, and Instagram Shopping optimization.',
      icon: Instagram,
      link: '/services/instagram-marketing',
      color: 'text-pink-600',
      bgColor: 'bg-pink-600/10',
    },
    {
      title: 'LinkedIn Advertising',
      description: 'Reach decision-makers and generate high-quality B2B leads with LinkedIn ads. Sponsored content, InMail campaigns, and account-based marketing for professional audiences.',
      icon: Linkedin,
      link: '/services/linkedin-advertising',
      color: 'text-blue-700',
      bgColor: 'bg-blue-700/10',
    },
    {
      title: 'YouTube Marketing',
      description: 'Grow your YouTube channel and reach millions with strategic video marketing. Channel optimization, video SEO, YouTube ads, and content strategy for maximum views.',
      icon: Youtube,
      link: '/services/youtube-marketing',
      color: 'text-red-700',
      bgColor: 'bg-red-700/10',
    },
    {
      title: 'Affiliate Marketing',
      description: 'Build and scale a profitable affiliate program that drives consistent revenue. Partner recruitment, commission structures, tracking systems, and performance optimization.',
      icon: Users,
      link: '/services/affiliate-marketing',
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-600/10',
    },
    {
      title: 'Website Optimization',
      description: 'Boost website speed, performance, and search rankings with expert optimization. Page speed improvements, mobile responsiveness, Core Web Vitals, and technical SEO.',
      icon: Zap,
      link: '/services/website-optimization',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-600/10',
    },
    {
      title: 'Landing Page Design',
      description: 'Convert more visitors into customers with high-performing landing pages. Conversion-focused design, compelling copy, A/B testing, and mobile optimization for maximum ROI.',
      icon: FileText,
      link: '/services/landing-page-design',
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
    },
    {
      title: 'Online Reputation Management',
      description: 'Protect and enhance your brand\'s online reputation. Review management, negative content suppression, brand monitoring, and positive content promotion for businesses.',
      icon: Shield,
      link: '/services/online-reputation-management',
      color: 'text-slate-600',
      bgColor: 'bg-slate-600/10',
    },
    {
      title: 'Mobile Marketing',
      description: 'Reach your audience on mobile devices with SMS campaigns, mobile app marketing, in-app advertising, and mobile-optimized strategies for maximum engagement.',
      icon: Smartphone,
      link: '/services/mobile-marketing',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-600/10',
    },
    {
      title: 'Remarketing Campaigns',
      description: 'Re-engage interested visitors and convert them into customers with strategic remarketing across Google, Facebook, and display networks.',
      icon: RefreshCcw,
      link: '/services/remarketing-campaigns',
      color: 'text-violet-600',
      bgColor: 'bg-violet-600/10',
    },
    {
      title: 'Digital Advertising Agency',
      description: 'Full-service digital advertising agency specializing in multi-channel paid media campaigns. Google Ads, social media advertising, display, and programmatic buying.',
      icon: Megaphone,
      link: '/services/digital-advertising-agency',
      color: 'text-orange-600',
      bgColor: 'bg-orange-600/10',
    },
    {
      title: 'Full Service Digital Agency',
      description: 'Complete digital marketing solutions - SEO, PPC, social media, content, web design, and analytics. Your comprehensive digital marketing partner.',
      icon: Layers,
      link: '/services/full-service-digital-agency',
      color: 'text-blue-800',
      bgColor: 'bg-blue-800/10',
    },
    {
      title: 'SEO Company USA',
      description: 'Leading US-based SEO company with proven results. Professional search engine optimization services for American businesses with local market expertise.',
      icon: MapPin,
      link: '/services/seo-company-usa',
      color: 'text-green-700',
      bgColor: 'bg-green-700/10',
    },
    {
      title: 'Digital Marketing Agency USA',
      description: 'Top-rated US digital marketing agency serving businesses across America. Full-service marketing solutions with US-based experts delivering proven results.',
      icon: Sparkles,
      link: '/services/digital-marketing-agency-usa',
      color: 'text-purple-700',
      bgColor: 'bg-purple-700/10',
    },
    {
      title: 'Best SEO Agency',
      description: 'Award-winning SEO agency with exceptional results and track record. Expert strategies, transparent reporting, and relentless focus on ROI.',
      icon: Award,
      link: '/services/best-seo-agency',
      color: 'text-amber-600',
      bgColor: 'bg-amber-600/10',
    },
    {
      title: 'PPC Management Services',
      description: 'Expert PPC management for Google Ads, Microsoft Ads, and social platforms. Professional campaign optimization and ROI-focused strategies.',
      icon: DollarSign,
      link: '/services/ppc-management-services',
      color: 'text-lime-600',
      bgColor: 'bg-lime-600/10',
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
