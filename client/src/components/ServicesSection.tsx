import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Search, MousePointerClick, Share2, Mail, FileText, BarChart, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Drive organic traffic with comprehensive SEO strategies, keyword research, and technical optimization.',
    benefits: ['Keyword Research', 'On-Page SEO', 'Technical Audits', 'Link Building'],
    link: '/services/seo-optimization',
  },
  {
    icon: MousePointerClick,
    title: 'PPC Campaigns',
    description: 'Maximize ROI with targeted Google Ads and social media advertising campaigns.',
    benefits: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'Campaign Optimization'],
    link: '/services/ppc-campaigns',
  },
  {
    icon: Share2,
    title: 'Social Media Marketing',
    description: 'Build engaged communities and drive conversions across all major social platforms.',
    benefits: ['Content Strategy', 'Community Management', 'Paid Social', 'Analytics'],
    link: '/services/social-media-marketing',
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and increase customer lifetime value with personalized email campaigns.',
    benefits: ['Automation', 'Segmentation', 'A/B Testing', 'Analytics'],
    link: '/services/email-marketing',
  },
  {
    icon: FileText,
    title: 'Content Marketing',
    description: 'Create compelling content that attracts, engages, and converts your target audience.',
    benefits: ['Blog Writing', 'Video Scripts', 'Infographics', 'Case Studies'],
    link: '/services/content-strategy',
  },
  {
    icon: BarChart,
    title: 'Analytics & Reporting',
    description: 'Track performance and gain actionable insights with comprehensive analytics and reporting.',
    benefits: ['GA4 Setup', 'Custom Dashboards', 'ROI Tracking', 'Data Analysis'],
    link: '/services',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Full-Stack Digital Marketing Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive marketing solutions tailored to your business goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="p-8 hover-elevate transition-all duration-300 hover:-translate-y-2 flex flex-col"
                data-testid={`card-service-${service.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-sm flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <Link href={service.link}>
                  <Button variant="ghost" className="w-full group" data-testid={`button-learn-more-${index}`}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
