
import { motion } from "framer-motion";

export const ContactHeader = () => {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <motion.div 
      className="text-center mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeInVariants}
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        Get In Touch
      </h2>
      <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
        I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology and innovation. 
        Let's connect!
      </p>
      <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6"></div>
    </motion.div>
  );
};
