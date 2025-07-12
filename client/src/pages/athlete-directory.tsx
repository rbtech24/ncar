import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Star, 
  MapPin, 
  Calendar,
  MessageCircle,
  Heart,
  ExternalLink,
  Trophy,
  GraduationCap,
  Users,
  TrendingUp
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import { Link } from "wouter";

export default function AthleteDirectory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSport, setSelectedSport] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");

  // Mock athlete data - showing variety of sports and profiles
  const athletes = [
    {
      id: 1,
      firstName: "Emma",
      lastName: "Johnson",
      position: "Outside Hitter",
      sport: "Volleyball",
      graduationYear: 2025,
      location: "Chicago, IL",
      profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      gpa: 3.8,
      aiScore: 92,
      matchPercentage: 92,
      height: "5'11\"",
      isWatched: false,
      tags: ["Team Captain", "State Champion"]
    },
    {
      id: 2,
      firstName: "Marcus",
      lastName: "Thompson",
      position: "Point Guard",
      sport: "Basketball",
      graduationYear: 2024,
      location: "Atlanta, GA",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      gpa: 3.6,
      aiScore: 88,
      matchPercentage: 88,
      height: "6'2\"",
      isWatched: true,
      tags: ["All-State", "Academic Honor"]
    },
    {
      id: 3,
      firstName: "Sofia",
      lastName: "Rodriguez",
      position: "Midfielder",
      sport: "Soccer",
      graduationYear: 2025,
      location: "San Diego, CA",
      profileImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      gpa: 4.0,
      aiScore: 94,
      matchPercentage: 94,
      height: "5'6\"",
      isWatched: false,
      tags: ["Honor Roll", "Club Captain"]
    },
    {
      id: 4,
      firstName: "Jake",
      lastName: "Miller",
      position: "Quarterback",
      sport: "Football",
      graduationYear: 2024,
      location: "Dallas, TX",
      profileImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      gpa: 3.5,
      aiScore: 90,
      matchPercentage: 90,
      height: "6'3\"",
      isWatched: true,
      tags: ["Team Leader", "Regional MVP"]
    },
    {
      id: 5,
      firstName: "Lily",
      lastName: "Chen",
      position: "Sprinter",
      sport: "Track & Field",
      graduationYear: 2025,
      location: "Seattle, WA",
      profileImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
      gpa: 3.9,
      aiScore: 91,
      matchPercentage: 91,
      height: "5'7\"",
      isWatched: false,
      tags: ["Record Holder", "Academic Excellence"]
    },
    {
      id: 6,
      firstName: "Tyler",
      lastName: "Davis",
      position: "Pitcher",
      sport: "Baseball",
      graduationYear: 2024,
      location: "Phoenix, AZ",
      profileImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      gpa: 3.7,
      aiScore: 87,
      matchPercentage: 87,
      height: "6'1\"",
      isWatched: false,
      tags: ["All-Conference", "Scholarship Ready"]
    }
  ];

  const filteredAthletes = athletes.filter(athlete => {
    const matchesSearch = `${athlete.firstName} ${athlete.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         athlete.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         athlete.sport.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSport = selectedSport === "all" || athlete.sport === selectedSport;
    const matchesYear = selectedYear === "all" || athlete.graduationYear.toString() === selectedYear;
    
    return matchesSearch && matchesSport && matchesYear;
  });

  const sports = ["all", "Volleyball", "Basketball", "Soccer", "Football", "Track & Field", "Baseball"];
  const years = ["all", "2024", "2025", "2026"];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Athlete Directory</h1>
            <p className="text-gray-600">Discover talented student-athletes from across the country</p>
          </div>

          {/* Search and Filter Bar */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search athletes by name, position, or sport..."
                    className="pl-10"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedSport} onValueChange={setSelectedSport}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {sports.map(sport => (
                      <SelectItem key={sport} value={sport}>
                        {sport === "all" ? "All Sports" : sport}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                
                <Select value={selectedYear} onValueChange={setSelectedYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map(year => (
                      <SelectItem key={year} value={year}>
                        {year === "all" ? "All Years" : year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Athletes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAthletes.map(athlete => (
              <Card key={athlete.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={athlete.profileImage}
                      alt={`${athlete.firstName} ${athlete.lastName}`}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {athlete.firstName} {athlete.lastName}
                      </h3>
                      <p className="text-gray-600 text-sm mb-1">{athlete.position}</p>
                      <p className="text-gray-600 text-sm mb-1">{athlete.sport}</p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>Class of {athlete.graduationYear}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge className="bg-blue-100 text-blue-800">
                        {athlete.aiScore}% Match
                      </Badge>
                      {athlete.isWatched && (
                        <Badge className="bg-green-100 text-green-800">
                          Watching
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>{athlete.location}</span>
                    <span className="mx-2">•</span>
                    <span>{athlete.height}</span>
                    <span className="mx-2">•</span>
                    <span>{athlete.gpa} GPA</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {athlete.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Link href={`/athlete-profile`} className="flex-1">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Profile
                      </Button>
                    </Link>
                    <Button variant="outline" size="sm" className="px-3">
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="px-3">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* No Results */}
          {filteredAthletes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Users className="w-12 h-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No athletes found</h3>
              <p className="text-gray-600">Try adjusting your search criteria</p>
            </div>
          )}

          {/* Stats Summary */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Directory Statistics</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">{athletes.length}</div>
                <div className="text-sm text-gray-600">Total Athletes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">{sports.length - 1}</div>
                <div className="text-sm text-gray-600">Sports Covered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {Math.round(athletes.reduce((sum, a) => sum + a.gpa, 0) / athletes.length * 10) / 10}
                </div>
                <div className="text-sm text-gray-600">Avg GPA</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600 mb-1">
                  {Math.round(athletes.reduce((sum, a) => sum + a.aiScore, 0) / athletes.length)}%
                </div>
                <div className="text-sm text-gray-600">Avg AI Score</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}