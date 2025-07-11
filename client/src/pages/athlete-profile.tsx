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
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b332c3c7?w=300&h=300&fit=crop&crop=face",
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

              {/* Additional Smart Recruiting */}
              <Card className="bg-white border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-gray-900">SMART RECRUITING</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-blue-600 font-bold">
                    AI :: SUGGEST reaching
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button variant="outline" className="border-gray-300 px-6 py-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Profile
            </Button>
            <Button variant="outline" className="border-gray-300 px-6 py-2">
              <ArrowRight className="w-4 h-4 mr-2" />
              View Profile
            </Button>
            <Button variant="outline" className="border-gray-300 px-6 py-2">
              <Mail className="w-4 h-4 mr-2" />
              Contact
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