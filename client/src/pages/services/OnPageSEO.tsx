import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileText, Image, Code } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function OnPageSEO() {
  useEffect(() => {
    setPageMeta(
      'On-Page SEO Services - Optimize Your Website Content',
      'Professional on-page SEO optimization services including meta tags, header optimization, content optimization, internal linking, and image SEO. Improve search rankings with comprehensive on-page optimization.'
    );
  }, []);

  const services = [
    'Meta title & description optimization',
    'Header tag (H1-H6) optimization',
    'Content optimization for target keywords',
    'Internal linking strategy',
    'Image optimization & alt tags',
    'URL structure optimization',
    'Schema markup implementation',
    'Page speed optimization',
  ];

  const elements = [
    {
      icon: FileText,
      title: 'Content',
      description: 'Keyword-optimized, engaging content that ranks and converts',
    },
    {
      icon: Code,
      title: 'Technical',
      description: 'Clean HTML, schema markup, and proper SEO tags',
    },
    {
      icon: Image,
      title: 'Media',
      description: 'Optimized images and multimedia for better performance',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">On-Page SEO</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                On-Page SEO Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Optimize every element of your pages for maximum search visibility
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Complete On-Page Optimization</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  On-page SEO is the foundation of search rankings. We optimize every element of your pages—from meta tags 
                  to content to internal links—ensuring search engines understand and rank your content.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {elements.map((element, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`element-${index}`}>
                      <element.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{element.title}</h3>
                      <p className="text-sm text-muted-foreground">{element.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">What We Optimize</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`service-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="On-Page SEO" />
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
