import { motion } from "framer-motion";

const programs = [
  {
    title: "Jesuit-Beit Teacher Development Program",
    desc: "Provided untrained teachers with professional qualifications, improving teaching quality across Jesuit schools.",
  },
  {
    title: "Happy Readers Literacy Program",
    desc: "Equipped teachers with reading tools and strategies to assist early learners struggling with literacy.",
  },
  {
    title: "Values-Based Education",
    desc: "Promotes moral and civic formation rooted in faith, justice, and social responsibility.",
  },
  {
    title: "Child Protection & Safeguarding",
    desc: "Established safeguarding policies and trained school staff to ensure safe learning environments.",
  },
  {
    title: "Interactive Teaching & Learning (ITL)",
    desc: "Introduces experiential learning and 21st-century pedagogies to foster creativity and engagement.",
  },
  {
    title: "Education for Sustainability",
    desc: "Promotes aquaponics, solar energy, and sustainable practices to integrate green education.",
  },
];

const Programs = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-blue-900 mb-10"
        >
          Our Programs & Projects
        </motion.h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 hover:shadow-lg border-t-4 border-blue-600"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-3">
                {p.title}
              </h3>
              <p className="text-gray-700">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programs;
