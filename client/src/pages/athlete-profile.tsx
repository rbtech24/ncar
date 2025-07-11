import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
  Target,
  Award,
  Video,
  BookOpen,
  Users,
  Heart,
  Share2,
  Download
} from "lucide-react";

export default function AthleteProfile() {
  const [isFollowing, setIsFollowing] = useState(false);

  // Example athlete data based on our registration form
  const athlete = {
    firstName: "Marcus",
    lastName: "Johnson",
    email: "marcus.johnson@email.com",
    phone: "(555) 123-4567",
    dateOfBirth: "2006-03-15",
    currentGrade: "11th",
    graduationYear: 2025,
    sport: "Basketball",
    position: "Point Guard",
    height: "6'2\"",
    weight: "180 lbs",
    gpa: 3.8,
    satScore: 1280,
    actScore: 28,
    address: "1234 Main Street",
    city: "Atlanta",
    state: "GA",
    zipCode: "30309",
    currentSchool: "North Atlanta High School",
    coachName: "Coach Williams",
    coachEmail: "coach.williams@nahs.edu",
    coachPhone: "(555) 987-6543",
    parentFirstName: "David",
    parentLastName: "Johnson",
    parentEmail: "david.johnson@email.com",
    parentPhone: "(555) 456-7890",
    athleticAchievements: "2x State Champion, All-State First Team, Regional MVP, Team Captain",
    academicHonors: "National Honor Society, AP Scholar, Dean's List",
    extracurriculars: "Student Government Vice President, Volunteer Basketball Coach, Community Service Club",
    recruitingGoals: "Seeking a Division I program with strong academics and competitive basketball. Interested in business or communications major.",
    interestedDivisions: ["Division I", "Division II"],
    interestedRegions: ["Southeast", "Northeast"],
    videoLinks: "https://hudl.com/profile/marcus-johnson",
    profileImage: "https://images.unsplash.com/photo-1566977762403-9c1e9b26b4a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    stats: {
      pointsPerGame: 18.2,
      assists: 7.8,
      rebounds: 4.5,
      fieldGoalPercentage: 45.2,
      threePointPercentage: 38.5,
      freeThrowPercentage: 82.1
    },
    rankings: {
      stateRanking: 15,
      nationalRanking: 142,
      positionRanking: 8
    }
  };

  const calculateAge = (dateOfBirth: string) => {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Header Section */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <img
                src={athlete.profileImage}
                alt={`${athlete.firstName} ${athlete.lastName}`}
                className="w-48 h-48 rounded-lg object-cover shadow-lg"
              />
              <div className="mt-4 flex flex-col gap-2">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button 
                  variant="outline" 
                  onClick={() => setIsFollowing(!isFollowing)}
                  className="w-full"
                >
                  <Heart className={`w-4 h-4 mr-2 ${isFollowing ? 'fill-red-500 text-red-500' : ''}`} />
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="flex-1">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    {athlete.firstName} {athlete.lastName}
                  </h1>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="text-sm">
                      {athlete.sport}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      {athlete.position}
                    </Badge>
                    <Badge variant="outline" className="text-sm">
                      Class of {athlete.graduationYear}
                    </Badge>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">#{athlete.rankings.stateRanking}</div>
                  <div className="text-sm text-gray-600">in {athlete.state}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{athlete.city}, {athlete.state}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Calendar className="w-4 h-4" />
                  <span>{calculateAge(athlete.dateOfBirth)} years old</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <GraduationCap className="w-4 h-4" />
                  <span>{athlete.currentSchool}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <User className="w-4 h-4" />
                  <span>{athlete.height} • {athlete.weight}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Star className="w-4 h-4" />
                  <span>{athlete.gpa} GPA</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Trophy className="w-4 h-4" />
                  <span>SAT: {athlete.satScore}</span>
                </div>
              </div>

              {/* Rankings */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">#{athlete.rankings.nationalRanking}</div>
                  <div className="text-sm text-gray-600">National</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">#{athlete.rankings.stateRanking}</div>
                  <div className="text-sm text-gray-600">State</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">#{athlete.rankings.positionRanking}</div>
                  <div className="text-sm text-gray-600">Position</div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed">
                {athlete.recruitingGoals}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="stats" className="w-full">
              <TabsList className="grid grid-cols-4 w-full">
                <TabsTrigger value="stats">Stats</TabsTrigger>
                <TabsTrigger value="achievements">Achievements</TabsTrigger>
                <TabsTrigger value="academics">Academics</TabsTrigger>
                <TabsTrigger value="video">Video</TabsTrigger>
              </TabsList>

              <TabsContent value="stats" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Trophy className="w-5 h-5" />
                      Season Statistics
                    </CardTitle>
                    <CardDescription>2024-2025 Season Performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{athlete.stats.pointsPerGame}</div>
                        <div className="text-sm text-gray-600">Points Per Game</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{athlete.stats.assists}</div>
                        <div className="text-sm text-gray-600">Assists</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{athlete.stats.rebounds}</div>
                        <div className="text-sm text-gray-600">Rebounds</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{athlete.stats.fieldGoalPercentage}%</div>
                        <div className="text-sm text-gray-600">Field Goal %</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{athlete.stats.threePointPercentage}%</div>
                        <div className="text-sm text-gray-600">3-Point %</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">{athlete.stats.freeThrowPercentage}%</div>
                        <div className="text-sm text-gray-600">Free Throw %</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Athletic Achievements
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {athlete.athleticAchievements.split(', ').map((achievement, index) => (
                        <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                          <Trophy className="w-4 h-4 text-yellow-500" />
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="academics" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Academic Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{athlete.gpa}</div>
                        <div className="text-sm text-gray-600">GPA</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{athlete.satScore}</div>
                        <div className="text-sm text-gray-600">SAT Score</div>
                      </div>
                      <div className="text-center p-4 bg-blue-50 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">{athlete.actScore}</div>
                        <div className="text-sm text-gray-600">ACT Score</div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-semibold mb-3">Academic Honors</h3>
                      <div className="space-y-2">
                        {athlete.academicHonors.split(', ').map((honor, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span>{honor}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">Extracurricular Activities</h3>
                      <div className="space-y-2">
                        {athlete.extracurriculars.split(', ').map((activity, index) => (
                          <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                            <Users className="w-4 h-4 text-blue-500" />
                            <span>{activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="video" className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Video className="w-5 h-5" />
                      Highlight Videos
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <Video className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-gray-600">Senior Season Highlights</p>
                          <Button className="mt-2">Watch Video</Button>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Video className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                            <p className="text-sm text-gray-600">Skills Showcase</p>
                          </div>
                        </div>
                        <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <Video className="w-8 h-8 text-gray-400 mx-auto mb-1" />
                            <p className="text-sm text-gray-600">Game Film</p>
                          </div>
                        </div>
                      </div>
                      <div className="text-center">
                        <a 
                          href={athlete.videoLinks} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 font-medium"
                        >
                          View Full Profile on Hudl →
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Athlete</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{athlete.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{athlete.phone}</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Parent/Guardian</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>{athlete.parentFirstName} {athlete.parentLastName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{athlete.parentEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{athlete.parentPhone}</span>
                    </div>
                  </div>
                </div>
                
                <Separator />
                
                <div>
                  <h4 className="font-medium mb-2">Current Coach</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      <span>{athlete.coachName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      <span>{athlete.coachEmail}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      <span>{athlete.coachPhone}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recruiting Preferences */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="w-5 h-5" />
                  Recruiting Preferences
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Interested Divisions</h4>
                  <div className="flex flex-wrap gap-2">
                    {athlete.interestedDivisions.map((division) => (
                      <Badge key={division} variant="outline">
                        {division}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Preferred Regions</h4>
                  <div className="flex flex-wrap gap-2">
                    {athlete.interestedRegions.map((region) => (
                      <Badge key={region} variant="outline">
                        {region}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Profile Completion */}
            <Card>
              <CardHeader>
                <CardTitle>Profile Completion</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Profile Complete</span>
                    <span className="font-medium">92%</span>
                  </div>
                  <Progress value={92} className="h-2" />
                  <div className="text-xs text-gray-600">
                    Add more highlight videos to reach 100%
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}