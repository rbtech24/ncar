import { ArrowRight, User, Target, Trophy, Play, CheckCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Build a comprehensive recruiting profile with your athletic achievements, academic records, and highlight videos in minutes.",
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
      icon: User,
      features: ["Upload highlight videos", "Add academic records", "Showcase achievements"],
      color: "blue"
    },
    {
      number: "2",
      title: "Connect with Coaches",
      description: "Get discovered by college coaches actively searching for talent, or reach out directly to programs that interest you.",
      bgColor: "bg-gradient-to-br from-green-500 to-green-600",
      icon: Target,
      features: ["Get discovered by coaches", "Direct messaging", "Match with programs"],
      color: "green"
    },
    {
      number: "3",
      title: "Achieve Your Goals",
      description: "Secure scholarship offers and commitments to your dream college programs through our proven recruiting process.",
      bgColor: "bg-gradient-to-br from-purple-500 to-purple-600",
      icon: Trophy,
      features: ["Receive scholarship offers", "Track commitments", "Success guaranteed"],
      color: "purple"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.08),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-blue-100 rounded-full opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-100 rounded-full opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            How It{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Works
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process makes college recruiting simple and effective for student-athletes. Follow these three steps to transform your athletic dreams into reality.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-dashed border-gray-300"></div>
              </div>
            </div>
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                {/* Step number badge */}
                <div className="absolute -top-4 left-8">
                  <div className={`w-12 h-12 ${step.bgColor} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <span className="font-bold text-lg text-white">{step.number}</span>
                  </div>
                </div>
                
                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className={`w-20 h-20 bg-${step.color}-100 rounded-3xl flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                    <step.icon className={`w-10 h-10 text-${step.color}-600`} />
                  </div>
                </div>
                
                {/* Content */}
                <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {step.description}
                </p>
                
                {/* Features checklist */}
                <div className="space-y-3">
                  {step.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className={`w-5 h-5 text-${step.color}-500`} />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                
                {/* Hover effect indicator */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className={`w-full h-1 bg-gradient-to-r from-${step.color}-500 to-${step.color}-600 rounded-full`}></div>
                </div>
              </div>
              
              {/* Arrow connector for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-24 -right-6 z-20">
                  <div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-gray-100 group-hover:scale-110 transition-transform duration-300">
                    <ArrowRight className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-300" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            <div className="flex items-center gap-2">
              <Play className="w-5 h-5" />
              <span>Start Your Journey Today</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
