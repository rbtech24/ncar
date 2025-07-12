import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Calendar, 
  GraduationCap, 
  Trophy, 
  Star, 
  MessageCircle, 
  Phone, 
  Mail,
  User,
  Target,
  Award,
  Video,
  BookOpen,
  Users,
  Heart,
  Share2,
  Download,
  Zap,
  Brain,
  AlertTriangle,
  CheckCircle,
  TrendingUp,
  Eye,
  Lightbulb,
  BarChart3,
  ExternalLink,
  School,
  Globe
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AthleteProfile() {
  const [isFollowing, setIsFollowing] = useState(false);

  // Mock athlete data matching the reference design
  const athlete = {
    firstName: "Emma",
    lastName: "Johnson",
    position: "Outside Hitter",
    sport: "Volleyball",
    graduationYear: 2025,
    location: "Chicago, IL",
    height: "5'11\"",
    verticalJump: "9'8\"",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    gpa: 3.8,
    satScore: 1360,
    matchPercentage: 92,
    scoutingNotes: "Emma has a powerful swing and good court awareness. Her defensive positioning is strong, but she could use her footwork. Showing great improvement.",
    aiSuggestions: [
      "Compatible playing style",
      "High academic potential", 
      "Team player traits"
    ],
    socialAlert: {
      type: "warning",
      message: "potentially inflammatory language in a recent post"
    },
    smartRecruiting: {
      suggest: "reaching out to coaches",
      predict: "campus visit interest",
      recommend: "competitive offer"
    },
    academicFit: {
      gpa: 3.8,
      flag: "https://flagcdn.com/w20/us.png"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Profile Section */}
          <div className="grid lg:grid-cols-3 gap-8 mb-8">
            
            {/* Left Column - Profile Info */}
            <div className="lg:col-span-1">
              <Card className="bg-gray-100 border-0">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6 mb-6">
                    <img
                      src={athlete.profileImage}
                      alt={`${athlete.firstName} ${athlete.lastName}`}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold text-gray-900 mb-1">
                        {athlete.firstName} {athlete.lastName}
                      </h1>
                      <p className="text-gray-700 mb-1">{athlete.position}</p>
                      <p className="text-gray-600 mb-1">Grad Year: {athlete.graduationYear}</p>
                      <p className="text-gray-600 mb-4">{athlete.location}</p>
                      <p className="text-gray-600 mb-1">{athlete.height}</p>
                      <p className="text-gray-600">Vertical Jump: {athlete.verticalJump}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - AI Suggestions */}
            <div className="lg:col-span-2">
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-blue-600 text-lg">
                    <Zap className="w-5 h-5" />
                    AI SUGGESTIONS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {athlete.aiSuggestions.map((suggestion, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-gray-700">{suggestion}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8">
            
            {/* Left Column */}
            <div className="space-y-6">
              
              {/* Scouting Notes */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">SCOUTING NOTES</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">
                    {athlete.scoutingNotes}
                  </p>
                </CardContent>
              </Card>

              {/* Athlete Matches */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">ATHLETE MATCHES</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <div className="w-full bg-gray-200 rounded-full h-3">
                        <div 
                          className="bg-blue-600 h-3 rounded-full" 
                          style={{ width: `${athlete.matchPercentage}%` }}
                        ></div>
                      </div>
                      <span className="ml-4 text-2xl font-bold text-gray-900">
                        {athlete.matchPercentage}%
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">Similar position</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 flex-1">Matching GPA</span>
                      <span className="text-gray-900 font-medium">{athlete.gpa} GPA</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700 flex-1">Upcoming tournament</span>
                      <span className="text-gray-900 font-medium">SAT: {athlete.satScore}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Academic Fit */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">ACADEMIC FIT</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4">
                    <div className="text-4xl font-bold text-gray-900">
                      {athlete.academicFit.gpa}
                    </div>
                    <div className="text-2xl font-bold text-gray-900">GPA</div>
                    <img 
                      src={athlete.academicFit.flag} 
                      alt="Flag" 
                      className="w-8 h-6 ml-auto"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Highlight Videos */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                    <Video className="w-5 h-5 text-blue-600" />
                    HIGHLIGHT VIDEOS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Main highlight video */}
                    <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                      <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <div className="text-center text-white">
                          <Video className="w-16 h-16 mx-auto mb-4 opacity-80" />
                          <h3 className="text-xl font-bold mb-2">Season Highlights 2024</h3>
                          <p className="text-blue-100">Click to play • 3:45</p>
                        </div>
                      </div>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center">
                          <div className="w-0 h-0 border-l-8 border-l-blue-600 border-y-6 border-y-transparent ml-1"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Additional videos */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Video className="w-8 h-8 mx-auto mb-2 opacity-80" />
                            <p className="text-sm font-medium">Skills Demo</p>
                            <p className="text-xs text-green-100">2:15</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-4 border-l-green-600 border-y-3 border-y-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                        <div className="aspect-video bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                          <div className="text-center text-white">
                            <Video className="w-8 h-8 mx-auto mb-2 opacity-80" />
                            <p className="text-sm font-medium">Game Footage</p>
                            <p className="text-xs text-orange-100">5:30</p>
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
                          <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                            <div className="w-0 h-0 border-l-4 border-l-orange-600 border-y-3 border-y-transparent ml-1"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Performance Stats */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                    <BarChart3 className="w-5 h-5 text-blue-600" />
                    PERFORMANCE STATS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">342</div>
                      <div className="text-sm text-gray-600">Total Kills</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-1">89%</div>
                      <div className="text-sm text-gray-600">Serve Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-1">156</div>
                      <div className="text-sm text-gray-600">Blocks</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-1">23</div>
                      <div className="text-sm text-gray-600">Aces/Game</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Photos */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">ACTION PHOTOS</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=300&h=200&fit=crop&crop=center"
                      alt="Volleyball action shot 1"
                      className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop&crop=center"
                      alt="Volleyball action shot 2"
                      className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1609688669309-fc15db557633?w=300&h=200&fit=crop&crop=center"
                      alt="Volleyball action shot 3"
                      className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=300&h=200&fit=crop&crop=center"
                      alt="Volleyball action shot 4"
                      className="w-full h-32 object-cover rounded-lg hover:scale-105 transition-transform cursor-pointer"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              
              {/* Social Scan */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">SOCIAL SCAN</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-blue-600 font-bold mb-1">AI DETECTED</div>
                      <p className="text-gray-700">{athlete.socialAlert.message}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Smart Recruiting */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">SMART RECRUITING</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <span className="text-blue-600 font-bold">AI SUGGEST</span>
                      <span className="text-gray-700 ml-2">{athlete.smartRecruiting.suggest}</span>
                    </div>
                    <div>
                      <span className="text-blue-600 font-bold">AI PREDICT</span>
                      <span className="text-gray-700 ml-2">{athlete.smartRecruiting.predict}</span>
                    </div>
                    <div>
                      <span className="text-blue-600 font-bold">AI RECOMMEND</span>
                      <span className="text-gray-700 ml-2">{athlete.smartRecruiting.recommend}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* College Interest */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                    <School className="w-5 h-5 text-blue-600" />
                    COLLEGE INTEREST
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <School className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Stanford University</div>
                          <div className="text-sm text-gray-600">Division I • California</div>
                        </div>
                      </div>
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                          <School className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">UCLA</div>
                          <div className="text-sm text-gray-600">Division I • California</div>
                        </div>
                      </div>
                      <Badge className="bg-yellow-100 text-yellow-800">Interested</Badge>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                          <School className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">Penn State</div>
                          <div className="text-sm text-gray-600">Division I • Pennsylvania</div>
                        </div>
                      </div>
                      <Badge className="bg-blue-100 text-blue-800">Watching</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Achievements */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-bold text-gray-900">
                    <Trophy className="w-5 h-5 text-yellow-600" />
                    ACHIEVEMENTS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">State Championship MVP</div>
                        <div className="text-sm text-gray-600">2024 Illinois High School</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">All-Region First Team</div>
                        <div className="text-sm text-gray-600">2023, 2024</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Academic All-State</div>
                        <div className="text-sm text-gray-600">3.8+ GPA Honor</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg shadow-lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Send Message
            </Button>
            <Button className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-lg shadow-lg">
              <Heart className="w-5 h-5 mr-2" />
              Add to Favorites
            </Button>
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 text-lg shadow-lg">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6 py-3 text-lg shadow-lg">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Visit
            </Button>
            <Button variant="outline" className="border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 text-lg shadow-lg">
              <Share2 className="w-5 h-5 mr-2" />
              Share Profile
            </Button>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );
}