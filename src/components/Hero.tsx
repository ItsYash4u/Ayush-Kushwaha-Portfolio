
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-start justify-center relative overflow-hidden pt-24 md:pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -inset-10 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-violet-500/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-indigo-500/60 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4000"></div>
        </div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
          <motion.h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <span className="block text-foreground">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent">
              Ayush Kushwaha
            </span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl text-muted-foreground mt-2">
              (Yash)
            </span>
          </motion.h1>
          
          <motion.p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            CFO at <span className="text-purple-primary font-semibold">Code Caffeine</span> | 
            BSc Data Science & AI at <span className="text-purple-secondary font-semibold">IIT Guwahati</span> | 
            Class of 2027
          </motion.p>
          
          <motion.p className="text-lg text-muted-foreground/80 mb-10 max-w-2xl mx-auto" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            Passionate about technology, AI, finance-tech integration, and web development. 
            Making 2025 a transformative year through growth in AI and tech innovation.
          </motion.p>
          
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
              <a href="#portfolio">View My Work</a>
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-purple-primary text-purple-primary hover:bg-purple-primary hover:text-background px-8 py-3 rounded-full font-semibold transition-all duration-300">
              <a href="#contact">Get In Touch</a>
            </Button>
          </motion.div>
          
          <motion.div className="flex justify-center space-x-6 mb-10" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}>
            <a href="https://www.linkedin.com/in/itsyash4u/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-primary transition-colors duration-300 transform hover:scale-110">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="https://github.com/ItsYash4u" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-secondary transition-colors duration-300 transform hover:scale-110">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.instagram.com/yash.kushwaha03" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-purple-accent transition-colors duration-300 transform hover:scale-110">
              <Instagram className="h-8 w-8" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
