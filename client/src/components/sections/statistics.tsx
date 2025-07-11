import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Statistics() {
  const stats = [
    { number: "15,000+", label: "Student-Athletes", color: "text-brand-primary" },
    { number: "2,500+", label: "College Coaches", color: "text-brand-secondary" },
    { number: "8,200+", label: "Commitments", color: "text-brand-accent" },
    { number: "$45M+", label: "Scholarships Awarded", color: "text-brand-primary" }
  ];

  const testimonials = [
    {
      quote: "NCAR completely transformed my recruiting process. Within 3 months, I had offers from multiple Division I schools.",
      author: "Sarah Johnson",
      details: "Soccer • University of Michigan",
      rating: 5
    },
    {
      quote: "The video platform and analytics helped me identify top talent efficiently. It's become an essential tool for our program.",
      author: "Coach Mike Thompson",
      details: "Basketball • Duke University",
      rating: 5
    },
    {
      quote: "Best recruiting platform I've used. The interface is intuitive and the results speak for themselves.",
      author: "Amanda Rodriguez",
      details: "Track & Field • Stanford University",
      rating: 5
    },
    {
      quote: "NCAR helped me connect with coaches I never would have reached otherwise. Highly recommended!",
      author: "Marcus Williams",
      details: "Football • University of Texas",
      rating: 5
    },
    {
      quote: "The recruiting process was overwhelming until I found NCAR. They made everything simple and organized.",
      author: "Emily Chen",
      details: "Swimming • UCLA",
      rating: 5
    },
    {
      quote: "As a coach, NCAR saves me countless hours. The search and filtering tools are incredibly powerful.",
      author: "Coach Jennifer Davis",
      details: "Volleyball • University of Florida",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Join the growing community of student-athletes and coaches who have found success with NCAR.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-heading text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-neutral-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* Scrolling Reviews */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-8">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg border border-neutral-200 min-w-[400px] flex-shrink-0">
                <CardContent className="p-8">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-black stroke-2" />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-6 text-lg leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-800">{testimonial.author}</div>
                      <div className="text-sm text-neutral-500">{testimonial.details}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
