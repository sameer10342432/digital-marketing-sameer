import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Palette, Smartphone, Zap, Layout } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function WebDesignServices() {
  useEffect(() => {
    setPageMeta(
      'Web Design Services - Beautiful, Conversion-Focused Websites',
      'Professional web design services that combine stunning visuals with user experience best practices. Mobile-responsive, SEO-friendly websites built to convert visitors into customers and drive business growth.'
    );
  }, []);

  const features = [
    'Custom responsive web design',
    'Mobile-first approach',
    'User experience (UX) optimization',
    'Conversion-focused layouts',
    'SEO-friendly architecture',
    'Fast loading speeds',
    'Cross-browser compatibility',
    'Ongoing maintenance & support',
  ];

  const principles = [
    {
      icon: Layout,
      title: 'User-Centered Design',
      description: 'Intuitive interfaces that guide visitors to conversion',
    },
    {
      icon: Smartphone,
      title: 'Mobile Responsive',
      description: 'Perfect experience across all devices and screen sizes',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Lightning-fast loading for better UX and SEO',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Web Design</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Web Design Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Beautiful websites that convert visitors into customers
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              <div className="lg:col-span-2">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Conversion-Focused Web Design
                </h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Your website is often the first impression potential customers have of your business. I create stunning, user-friendly websites that not only look beautiful but are strategically designed to convert visitors into customers.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Every design decision is backed by data and user experience best practices, ensuring your website performs as well as it looks. From mobile responsiveness to page speed optimization, every detail matters.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                  {principles.map((principle, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`principle-${index}`}>
                      <principle.icon className="h-10 w-10 text-primary mx-auto mb-3" />
                      <h4 className="font-semibold mb-2">{principle.title}</h4>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </Card>
                  ))}
                </div>

                <Card className="p-8">
                  <h3 className="text-2xl font-bold mb-6">What's Included</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <ServiceContactForm serviceName="Web Design Services" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
