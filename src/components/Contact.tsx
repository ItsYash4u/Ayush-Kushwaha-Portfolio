import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github, Instagram, Send, MapPin, Phone, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import { sendEmail } from "@/utils/emailService";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await sendEmail(formData);
      
      if (result.success) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast({
          title: "Failed to Send Message",
          description: "There was an error sending your message. Please try again or contact me directly.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Failed to Send Message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-purple-primary" />,
      title: "Primary Email",
      detail: "ayush.kushwaha@iitg.ac.in",
      link: "mailto:ayush.kushwaha@iitg.ac.in"
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-secondary" />,
      title: "Alternate Email",
      detail: "yash.contact@codecaffeine.tech",
      link: "mailto:yash.contact@codecaffeine.tech"
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-accent" />,
      title: "Location",
      detail: "IIT Guwahati, Assam",
      link: null
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-primary" />,
      title: "Availability",
      detail: "Open for opportunities",
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-8 w-8" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/itsyash4u/",
      color: "hover:text-purple-primary"
    },
    {
      icon: <Github className="h-8 w-8" />,
      name: "GitHub",
      url: "https://github.com/ItsYash4u",
      color: "hover:text-purple-secondary"
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      name: "Instagram",
      url: "https://www.instagram.com/yash.kushwaha03",
      color: "hover:text-purple-accent"
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-background/30">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation. 
            Let's connect!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-violet-400 mx-auto mt-6"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
            >
              <Card className="bg-purple-card border-purple-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="bg-secondary/50 p-3 rounded-lg">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-muted-foreground hover:text-purple-primary transition-colors duration-300">
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.detail}</p>
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
              <Card className="bg-purple-card border-purple-soft">
                <CardHeader>
                  <CardTitle className="text-2xl text-foreground">Follow Me</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-muted-foreground ${social.color} transition-all duration-300 transform hover:scale-110`}
                        title={social.name}
                      >
                        {social.icon}
                      </a>
                    ))}
                  </div>
                  <p className="text-muted-foreground/80 mt-4">
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
            <Card className="bg-purple-card border-purple-soft">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-muted-foreground mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border text-foreground placeholder-muted-foreground focus:border-purple-primary focus:ring-purple-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-muted-foreground mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-secondary/50 border-border text-foreground placeholder-muted-foreground focus:border-purple-primary focus:ring-purple-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-muted-foreground mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="bg-secondary/50 border-border text-foreground placeholder-muted-foreground focus:border-purple-primary focus:ring-purple-primary"
                      placeholder="What's this about?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-muted-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="bg-secondary/50 border-border text-foreground placeholder-muted-foreground focus:border-purple-primary focus:ring-purple-primary resize-none"
                      placeholder="Tell me about your project, question, or just say hello!"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Send Message
                      </>
                    )}
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
          <div className="bg-purple-card/30 rounded-2xl p-8 border border-purple-soft">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Let's Build Something Amazing Together
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Whether you're interested in collaborating on a project, discussing opportunities at Code Caffeine, 
              or exploring the latest in AI and technology, I'd love to hear from you.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
