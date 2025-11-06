import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PortfolioSection from '@/components/PortfolioSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import BlogSection from '@/components/BlogSection';
import SkillsSection from '@/components/SkillsSection';
import CTASection from '@/components/CTASection';
import SubscriptionModal from '@/components/SubscriptionModal';
import { setPageMeta } from '@/lib/seo';

export default function Home() {
  useEffect(() => {
    setPageMeta(
      'Digital Marketing Expert - Transform Your Business Growth',
      'Full-stack digital marketing strategist with proven expertise in SEO, PPC, social media, and content marketing. I help businesses achieve 250%+ ROI through data-driven campaigns.'
    );
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <SkillsSection />
        <BlogSection />
        <CTASection />
      </main>
      <Footer />
      <SubscriptionModal />
    </div>
  );
}
