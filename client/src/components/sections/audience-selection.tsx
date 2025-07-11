import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, School } from "lucide-react";

export default function AudienceSelection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-ncaa-blue mb-4">
            Who Are You?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose your path to discover how RecruitCore can help you achieve your goals in college athletics.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Student Athletes Card */}
          <Card className="card-feature text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-ncaa-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-white w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-ncaa-blue mb-4">Student-Athletes</h3>
              <p className="text-gray-600 mb-6">
                Showcase your talents, connect with coaches, and find the perfect college program for your athletic and academic goals.
              </p>
              <Button className="btn-accent-orange">
                Get Recruited
              </Button>
            </CardContent>
          </Card>
          
          {/* Coaches Card */}
          <Card className="card-feature text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-ncaa-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="text-white w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-ncaa-blue mb-4">College Coaches</h3>
              <p className="text-gray-600 mb-6">
                Discover exceptional talent, streamline your recruiting process, and build championship-caliber teams.
              </p>
              <Button className="btn-accent-green">
                Find Athletes
              </Button>
            </CardContent>
          </Card>
          
          {/* Clubs/HS Staff Card */}
          <Card className="card-feature text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-ncaa-blue rounded-full flex items-center justify-center mx-auto mb-6">
                <School className="text-white w-8 h-8" />
              </div>
              <h3 className="font-heading text-xl font-bold text-ncaa-blue mb-4">Clubs & High Schools</h3>
              <p className="text-gray-600 mb-6">
                Support your athletes' college dreams with professional recruiting tools and resources.
              </p>
              <Button className="bg-ncaa-blue hover:bg-ncaa-blue/90 text-white px-6 py-3 rounded-full font-semibold transition-all duration-200">
                Support Athletes
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
