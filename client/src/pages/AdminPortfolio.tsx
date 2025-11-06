import { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocation } from 'wouter';
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
import { insertPortfolioSchema, type Portfolio, type InsertPortfolio } from '@shared/schema';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { ImagePicker } from '@/components/ImagePicker';
import { useAuth } from '@/lib/useAuth';
import { Link } from 'wouter';

export default function AdminPortfolio() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading, logout } = useAuth();
  const [editingPortfolio, setEditingPortfolio] = useState<Portfolio | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [technologies, setTechnologies] = useState<string>('');

  const { data: portfolios, isLoading } = useQuery<Portfolio[]>({
    queryKey: ['/api/portfolios'],
    enabled: !!user,
  });

  const form = useForm<InsertPortfolio>({
    resolver: zodResolver(insertPortfolioSchema),
    defaultValues: {
      title: '',
      description: '',
      imageUrl: '',
      projectUrl: '',
      category: '',
      technologies: [],
      published: true,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertPortfolio) => {
      const res = await apiRequest('POST', '/api/portfolios', data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolios'] });
      toast({
        title: 'Success',
        description: 'Portfolio created successfully',
      });
      form.reset();
      setIsFormOpen(false);
      setTechnologies('');
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to create portfolio',
        variant: 'destructive',
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: InsertPortfolio }) => {
      const res = await apiRequest('PUT', `/api/portfolios/${id}`, data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolios'] });
      toast({
        title: 'Success',
        description: 'Portfolio updated successfully',
      });
      form.reset();
      setEditingPortfolio(null);
      setIsFormOpen(false);
      setTechnologies('');
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update portfolio',
        variant: 'destructive',
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/portfolios/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/portfolios'] });
      toast({
        title: 'Success',
        description: 'Portfolio deleted successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete portfolio',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertPortfolio) => {
    const techArray = technologies
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0);
    
    const cleanedData = {
      ...data,
      technologies: techArray,
      projectUrl: data.projectUrl || undefined,
    };
    
    if (editingPortfolio) {
      updateMutation.mutate({ id: editingPortfolio.id, data: cleanedData });
    } else {
      createMutation.mutate(cleanedData);
    }
  };

  const handleEdit = (portfolio: Portfolio) => {
    setEditingPortfolio(portfolio);
    form.reset({
      title: portfolio.title,
      description: portfolio.description,
      imageUrl: portfolio.imageUrl,
      projectUrl: portfolio.projectUrl || '',
      category: portfolio.category,
      technologies: portfolio.technologies || [],
      published: portfolio.published,
    });
    setTechnologies(portfolio.technologies?.join(', ') || '');
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this portfolio?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleNewPortfolio = () => {
    setEditingPortfolio(null);
    form.reset({
      title: '',
      description: '',
      imageUrl: '',
      projectUrl: '',
      category: '',
      technologies: [],
      published: true,
    });
    setTechnologies('');
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setEditingPortfolio(null);
    form.reset();
    setTechnologies('');
    setIsFormOpen(false);
  };

  useEffect(() => {
    if (!authLoading && !user) {
      setLocation('/login');
    }
  }, [user, authLoading, setLocation]);

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
                <Button variant="outline" data-testid="button-nav-blogs">
                  Manage Blogs
                </Button>
              </Link>
              <Link href="/admin/portfolios">
                <Button variant="default" data-testid="button-nav-portfolios">
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
              <Button onClick={handleNewPortfolio} data-testid="button-new-portfolio">
                <Plus className="mr-2 h-4 w-4" />
                New Portfolio
              </Button>
            </div>
          )}

          {isFormOpen && (
            <Card className="p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingPortfolio ? 'Edit Portfolio' : 'Create New Portfolio'}
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
                            placeholder="Enter portfolio title"
                            data-testid="input-title"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            placeholder="Describe the portfolio project"
                            rows={4}
                            data-testid="input-description"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g., SEO, PPC, Social Media"
                            data-testid="input-category"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div>
                    <label className="text-sm font-medium">Technologies</label>
                    <Input
                      value={technologies}
                      onChange={(e) => setTechnologies(e.target.value)}
                      placeholder="Enter technologies separated by commas (e.g., React, Node.js, MongoDB)"
                      data-testid="input-technologies"
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Separate multiple technologies with commas
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="projectUrl"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project URL (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="https://example.com"
                            data-testid="input-project-url"
                          />
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
                        <FormLabel>Portfolio Image</FormLabel>
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
                            Make this portfolio visible to the public
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
                      data-testid="button-submit-portfolio"
                    >
                      {editingPortfolio ? 'Update Portfolio' : 'Create Portfolio'}
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
              <h2 className="text-2xl font-bold mb-4">All Portfolios</h2>
              {isLoading ? (
                <p>Loading portfolios...</p>
              ) : !portfolios || portfolios.length === 0 ? (
                <p className="text-muted-foreground">No portfolios yet. Create your first portfolio!</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {portfolios.map((portfolio) => (
                      <TableRow key={portfolio.id} data-testid={`row-portfolio-${portfolio.id}`}>
                        <TableCell className="font-medium">{portfolio.title}</TableCell>
                        <TableCell>{portfolio.category}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              portfolio.published
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                            }`}
                          >
                            {portfolio.published ? 'Published' : 'Draft'}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(portfolio.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(portfolio)}
                              data-testid={`button-edit-${portfolio.id}`}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(portfolio.id)}
                              data-testid={`button-delete-${portfolio.id}`}
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
