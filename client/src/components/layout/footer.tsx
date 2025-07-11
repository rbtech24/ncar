import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-neutral-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <img 
              src="/attached_assets/image_1752240108326.png" 
              alt="NCAR Sports" 
              className="h-10 w-auto mb-4"
            />
            <p className="text-neutral-300 mb-4 leading-relaxed">
              The complete recruiting platform connecting student-athletes with college opportunities nationwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-neutral-400 hover:text-brand-primary transition-colors duration-200">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-primary transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-primary transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-neutral-400 hover:text-brand-primary transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-white">Platform</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Features</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Pricing</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Mobile App</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Integrations</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Success Stories</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Blog</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Help Center</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Recruiting Guide</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading text-base font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">About Us</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Careers</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Contact</a></li>
              <li><a href="#" className="text-neutral-300 hover:text-white transition-colors duration-200 text-sm">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-700 mt-12 pt-8 text-center">
          <p className="text-neutral-400 text-sm">
            © 2024 NCAR Sports. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-2">Terms of Service</a> | 
            <a href="#" className="hover:text-white transition-colors duration-200 ml-2">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
