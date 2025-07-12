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
      timestamp: "2 hours ago",
      coachName: "Coach Williams",
      division: "Division I"
    },
    {
      id: 2,
      type: "coach_message", 
      college: "University of South Alabama",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
      message: "sent a message to in 2027 Athlete",
      location: "Mobile, Alabama",
      program: "View Basketball Program",
      timestamp: "1 day ago",
      coachName: "Coach Johnson",
      division: "Division I"
    },
    {
      id: 3,
      type: "coach_message",
      college: "Colorado State University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
      message: "sent a message to in 2027 Athletes",
      location: "Fort Collins, Colorado",
      program: "View Basketball Program",
      timestamp: "2 days ago",
      coachName: "Coach Martinez",
      division: "Division I"
    },
    {
      id: 4,
      type: "coach_message",
      college: "Boston College",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
      message: "sent a message to in 2027 Athlete",
      location: "Chestnut Hill, Massachusetts",
      program: "View Basketball Program",
      timestamp: "3 days ago",
      coachName: "Coach Davis",
      division: "Division I"
    },
    {
      id: 5,
      type: "coach_message",
      college: "West Virginia University",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
      message: "sent a message to in 2027 Athlete",
      location: "Morgantown, West Virginia",
      program: "View Basketball Program",
      timestamp: "4 days ago",
      coachName: "Coach Thompson",
      division: "Division I"
    },
    {
      id: 6,
      type: "video_highlight",
      athlete: "Marcus Johnson",
      title: "2024 Marcus Johnson Football Season Highlights",
      views: 8432,
      likes: 287,
      comments: 56,
      timestamp: "5 days ago",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop",
      duration: "4:12",
      sport: "Football",
      gradYear: "2025"
    },
    {
      id: 7,
      type: "video_highlight",
      athlete: "Sarah Chen",
      title: "State Championship Game Winning Shot",
      views: 12456,
      likes: 534,
      comments: 89,
      timestamp: "1 week ago",
      thumbnail: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=250&fit=crop",
      duration: "2:45",
      sport: "Basketball",
      gradYear: "2024"
    },
    {
      id: 8,
      type: "peer_achievement",
      athlete: "Tyler Rodriguez",
      achievement: "Signed with University of Miami",
      sport: "Baseball",
      gradYear: "2024",
      timestamp: "2 days ago",
      likes: 156,
      comments: 23
    },
    {
      id: 9,
      type: "peer_achievement", 
      athlete: "Emma Thompson",
      achievement: "Named Regional Player of the Year",
      sport: "Soccer",
      gradYear: "2025",
      timestamp: "4 days ago",
      likes: 89,
      comments: 12
    },
    {
      id: 10,
      type: "coach_message",
      college: "Colorado School of Mines",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=60&h=60&fit=crop",
      message: "sent a message to in 2027 Athlete",
      location: "Golden, Colorado",
      program: "View Basketball Program",
      timestamp: "1 week ago",
      coachName: "Coach Wilson",
      division: "Division II"
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
                    <div className="text-2xl font-bold text-blue-600">8</div>
                    <div className="text-xs text-gray-500">Colleges Interested</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">12</div>
                    <div className="text-xs text-gray-500">Coach Messages</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">3</div>
                    <div className="text-xs text-gray-500">Video Highlights</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-orange-600">5.2K</div>
                    <div className="text-xs text-gray-500">Profile Views</div>
                  </div>
                </div>

                {/* Recent Activity Badge */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-800">8 new coach messages this week</span>
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

                {/* Recent Achievements */}
                <div className="mt-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Recent Achievements</h3>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
                      <Trophy className="w-4 h-4 text-yellow-600" />
                      <span className="text-sm text-yellow-800">State Championship Finalist</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-sm text-blue-800">All-Conference Team</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                      <Star className="w-4 h-4 text-green-600" />
                      <span className="text-sm text-green-800">Team Captain</span>
                    </div>
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

              {/* Recent Activity Alert */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">🔥 High Activity Week!</div>
                    <div className="text-sm text-gray-600">
                      You've received 8 new messages from Division I coaches in the last 7 days. Your profile is gaining momentum!
                    </div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View All
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
                              <Badge variant="secondary" className="text-xs">
                                {activity.division}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">
                              Location: {activity.location}
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              From: {activity.coachName}
                            </div>
                            <Button variant="link" className="text-blue-600 p-0 h-auto">
                              {activity.program}
                            </Button>
                          </div>
                          <div className="text-sm text-gray-400">{activity.timestamp}</div>
                        </div>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                          <div className="flex items-start gap-2">
                            <MessageCircle className="w-5 h-5 text-blue-600 mt-0.5" />
                            <div>
                              <p className="text-sm text-blue-900 font-medium mb-1">Coach Message Preview</p>
                              <p className="text-sm text-blue-800">
                                "Hi Rod! I've been following your highlights and I'm impressed with your court vision and defensive intensity. We'd love to learn more about your academic interests and discuss how you might fit into our program..."
                              </p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-4 border-t">
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4 mr-2" />
                            Like
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
                          <Button variant="ghost" size="sm">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View School
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
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-gray-900">{activity.athlete}</span>
                              <Badge variant="outline" className="text-xs">
                                {activity.sport} • {activity.gradYear}
                              </Badge>
                            </div>
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
                          {activity.duration && (
                            <div className="absolute bottom-3 right-3 bg-black bg-opacity-75 text-white px-2 py-1 rounded text-sm">
                              {activity.duration}
                            </div>
                          )}
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

                    {activity.type === "peer_achievement" && (
                      <div>
                        <div className="flex items-start gap-4 mb-4">
                          <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                            <Trophy className="w-6 h-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-semibold text-gray-900">{activity.athlete}</span>
                              <Badge variant="outline" className="text-xs">
                                {activity.sport} • {activity.gradYear}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-500 mb-2">{activity.timestamp}</div>
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                              <div className="flex items-center gap-2 mb-2">
                                <Trophy className="w-5 h-5 text-green-600" />
                                <span className="font-medium text-green-900">Achievement Unlocked!</span>
                              </div>
                              <p className="text-green-800 font-medium">{activity.achievement}</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-4 pt-4 border-t">
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4 mr-2" />
                            Congratulate ({activity.likes})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Comment ({activity.comments})
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4 mr-2" />
                            Share
                          </Button>
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
              
              {/* Messaging Center */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    Message Center
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <MessageCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="font-medium text-sm text-blue-900">8 New Messages</div>
                          <div className="text-xs text-blue-600">From college coaches</div>
                        </div>
                      </div>
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Coach Williams</div>
                          <div className="text-xs text-gray-500">Bryant University</div>
                        </div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Coach Martinez</div>
                          <div className="text-xs text-gray-500">Colorado State</div>
                        </div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                      <div className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">Coach Davis</div>
                          <div className="text-xs text-gray-500">Boston College</div>
                        </div>
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      </div>
                    </div>
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      View All Messages
                    </Button>
                  </div>
                </CardContent>
              </Card>

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

              {/* Trending Now */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Trending Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-sm">March Madness Prep</div>
                        <div className="text-xs text-gray-500">2.3K athletes discussing</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-sm">Transfer Portal Updates</div>
                        <div className="text-xs text-gray-500">1.8K athletes discussing</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <div>
                        <div className="font-medium text-sm">Signing Day Stories</div>
                        <div className="text-xs text-gray-500">1.5K athletes discussing</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* NCAR Success Stories */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">NCAR Success Stories</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                      <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                        <Trophy className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-green-900">247 Athletes Signed</div>
                        <div className="text-xs text-green-600">This month on NCAR</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                        <Users className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-blue-900">1,200+ Active Coaches</div>
                        <div className="text-xs text-blue-600">Recruiting on NCAR</div>
                      </div>
                    </div>
                    <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
                      View Success Stories
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