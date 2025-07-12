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
  Heart,
  Share2,
  Eye,
  Play,
  ChevronDown,
  Bell,
  Settings,
  Video,
  Users,
  Award,
  ExternalLink
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AthleteProfile() {
  const [isFollowing, setIsFollowing] = useState(false);

  // Real athlete data matching SportsRecruits structure
  const athlete = {
    name: "Rod Burnett",
    sport: "Basketball",
    gradYear: "2024",
    location: "Chicago, IL",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    stats: {
      colleges: 0,
      coaches: 0,
      offers: 0,
      visits: 0
    },
    profileCompletion: 45,
    verificationProgress: {
      uploadPhoto: { completed: true, text: "Upload your profile photo" },
      addVideo: { completed: true, text: "Add your grads video" },
      fillPosition: { completed: false, text: "Fill out your position" }
    }
  };

  const recruitmentActivity = [
    {
      id: 1,
      type: "coach_message",
      college: "Bryant University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
      message: "sent a message to in 2027 Athlete",
      location: "Smithfield, Rhode Island",
      program: "View Basketball Program",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      type: "coach_message", 
      college: "University of South Alabama",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
      message: "sent a message to in 2027 Athlete",
      location: "Mobile, Alabama",
      program: "View Basketball Program",
      timestamp: "1 day ago"
    },
    {
      id: 3,
      type: "video_highlight",
      athlete: "Jacqueline Harbison",
      title: "Defensive Work - Jill Harbison",
      views: 1240,
      likes: 89,
      comments: 12,
      timestamp: "3 days ago",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Sidebar - Athlete Profile */}
          <div className="lg:col-span-3">
            <Card className="bg-white shadow-sm">
              <CardContent className="p-6">
                {/* Profile Photo */}
                <div className="text-center mb-6">
                  <div className="relative inline-block">
                    <img 
                      src={athlete.profileImage} 
                      alt={athlete.name}
                      className="w-20 h-20 rounded-full mx-auto mb-4"
                    />
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">!</span>
                    </div>
                  </div>
                  <h2 className="text-lg font-bold text-gray-900">{athlete.name}</h2>
                  <p className="text-sm text-gray-600">{athlete.sport} • Grad Year: {athlete.gradYear}</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{athlete.stats.colleges}</div>
                    <div className="text-xs text-gray-500">Interested Colleges</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{athlete.stats.coaches}</div>
                    <div className="text-xs text-gray-500">Coaches Reached Out</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{athlete.stats.offers}</div>
                    <div className="text-xs text-gray-500">Offers Received</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{athlete.stats.visits}</div>
                    <div className="text-xs text-gray-500">Campus Visits</div>
                  </div>
                </div>

                {/* Profile Actions */}
                <div className="space-y-2">
                  <h3 className="font-semibold text-gray-900 mb-3">Profile Actions</h3>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600">Privacy Position</span>
                    <div className="w-4 h-4 bg-yellow-400 rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600">Free School/Loans</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600">Videos</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-sm text-gray-600">Coach Reference</span>
                    <ChevronDown className="w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Favorites */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Favorites</h3>
                  <div className="flex items-center justify-center py-8">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                        <Star className="w-6 h-6 text-gray-400" />
                      </div>
                      <p className="text-sm text-gray-500">Add New Favorite</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area - Activity Feed */}
          <div className="lg:col-span-6">
            <div className="space-y-6">
              
              {/* Feed Header */}
              <div className="bg-white rounded-lg shadow-sm p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-xl font-bold text-gray-900">My Feed - Global Feed</h1>
                  </div>
                  <Button variant="outline" size="sm">
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </Button>
                </div>
              </div>

              {/* Activity Feed */}
              {recruitmentActivity.map((activity) => (
                <Card key={activity.id} className="bg-white shadow-sm">
                  <CardContent className="p-6">
                    
                    {activity.type === "coach_message" && (
                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <img 
                            src={activity.logo} 
                            alt={activity.college}
                            className="w-12 h-12 rounded-lg"
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-gray-900">{activity.college}</span>
                              <span className="text-sm text-gray-500">{activity.message}</span>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">
                              Location: {activity.location}
                            </div>
                            <Button variant="link" className="text-blue-600 p-0 h-auto">
                              {activity.program}
                            </Button>
                          </div>
                          <div className="text-sm text-gray-400">{activity.timestamp}</div>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-4 border-t">
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Message
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4 mr-2" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                        </div>
                      </div>
                    )}

                    {activity.type === "video_highlight" && (
                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                            <User className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-gray-900 mb-1">{activity.athlete}</div>
                            <div className="text-sm text-gray-500">uploaded a video • {activity.timestamp}</div>
                          </div>
                        </div>
                        
                        <div className="relative mb-4">
                          <img 
                            src={activity.thumbnail} 
                            alt={activity.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="absolute inset-0 bg-black bg-opacity-30 rounded-lg flex items-center justify-center">
                            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                              <Play className="w-8 h-8 text-gray-900 ml-1" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mb-4">
                          <h3 className="font-semibold text-gray-900 mb-2">{activity.title}</h3>
                        </div>
                        
                        <div className="flex items-center gap-6 text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {activity.views.toLocaleString()} views
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {activity.likes} likes
                          </div>
                          <div className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {activity.comments} comments
                          </div>
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}

              {/* Upgrade Today Section */}
              <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Upgrade Today!</h3>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">See who's viewing you</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Access to every college coach</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Dedicated recruiting analyst</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm">Professional video support</span>
                    </div>
                  </div>
                  <Button className="bg-white text-blue-600 hover:bg-gray-100">
                    Upgrade Now!
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              
              {/* Verification Progress */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">My Verification Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(athlete.verificationProgress).map(([key, item]) => (
                      <div key={key} className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                          item.completed ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {item.completed && <span className="text-white text-xs">✓</span>}
                        </div>
                        <span className="text-sm text-gray-600">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Profile Completion</span>
                      <span className="text-sm font-medium">{athlete.profileCompletion}%</span>
                    </div>
                    <Progress value={athlete.profileCompletion} className="h-2" />
                  </div>
                </CardContent>
              </Card>

              {/* Important Notices */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Important Notices</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <Bell className="w-5 h-5 text-orange-500 mt-0.5" />
                      <div>
                        <div className="font-medium text-gray-900 mb-1">Learn about NCAA colleges</div>
                        <div className="text-sm text-gray-600">
                          Our college matching tool uses your preferences to match you with colleges that fit your scholarships. Check it out today!
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* NCAA Resource Guide */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">NCAA Resource Guide</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="ghost" className="w-full justify-start p-0">
                      <Award className="w-4 h-4 mr-2" />
                      Eligibility Center
                    </Button>
                    <Button variant="ghost" className="w-full justify-start p-0">
                      <Video className="w-4 h-4 mr-2" />
                      Recruiting Planning Video
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* IMG Academy */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">IMG ACADEMY</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="w-full h-32 bg-gray-100 rounded-lg flex items-center justify-center mb-3">
                      <img 
                        src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=200&h=120&fit=crop" 
                        alt="IMG Academy"
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      Schedule Assessment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}