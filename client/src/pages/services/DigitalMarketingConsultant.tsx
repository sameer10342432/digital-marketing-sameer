import { useEffect } from 'react';
import { Lightbulb, TrendingUp, Target, Zap, Users, CheckCircle } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceContactForm from '@/components/ServiceContactForm';
import { setPageMeta } from '@/lib/seo';

export default function DigitalMarketingConsultant() {
  useEffect(() => {
    setPageMeta({
      title: 'Digital Marketing Consultant - Expert Strategy & Guidance',
      description: 'Experienced digital marketing consultant providing strategic guidance, actionable insights, and customized solutions to optimize your marketing efforts and achieve business growth.'
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <Header />
      
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block p-3 bg-purple-100 dark:bg-purple-900 rounded-lg mb-6">
            <Lightbulb className="h-12 w-12 text-purple-600 dark:text-purple-400" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white" data-testid="heading-hero">
            Digital Marketing Consultant
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto" data-testid="text-hero-description">
            Get expert strategic guidance to optimize your digital marketing and drive sustainable business growth
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-features">
            Consulting Services
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-1">
              <Target className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Strategy Development</h3>
              <p className="text-gray-600 dark:text-gray-300">Customized marketing strategies aligned with your business goals and budget</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-2">
              <CheckCircle className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Marketing Audit</h3>
              <p className="text-gray-600 dark:text-gray-300">Comprehensive analysis of current efforts with actionable recommendations</p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg" data-testid="card-feature-3">
              <Users className="h-10 w-10 text-purple-600 dark:text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">Team Training</h3>
              <p className="text-gray-600 dark:text-gray-300">Empower your team with knowledge and skills to execute effectively</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 dark:text-white" data-testid="heading-process">
            Consulting Process
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Discovery Call', description: 'Understand your business, challenges, and marketing objectives' },
              { step: 2, title: 'Comprehensive Audit', description: 'Analyze current marketing performance across all channels' },
              { step: 3, title: 'Strategy Blueprint', description: 'Develop customized roadmap with priorities and timelines' },
              { step: 4, title: 'Implementation Plan', description: 'Detailed action plan with resources, budget, and KPIs' },
              { step: 5, title: 'Ongoing Support', description: 'Regular check-ins, performance reviews, and strategy adjustments' },
              { step: 6, title: 'Results Analysis', description: 'Measure outcomes, identify wins, and optimize for future growth' }
            ].map((item) => (
              <div key={item.step} className="flex gap-4" data-testid={`step-process-${item.step}`}>
                <div className="flex-shrink-0 w-12 h-12 bg-purple-600 dark:bg-purple-500 text-white rounded-full flex items-center justify-center font-bold">
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
            Client Success Metrics
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div data-testid="stat-revenue">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">$75M+</div>
              <div className="text-gray-600 dark:text-gray-300">Revenue Impact</div>
            </div>
            <div data-testid="stat-clients">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">200+</div>
              <div className="text-gray-600 dark:text-gray-300">Businesses Consulted</div>
            </div>
            <div data-testid="stat-roi">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">425%</div>
              <div className="text-gray-600 dark:text-gray-300">Average ROI</div>
            </div>
            <div data-testid="stat-satisfaction">
              <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">98%</div>
              <div className="text-gray-600 dark:text-gray-300">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white dark:bg-gray-800">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4 text-gray-900 dark:text-white" data-testid="heading-contact">
            Schedule Your Consultation
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
            Get expert guidance to transform your digital marketing strategy
          </p>
          <ServiceContactForm serviceName="Digital Marketing Consultant" />
        </div>
      </section>

      <section className="py-16 px-4 bg-purple-600 dark:bg-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Zap className="h-12 w-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4" data-testid="heading-cta">
            Strategic Insights Await
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Let's unlock your marketing potential together
          </p>
          <a href="#contact" className="inline-block bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors" data-testid="button-cta">
            Book Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
