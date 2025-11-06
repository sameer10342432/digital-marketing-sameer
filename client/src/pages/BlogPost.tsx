import { useRoute, Link } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Calendar, Clock, ArrowLeft, Linkedin, Twitter } from 'lucide-react';
import blogImage1 from '@assets/generated_images/Blog_featured_image_analytics_f5a6981a.png';
import { type Blog } from '@shared/schema';
import { renderMarkdown } from '@/lib/markdown';
import { setPageMeta, resetPageMeta } from '@/lib/seo';

export default function BlogPost() {
  const [, params] = useRoute('/blog/:slug');
  const slug = params?.slug || null;

  const { data: blog, isLoading } = useQuery<Blog>({
    queryKey: ['/api/blogs/slug', slug],
    queryFn: slug ? async () => {
      const response = await fetch(`/api/blogs/slug/${slug}`);
      if (!response.ok) throw new Error('Blog not found');
      return response.json();
    } : undefined,
    enabled: !!slug,
  });

  const { data: allBlogs = [] } = useQuery<Blog[]>({
    queryKey: ['/api/blogs'],
  });

  useEffect(() => {
    if (blog) {
      const metaTitle = blog.metaTitle || blog.title;
      const metaDescription = blog.metaDescription || blog.excerpt;
      setPageMeta(metaTitle, metaDescription, blog.imageUrl || undefined);
    }
    
    return () => {
      resetPageMeta();
    };
  }, [blog]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <p className="text-lg text-muted-foreground">Loading blog post...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
            <Link href="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = allBlogs
    .filter(p => p.id !== blog.id && p.published)
    .slice(0, 2);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <article className="py-12 md:py-20">
          <div className="max-w-4xl mx-auto px-6 lg:px-8">
            <Link href="/blog">
              <Button variant="ghost" className="mb-8 group" data-testid="button-back-to-blog">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Blog
              </Button>
            </Link>

            <div className="mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                {blog.title}
              </h1>
              <div className="flex flex-wrap items-center gap-6 text-muted-foreground mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {new Date(blog.createdAt).toLocaleDateString()}
                </div>
                <div className="text-sm">By {blog.author}</div>
              </div>
            </div>

            {blog.imageUrl && (
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-2xl mb-12"
                data-testid="img-blog-featured"
              />
            )}

            <div className="flex gap-4 mb-12 pb-12 border-b">
              <Button variant="outline" size="sm" className="gap-2" data-testid="button-share-linkedin">
                <Linkedin className="h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm" className="gap-2" data-testid="button-share-twitter">
                <Twitter className="h-4 w-4" />
                Tweet
              </Button>
            </div>

            <div
              className="prose prose-lg max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: renderMarkdown(blog.content) }}
              data-testid="article-content"
            />

            {relatedPosts.length > 0 && (
              <div className="border-t pt-12 mb-12">
                <h3 className="text-2xl font-bold mb-6">Related Articles</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {relatedPosts.map((post) => (
                    <Card key={post.id} className="p-6 hover-elevate transition-all" data-testid={`card-related-${post.id}`}>
                      <h4 className="font-semibold mb-4">{post.title}</h4>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                      <Link href={`/blog/${post.slug}`}>
                        <Button variant="ghost" size="sm" className="p-0" data-testid={`button-read-related-${post.id}`}>
                          Read Article →
                        </Button>
                      </Link>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            <Card className="p-8 bg-primary/5 border-primary/10">
              <h3 className="text-2xl font-bold mb-4">Ready to Grow Your Business?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how data-driven digital marketing strategies can help you achieve your business goals.
              </p>
              <Link href="/contact">
                <Button data-testid="button-blog-cta">Get In Touch</Button>
              </Link>
            </Card>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
