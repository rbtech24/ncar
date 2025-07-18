import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";

export default function Statistics() {
  const stats = [
    { number: "15,000+", label: "Student-Athletes", color: "text-blue-600" },
    { number: "2,500+", label: "College Coaches", color: "text-blue-600" },
    { number: "8,200+", label: "Commitments", color: "text-blue-600" },
    { number: "$45M+", label: "Scholarships Awarded", color: "text-blue-600" }
  ];

  const testimonials = [
    {
      quote: "NCAR transformed my recruiting journey. Got offers from 3 Division I schools!",
      author: "Sarah J.",
      details: "Soccer • University of Michigan",
      rating: 5
    },
    {
      quote: "Best recruiting tool I've used. Saves me hours finding the right athletes.",
      author: "Coach Thompson",
      details: "Basketball • Duke University",
      rating: 5
    },
    {
      quote: "The platform is intuitive and the results speak for themselves.",
      author: "Amanda R.",
      details: "Track & Field • Stanford",
      rating: 5
    },
    {
      quote: "Connected me with coaches I never would have reached otherwise.",
      author: "Marcus W.",
      details: "Football • University of Texas",
      rating: 5
    },
    {
      quote: "Made the overwhelming recruiting process simple and organized.",
      author: "Emily C.",
      details: "Swimming • UCLA",
      rating: 5
    },
    {
      quote: "The search and filtering tools are incredibly powerful and efficient.",
      author: "Coach Davis",
      details: "Volleyball • University of Florida",
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-200 rounded-full"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-green-200 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-orange-200 rounded-full"></div>
        <div className="absolute bottom-32 right-10 w-28 h-28 bg-purple-200 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Trusted by <span className="text-blue-600">Thousands</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join the growing community of student-athletes and coaches who have transformed their recruiting success with NCAR.
          </p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`font-heading text-3xl md:text-4xl lg:text-5xl font-bold ${stat.color} mb-3`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium text-lg">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
        
        {/* What Our Community Says */}
        <div className="bg-slate-50 rounded-3xl p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full opacity-20 transform translate-x-32 -translate-y-32"></div>
          
          <div className="text-center mb-12 relative z-10">
            <h3 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Real success stories from student-athletes and coaches across the country.
            </p>
          </div>
          
          {/* Review Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
            {testimonials.slice(0, 6).map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                {/* Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-gray-800 stroke-1" />
                  ))}
                </div>
                
                {/* Quote */}
                <p className="text-gray-700 mb-6 text-sm leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm">{testimonial.author}</div>
                    <div className="text-xs text-gray-500">{testimonial.details}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
