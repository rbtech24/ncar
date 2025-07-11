import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, School, ArrowRight } from "lucide-react";

export default function AudienceSelection() {
  return (
    <section className="py-20 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
            Choose Your Path
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Whether you're an athlete, coach, or supporting staff, we have the tools to help you succeed in college recruiting.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Student Athletes Card */}
          <Card className="card-feature text-left group hover:border-brand-primary transition-all duration-200">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-brand-primary rounded-lg flex items-center justify-center mb-6">
                <Users className="text-white w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-neutral-800 mb-4">Student-Athletes</h3>
              <p className="text-neutral-600 mb-6">
                Build your recruiting profile, showcase highlight videos, and connect directly with college coaches seeking your talents.
              </p>
              <Button className="btn-primary group-hover:bg-brand-primary/90 flex items-center gap-2">
                Get Recruited
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Coaches Card */}
          <Card className="card-feature text-left group hover:border-brand-secondary transition-all duration-200">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-brand-secondary rounded-lg flex items-center justify-center mb-6">
                <Target className="text-white w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-neutral-800 mb-4">College Coaches</h3>
              <p className="text-neutral-600 mb-6">
                Search and filter through thousands of verified athlete profiles to find the perfect fit for your program.
              </p>
              <Button className="btn-success group-hover:bg-brand-secondary/90 flex items-center gap-2">
                Find Athletes
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Clubs/HS Staff Card */}
          <Card className="card-feature text-left group hover:border-brand-accent transition-all duration-200">
            <CardContent className="p-8">
              <div className="w-12 h-12 bg-brand-accent rounded-lg flex items-center justify-center mb-6">
                <School className="text-neutral-800 w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-neutral-800 mb-4">Clubs & High Schools</h3>
              <p className="text-neutral-600 mb-6">
                Manage team rosters, track athlete progress, and help your players get recruited to top college programs.
              </p>
              <Button className="btn-accent group-hover:bg-brand-accent/90 flex items-center gap-2">
                Support Athletes
                <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
