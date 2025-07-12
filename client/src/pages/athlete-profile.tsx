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
  ExternalLink,
  Activity,
  School,
  Grid3X3,
  UserCircle,
  Flame,
  Target,
  Zap,
  Crown,
  Medal,
  TrendingUp,
  Clock
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
    },
    // Gamification elements
    currentStreak: 7,
    longestStreak: 12,
    totalPoints: 2350,
    level: 5,
    nextLevelPoints: 3000,
    weeklyGoal: 5,
    weeklyProgress: 3,
    badges: [
      { name: "Profile Creator", icon: "user", earned: true, description: "Created your first profile" },
      { name: "Video Star", icon: "video", earned: true, description: "Uploaded 5 highlight videos" },
      { name: "Streak Master", icon: "flame", earned: true, description: "Maintained 7-day login streak" },
      { name: "Social Butterfly", icon: "heart", earned: false, description: "Get 50 profile likes" },
      { name: "Coach Magnet", icon: "target", earned: false, description: "Receive 25 coach messages" }
    ],
    dailyTasks: [
      { task: "Check messages", completed: true, points: 50 },
      { task: "Update profile", completed: true, points: 100 },
      { task: "Watch peer videos", completed: false, points: 25 },
      { task: "Respond to coach", completed: false, points: 200 }
    ]
  };

  const recruitmentActivity = [
    {
      id: 1,
      type: "system_milestone",
      milestone: "25,000 athletes recruited this year",
      description: "NCAR celebrates another successful recruiting season with athletes finding their perfect college matches",
      timestamp: "2 hours ago",
      icon: "trophy",
      stats: "25,000 athletes placed"
    },
    {
      id: 2,
      type: "peer_achievement",
      athlete: "Jordan Martinez",
      achievement: "Committed to Duke University",
      sport: "Basketball",
      gradYear: "2024",
      timestamp: "4 hours ago",
      likes: 234,
      comments: 48,
      location: "Los Angeles, CA"
    },
    {
      id: 3,
      type: "platform_success",
      title: "NCAR Platform Update",
      description: "Over 1,200 Division I coaches are now actively recruiting through NCAR",
      timestamp: "1 day ago",
      icon: "users",
      stats: "1,200+ D1 coaches"
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
      type: "peer_achievement",
      athlete: "Alex Kim",
      achievement: "Received full scholarship to Stanford University",
      sport: "Swimming",
      gradYear: "2024",
      timestamp: "1 week ago",
      likes: 312,
      comments: 67,
      location: "Seattle, WA"
    },
    {
      id: 11,
      type: "system_milestone",
      milestone: "500+ college commitments this month",
      description: "NCAR athletes are securing their futures with record-breaking commitment numbers",
      timestamp: "3 days ago",
      icon: "star",
      stats: "500+ commitments"
    },
    {
      id: 12,
      type: "peer_achievement",
      athlete: "Maya Patel",
      achievement: "Named All-American in Track & Field",
      sport: "Track & Field",
      gradYear: "2025",
      timestamp: "5 days ago",
      likes: 189,
      comments: 34,
      location: "Phoenix, AZ"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
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
                <div className="grid grid-cols-2 gap-3 mb-6">
                  <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600 mb-1">8</div>
                      <div className="text-xs text-gray-600 leading-tight">Colleges<br/>Interested</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-green-600 mb-1">12</div>
                      <div className="text-xs text-gray-600 leading-tight">Coach<br/>Messages</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-purple-600 mb-1">3</div>
                      <div className="text-xs text-gray-600 leading-tight">Video<br/>Highlights</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm border-0 hover:shadow-md transition-shadow">
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-orange-600 mb-1">5.2K</div>
                      <div className="text-xs text-gray-600 leading-tight">Profile<br/>Views</div>
                    </CardContent>
                  </Card>
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
                      <Trophy className="w-4 h-4 text-yellow-600 flex-shrink-0" />
                      <span className="text-sm text-yellow-800 break-words">State Championship Finalist</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-blue-50 border border-blue-200 rounded-lg">
                      <Award className="w-4 h-4 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-blue-800 break-words">All-Conference Team</span>
                    </div>
                    <div className="flex items-center gap-2 p-2 bg-green-50 border border-green-200 rounded-lg">
                      <Star className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-green-800 break-words">Team Captain</span>
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
              
              {/* Navigation Menu */}
              <div className="bg-gray-900 rounded-lg shadow-sm">
                <div className="flex items-center justify-around py-3 px-4">
                  <div className="flex flex-col items-center gap-1 text-white cursor-pointer hover:text-blue-400 transition-colors">
                    <Activity className="w-5 h-5" />
                    <span className="text-xs font-medium">Activity</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-blue-400 transition-colors">
                    <UserCircle className="w-5 h-5" />
                    <span className="text-xs font-medium">Profile</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-blue-400 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                    <span className="text-xs font-medium">Messages</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-blue-400 transition-colors">
                    <School className="w-5 h-5" />
                    <span className="text-xs font-medium">Schools</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-blue-400 transition-colors">
                    <Video className="w-5 h-5" />
                    <span className="text-xs font-medium">Video</span>
                  </div>
                  <div className="flex flex-col items-center gap-1 text-gray-400 cursor-pointer hover:text-blue-400 transition-colors">
                    <Grid3X3 className="w-5 h-5" />
                    <span className="text-xs font-medium">More</span>
                  </div>
                </div>
              </div>
              
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
                    <div className="text-sm text-gray-600 break-words">
                      You've received 8 new messages from Division I coaches in the last 7 days. Your profile is gaining momentum!
                    </div>
                  </div>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    View All
                  </Button>
                </div>
              </div>

              {/* Activity Feed */}
              {recruitmentActivity.map((activity, index) => (
                <div key={activity.id}>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6">
                      
                      {activity.type === "system_milestone" && (
                        <div>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
                              <Trophy className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900">NCAR Platform</span>
                                <Badge variant="outline" className="text-xs bg-blue-50 text-blue-700">
                                  System Update
                                </Badge>
                              </div>
                              <div className="text-sm text-gray-500 mb-2">{activity.timestamp}</div>
                              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200 rounded-lg p-4 mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Trophy className="w-5 h-5 text-blue-600" />
                                  <span className="font-medium text-blue-900">{activity.milestone}</span>
                                </div>
                                <p className="text-blue-800 text-sm break-words">{activity.description}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-4 border-t">
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                              <Heart className="w-4 h-4 mr-1 sm:mr-2" />
                              Celebrate
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                              <Share2 className="w-4 h-4 mr-1 sm:mr-2" />
                              Share
                            </Button>
                            <span className="text-sm text-gray-500 ml-auto whitespace-nowrap">{activity.stats}</span>
                          </div>
                        </div>
                      )}

                      {activity.type === "platform_success" && (
                        <div>
                          <div className="flex items-start gap-4 mb-4">
                            <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center">
                              <Users className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="font-semibold text-gray-900">NCAR Platform</span>
                                <Badge variant="outline" className="text-xs bg-green-50 text-green-700">
                                  Success Story
                                </Badge>
                              </div>
                              <div className="text-sm text-gray-500 mb-2">{activity.timestamp}</div>
                              <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Users className="w-5 h-5 text-green-600" />
                                  <span className="font-medium text-green-900">{activity.title}</span>
                                </div>
                                <p className="text-green-800 text-sm break-words">{activity.description}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-4 pt-4 border-t">
                            <Button variant="ghost" size="sm">
                              <Heart className="w-4 h-4 mr-2" />
                              Amazing
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Share2 className="w-4 h-4 mr-2" />
                              Share
                            </Button>
                            <span className="text-sm text-gray-500 ml-auto">{activity.stats}</span>
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
                          
                          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-gray-500">
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span className="whitespace-nowrap">{activity.views.toLocaleString()} views</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Heart className="w-4 h-4" />
                              <span className="whitespace-nowrap">{activity.likes} likes</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              <span className="whitespace-nowrap">{activity.comments} comments</span>
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
                              <div className="text-sm text-gray-500 mb-2">
                                {activity.location && `${activity.location} • `}{activity.timestamp}
                              </div>
                              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                                <div className="flex items-center gap-2 mb-2">
                                  <Trophy className="w-5 h-5 text-green-600" />
                                  <span className="font-medium text-green-900">Achievement Unlocked!</span>
                                </div>
                                <p className="text-green-800 font-medium">{activity.achievement}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-2 sm:gap-4 pt-4 border-t">
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                              <Heart className="w-4 h-4 mr-1 sm:mr-2" />
                              <span className="hidden sm:inline">Congratulate</span>
                              <span className="sm:hidden">Like</span>
                              <span className="ml-1">({activity.likes})</span>
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                              <MessageCircle className="w-4 h-4 mr-1 sm:mr-2" />
                              Comment ({activity.comments})
                            </Button>
                            <Button variant="ghost" size="sm" className="text-xs sm:text-sm">
                              <Share2 className="w-4 h-4 mr-1 sm:mr-2" />
                              Share
                            </Button>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                  
                  {/* Insert Upgrade Today Section after the 4th activity */}
                  {index === 3 && (
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
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              
              {/* Gamification Dashboard */}
              <Card className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-2xl font-bold">{athlete.currentStreak}</div>
                      <div className="text-sm opacity-90">Day Streak</div>
                    </div>
                    <Flame className="w-8 h-8 text-orange-200" />
                  </div>
                  <div className="text-xs opacity-75 mb-2 break-words">Personal Best: {athlete.longestStreak} days</div>
                  <div className="text-xs opacity-75 break-words">Keep it up! Visit daily to maintain your streak</div>
                </CardContent>
              </Card>

              {/* Level & Points */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Crown className="w-5 h-5 text-yellow-500" />
                    Level {athlete.level}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span className="break-words">Points: {athlete.totalPoints}</span>
                        <span className="break-words">Next: {athlete.nextLevelPoints}</span>
                      </div>
                      <Progress value={(athlete.totalPoints / athlete.nextLevelPoints) * 100} className="h-2" />
                    </div>
                    <div className="text-center p-3 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                      <div className="text-sm font-medium text-purple-900 break-words">
                        {athlete.nextLevelPoints - athlete.totalPoints} points to Level {athlete.level + 1}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Daily Tasks */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Target className="w-5 h-5 text-green-500" />
                    Daily Tasks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {athlete.dailyTasks.map((task, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                            task.completed ? 'bg-green-500' : 'bg-gray-300'
                          }`}>
                            {task.completed && <span className="text-white text-xs">✓</span>}
                          </div>
                          <span className={`text-sm break-words ${task.completed ? 'line-through text-gray-500' : 'text-gray-700'}`}>
                            {task.task}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 flex-shrink-0">
                          <Zap className="w-3 h-3 text-yellow-500" />
                          <span className="text-xs text-gray-500">+{task.points}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Achievement Badges */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <Medal className="w-5 h-5 text-blue-500" />
                    Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {athlete.badges.map((badge, index) => (
                      <div key={index} className={`text-center p-3 rounded-lg border-2 ${
                        badge.earned 
                          ? 'border-green-200 bg-green-50' 
                          : 'border-gray-200 bg-gray-50'
                      }`}>
                        <div className={`w-8 h-8 mx-auto mb-2 rounded-full flex items-center justify-center ${
                          badge.earned ? 'bg-green-500' : 'bg-gray-300'
                        }`}>
                          {badge.icon === 'user' && <User className="w-4 h-4 text-white" />}
                          {badge.icon === 'video' && <Video className="w-4 h-4 text-white" />}
                          {badge.icon === 'flame' && <Flame className="w-4 h-4 text-white" />}
                          {badge.icon === 'heart' && <Heart className="w-4 h-4 text-white" />}
                          {badge.icon === 'target' && <Target className="w-4 h-4 text-white" />}
                        </div>
                        <div className={`text-xs font-medium ${
                          badge.earned ? 'text-green-700' : 'text-gray-500'
                        }`}>
                          {badge.name}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

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