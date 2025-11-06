import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation, Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useToast } from '@/hooks/use-toast';
import { Pencil, Trash2, Plus, X, LogOut } from 'lucide-react';
import { insertBlogSchema, type Blog, type InsertBlog } from '@shared/schema';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { RichTextEditor } from '@/components/RichTextEditor';
import { ImagePicker } from '@/components/ImagePicker';
import { useAuth } from '@/lib/useAuth';

export default function Admin() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading, logout } = useAuth();
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Call all hooks first, before any conditional returns
  const { data: blogs, isLoading } = useQuery<Blog[]>({
    queryKey: ['/api/blogs'],
    enabled: !!user, // Only fetch when user is authenticated
  });

  const form = useForm<InsertBlog>({
    resolver: zodResolver(insertBlogSchema),
    defaultValues: {
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      author: 'Muhammad Sameer',
      imageUrl: '',
      metaTitle: '',
      metaDescription: '',
      published: false,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertBlog) => {
      const res = await apiRequest('POST', '/api/blogs', data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      toast({
        title: 'Success',
        description: 'Blog created successfully',
      });
      form.reset();
      setIsFormOpen(false);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to create blog',
        variant: 'destructive',
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: InsertBlog }) => {
      const res = await apiRequest('PUT', `/api/blogs/${id}`, data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      toast({
        title: 'Success',
        description: 'Blog updated successfully',
      });
      form.reset();
      setEditingBlog(null);
      setIsFormOpen(false);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update blog',
        variant: 'destructive',
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/blogs/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/blogs'] });
      toast({
        title: 'Success',
        description: 'Blog deleted successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete blog',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertBlog) => {
    const cleanedData = {
      ...data,
      imageUrl: data.imageUrl || undefined,
      metaTitle: data.metaTitle || undefined,
      metaDescription: data.metaDescription || undefined,
    };
    
    if (editingBlog) {
      updateMutation.mutate({ id: editingBlog.id, data: cleanedData });
    } else {
      createMutation.mutate(cleanedData);
    }
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    form.reset({
      title: blog.title,
      slug: blog.slug,
      content: blog.content,
      excerpt: blog.excerpt,
      author: blog.author,
      imageUrl: blog.imageUrl || '',
      metaTitle: blog.metaTitle || '',
      metaDescription: blog.metaDescription || '',
      published: blog.published,
    });
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this blog?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleNewBlog = () => {
    setEditingBlog(null);
    form.reset({
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      author: 'Muhammad Sameer',
      imageUrl: '',
      metaTitle: '',
      metaDescription: '',
      published: false,
    });
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setEditingBlog(null);
    form.reset();
    setIsFormOpen(false);
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  // Handle authentication redirects
  useEffect(() => {
    if (!authLoading && !user) {
      setLocation('/login');
    }
  }, [user, authLoading, setLocation]);

  // Show loading state
  if (authLoading) {
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

  // Don't render until user is loaded
  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-4xl font-bold">Admin Panel</h1>
                <p className="text-muted-foreground mt-2">Logged in as {user.username}</p>
              </div>
              <Button onClick={logout} variant="outline" data-testid="button-logout">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
              </Button>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/admin">
                <Button variant="default" data-testid="button-nav-blogs">
                  Manage Blogs
                </Button>
              </Link>
              <Link href="/admin/portfolios">
                <Button variant="outline" data-testid="button-nav-portfolios">
                  Manage Portfolios
                </Button>
              </Link>
              <Link href="/admin/services">
                <Button variant="outline" data-testid="button-nav-services">
                  Manage Services
                </Button>
              </Link>
              <Link href="/admin/subscriptions">
                <Button variant="outline" data-testid="button-nav-subscriptions">
                  Newsletter Subscribers
                </Button>
              </Link>
            </div>
          </div>

          {!isFormOpen && (
            <div className="mb-8">
              <Button onClick={handleNewBlog} data-testid="button-new-blog">
                <Plus className="mr-2 h-4 w-4" />
                New Blog
              </Button>
            </div>
          )}

          {isFormOpen && (
            <Card className="p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingBlog ? 'Edit Blog' : 'Create New Blog'}
                </h2>
                <Button variant="ghost" size="icon" onClick={handleCancel} data-testid="button-cancel-form">
                  <X className="h-4 w-4" />
                </Button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Enter blog title"
                            data-testid="input-title"
                            onChange={(e) => {
                              field.onChange(e);
                              if (!editingBlog) {
                                form.setValue('slug', generateSlug(e.target.value));
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="slug"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Slug (URL)</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="blog-url-slug" data-testid="input-slug" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Short description of the blog"
                            rows={3}
                            data-testid="input-excerpt"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="metaTitle"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Title (SEO)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Custom title for search engines (leave empty to use blog title)"
                            data-testid="input-meta-title"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="metaDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Description (SEO)</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Custom description for search engines (leave empty to use excerpt)"
                            rows={2}
                            data-testid="input-meta-description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Content</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            value={field.value}
                            onChange={field.onChange}
                            placeholder="Write your blog content using Markdown formatting"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="author"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Author</FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="Author name" data-testid="input-author" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="imageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Featured Image</FormLabel>
                        <FormControl>
                          <ImagePicker
                            value={field.value || ''}
                            onChange={field.onChange}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="published"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Published</FormLabel>
                          <div className="text-sm text-muted-foreground">
                            Make this blog visible to the public
                          </div>
                        </div>
                        <FormControl>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                            data-testid="switch-published"
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-4">
                    <Button
                      type="submit"
                      disabled={createMutation.isPending || updateMutation.isPending}
                      data-testid="button-submit-blog"
                    >
                      {editingBlog ? 'Update Blog' : 'Create Blog'}
                    </Button>
                    <Button type="button" variant="outline" onClick={handleCancel} data-testid="button-cancel">
                      Cancel
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          )}

          <Card>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4">All Blogs</h2>
              {isLoading ? (
                <p>Loading blogs...</p>
              ) : !blogs || blogs.length === 0 ? (
                <p className="text-muted-foreground">No blogs yet. Create your first blog!</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogs.map((blog) => (
                      <TableRow key={blog.id} data-testid={`row-blog-${blog.id}`}>
                        <TableCell className="font-medium">{blog.title}</TableCell>
                        <TableCell>{blog.author}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              blog.published
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                            }`}
                          >
                            {blog.published ? 'Published' : 'Draft'}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(blog.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(blog)}
                              data-testid={`button-edit-${blog.id}`}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(blog.id)}
                              data-testid={`button-delete-${blog.id}`}
                            >
                              <Trash2 className="h-4 w-4 text-destructive" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              )}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
