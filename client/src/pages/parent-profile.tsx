import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Clock,
  DollarSign,
  FileText,
  Calendar as CalendarIcon,
  Home,
  BookOpen,
  AlertTriangle,
  CheckCircle,
  AlertCircle,
  Info,
  PlusCircle,
  Filter,
  Search,
  BarChart3,
  LineChart,
  PieChart,
  TrendingDown,
  Bookmark,
  Camera,
  Upload,
  Download,
  Share,
  Edit,
  Trash2,
  MoreHorizontal
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function ParentProfile() {
  const [activeTab, setActiveTab] = useState('dashboard');

  // Parent data
  const parentData = {
    name: "Sarah Johnson",
    email: "sarah.johnson@email.com",
    phone: "(555) 123-4567",
    location: "Chicago, IL",
    profileImage: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=150&h=150&fit=crop&crop=face",
    children: [
      {
        id: 1,
        name: "Michael Johnson",
        sport: "Basketball",
        gradYear: "2024",
        position: "Point Guard",
        gpa: 3.8,
        profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        stats: {
          colleges: 8,
          coaches: 12,
          offers: 3,
          visits: 2
        },
        profileCompletion: 85,
        lastActivity: "2 hours ago",
        recentActivity: "Updated highlight video"
      },
      {
        id: 2,
        name: "Emma Johnson",
        sport: "Soccer",
        gradYear: "2026",
        position: "Midfielder",
        gpa: 3.9,
        profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
        stats: {
          colleges: 4,
          coaches: 6,
          offers: 1,
          visits: 1
        },
        profileCompletion: 72,
        lastActivity: "1 day ago",
        recentActivity: "Added academic transcripts"
      }
    ],
    notifications: [
      { type: "offer", message: "Michael received a scholarship offer from State University", time: "2 hours ago", urgent: true },
      { type: "message", message: "Coach Williams wants to schedule a call about Emma", time: "4 hours ago", urgent: false },
      { type: "deadline", message: "Application deadline for Northwestern approaching", time: "1 day ago", urgent: true },
      { type: "update", message: "Emma's profile completion increased to 72%", time: "2 days ago", urgent: false },
      { type: "achievement", message: "Michael earned 'Video Star' achievement", time: "3 days ago", urgent: false }
    ],
    financialOverview: {
      totalSavings: 45000,
      scholarshipValue: 125000,
      collegeContacts: 18,
      activeApplications: 6
    }
  };

  // Financial planning data
  const financialData = {
    collegeExpenses: [
      { category: "Tuition & Fees", estimated: 35000, current: 0, color: "bg-blue-500" },
      { category: "Room & Board", estimated: 15000, current: 0, color: "bg-green-500" },
      { category: "Books & Supplies", estimated: 1200, current: 0, color: "bg-yellow-500" },
      { category: "Transportation", estimated: 2000, current: 0, color: "bg-purple-500" },
      { category: "Personal Expenses", estimated: 2800, current: 0, color: "bg-red-500" }
    ],
    scholarshipOpportunities: [
      { name: "Academic Excellence Scholarship", amount: 15000, deadline: "March 15, 2024", status: "eligible" },
      { name: "Athletic Merit Award", amount: 8000, deadline: "April 1, 2024", status: "applied" },
      { name: "Community Service Grant", amount: 3000, deadline: "February 28, 2024", status: "pending" },
      { name: "Leadership Achievement Award", amount: 5000, deadline: "May 1, 2024", status: "eligible" }
    ]
  };

  // College comparison data
  const collegeComparisons = [
    {
      name: "State University",
      tuition: 28000,
      ranking: 45,
      distance: "2 hours",
      acceptance: 68,
      scholarshipOffered: 15000,
      pros: ["Strong basketball program", "Good academics", "Close to home"],
      cons: ["Large class sizes", "Limited personal attention"],
      status: "offer"
    },
    {
      name: "Northwestern College",
      tuition: 45000,
      ranking: 15,
      distance: "4 hours",
      acceptance: 32,
      scholarshipOffered: 0,
      pros: ["Excellent academics", "Small class sizes", "Great alumni network"],
      cons: ["Very expensive", "Highly competitive", "Far from home"],
      status: "considering"
    },
    {
      name: "Metro University",
      tuition: 22000,
      ranking: 78,
      distance: "1 hour",
      acceptance: 78,
      scholarshipOffered: 8000,
      pros: ["Affordable", "Very close to home", "Good support services"],
      cons: ["Less prestigious", "Limited research opportunities"],
      status: "safety"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <img 
                src={parentData.profileImage} 
                alt={parentData.name}
                className="w-16 h-16 rounded-full flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900">{parentData.name}</h1>
                <p className="text-gray-600 break-words">Parent Dashboard</p>
                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <Badge variant="outline" className="text-xs">
                    {parentData.children.length} {parentData.children.length === 1 ? 'Child' : 'Children'}
                  </Badge>
                  <Badge variant="outline" className="text-xs">
                    {parentData.location}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                <MessageCircle className="w-4 h-4 mr-2" />
                Messages
              </Button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="mt-6">
            <nav className="flex space-x-1 overflow-x-auto">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: Home },
                { id: 'children', label: 'My Children', icon: Users },
                { id: 'finances', label: 'Financial Planning', icon: DollarSign },
                { id: 'colleges', label: 'College Comparison', icon: School },
                { id: 'documents', label: 'Documents', icon: FileText },
                { id: 'calendar', label: 'Calendar', icon: CalendarIcon }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
          {/* Left Content */}
          <div className="lg:col-span-8">
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Quick Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{parentData.financialOverview.collegeContacts}</div>
                          <div className="text-sm text-gray-600">College Contacts</div>
                        </div>
                        <School className="w-8 h-8 text-blue-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">{parentData.financialOverview.activeApplications}</div>
                          <div className="text-sm text-gray-600">Active Applications</div>
                        </div>
                        <FileText className="w-8 h-8 text-green-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">${parentData.financialOverview.scholarshipValue.toLocaleString()}</div>
                          <div className="text-sm text-gray-600 break-words">Scholarship Value</div>
                        </div>
                        <Award className="w-8 h-8 text-yellow-500" />
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-white shadow-sm">
                    <CardContent className="p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-gray-900">${parentData.financialOverview.totalSavings.toLocaleString()}</div>
                          <div className="text-sm text-gray-600">College Savings</div>
                        </div>
                        <DollarSign className="w-8 h-8 text-purple-500" />
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Children Overview */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Children Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {parentData.children.map((child) => (
                        <div key={child.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
                          <div className="flex items-center gap-4">
                            <img 
                              src={child.profileImage} 
                              alt={child.name}
                              className="w-12 h-12 rounded-full flex-shrink-0"
                            />
                            <div className="min-w-0">
                              <h3 className="font-medium text-gray-900">{child.name}</h3>
                              <p className="text-sm text-gray-600">{child.sport} • {child.position} • Class of {child.gradYear}</p>
                              <div className="flex flex-wrap items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-xs">GPA: {child.gpa}</Badge>
                                <Badge variant="outline" className="text-xs">{child.profileCompletion}% Complete</Badge>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right">
                              <div className="text-sm font-medium text-gray-900">{child.stats.offers} Offers</div>
                              <div className="text-xs text-gray-600">Last active: {child.lastActivity}</div>
                            </div>
                            <Button variant="outline" size="sm">
                              View Profile
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Activity */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {parentData.notifications.slice(0, 5).map((notification, index) => (
                        <div key={index} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                          <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                            notification.type === 'offer' ? 'bg-green-500' :
                            notification.type === 'message' ? 'bg-blue-500' :
                            notification.type === 'deadline' ? 'bg-red-500' :
                            notification.type === 'update' ? 'bg-yellow-500' :
                            'bg-purple-500'
                          }`}></div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-gray-800 break-words">{notification.message}</p>
                            <p className="text-xs text-gray-500 mt-1">{notification.time}</p>
                          </div>
                          {notification.urgent && (
                            <Badge variant="destructive" className="text-xs">
                              Urgent
                            </Badge>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'children' && (
              <div className="space-y-6">
                {parentData.children.map((child) => (
                  <Card key={child.id} className="bg-white shadow-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <img 
                            src={child.profileImage} 
                            alt={child.name}
                            className="w-16 h-16 rounded-full flex-shrink-0"
                          />
                          <div className="min-w-0">
                            <h3 className="text-xl font-bold text-gray-900">{child.name}</h3>
                            <p className="text-gray-600">{child.sport} • {child.position} • Class of {child.gradYear}</p>
                            <div className="flex flex-wrap items-center gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">GPA: {child.gpa}</Badge>
                              <Badge variant="outline" className="text-xs">{child.profileCompletion}% Complete</Badge>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Edit className="w-4 h-4 mr-2" />
                            Edit Profile
                          </Button>
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            <Eye className="w-4 h-4 mr-2" />
                            View Full Profile
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                        <div className="text-center p-3 bg-blue-50 rounded-lg">
                          <div className="text-2xl font-bold text-blue-600">{child.stats.colleges}</div>
                          <div className="text-sm text-blue-800">College Contacts</div>
                        </div>
                        <div className="text-center p-3 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">{child.stats.coaches}</div>
                          <div className="text-sm text-green-800">Coach Connections</div>
                        </div>
                        <div className="text-center p-3 bg-yellow-50 rounded-lg">
                          <div className="text-2xl font-bold text-yellow-600">{child.stats.offers}</div>
                          <div className="text-sm text-yellow-800">Scholarship Offers</div>
                        </div>
                        <div className="text-center p-3 bg-purple-50 rounded-lg">
                          <div className="text-2xl font-bold text-purple-600">{child.stats.visits}</div>
                          <div className="text-sm text-purple-800">Campus Visits</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                            <span className="text-sm text-gray-500">{child.profileCompletion}%</span>
                          </div>
                          <Progress value={child.profileCompletion} className="h-2" />
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-2">
                          <Button variant="outline" size="sm">
                            <Upload className="w-4 h-4 mr-2" />
                            Upload Videos
                          </Button>
                          <Button variant="outline" size="sm">
                            <FileText className="w-4 h-4 mr-2" />
                            Update Transcripts
                          </Button>
                          <Button variant="outline" size="sm">
                            <Calendar className="w-4 h-4 mr-2" />
                            Schedule Visits
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'finances' && (
              <div className="space-y-6">
                {/* Financial Overview */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Financial Overview</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">${parentData.financialOverview.totalSavings.toLocaleString()}</div>
                        <div className="text-sm text-green-800">Current Savings</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">${parentData.financialOverview.scholarshipValue.toLocaleString()}</div>
                        <div className="text-sm text-blue-800 break-words">Scholarship Potential</div>
                      </div>
                      <div className="text-center p-4 bg-yellow-50 rounded-lg">
                        <div className="text-2xl font-bold text-yellow-600">${(parentData.financialOverview.scholarshipValue - parentData.financialOverview.totalSavings).toLocaleString()}</div>
                        <div className="text-sm text-yellow-800">Funding Gap</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* College Expenses Breakdown */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Estimated College Expenses</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {financialData.collegeExpenses.map((expense, index) => (
                        <div key={index} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-gray-700 break-words">{expense.category}</span>
                            <span className="text-sm text-gray-900">${expense.estimated.toLocaleString()}</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${expense.color}`}
                              style={{ width: `${(expense.estimated / 56000) * 100}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Scholarship Opportunities */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Scholarship Opportunities</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {financialData.scholarshipOpportunities.map((scholarship, index) => (
                        <div key={index} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
                          <div className="min-w-0 flex-1">
                            <h4 className="font-medium text-gray-900 break-words">{scholarship.name}</h4>
                            <p className="text-sm text-gray-600">Amount: ${scholarship.amount.toLocaleString()}</p>
                            <p className="text-sm text-gray-600">Deadline: {scholarship.deadline}</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Badge variant={
                              scholarship.status === 'applied' ? 'default' :
                              scholarship.status === 'pending' ? 'secondary' :
                              'outline'
                            } className="text-xs">
                              {scholarship.status}
                            </Badge>
                            <Button variant="outline" size="sm">
                              {scholarship.status === 'eligible' ? 'Apply Now' : 'View Details'}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'colleges' && (
              <div className="space-y-6">
                {collegeComparisons.map((college, index) => (
                  <Card key={index} className="bg-white shadow-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">{college.name}</h3>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              Ranking: #{college.ranking}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {college.distance} away
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {college.acceptance}% acceptance rate
                            </Badge>
                          </div>
                        </div>
                        <Badge variant={
                          college.status === 'offer' ? 'default' :
                          college.status === 'considering' ? 'secondary' :
                          'outline'
                        }>
                          {college.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Financial Details</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Annual Tuition:</span>
                              <span className="text-sm font-medium">${college.tuition.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Scholarship Offered:</span>
                              <span className="text-sm font-medium text-green-600">
                                {college.scholarshipOffered > 0 ? `$${college.scholarshipOffered.toLocaleString()}` : 'None'}
                              </span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Net Cost:</span>
                              <span className="text-sm font-medium">${(college.tuition - college.scholarshipOffered).toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-2">Pros & Cons</h4>
                          <div className="space-y-2">
                            <div>
                              <span className="text-xs font-medium text-green-600">Pros:</span>
                              <ul className="text-xs text-gray-600 mt-1">
                                {college.pros.map((pro, i) => (
                                  <li key={i} className="break-words">• {pro}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <span className="text-xs font-medium text-red-600">Cons:</span>
                              <ul className="text-xs text-gray-600 mt-1">
                                {college.cons.map((con, i) => (
                                  <li key={i} className="break-words">• {con}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          <Calendar className="w-4 h-4 mr-2" />
                          Schedule Visit
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contact Coach
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'documents' && (
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Document Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Upload Academic Transcripts</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Choose Files
                        </Button>
                      </div>
                      <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-sm text-gray-600">Upload Financial Documents</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Choose Files
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'calendar' && (
              <div className="space-y-6">
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg">
                        <Calendar className="w-8 h-8 text-blue-600 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900">Campus Visit - State University</h4>
                          <p className="text-sm text-gray-600">March 15, 2024 at 10:00 AM</p>
                          <p className="text-sm text-gray-600 break-words">Meeting with Coach Johnson and admissions team</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-green-50 rounded-lg">
                        <Calendar className="w-8 h-8 text-green-600 flex-shrink-0" />
                        <div className="min-w-0 flex-1">
                          <h4 className="font-medium text-gray-900">Scholarship Application Deadline</h4>
                          <p className="text-sm text-gray-600">March 20, 2024</p>
                          <p className="text-sm text-gray-600 break-words">Academic Excellence Scholarship due</p>
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
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Message Coaches
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Campus Visit
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Documents
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Apply for Scholarships
                  </Button>
                </CardContent>
              </Card>

              {/* Urgent Notifications */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-red-500" />
                    Urgent Items
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {parentData.notifications.filter(n => n.urgent).map((notification, index) => (
                      <div key={index} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-sm text-red-800 break-words">{notification.message}</p>
                        <p className="text-xs text-red-600 mt-1">{notification.time}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Progress Tracking */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Progress Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {parentData.children.map((child) => (
                      <div key={child.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium text-gray-700 break-words">{child.name}</span>
                          <span className="text-sm text-gray-500">{child.profileCompletion}%</span>
                        </div>
                        <Progress value={child.profileCompletion} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Resources */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Resources</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <BookOpen className="w-4 h-4 mr-2" />
                    College Planning Guide
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Financial Aid Calculator
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="w-4 h-4 mr-2" />
                    Parent Community
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="w-4 h-4 mr-2" />
                    Contact Support
                  </Button>
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