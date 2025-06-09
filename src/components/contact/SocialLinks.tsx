
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Github, Instagram } from "lucide-react";
import { motion } from "framer-motion";

export const SocialLinks = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="h-8 w-8" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/itsyash4u/",
      color: "hover:text-primary"
    },
    {
      icon: <Github className="h-8 w-8" />,
      name: "GitHub",
      url: "https://github.com/ItsYash4u",
      color: "hover:text-accent"
    },
    {
      icon: <Instagram className="h-8 w-8" />,
      name: "Instagram",
      url: "https://www.instagram.com/yash.kushwaha03",
      color: "hover:text-secondary"
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={cardVariants}
    >
      <Card className="bg-card border-border">
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
  );
};
