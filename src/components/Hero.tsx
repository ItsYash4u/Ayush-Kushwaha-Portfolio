
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <img
              src="/lovable-uploads/2888cc8a-3f53-4059-aade-272e0c595415.png"
              alt="Ayush Kushwaha"
              className="w-32 h-32 mx-auto mb-6 shadow-2xl object-cover"
            />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ayush Kushwaha
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-300 mt-2">
              (Yash)
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            CFO at <span className="text-blue-400 font-semibold">Code Caffeine</span> | 
            BSc Data Science & AI at <span className="text-purple-400 font-semibold">IIT Guwahati</span> | 
            Class of 2027
          </p>
          
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Passionate about technology, AI, finance-tech integration, and web development. 
            Making 2025 a transformative year through growth in AI and tech innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 mb-10">
            <a href="https://linkedin.com/in/ayush-kushwaha" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/ayush-kushwaha" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://instagram.com/ayush_kushwaha" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-pink-400 transition-colors duration-300 transform hover:scale-110">
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
