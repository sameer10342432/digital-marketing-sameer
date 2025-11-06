import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, Link } from 'wouter';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { LogOut, Mail, Download } from 'lucide-react';
import type { Subscription } from '@shared/schema';
import { useAuth } from '@/lib/useAuth';

export default function AdminSubscriptions() {
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading, logout } = useAuth();

  const { data: subscriptions, isLoading } = useQuery<Subscription[]>({
    queryKey: ['/api/subscriptions'],
    enabled: !!user,
  });

  useEffect(() => {
    if (!authLoading && !user) {
      setLocation('/login');
    }
  }, [user, authLoading, setLocation]);

  const exportToCSV = () => {
    if (!subscriptions || subscriptions.length === 0) return;

    const headers = ['Email', 'Subscribed At (ISO)', 'Date', 'Time'];
    const rows = subscriptions.map(sub => {
      const date = new Date(sub.createdAt);
      return [
        sub.email,
        date.toISOString(),
        date.toISOString().split('T')[0],
        date.toISOString().split('T')[1].split('.')[0]
      ];
    });

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `subscribers-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

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
                <Button variant="outline" data-testid="button-nav-services">
                  Manage Services
                </Button>
              </Link>
              <Link href="/admin/subscriptions">
                <Button variant="default" data-testid="button-nav-subscriptions">
                  Newsletter Subscribers
                </Button>
              </Link>
            </div>
          </div>

          <Card>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Mail className="w-6 h-6" />
                    Newsletter Subscribers
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    {subscriptions?.length || 0} total subscribers
                  </p>
                </div>
                {subscriptions && subscriptions.length > 0 && (
                  <Button
                    onClick={exportToCSV}
                    variant="outline"
                    data-testid="button-export-csv"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Export to CSV
                  </Button>
                )}
              </div>

              {isLoading ? (
                <div className="text-center py-12">
                  <p className="text-muted-foreground">Loading subscribers...</p>
                </div>
              ) : !subscriptions || subscriptions.length === 0 ? (
                <div className="text-center py-12">
                  <Mail className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
                  <p className="text-muted-foreground text-lg mb-2">No subscribers yet</p>
                  <p className="text-sm text-muted-foreground">
                    Subscribers will appear here when visitors sign up for your newsletter
                  </p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-12">#</TableHead>
                        <TableHead>Email Address</TableHead>
                        <TableHead>Subscribed Date</TableHead>
                        <TableHead>Time</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {subscriptions.map((subscription, index) => (
                        <TableRow key={subscription.id} data-testid={`row-subscription-${subscription.id}`}>
                          <TableCell className="font-medium text-muted-foreground">
                            {index + 1}
                          </TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium" data-testid={`email-${subscription.id}`}>
                                {subscription.email}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell data-testid={`date-${subscription.id}`}>
                            {new Date(subscription.createdAt).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </TableCell>
                          <TableCell className="text-muted-foreground" data-testid={`time-${subscription.id}`}>
                            {new Date(subscription.createdAt).toLocaleTimeString('en-US', {
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </div>
          </Card>

          <Card className="mt-6">
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3">About Newsletter Subscriptions</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  ✅ Subscribers are automatically added when visitors fill out the subscription form on your homepage
                </p>
                <p>
                  ✅ Each subscription is logged to your email: <strong className="text-foreground">sameerliaqat81@gmail.com</strong>
                </p>
                <p>
                  ✅ Export your subscriber list to CSV to import into email marketing platforms
                </p>
                <p>
                  ✅ The subscription popup appears once per visitor (3 seconds after landing on the homepage)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
