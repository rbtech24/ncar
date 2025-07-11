import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Sports Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1574629810360-7efbbe195018?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2293&q=80')`
        }}
      />
      
      {/* Lighter Color Overlay */}
      <div className="absolute inset-0 bg-blue-900/40"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
          Ready to Get{" "}
          <span className="text-blue-400 drop-shadow-lg">
            Recruited?
          </span>
        </h2>
        <p className="text-xl md:text-2xl text-white mb-10 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
          Join thousands of student-athletes who have already found their perfect college match with NCAR. Your athletic dreams are just one click away.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105 border-0 flex items-center gap-2 justify-center">
            Start Your Profile
            <ArrowRight className="w-5 h-5" />
          </Button>
          <Button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-900 px-10 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-105">
            Schedule Demo
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
          <div className="flex items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">Free to start</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">No credit card required</span>
          </div>
          <div className="flex items-center gap-3 text-lg">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-white" />
            </div>
            <span className="font-medium">Full support included</span>
          </div>
        </div>
        
        {/* Success stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">98%</div>
            <div className="text-white/80">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">24hrs</div>
            <div className="text-white/80">Average Response</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-white mb-2">$2.4M</div>
            <div className="text-white/80">Scholarships Secured</div>
          </div>
        </div>
      </div>
    </section>
  );
}
