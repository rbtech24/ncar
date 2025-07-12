import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { 
  MessageCircle, 
  Phone, 
  Video,
  Send,
  Paperclip,
  Search,
  Filter,
  MoreVertical,
  Calendar,
  Clock,
  Shield,
  AlertTriangle,
  CheckCircle2,
  Star,
  Archive,
  Trash2,
  Reply,
  Forward,
  Plus,
  Users,
  User,
  School,
  Trophy,
  Settings,
  Bell,
  Info,
  Camera,
  Mic,
  PhoneCall,
  VideoIcon,
  CalendarDays,
  FileText,
  Eye,
  Download,
  Upload,
  Image,
  Smile,
  AtSign,
  Hash,
  Circle,
  CheckCircle,
  XCircle,
  AlertCircle,
  Clock3,
  Zap,
  Flag,
  BookOpen,
  Globe,
  Lock,
  Unlock,
  UserCheck,
  UserX,
  MessageSquare,
  Headphones,
  Monitor,
  Smartphone
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function Messages() {
  const [selectedConversation, setSelectedConversation] = useState(1);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [showScheduleModal, setShowScheduleModal] = useState(false);

  // Message data
  const conversations = [
    {
      id: 1,
      type: "coach",
      name: "Coach Johnson",
      title: "Basketball Coach - State University",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Great highlight video! I'd love to discuss your recruiting timeline.",
      timestamp: "2 hours ago",
      unread: 2,
      isOnline: true,
      compliance: "verified",
      sport: "Basketball",
      school: "State University"
    },
    {
      id: 2,
      type: "parent",
      name: "Sarah Johnson",
      title: "Parent of Michael Johnson",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Thank you for the scholarship offer information. We'll review it tonight.",
      timestamp: "4 hours ago",
      unread: 0,
      isOnline: false,
      compliance: "approved",
      sport: "Basketball",
      school: "Parent"
    },
    {
      id: 3,
      type: "athlete",
      name: "Emma Williams",
      title: "Soccer Player - Class of 2025",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Looking forward to our video call tomorrow at 3 PM!",
      timestamp: "1 day ago",
      unread: 1,
      isOnline: true,
      compliance: "pending",
      sport: "Soccer",
      school: "Metro High School"
    },
    {
      id: 4,
      type: "coach",
      name: "Coach Williams",
      title: "Soccer Coach - Northwestern College",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=50&h=50&fit=crop&crop=face",
      lastMessage: "Can we schedule a campus visit for next month?",
      timestamp: "2 days ago",
      unread: 0,
      isOnline: false,
      compliance: "verified",
      sport: "Soccer",
      school: "Northwestern College"
    },
    {
      id: 5,
      type: "compliance",
      name: "NCAA Compliance",
      title: "Compliance Monitoring System",
      avatar: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=50&h=50&fit=crop",
      lastMessage: "Communication review completed - All messages approved",
      timestamp: "3 days ago",
      unread: 0,
      isOnline: true,
      compliance: "system",
      sport: "All",
      school: "NCAA"
    }
  ];

  const messages = [
    {
      id: 1,
      senderId: 1,
      senderName: "Coach Johnson",
      content: "Hi Michael! I watched your highlight video from last week's game. Your court vision and passing ability really stood out. I'd love to discuss your recruiting timeline and what you're looking for in a college program.",
      timestamp: "2024-03-15T10:30:00Z",
      type: "text",
      compliance: "approved",
      attachments: []
    },
    {
      id: 2,
      senderId: "me",
      senderName: "You",
      content: "Thank you Coach Johnson! I'm really excited about the possibility of playing at State University. I'm currently considering my options and would love to learn more about your program.",
      timestamp: "2024-03-15T10:45:00Z",
      type: "text",
      compliance: "approved",
      attachments: []
    },
    {
      id: 3,
      senderId: 1,
      senderName: "Coach Johnson",
      content: "That's great to hear! I'd like to schedule a video call with you and your parents to discuss our program in detail. We have some exciting opportunities for point guards like yourself.",
      timestamp: "2024-03-15T11:00:00Z",
      type: "text",
      compliance: "approved",
      attachments: []
    },
    {
      id: 4,
      senderId: 1,
      senderName: "Coach Johnson",
      content: "I'm also attaching our recruiting packet with information about our facilities, academic support, and recent player success stories.",
      timestamp: "2024-03-15T11:05:00Z",
      type: "text",
      compliance: "approved",
      attachments: [
        {
          name: "State_University_Basketball_Recruiting_Packet.pdf",
          size: "2.4 MB",
          type: "pdf"
        }
      ]
    },
    {
      id: 5,
      senderId: "me",
      senderName: "You",
      content: "I'd love to schedule that video call! Would next Tuesday at 4 PM work for you? My parents will be available then too.",
      timestamp: "2024-03-15T14:20:00Z",
      type: "text",
      compliance: "pending",
      attachments: []
    }
  ];

  const scheduledCalls = [
    {
      id: 1,
      title: "Recruiting Discussion",
      participant: "Coach Johnson",
      date: "2024-03-19",
      time: "16:00",
      type: "video",
      status: "scheduled",
      attendees: ["Michael Johnson", "Sarah Johnson", "Coach Johnson"]
    },
    {
      id: 2,
      title: "Program Overview",
      participant: "Coach Williams",
      date: "2024-03-20",
      time: "15:00",
      type: "video",
      status: "scheduled",
      attendees: ["Emma Williams", "Coach Williams"]
    }
  ];

  const complianceAlerts = [
    {
      id: 1,
      type: "warning",
      message: "Reminder: Dead period starts March 25th - No in-person contact allowed",
      timestamp: "2024-03-15T09:00:00Z",
      severity: "medium"
    },
    {
      id: 2,
      type: "info",
      message: "All recent communications have been reviewed and approved",
      timestamp: "2024-03-14T16:00:00Z",
      severity: "low"
    }
  ];

  const getComplianceIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle2 className="w-4 h-4 text-green-500" />;
      case "pending":
        return <Clock3 className="w-4 h-4 text-yellow-500" />;
      case "flagged":
        return <AlertTriangle className="w-4 h-4 text-red-500" />;
      case "verified":
        return <Shield className="w-4 h-4 text-blue-500" />;
      default:
        return <Circle className="w-4 h-4 text-gray-400" />;
    }
  };

  const getUserTypeIcon = (type: string) => {
    switch (type) {
      case "coach":
        return <Trophy className="w-4 h-4 text-blue-500" />;
      case "athlete":
        return <User className="w-4 h-4 text-green-500" />;
      case "parent":
        return <Users className="w-4 h-4 text-purple-500" />;
      case "compliance":
        return <Shield className="w-4 h-4 text-orange-500" />;
      default:
        return <User className="w-4 h-4 text-gray-400" />;
    }
  };

  const filteredConversations = conversations.filter(conv => {
    const matchesSearch = conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         conv.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || conv.type === activeTab;
    return matchesSearch && matchesTab;
  });

  const selectedConv = conversations.find(c => c.id === selectedConversation);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-6">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600">Communication hub for recruiting conversations</p>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Calendar className="w-4 h-4 mr-2" />
              Schedule Call
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              New Message
            </Button>
          </div>
        </div>

        {/* Compliance Alerts */}
        {complianceAlerts.length > 0 && (
          <div className="mb-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-yellow-600" />
                <h3 className="font-medium text-yellow-800">Compliance Alerts</h3>
              </div>
              <div className="space-y-2">
                {complianceAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-yellow-800 break-words">{alert.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Conversations Sidebar */}
          <div className="lg:col-span-4">
            <Card className="bg-white shadow-sm h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold">Conversations</CardTitle>
                  <Button variant="ghost" size="sm">
                    <Settings className="w-4 h-4" />
                  </Button>
                </div>
                
                {/* Search */}
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                  <Input
                    placeholder="Search conversations..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-9"
                  />
                </div>
                
                {/* Filter Tabs */}
                <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
                  {[
                    { id: "all", label: "All", icon: MessageSquare },
                    { id: "coach", label: "Coaches", icon: Trophy },
                    { id: "athlete", label: "Athletes", icon: User },
                    { id: "parent", label: "Parents", icon: Users }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 flex items-center justify-center gap-1 px-2 py-1 rounded-md text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? 'bg-white text-blue-600 shadow-sm'
                          : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      <tab.icon className="w-3 h-3" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </div>
              </CardHeader>
              
              <CardContent className="p-0">
                <div className="max-h-96 overflow-y-auto">
                  {filteredConversations.map((conversation) => (
                    <div
                      key={conversation.id}
                      onClick={() => setSelectedConversation(conversation.id)}
                      className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 border-b border-gray-100 ${
                        selectedConversation === conversation.id ? 'bg-blue-50 border-blue-200' : ''
                      }`}
                    >
                      <div className="relative">
                        <img
                          src={conversation.avatar}
                          alt={conversation.name}
                          className="w-12 h-12 rounded-full flex-shrink-0"
                        />
                        {conversation.isOnline && (
                          <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                        )}
                      </div>
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-medium text-gray-900 truncate">{conversation.name}</h4>
                          {getUserTypeIcon(conversation.type)}
                          {getComplianceIcon(conversation.compliance)}
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.title}</p>
                        <p className="text-xs text-gray-500 truncate mt-1">{conversation.lastMessage}</p>
                      </div>
                      
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-xs text-gray-500">{conversation.timestamp}</span>
                        {conversation.unread > 0 && (
                          <Badge className="bg-blue-600 text-white text-xs px-2 py-1">
                            {conversation.unread}
                          </Badge>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Message Area */}
          <div className="lg:col-span-8">
            <Card className="bg-white shadow-sm h-full">
              {selectedConv ? (
                <>
                  {/* Message Header */}
                  <CardHeader className="pb-4 border-b">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <img
                            src={selectedConv.avatar}
                            alt={selectedConv.name}
                            className="w-12 h-12 rounded-full"
                          />
                          {selectedConv.isOnline && (
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                          )}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-gray-900">{selectedConv.name}</h3>
                            {getUserTypeIcon(selectedConv.type)}
                            {getComplianceIcon(selectedConv.compliance)}
                          </div>
                          <p className="text-sm text-gray-600">{selectedConv.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <Badge variant="outline" className="text-xs">
                              {selectedConv.sport}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {selectedConv.school}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="w-4 h-4 mr-2" />
                          Call
                        </Button>
                        <Button variant="outline" size="sm">
                          <Video className="w-4 h-4 mr-2" />
                          Video
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardHeader>
                  
                  {/* Messages */}
                  <CardContent className="p-4">
                    <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex gap-3 ${
                            message.senderId === "me" ? "justify-end" : "justify-start"
                          }`}
                        >
                          {message.senderId !== "me" && (
                            <img
                              src={selectedConv.avatar}
                              alt={message.senderName}
                              className="w-8 h-8 rounded-full flex-shrink-0"
                            />
                          )}
                          
                          <div className={`max-w-xs lg:max-w-md ${
                            message.senderId === "me" ? "order-first" : ""
                          }`}>
                            <div className={`p-3 rounded-lg ${
                              message.senderId === "me"
                                ? "bg-blue-600 text-white"
                                : "bg-gray-100 text-gray-900"
                            }`}>
                              <p className="text-sm break-words">{message.content}</p>
                              
                              {message.attachments.length > 0 && (
                                <div className="mt-2 space-y-1">
                                  {message.attachments.map((attachment, i) => (
                                    <div key={i} className="flex items-center gap-2 p-2 bg-white/10 rounded">
                                      <FileText className="w-4 h-4" />
                                      <span className="text-xs truncate">{attachment.name}</span>
                                      <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                                        <Download className="w-3 h-3" />
                                      </Button>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                            
                            <div className="flex items-center gap-2 mt-1">
                              <span className="text-xs text-gray-500">
                                {new Date(message.timestamp).toLocaleTimeString()}
                              </span>
                              {getComplianceIcon(message.compliance)}
                            </div>
                          </div>
                          
                          {message.senderId === "me" && (
                            <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                              <User className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                    
                    {/* Message Input */}
                    <div className="border-t pt-4">
                      <div className="flex items-end gap-2">
                        <div className="flex-1">
                          <Textarea
                            placeholder="Type your message..."
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            className="min-h-[60px] resize-none"
                          />
                        </div>
                        <div className="flex flex-col gap-1">
                          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                            <Paperclip className="w-4 h-4" />
                          </Button>
                          <Button 
                            size="sm" 
                            className="bg-blue-600 hover:bg-blue-700"
                            disabled={!newMessage.trim()}
                          >
                            <Send className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between mt-2">
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-gray-500">
                            All messages are monitored for compliance
                          </span>
                          <Shield className="w-3 h-3 text-gray-400" />
                        </div>
                        <div className="text-xs text-gray-500">
                          {newMessage.length}/1000
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Select a conversation</h3>
                    <p className="text-gray-500">Choose a conversation from the sidebar to start messaging</p>
                  </div>
                </div>
              )}
            </Card>
          </div>
        </div>

        {/* Scheduled Calls Section */}
        <div className="mt-8">
          <Card className="bg-white shadow-sm">
            <CardHeader>
              <CardTitle className="text-lg font-semibold flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Scheduled Calls
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledCalls.map((call) => (
                  <div key={call.id} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 bg-gray-50 rounded-lg gap-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        {call.type === "video" ? (
                          <Video className="w-6 h-6 text-blue-600" />
                        ) : (
                          <Phone className="w-6 h-6 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{call.title}</h4>
                        <p className="text-sm text-gray-600">with {call.participant}</p>
                        <p className="text-xs text-gray-500">
                          {new Date(call.date).toLocaleDateString()} at {call.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-xs">
                        {call.attendees.length} attendees
                      </Badge>
                      <Button variant="outline" size="sm">
                        <Calendar className="w-4 h-4 mr-2" />
                        Reschedule
                      </Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        <Video className="w-4 h-4 mr-2" />
                        Join Call
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}