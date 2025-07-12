import { useState } from "react";
import { Menu, X, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link } from "wouter";
import AthleteRegistrationForm from "@/components/forms/athlete-registration-form";
import LoginModal from "@/components/forms/login-modal";
import ncarLogo from "@assets/image_1752240108326.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAthleteForm, setShowAthleteForm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b border-neutral-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link href="/" className="cursor-pointer">
              <img 
                src={ncarLogo} 
                alt="NCAR Sports" 
                className="h-16 w-auto hover:opacity-80 transition-opacity duration-200"
              />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <Link href="/athlete-directory" className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Athletes
              </Link>
            </div>
            <div className="relative group">
              <Link href="/coach-profile" className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Coaches
              </Link>
            </div>
            <div className="relative group">
              <Link href="/parent-profile" className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Parents
              </Link>
            </div>
            <div className="relative group">
              <Link href="/college-profile" className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Colleges
              </Link>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Clubs
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium"
            >
              Pricing
            </button>
            <div className="relative group">
              <button className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </nav>
          
          <div className="hidden lg:flex items-center space-x-3">
            <Button 
              variant="ghost" 
              className="text-neutral-700 hover:text-blue-600"
              onClick={() => setShowLoginModal(true)}
            >
              Sign In
            </Button>
            <Link href="/get-started">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-neutral-700"
                >
                  <Menu size={20} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0">
                <div className="flex flex-col h-full">
                  {/* Header */}
                  <div className="p-6 border-b border-neutral-100">
                    <div className="flex items-center justify-between">
                      <Link href="/" className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>
                        <img 
                          src={ncarLogo} 
                          alt="NCAR Sports" 
                          className="h-12 w-auto hover:opacity-80 transition-opacity duration-200"
                        />
                      </Link>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-neutral-700"
                      >
                        <X size={20} />
                      </Button>
                    </div>
                  </div>
                  
                  {/* Navigation */}
                  <nav className="flex-1 p-6">
                    <div className="space-y-6">
                      <div className="space-y-4">
                        <button className="flex items-center justify-between w-full text-left text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">
                          Athletes
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <Link 
                          href="/coach-profile" 
                          className="flex items-center justify-between w-full text-left text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          Coaches
                        </Link>
                        <button className="flex items-center justify-between w-full text-left text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">
                          Clubs
                          <ChevronDown className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => scrollToSection("pricing")}
                          className="w-full text-left text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg"
                        >
                          Pricing
                        </button>
                        <button className="flex items-center justify-between w-full text-left text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-lg">
                          Resources
                          <ChevronDown className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </nav>
                  
                  {/* Footer Actions */}
                  <div className="p-6 border-t border-neutral-100 space-y-3">
                    <Button 
                      className="bg-white hover:bg-gray-50 text-blue-600 border border-blue-200 w-full text-lg"
                      onClick={() => {
                        setShowLoginModal(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      Sign In
                    </Button>
                    <Button 
                      onClick={() => {
                        setShowAthleteForm(true);
                        setIsMenuOpen(false);
                      }}
                      className="bg-blue-600 hover:bg-blue-700 text-white w-full text-lg flex items-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Start Your Journey Today
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      
      {/* Registration Form */}
      {showAthleteForm && (
        <AthleteRegistrationForm onClose={() => setShowAthleteForm(false)} />
      )}
      
      {/* Login Modal */}
      <LoginModal 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)} 
      />
    </header>
  );
}
