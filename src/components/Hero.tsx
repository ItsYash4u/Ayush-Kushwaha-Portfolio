
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

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
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="block text-white">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Ayush Kushwaha
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-gray-300 mt-2">
              (Yash)
            </span>
          </motion.h1>
          
          <motion.p 
            className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CFO at <span className="text-blue-400 font-semibold">Code Caffeine</span> | 
            BSc Data Science & AI at <span className="text-purple-400 font-semibold">IIT Guwahati</span> | 
            Class of 2027
          </motion.p>
          
          <motion.p 
            className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Passionate about technology, AI, finance-tech integration, and web development. 
            Making 2025 a transformative year through growth in AI and tech innovation.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
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
          </motion.div>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
