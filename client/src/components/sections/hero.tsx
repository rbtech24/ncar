import { Button } from "@/components/ui/button";
import { Play, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="College football stadium" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white">
              Get recruited to your<br />
              <span className="text-brand-accent">dream college</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-xl">
              The complete recruiting platform that connects student-athletes with college coaches nationwide. Build your profile, showcase your skills, and get discovered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Start Your Profile
              </Button>
              <Button className="btn-secondary">
                <Play className="w-4 h-4 mr-2" />
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
            <div className="relative bg-neutral-100 rounded-2xl p-8 shadow-lg">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-neutral-200">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-brand-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">JD</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">Jordan Davis</h3>
                    <p className="text-sm text-neutral-600">Basketball • Class of 2025</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Profile Views</span>
                    <span className="font-semibold text-brand-primary">1,247</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Coach Contacts</span>
                    <span className="font-semibold text-brand-secondary">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-neutral-600">Scholarship Offers</span>
                    <span className="font-semibold text-brand-accent">5</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-neutral-200">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-neutral-600">Profile Completion</span>
                    <span className="text-sm font-semibold text-brand-secondary">94%</span>
                  </div>
                  <div className="mt-2 w-full bg-neutral-200 rounded-full h-2">
                    <div className="bg-brand-secondary h-2 rounded-full" style={{ width: '94%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-brand-secondary text-white px-3 py-1 rounded-full text-sm font-medium">
                New Message!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
