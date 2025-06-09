
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "framer-motion";

export const ContactInfo = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Primary Email",
      detail: "ayush.kushwaha@iitg.ac.in",
      link: "mailto:ayush.kushwaha@iitg.ac.in"
    },
    {
      icon: <Mail className="h-6 w-6 text-accent" />,
      title: "Personal Email",
      detail: "ayushkushwaha2005@gmail.com",
      link: "mailto:ayushkushwaha2005@gmail.com"
    },
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      title: "Location",
      detail: "IIT Guwahati, Assam",
      link: null
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Availability",
      detail: "Open for opportunities",
      link: null
    }
  ];

  const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
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
                  <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors duration-300">
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
  );
};
