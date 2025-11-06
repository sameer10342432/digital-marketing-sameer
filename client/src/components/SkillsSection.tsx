import { Card } from '@/components/ui/card';
import { SiGoogleanalytics, SiGoogleads, SiMeta, SiLinkedin, SiMailchimp, SiHubspot, SiSemrush, SiCanva, SiHootsuite } from 'react-icons/si';
import { Search } from 'lucide-react';

const skillCategories = [
  {
    category: 'Analytics & Data',
    tools: [
      { name: 'Google Analytics 4', icon: SiGoogleanalytics },
      { name: 'SEMrush', icon: SiSemrush },
      { name: 'Ahrefs', icon: Search },
    ],
  },
  {
    category: 'Paid Advertising',
    tools: [
      { name: 'Google Ads', icon: SiGoogleads },
      { name: 'Meta Ads', icon: SiMeta },
      { name: 'LinkedIn Ads', icon: SiLinkedin },
    ],
  },
  {
    category: 'Marketing Automation',
    tools: [
      { name: 'HubSpot', icon: SiHubspot },
      { name: 'Mailchimp', icon: SiMailchimp },
      { name: 'Hootsuite', icon: SiHootsuite },
    ],
  },
  {
    category: 'Creative Tools',
    tools: [
      { name: 'Canva', icon: SiCanva },
    ],
  },
];

export default function SkillsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Tools & Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise in industry-leading marketing tools and platforms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6" data-testid={`card-skill-category-${index}`}>
              <h3 className="text-lg font-semibold mb-6">{category.category}</h3>
              <div className="space-y-4">
                {category.tools.map((tool, idx) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3 p-3 rounded-lg hover-elevate transition-all"
                      data-testid={`tool-${tool.name.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <Icon className="h-6 w-6 text-primary" />
                      <span className="text-sm font-medium">{tool.name}</span>
                    </div>
                  );
                })}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
