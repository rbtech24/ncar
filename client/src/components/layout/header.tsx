import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import ncarLogo from "@assets/image_1752240108326.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
            <img 
              src={ncarLogo} 
              alt="NCAR Sports" 
              className="h-16 w-auto"
            />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <div className="relative group">
              <button className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Athletes
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center gap-1 text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium">
                Coaches
                <ChevronDown className="w-4 h-4" />
              </button>
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
            <Button variant="ghost" className="text-neutral-700 hover:text-blue-600">
              Sign In
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors duration-200">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-700"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-neutral-100">
            <nav className="flex flex-col space-y-4">
              <button className="flex items-center justify-between text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left">
                Athletes
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left">
                Coaches
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="flex items-center justify-between text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left">
                Clubs
                <ChevronDown className="w-4 h-4" />
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left"
              >
                Pricing
              </button>
              <button className="flex items-center justify-between text-neutral-700 hover:text-blue-600 transition-colors duration-200 font-medium text-left">
                Resources
                <ChevronDown className="w-4 h-4" />
              </button>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="text-neutral-700 hover:text-blue-600 w-full justify-start">
                  Sign In
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
