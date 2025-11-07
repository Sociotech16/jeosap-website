import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-gray-200 flex flex-col justify-between">
      {/* Overlay for subtle glass depth effect */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      {/* Desktop Layout */}
      <div className="relative hidden md:grid grid-cols-3 gap-10 max-w-7xl mx-auto px-6 py-5 text-sm">
        {/* Left Section */}
        <div>
          <h2 className="text-lg font-bold text-white mb-2">
            Jesuit Education Office
          </h2>
          <p className="italic text-gray-300 text-xs">
            “Forming men and women with and for others.”
          </p>
        </div>

        {/* Middle Section */}
        <div className="text-center">
          <h3 className="text-base font-semibold text-white mb-2">
            Quick Links
          </h3>
          <ul className="flex justify-center space-x-5 text-xs">
            {[
              { path: "/", label: "Home" },
              { path: "/about", label: "About" },
              { path: "/programs", label: "Programs" },
              { path: "/partners", label: "Partners" },
              { path: "/governance", label: "Governance" },
              { path: "/contact", label: "Contact" },
            ].map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="hover:text-yellow-300 transition duration-300 ease-in-out"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <ul className="space-y-1 text-xs">
            <li className="flex items-center justify-end gap-2">
              <FaMapMarkerAlt className="text-yellow-400" />
              <span>37 Admiral Tait Rd, Marlborough</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <FaPhone className="text-yellow-400" />
              <span>+263 772 189 812 / +263 772 276 529</span>
            </li>
            <li className="flex items-center justify-end gap-2">
              <FaEnvelope className="text-yellow-400" />
              <span>info@jeosap.org</span>
            </li>
          </ul>

          {/* Social Icons */}
          <div className="flex justify-end space-x-4 mt-2">
            <a
              href="#"
              className="hover:text-yellow-400 transition transform hover:scale-110"
            >
              <FaFacebook size={16} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition transform hover:scale-110"
            >
              <FaLinkedin size={16} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-400 transition transform hover:scale-110"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative md:hidden flex flex-col items-center text-center px-4 py-4 text-sm">
        <h3 className="text-base font-semibold text-white mb-2">Contact Us</h3>
        <ul className="space-y-1 text-xs mb-3">
          <li className="flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" />
            <span>37 Admiral Tait Rd, Marlborough</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaPhone className="text-yellow-400" />
            <span>+263 772 189 813 / +263 772 189 812 / +263 772 276 529</span>
          </li>
          <li className="flex items-center justify-center gap-2">
            <FaEnvelope className="text-yellow-400" />
            <span>info@jeosap.org</span>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex justify-center space-x-5 mt-1">
          <a
            href="https://www.facebook.com/profile.php?id=100063538092294"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaFacebook size={18} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href="#"
            className="hover:text-yellow-400 transition transform hover:scale-110"
          >
            <FaYoutube size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Section (Always Visible) */}
      <div className="relative text-center py-2 text-gray-300 text-xs">
        <p>© {currentYear} Jesuit Education Office – Southern Africa Province</p>
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
}
