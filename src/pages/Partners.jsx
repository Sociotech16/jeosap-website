import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaSchool,
  FaGlobeAfrica,
  FaDonate,
  FaBookReader,
  FaBroadcastTower,
  FaMoneyCheckAlt,
} from "react-icons/fa";

const partners = [
  {
    name: "Education Ministries in Southern Africa",
    desc: "Work closely with Jesuit schools to ensure alignment with national education policies, support curriculum standards, and promote quality learning outcomes across the region.",
    icon: <FaSchool className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Jesuit Schools Network",
    desc: "Partnering on key initiatives that advance Ignatian values and enhance educational quality.",
    icon: <FaSchool className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Jesuit Missions UK",
    desc: "Supporting faith-driven education initiatives across the Province through funding and mission collaboration.",
    icon: <FaDonate className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Porticus Foundation",
    desc: "Promoting transformative and values-based education through long-term strategic support.",
    icon: <FaHandsHelping className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Swiss Academy for Development (SA4D)",
    desc: "Partnering on educational development, research, and community-based learning projects.",
    icon: <FaGlobeAfrica className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Beit Trust",
    desc: "Supporting infrastructure development and educational improvement across Southern Africa.",
    icon: <FaSchool className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "ZCBC Education Secretariat",
    desc: "Collaborating within the national Catholic education framework to strengthen policy and mission alignment.",
    icon: <FaBookReader className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Jesuit Communications (JesCom)",
    desc: "Providing media, storytelling, and advocacy support to amplify the mission of Jesuit Education.",
    icon: <FaBroadcastTower className="text-blue-600 text-4xl mb-3" />,
  },
  {
    name: "Jesuit Development Office",
    desc: "Offering financial administration and support.",
    icon: <FaMoneyCheckAlt className="text-blue-600 text-4xl mb-3" />,
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
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Partnerships & Collaborations</h1>
        <p className="max-w-3xl mx-auto text-gray-600">
          We collaborate with partners who share our vision of faith-driven, transformative education. 
          Their support strengthens our mission, expands our impact, and promotes sustainable development across our school network.
        </p>
      </motion.div>

      {/* Partner Cards */}
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

      {/* CTA Section */}
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
