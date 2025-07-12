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
  const [activeTab, setActiveTab] = useState("dashboard");

  // Coach dashboard data for managing recruiting activities
  const coach = {
    name: "Coach Michael Rodriguez",
    title: "Head Basketball Coach",
    school: "University of Colorado Boulder",
    profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    unreadMessages: 12,
    pendingOffers: 5,
    scheduledVisits: 3,
    newProspects: 8
  };

  const athleteMessages = [
    {
      id: 1,
      athlete: "Jordan Thompson",
      position: "Point Guard",
      location: "Denver, CO",
      gradYear: "2025",
      lastMessage: "Thank you for the scholarship offer! I'm very interested in CU Boulder.",
      timestamp: "2 hours ago",
      unread: true,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 2,
      athlete: "Marcus Williams",
      position: "Shooting Guard",
      location: "Phoenix, AZ",
      gradYear: "2025",
      lastMessage: "Can we schedule a video call to discuss the program?",
      timestamp: "5 hours ago",
      unread: true,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    },
    {
      id: 3,
      athlete: "Alex Johnson",
      position: "Small Forward",
      location: "Austin, TX",
      gradYear: "2025",
      lastMessage: "I'm ready to commit to CU Boulder! Let's make it official.",
      timestamp: "1 day ago",
      unread: false,
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
    }
  ];

  const watchedAthletes = [
    {
      id: 1,
      name: "Jordan Thompson",
      position: "Point Guard",
      height: "6'2\"",
      weight: "180 lbs",
      location: "Denver, CO",
      gradYear: "2025",
      rating: "4-star",
      status: "Offer Extended",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      lastActivity: "Updated highlights video",
      timestamp: "2 hours ago"
    },
    {
      id: 2,
      name: "Marcus Williams",
      position: "Shooting Guard",
      height: "6'4\"",
      weight: "195 lbs",
      location: "Phoenix, AZ",
      gradYear: "2025",
      rating: "4-star",
      status: "Watching",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      lastActivity: "Added new game stats",
      timestamp: "1 day ago"
    },
    {
      id: 3,
      name: "Alex Johnson",
      position: "Small Forward",
      height: "6'7\"",
      weight: "210 lbs",
      location: "Austin, TX",
      gradYear: "2025",
      rating: "5-star",
      status: "Committed",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      lastActivity: "Profile verification completed",
      timestamp: "3 days ago"
    }
  ];

  const prospectSearchResults = [
    {
      id: 4,
      name: "Tyler Davis",
      position: "Center",
      height: "6'10\"",
      weight: "240 lbs",
      location: "Houston, TX",
      gradYear: "2025",
      rating: "4-star",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      stats: { ppg: 18.5, rpg: 12.2, bpg: 3.1 },
      matchScore: 94
    },
    {
      id: 5,
      name: "Chris Martinez",
      position: "Power Forward",
      height: "6'8\"",
      weight: "225 lbs",
      location: "San Antonio, TX",
      gradYear: "2025",
      rating: "3-star",
      profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
      stats: { ppg: 15.8, rpg: 8.4, apg: 2.1 },
      matchScore: 87
    }
  ];

  const aiTools = [
    {
      id: 1,
      name: "AI Athlete Search & Matching",
      description: "Intelligent filtering and smart suggestions based on your recruiting needs",
      icon: "users",
      features: ["Natural language search", "Smart recommendations", "Fit scoring"],
      status: "active"
    },
    {
      id: 2,
      name: "Video Analysis AI",
      description: "Automated highlight generation and player comparison tools",
      icon: "video",
      features: ["Auto highlight reels", "Player comparisons", "Key moment tagging"],
      status: "active"
    },
    {
      id: 3,
      name: "Recruitment Automation",
      description: "Automated communication and follow-up management",
      icon: "zap",
      features: ["Personalized emails", "Follow-up reminders", "Communication tracking"],
      status: "active"
    },
    {
      id: 4,
      name: "Predictive Analytics",
      description: "Performance forecasting and roster gap analysis",
      icon: "trending-up",
      features: ["Future potential scoring", "Roster optimization", "Attrition forecasting"],
      status: "beta"
    }
  ];

  const aiInsights = [
    {
      type: "recommendation",
      title: "Top AI Recommendation",
      content: "Based on your recent searches, Jordan Thompson (Point Guard, Denver CO) shows 94% fit with your program needs.",
      priority: "high",
      actionable: true
    },
    {
      type: "alert",
      title: "Compliance Alert",
      content: "Marcus Williams needs to complete transcript upload for NCAA eligibility verification.",
      priority: "medium",
      actionable: true
    },
    {
      type: "insight",
      title: "Recruiting Trend",
      content: "Point Guards in your region are responding 40% better to video messages vs text-only outreach.",
      priority: "low",
      actionable: false
    }
  ];

  const rosterAnalysis = {
    currentRoster: 15,
    graduatingSeniors: 4,
    predictedTransfers: 2,
    positionGaps: [
      { position: "Point Guard", current: 2, needed: 1, priority: "high" },
      { position: "Center", current: 1, needed: 2, priority: "critical" },
      { position: "Shooting Guard", current: 3, needed: 0, priority: "satisfied" }
    ],
    recruitingTargets: 8,
    projectedNeeds: "Strong need for interior presence and backup point guard"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Coach Dashboard Header */}
        <div className="bg-white rounded-lg shadow-sm mb-8 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <img 
                src={coach.profileImage} 
                alt={coach.name}
                className="w-16 h-16 rounded-full border-2 border-blue-200"
              />
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{coach.name}</h1>
                <p className="text-lg text-gray-600">{coach.title}</p>
                <p className="text-sm text-gray-500">{coach.school}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              {coach.unreadMessages > 0 && (
                <div className="relative">
                  <Bell className="w-6 h-6 text-gray-500" />
                  <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                    <span className="text-xs text-white font-bold">{coach.unreadMessages}</span>
                  </div>
                </div>
              )}
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-8">
          <div className="border-b border-gray-200">
            <nav className="flex space-x-8 px-6">
              {[
                { id: 'dashboard', label: 'Dashboard' },
                { id: 'messages', label: 'Messages' },
                { id: 'prospects', label: 'Prospects' },
                { id: 'watchlist', label: 'Watchlist' },
                { id: 'ai-tools', label: 'AI Tools' }
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
                  {tab.id === 'messages' && coach.unreadMessages > 0 && (
                    <span className="ml-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {coach.unreadMessages}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Content */}
          <div className="lg:col-span-8">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-2">{coach.unreadMessages}</div>
                      <div className="text-sm text-gray-600">Unread Messages</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">{coach.pendingOffers}</div>
                      <div className="text-sm text-gray-600">Pending Offers</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">{coach.scheduledVisits}</div>
                      <div className="text-sm text-gray-600">Scheduled Visits</div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-6 text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">{coach.newProspects}</div>
                      <div className="text-sm text-gray-600">New Prospects</div>
                    </CardContent>
                  </Card>
                </div>

                {/* Recent Messages Preview */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Recent Messages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {athleteMessages.slice(0, 3).map((message) => (
                        <div key={message.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <img 
                            src={message.profileImage} 
                            alt={message.athlete}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium text-gray-900">{message.athlete}</div>
                              <div className="text-sm text-gray-500">{message.timestamp}</div>
                            </div>
                            <div className="text-sm text-gray-600 mb-1">
                              {message.position} • {message.location} • Class of {message.gradYear}
                            </div>
                            <div className="text-sm text-gray-700 line-clamp-2">
                              {message.lastMessage}
                            </div>
                          </div>
                          {message.unread && (
                            <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 pt-4 border-t">
                      <Button 
                        className="w-full"
                        onClick={() => setActiveTab('messages')}
                      >
                        View All Messages ({coach.unreadMessages})
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'messages' && (
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Athlete Messages
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {athleteMessages.map((message) => (
                        <div key={message.id} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 cursor-pointer">
                          <img 
                            src={message.profileImage} 
                            alt={message.athlete}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium text-gray-900">{message.athlete}</div>
                              <div className="text-sm text-gray-500">{message.timestamp}</div>
                            </div>
                            <div className="text-sm text-gray-600 mb-2">
                              {message.position} • {message.location} • Class of {message.gradYear}
                            </div>
                            <div className="text-sm text-gray-700 mb-3">
                              {message.lastMessage}
                            </div>
                            <div className="flex gap-2">
                              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                                Reply
                              </Button>
                              <Button size="sm" variant="outline">
                                View Profile
                              </Button>
                            </div>
                          </div>
                          {message.unread && (
                            <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'prospects' && (
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Discover New Prospects
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-4">
                      <div className="flex gap-4 mb-4">
                        <div className="flex-1">
                          <input
                            type="text"
                            placeholder="Search by name, position, or location..."
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                        <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Target className="w-4 h-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {prospectSearchResults.map((prospect) => (
                        <div key={prospect.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <img 
                            src={prospect.profileImage} 
                            alt={prospect.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium text-gray-900">{prospect.name}</div>
                              <div className="flex items-center gap-2">
                                <div className="text-sm text-green-600 font-medium">
                                  {prospect.matchScore}% Match
                                </div>
                                <Badge className="bg-yellow-100 text-yellow-800">
                                  {prospect.rating}
                                </Badge>
                              </div>
                            </div>
                            <div className="text-sm text-gray-600 mb-1">
                              {prospect.position} • {prospect.height} • {prospect.weight}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {prospect.location} • Class of {prospect.gradYear}
                            </div>
                            <div className="text-xs text-gray-600 flex gap-4">
                              <span>PPG: {prospect.stats.ppg}</span>
                              <span>RPG: {prospect.stats.rpg}</span>
                              {prospect.stats.bpg && <span>BPG: {prospect.stats.bpg}</span>}
                              {prospect.stats.apg && <span>APG: {prospect.stats.apg}</span>}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Contact
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-2" />
                              Add to Watchlist
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'watchlist' && (
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Your Watchlist
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {watchedAthletes.map((athlete) => (
                        <div key={athlete.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                          <img 
                            src={athlete.profileImage} 
                            alt={athlete.name}
                            className="w-12 h-12 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <div className="font-medium text-gray-900">{athlete.name}</div>
                              <Badge className={`text-xs ${
                                athlete.status === 'Committed' ? 'bg-green-100 text-green-800' :
                                athlete.status === 'Offer Extended' ? 'bg-blue-100 text-blue-800' :
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {athlete.status}
                              </Badge>
                            </div>
                            <div className="text-sm text-gray-600 mb-1">
                              {athlete.position} • {athlete.height} • {athlete.weight}
                            </div>
                            <div className="text-xs text-gray-500 mb-2">
                              {athlete.location} • Class of {athlete.gradYear} • {athlete.rating}
                            </div>
                            <div className="text-xs text-gray-600">
                              Latest: {athlete.lastActivity} • {athlete.timestamp}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                              <MessageCircle className="w-4 h-4 mr-2" />
                              Message
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trophy className="w-4 h-4 mr-2" />
                              Offer
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'ai-tools' && (
              <div className="space-y-6">
                {/* AI Tools Overview */}
                <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <Zap className="w-6 h-6" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold mb-1">AI-Powered Recruiting</h2>
                        <p className="text-purple-100">Advanced tools to streamline your recruiting process</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Insights Dashboard */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <TrendingUp className="w-5 h-5" />
                      AI Insights & Recommendations
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {aiInsights.map((insight, index) => (
                        <div key={index} className={`p-4 rounded-lg border-l-4 ${
                          insight.priority === 'high' ? 'border-red-500 bg-red-50' :
                          insight.priority === 'medium' ? 'border-yellow-500 bg-yellow-50' :
                          'border-blue-500 bg-blue-50'
                        }`}>
                          <div className="flex items-start justify-between">
                            <div>
                              <div className={`font-medium mb-1 ${
                                insight.priority === 'high' ? 'text-red-900' :
                                insight.priority === 'medium' ? 'text-yellow-900' :
                                'text-blue-900'
                              }`}>
                                {insight.title}
                              </div>
                              <div className={`text-sm ${
                                insight.priority === 'high' ? 'text-red-700' :
                                insight.priority === 'medium' ? 'text-yellow-700' :
                                'text-blue-700'
                              }`}>
                                {insight.content}
                              </div>
                            </div>
                            {insight.actionable && (
                              <Button size="sm" variant="outline" className="flex-shrink-0">
                                Take Action
                              </Button>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* AI Natural Language Search */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      AI Athlete Search
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                        <div className="text-sm font-medium text-gray-900 mb-2">Try Natural Language Search:</div>
                        <div className="text-xs text-gray-600 space-y-1">
                          <div>"Show me point guards in Texas with GPA above 3.5"</div>
                          <div>"Find centers over 6'8" who can shoot 3-pointers"</div>
                          <div>"Recommend forwards similar to my current starter"</div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          placeholder="Ask AI to find athletes... (e.g., 'Show me midfielders in Texas with GPA above 3.5')"
                          className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <Button className="bg-purple-600 hover:bg-purple-700 text-white">
                          <Zap className="w-4 h-4 mr-2" />
                          Search
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {aiTools.map((tool) => (
                    <Card key={tool.id} className="bg-white shadow-sm hover:shadow-md transition-shadow">
                      <CardHeader>
                        <CardTitle className="text-lg font-semibold flex items-center gap-2">
                          {tool.icon === 'users' && <Users className="w-5 h-5 text-blue-600" />}
                          {tool.icon === 'video' && <Video className="w-5 h-5 text-green-600" />}
                          {tool.icon === 'zap' && <Zap className="w-5 h-5 text-purple-600" />}
                          {tool.icon === 'trending-up' && <TrendingUp className="w-5 h-5 text-orange-600" />}
                          <div>
                            {tool.name}
                            {tool.status === 'beta' && (
                              <Badge className="ml-2 bg-orange-100 text-orange-800 text-xs">Beta</Badge>
                            )}
                          </div>
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 mb-4">{tool.description}</p>
                        <div className="space-y-2 mb-4">
                          {tool.features.map((feature, index) => (
                            <div key={index} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                              <span className="text-xs text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                        <Button 
                          className="w-full" 
                          variant={tool.status === 'active' ? 'default' : 'outline'}
                        >
                          {tool.status === 'active' ? 'Launch Tool' : 'Join Beta'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Roster Analysis AI */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Target className="w-5 h-5" />
                      AI Roster Analysis
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold mb-4">Current Roster Overview</h3>
                        <div className="space-y-3">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Current Players:</span>
                            <span className="font-medium">{rosterAnalysis.currentRoster}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Graduating Seniors:</span>
                            <span className="font-medium text-orange-600">{rosterAnalysis.graduatingSeniors}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Predicted Transfers:</span>
                            <span className="font-medium text-red-600">{rosterAnalysis.predictedTransfers}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Recruiting Targets:</span>
                            <span className="font-medium text-blue-600">{rosterAnalysis.recruitingTargets}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-4">Position Needs Analysis</h3>
                        <div className="space-y-3">
                          {rosterAnalysis.positionGaps.map((gap, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <div className="font-medium text-sm">{gap.position}</div>
                                <div className="text-xs text-gray-500">Current: {gap.current} | Need: {gap.needed}</div>
                              </div>
                              <Badge className={`text-xs ${
                                gap.priority === 'critical' ? 'bg-red-100 text-red-800' :
                                gap.priority === 'high' ? 'bg-orange-100 text-orange-800' :
                                'bg-green-100 text-green-800'
                              }`}>
                                {gap.priority}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                      <div className="font-medium text-blue-900 mb-2">AI Recommendation:</div>
                      <div className="text-sm text-blue-700">{rosterAnalysis.projectedNeeds}</div>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Communication Assistant */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      AI Communication Assistant
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Button variant="outline" className="p-4 h-auto flex-col items-start">
                          <div className="font-medium mb-1">Generate Intro Email</div>
                          <div className="text-xs text-gray-500">AI creates personalized first contact</div>
                        </Button>
                        <Button variant="outline" className="p-4 h-auto flex-col items-start">
                          <div className="font-medium mb-1">Schedule Follow-ups</div>
                          <div className="text-xs text-gray-500">Smart timing recommendations</div>
                        </Button>
                        <Button variant="outline" className="p-4 h-auto flex-col items-start">
                          <div className="font-medium mb-1">Compliance Check</div>
                          <div className="text-xs text-gray-500">Auto-verify eligibility status</div>
                        </Button>
                      </div>
                      <div className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg">
                        <div className="text-sm font-medium text-gray-900 mb-2">AI Recruiting Concierge</div>
                        <div className="text-xs text-gray-600 mb-3">Ask your AI assistant anything about recruiting:</div>
                        <div className="flex gap-2">
                          <input
                            type="text"
                            placeholder="Ask AI: 'Who should I watch at the Dallas showcase this weekend?'"
                            className="flex-1 p-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                          />
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            Ask AI
                          </Button>
                        </div>
                      </div>
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
                      Compose Message
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Users className="w-4 h-4 mr-2" />
                      Search Athletes
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Calendar className="w-4 h-4 mr-2" />
                      Schedule Events
                    </Button>
                    <Button className="w-full justify-start" variant="outline">
                      <Trophy className="w-4 h-4 mr-2" />
                      Send Offer
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Activity Summary */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Today's Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <MessageCircle className="w-5 h-5 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Messages</span>
                      </div>
                      <div className="text-lg font-bold text-blue-600">{coach.unreadMessages}</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Trophy className="w-5 h-5 text-green-600" />
                        <span className="text-sm font-medium text-green-900">Offers</span>
                      </div>
                      <div className="text-lg font-bold text-green-600">{coach.pendingOffers}</div>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-purple-600" />
                        <span className="text-sm font-medium text-purple-900">Visits</span>
                      </div>
                      <div className="text-lg font-bold text-purple-600">{coach.scheduledVisits}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recruiting Pipeline */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Recruiting Pipeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Target Positions</span>
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Point Guard</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Shooting Guard</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <Target className="w-4 h-4 text-blue-600" />
                        <span className="text-sm font-medium text-blue-900">Small Forward</span>
                      </div>
                    </div>
                    <div className="pt-3 border-t">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-gray-600">Class of 2025</span>
                        <span className="text-sm font-medium">12 prospects</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <div className="text-xs text-gray-500 mt-1">65% target positions filled</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Platform Updates */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Platform Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <Users className="w-5 h-5 text-green-600" />
                      <div>
                        <div className="text-sm font-medium text-green-900">New Athletes</div>
                        <div className="text-xs text-green-600">{coach.newProspects} new profiles this week</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Bell className="w-5 h-5 text-purple-600" />
                      <div>
                        <div className="text-sm font-medium text-purple-900">Profile Updates</div>
                        <div className="text-xs text-purple-600">3 watchlist athletes updated</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Activity className="w-5 h-5 text-blue-600" />
                      <div>
                        <div className="text-sm font-medium text-blue-900">Platform Activity</div>
                        <div className="text-xs text-blue-600">24 new messages today</div>
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