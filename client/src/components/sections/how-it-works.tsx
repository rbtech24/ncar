import { ArrowRight } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Build a comprehensive recruiting profile with your athletic achievements, academic records, and highlight videos in minutes.",
      bgColor: "bg-brand-primary"
    },
    {
      number: "2",
      title: "Connect with Coaches",
      description: "Get discovered by college coaches actively searching for talent, or reach out directly to programs that interest you.",
      bgColor: "bg-brand-secondary"
    },
    {
      number: "3",
      title: "Achieve Your Goals",
      description: "Secure scholarship offers and commitments to your dream college programs through our proven recruiting process.",
      bgColor: "bg-brand-accent"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Our streamlined process makes college recruiting simple and effective for student-athletes.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <span className={`font-bold text-xl ${step.bgColor === 'bg-brand-accent' ? 'text-neutral-800' : 'text-white'}`}>
                    {step.number}
                  </span>
                </div>
                <h3 className="font-heading text-xl font-bold text-neutral-800 mb-4">{step.title}</h3>
                <p className="text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow connector - hidden on mobile, visible on desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-full transform -translate-x-1/2 translate-x-8">
                  <ArrowRight className="w-8 h-8 text-neutral-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
