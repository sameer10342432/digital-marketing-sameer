import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, FileSearch, AlertCircle, CheckCircle2 } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';

export default function SEOAuditServices() {
  useEffect(() => {
    setPageMeta(
      'SEO Audit Services - Comprehensive Website SEO Analysis',
      'Professional SEO audit services to identify technical issues, content gaps, and opportunities. Comprehensive analysis of on-page SEO, technical SEO, backlinks, and competitive positioning with actionable recommendations.'
    );
  }, []);

  const auditComponents = [
    'Technical SEO analysis',
    'On-page SEO review',
    'Content quality assessment',
    'Backlink profile analysis',
    'Keyword ranking analysis',
    'Competitor analysis',
    'Mobile & Core Web Vitals',
    'Local SEO audit (if applicable)',
  ];

  const deliverables = [
    {
      icon: AlertCircle,
      title: 'Issues Identified',
      description: 'Detailed list of all SEO issues affecting your rankings',
    },
    {
      icon: CheckCircle2,
      title: 'Actionable Recommendations',
      description: 'Prioritized action plan to fix issues and improve SEO',
    },
    {
      icon: FileSearch,
      title: 'Comprehensive Report',
      description: 'Professional audit report with clear next steps',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-b from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <Badge className="mb-4" data-testid="badge-service">SEO Audit</Badge>
              <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <FileSearch className="h-8 w-8 text-primary" />
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                SEO Audit Services
              </h1>
              <p className="text-xl text-muted-foreground">
                Uncover SEO issues holding back your rankings and get a clear roadmap to success
              </p>
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold mb-6">Comprehensive SEO Audit</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our professional SEO audit provides a complete analysis of your website's search performance. 
                  We identify technical issues, content gaps, and opportunities, then provide a clear action plan to improve your rankings.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                  {deliverables.map((item, index) => (
                    <Card key={index} className="p-6 text-center" data-testid={`deliverable-${index}`}>
                      <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </Card>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-6">What's Included in the Audit</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                  {auditComponents.map((component, index) => (
                    <div key={index} className="flex items-start gap-3" data-testid={`component-${index}`}>
                      <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                      <span>{component}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="sticky top-6">
                  <ServiceContactForm serviceName="SEO Audit Services" />
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
