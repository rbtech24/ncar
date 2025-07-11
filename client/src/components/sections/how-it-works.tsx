export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Create Your Profile",
      description: "Build a comprehensive profile with your athletic achievements, academic records, and video highlights.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "College athlete creating profile",
      bgColor: "bg-ncaa-blue"
    },
    {
      number: "2",
      title: "Connect with Coaches",
      description: "Get discovered by college coaches or reach out directly to programs that match your goals.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Sports recruiting coaches meeting",
      bgColor: "bg-accent-orange"
    },
    {
      number: "3",
      title: "Achieve Your Goals",
      description: "Secure your spot on a college team and take your athletic career to the next level.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      alt: "Athletic team celebration",
      bgColor: "bg-accent-green"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ncaa-blue mb-4">
            How RecruitCore Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get started in minutes with our streamlined process designed for student-athletes and coaches.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 ${step.bgColor} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white font-bold text-xl">{step.number}</span>
              </div>
              <h3 className="font-heading text-xl font-bold text-ncaa-blue mb-4">{step.title}</h3>
              <p className="text-gray-600 mb-6">
                {step.description}
              </p>
              <img 
                src={step.image} 
                alt={step.alt} 
                className="rounded-xl shadow-lg w-full h-auto max-h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
