import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaTwitter, FaCertificate, FaShieldAlt } from "react-icons/fa";

// Premium Footer Component
export default function Footer() {
  const footerLinks = [
    {
      title: "Navigation",
      links: [
        { path: "/", name: "Accueil" },
        { path: "/ref", name: "Référence" },
        { path: "/about", name: "À Propos" },
        { path: "/contact", name: "Contact" },
      ],
    },
    {
      title: "Légal",
      links: [
        { path: "/privacy", name: "Confidentialité" },
        { path: "/terms", name: "Conditions" },
        { path: "/cookies", name: "Cookies" },
      ],
    },
    {
      title: "Ressources",
      links: [
        { path: "/blog", name: "Blog" },
        { path: "/faq", name: "FAQ" },
        { path: "/support", name: "Support" },
      ],
    },
  ];

  return (
    <motion.footer 
      className="bg-gradient-to-br from-blue-900 to-blue-700 text-white pt-16 pb-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Info */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="space-y-6"
          >
            <div className="flex items-center space-x-3">
              <FaCertificate className="text-3xl text-yellow-400" />
              <h2 className="text-2xl font-bold">
                <span className="text-yellow-400">Certif</span>Sure
              </h2>
            </div>
            <p className="text-blue-100 leading-relaxed">
              La solution ultime pour la vérification sécurisée de certifications et attestations.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white hover:text-yellow-400 text-xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white hover:text-yellow-400 text-xl"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="text-white hover:text-yellow-400 text-xl"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold flex items-center">
                <FaShieldAlt className="mr-2 text-yellow-400" />
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      to={link.path}
                      className="text-blue-100 hover:text-yellow-400 transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Newsletter</h3>
            <p className="text-blue-100">
              Abonnez-vous pour recevoir nos dernières actualités.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full px-4 py-2 rounded-lg bg-blue-800 border border-blue-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 text-white placeholder-blue-300"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-yellow-400 text-blue-900 w-full py-2 rounded-lg font-semibold shadow-lg hover:bg-yellow-300 transition-colors"
              >
                S'abonner
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-blue-600 mt-12 pt-8 text-center text-blue-200"
        >
          <p>
            © {new Date().getFullYear()} CertifSure. Tous droits réservés.
          </p>
          <p className="mt-2 text-sm">
            Conçu avec ❤️ pour une vérification sécurisée
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}