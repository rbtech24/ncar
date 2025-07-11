import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section 
      className="relative py-16 md:py-24 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.4), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
      }}
    >
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              The Future of<br />
              <span className="text-brand-accent">Sports Recruiting</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              A modern sports recruiting website that revolutionizes how student-athletes connect with college programs. Advanced tools, real-time analytics, and direct coach communication.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3 rounded-md font-medium text-base transition-all duration-200 shadow-lg hover:shadow-xl border-0">
                Start Your Profile
              </Button>
              <Button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary px-8 py-3 rounded-md font-medium text-base transition-all duration-200 flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>
            
            <div className="mt-8 flex items-center gap-6">
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle className="w-4 h-4 text-brand-accent" />
                Free to start
              </div>
              <div className="flex items-center gap-2 text-sm text-white/80">
                <CheckCircle className="w-4 h-4 text-brand-accent" />
                No credit card required
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-neutral-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden shadow-md">
                    <img 
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=200&q=80"
                      alt="Jordan Davis profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-neutral-800 text-lg">Jordan Davis</h3>
                    <p className="text-sm text-neutral-600 font-medium">Basketball • Class of 2025</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600 font-medium">Profile Views</span>
                    <span className="font-bold text-brand-primary text-lg">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600 font-medium">Coach Contacts</span>
                    <span className="font-bold text-brand-secondary text-lg">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600 font-medium">Scholarship Offers</span>
                    <span className="font-bold text-brand-accent text-lg">5</span>
                  </div>
                </div>
                <div className="mt-6 pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-neutral-600 font-medium">Profile Completion</span>
                    <span className="text-sm font-bold text-brand-secondary">94%</span>
                  </div>
                  <div className="w-full bg-neutral-200 rounded-full h-3">
                    <div className="bg-brand-secondary h-3 rounded-full shadow-sm" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-3 -right-3 bg-brand-secondary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
                New Message!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
