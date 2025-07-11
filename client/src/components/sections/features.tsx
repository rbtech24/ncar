import { Card, CardContent } from "@/components/ui/card";
import { Video, TrendingUp, Search, Mail, Calendar, GraduationCap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Video,
      title: "Video Highlights",
      description: "Upload and showcase your best highlights with professional video hosting and easy sharing tools.",
      color: "bg-brand-primary"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track your recruiting progress with detailed insights and metrics that matter to college coaches.",
      color: "bg-brand-secondary"
    },
    {
      icon: Search,
      title: "College Matching",
      description: "Find the perfect fit with advanced search and matching algorithms for academic and athletic criteria.",
      color: "bg-brand-accent"
    },
    {
      icon: Mail,
      title: "Direct Messaging",
      description: "Communicate directly with college coaches through our secure, built-in messaging system.",
      color: "bg-brand-primary"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Organize and promote recruiting events, camps, and showcases with comprehensive event tools.",
      color: "bg-brand-secondary"
    },
    {
      icon: GraduationCap,
      title: "Academic Tracking",
      description: "Monitor academic progress and ensure eligibility requirements are met for college athletics.",
      color: "bg-brand-accent"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Everything You Need to Get Recruited
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Comprehensive tools and features designed to help student-athletes succeed in the college recruiting process.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-feature group hover:shadow-lg transition-all duration-200">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color === 'bg-brand-accent' ? 'text-neutral-800' : 'text-white'}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-800 mb-4">{feature.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
