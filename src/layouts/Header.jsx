import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaCertificate } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// Animation variants
const headerVariants = {
  hidden: { y: -100 },
  visible: { 
    y: 0,
    transition: { 
      duration: 0.5,
      ease: [0.6, 0.01, -0.05, 0.95]
    }
  }
};

const mobileMenuVariants = {
  open: { 
    opacity: 1,
    height: "auto",
    transition: { 
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  },
  closed: { 
    opacity: 0,
    height: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.05,
      staggerDirection: -1
    } 
  }
};

const linkVariants = {
  open: { 
    opacity: 1,
    y: 0 
  },
  closed: { 
    opacity: 0,
    y: -10 
  }
};

// Premium Header Component
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = useMemo(() => [
    { path: "/", name: "Accueil" },
    { path: "/ref", name: "Référence" },
    { path: "/about", name: "À Propos" },
  ], []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <motion.header 
      className="bg-gradient-to-r from-blue-900/90 to-blue-700/90 backdrop-blur-md text-white shadow-lg py-4 sticky top-0 z-50"
      initial="hidden"
      animate="visible"
      variants={headerVariants}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo with animation */}
        <motion.div 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center space-x-2"
        >
          <FaCertificate className="text-2xl text-yellow-400" />
          <Link 
            to="/" 
            className="text-2xl font-bold hover:text-gray-200 transition-colors"
            aria-label="Retour à l'accueil"
          >
            <span className="text-yellow-400">Certif</span>Sure
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-8 items-center !important">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`relative text-lg font-medium transition-colors duration-300 hover:text-yellow-400 ${
                location.pathname === link.path ? "text-yellow-400" : "text-white"
              }`}
              aria-current={location.pathname === link.path ? "page" : undefined}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 top-full mt-1 h-0.5 w-full bg-yellow-400"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition-colors"
          >
            Contact
          </motion.button>
        </nav>

        {/* Mobile Menu Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <HiX className="h-8 w-8" />
          ) : (
            <HiMenuAlt3 className="h-8 w-8" />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu Dropdown */}
      <motion.div
        initial="closed"
        animate={isMobileMenuOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        className="md:hidden bg-blue-800/95 backdrop-blur-sm shadow-xl overflow-hidden"
      >
        <nav className="flex flex-col space-y-2 py-4 px-6">
          {navLinks.map((link) => (
            <motion.div key={link.path} variants={linkVariants}>
              <Link
                to={link.path}
                className={`block text-lg font-medium py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === link.path
                    ? "bg-blue-700 text-yellow-400"
                    : "text-white hover:bg-blue-700"
                }`}
                onClick={closeMobileMenu}
                aria-current={location.pathname === link.path ? "page" : undefined}
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
          <motion.button
            variants={linkVariants}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-yellow-400 text-blue-900 px-6 py-3 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition-colors mt-2"
          >
            Contact
          </motion.button>
        </nav>
      </motion.div>
    </motion.header>
  );
}