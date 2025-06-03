
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-white/10 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4">
            <p className="text-gray-300 text-lg mb-2">
              Thank you for visiting my portfolio
            </p>
            <p className="text-gray-400 text-sm">
              Let's build something amazing together
            </p>
          </div>
          
          <div className="border-t border-white/10 pt-6">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              © {currentYear} Ayush Kushwaha (Yash). All rights reserved. 
              <span className="flex items-center gap-1">
                Made with <Heart className="w-4 h-4 text-red-400 fill-current" /> and passion
              </span>
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Designed & Developed with modern web technologies
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
