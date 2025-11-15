import { motion } from "framer-motion";
import { FaUserTie, FaUsersCog, FaBalanceScale } from "react-icons/fa";

export default function Governance() {
  return (
    <section className="pt-28 pb-20 px-6 bg-white min-h-screen">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold text-blue-800 mb-4">Governance & Leadership</h1>
        <p className="max-w-2xl mx-auto text-gray-600">
          JEOSAP operates under the Jesuit Southern Africa Province, guided by principles of integrity,
          collaboration, and service. Our leadership ensures alignment with the broader mission of Jesuit
          education worldwide.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center">
        <motion.div
          className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <FaUserTie className="text-blue-700 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Provincial Leadership</h3>
          <p className="text-gray-600">
            The Provincial, as the head of the Jesuit Southern Africa Province, provides overall vision and
            direction for JEOSAP’s mission and priorities.
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <FaUsersCog className="text-blue-700 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Education Advisory Board</h3>
          <p className="text-gray-600">
            Comprising educators, Jesuits, and lay collaborators who advise on academic, pastoral, and
            administrative matters to ensure excellence in Jesuit education.
          </p>
        </motion.div>

        <motion.div
          className="p-8 bg-gray-50 rounded-2xl shadow-md hover:shadow-lg transition"
          whileHover={{ y: -6, scale: 1.02 }}
        >
          <FaBalanceScale className="text-blue-700 text-4xl mb-4 mx-auto" />
          <h3 className="text-xl font-semibold text-blue-700 mb-2">Accountability & Stewardship</h3>
          <p className="text-gray-600">
            We uphold transparency and accountability through regular evaluations, reporting, and ethical
            stewardship of resources in service to our mission.
          </p>
        </motion.div>
      </div>

      <motion.div
        className="mt-20 max-w-3xl mx-auto text-center bg-blue-50 p-10 rounded-2xl"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl font-bold text-blue-800 mb-4">
          “Leadership in Jesuit education is service — guided by discernment, faith, and justice.”
        </h2>
        <p className="text-gray-600">
          — Adapted from Jesuit Education Leadership Charter
        </p>
      </motion.div>
    </section>
  );
}
