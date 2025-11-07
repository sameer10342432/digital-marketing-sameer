import { useEffect } from 'react';
import { Search, TrendingUp, Target, Zap, Award, BarChart3 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { setPageMeta } from '@/lib/seo';

export default function SEOAgency() {
  useEffect(() => {
    setPageMeta({
      title: 'SEO Agency - Professional Search Engine Optimization Services',
      description: 'Expert SEO agency delivering top rankings, increased organic traffic, and sustainable growth. Comprehensive SEO strategies including technical optimization, content, and link building.'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-green-100 dark:bg-green-900 rounded-lg mb-6">
            <Search className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="heading-hero">
            SEO Agency
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-hero-description">
            Professional SEO services that improve rankings, drive qualified traffic, and deliver measurable ROI through proven strategies
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-features">
            Why Choose Our SEO Agency
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-1">
              <Award className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Proven Track Record</h3>
              <p className="text-gray-600 dark:text-gray-300">Years of experience delivering first-page rankings for competitive keywords</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-2">
              <Target className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">White-Hat Techniques</h3>
              <p className="text-gray-600 dark:text-gray-300">Ethical, Google-approved strategies that build sustainable long-term results</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-3">
              <BarChart3 className="h-10 w-10 text-green-600 dark:text-green-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Data-Driven Approach</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive analytics and reporting to track progress and ROI</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-process">
            Our SEO Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'SEO Audit', description: 'Comprehensive analysis of current site performance and opportunities' },
              { step: 2, title: 'Keyword Research', description: 'Identify high-value keywords aligned with business objectives' },
              { step: 3, title: 'Technical Optimization', description: 'Fix technical issues, improve site speed, and enhance crawlability' },
              { step: 4, title: 'Content Strategy', description: 'Create and optimize content for target keywords and user intent' },
              { step: 5, title: 'Link Building', description: 'Earn high-quality backlinks from authoritative industry sources' },
              { step: 6, title: 'Monitor & Refine', description: 'Continuous tracking, analysis, and optimization for best results' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4" data-testid={`step-process-${item.step}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-green-600 dark:bg-green-500 text-white rounded-full flex items-center justify-center font-bold">
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
            SEO Results We Deliver
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-traffic">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">285%</div>
              <div className="text-gray-600 dark:text-gray-300">Avg Traffic Increase</div>
            </div>
            <div data-testid="stat-keywords">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">1,500+</div>
              <div className="text-gray-600 dark:text-gray-300">Keywords Ranked</div>
            </div>
            <div data-testid="stat-page1">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">78%</div>
              <div className="text-gray-600 dark:text-gray-300">Page 1 Rankings</div>
            </div>
            <div data-testid="stat-conversions">
              <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">340%</div>
              <div className="text-gray-600 dark:text-gray-300">ROI from Organic</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white" data-testid="heading-contact">
            Ready to Dominate Search Rankings?
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Partner with an SEO agency that delivers sustainable organic growth
          </p>
          <ServiceContactForm serviceName="SEO Agency" />
        </div>
      </section>

      <section className="py-16 px-4 bg-green-600 dark:bg-green-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
            Grow Your Organic Traffic
          </h2>
          <p className="text-xl mb-8 text-green-100">
            Start ranking higher and attracting more qualified leads today
          </p>
          <a href="#contact" className="inline-block bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors" data-testid="button-cta">
            Get Free SEO Audit
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
