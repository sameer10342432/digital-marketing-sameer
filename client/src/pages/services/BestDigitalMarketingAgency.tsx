import { useEffect } from 'react';
import { Award, TrendingUp, Users, Zap, Star, Trophy } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { setPageMeta } from '@/lib/seo';

export default function BestDigitalMarketingAgency() {
  useEffect(() => {
    setPageMeta({
      title: 'Best Digital Marketing Agency - Award-Winning Marketing Services',
      description: 'Award-winning digital marketing agency delivering exceptional results through data-driven strategies, creative campaigns, and transparent reporting. Trusted by leading brands worldwide.'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-amber-100 dark:bg-amber-900 rounded-lg mb-6">
            <Trophy className="h-12 w-12 text-amber-600 dark:text-amber-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="heading-hero">
            Best Digital Marketing Agency
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-hero-description">
            Award-winning agency delivering exceptional results through innovative strategies, expert execution, and unwavering commitment to your success
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-features">
            What Makes Us the Best
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-1">
              <Award className="h-10 w-10 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Award-Winning Team</h3>
              <p className="text-gray-600 dark:text-gray-300">Industry-recognized experts with proven track record of excellence</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-2">
              <Star className="h-10 w-10 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">5-Star Client Service</h3>
              <p className="text-gray-600 dark:text-gray-300">Dedicated account management and exceptional support at every step</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-3">
              <TrendingUp className="h-10 w-10 text-amber-600 dark:text-amber-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Exceptional Results</h3>
              <p className="text-gray-600 dark:text-gray-300">Consistently exceeding client goals with measurable business impact</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-process">
            Our Excellence-Driven Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Strategic Discovery', description: 'In-depth analysis of your business, market, and opportunities' },
              { step: 2, title: 'Custom Strategy', description: 'Tailored marketing plan designed for your unique objectives' },
              { step: 3, title: 'Expert Execution', description: 'Flawless implementation by certified specialists' },
              { step: 4, title: 'Proactive Optimization', description: 'Continuous testing and refinement for peak performance' },
              { step: 5, title: 'Transparent Reporting', description: 'Clear, comprehensive analytics showing real business impact' },
              { step: 6, title: 'Partnership Growth', description: 'Long-term collaboration focused on sustainable success' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4" data-testid={`step-process-${item.step}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-amber-600 dark:bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">
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
            Award-Winning Performance
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-awards">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Industry Awards</div>
            </div>
            <div data-testid="stat-clients">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">600+</div>
              <div className="text-gray-600 dark:text-gray-300">Successful Projects</div>
            </div>
            <div data-testid="stat-roi">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">450%</div>
              <div className="text-gray-600 dark:text-gray-300">Average ROI</div>
            </div>
            <div data-testid="stat-satisfaction">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white" data-testid="heading-contact">
            Experience the Difference
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Join hundreds of successful businesses who trust us with their growth
          </p>
          <ServiceContactForm serviceName="Best Digital Marketing Agency" />
        </div>
      </section>

      <section className="py-16 px-4 bg-amber-600 dark:bg-amber-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
            Partner with the Best
          </h2>
          <p className="text-xl mb-8 text-amber-100">
            Let's achieve extraordinary results together
          </p>
          <a href="#contact" className="inline-block bg-white text-amber-600 px-8 py-3 rounded-lg font-semibold hover:bg-amber-50 transition-colors" data-testid="button-cta">
            Get Started Today
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
