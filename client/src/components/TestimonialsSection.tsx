import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

//todo: remove mock functionality
const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStyle Co.',
    content: 'Muhammad transformed our digital presence completely. His SEO strategy tripled our organic traffic and the ROI speaks for itself. Best marketing investment we\'ve made.',
    rating: 5,
    initials: 'SJ',
  },
  {
    name: 'Michael Chen',
    role: 'Founder, SaaS Startup',
    content: 'The PPC campaigns Muhammad ran were incredibly effective. We saw a 300% increase in qualified leads while reducing our cost per acquisition by 60%.',
    rating: 5,
    initials: 'MC',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director, FitLife',
    content: 'Working with Muhammad was a game-changer for our social media presence. He built a thriving community of 50K+ engaged followers and drove real business results.',
    rating: 5,
    initials: 'ER',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            What Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear from businesses I've helped grow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover-elevate transition-all duration-300"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-6 font-serif italic leading-relaxed">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
