import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import Drawer from "./Drawer";
import logo from "/logo.png"; // Ensure your logo is placed in the public folder

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/network", label: "Network" },
    { path: "/programs", label: "Programs" },
    { path: "/partners", label: "Partners" },
    { path: "/governance", label: "Governance" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-900 via-indigo-700 to-purple-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between md:justify-center px-6 py-3 relative">
        
        {/* Left Section (Logo + Title) */}
        <div className="absolute left-6 flex items-center space-x-3">
          <div className="bg-white rounded-full p-1 shadow-md flex items-center justify-center">
            <img
              src={logo}
              alt="JEOSAP Logo"
              className="w-10 h-10 object-contain rounded-full"
            />
          </div>
          <NavLink
            to="/"
            className="text-2xl font-extrabold tracking-wide hover:text-yellow-300 transition"
          >
            JEO-SAP
          </NavLink>
        </div>

        {/* Center Section (Links) */}
        <div className="hidden md:flex space-x-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative tracking-wide transition hover:text-yellow-300 ${
                  isActive ? "text-yellow-300" : ""
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-300 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Right Section (Socials + Mobile Menu) */}
        <div className="absolute right-6 flex items-center space-x-4">
          {/* Social Icons (Desktop Only) */}
          <div className="hidden md:flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=100063538092294"
              className="hover:text-yellow-300 transition transform hover:scale-110"
            >
              <FaFacebook size={18} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition transform hover:scale-110"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="#"
              className="hover:text-yellow-300 transition transform hover:scale-110"
            >
              <FaYoutube size={18} />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setDrawerOpen(true)}
          >
            <FaBars size={22} />
          </button>
        </div>
      </div>

      {/* Drawer Component (Mobile) */}
      <Drawer
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        navLinks={navLinks}
      />
    </nav>
  );
}
