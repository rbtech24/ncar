import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className="bg-ncaa-blue text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="font-heading text-2xl font-bold tracking-wide">
              RecruitCore
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-white hover:text-accent-orange transition-colors duration-200 font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-white hover:text-accent-orange transition-colors duration-200 font-medium"
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-accent-orange transition-colors duration-200 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-accent-orange transition-colors duration-200 font-medium"
            >
              Contact
            </button>
          </nav>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-white hover:text-accent-orange">
              Sign In
            </Button>
            <Button className="btn-accent-orange">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-blue-700">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-white hover:text-accent-orange transition-colors duration-200 font-medium text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-white hover:text-accent-orange transition-colors duration-200 font-medium text-left"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-accent-orange transition-colors duration-200 font-medium text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-accent-orange transition-colors duration-200 font-medium text-left"
              >
                Contact
              </button>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="text-white hover:text-accent-orange w-full justify-start">
                  Sign In
                </Button>
                <Button className="btn-accent-orange w-full">
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
