import { motion } from "framer-motion";

const leaders = [
  { name: "Fr. Joseph Arimoso, SJ", role: "Delegate of Education (Director)" },
  { name: "Mrs. Lynette Ndlovu", role: "Education Coordinator (joined in 2016)" },
  { name: "Mr. Victor Gweshe", role: "Programmes Officer (joined in 2015)" },
];

const Structure = () => {
  return (
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 mb-10"
        >
          Our Structure
        </motion.h1>

        <p className="text-gray-700 max-w-3xl mx-auto mb-12">
          The Jesuit Education Office operates under the leadership of the Delegate
          for Education, supported by a professional team based in Marlborough, Harare,
          Zimbabwe — the coordination hub for all Jesuit schools in the Province.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {leaders.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg border-t-4 border-blue-700"
            >
              <h3 className="text-lg font-semibold text-blue-800">{l.name}</h3>
              <p className="text-gray-600 text-sm mt-2">{l.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Structure;
