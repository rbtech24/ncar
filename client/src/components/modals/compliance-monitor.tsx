import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Shield,
  AlertTriangle,
  CheckCircle2,
  Clock,
  XCircle,
  Info,
  Eye,
  FileText,
  Calendar,
  Users,
  MessageSquare,
  Phone,
  Video,
  Flag,
  Download,
  Search,
  Filter,
  BarChart3,
  TrendingUp,
  TrendingDown,
  Activity
} from "lucide-react";

interface ComplianceMonitorProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ComplianceMonitor({ isOpen, onClose }: ComplianceMonitorProps) {
  const [activeTab, setActiveTab] = useState("overview");

  const complianceData = {
    score: 95,
    totalMessages: 1247,
    flaggedMessages: 23,
    approvedMessages: 1201,
    pendingReview: 23,
    violationRisk: "Low"
  };

  const recentActivity = [
    {
      id: 1,
      type: "message",
      status: "approved",
      participant: "Coach Johnson",
      content: "Great highlight video! I'd love to discuss your recruiting timeline.",
      timestamp: "2024-03-15T10:30:00Z",
      reviewedBy: "NCAA System",
      riskLevel: "low"
    },
    {
      id: 2,
      type: "call",
      status: "scheduled",
      participant: "Coach Williams",
      content: "Recruiting discussion scheduled for March 19th at 4:00 PM",
      timestamp: "2024-03-15T09:15:00Z",
      reviewedBy: "Automated",
      riskLevel: "low"
    },
    {
      id: 3,
      type: "message",
      status: "flagged",
      participant: "Coach Smith",
      content: "We can offer you a full scholarship if you commit by next week.",
      timestamp: "2024-03-14T16:45:00Z",
      reviewedBy: "Human Reviewer",
      riskLevel: "high",
      flagReason: "Improper inducement language"
    },
    {
      id: 4,
      type: "message",
      status: "pending",
      participant: "Coach Davis",
      content: "Your academic profile looks great for our program.",
      timestamp: "2024-03-14T14:20:00Z",
      reviewedBy: "Pending Review",
      riskLevel: "medium"
    }
  ];

  const complianceRules = [
    {
      id: 1,
      category: "Dead Periods",
      description: "No in-person contact allowed during dead periods",
      status: "active",
      nextDate: "2024-03-25",
      severity: "high"
    },
    {
      id: 2,
      category: "Contact Frequency",
      description: "Maximum of 3 calls per week during evaluation period",
      status: "monitored",
      currentCount: 2,
      maxCount: 3,
      severity: "medium"
    },
    {
      id: 3,
      category: "Inducement Prevention",
      description: "No improper benefits or inducements allowed",
      status: "active",
      severity: "high"
    },
    {
      id: 4,
      category: "Academic Discussion",
      description: "Academic discussions must be factual and general",
      status: "active",
      severity: "medium"
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock className="w-4 h-4 text-yellow-500" />;
      case "flagged":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      default:
        return <Info className="w-4 h-4 text-gray-500" />;
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "message":
        return <MessageSquare className="w-4 h-4 text-blue-500" />;
      case "call":
        return <Phone className="w-4 h-4 text-green-500" />;
      case "video":
        return <Video className="w-4 h-4 text-purple-500" />;
      default:
        return <Activity className="w-4 h-4 text-gray-500" />;
    }
  };

  const getRiskBadge = (risk: string) => {
    const variants = {
      low: "bg-green-100 text-green-800",
      medium: "bg-yellow-100 text-yellow-800",
      high: "bg-red-100 text-red-800"
    };
    return variants[risk as keyof typeof variants] || variants.low;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Compliance Monitor
          </DialogTitle>
          <DialogDescription>
            Monitor and manage recruiting compliance across all communications
          </DialogDescription>
        </DialogHeader>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
            <TabsTrigger value="rules">Rules</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            {/* Compliance Score */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Compliance Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-green-600">{complianceData.score}%</div>
                    <div className="text-sm text-gray-600">Overall Compliance Score</div>
                  </div>
                  <Progress value={complianceData.score} className="h-2" />
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="text-center">
                      <div className="font-medium text-gray-900">{complianceData.approvedMessages}</div>
                      <div className="text-gray-600">Approved Messages</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium text-gray-900">{complianceData.flaggedMessages}</div>
                      <div className="text-gray-600">Flagged Messages</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{complianceData.totalMessages}</div>
                      <div className="text-sm text-gray-600">Total Messages</div>
                    </div>
                    <MessageSquare className="w-8 h-8 text-blue-500" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{complianceData.pendingReview}</div>
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
                      <div className="text-2xl font-bold text-green-600">{complianceData.violationRisk}</div>
                      <div className="text-sm text-gray-600">Violation Risk</div>
                    </div>
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Recent Alerts */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Recent Alerts
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.filter(item => item.status === 'flagged').map((alert) => (
                    <div key={alert.id} className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-red-800">{alert.participant}</span>
                          <Badge className={getRiskBadge(alert.riskLevel)}>
                            {alert.riskLevel} risk
                          </Badge>
                        </div>
                        <p className="text-sm text-red-700 mt-1">{alert.content}</p>
                        {alert.flagReason && (
                          <p className="text-xs text-red-600 mt-1">
                            <strong>Reason:</strong> {alert.flagReason}
                          </p>
                        )}
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4 mr-1" />
                        Review
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="activity" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Activity className="w-5 h-5" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      {getTypeIcon(activity.type)}
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{activity.participant}</span>
                          {getStatusIcon(activity.status)}
                          <Badge className={getRiskBadge(activity.riskLevel)}>
                            {activity.riskLevel}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{activity.content}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-xs text-gray-500">
                            {new Date(activity.timestamp).toLocaleString()}
                          </span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">
                            Reviewed by {activity.reviewedBy}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="rules" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Active Compliance Rules
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {complianceRules.map((rule) => (
                    <div key={rule.id} className="flex items-start gap-3 p-3 border rounded-lg">
                      <Shield className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-gray-900">{rule.category}</span>
                          <Badge variant={rule.severity === 'high' ? 'destructive' : 'secondary'}>
                            {rule.severity}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">{rule.description}</p>
                        {rule.nextDate && (
                          <p className="text-xs text-gray-500 mt-1">
                            <Calendar className="w-3 h-3 inline mr-1" />
                            Next: {new Date(rule.nextDate).toLocaleDateString()}
                          </p>
                        )}
                        {rule.currentCount !== undefined && (
                          <p className="text-xs text-gray-500 mt-1">
                            Current: {rule.currentCount}/{rule.maxCount}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  Compliance Reports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Monthly Compliance Report</h4>
                      <p className="text-sm text-gray-600">March 2024 - Comprehensive overview</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Communication Audit</h4>
                      <p className="text-sm text-gray-600">All messages and calls reviewed</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <h4 className="font-medium text-gray-900">Violation Risk Assessment</h4>
                      <p className="text-sm text-gray-600">Current risk level analysis</p>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="flex justify-end">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}