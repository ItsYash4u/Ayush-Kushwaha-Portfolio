
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Building, Heart } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm Ayush Kushwaha, also known as Yash. I'm currently pursuing a BSc in Data Science and AI at IIT Guwahati. 
              Passionate about technology, AI, finance-tech integration, and web development, I am the CFO at startup Code Caffeine, 
              managing the finance department.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              I aim to make 2025 a transformative year through growth in AI and tech innovation. My journey combines academic 
              excellence with practical entrepreneurship, always pushing the boundaries of what's possible in technology.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white">
                <a href="https://linkedin.com/in/ayush-kushwaha" target="_blank" rel="noopener noreferrer">
                  LinkedIn Profile
                </a>
              </Button>
              <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                Download CV
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Education</h3>
                  <p className="text-gray-300">BSc Data Science & AI</p>
                  <p className="text-gray-400">IIT Guwahati • Class of 2027</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Building className="h-8 w-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Current Role</h3>
                  <p className="text-gray-300">CFO at Code Caffeine</p>
                  <p className="text-gray-400">Managing Finance Department</p>
                </div>
              </div>
            </Card>
            
            <Card className="bg-slate-800/50 border-slate-700 p-6 hover:bg-slate-800/70 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="bg-pink-500/20 p-3 rounded-lg">
                  <Heart className="h-8 w-8 text-pink-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Passions</h3>
                  <p className="text-gray-300">AI, FinTech, Web Development</p>
                  <p className="text-gray-400">Startup Entrepreneurship</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-blue-400">2027</div>
            <div className="text-gray-400">Graduation Year</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-purple-400">CFO</div>
            <div className="text-gray-400">Current Position</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-pink-400">IIT</div>
            <div className="text-gray-400">Guwahati</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-green-400">AI</div>
            <div className="text-gray-400">Specialization</div>
          </div>
        </div>
      </div>
    </section>
  );
};
