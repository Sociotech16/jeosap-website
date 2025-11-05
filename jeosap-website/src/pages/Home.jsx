import { motion } from "framer-motion";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <Hero />
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold text-blue-800 mb-6"
        >
          Who We Are
        </motion.h2>
        <p className="text-gray-700 leading-relaxed">
          The Jesuit Education Office – Southern Africa Province (JEO-SAP)
          serves as a support and coordination structure for all Jesuit schools
          within the Province, which includes Zimbabwe, Zambia, Malawi,
          Mozambique, South Africa and Botswana. Our mission is to form men and
          women who are “with and for others.”
        </p>
      </section>
    </div>
  );
};

export default Home;
