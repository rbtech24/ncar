import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

export default function Statistics() {
  const stats = [
    { number: "15,000+", label: "Student-Athletes", color: "text-accent-orange" },
    { number: "2,500+", label: "College Coaches", color: "text-accent-green" },
    { number: "8,200+", label: "Commitments", color: "text-ncaa-blue" },
    { number: "$45M+", label: "Scholarships Awarded", color: "text-accent-orange" }
  ];

  const testimonials = [
    {
      quote: "RecruitCore helped me connect with my dream school. The platform made the recruiting process so much easier and more organized.",
      author: "Sarah Johnson",
      details: "Soccer • University of Michigan"
    },
    {
      quote: "As a coach, RecruitCore has revolutionized how we identify and evaluate talent. The video features are outstanding.",
      author: "Coach Mike Thompson",
      details: "Basketball • Duke University"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ncaa-blue mb-4">
            Proven Results
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our platform has helped thousands of student-athletes achieve their college sports dreams.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className={`font-heading text-4xl md:text-5xl font-bold ${stat.color} mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-neutral-light">
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-ncaa-blue rounded-full flex-shrink-0 flex items-center justify-center">
                    <Quote className="text-white w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-gray-700 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div className="font-semibold text-ncaa-blue">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.details}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
