import { useEffect } from 'react';
import { Globe, TrendingUp, Users, Zap, Target, Award } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { setPageMeta } from '@/lib/seo';

export default function InternetMarketing() {
  useEffect(() => {
    setPageMeta({
      title: 'Internet Marketing - Complete Online Marketing Solutions',
      description: 'Comprehensive internet marketing services including SEO, PPC, social media, email marketing, and content strategy to grow your online presence and drive business results.'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-indigo-100 dark:bg-indigo-900 rounded-lg mb-6">
            <Globe className="h-12 w-12 text-indigo-600 dark:text-indigo-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="heading-hero">
            Internet Marketing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-hero-description">
            Complete online marketing solutions to build your brand, attract customers, and grow your business in the digital landscape
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-features">
            Our Internet Marketing Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-1">
              <Target className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Multi-Channel Strategy</h3>
              <p className="text-gray-600 dark:text-gray-300">Integrated approach across search, social, email, and content marketing</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-2">
              <Users className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Audience Targeting</h3>
              <p className="text-gray-600 dark:text-gray-300">Reach the right people at the right time with precision targeting</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-3">
              <Award className="h-10 w-10 text-indigo-600 dark:text-indigo-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Measurable Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Track ROI with comprehensive analytics and performance reporting</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-process">
            Our Marketing Approach
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Market Analysis', description: 'Research your industry, competitors, and target audience online behavior' },
              { step: 2, title: 'Strategy Creation', description: 'Develop comprehensive internet marketing plan aligned with goals' },
              { step: 3, title: 'Channel Activation', description: 'Launch campaigns across SEO, PPC, social media, and email' },
              { step: 4, title: 'Content Development', description: 'Create engaging content that attracts and converts prospects' },
              { step: 5, title: 'Performance Monitoring', description: 'Track metrics, analyze data, and measure campaign effectiveness' },
              { step: 6, title: 'Continuous Improvement', description: 'Optimize campaigns based on insights to maximize results' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4" data-testid={`step-process-${item.step}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-indigo-600 dark:bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">
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
            <div data-testid="stat-reach">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">5M+</div>
              <div className="text-gray-600 dark:text-gray-300">People Reached</div>
            </div>
            <div data-testid="stat-leads">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Leads Generated</div>
            </div>
            <div data-testid="stat-conversion">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">245%</div>
              <div className="text-gray-600 dark:text-gray-300">Conversion Increase</div>
            </div>
            <div data-testid="stat-clients">
              <div className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">400+</div>
              <div className="text-gray-600 dark:text-gray-300">Satisfied Clients</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white" data-testid="heading-contact">
            Start Growing Online Today
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Get a customized internet marketing plan for your business
          </p>
          <ServiceContactForm serviceName="Internet Marketing" />
        </div>
      </section>

      <section className="py-16 px-4 bg-indigo-600 dark:bg-indigo-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
            Expand Your Online Reach
          </h2>
          <p className="text-xl mb-8 text-indigo-100">
            Let's build a powerful internet marketing strategy together
          </p>
          <a href="#contact" className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors" data-testid="button-cta">
            Get Started Now
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
