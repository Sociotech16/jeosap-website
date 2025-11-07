import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaInfoCircle,
  FaNetworkWired,
  FaBookOpen,
  FaHandshake,
  FaUsersCog,
  FaEnvelope,
} from "react-icons/fa";
import Hero from "../components/Hero";

const Home = () => {
  const pages = [

    {
      path: "/about",
      icon: <FaInfoCircle className="text-green-500 text-3xl mb-2" />,
      title: "About",
      description: "Learn about the history, leadership, and guiding principles of the Jesuit Education Office.",
    },
    {
      path: "/network",
      icon: <FaNetworkWired className="text-indigo-500 text-3xl mb-2" />,
      title: "Network",
      description: "Explore our network of Jesuit schools and partners across the Southern Africa Province.",
    },
    {
      path: "/programs",
      icon: <FaBookOpen className="text-purple-500 text-3xl mb-2" />,
      title: "Programs",
      description: "See our educational programs and initiatives that empower holistic formation.",
    },
    {
      path: "/partners",
      icon: <FaHandshake className="text-yellow-500 text-3xl mb-2" />,
      title: "Partners",
      description: "Meet our collaborators and institutions that support Jesuit education in the region.",
    },
    {
      path: "/governance",
      icon: <FaUsersCog className="text-red-500 text-3xl mb-2" />,
      title: "Governance",
      description: "Understand our structure, policies, and commitment to transparent leadership.",
    },
    {
      path: "/contact",
      icon: <FaEnvelope className="text-pink-500 text-3xl mb-2" />,
      title: "Contact",
      description: "Get in touch with us for inquiries, collaborations, or support.",
    },
  ];

  return (
    <div className="overflow-x-hidden">
      <Hero />

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-blue-900 mb-6"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-700 leading-relaxed text-lg max-w-3xl mx-auto"
        >
          The Jesuit Education Office – Southern Africa Province (JEO-SAP)
          serves as a support and coordination structure for all Jesuit schools
          within the Province, covering Zimbabwe, Zambia, Malawi, Mozambique,
          South Africa, and Botswana. Our mission is to form men and women who
          are “with and for others.”
        </motion.p>
      </section>

      {/* Explore Pages Section */}
      <section className="bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 text-white shadow-lg">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-bold text-yellow-400 mb-8"
          >
            Explore Our Pages
          </motion.h2>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {pages.map((page, index) => (
              <motion.div
                key={page.path}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1 p-6 border border-white/20"
              >
                <div className="flex flex-col items-center text-center">
                  {page.icon}
                  <h3 className="text-lg font-semibold text-white mb-2">{page.title}</h3>
                  <p className="text-gray-300 text-sm mb-3">{page.description}</p>
                  <Link
                    to={page.path}
                    className="mt-2 px-4 py-2 bg-yellow-400 text-gray-900 text-sm font-medium rounded-full hover:bg-yellow-300 transition"
                  >
                    Learn More
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
