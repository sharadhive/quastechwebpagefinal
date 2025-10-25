import { motion } from "framer-motion";

const JourneySection = () => {
  return (
    <section className="w-full bg-white py-16 lg:py-24">
      <div className="w-full">
        {/* Section Title */}
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Our Placement Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Follow the path from learning to placement success
          </p>
        </div>
        {/* Journey Banner - Edge to Edge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img 
            src="/images/careerpath.jpg" 
            alt="Your Journey With Us" 
            className="w-full h-auto object-cover"
          />
        </motion.div> */}

        {/* Additional Journey Banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full"
        >
          <img 
            src="/images/carrierpath.png" 
            alt="Career Path Journey" 
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;
