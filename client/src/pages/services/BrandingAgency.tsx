import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Palette, Sparkles, Heart } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function BrandingAgency() {
  useEffect(() => {
    setPageMeta(
      'Branding Agency - Build a Memorable Brand Identity',
      'Professional branding agency services including logo design, brand strategy, visual identity, brand guidelines, and positioning. Create a memorable brand that resonates with your target audience.'
    );
  }, []);

  const services = [
    'Brand strategy & positioning',
    'Logo design & visual identity',
    'Brand messaging & voice',
    'Brand guidelines documentation',
    'Rebranding & brand refresh',
    'Packaging design',
    'Marketing collateral design',
    'Brand consistency management',
  ];

  const deliverables = [
    { title: 'Logo & Identity', description: 'Custom logo design with complete visual identity system' },
    { title: 'Brand Guidelines', description: 'Comprehensive documentation for brand consistency' },
    { title: 'Marketing Assets', description: 'Business cards, letterheads, and marketing materials' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">Branding</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Branding Agency
              </h1>
              <p className="text-xl text-muted-foreground">
                Create a powerful brand that stands out and drives business growth
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Strategic Brand Development</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Your brand is more than a logo—it's the complete experience customers have with your business. 
                  We create cohesive brand identities that tell your story and connect emotionally with your audience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {deliverables.map((item, index) => (
                    <Card key={index} className="p-6" data-testid={`deliverable-${index}`}>
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">Branding Services</h3>
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
                  <ServiceContactForm serviceName="Branding Agency" />
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
