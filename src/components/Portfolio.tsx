
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Trophy, Zap, Code, Calculator } from "lucide-react";
import { motion } from "framer-motion";

export const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Datathon AI Confluence IITG",
      description: "Won first prize at a competitive AI datathon event, showcasing advanced data science and machine learning skills.",
      technologies: ["Python", "Machine Learning", "Data Analysis", "AI"],
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      category: "Competition",
      achievement: "🏆 First Prize Winner"
    },
    {
      id: 2,
      title: "DeepFlow HPC",
      description: "Achieved a remarkable 5000x speedup in model training, outperforming PhD-level participants with innovative optimization techniques.",
      technologies: ["HPC", "Deep Learning", "Optimization", "CUDA"],
      icon: <Zap className="h-8 w-8 text-blue-400" />,
      category: "Research",
      achievement: "⚡ 5000x Speedup"
    },
    {
      id: 3,
      title: "AI Chatbot Platform",
      description: "Developed an intelligent chatbot with natural language processing capabilities and context-aware responses.",
      technologies: ["NLP", "Python", "TensorFlow", "API"],
      icon: <Code className="h-8 w-8 text-green-400" />,
      category: "Development"
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Created a modern, responsive portfolio website showcasing projects and skills with elegant design and smooth animations.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      icon: <Code className="h-8 w-8 text-purple-400" />,
      category: "Web Development"
    },
    {
      id: 5,
      title: "Advanced Stopwatch App",
      description: "Built a feature-rich stopwatch application with lap timing, multiple timers, and export functionality.",
      technologies: ["JavaScript", "React", "Local Storage", "PWA"],
      icon: <Calculator className="h-8 w-8 text-orange-400" />,
      category: "Utility"
    },
    {
      id: 6,
      title: "Scientific Calculator",
      description: "Developed a comprehensive calculator with advanced mathematical functions and scientific notation support.",
      technologies: ["JavaScript", "Math.js", "CSS Grid", "Responsive Design"],
      icon: <Calculator className="h-8 w-8 text-red-400" />,
      category: "Utility"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Work
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my notable projects, achievements, and technical expertise across AI, web development, and competitive programming.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group h-full">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-slate-700/50 p-3 rounded-lg group-hover:bg-slate-700/70 transition-colors duration-300">
                      {project.icon}
                    </div>
                    <Badge variant="secondary" className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  {project.achievement && (
                    <div className="text-sm font-semibold text-yellow-400">
                      {project.achievement}
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-slate-600 text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-colors duration-300">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button variant="outline" size="sm" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Details
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105">
            <a href="https://github.com/ayush-kushwaha" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
