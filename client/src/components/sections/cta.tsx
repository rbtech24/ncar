import { Button } from "@/components/ui/button";

export default function CTA() {
  return (
    <section className="py-20 bg-ncaa-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Take the Next Step?
        </h2>
        <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
          Join thousands of student-athletes who have already started their college recruiting journey with RecruitCore.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button className="btn-accent-orange">
            Get Started Free
          </Button>
          <Button variant="outline" className="btn-secondary">
            Schedule Demo
          </Button>
        </div>
        
        <div className="mt-8 text-white opacity-75">
          <p className="text-sm">No credit card required • Free 30-day trial • Full support included</p>
        </div>
      </div>
    </section>
  );
}
