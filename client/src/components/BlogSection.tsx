import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'wouter';
import blogImage1 from '@assets/generated_images/Blog_featured_image_analytics_f5a6981a.png';
import blogImage2 from '@assets/generated_images/Content_marketing_blog_image_555c248e.png';

//todo: remove mock functionality
const blogPosts = [
  {
    id: 1,
    title: 'The Complete Guide to SEO in 2024: Strategies That Actually Work',
    excerpt: 'Discover the latest SEO strategies and tactics that are driving results in 2024. From technical optimization to content strategy.',
    image: blogImage1,
    category: 'SEO',
    date: 'Nov 1, 2024',
    readTime: '8 min read',
  },
  {
    id: 2,
    title: 'How to Maximize ROI with Data-Driven PPC Campaigns',
    excerpt: 'Learn how to optimize your PPC campaigns using data analytics, A/B testing, and conversion tracking to achieve maximum ROI.',
    image: blogImage2,
    category: 'PPC',
    date: 'Oct 28, 2024',
    readTime: '6 min read',
  },
  {
    id: 3,
    title: 'Social Media Marketing Trends You Can\'t Ignore',
    excerpt: 'Stay ahead of the curve with these emerging social media marketing trends that are reshaping how brands connect with audiences.',
    image: blogImage1,
    category: 'Social Media',
    date: 'Oct 25, 2024',
    readTime: '7 min read',
  },
];

export default function BlogSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Latest Insights
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry insights, marketing strategies, and actionable tips to grow your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post) => (
            <Card
              key={post.id}
              className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-2"
              data-testid={`card-blog-${post.id}`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/90 backdrop-blur">{post.category}</Badge>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                <Button variant="ghost" className="group p-0" data-testid={`button-read-more-${post.id}`}>
                  Read More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <Button size="lg" variant="outline" data-testid="button-view-all-posts">
              View All Posts
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
