import { useState, useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Calendar, ArrowRight, Search } from 'lucide-react';
import { Link } from 'wouter';
import blogPlaceholder from '@assets/generated_images/Blog_featured_image_analytics_f5a6981a.png';
import { type Blog } from '@shared/schema';
import { setPageMeta } from '@/lib/seo';

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Blog - Insights, Strategies & Tips',
      'Discover expert digital marketing insights, proven strategies, and actionable tips. Learn about SEO, PPC, social media marketing, content strategy, and more to grow your business online.'
    );
  }, []);

  const { data: allBlogPosts = [], isLoading } = useQuery<Blog[]>({
    queryKey: ['/api/blogs'],
  });

  const publishedPosts = allBlogPosts.filter(blog => blog.published);

  const filteredPosts = publishedPosts.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch;
  });

  const featuredPost = filteredPosts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Marketing Insights & Strategies
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Industry insights, proven strategies, and actionable tips to grow your business through digital marketing.
              </p>
            </div>

            <div className="mb-12 max-w-xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12"
                  data-testid="input-blog-search"
                />
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">Loading blogs...</p>
              </div>
            ) : filteredPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  {searchQuery ? 'No articles found. Try a different search.' : 'No published blogs yet.'}
                </p>
              </div>
            ) : (
              <>
                {featuredPost && !searchQuery && (
                  <Card className="overflow-hidden mb-12 hover-elevate transition-all duration-300" data-testid="card-featured-post">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="relative h-80 lg:h-auto overflow-hidden">
                        <img
                          src={featuredPost.imageUrl || blogPlaceholder}
                          alt={featuredPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
                          {featuredPost.title}
                        </h2>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {featuredPost.excerpt}
                        </p>
                        <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4" />
                            {new Date(featuredPost.createdAt).toLocaleDateString()}
                          </div>
                          <div>By {featuredPost.author}</div>
                        </div>
                        <Link href={`/blog/${featuredPost.slug}`}>
                          <Button className="group" data-testid="button-read-featured">
                            Read Article
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </Card>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredPosts.slice(featuredPost && !searchQuery ? 1 : 0).map((post) => (
                    <Card
                      key={post.id}
                      className="overflow-hidden hover-elevate transition-all duration-300 hover:-translate-y-2"
                      data-testid={`card-blog-post-${post.id}`}
                    >
                      {post.imageUrl && (
                        <div className="relative h-48 overflow-hidden">
                          <img
                            src={post.imageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {new Date(post.createdAt).toLocaleDateString()}
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-3 line-clamp-2">{post.title}</h3>
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                        <Link href={`/blog/${post.slug}`}>
                          <Button variant="ghost" className="group p-0" data-testid={`button-read-blog-${post.id}`}>
                            Read More
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </Button>
                        </Link>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
