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
import { insertServiceSchema, type Service, type InsertService } from '@shared/schema';
import { apiRequest, queryClient } from '@/lib/queryClient';
import { useAuth } from '@/lib/useAuth';
import { Link } from 'wouter';

export default function AdminService() {
  const { toast } = useToast();
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading, logout } = useAuth();
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [features, setFeatures] = useState<string>('');

  const { data: services, isLoading } = useQuery<Service[]>({
    queryKey: ['/api/services'],
    enabled: !!user,
  });

  const form = useForm<InsertService>({
    resolver: zodResolver(insertServiceSchema),
    defaultValues: {
      title: '',
      description: '',
      icon: '',
      features: [],
      published: true,
    },
  });

  const createMutation = useMutation({
    mutationFn: async (data: InsertService) => {
      const res = await apiRequest('POST', '/api/services', data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/services'] });
      toast({
        title: 'Success',
        description: 'Service created successfully',
      });
      form.reset();
      setIsFormOpen(false);
      setFeatures('');
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to create service',
        variant: 'destructive',
      });
    },
  });

  const updateMutation = useMutation({
    mutationFn: async ({ id, data }: { id: number; data: InsertService }) => {
      const res = await apiRequest('PUT', `/api/services/${id}`, data);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/services'] });
      toast({
        title: 'Success',
        description: 'Service updated successfully',
      });
      form.reset();
      setEditingService(null);
      setIsFormOpen(false);
      setFeatures('');
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to update service',
        variant: 'destructive',
      });
    },
  });

  const deleteMutation = useMutation({
    mutationFn: async (id: number) => {
      const res = await apiRequest('DELETE', `/api/services/${id}`);
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/services'] });
      toast({
        title: 'Success',
        description: 'Service deleted successfully',
      });
    },
    onError: () => {
      toast({
        title: 'Error',
        description: 'Failed to delete service',
        variant: 'destructive',
      });
    },
  });

  const onSubmit = (data: InsertService) => {
    const featuresArray = features
      .split(',')
      .map((f) => f.trim())
      .filter((f) => f.length > 0);
    
    const cleanedData = {
      ...data,
      features: featuresArray,
    };
    
    if (editingService) {
      updateMutation.mutate({ id: editingService.id, data: cleanedData });
    } else {
      createMutation.mutate(cleanedData);
    }
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    form.reset({
      title: service.title,
      description: service.description,
      icon: service.icon,
      features: service.features || [],
      published: service.published,
    });
    setFeatures(service.features?.join(', ') || '');
    setIsFormOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this service?')) {
      deleteMutation.mutate(id);
    }
  };

  const handleNewService = () => {
    setEditingService(null);
    form.reset({
      title: '',
      description: '',
      icon: '',
      features: [],
      published: true,
    });
    setFeatures('');
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setEditingService(null);
    form.reset();
    setFeatures('');
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
                <Button variant="outline" data-testid="button-nav-portfolios">
                  Manage Portfolios
                </Button>
              </Link>
              <Link href="/admin/services">
                <Button variant="default" data-testid="button-nav-services">
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
              <Button onClick={handleNewService} data-testid="button-new-service">
                <Plus className="mr-2 h-4 w-4" />
                New Service
              </Button>
            </div>
          )}

          {isFormOpen && (
            <Card className="p-6 mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold">
                  {editingService ? 'Edit Service' : 'Create New Service'}
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
                            placeholder="Enter service title"
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
                            placeholder="Describe the service"
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
                    name="icon"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Icon Name</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="e.g., Search, TrendingUp, Users (Lucide icon name)"
                            data-testid="input-icon"
                          />
                        </FormControl>
                        <FormMessage />
                        <p className="text-sm text-muted-foreground">
                          Use Lucide icon names (e.g., Search, TrendingUp, Users)
                        </p>
                      </FormItem>
                    )}
                  />

                  <div>
                    <label className="text-sm font-medium">Features</label>
                    <Input
                      value={features}
                      onChange={(e) => setFeatures(e.target.value)}
                      placeholder="Enter features separated by commas"
                      data-testid="input-features"
                      className="mt-2"
                    />
                    <p className="text-sm text-muted-foreground mt-1">
                      Separate multiple features with commas
                    </p>
                  </div>

                  <FormField
                    control={form.control}
                    name="published"
                    render={({ field }) => (
                      <FormItem className="flex items-center justify-between rounded-lg border p-4">
                        <div className="space-y-0.5">
                          <FormLabel className="text-base">Published</FormLabel>
                          <div className="text-sm text-muted-foreground">
                            Make this service visible to the public
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
                      data-testid="button-submit-service"
                    >
                      {editingService ? 'Update Service' : 'Create Service'}
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
              <h2 className="text-2xl font-bold mb-4">All Services</h2>
              {isLoading ? (
                <p>Loading services...</p>
              ) : !services || services.length === 0 ? (
                <p className="text-muted-foreground">No services yet. Create your first service!</p>
              ) : (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Icon</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Created</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {services.map((service) => (
                      <TableRow key={service.id} data-testid={`row-service-${service.id}`}>
                        <TableCell className="font-medium">{service.title}</TableCell>
                        <TableCell>{service.icon}</TableCell>
                        <TableCell>
                          <span
                            className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${
                              service.published
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                            }`}
                          >
                            {service.published ? 'Published' : 'Draft'}
                          </span>
                        </TableCell>
                        <TableCell>
                          {new Date(service.createdAt).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleEdit(service)}
                              data-testid={`button-edit-${service.id}`}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button
                              variant="ghost"
                              size="icon"
                              onClick={() => handleDelete(service.id)}
                              data-testid={`button-delete-${service.id}`}
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
