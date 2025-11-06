import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, Target, TrendingUp, Users } from 'lucide-react';
import headshotImage from '@assets/generated_images/Professional_headshot_photo_f68f5765.png';
import { setPageMeta } from '@/lib/seo';

export default function About() {
  useEffect(() => {
    setPageMeta(
      'About Muhammad Sameer - Full-Stack Digital Marketing Strategist',
      'Learn about Muhammad Sameer, a certified digital marketing expert with 5+ years of experience. Google Ads Certified, Meta Blueprint Certified, specializing in data-driven marketing strategies that deliver measurable ROI.'
    );
  }, []);
  const certifications = [
    'Google Ads Certified',
    'Meta Blueprint Certified',
    'HubSpot Inbound Marketing',
    'Google Analytics 4 Qualified',
  ];

  const values = [
    {
      icon: Target,
      title: 'Data-Driven',
      description: 'Every strategy is backed by comprehensive analytics and measurable KPIs.',
    },
    {
      icon: TrendingUp,
      title: 'Results-Focused',
      description: 'I measure success by ROI and tangible business growth, not vanity metrics.',
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your goals become my goals. I partner with you for long-term success.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to staying ahead of industry trends and best practices.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                  About Muhammad Sameer
                </h1>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    I'm a full-stack digital marketing strategist with a passion for turning data into growth. With over 5 years of experience, I've helped businesses of all sizes achieve remarkable results through comprehensive, data-driven marketing strategies.
                  </p>
                  <p>
                    My approach combines technical expertise with creative thinking. Whether it's optimizing for search engines, running high-ROI PPC campaigns, or building engaged social media communities, I focus on strategies that deliver measurable business impact.
                  </p>
                  <p>
                    I believe in transparency, continuous learning, and partnership. When you work with me, you get more than a marketer—you get a strategic partner invested in your success.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={headshotImage}
                  alt="Muhammad Sameer"
                  className="rounded-2xl w-full h-auto shadow-xl"
                  data-testid="img-headshot"
                />
              </div>
            </div>

            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <Card key={index} className="p-6 text-center" data-testid={`card-value-${index}`}>
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Certifications</h2>
              <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
                {certifications.map((cert, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="text-base px-6 py-3"
                    data-testid={`badge-cert-${index}`}
                  >
                    {cert}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
