import { motion } from "framer-motion";
import { FaHandsHelping, FaSchool, FaGlobeAfrica } from "react-icons/fa";

const partners = [
  {
    name: "Jesuit Schools Network",
    desc: "Collaborating to uphold Ignatian values across Southern Africa.",
    icon: <FaSchool className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Catholic Education Commission",
    desc: "Working together to strengthen Catholic education and leadership.",
    icon: <FaHandsHelping className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Global Jesuit Education Network",
    desc: "Connecting Jesuit schools globally for shared learning and innovation.",
    icon: <FaGlobeAfrica className="text-blue-600 text-4xl mb-3" />,
  },
];

export default function Partners() {
  return (
    <section className="pt-28 pb-20 px-6 bg-gray-50 min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Our Partners</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          We work hand-in-hand with educational and faith-based institutions to advance the mission
          of Jesuit education and foster transformation in society.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-lg transition"
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {partner.icon}
            <h3 className="text-xl font-semibold text-blue-700 mb-2">{partner.name}</h3>
            <p className="text-gray-600">{partner.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">Interested in Partnering with Us?</h2>
        <a
          href="/contact"
          className="bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition"
        >
          Get in Touch
        </a>
      </motion.div>
    </section>
  );
}
