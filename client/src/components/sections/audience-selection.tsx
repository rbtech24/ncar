import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, School, ArrowRight, Trophy, Search, Users2, Star, TrendingUp, Award } from "lucide-react";

export default function AudienceSelection() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Path to <span className="text-blue-600">Athletic Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're an athlete chasing dreams, a coach building champions, or supporting the next generation, NCAR provides the tools to transform potential into success.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Student Athletes Card */}
          <Card className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
              }}
            />
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <CardContent className="p-10 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img 
                  src="/attached_assets/image_1752241518440.png" 
                  alt="NCAR Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Student-Athletes
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Build your recruiting profile, showcase highlight videos, and connect directly with college coaches seeking your talents.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users2 className="w-4 h-4" />
                  <span>15,000+ Athletes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>85% Success Rate</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Get Recruited</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Coaches Card */}
          <Card className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1577223625816-7546f13df25d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
              }}
            />
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <Search className="w-8 h-8 text-blue-600" />
            </div>
            <CardContent className="p-10 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img 
                  src="/attached_assets/image_1752241518440.png" 
                  alt="NCAR Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                College Coaches
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Search and filter through thousands of verified athlete profiles to find the perfect fit for your program.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Users2 className="w-4 h-4" />
                  <span>2,500+ Coaches</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Award className="w-4 h-4" />
                  <span>8,200+ Commits</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Find Athletes</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
          
          {/* Clubs/HS Staff Card */}
          <Card className="group relative overflow-hidden bg-white border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-700 opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-5 group-hover:opacity-10 transition-opacity duration-500"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')`
              }}
            />
            <div className="absolute top-4 right-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
              <Users2 className="w-8 h-8 text-blue-600" />
            </div>
            <CardContent className="p-10 relative z-10">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <img 
                  src="/attached_assets/image_1752241518440.png" 
                  alt="NCAR Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                Clubs & High Schools
              </h3>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                Manage team rosters, track athlete progress, and help your players get recruited to top college programs.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <School className="w-4 h-4" />
                  <span>1,200+ Programs</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <TrendingUp className="w-4 h-4" />
                  <span>92% Placement</span>
                </div>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-2xl transition-all duration-300 group-hover:scale-105 shadow-lg hover:shadow-xl">
                <span>Support Athletes</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
