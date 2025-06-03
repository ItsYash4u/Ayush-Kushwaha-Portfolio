
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-50">
          <div 
            className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          ></div>
          <div 
            className="absolute top-3/4 right-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"
            style={{ transform: `translateY(${scrollY * -0.2}px)` }}
          ></div>
          <div 
            className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          ></div>
        </div>
      </div>

      {/* Left decorative circle */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
        <div 
          className="w-96 h-96 rounded-full bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-sm border border-white/10"
          style={{ transform: `translateY(${scrollY * 0.1}px) rotate(${scrollY * 0.1}deg)` }}
        ></div>
      </div>

      {/* Right decorative circle */}
      <div className="absolute right-0 top-1/3 transform -translate-y-1/2 translate-x-1/2">
        <div 
          className="w-80 h-80 rounded-full bg-gradient-to-bl from-purple-600/15 via-pink-600/15 to-blue-600/15 backdrop-blur-sm border border-white/5"
          style={{ transform: `translateY(${scrollY * -0.15}px) rotate(${scrollY * -0.1}deg)` }}
        ></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div 
          className="animate-fade-in"
          style={{ transform: `translateY(${scrollY * 0.1}px)` }}
        >
          <div className="mb-12 relative">
            {/* Profile picture with enhanced styling */}
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 rounded-full p-1 animate-pulse">
                <div className="bg-slate-900 rounded-full p-1">
                  <img
                    src="https://i.ibb.co/KxJZGVK/photo-1472099645785-5658abf4ff4e-ixlib-rb-1-2.jpg"
                    alt="Ayush Kushwaha"
                    className="w-40 h-40 rounded-full object-cover shadow-2xl"
                  />
                </div>
              </div>
              {/* Floating elements around profile */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-purple-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-8 w-3 h-3 bg-pink-400 rounded-full animate-ping"></div>
            </div>
          </div>
          
          <div 
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          >
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extrabold mb-8 leading-tight">
              <span className="block text-white drop-shadow-lg">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
                Ayush Kushwaha
              </span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-gray-300 mt-4 font-light">
                (Yash)
              </span>
            </h1>
          </div>
          
          <div 
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 mb-10 border border-white/10 shadow-2xl">
              <p className="text-xl sm:text-2xl text-gray-200 mb-4 leading-relaxed">
                CFO at <span className="text-blue-400 font-bold">Code Caffeine</span> | 
                BSc Data Science & AI at <span className="text-purple-400 font-bold">IIT Guwahati</span> | 
                Class of 2027
              </p>
              
              <p className="text-lg text-gray-300 leading-relaxed">
                Passionate about technology, AI, finance-tech integration, and web development. 
                Making 2025 a transformative year through growth in AI and tech innovation.
              </p>
            </div>
          </div>
          
          <div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          >
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
            >
              <a href="#portfolio" className="flex items-center gap-2">
                View My Work
                <ArrowDown className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:shadow-2xl backdrop-blur-sm"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
          
          <div 
            className="flex justify-center space-x-8 mb-16"
            style={{ transform: `translateY(${scrollY * 0.01}px)` }}
          >
            <a href="https://linkedin.com/in/ayush-kushwaha" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:shadow-lg p-3 rounded-full backdrop-blur-sm border border-white/10 hover:border-blue-400/50">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/ayush-kushwaha" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:shadow-lg p-3 rounded-full backdrop-blur-sm border border-white/10 hover:border-purple-400/50">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://instagram.com/ayush_kushwaha" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-pink-400 transition-all duration-300 transform hover:scale-125 hover:shadow-lg p-3 rounded-full backdrop-blur-sm border border-white/10 hover:border-pink-400/50">
              <Instagram className="h-8 w-8" />
            </a>
          </div>
        </div>
        
        <div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
          style={{ transform: `translateX(-50%) translateY(${scrollY * -0.1}px)` }}
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-full p-4 border border-white/20">
            <ArrowDown className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>

      {/* Additional floating elements */}
      <div 
        className="absolute top-20 left-20 w-2 h-2 bg-blue-400 rounded-full animate-ping"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      ></div>
      <div 
        className="absolute bottom-32 right-32 w-3 h-3 bg-purple-400 rounded-full animate-pulse"
        style={{ transform: `translateY(${scrollY * -0.3}px)` }}
      ></div>
      <div 
        className="absolute top-1/3 right-20 w-1 h-1 bg-pink-400 rounded-full animate-bounce"
        style={{ transform: `translateY(${scrollY * 0.15}px)` }}
      ></div>
    </section>
  );
};
