import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Ready to Transform Your Digital Marketing?
        </h2>
        <p className="text-lg md:text-xl mb-8 opacity-90 leading-relaxed">
          Let's discuss how data-driven marketing strategies can help you achieve your business goals. Schedule a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 py-6 rounded-full"
              data-testid="button-cta-contact"
            >
              Get In Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/portfolio">
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-full border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="button-cta-portfolio"
            >
              View Case Studies
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
