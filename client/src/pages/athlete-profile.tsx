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
  Globe,
  FileText,
  CalendarDays,
  Ruler,
  Weight,
  Clock,
  PlayCircle,
  Camera,
  Contact,
  Bookmark,
  Edit,
  Print,
  Instagram,
  Twitter,
  Youtube
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function AthleteProfile() {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  // Comprehensive athlete data based on specification
  const athlete = {
    // Basic Info
    firstName: "Emma",
    lastName: "Johnson",
    primaryPosition: "Outside Hitter",
    secondaryPosition: "Middle Blocker",
    sport: "Volleyball",
    graduationYear: 2025,
    location: "Chicago, IL",
    profileImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
    
    // School Info
    highSchool: "Lincoln Park High School",
    clubTeam: "Chicago Elite Volleyball Club",
    
    // Contact Info
    parentEmail: "parents@email.com",
    parentPhone: "(555) 123-4567",
    coachName: "Coach Sarah Williams",
    coachEmail: "coach@lphs.edu",
    coachPhone: "(555) 987-6543",
    
    // Athletic Stats
    height: "5'11\"",
    weight: "155 lbs",
    wingspan: "6'2\"",
    verticalJump: "9'8\"",
    fortyYardDash: "N/A",
    
    // Academic Info
    gpa: 3.8,
    satScore: 1360,
    actScore: 31,
    advancedClasses: ["AP Biology", "AP English", "Honors Chemistry"],
    academicHonors: ["Honor Roll", "National Merit Semifinalist"],
    
    // Bio
    bio: "Passionate volleyball player with 8+ years of experience. Known for powerful attacks and strong defensive play. Team captain for 2 years, leading team to state championship. Committed to excellence both on the court and in the classroom.",
    whyCollege: "I want to compete at the highest level while pursuing my degree in Sports Medicine. College volleyball will help me develop leadership skills and prepare for a career in athletic training.",
    
    // Videos
    featuredVideo: {
      title: "2024 Season Highlights",
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      thumbnail: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=400&h=225&fit=crop",
      duration: "3:45"
    },
    highlights: [
      {
        title: "Skills Showcase",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=169&fit=crop",
        duration: "2:15"
      },
      {
        title: "Championship Game",
        url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        thumbnail: "https://images.unsplash.com/photo-1609688669309-fc15db557633?w=300&h=169&fit=crop",
        duration: "4:30"
      }
    ],
    
    // Photos
    actionPhotos: [
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1609688669309-fc15db557633?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1547347298-4074fc3086f0?w=300&h=200&fit=crop"
    ],
    
    // Season Stats
    seasonStats: [
      {
        year: "2024",
        team: "Lincoln Park HS",
        kills: 342,
        blocks: 89,
        aces: 56,
        assists: 123
      },
      {
        year: "2023",
        team: "Lincoln Park HS",
        kills: 298,
        blocks: 67,
        aces: 43,
        assists: 98
      }
    ],
    
    // Achievements
    athleticAwards: [
      "State Championship MVP (2024)",
      "All-Conference First Team (2023, 2024)",
      "Regional Player of the Year (2024)",
      "Team Captain (2023, 2024)"
    ],
    academicAwards: [
      "Academic All-State (2024)",
      "Honor Roll (2022-2024)",
      "National Merit Semifinalist (2024)"
    ],
    
    // Schedule
    upcomingGames: [
      {
        date: "2024-03-15",
        opponent: "Central High School",
        location: "Home",
        time: "6:00 PM"
      },
      {
        date: "2024-03-22",
        opponent: "Regional Championships",
        location: "Chicago Sports Complex",
        time: "2:00 PM"
      }
    ],
    
    // Recruiting Status
    recruitingStatus: {
      committed: false,
      offers: [
        { school: "University of Illinois", status: "Offer", date: "2024-02-15" },
        { school: "Northwestern University", status: "Interest", date: "2024-03-01" },
        { school: "Loyola University", status: "Contacted", date: "2024-02-28" }
      ]
    },
    
    // Social Media
    socialMedia: {
      instagram: "@emma.johnson.vb",
      twitter: "@emmavolleyball",
      hudl: "emma-johnson-volleyball",
      youtube: "Emma Johnson VB"
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            
            {/* Left Sidebar - Profile Info */}
            <div className="lg:col-span-1">
              {/* Profile Picture & Basic Info */}
              <Card className="bg-white shadow-sm border-0">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img
                        src={athlete.profileImage}
                        alt={`${athlete.firstName} ${athlete.lastName}`}
                        className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-md"
                      />
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white rounded-full p-1">
                        <CheckCircle className="w-4 h-4" />
                      </div>
                    </div>
                    
                    <h1 className="text-2xl font-bold text-gray-900 mb-2">
                      {athlete.firstName} {athlete.lastName}
                    </h1>
                    
                    <div className="space-y-2 text-center mb-6">
                      <p className="text-lg font-semibold text-blue-600">{athlete.primaryPosition}</p>
                      {athlete.secondaryPosition && (
                        <p className="text-sm text-gray-600">Also plays {athlete.secondaryPosition}</p>
                      )}
                      <p className="text-gray-600">{athlete.sport}</p>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <GraduationCap className="w-4 h-4" />
                        <span>Class of {athlete.graduationYear}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <MapPin className="w-4 h-4" />
                        <span>{athlete.location}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <School className="w-4 h-4" />
                        <span>{athlete.highSchool}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <Users className="w-4 h-4" />
                        <span>{athlete.clubTeam}</span>
                      </div>
                    </div>
                    
                    {/* Contact Action Buttons */}
                    <div className="w-full space-y-3">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Message Athlete
                      </Button>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" className="flex-1">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Download className="w-4 h-4 mr-2" />
                          Resume
                        </Button>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button 
                          variant="outline" 
                          className="flex-1"
                          onClick={() => setIsBookmarked(!isBookmarked)}
                        >
                          <Bookmark className={`w-4 h-4 mr-2 ${isBookmarked ? 'fill-current' : ''}`} />
                          {isBookmarked ? 'Saved' : 'Save'}
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Print className="w-4 h-4 mr-2" />
                          Print
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Quick Stats */}
              <Card className="bg-white shadow-sm border-0 mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Height</span>
                    <span className="font-semibold">{athlete.height}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weight</span>
                    <span className="font-semibold">{athlete.weight}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Wingspan</span>
                    <span className="font-semibold">{athlete.wingspan}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Vertical</span>
                    <span className="font-semibold">{athlete.verticalJump}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between">
                    <span className="text-gray-600">GPA</span>
                    <span className="font-semibold">{athlete.gpa}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">SAT</span>
                    <span className="font-semibold">{athlete.satScore}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">ACT</span>
                    <span className="font-semibold">{athlete.actScore}</span>
                  </div>
                </CardContent>
              </Card>
              
              {/* Contact Info (Private for Coaches) */}
              <Card className="bg-white shadow-sm border-0 mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                  <CardDescription>Available to verified coaches only</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm font-medium text-gray-700">Parent/Guardian</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{athlete.parentEmail}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{athlete.parentPhone}</span>
                    </div>
                  </div>
                  <Separator />
                  <div>
                    <p className="text-sm font-medium text-gray-700">High School Coach</p>
                    <p className="text-sm text-gray-600">{athlete.coachName}</p>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <span>{athlete.coachEmail}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>{athlete.coachPhone}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Social Media */}
              <Card className="bg-white shadow-sm border-0 mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Social Media</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Instagram className="w-4 h-4 text-pink-600" />
                    <span className="text-sm text-gray-600">{athlete.socialMedia.instagram}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Twitter className="w-4 h-4 text-blue-400" />
                    <span className="text-sm text-gray-600">{athlete.socialMedia.twitter}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Youtube className="w-4 h-4 text-red-600" />
                    <span className="text-sm text-gray-600">{athlete.socialMedia.youtube}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video className="w-4 h-4 text-orange-600" />
                    <span className="text-sm text-gray-600">{athlete.socialMedia.hudl}</span>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Featured Video */}
              <Card className="bg-white shadow-sm border-0 mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PlayCircle className="w-5 h-5 text-blue-600" />
                    Featured Video
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-gray-100 rounded-lg overflow-hidden">
                    <img
                      src={athlete.featuredVideo.thumbnail}
                      alt={athlete.featuredVideo.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <div className="text-center text-white">
                        <PlayCircle className="w-16 h-16 mx-auto mb-2 cursor-pointer hover:scale-110 transition-transform" />
                        <p className="font-semibold">{athlete.featuredVideo.title}</p>
                        <p className="text-sm opacity-90">{athlete.featuredVideo.duration}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Tabbed Content */}
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-5">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="stats">Stats</TabsTrigger>
                  <TabsTrigger value="media">Media</TabsTrigger>
                  <TabsTrigger value="academic">Academic</TabsTrigger>
                  <TabsTrigger value="recruiting">Recruiting</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="space-y-6">
                  {/* Player Bio */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 leading-relaxed mb-4">{athlete.bio}</p>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Why I Want to Play at the Next Level</h4>
                        <p className="text-blue-800">{athlete.whyCollege}</p>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Upcoming Schedule */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CalendarDays className="w-5 h-5" />
                        Upcoming Games & Events
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {athlete.upcomingGames.map((game, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <p className="font-medium">{game.opponent}</p>
                              <div className="flex items-center gap-4 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {new Date(game.date).toLocaleDateString()}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="w-4 h-4" />
                                  {game.time}
                                </span>
                                <span className="flex items-center gap-1">
                                  <MapPin className="w-4 h-4" />
                                  {game.location}
                                </span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-1" />
                              Watch
                            </Button>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="stats" className="space-y-6">
                  {/* Season Stats */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle>Season Statistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left p-2">Year</th>
                              <th className="text-left p-2">Team</th>
                              <th className="text-left p-2">Kills</th>
                              <th className="text-left p-2">Blocks</th>
                              <th className="text-left p-2">Aces</th>
                              <th className="text-left p-2">Assists</th>
                            </tr>
                          </thead>
                          <tbody>
                            {athlete.seasonStats.map((season, index) => (
                              <tr key={index} className="border-b">
                                <td className="p-2 font-medium">{season.year}</td>
                                <td className="p-2">{season.team}</td>
                                <td className="p-2">{season.kills}</td>
                                <td className="p-2">{season.blocks}</td>
                                <td className="p-2">{season.aces}</td>
                                <td className="p-2">{season.assists}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Athletic Awards */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Trophy className="w-5 h-5 text-yellow-600" />
                        Athletic Awards & Achievements
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {athlete.athleticAwards.map((award, index) => (
                          <div key={index} className="flex items-center gap-2 p-2 bg-yellow-50 rounded-lg">
                            <Award className="w-4 h-4 text-yellow-600" />
                            <span className="text-sm">{award}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="media" className="space-y-6">
                  {/* Highlight Videos */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Video className="w-5 h-5 text-red-600" />
                        Highlight Videos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-4">
                        {athlete.highlights.map((video, index) => (
                          <div key={index} className="relative bg-gray-100 rounded-lg overflow-hidden">
                            <img
                              src={video.thumbnail}
                              alt={video.title}
                              className="w-full h-32 object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                              <div className="text-center text-white">
                                <PlayCircle className="w-8 h-8 mx-auto mb-1 cursor-pointer hover:scale-110 transition-transform" />
                                <p className="text-sm font-medium">{video.title}</p>
                                <p className="text-xs opacity-90">{video.duration}</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                  
                  {/* Action Photos */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Camera className="w-5 h-5 text-blue-600" />
                        Action Photos
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {athlete.actionPhotos.map((photo, index) => (
                          <div key={index} className="relative rounded-lg overflow-hidden">
                            <img
                              src={photo}
                              alt={`Action photo ${index + 1}`}
                              className="w-full h-32 object-cover hover:scale-105 transition-transform cursor-pointer"
                            />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="academic" className="space-y-6">
                  {/* Academic Performance */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <BookOpen className="w-5 h-5 text-green-600" />
                        Academic Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-green-600">{athlete.gpa}</div>
                          <div className="text-sm text-green-700">GPA</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-blue-600">{athlete.satScore}</div>
                          <div className="text-sm text-blue-700">SAT Score</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg text-center">
                          <div className="text-2xl font-bold text-purple-600">{athlete.actScore}</div>
                          <div className="text-sm text-purple-700">ACT Score</div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Advanced Coursework</h4>
                          <div className="flex flex-wrap gap-2">
                            {athlete.advancedClasses.map((course, index) => (
                              <Badge key={index} variant="outline">{course}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold mb-2">Academic Honors</h4>
                          <div className="space-y-2">
                            {athlete.academicAwards.map((award, index) => (
                              <div key={index} className="flex items-center gap-2 p-2 bg-green-50 rounded-lg">
                                <Star className="w-4 h-4 text-green-600" />
                                <span className="text-sm">{award}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="recruiting" className="space-y-6">
                  {/* Recruiting Status */}
                  <Card className="bg-white shadow-sm border-0">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5 text-blue-600" />
                        Recruiting Status
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">Status:</span>
                          <Badge className={athlete.recruitingStatus.committed ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"}>
                            {athlete.recruitingStatus.committed ? "Committed" : "Actively Recruiting"}
                          </Badge>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold mb-3">College Interest & Offers</h4>
                        <div className="space-y-3">
                          {athlete.recruitingStatus.offers.map((offer, index) => (
                            <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                              <div>
                                <p className="font-medium">{offer.school}</p>
                                <p className="text-sm text-gray-600">
                                  {offer.status} • {new Date(offer.date).toLocaleDateString()}
                                </p>
                              </div>
                              <Badge 
                                className={
                                  offer.status === "Offer" ? "bg-green-100 text-green-800" :
                                  offer.status === "Interest" ? "bg-yellow-100 text-yellow-800" :
                                  "bg-blue-100 text-blue-800"
                                }
                              >
                                {offer.status}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Contact className="w-4 h-4 text-blue-600" />
                          <span className="font-medium text-blue-900">Ready to Connect</span>
                        </div>
                        <p className="text-sm text-blue-800">
                          Emma is actively seeking college opportunities and welcomes contact from coaches and recruiters.
                        </p>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                            Request Transcript
                          </Button>
                          <Button size="sm" variant="outline">
                            Schedule Call
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
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
          <div className="mt-6 flex flex-wrap gap-3">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2">
              <MessageCircle className="w-4 h-4 mr-2" />
              Message
            </Button>
            <Button variant="outline" className="border-gray-300 px-4 py-2">
              <ExternalLink className="w-4 h-4 mr-2" />
              View Profile
            </Button>
            <Button variant="outline" className="border-gray-300 px-4 py-2">
              <Download className="w-4 h-4 mr-2" />
              Download
            </Button>
            <Button variant="outline" className="border-gray-300 px-4 py-2">
              <Share2 className="w-4 h-4 mr-2" />
              Share
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