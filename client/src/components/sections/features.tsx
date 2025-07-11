import { Card, CardContent } from "@/components/ui/card";
import { Video, TrendingUp, Search, Mail, Calendar, GraduationCap } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Video,
      title: "Video Highlights",
      description: "Professional video hosting and sharing tools to showcase your best moments and skills to coaches.",
      color: "bg-accent-orange"
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Track your progress with detailed statistics and performance metrics that matter to college coaches.",
      color: "bg-accent-green"
    },
    {
      icon: Search,
      title: "College Matching",
      description: "Advanced algorithms match athletes with suitable college programs based on academic and athletic criteria.",
      color: "bg-ncaa-blue"
    },
    {
      icon: Mail,
      title: "Direct Communication",
      description: "Secure messaging system connecting athletes directly with college coaches and recruiting staff.",
      color: "bg-accent-orange"
    },
    {
      icon: Calendar,
      title: "Event Management",
      description: "Organize and promote recruiting events, camps, and showcases with comprehensive event tools.",
      color: "bg-accent-green"
    },
    {
      icon: GraduationCap,
      title: "Academic Support",
      description: "Academic planning tools and resources to ensure eligibility and academic success in college.",
      color: "bg-ncaa-blue"
    }
  ];

  return (
    <section id="features" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ncaa-blue mb-4">
            Why RecruitCore?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by thousands of athletes and coaches nationwide for comprehensive recruiting solutions.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="card-feature">
              <CardContent className="p-8">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-6`}>
                  <feature.icon className="text-white w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl font-bold text-ncaa-blue mb-4">{feature.title}</h3>
                <p className="text-gray-600">
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
