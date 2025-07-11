import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Users, 
  Trophy, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Target, 
  MessageCircle, 
  Calendar,
  BookOpen,
  Award,
  Video,
  Search,
  Bell,
  BarChart3,
  Zap,
  Shield,
  Globe
} from "lucide-react";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ParentRegistrationForm from "@/components/forms/parent-registration-form";
import AthleteRegistrationForm from "@/components/forms/athlete-registration-form";
import CoachRegistrationForm from "@/components/forms/coach-registration-form";

export default function GetStarted() {
  const [showParentForm, setShowParentForm] = useState(false);
  const [showAthleteForm, setShowAthleteForm] = useState(false);
  const [showCoachForm, setShowCoachForm] = useState(false);

  const features = [
    {
      icon: <Search className="w-6 h-6" />,
      title: "Smart Athlete Discovery",
      description: "AI-powered search helps coaches find perfect recruits based on specific criteria"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Direct Communication",
      description: "Secure messaging system connecting athletes, parents, and coaches"
    },
    {
      icon: <Video className="w-6 h-6" />,
      title: "Video Highlights",
      description: "Upload and share game footage, skills videos, and recruiting highlights"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track progress, stats, and recruiting metrics with detailed analytics"
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Event Management",
      description: "Showcase events, camps, and tournament scheduling made simple"
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Real-time Notifications",
      description: "Stay updated on recruiting activity, messages, and opportunities"
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Create Your Profile",
      description: "Build a comprehensive profile with stats, achievements, and goals",
      duration: "5 minutes"
    },
    {
      number: 2,
      title: "Upload Your Content",
      description: "Add highlight videos, academic records, and athletic achievements",
      duration: "10 minutes"
    },
    {
      number: 3,
      title: "Connect with Coaches",
      description: "Start receiving interest from college coaches and programs",
      duration: "Ongoing"
    },
    {
      number: 4,
      title: "Get Recruited",
      description: "Engage with coaches and find your perfect college match",
      duration: "Throughout season"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Get Started with <span className="text-blue-600">NCAR</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join thousands of student-athletes who have successfully navigated the college recruiting process with our comprehensive platform and expert guidance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => setShowAthleteForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
              >
                <User className="w-5 h-5 mr-2" />
                Start as Athlete
              </Button>
              <Button 
                onClick={() => setShowParentForm(true)}
                variant="outline" 
                className="px-8 py-4 text-lg"
              >
                <Users className="w-5 h-5 mr-2" />
                Start as Parent
              </Button>
              <Button 
                onClick={() => setShowCoachForm(true)}
                variant="outline" 
                className="px-8 py-4 text-lg"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Start as Coach
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* User Type Selection */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Path</h2>
            <p className="text-xl text-gray-600">
              Select your role to get personalized guidance and features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Athlete Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-blue-500">
              <CardHeader>
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Student-Athletes</CardTitle>
                <CardDescription className="text-gray-600">
                  Create your recruiting profile and get discovered by college coaches
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Build comprehensive athletic profile
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Upload highlight videos and stats
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Connect with college coaches
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Track recruiting progress
                  </div>
                </div>
                <Button 
                  onClick={() => setShowAthleteForm(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  Get Started as Athlete
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Parent Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-green-500">
              <CardHeader>
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Parents</CardTitle>
                <CardDescription className="text-gray-600">
                  Support your child's recruiting journey with tools and insights
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Manage child's profile and progress
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Communicate with coaches
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Access recruiting resources
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Track scholarship opportunities
                  </div>
                </div>
                <Button 
                  onClick={() => setShowParentForm(true)}
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Get Started as Parent
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Coach Card */}
            <Card className="p-8 text-center hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-orange-500">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="w-8 h-8 text-orange-600" />
                </div>
                <CardTitle className="text-2xl mb-2">Coaches</CardTitle>
                <CardDescription className="text-gray-600">
                  Discover and recruit talented student-athletes for your program
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Search extensive athlete database
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    AI-powered recruiting tools
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Direct athlete communication
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    Recruiting analytics dashboard
                  </div>
                </div>
                <Button 
                  onClick={() => setShowCoachForm(true)}
                  className="w-full bg-orange-600 hover:bg-orange-700"
                >
                  Get Started as Coach
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">
              Get started in minutes and begin your recruiting journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="text-center">
                <div className="relative mb-8">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-2">{step.description}</p>
                <Badge variant="outline" className="text-xs">
                  {step.duration}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Platform Features</h2>
            <p className="text-xl text-gray-600">
              Everything you need for successful college recruiting
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-xl text-blue-100">
              Join thousands of successful student-athletes
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">15K+</div>
              <div className="text-blue-100">Athletes Registered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">2,500+</div>
              <div className="text-blue-100">College Coaches</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">$45M+</div>
              <div className="text-blue-100">Scholarships Secured</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-100">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Join NCAR today and take the first step toward your college recruiting success
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowAthleteForm(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg"
            >
              <Zap className="w-5 h-5 mr-2" />
              Create Free Profile
            </Button>
            <Button variant="outline" className="px-8 py-4 text-lg">
              <Shield className="w-5 h-5 mr-2" />
              Learn More
            </Button>
          </div>
          <p className="text-sm text-gray-500 mt-4">
            Free to start • No credit card required • Full support included
          </p>
        </div>
      </section>

      <Footer />
      
      {/* Registration Forms */}
      {showParentForm && (
        <ParentRegistrationForm onClose={() => setShowParentForm(false)} />
      )}
      {showAthleteForm && (
        <AthleteRegistrationForm onClose={() => setShowAthleteForm(false)} />
      )}
      {showCoachForm && (
        <CoachRegistrationForm onClose={() => setShowCoachForm(false)} />
      )}
    </div>
  );
}