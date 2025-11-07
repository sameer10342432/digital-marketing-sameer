import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Link } from 'wouter';
import { setPageMeta } from '@/lib/seo';
import type { Portfolio as PortfolioType } from '@shared/schema';


export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');

  const { data: portfolios, isLoading } = useQuery<PortfolioType[]>({
    queryKey: ['/api/portfolios'],
  });

  useEffect(() => {
    setPageMeta(
      'Portfolio & Case Studies - Proven Digital Marketing Results',
      'View real client success stories and case studies. See how data-driven digital marketing strategies achieved 250%+ ROI, tripled organic traffic, and drove measurable business growth across multiple industries.'
    );
  }, []);

  const publishedPortfolios = portfolios?.filter(p => p.published) || [];
  
  const categories = ['All', ...Array.from(new Set(publishedPortfolios.map(p => p.category)))];

  const filteredProjects = activeCategory === 'All'
    ? publishedPortfolios
    : publishedPortfolios.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Portfolio & Case Studies
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Real results from real clients. Explore data-driven marketing strategies that deliver measurable growth across industries.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={activeCategory === category ? 'default' : 'outline'}
                  className="cursor-pointer px-5 py-2.5 text-sm hover-elevate"
                  onClick={() => setActiveCategory(category)}
                  data-testid={`filter-portfolio-${category.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {category}
                </Badge>
              ))}
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Loading portfolios...</p>
              </div>
            ) : filteredProjects.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">
                  {activeCategory === 'All' 
                    ? 'No portfolios available yet.' 
                    : `No portfolios found in ${activeCategory} category.`}
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <Card
                    key={project.id}
                    className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-2"
                    data-testid={`card-portfolio-${project.id}`}
                  >
                    <div className="relative h-56 overflow-hidden">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className="bg-background/90 backdrop-blur">{project.category}</Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 line-clamp-2">{project.title}</h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.description}</p>
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      )}
                      {project.liveUrl && (
                        <Button 
                          variant="ghost" 
                          className="group w-full" 
                          asChild
                          data-testid={`button-view-portfolio-${project.id}`}
                        >
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            View Project
                            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
