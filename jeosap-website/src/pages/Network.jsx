import { motion } from "framer-motion";

const stats = [
  { country: "Zimbabwe", schools: 18 },
  { country: "Zambia", schools: 3 },
  { country: "Malawi", schools: 2 },
  { country: "Mozambique", schools: 1 },
];

const Network = () => {
  return (
    <div className="py-16 bg-white text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-blue-900 mb-10"
      >
        Our Network
      </motion.h1>
      <p className="text-gray-700 max-w-3xl mx-auto mb-10">
        The Jesuit Education Office supports a growing network of 24 schools across the
        Southern Africa Province, united by faith, excellence, and holistic education.
      </p>

      <div className="flex flex-wrap justify-center gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-100 border border-blue-300 rounded-2xl px-6 py-8 shadow-sm w-56"
          >
            <h3 className="text-xl font-bold text-blue-800">{s.country}</h3>
            <p className="text-3xl font-semibold mt-2 text-blue-700">{s.schools}</p>
            <p className="text-gray-600">schools</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Network;
