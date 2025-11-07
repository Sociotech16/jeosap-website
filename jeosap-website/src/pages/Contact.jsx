import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-blue-50 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-blue-900 mb-8"
        >
          Contact Us
        </motion.h1>
        <p className="text-gray-700 mb-12">
          We’d love to hear from you. Whether you’re a partner, educator, or supporter,
          feel free to reach out.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaMapMarkerAlt className="text-blue-800 text-3xl mx-auto mb-3" />
            <p className="text-gray-700">
              37 Admiral Tait Road, Marlborough, Harare, Zimbabwe
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaPhoneAlt className="text-blue-800 text-3xl mx-auto mb-3" />
            <p className="text-gray-700">
            +263 772 189 813 / +263 772 189 812 / +263 772 276 529
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md">
            <FaEnvelope className="text-blue-800 text-3xl mx-auto mb-3" />
            <p className="text-gray-700">info@jeosap.org</p>
          </div>
        </div>

        <form className="bg-white max-w-3xl mx-auto rounded-xl p-8 shadow-md space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-blue-800 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-700"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
