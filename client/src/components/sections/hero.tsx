import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-ncaa-blue text-white py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Connect Athletes with<br />
            <span className="text-accent-orange">College Opportunities</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto font-light">
            The premier platform trusted by thousands of student-athletes, coaches, and programs nationwide for college sports recruitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="btn-accent-orange">
              Start Your Journey
            </Button>
            <Button variant="outline" className="btn-secondary">
              Learn More
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&h=600" 
            alt="College athletes training together" 
            className="rounded-2xl shadow-2xl max-w-4xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}
