import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'wouter';
import ecommerceImage from '@assets/generated_images/E-commerce_case_study_visual_0d25472d.png';
import socialImage from '@assets/generated_images/Social_media_campaign_visual_941ce000.png';
import seoImage from '@assets/generated_images/SEO_project_visual_b20d6e80.png';
import ppcImage from '@assets/generated_images/PPC_campaign_case_study_e769767e.png';

//todo: remove mock functionality
const projects = [
  {
    id: 1,
    title: 'E-Commerce Growth Strategy',
    category: 'SEO',
    image: ecommerceImage,
    client: 'TechStyle Co.',
    metrics: ['+250% ROI', '185K Organic Traffic', '3.2% Conversion Rate'],
    description: 'Comprehensive SEO strategy that tripled organic traffic and doubled revenue in 6 months.',
  },
  {
    id: 2,
    title: 'Social Media Brand Building',
    category: 'Social Media',
    image: socialImage,
    client: 'FitLife Wellness',
    metrics: ['+420% Engagement', '2M Impressions', '50K Followers'],
    description: 'Multi-platform social media campaign that built a thriving community and drove sales.',
  },
  {
    id: 3,
    title: 'Local SEO Domination',
    category: 'SEO',
    image: seoImage,
    client: 'Urban Dental',
    metrics: ['#1 Local Rank', '+180% Leads', '95% 5-Star Reviews'],
    description: 'Local SEO optimization that captured top rankings and filled the appointment calendar.',
  },
  {
    id: 4,
    title: 'High-ROI PPC Campaign',
    category: 'PPC',
    image: ppcImage,
    client: 'SaaS Startup',
    metrics: ['$12 CPA', '+300% Conversions', '8.2% CTR'],
    description: 'Data-driven PPC campaign that delivered qualified leads at 60% lower cost.',
  },
];

const categories = ['All', 'SEO', 'PPC', 'Social Media', 'Email'];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Featured Case Studies
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real results from real clients. Data-driven strategies that deliver measurable growth.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={activeCategory === category ? 'default' : 'outline'}
              className="cursor-pointer px-4 py-2 text-sm hover-elevate"
              onClick={() => setActiveCategory(category)}
              data-testid={`filter-${category.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-project-${project.id}`}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-background/90 backdrop-blur">{project.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <p className="text-sm text-muted-foreground mb-2">{project.client}</p>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.metrics.map((metric, idx) => (
                    <Badge key={idx} variant="secondary" className="text-sm">
                      {metric}
                    </Badge>
                  ))}
                </div>
                <Button variant="ghost" className="group" data-testid={`button-view-case-study-${project.id}`}>
                  View Case Study
                  <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/portfolio">
            <Button size="lg" variant="outline" data-testid="button-view-all-projects">
              View All Projects
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
