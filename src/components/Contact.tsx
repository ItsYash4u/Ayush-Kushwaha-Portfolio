
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Instagram, Send, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-blue-400" />,
      title: "Primary Email",
      detail: "ayush.kushwaha@example.com",
      link: "mailto:ayush.kushwaha@example.com"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-400" />,
      title: "Alternate Email",
      detail: "yash.contact@example.com",
      link: "mailto:yash.contact@example.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-green-400" />,
      title: "Location",
      detail: "IIT Guwahati, Assam",
      link: null
    },
    {
      icon: <Phone className="h-6 w-6 text-yellow-400" />,
      title: "Availability",
      detail: "Open for opportunities",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-8 w-8" />,
      name: "LinkedIn",
      url: "https://linkedin.com/in/ayush-kushwaha",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="h-8 w-8" />,
      name: "GitHub",
      url: "https://github.com/ayush-kushwaha",
      color: "hover:text-purple-400"
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      name: "Instagram",
      url: "https://instagram.com/ayush_kushwaha",
      color: "hover:text-pink-400"
    }
  ];

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation. 
            Let's connect!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-slate-700/50 p-3 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-gray-300">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={{ ...cardVariants, visible: { ...cardVariants.visible, transition: { delay: 0.2 } } }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 ${social.color} transition-all duration-300 transform hover:scale-110`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <p className="text-gray-400 mt-4">
                    Connect with me on social media for updates on my latest projects and insights into the tech industry.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={{ ...cardVariants, visible: { ...cardVariants.visible, transition: { delay: 0.4 } } }}
          >
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400 focus:border-blue-400 focus:ring-blue-400 resize-none"
                      placeholder="Tell me about your project, question, or just say hello!"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
                  >
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Whether you're interested in collaborating on a project, discussing opportunities at Code Caffeine, 
              or exploring the latest in AI and technology, I'd love to hear from you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
