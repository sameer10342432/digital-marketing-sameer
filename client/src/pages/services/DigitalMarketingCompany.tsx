import { useEffect } from 'react';
import { Target, TrendingUp, Users, Zap, Award, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingCompany() {
  useEffect(() => {
    setPageMeta({
      title: 'Digital Marketing Company - Full-Service Marketing Solutions',
      description: 'Leading digital marketing company providing comprehensive online marketing solutions including SEO, PPC, social media, content marketing, and web design to grow your business and maximize ROI.'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-blue-100 dark:bg-blue-900 rounded-lg mb-6">
            <Target className="h-12 w-12 text-blue-600 dark:text-blue-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="heading-hero">
            Digital Marketing Company
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-hero-description">
            Your trusted partner for complete digital marketing solutions that drive growth, increase revenue, and build lasting customer relationships
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-features">
            Why Choose Our Digital Marketing Company
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-1">
              <TrendingUp className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Full-Service Solutions</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive digital marketing services under one roof - from strategy to execution</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-2">
              <Users className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Expert Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Certified specialists in SEO, PPC, social media, content, and web design</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-3">
              <Award className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Proven Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Track record of delivering measurable ROI and business growth for clients</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-process">
            Our Marketing Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Business Analysis', description: 'Deep dive into your business goals, target audience, and competitive landscape' },
              { step: 2, title: 'Strategy Development', description: 'Create comprehensive marketing strategy aligned with your objectives' },
              { step: 3, title: 'Multi-Channel Setup', description: 'Establish presence across relevant digital marketing channels' },
              { step: 4, title: 'Campaign Launch', description: 'Execute integrated campaigns across SEO, PPC, social, and content' },
              { step: 5, title: 'Performance Tracking', description: 'Monitor KPIs, conversions, and ROI with advanced analytics' },
              { step: 6, title: 'Optimization & Growth', description: 'Continuous improvement and scaling of successful initiatives' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4" data-testid={`step-process-${item.step}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-results">
            Results That Matter
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-clients">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Clients</div>
            </div>
            <div data-testid="stat-revenue">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">$50M+</div>
              <div className="text-gray-600 dark:text-gray-300">Revenue Generated</div>
            </div>
            <div data-testid="stat-roi">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">380%</div>
              <div className="text-gray-600 dark:text-gray-300">Average ROI</div>
            </div>
            <div data-testid="stat-retention">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">95%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Retention</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white" data-testid="heading-contact">
            Ready to Grow Your Business?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Partner with a digital marketing company that delivers real results
          </p>
          <ServiceContactForm serviceName="Digital Marketing Company" />
        </div>
      </section>

      <section className="py-16 px-4 bg-blue-600 dark:bg-blue-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
            Transform Your Digital Presence
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's create a winning digital marketing strategy for your business
          </p>
          <a href="#contact" className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors" data-testid="button-cta">
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
