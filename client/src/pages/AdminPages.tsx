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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
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
import { Pencil, Trash2, Plus, X, LogOut, FileText, Search } from 'lucide-react';
import { insertPageSchema, type Page, type InsertPage } from '@shared/schema';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { RichTextEditor } from '@/components/RichTextEditor';
import { ImagePicker } from '@/components/ImagePicker';
import { useAuth } from '@/lib/useAuth';

export default function AdminPages() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading, logout } = useAuth();
  const [editingPage, setEditingPage] = useState<Page | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const { data: pages, isLoading } = useQuery<Page[]>({
    queryKey: ['/api/pages'],
    enabled: !!user,
  });

  const form = useForm<InsertPage>({
    resolver: zodResolver(insertPageSchema),
    defaultValues: {
      title: '',
      slug: '',
      content: '',
      excerpt: '',
      author: 'Muhammad Sameer',
      featuredImageUrl: '',
      metaTitle: '',
      metaDescription: '',
      status: 'draft',
      template: 'default',
      order: 0,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertPage) => {
      const res = await apiRequest('POST', '/api/pages', data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/pages'] });
      toast({
        title: 'Success',
        description: 'Page created successfully',
      });
      form.reset();
      setIsFormOpen(false);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to create page',
        variant: 'destructive',
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: InsertPage }) => {
      const res = await apiRequest('PUT', `/api/pages/${id}`, data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/pages'] });
      toast({
        title: 'Success',
        description: 'Page updated successfully',
      });
      form.reset();
      setEditingPage(null);
      setIsFormOpen(false);
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update page',
        variant: 'destructive',
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/pages/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/pages'] });
      toast({
        title: 'Success',
        description: 'Page deleted successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete page',
        variant: 'destructive',
      });
    },
  });

  useEffect(() => {
    if (!authLoading && !user) {
      setLocation('/login');
    }
  }, [user, authLoading, setLocation]);

  useEffect(() => {
    if (editingPage) {
      form.reset({
        title: editingPage.title,
        slug: editingPage.slug,
        content: editingPage.content,
        excerpt: editingPage.excerpt || '',
        author: editingPage.author,
        featuredImageUrl: editingPage.featuredImageUrl || '',
        metaTitle: editingPage.metaTitle || '',
        metaDescription: editingPage.metaDescription || '',
        status: editingPage.status as "draft" | "published" | "private",
        template: editingPage.template || 'default',
        order: editingPage.order || 0,
      });
      setIsFormOpen(true);
    }
  }, [editingPage, form]);

  const onSubmit = (data: InsertPage) => {
    if (editingPage) {
      updateMutation.mutate({ id: editingPage.id, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const handleEdit = (page: Page) => {
    setEditingPage(page);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this page?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleCancel = () => {
    setIsFormOpen(false);
    setEditingPage(null);
    form.reset();
  };

  const handleLogout = async () => {
    await logout();
    setLocation('/login');
  };

  const filteredPages = pages?.filter(page => 
    page.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.slug.toLowerCase().includes(searchQuery.toLowerCase()) ||
    page.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2" data-testid="text-admin-title">Page Management</h1>
              <p className="text-gray-600 dark:text-gray-400">Create and manage pages like WordPress</p>
            </div>
            <div className="flex gap-2">
              <Link href="/admin">
                <Button variant="outline" data-testid="button-back-admin">
                  Back to Admin
                </Button>
              </Link>
              <Button onClick={handleLogout} variant="outline" data-testid="button-logout">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>

          <div className="mb-6 flex gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search pages by title, slug, or status..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
                data-testid="input-search"
              />
            </div>
            <Button 
              onClick={() => setIsFormOpen(true)} 
              className="whitespace-nowrap"
              data-testid="button-add-page"
            >
              <Plus className="w-4 h-4 mr-2" />
              Add New Page
            </Button>
          </div>

          {isFormOpen && (
            <Card className="p-6 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold" data-testid="text-form-title">
                  {editingPage ? 'Edit Page' : 'Create New Page'}
                </h2>
                <Button variant="ghost" size="sm" onClick={handleCancel} data-testid="button-close-form">
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="title"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Page Title *</FormLabel>
                          <FormControl>
                            <Input 
                              {...field} 
                              placeholder="Enter page title" 
                              data-testid="input-title"
                              onChange={(e) => {
                                field.onChange(e);
                                if (!editingPage) {
                                  const slug = e.target.value
                                    .toLowerCase()
                                    .replace(/[^a-z0-9]+/g, '-')
                                    .replace(/^-|-$/g, '');
                                  form.setValue('slug', slug);
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
                          <FormLabel>Slug *</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="page-url-slug" data-testid="input-slug" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt / Short Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="Brief summary of the page" 
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
                    name="content"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Page Content *</FormLabel>
                        <FormControl>
                          <RichTextEditor
                            value={field.value}
                            onChange={field.onChange}
                            data-testid="input-content"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="featuredImageUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Featured Image</FormLabel>
                        <FormControl>
                          <ImagePicker
                            value={field.value || ''}
                            onChange={field.onChange}
                            data-testid="input-image"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="status"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Status *</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-status">
                                <SelectValue placeholder="Select status" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="draft">Draft</SelectItem>
                              <SelectItem value="published">Published</SelectItem>
                              <SelectItem value="private">Private</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="template"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Template</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger data-testid="select-template">
                                <SelectValue placeholder="Select template" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="default">Default</SelectItem>
                              <SelectItem value="full-width">Full Width</SelectItem>
                              <SelectItem value="sidebar">With Sidebar</SelectItem>
                              <SelectItem value="landing">Landing Page</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <FormField
                      control={form.control}
                      name="metaTitle"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Meta Title (SEO)</FormLabel>
                          <FormControl>
                            <Input {...field} placeholder="SEO title" data-testid="input-meta-title" />
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
                  </div>

                  <FormField
                    control={form.control}
                    name="metaDescription"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Description (SEO)</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            placeholder="SEO description" 
                            rows={2}
                            data-testid="input-meta-description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex gap-2 justify-end pt-4">
                    <Button type="button" variant="outline" onClick={handleCancel} data-testid="button-cancel">
                      Cancel
                    </Button>
                    <Button 
                      type="submit" 
                      disabled={createMutation.isPending || updateMutation.isPending}
                      data-testid="button-submit"
                    >
                      {createMutation.isPending || updateMutation.isPending
                        ? 'Saving...'
                        : editingPage
                        ? 'Update Page'
                        : 'Create Page'}
                    </Button>
                  </div>
                </form>
              </Form>
            </Card>
          )}

          <Card>
            <div className="overflow-x-auto">
              {isLoading ? (
                <div className="p-8 text-center">Loading pages...</div>
              ) : filteredPages && filteredPages.length > 0 ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Slug</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Template</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Updated</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredPages.map((page) => (
                      <TableRow key={page.id} data-testid={`row-page-${page.id}`}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            <FileText className="w-4 h-4 text-gray-400" />
                            {page.title}
                          </div>
                        </TableCell>
                        <TableCell className="text-sm text-gray-600 dark:text-gray-400">
                          {page.slug}
                        </TableCell>
                        <TableCell>
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            page.status === 'published' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : page.status === 'draft'
                              ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                              : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                          }`}>
                            {page.status}
                          </span>
                        </TableCell>
                        <TableCell className="text-sm">{page.template || 'default'}</TableCell>
                        <TableCell className="text-sm">{page.author}</TableCell>
                        <TableCell className="text-sm text-gray-600 dark:text-gray-400">
                          {new Date(page.updatedAt!).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleEdit(page)}
                              data-testid={`button-edit-${page.id}`}
                            >
                              <Pencil className="w-4 h-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="sm"
                              onClick={() => handleDelete(page.id)}
                              data-testid={`button-delete-${page.id}`}
                            >
                              <Trash2 className="w-4 h-4 text-red-500" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div className="p-8 text-center text-gray-500" data-testid="text-no-pages">
                  {searchQuery ? 'No pages found matching your search.' : 'No pages yet. Create your first page!'}
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
