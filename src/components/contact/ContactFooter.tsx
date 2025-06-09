
import { motion } from "framer-motion";

export const ContactFooter = () => {
  return (
    <motion.div 
      className="mt-16 text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="bg-card/30 rounded-2xl p-8 border border-border">
        <h3 className="text-2xl font-bold text-foreground mb-4">
          Let's Build Something Amazing Together
        </h3>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you're interested in collaborating on a project, discussing opportunities, 
          or exploring the latest in AI and technology, I'd love to hear from you.
        </p>
      </div>
    </motion.div>
  );
};
