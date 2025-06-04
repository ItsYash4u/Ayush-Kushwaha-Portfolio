
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    "AI Solutions Development",
    "Technical eBooks",
    "Web Development",
    "Financial Technology",
    "Innovation Consulting",
    "Mentorship Programs"
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Upcoming services and offerings focused on AI solutions, educational content, and technology consulting. 
            Stay tuned for exciting developments!
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mt-6"></div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-slate-800/50 border border-slate-700 rounded-lg p-8 text-center hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {service}
              </h3>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto"></div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="text-center p-8 bg-slate-800/30 rounded-2xl border border-slate-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm constantly working on new projects and services. Subscribe to get notified when new offerings become available, 
            or reach out to discuss custom solutions for your specific needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
