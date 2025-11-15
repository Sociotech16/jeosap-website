import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Drawer({ isOpen, onClose, navLinks }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay (click to close) */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-4/5 sm:w-1/2 md:w-1/3 bg-gradient-to-b from-blue-600 via-purple-600 to-pink-500 text-white z-50 shadow-2xl flex flex-col"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 120, damping: 20 }}
          >
            {/* Header */}
            <div className="flex justify-between items-center px-6 py-5 border-b border-white/20">
              <h2 className="font-bold text-lg tracking-wide">Menu</h2>
              <button onClick={onClose}>
                <FaTimes size={22} className="hover:text-yellow-300" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col px-6 py-6 space-y-4 overflow-y-auto">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block text-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-yellow-300 scale-105"
                        : "hover:text-yellow-200 hover:translate-x-2"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto border-t border-white/20 py-6 flex justify-center space-x-6">
              <FaFacebook className="hover:text-yellow-300 cursor-pointer transition" />
              <FaLinkedin className="hover:text-yellow-300 cursor-pointer transition" />
              <FaYoutube className="hover:text-yellow-300 cursor-pointer transition" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
