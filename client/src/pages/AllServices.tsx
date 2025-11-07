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
  Award,
  Gift,
  Scale,
  Heart,
  Home,
  HeartPulse,
  Building2,
  ShoppingBag,
  Package,
  Store,
  Smile,
  UtensilsCrossed,
  GraduationCap,
  Mic,
  Send,
  Repeat
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
    {
      title: 'SEO Reseller Services',
      description: 'White-label SEO solutions for agencies and resellers. Comprehensive SEO services you can rebrand and sell to your clients with full support.',
      icon: Repeat,
      link: '/services/seo-reseller-services',
      color: 'text-emerald-700',
      bgColor: 'bg-emerald-700/10',
    },
    {
      title: 'Digital PR Agency',
      description: 'Build brand authority and earn high-quality backlinks through digital PR campaigns, media outreach, and content promotion strategies.',
      icon: Send,
      link: '/services/digital-pr-agency',
      color: 'text-rose-600',
      bgColor: 'bg-rose-600/10',
    },
    {
      title: 'Online Brand Management',
      description: 'Comprehensive brand management services to build, protect, and enhance your online brand presence across all digital channels.',
      icon: Shield,
      link: '/services/online-brand-management',
      color: 'text-indigo-700',
      bgColor: 'bg-indigo-700/10',
    },
    {
      title: 'Organic Traffic Growth',
      description: 'Sustainable strategies to increase organic search traffic through SEO, content marketing, and technical optimization.',
      icon: TrendingUp,
      link: '/services/organic-traffic-growth',
      color: 'text-green-600',
      bgColor: 'bg-green-600/10',
    },
    {
      title: 'Website Traffic Services',
      description: 'Drive more visitors to your website through multi-channel traffic generation strategies including SEO, paid ads, and content marketing.',
      icon: Users,
      link: '/services/website-traffic-services',
      color: 'text-cyan-600',
      bgColor: 'bg-cyan-600/10',
    },
    {
      title: 'Marketing Automation',
      description: 'Streamline marketing processes with powerful automation tools. Email workflows, lead nurturing, and customer journey automation.',
      icon: Zap,
      link: '/services/marketing-automation',
      color: 'text-purple-600',
      bgColor: 'bg-purple-600/10',
    },
    {
      title: 'CRM Integration Services',
      description: 'Seamlessly integrate your CRM with marketing tools for better customer data management, lead tracking, and sales alignment.',
      icon: Target,
      link: '/services/crm-integration-services',
      color: 'text-blue-600',
      bgColor: 'bg-blue-600/10',
    },
    {
      title: 'Funnel Optimization',
      description: 'Optimize every stage of your marketing funnel to increase conversions and maximize ROI from awareness to purchase.',
      icon: TrendingUp,
      link: '/services/funnel-optimization',
      color: 'text-orange-700',
      bgColor: 'bg-orange-700/10',
    },
    {
      title: 'Digital Marketing for Real Estate',
      description: 'Specialized marketing for real estate agents and agencies. Local SEO, property listings, virtual tours, and lead generation.',
      icon: Home,
      link: '/services/digital-marketing-real-estate',
      color: 'text-amber-700',
      bgColor: 'bg-amber-700/10',
    },
    {
      title: 'Healthcare Digital Marketing',
      description: 'HIPAA-compliant digital marketing for healthcare providers. Patient acquisition, reputation management, and medical SEO.',
      icon: HeartPulse,
      link: '/services/healthcare-digital-marketing',
      color: 'text-red-500',
      bgColor: 'bg-red-500/10',
    },
    {
      title: 'Fintech Marketing Agency',
      description: 'Specialized marketing for fintech companies. Compliance-friendly strategies, user acquisition, and brand building in finance.',
      icon: Building2,
      link: '/services/fintech-marketing-agency',
      color: 'text-slate-700',
      bgColor: 'bg-slate-700/10',
    },
    {
      title: 'E-commerce SEO Services',
      description: 'Boost online store rankings and sales with specialized e-commerce SEO. Product page optimization and category structure.',
      icon: ShoppingCart,
      link: '/services/ecommerce-seo-services',
      color: 'text-lime-700',
      bgColor: 'bg-lime-700/10',
    },
    {
      title: 'Shopify Marketing',
      description: 'Complete marketing solutions for Shopify stores. SEO, paid ads, email marketing, and conversion optimization.',
      icon: ShoppingBag,
      link: '/services/shopify-marketing',
      color: 'text-green-800',
      bgColor: 'bg-green-800/10',
    },
    {
      title: 'Amazon Advertising',
      description: 'Expert Amazon PPC management to increase product visibility and sales. Sponsored Products, Brands, and Display campaigns.',
      icon: Package,
      link: '/services/amazon-advertising',
      color: 'text-yellow-700',
      bgColor: 'bg-yellow-700/10',
    },
    {
      title: 'Digital Marketing for Nonprofits',
      description: 'Budget-friendly marketing for nonprofits. Donor acquisition, Google Ad Grants, and awareness campaigns to amplify your mission.',
      icon: Heart,
      link: '/services/digital-marketing-nonprofits',
      color: 'text-pink-700',
      bgColor: 'bg-pink-700/10',
    },
    {
      title: 'Law Firm SEO',
      description: 'Specialized SEO for law firms and attorneys. Local legal marketing, practice area optimization, and ethical client acquisition.',
      icon: Scale,
      link: '/services/law-firm-seo',
      color: 'text-slate-800',
      bgColor: 'bg-slate-800/10',
    },
    {
      title: 'Restaurant Marketing Online',
      description: 'Digital marketing for restaurants. Local SEO, online ordering optimization, social media, and review management to fill tables.',
      icon: UtensilsCrossed,
      link: '/services/restaurant-marketing-online',
      color: 'text-orange-700',
      bgColor: 'bg-orange-700/10',
    },
    {
      title: 'Local Business Marketing',
      description: 'Dominate your local market with targeted marketing. Google My Business, local SEO, and community-focused strategies.',
      icon: Store,
      link: '/services/local-business-marketing',
      color: 'text-teal-700',
      bgColor: 'bg-teal-700/10',
    },
    {
      title: 'SEO for Dentists',
      description: 'Attract more dental patients with specialized dental SEO. Local rankings, patient reviews, and practice growth strategies.',
      icon: Smile,
      link: '/services/seo-for-dentists',
      color: 'text-sky-700',
      bgColor: 'bg-sky-700/10',
    },
    {
      title: 'Digital Marketing for Coaches',
      description: 'Build your coaching brand and attract high-value clients. Personal branding, lead generation, and thought leadership.',
      icon: Users,
      link: '/services/digital-marketing-coaches',
      color: 'text-violet-700',
      bgColor: 'bg-violet-700/10',
    },
    {
      title: 'Online Course Marketing',
      description: 'Launch and scale online courses. Student acquisition funnels, course launches, and evergreen marketing systems.',
      icon: GraduationCap,
      link: '/services/online-course-marketing',
      color: 'text-indigo-800',
      bgColor: 'bg-indigo-800/10',
    },
    {
      title: 'Membership Site Marketing',
      description: 'Build recurring revenue with membership marketing. Member acquisition, retention strategies, and community growth.',
      icon: Users,
      link: '/services/membership-site-marketing',
      color: 'text-fuchsia-700',
      bgColor: 'bg-fuchsia-700/10',
    },
    {
      title: 'Podcast Promotion Services',
      description: 'Grow your podcast audience with strategic promotion. Listener acquisition, sponsorship opportunities, and platform optimization.',
      icon: Mic,
      link: '/services/podcast-promotion-services',
      color: 'text-purple-700',
      bgColor: 'bg-purple-700/10',
    },
    {
      title: 'Webinar Marketing',
      description: 'Fill webinars and convert attendees into customers. Registration optimization, promotion campaigns, and follow-up sequences.',
      icon: Video,
      link: '/services/webinar-marketing',
      color: 'text-blue-700',
      bgColor: 'bg-blue-700/10',
    },
    {
      title: 'Lead Magnet Creation',
      description: 'Create irresistible lead magnets that build your email list. High-value content offers that attract and convert subscribers.',
      icon: Gift,
      link: '/services/lead-magnet-creation',
      color: 'text-rose-700',
      bgColor: 'bg-rose-700/10',
    },
    {
      title: 'Sales Funnel Design',
      description: 'Build high-converting sales funnels that guide prospects to purchase. Landing pages, email sequences, and automation.',
      icon: TrendingUp,
      link: '/services/sales-funnel-design',
      color: 'text-emerald-800',
      bgColor: 'bg-emerald-800/10',
    },
    {
      title: 'Digital Marketing Agency Near Me',
      description: 'Your trusted local digital marketing partner. Personalized service, local market expertise, and proven results for your business.',
      icon: MapPin,
      link: '/services/digital-marketing-agency-near-me',
      color: 'text-cyan-700',
      bgColor: 'bg-cyan-700/10',
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
