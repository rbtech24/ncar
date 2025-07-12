import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  BarChart3,
  Users,
  Trophy,
  School,
  MessageSquare,
  Shield,
  Settings,
  Database,
  Activity,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Clock,
  Eye,
  Edit,
  Trash2,
  Plus,
  Search,
  Filter,
  Download,
  Upload,
  RefreshCw,
  Bell,
  Flag,
  UserCheck,
  UserX,
  Ban,
  Calendar,
  FileText,
  Globe,
  Cpu,
  HardDrive,
  Wifi,
  Zap,
  Target,
  DollarSign,
  Mail,
  Phone,
  Video,
  MonitorSpeaker,
  Gauge,
  PieChart,
  LineChart,
  BarChart,
  Map,
  UserPlus,
  Building,
  GraduationCap,
  Award,
  Star,
  Heart,
  Share2,
  Lock,
  Unlock,
  Key,
  ServerCrash,
  Wifi as WifiIcon,
  Cloud,
  CloudOff
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");

  // System statistics
  const systemStats = {
    totalUsers: 12547,
    activeUsers: 8923,
    totalAthletes: 4821,
    totalCoaches: 2156,
    totalParents: 3892,
    totalColleges: 1678,
    totalClubs: 892,
    totalMessages: 156789,
    totalCalls: 8234,
    totalVideos: 45678,
    totalSubscriptions: 8234,
    complianceScore: 96.8,
    serverUptime: 99.97,
    storageUsed: 78.2,
    bandwidth: 156.8,
    aiProcessingJobs: 234,
    videoAnalysisQueue: 45,
    profileCompletionRate: 87.3,
    matchingSuccessRate: 92.1
  };

  // User management data
  const recentUsers = [
    {
      id: 1,
      name: "Michael Johnson",
      email: "michael.johnson@email.com",
      type: "athlete",
      status: "active",
      lastLogin: "2024-03-15T14:30:00Z",
      joinDate: "2024-01-15",
      profileCompletion: 85,
      complianceScore: 98
    },
    {
      id: 2,
      name: "Coach Williams",
      email: "coach.williams@university.edu",
      type: "coach",
      status: "active",
      lastLogin: "2024-03-15T09:45:00Z",
      joinDate: "2023-08-20",
      profileCompletion: 95,
      complianceScore: 100
    },
    {
      id: 3,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      type: "parent",
      status: "pending",
      lastLogin: "2024-03-14T16:20:00Z",
      joinDate: "2024-02-10",
      profileCompletion: 72,
      complianceScore: 95
    },
    {
      id: 4,
      name: "State University",
      email: "admin@stateuniversity.edu",
      type: "college",
      status: "active",
      lastLogin: "2024-03-15T11:15:00Z",
      joinDate: "2023-06-01",
      profileCompletion: 100,
      complianceScore: 99
    }
  ];

  // System alerts
  const systemAlerts = [
    {
      id: 1,
      type: "warning",
      severity: "high",
      title: "High Server Load",
      message: "CPU usage at 85% - consider scaling resources",
      timestamp: "2024-03-15T14:30:00Z",
      resolved: false
    },
    {
      id: 2,
      type: "compliance",
      severity: "medium",
      title: "Compliance Review Required",
      message: "23 messages flagged for manual review",
      timestamp: "2024-03-15T12:15:00Z",
      resolved: false
    },
    {
      id: 3,
      type: "security",
      severity: "low",
      title: "Failed Login Attempts",
      message: "Multiple failed login attempts detected",
      timestamp: "2024-03-15T10:20:00Z",
      resolved: true
    }
  ];

  // Compliance data
  const complianceData = {
    totalReviews: 1247,
    approved: 1201,
    flagged: 23,
    pending: 23,
    violations: 3,
    riskScore: 2.1
  };

  // Financial data
  const financialData = {
    monthlyRevenue: 245000,
    subscriptions: 8923,
    avgRevenuePerUser: 27.45,
    churnRate: 3.2,
    conversionRate: 12.8
  };

  // Performance metrics
  const performanceMetrics = {
    pageLoadTime: 1.2,
    apiResponseTime: 85,
    errorRate: 0.03,
    uptime: 99.97,
    activeConnections: 2341
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      active: "bg-green-100 text-green-800",
      pending: "bg-yellow-100 text-yellow-800",
      suspended: "bg-red-100 text-red-800",
      inactive: "bg-gray-100 text-gray-800"
    };
    return variants[status as keyof typeof variants] || variants.inactive;
  };

  const getUserTypeIcon = (type: string) => {
    switch (type) {
      case "athlete":
        return <Users className="w-4 h-4 text-blue-500" />;
      case "coach":
        return <Trophy className="w-4 h-4 text-green-500" />;
      case "parent":
        return <UserCheck className="w-4 h-4 text-purple-500" />;
      case "college":
        return <School className="w-4 h-4 text-orange-500" />;
      default:
        return <Users className="w-4 h-4 text-gray-500" />;
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="w-4 h-4 text-yellow-500" />;
      case "compliance":
        return <Shield className="w-4 h-4 text-blue-500" />;
      case "security":
        return <Lock className="w-4 h-4 text-red-500" />;
      default:
        return <Bell className="w-4 h-4 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">System Administration</h1>
            <p className="text-gray-600">Manage and monitor the entire recruiting platform</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Export Data
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </Button>
          </div>
        </div>

        {/* System Alerts */}
        {systemAlerts.filter(alert => !alert.resolved).length > 0 && (
          <div className="mb-6">
            <Card className="border-red-200 bg-red-50">
              <CardHeader className="pb-3">
                <CardTitle className="text-red-800 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  System Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {systemAlerts.filter(alert => !alert.resolved).map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      {getAlertIcon(alert.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-red-800">{alert.title}</span>
                          <Badge className={`text-xs ${
                            alert.severity === 'high' ? 'bg-red-100 text-red-800' :
                            alert.severity === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-blue-100 text-blue-800'
                          }`}>
                            {alert.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-red-700 mt-1">{alert.message}</p>
                        <p className="text-xs text-red-600 mt-1">
                          {new Date(alert.timestamp).toLocaleString()}
                        </p>
                      </div>
                      <Button variant="outline" size="sm">
                        Resolve
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 lg:grid-cols-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="content">Content</TabsTrigger>
            <TabsTrigger value="ai">AI Tools</TabsTrigger>
            <TabsTrigger value="compliance">Compliance</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="financial">Financial</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{systemStats.totalUsers.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total Users</div>
                    </div>
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+12% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{systemStats.activeUsers.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Active Users</div>
                    </div>
                    <Activity className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+8% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{systemStats.complianceScore}%</div>
                      <div className="text-sm text-gray-600">Compliance Score</div>
                    </div>
                    <Shield className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+2.1% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{systemStats.serverUptime}%</div>
                      <div className="text-sm text-gray-600">Server Uptime</div>
                    </div>
                    <Gauge className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">Target: 99.9%</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* User Distribution */}
            <Card>
              <CardHeader>
                <CardTitle>User Distribution</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Users className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{systemStats.totalAthletes.toLocaleString()}</div>
                    <div className="text-sm text-blue-800">Athletes</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Trophy className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{systemStats.totalCoaches.toLocaleString()}</div>
                    <div className="text-sm text-green-800">Coaches</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <UserCheck className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{systemStats.totalParents.toLocaleString()}</div>
                    <div className="text-sm text-purple-800">Parents</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <School className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">{systemStats.totalColleges.toLocaleString()}</div>
                    <div className="text-sm text-orange-800">Colleges</div>
                  </div>
                  <div className="text-center p-4 bg-pink-50 rounded-lg">
                    <Building className="w-8 h-8 text-pink-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-pink-600">{systemStats.totalClubs.toLocaleString()}</div>
                    <div className="text-sm text-pink-800">Clubs</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Platform Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-indigo-50 rounded-lg">
                    <Video className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-indigo-600">{systemStats.totalVideos.toLocaleString()}</div>
                    <div className="text-sm text-indigo-800">Videos Uploaded</div>
                  </div>
                  <div className="text-center p-4 bg-emerald-50 rounded-lg">
                    <Target className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-emerald-600">{systemStats.matchingSuccessRate}%</div>
                    <div className="text-sm text-emerald-800">Matching Success</div>
                  </div>
                  <div className="text-center p-4 bg-amber-50 rounded-lg">
                    <Award className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-amber-600">{systemStats.profileCompletionRate}%</div>
                    <div className="text-sm text-amber-800">Profile Completion</div>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-lg">
                    <Cpu className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-teal-600">{systemStats.aiProcessingJobs}</div>
                    <div className="text-sm text-teal-800">AI Jobs Processing</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <UserPlus className="w-5 h-5 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">New athlete registration: Michael Johnson</p>
                      <p className="text-xs text-gray-500">5 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <Shield className="w-5 h-5 text-green-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">Compliance review completed - 15 messages approved</p>
                      <p className="text-xs text-gray-500">12 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                    <MessageSquare className="w-5 h-5 text-purple-500" />
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">Peak messaging activity: 1,247 messages in last hour</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="users" className="space-y-6">
            {/* User Management Controls */}
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <Input
                        placeholder="Search users..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pl-9"
                      />
                    </div>
                  </div>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                    </SelectContent>
                  </Select>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add User
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {recentUsers.map((user) => (
                    <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center gap-3">
                        {getUserTypeIcon(user.type)}
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-gray-900">{user.name}</span>
                            <Badge className={getStatusBadge(user.status)}>
                              {user.status}
                            </Badge>
                          </div>
                          <p className="text-sm text-gray-600">{user.email}</p>
                          <div className="flex items-center gap-4 mt-1">
                            <span className="text-xs text-gray-500">
                              Joined: {new Date(user.joinDate).toLocaleDateString()}
                            </span>
                            <span className="text-xs text-gray-500">
                              Profile: {user.profileCompletion}%
                            </span>
                            <span className="text-xs text-gray-500">
                              Compliance: {user.complianceScore}%
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Ban className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance" className="space-y-6">
            {/* Compliance Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{complianceData.totalReviews}</div>
                      <div className="text-sm text-gray-600">Total Reviews</div>
                    </div>
                    <FileText className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-green-600">{complianceData.approved}</div>
                      <div className="text-sm text-gray-600">Approved</div>
                    </div>
                    <CheckCircle2 className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">{complianceData.pending}</div>
                      <div className="text-sm text-gray-600">Pending Review</div>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-red-600">{complianceData.violations}</div>
                      <div className="text-sm text-gray-600">Violations</div>
                    </div>
                    <XCircle className="w-8 h-8 text-red-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Compliance Score */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance Score</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-600">{systemStats.complianceScore}%</div>
                  <div className="text-sm text-gray-600">Overall Platform Compliance</div>
                </div>
                <Progress value={systemStats.complianceScore} className="h-2 mb-4" />
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-lg font-semibold text-green-600">{((complianceData.approved / complianceData.totalReviews) * 100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-600">Approval Rate</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-yellow-600">{((complianceData.pending / complianceData.totalReviews) * 100).toFixed(1)}%</div>
                    <div className="text-xs text-gray-600">Pending Rate</div>
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-red-600">{complianceData.riskScore}%</div>
                    <div className="text-xs text-gray-600">Risk Score</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="content" className="space-y-6">
            {/* Content Management */}
            <Card>
              <CardHeader>
                <CardTitle>Content Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Video className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{systemStats.totalVideos.toLocaleString()}</div>
                    <div className="text-sm text-blue-800">Total Videos</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Eye className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">2.1M</div>
                    <div className="text-sm text-green-800">Video Views</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <FileText className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">12.3K</div>
                    <div className="text-sm text-purple-800">Profiles Created</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Flag className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">156</div>
                    <div className="text-sm text-orange-800">Flagged Content</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Video Moderation Queue</p>
                        <p className="text-sm text-gray-600">23 videos pending review</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Review Queue
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Flag className="w-5 h-5 text-red-500" />
                      <div>
                        <p className="font-medium">Reported Content</p>
                        <p className="text-sm text-gray-600">15 profiles flagged by users</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Handle Reports
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Upload className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium">Bulk Content Upload</p>
                        <p className="text-sm text-gray-600">Manage team/club roster imports</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      Manage Uploads
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="ai" className="space-y-6">
            {/* AI Tools Management */}
            <Card>
              <CardHeader>
                <CardTitle>AI Tools Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <Cpu className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-600">{systemStats.aiProcessingJobs}</div>
                    <div className="text-sm text-blue-800">AI Jobs Active</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <Video className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-green-600">{systemStats.videoAnalysisQueue}</div>
                    <div className="text-sm text-green-800">Video Analysis Queue</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <Target className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-purple-600">{systemStats.matchingSuccessRate}%</div>
                    <div className="text-sm text-purple-800">Matching Accuracy</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Star className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-600">4.8</div>
                    <div className="text-sm text-orange-800">AI Score Rating</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Profile Scoring Engine</p>
                        <p className="text-sm text-gray-600">AI-powered athlete profile analysis and scoring</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Video className="w-5 h-5 text-purple-500" />
                      <div>
                        <p className="font-medium">Video Analysis</p>
                        <p className="text-sm text-gray-600">Automatic highlight detection and video scoring</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800">Processing</Badge>
                      <Button variant="outline" size="sm">
                        View Queue
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium">Athlete-Coach Matching</p>
                        <p className="text-sm text-gray-600">AI-powered recruiting match suggestions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Active</Badge>
                      <Button variant="outline" size="sm">
                        View Results
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Communication Assistant</p>
                        <p className="text-sm text-gray-600">AI-generated email templates and responses</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Beta</Badge>
                      <Button variant="outline" size="sm">
                        Enable
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            {/* Analytics Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{systemStats.totalMessages.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Total Messages</div>
                    </div>
                    <MessageSquare className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+23% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{systemStats.totalCalls.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Video Calls</div>
                    </div>
                    <Video className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+15% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{performanceMetrics.activeConnections}</div>
                      <div className="text-sm text-gray-600">Active Connections</div>
                    </div>
                    <Wifi className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-blue-600">Real-time</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{performanceMetrics.pageLoadTime}s</div>
                      <div className="text-sm text-gray-600">Avg Load Time</div>
                    </div>
                    <Zap className="w-8 h-8 text-orange-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">Target: &lt;2s</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="system" className="space-y-6">
            {/* System Health */}
            <Card>
              <CardHeader>
                <CardTitle>System Health</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Server Status</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">CPU Usage</span>
                        <span className="text-sm font-medium">78%</span>
                      </div>
                      <Progress value={78} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Memory Usage</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Storage Used</span>
                        <span className="text-sm font-medium">{systemStats.storageUsed}%</span>
                      </div>
                      <Progress value={systemStats.storageUsed} className="h-2" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">Network Status</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Bandwidth Usage</span>
                        <span className="text-sm font-medium">{systemStats.bandwidth} GB/hr</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">API Response Time</span>
                        <span className="text-sm font-medium">{performanceMetrics.apiResponseTime}ms</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Error Rate</span>
                        <span className="text-sm font-medium">{performanceMetrics.errorRate}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="financial" className="space-y-6">
            {/* Financial Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${financialData.monthlyRevenue.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Monthly Revenue</div>
                    </div>
                    <DollarSign className="w-8 h-8 text-green-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+18% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{financialData.subscriptions.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">Active Subscriptions</div>
                    </div>
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+12% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">${financialData.avgRevenuePerUser}</div>
                      <div className="text-sm text-gray-600">ARPU</div>
                    </div>
                    <Target className="w-8 h-8 text-purple-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-green-600">+5% from last month</div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{financialData.churnRate}%</div>
                      <div className="text-sm text-gray-600">Churn Rate</div>
                    </div>
                    <TrendingDown className="w-8 h-8 text-red-500" />
                  </div>
                  <div className="mt-2">
                    <div className="text-xs text-red-600">-2% from last month</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Subscription Management */}
            <Card>
              <CardHeader>
                <CardTitle>Subscription Management</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Free Tier Users</p>
                        <p className="text-sm text-gray-600">4,289 users on free plans</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-blue-100 text-blue-800">Basic</Badge>
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <div>
                        <p className="font-medium">Premium Athletes</p>
                        <p className="text-sm text-gray-600">2,847 premium athlete subscriptions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-yellow-100 text-yellow-800">Premium</Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Trophy className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium">Coach Pro Plans</p>
                        <p className="text-sm text-gray-600">1,298 coach professional subscriptions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-green-100 text-green-800">Pro</Badge>
                      <Button variant="outline" size="sm">
                        Analytics
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Building className="w-5 h-5 text-purple-500" />
                      <div>
                        <p className="font-medium">Club/Organization Plans</p>
                        <p className="text-sm text-gray-600">89 club/team enterprise subscriptions</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge className="bg-purple-100 text-purple-800">Enterprise</Badge>
                      <Button variant="outline" size="sm">
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings" className="space-y-6">
            {/* Platform Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Platform Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Feature Flags</h4>
                      <p className="text-sm text-gray-600">Enable/disable platform features and experiments</p>
                    </div>
                    <Button variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Manage Flags
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">AI Model Configuration</h4>
                      <p className="text-sm text-gray-600">Configure AI scoring models and thresholds</p>
                    </div>
                    <Button variant="outline">
                      <Cpu className="w-4 h-4 mr-2" />
                      Configure AI
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Video Processing</h4>
                      <p className="text-sm text-gray-600">Configure video upload limits and processing settings</p>
                    </div>
                    <Button variant="outline">
                      <Video className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Email Templates</h4>
                      <p className="text-sm text-gray-600">Manage system email templates and branding</p>
                    </div>
                    <Button variant="outline">
                      <Mail className="w-4 h-4 mr-2" />
                      Edit Templates
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">API Keys & Integrations</h4>
                      <p className="text-sm text-gray-600">Manage third-party API keys and integrations</p>
                    </div>
                    <Button variant="outline">
                      <Key className="w-4 h-4 mr-2" />
                      Manage Keys
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Data Export & Backup</h4>
                      <p className="text-sm text-gray-600">Configure automated backups and data retention</p>
                    </div>
                    <Button variant="outline">
                      <Database className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Compliance Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Compliance & Security</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">NCAA Compliance Rules</h4>
                      <p className="text-sm text-gray-600">Update and manage NCAA recruiting compliance rules</p>
                    </div>
                    <Button variant="outline">
                      <Shield className="w-4 h-4 mr-2" />
                      Update Rules
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">COPPA Compliance</h4>
                      <p className="text-sm text-gray-600">Manage under-18 user protection and compliance</p>
                    </div>
                    <Button variant="outline">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Data Privacy (GDPR)</h4>
                      <p className="text-sm text-gray-600">Configure data privacy and user rights settings</p>
                    </div>
                    <Button variant="outline">
                      <Lock className="w-4 h-4 mr-2" />
                      Privacy Settings
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-medium text-gray-900">Content Moderation</h4>
                      <p className="text-sm text-gray-600">Configure automated content filtering and moderation</p>
                    </div>
                    <Button variant="outline">
                      <Flag className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
}