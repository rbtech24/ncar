import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-brand-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Get Recruited?
        </h2>
        <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of student-athletes who have already found their perfect college match with NCAR.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button className="bg-white text-brand-primary hover:bg-neutral-100 px-8 py-3 rounded-md font-medium text-base transition-all duration-200 shadow-sm hover:shadow-md border-0 flex items-center gap-2">
            Start Your Profile
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button className="btn-secondary border-white text-white hover:bg-white hover:text-brand-primary">
            Schedule Demo
          </Button>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white opacity-90">
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4" />
            Free to start
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4" />
            No credit card required
          </div>
          <div className="flex items-center gap-2 text-sm">
            <CheckCircle className="w-4 h-4" />
            Full support included
          </div>
        </div>
      </div>
    </section>
  );
}
