
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, BookOpen, Code, TrendingUp, Lightbulb, Users } from "lucide-react";

export const Services = () => {
  const services = [
    {
      id: 1,
      title: "AI Solutions Development",
      description: "Custom AI and machine learning solutions tailored to your business needs, from concept to deployment.",
      icon: <Brain className="h-8 w-8 text-blue-400" />,
      status: "Coming Soon",
      features: ["Machine Learning Models", "Data Analysis", "AI Consulting", "Model Optimization"]
    },
    {
      id: 2,
      title: "Technical eBooks",
      description: "Comprehensive guides on personal growth, technology trends, and AI development for learners at all levels.",
      icon: <BookOpen className="h-8 w-8 text-green-400" />,
      status: "In Development",
      features: ["AI Fundamentals", "Career Growth", "Tech Leadership", "Industry Insights"]
    },
    {
      id: 3,
      title: "Web Development",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      icon: <Code className="h-8 w-8 text-purple-400" />,
      status: "Available",
      features: ["React Applications", "Full-Stack Development", "API Integration", "Responsive Design"]
    },
    {
      id: 4,
      title: "Financial Technology",
      description: "Innovative fintech solutions combining financial expertise with advanced technology integration.",
      icon: <TrendingUp className="h-8 w-8 text-yellow-400" />,
      status: "Coming Soon",
      features: ["Finance Automation", "Investment Analysis", "Risk Assessment", "Trading Algorithms"]
    },
    {
      id: 5,
      title: "Innovation Consulting",
      description: "Strategic consulting for startups and enterprises looking to leverage AI and emerging technologies.",
      icon: <Lightbulb className="h-8 w-8 text-orange-400" />,
      status: "Planning",
      features: ["Tech Strategy", "Innovation Roadmap", "AI Implementation", "Digital Transformation"]
    },
    {
      id: 6,
      title: "Mentorship Programs",
      description: "Personalized mentorship for students and professionals entering the AI and tech industry.",
      icon: <Users className="h-8 w-8 text-pink-400" />,
      status: "Coming Soon",
      features: ["Career Guidance", "Technical Skills", "Industry Networks", "Personal Development"]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Available":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Coming Soon":
        return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "In Development":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Planning":
        return "bg-purple-500/20 text-purple-400 border-purple-500/30";
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30";
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upcoming services and offerings focused on AI solutions, educational content, and technology consulting. 
            Stay tuned for exciting developments!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Card key={service.id} className="bg-slate-800/50 border-slate-700 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105 group">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-slate-700/50 p-3 rounded-lg group-hover:bg-slate-700/70 transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(service.status)}`}>
                    {service.status}
                  </span>
                </div>
                <CardTitle className="text-xl text-white group-hover:text-blue-400 transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-300 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
                    Key Features
                  </h4>
                  <ul className="space-y-1">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button 
                  variant="outline" 
                  className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
                  disabled={service.status !== "Available"}
                >
                  {service.status === "Available" ? "Get Started" : "Notify Me"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 p-8 bg-slate-800/30 rounded-2xl border border-slate-700">
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects and services. Subscribe to get notified when new offerings become available, 
            or reach out to discuss custom solutions for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              Subscribe for Updates
            </Button>
            <Button variant="outline" className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
              <a href="#contact">Discuss Custom Solutions</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
