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
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Sports Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
        }}
      />
      
      {/* Light overlay for readability */}
      <div className="absolute inset-0 bg-white/60"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Everything You Need to Get{" "}
            <span className="text-blue-600">
              Recruited
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive tools and features designed to help student-athletes succeed in the college recruiting process, from profile creation to commitment day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group relative overflow-hidden bg-white border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <feature.icon className={`w-8 h-8 ${feature.color === 'bg-brand-accent' ? 'text-neutral-800' : 'text-white'}`} />
                </div>
                <h3 className="font-heading text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-1 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full"></div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
