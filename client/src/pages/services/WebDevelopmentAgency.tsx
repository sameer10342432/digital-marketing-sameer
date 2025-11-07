import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Code, Smartphone, Zap } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function WebDevelopmentAgency() {
  useEffect(() => {
    setPageMeta(
      'Web Development Agency - Custom Websites & Web Applications',
      'Professional web development agency building custom websites and web applications. Expert in React, Node.js, responsive design, e-commerce solutions, and modern web technologies. Fast, secure, and scalable development.'
    );
  }, []);

  const features = [
    'Custom website development',
    'E-commerce platforms',
    'Web application development',
    'Responsive & mobile-first design',
    'CMS integration (WordPress, Shopify)',
    'Progressive Web Apps (PWA)',
    'API development & integration',
    'Website maintenance & support',
  ];

  const technologies = [
    { name: 'Frontend', tech: 'React, Vue, Angular, Next.js' },
    { name: 'Backend', tech: 'Node.js, Express, PHP, Python' },
    { name: 'Database', tech: 'MySQL, PostgreSQL, MongoDB' },
    { name: 'CMS', tech: 'WordPress, Shopify, Webflow' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Web Development</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Web Development Agency
              </h1>
              <p className="text-xl text-muted-foreground">
                Building powerful websites and web applications that drive business results
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Professional Web Development Services</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our web development agency creates custom websites and web applications tailored to your business needs. 
                  We combine cutting-edge technology with user-centered design to deliver fast, secure, and scalable solutions.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`feature-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Technologies We Use</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                  {technologies.map((item, index) => (
                    <Card key={index} className="p-6" data-testid={`tech-${index}`}>
                      <h4 className="font-semibold mb-2">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.tech}</p>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="Web Development Agency" />
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
