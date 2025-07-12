import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  MessageCircle, 
  Trophy, 
  Star, 
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
  Clock,
  MapPin,
  Phone,
  Calendar,
  GraduationCap,
  Building
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function CoachProfile() {
  const [activeTab, setActiveTab] = useState("overview");

  // Real coach data matching recruiting platform structure
  const coach = {
    name: "Coach Michael Rodriguez",
    title: "Head Basketball Coach",
    school: "University of Colorado Boulder",
    conference: "Big 12 Conference",
    division: "Division I",
    location: "Boulder, CO",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    yearsExperience: 12,
    contactInfo: {
      email: "m.rodriguez@colorado.edu",
      phone: "(303) 555-0123",
      office: "CU Events Center, Office 201"
    },
    stats: {
      totalRecruits: 45,
      currentRoster: 15,
      championships: 2,
      winPercentage: 73.2
    },
    recruiting: {
      activeRecruits: 12,
      offers: 8,
      commits: 3,
      targetPositions: ["Point Guard", "Shooting Guard", "Small Forward"]
    },
    achievements: [
      "2023 Big 12 Coach of the Year",
      "2022 NCAA Tournament Sweet 16",
      "2021 Conference Championship",
      "15+ years coaching experience"
    ],
    teamInfo: {
      established: 1901,
      arena: "CU Events Center",
      capacity: 11540,
      colors: ["Black", "Gold"],
      mascot: "Buffaloes"
    }
  };

  const recentActivity = [
    {
      id: 1,
      type: "recruit_offer",
      athlete: "Jordan Thompson",
      position: "Point Guard",
      location: "Denver, CO",
      timestamp: "2 hours ago",
      action: "Extended scholarship offer"
    },
    {
      id: 2,
      type: "game_result",
      opponent: "Kansas State",
      result: "W 78-65",
      timestamp: "3 days ago",
      highlights: "Team shot 52% from three-point line"
    },
    {
      id: 3,
      type: "recruit_visit",
      athlete: "Marcus Williams",
      position: "Shooting Guard",
      location: "Phoenix, AZ",
      timestamp: "1 week ago",
      action: "Official campus visit scheduled"
    },
    {
      id: 4,
      type: "commit",
      athlete: "Alex Johnson",
      position: "Small Forward",
      location: "Austin, TX",
      timestamp: "2 weeks ago",
      action: "Committed to CU Boulder"
    }
  ];

  const recruitingTargets = [
    {
      name: "Jordan Thompson",
      position: "Point Guard",
      height: "6'2\"",
      weight: "180 lbs",
      location: "Denver, CO",
      gradYear: "2025",
      rating: "4-star",
      status: "Offer Extended",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Marcus Williams",
      position: "Shooting Guard",
      height: "6'4\"",
      weight: "195 lbs",
      location: "Phoenix, AZ",
      gradYear: "2025",
      rating: "4-star",
      status: "Official Visit",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    },
    {
      name: "Alex Johnson",
      position: "Small Forward",
      height: "6'7\"",
      weight: "210 lbs",
      location: "Austin, TX",
      gradYear: "2025",
      rating: "5-star",
      status: "Committed",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Coach Header */}
        <div className="bg-white rounded-lg shadow-sm mb-8 overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 h-32"></div>
          <div className="px-6 pb-6">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4 -mt-16">
              <div className="relative">
                <img 
                  src={coach.profileImage} 
                  alt={coach.name}
                  className="w-32 h-32 rounded-full border-4 border-white shadow-lg"
                />
                <div className="absolute -bottom-2 -right-2 bg-green-500 w-8 h-8 rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
              </div>
              
              <div className="flex-1 mt-4 md:mt-0">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{coach.name}</h1>
                <p className="text-xl text-gray-600 mb-2">{coach.title}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <School className="w-4 h-4" />
                    {coach.school}
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {coach.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Trophy className="w-4 h-4" />
                    {coach.conference}
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    {coach.division}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                    {coach.yearsExperience} Years Experience
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {coach.stats.winPercentage}% Win Rate
                  </Badge>
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">
                    {coach.stats.championships} Championships
                  </Badge>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 md:mt-0">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact Coach
                </Button>
                <Button variant="outline">
                  <Heart className="w-4 h-4 mr-2" />
                  Follow
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'overview', label: 'Overview' },
                { id: 'recruiting', label: 'Recruiting' },
                { id: 'team', label: 'Team Info' },
                { id: 'achievements', label: 'Achievements' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-8">
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{coach.stats.totalRecruits}</div>
                      <div className="text-sm text-gray-600">Total Recruits</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{coach.stats.currentRoster}</div>
                      <div className="text-sm text-gray-600">Current Roster</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{coach.stats.championships}</div>
                      <div className="text-sm text-gray-600">Championships</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{coach.stats.winPercentage}%</div>
                      <div className="text-sm text-gray-600">Win Rate</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Activity */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Activity className="w-5 h-5" />
                      Recent Activity
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity) => (
                        <div key={activity.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            {activity.type === 'recruit_offer' && <Target className="w-5 h-5 text-blue-600" />}
                            {activity.type === 'game_result' && <Trophy className="w-5 h-5 text-green-600" />}
                            {activity.type === 'recruit_visit' && <Calendar className="w-5 h-5 text-purple-600" />}
                            {activity.type === 'commit' && <Star className="w-5 h-5 text-yellow-600" />}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium text-gray-900">
                                {activity.athlete || activity.opponent}
                              </div>
                              <div className="text-sm text-gray-500">{activity.timestamp}</div>
                            </div>
                            <div className="text-sm text-gray-600 mb-1">
                              {activity.action || activity.result}
                            </div>
                            {activity.position && (
                              <div className="text-xs text-gray-500">{activity.position} • {activity.location}</div>
                            )}
                            {activity.highlights && (
                              <div className="text-xs text-gray-500">{activity.highlights}</div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'recruiting' && (
              <div className="space-y-6">
                {/* Recruiting Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{coach.recruiting.activeRecruits}</div>
                      <div className="text-sm text-gray-600">Active Recruits</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{coach.recruiting.offers}</div>
                      <div className="text-sm text-gray-600">Offers Extended</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{coach.recruiting.commits}</div>
                      <div className="text-sm text-gray-600">Commits</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{coach.recruiting.targetPositions.length}</div>
                      <div className="text-sm text-gray-600">Target Positions</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Current Recruiting Targets */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Current Recruiting Targets
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recruitingTargets.map((recruit, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <img 
                            src={recruit.profileImage} 
                            alt={recruit.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium text-gray-900">{recruit.name}</div>
                              <Badge className={`text-xs ${
                                recruit.status === 'Committed' ? 'bg-green-100 text-green-800' :
                                recruit.status === 'Offer Extended' ? 'bg-blue-100 text-blue-800' :
                                'bg-purple-100 text-purple-800'
                              }`}>
                                {recruit.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 mb-1">
                              {recruit.position} • {recruit.height} • {recruit.weight}
                            </div>
                            <div className="text-xs text-gray-500 flex items-center gap-4">
                              <span>{recruit.location}</span>
                              <span>Class of {recruit.gradYear}</span>
                              <span>{recruit.rating}</span>
                            </div>
                          </div>
                          <Button size="sm" variant="outline">
                            <MessageCircle className="w-4 h-4 mr-2" />
                            Contact
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'team' && (
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <School className="w-5 h-5" />
                      Team Information
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Program Details</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Established:</span>
                            <span className="font-medium">{coach.teamInfo.established}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Home Arena:</span>
                            <span className="font-medium">{coach.teamInfo.arena}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Capacity:</span>
                            <span className="font-medium">{coach.teamInfo.capacity.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Mascot:</span>
                            <span className="font-medium">{coach.teamInfo.mascot}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Contact Information</h3>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <Mail className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{coach.contactInfo.email}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Phone className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{coach.contactInfo.phone}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Building className="w-4 h-4 text-gray-500" />
                            <span className="text-sm">{coach.contactInfo.office}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Career Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {coach.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                          <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center">
                            <Award className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <div className="font-medium text-gray-900">{achievement}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button className="w-full justify-start bg-blue-600 hover:bg-blue-700 text-white">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Visit
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Video className="w-4 h-4 mr-2" />
                      View Game Film
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Team Website
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Target Positions */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Recruiting Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-gray-600 mb-3">Currently seeking:</div>
                    {coach.recruiting.targetPositions.map((position, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">{position}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Program Highlights */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Program Highlights</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <GraduationCap className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-green-900">Academic Excellence</div>
                        <div className="text-xs text-green-600">Top 25 graduation rate</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Trophy className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="text-sm font-medium text-purple-900">Conference Champions</div>
                        <div className="text-xs text-purple-600">2021 Big 12 Winners</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Users className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium text-blue-900">Strong Alumni Network</div>
                        <div className="text-xs text-blue-600">12 NBA players</div>
                      </div>
                    </div>
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