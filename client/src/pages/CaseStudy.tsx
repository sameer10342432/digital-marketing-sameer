import { useEffect } from 'react';
import { useRoute, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { setPageMeta } from '@/lib/seo';
import type { Portfolio } from '@shared/schema';

export default function CaseStudy() {
  const [, params] = useRoute('/portfolio/:id');
  const portfolioId = params?.id ? parseInt(params.id) : null;

  const { data: portfolios, isLoading } = useQuery<Portfolio[]>({
    queryKey: ['/api/portfolios'],
  });

  const portfolio = portfolios?.find(p => p.id === portfolioId);

  useEffect(() => {
    if (portfolio) {
      setPageMeta(
        `${portfolio.title} - Portfolio Case Study`,
        portfolio.description.slice(0, 160)
      );
    }
  }, [portfolio]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!portfolio) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Portfolio Not Found</h1>
            <p className="text-muted-foreground mb-6">The portfolio you're looking for doesn't exist.</p>
            <Link href="/portfolio">
              <Button data-testid="button-back-to-portfolio">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Portfolio
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="relative h-96 flex items-center justify-center overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${portfolio.imageUrl ?? ''})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/70 to-background" />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <Badge className="mb-4">{portfolio.category ?? 'Uncategorized'}</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" data-testid="title-portfolio">
              {portfolio.title}
            </h1>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 md:py-20">
          <Link href="/portfolio">
            <Button variant="ghost" className="mb-8 group" data-testid="button-back">
              <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Button>
          </Link>

          <Card className="p-8 mb-8">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-lg leading-relaxed whitespace-pre-wrap" data-testid="text-description">
                {portfolio.description}
              </p>
            </div>
          </Card>

          {Array.isArray(portfolio.technologies) && portfolio.technologies.length > 0 && (
            <Card className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-3" data-testid="technologies-list">
                {portfolio.technologies.map((tech: string, idx: number) => (
                  <Badge key={idx} variant="secondary" className="text-sm px-4 py-2">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          )}

          <section className="text-center">
            {portfolio.projectUrl && (
              <Button
                size="lg"
                asChild
                className="mb-6"
                data-testid="button-view-live"
              >
                <a href={portfolio.projectUrl} target="_blank" rel="noopener noreferrer">
                  View Live Project
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
            )}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" variant="outline" data-testid="button-case-study-contact">Get In Touch</Button>
              </Link>
              <Link href="/portfolio">
                <Button size="lg" variant="outline" data-testid="button-view-more-projects">View More Projects</Button>
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
