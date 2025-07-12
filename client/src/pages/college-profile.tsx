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
  MoreHorizontal,
  Building,
  Percent,
  MapIcon,
  Globe,
  Calculator,
  BookmarkPlus,
  MessageSquare,
  Phone as PhoneIcon,
  Mail as MailIcon,
  Calendar as CalendarCheck,
  Users as UsersIcon,
  GraduationCap as GradCapIcon,
  Building2,
  Briefcase,
  Library,
  Utensils,
  Wifi,
  Car,
  Trees,
  Dumbbell,
  Palette,
  Music,
  Microscope,
  Laptop
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

export default function CollegeProfile() {
  const [activeTab, setActiveTab] = useState('overview');
  const [isWatching, setIsWatching] = useState(false);

  // College data
  const collegeData = {
    name: "State University",
    shortName: "SU",
    type: "Public Research University",
    location: "Chicago, Illinois",
    coordinates: "41.8781° N, 87.6298° W",
    established: 1867,
    enrollment: 45000,
    undergraduateEnrollment: 32000,
    graduateEnrollment: 13000,
    acceptance: 68,
    tuition: {
      inState: 28000,
      outOfState: 42000,
      international: 45000
    },
    ranking: {
      national: 45,
      world: 150,
      regional: 12
    },
    campusSize: "2,400 acres",
    studentFacultyRatio: "18:1",
    graduationRate: 84,
    employmentRate: 92,
    averageSalary: 65000,
    logoUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=150&h=150&fit=crop",
    bannerUrl: "https://images.unsplash.com/photo-1562774053-701939374585?w=1200&h=400&fit=crop",
    colors: {
      primary: "#1e40af",
      secondary: "#fbbf24"
    },
    mascot: "Eagles",
    founded: "1867",
    website: "https://stateuniversity.edu",
    
    // Sports programs
    sportsPrograms: [
      {
        sport: "Basketball",
        division: "Division I",
        conference: "Big Ten",
        coaches: [
          {
            name: "Coach Johnson",
            position: "Head Coach",
            experience: "15 years",
            achievements: "3x Conference Champion",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
          },
          {
            name: "Coach Smith",
            position: "Assistant Coach",
            experience: "8 years",
            achievements: "Former Pro Player",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
          }
        ],
        facilities: ["Championship Arena (18,000 capacity)", "Practice Facility", "Strength & Conditioning Center"],
        recentSuccess: ["Sweet 16 (2023)", "Conference Champions (2022)", "NCAA Tournament (2021, 2022, 2023)"],
        scholarships: {
          total: 13,
          available: 3,
          fullRide: 2,
          partial: 11
        }
      },
      {
        sport: "Soccer",
        division: "Division I",
        conference: "Big Ten",
        coaches: [
          {
            name: "Coach Williams",
            position: "Head Coach",
            experience: "12 years",
            achievements: "National Champion 2020",
            image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=100&h=100&fit=crop&crop=face"
          }
        ],
        facilities: ["Soccer Complex", "Training Fields", "Indoor Practice Facility"],
        recentSuccess: ["NCAA Final Four (2022)", "Conference Champions (2021, 2023)"],
        scholarships: {
          total: 14,
          available: 4,
          fullRide: 1,
          partial: 13
        }
      }
    ],

    // Academic programs
    academicPrograms: [
      {
        college: "College of Engineering",
        programs: ["Computer Science", "Mechanical Engineering", "Electrical Engineering", "Civil Engineering"],
        ranking: 25,
        graduationRate: 89,
        employmentRate: 95,
        averageSalary: 75000
      },
      {
        college: "College of Business",
        programs: ["Marketing", "Finance", "Management", "Accounting"],
        ranking: 35,
        graduationRate: 86,
        employmentRate: 93,
        averageSalary: 68000
      },
      {
        college: "College of Liberal Arts",
        programs: ["Psychology", "English", "History", "Communications"],
        ranking: 42,
        graduationRate: 82,
        employmentRate: 88,
        averageSalary: 55000
      }
    ],

    // Campus life
    campusLife: {
      housing: {
        onCampus: 12000,
        offCampus: 20000,
        guaranteedYears: 2,
        dormTypes: ["Traditional", "Suite Style", "Apartments", "Greek Housing"]
      },
      dining: {
        mealPlans: 8,
        diningHalls: 12,
        restaurants: 25,
        specialDiets: ["Vegetarian", "Vegan", "Gluten-Free", "Halal", "Kosher"]
      },
      activities: {
        clubs: 450,
        greekLife: 15,
        intramurals: 35,
        recreation: ["Fitness Center", "Pool", "Rock Climbing", "Basketball Courts"]
      },
      support: {
        academic: ["Tutoring Center", "Writing Center", "Academic Advising"],
        career: ["Career Services", "Internship Program", "Job Placement"],
        health: ["Health Center", "Counseling Services", "Wellness Programs"]
      }
    },

    // Financial information
    financialAid: {
      percentage: 85,
      averageAid: 15000,
      scholarships: [
        {
          name: "Presidential Scholarship",
          amount: 20000,
          criteria: "Top 5% of class, 1450+ SAT",
          renewable: true
        },
        {
          name: "Dean's Scholarship",
          amount: 12000,
          criteria: "Top 15% of class, 1350+ SAT",
          renewable: true
        },
        {
          name: "Merit Scholarship",
          amount: 8000,
          criteria: "Top 25% of class, 1250+ SAT",
          renewable: true
        }
      ],
      workStudy: 2500,
      needBased: 65
    },

    // Recent news and updates
    recentNews: [
      {
        title: "State University Breaks Ground on New Athletic Complex",
        date: "March 10, 2024",
        summary: "The new $75 million facility will feature state-of-the-art training equipment and sports medicine center.",
        category: "Athletics"
      },
      {
        title: "Record-Breaking Freshman Class Enrollment",
        date: "March 5, 2024",
        summary: "This year's freshman class is the most academically qualified in university history.",
        category: "Admissions"
      },
      {
        title: "New Engineering Program Receives National Accreditation",
        date: "February 28, 2024",
        summary: "The Computer Science program now ranks among the top 20 nationally.",
        category: "Academics"
      }
    ],

    // Student testimonials
    testimonials: [
      {
        name: "Sarah Johnson",
        year: "Junior",
        sport: "Basketball",
        major: "Business Marketing",
        quote: "The coaching staff here is incredible. They've helped me grow not just as a player, but as a person. The academic support is top-notch too.",
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b494?w=100&h=100&fit=crop&crop=face"
      },
      {
        name: "Michael Chen",
        year: "Senior",
        sport: "Soccer",
        major: "Computer Science",
        quote: "I've had amazing opportunities here - from research projects to internships. The balance between athletics and academics is perfect.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header Section with Banner */}
        <div className="relative bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div 
            className="h-48 sm:h-64 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${collegeData.bannerUrl})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute bottom-4 left-4 right-4 text-white">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="flex items-center gap-4">
                  <img 
                    src={collegeData.logoUrl} 
                    alt={collegeData.name}
                    className="w-16 h-16 rounded-full border-4 border-white flex-shrink-0"
                  />
                  <div className="min-w-0">
                    <h1 className="text-2xl sm:text-3xl font-bold">{collegeData.name}</h1>
                    <p className="text-sm sm:text-base opacity-90 break-words">{collegeData.type}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <Badge className="bg-white/20 text-white border-white/30">
                        <MapPin className="w-3 h-3 mr-1" />
                        {collegeData.location}
                      </Badge>
                      <Badge className="bg-white/20 text-white border-white/30">
                        Est. {collegeData.established}
                      </Badge>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                    onClick={() => setIsWatching(!isWatching)}
                  >
                    {isWatching ? (
                      <>
                        <Bookmark className="w-4 h-4 mr-2 fill-current" />
                        Watching
                      </>
                    ) : (
                      <>
                        <BookmarkPlus className="w-4 h-4 mr-2" />
                        Watch
                      </>
                    )}
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Contact
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="p-4 sm:p-6 bg-white">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">#{collegeData.ranking.national}</div>
                <div className="text-xs sm:text-sm text-gray-600">National Ranking</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{collegeData.acceptance}%</div>
                <div className="text-xs sm:text-sm text-gray-600 break-words">Acceptance Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{collegeData.enrollment.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-600">Total Enrollment</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">${collegeData.tuition.inState.toLocaleString()}</div>
                <div className="text-xs sm:text-sm text-gray-600 break-words">In-State Tuition</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{collegeData.graduationRate}%</div>
                <div className="text-xs sm:text-sm text-gray-600 break-words">Graduation Rate</div>
              </div>
              <div className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900">{collegeData.studentFacultyRatio}</div>
                <div className="text-xs sm:text-sm text-gray-600 break-words">Student:Faculty</div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="px-4 sm:px-6 bg-gray-50">
            <nav className="flex space-x-1 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: Home },
                { id: 'athletics', label: 'Athletics', icon: Trophy },
                { id: 'academics', label: 'Academics', icon: GraduationCap },
                { id: 'campus', label: 'Campus Life', icon: Building2 },
                { id: 'financial', label: 'Financial Aid', icon: DollarSign },
                { id: 'admissions', label: 'Admissions', icon: FileText }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-t-md text-sm font-medium whitespace-nowrap transition-colors ${
                    activeTab === tab.id
                      ? 'bg-white text-blue-700 border-b-2 border-blue-600'
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
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* About Section */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">About {collegeData.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <p className="text-gray-700 break-words">
                        {collegeData.name} is a premier public research university located in {collegeData.location}. 
                        Established in {collegeData.established}, we have a rich tradition of academic excellence and 
                        athletic achievement. Our campus spans {collegeData.campusSize} and serves over {collegeData.enrollment.toLocaleString()} students 
                        from around the world.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 break-words">{collegeData.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">Founded {collegeData.established}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{collegeData.enrollment.toLocaleString()} students</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="w-4 h-4 text-gray-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700 break-words">{collegeData.website}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent News */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Recent News</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {collegeData.recentNews.map((news, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <div className="flex-1 min-w-0">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                              <h4 className="font-medium text-gray-900 break-words">{news.title}</h4>
                              <Badge variant="outline" className="text-xs w-fit">
                                {news.category}
                              </Badge>
                            </div>
                            <p className="text-sm text-gray-600 mt-1 break-words">{news.summary}</p>
                            <p className="text-xs text-gray-500 mt-1">{news.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Student Testimonials */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Student Testimonials</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {collegeData.testimonials.map((testimonial, index) => (
                        <div key={index} className="p-4 bg-gray-50 rounded-lg">
                          <div className="flex items-start gap-4">
                            <img 
                              src={testimonial.image} 
                              alt={testimonial.name}
                              className="w-12 h-12 rounded-full flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                              <blockquote className="text-gray-700 italic mb-2 break-words">
                                "{testimonial.quote}"
                              </blockquote>
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="font-medium text-gray-900">{testimonial.name}</span>
                                <span className="text-sm text-gray-500">•</span>
                                <span className="text-sm text-gray-500">{testimonial.year}</span>
                                <span className="text-sm text-gray-500">•</span>
                                <span className="text-sm text-gray-500">{testimonial.sport}</span>
                                <span className="text-sm text-gray-500">•</span>
                                <span className="text-sm text-gray-500 break-words">{testimonial.major}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'athletics' && (
              <div className="space-y-6">
                {collegeData.sportsPrograms.map((program, index) => (
                  <Card key={index} className="bg-white shadow-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold">{program.sport}</CardTitle>
                          <div className="flex flex-wrap items-center gap-2 mt-2">
                            <Badge variant="outline" className="text-xs">
                              {program.division}
                            </Badge>
                            <Badge variant="outline" className="text-xs">
                              {program.conference}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4 mr-2" />
                          Contact Coach
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        {/* Coaching Staff */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Coaching Staff</h4>
                          <div className="space-y-3">
                            {program.coaches.map((coach, coachIndex) => (
                              <div key={coachIndex} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                <img 
                                  src={coach.image} 
                                  alt={coach.name}
                                  className="w-12 h-12 rounded-full flex-shrink-0"
                                />
                                <div className="min-w-0 flex-1">
                                  <h5 className="font-medium text-gray-900">{coach.name}</h5>
                                  <p className="text-sm text-gray-600">{coach.position}</p>
                                  <p className="text-xs text-gray-500">{coach.experience} • {coach.achievements}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Program Details */}
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Program Highlights</h4>
                          <div className="space-y-3">
                            <div>
                              <span className="text-sm font-medium text-gray-700">Facilities:</span>
                              <ul className="text-sm text-gray-600 mt-1">
                                {program.facilities.map((facility, i) => (
                                  <li key={i} className="break-words">• {facility}</li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <span className="text-sm font-medium text-gray-700">Recent Success:</span>
                              <ul className="text-sm text-gray-600 mt-1">
                                {program.recentSuccess.map((success, i) => (
                                  <li key={i} className="break-words">• {success}</li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Scholarships */}
                      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-2">Scholarship Information</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{program.scholarships.total}</div>
                            <div className="text-xs text-blue-800">Total Scholarships</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{program.scholarships.available}</div>
                            <div className="text-xs text-blue-800">Available</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{program.scholarships.fullRide}</div>
                            <div className="text-xs text-blue-800">Full Ride</div>
                          </div>
                          <div className="text-center">
                            <div className="text-lg font-bold text-blue-600">{program.scholarships.partial}</div>
                            <div className="text-xs text-blue-800">Partial</div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'academics' && (
              <div className="space-y-6">
                {collegeData.academicPrograms.map((program, index) => (
                  <Card key={index} className="bg-white shadow-sm">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                        <div>
                          <CardTitle className="text-xl font-bold">{program.college}</CardTitle>
                          <Badge variant="outline" className="text-xs w-fit mt-2">
                            Ranked #{program.ranking} Nationally
                          </Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Learn More
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Programs Offered</h4>
                          <div className="flex flex-wrap gap-2">
                            {program.programs.map((prog, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {prog}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-medium text-gray-900 mb-3">Program Statistics</h4>
                          <div className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Graduation Rate:</span>
                              <span className="text-sm font-medium">{program.graduationRate}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600">Employment Rate:</span>
                              <span className="text-sm font-medium">{program.employmentRate}%</span>
                            </div>
                            <div className="flex justify-between">
                              <span className="text-sm text-gray-600 break-words">Average Starting Salary:</span>
                              <span className="text-sm font-medium">${program.averageSalary.toLocaleString()}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            {activeTab === 'campus' && (
              <div className="space-y-6">
                {/* Housing */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Building2 className="w-5 h-5" />
                      Housing & Dining
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Housing Options</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">On-Campus Students:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.housing.onCampus.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Off-Campus Students:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.housing.offCampus.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600 break-words">Guaranteed Housing:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.housing.guaranteedYears} years</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span className="text-sm font-medium text-gray-700">Housing Types:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {collegeData.campusLife.housing.dormTypes.map((type, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {type}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Dining Options</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Meal Plans:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.dining.mealPlans}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Dining Halls:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.dining.diningHalls}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Restaurants:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.dining.restaurants}</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span className="text-sm font-medium text-gray-700">Special Diets:</span>
                          <div className="flex flex-wrap gap-2 mt-1">
                            {collegeData.campusLife.dining.specialDiets.map((diet, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {diet}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Activities */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Student Activities
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Organizations</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Student Clubs:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.activities.clubs}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Greek Life:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.activities.greekLife}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Intramural Sports:</span>
                            <span className="text-sm font-medium">{collegeData.campusLife.activities.intramurals}</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Recreation Facilities</h4>
                        <div className="space-y-2">
                          {collegeData.campusLife.activities.recreation.map((facility, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-700 break-words">{facility}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'financial' && (
              <div className="space-y-6">
                {/* Tuition Overview */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Tuition & Fees</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">${collegeData.tuition.inState.toLocaleString()}</div>
                        <div className="text-sm text-blue-800">In-State Tuition</div>
                      </div>
                      <div className="text-center p-4 bg-green-50 rounded-lg">
                        <div className="text-2xl font-bold text-green-600">${collegeData.tuition.outOfState.toLocaleString()}</div>
                        <div className="text-sm text-green-800 break-words">Out-of-State Tuition</div>
                      </div>
                      <div className="text-center p-4 bg-purple-50 rounded-lg">
                        <div className="text-2xl font-bold text-purple-600">${collegeData.tuition.international.toLocaleString()}</div>
                        <div className="text-sm text-purple-800 break-words">International Tuition</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Financial Aid */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Financial Aid</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-yellow-50 rounded-lg">
                          <div className="text-2xl font-bold text-yellow-600">{collegeData.financialAid.percentage}%</div>
                          <div className="text-sm text-yellow-800 break-words">Students Receive Aid</div>
                        </div>
                        <div className="text-center p-4 bg-green-50 rounded-lg">
                          <div className="text-2xl font-bold text-green-600">${collegeData.financialAid.averageAid.toLocaleString()}</div>
                          <div className="text-sm text-green-800">Average Aid Package</div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Merit Scholarships</h4>
                        <div className="space-y-3">
                          {collegeData.financialAid.scholarships.map((scholarship, i) => (
                            <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-gray-50 rounded-lg gap-2">
                              <div className="min-w-0 flex-1">
                                <h5 className="font-medium text-gray-900">{scholarship.name}</h5>
                                <p className="text-sm text-gray-600 break-words">{scholarship.criteria}</p>
                              </div>
                              <div className="text-right">
                                <div className="text-lg font-bold text-green-600">${scholarship.amount.toLocaleString()}</div>
                                <div className="text-xs text-gray-500">
                                  {scholarship.renewable ? 'Renewable' : 'One-time'}
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}

            {activeTab === 'admissions' && (
              <div className="space-y-6">
                {/* Admissions Overview */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Admissions Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Application Requirements</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Common Application</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Official Transcripts</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">SAT/ACT Scores</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700 break-words">Letters of Recommendation</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-gray-700">Personal Essay</span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-3">Important Dates</h4>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Early Decision:</span>
                            <span className="text-sm font-medium">November 1</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Early Action:</span>
                            <span className="text-sm font-medium">November 15</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">Regular Decision:</span>
                            <span className="text-sm font-medium">January 15</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600">FAFSA Deadline:</span>
                            <span className="text-sm font-medium">March 1</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Contact Admissions */}
                <Card className="bg-white shadow-sm">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold">Contact Admissions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <Button className="w-full justify-start" variant="outline">
                        <MailIcon className="w-4 h-4 mr-2" />
                        Email Admissions
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <PhoneIcon className="w-4 h-4 mr-2" />
                        Call Admissions
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <CalendarCheck className="w-4 h-4 mr-2" />
                        Schedule Visit
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Globe className="w-4 h-4 mr-2" />
                        Virtual Tour
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4">
            <div className="space-y-6">
              {/* Quick Contact */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Quick Contact</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Message Coaches
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <MailIcon className="w-4 h-4 mr-2" />
                    Email Admissions
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <CalendarCheck className="w-4 h-4 mr-2" />
                    Schedule Visit
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Globe className="w-4 h-4 mr-2" />
                    Virtual Tour
                  </Button>
                </CardContent>
              </Card>

              {/* Key Facts */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Key Facts</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Campus Size:</span>
                    <span className="text-sm font-medium">{collegeData.campusSize}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Student:Faculty:</span>
                    <span className="text-sm font-medium">{collegeData.studentFacultyRatio}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Graduation Rate:</span>
                    <span className="text-sm font-medium">{collegeData.graduationRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600">Employment Rate:</span>
                    <span className="text-sm font-medium">{collegeData.employmentRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-600 break-words">Average Salary:</span>
                    <span className="text-sm font-medium">${collegeData.averageSalary.toLocaleString()}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="bg-white shadow-sm">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">Follow Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Share className="w-4 h-4 mr-2" />
                    Instagram
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Video className="w-4 h-4 mr-2" />
                    YouTube
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