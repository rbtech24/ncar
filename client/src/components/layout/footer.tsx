import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="font-heading text-2xl font-bold mb-4">RecruitCore</div>
            <p className="text-gray-400 mb-4">
              The premier platform for college sports recruiting, connecting student-athletes with their dream schools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent-green">Platform</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Mobile App</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent-green">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Help Center</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Recruiting Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4 text-accent-green">Company</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-accent-orange transition-colors duration-200">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 RecruitCore. All rights reserved. | 
            <a href="#" className="hover:text-accent-orange transition-colors duration-200 ml-2">Terms of Service</a> | 
            <a href="#" className="hover:text-accent-orange transition-colors duration-200 ml-2">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
