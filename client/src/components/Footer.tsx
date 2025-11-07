import { Link } from 'wouter';
import { Linkedin, Twitter, Mail, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Muhammad Sameer</h3>
            <p className="text-sm text-muted-foreground">
              Full-Stack Digital Marketing Expert specializing in data-driven strategies that deliver measurable results.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" data-testid="link-footer-about"><span className="hover:text-primary transition-colors">About</span></Link></li>
              <li><Link href="/services" data-testid="link-footer-services"><span className="hover:text-primary transition-colors">Services</span></Link></li>
              <li><Link href="/all-services" data-testid="link-footer-all-services"><span className="hover:text-primary transition-colors">All Services</span></Link></li>
              <li><Link href="/portfolio" data-testid="link-footer-portfolio"><span className="hover:text-primary transition-colors">Portfolio</span></Link></li>
              <li><Link href="/blog" data-testid="link-footer-blog"><span className="hover:text-primary transition-colors">Blog</span></Link></li>
              <li><Link href="/tools" data-testid="link-footer-tools"><span className="hover:text-primary transition-colors">Tools</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services/seo-services" data-testid="link-footer-seo-services"><span className="hover:text-primary transition-colors">SEO Services</span></Link></li>
              <li><Link href="/services/ppc-campaigns" data-testid="link-footer-ppc"><span className="hover:text-primary transition-colors">PPC Advertising</span></Link></li>
              <li><Link href="/services/social-media-marketing" data-testid="link-footer-social"><span className="hover:text-primary transition-colors">Social Media Marketing</span></Link></li>
              <li><Link href="/services/email-marketing" data-testid="link-footer-email"><span className="hover:text-primary transition-colors">Email Marketing</span></Link></li>
              <li><Link href="/services/web-design-services" data-testid="link-footer-web-design"><span className="hover:text-primary transition-colors">Web Design</span></Link></li>
              <li><Link href="/all-services" data-testid="link-footer-view-all"><span className="hover:text-primary transition-colors font-semibold">View All Services</span></Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-social-linkedin">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-social-twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="mailto:contact@muhammadsameer.com" className="hover:text-primary transition-colors" data-testid="link-social-email">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" data-testid="link-social-github">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Muhammad Sameer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
