import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import * as Icons from 'lucide-react';
import { Link } from 'wouter';
import { setPageMeta } from '@/lib/seo';
import type { Service } from '@shared/schema';

const getIconComponent = (iconName: string) => {
  const IconComponent = (Icons as any)[iconName];
  return IconComponent || Icons.HelpCircle;
};

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We analyze your business, goals, competition, and target audience to create a foundation for success.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'I develop a comprehensive, data-driven marketing strategy tailored to your specific objectives.',
  },
  {
    number: '03',
    title: 'Execution',
    description: 'Strategic implementation of campaigns across chosen channels with continuous monitoring.',
  },
  {
    number: '04',
    title: 'Optimization',
    description: 'Ongoing testing, analysis, and refinement to maximize performance and ROI.',
  },
  {
    number: '05',
    title: 'Reporting',
    description: 'Transparent reporting with clear metrics, insights, and recommendations for growth.',
  },
];

export default function Services() {
  const { data: servicesData, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
  });

  useEffect(() => {
    setPageMeta(
      'Digital Marketing Services - SEO, PPC, Social Media & More',
      'Professional digital marketing services including SEO optimization, PPC campaigns, social media marketing, email marketing, and content strategy. Proven results with 250%+ average ROI.'
    );
  }, []);

  const publishedServices = servicesData?.filter(s => s.published) || [];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Full-Stack Digital Marketing Services
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Comprehensive marketing solutions that drive measurable results. From strategy to execution, I handle every aspect of your digital presence.
              </p>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Loading services...</p>
              </div>
            ) : publishedServices.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No services available yet.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {publishedServices.map((service) => {
                  const Icon = getIconComponent(service.icon);
                  return (
                    <Card
                      key={service.id}
                      className="p-8 hover-elevate transition-all duration-300"
                      data-testid={`card-service-detail-${service.id}`}
                    >
                      <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <h2 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      {service.features && service.features.length > 0 && (
                        <div className="space-y-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <Icons.CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                              <span className="text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                My Process
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                A proven, data-driven approach to digital marketing success
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center" data-testid={`process-step-${index}`}>
                  <div className="text-5xl font-bold text-primary/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 md:py-32 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
              Let's discuss which services are right for your business and how we can achieve your marketing goals together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 py-6 rounded-full"
                  data-testid="button-services-contact"
                >
                  Get In Touch
                  <Icons.ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/portfolio">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  data-testid="button-services-portfolio"
                >
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
