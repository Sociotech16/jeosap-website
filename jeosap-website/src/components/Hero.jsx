import { motion } from "framer-motion";

const Hero = () => (
  <div className="bg-blue-800 text-white text-center py-20 px-4">
    <motion.h1
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-4xl md:text-5xl font-bold"
    >
      Jesuit Education Office – Southern Africa Province
    </motion.h1>
    <p className="mt-4 text-lg text-blue-100 max-w-2xl mx-auto">
      Advancing the Kingdom of God through holistic, values-based education that
      empowers compassionate, competent leaders.
    </p>
  </div>
);

export default Hero;
