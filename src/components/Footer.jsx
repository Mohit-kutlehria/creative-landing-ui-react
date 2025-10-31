import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { fadeIn, textVariant } from '../utils/motion';

const footerLinks = {
  company: [
    { name: 'About', href: '/about' },
    { name: 'Terms of Use', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'How it Works', href: '/how-it-works' },
    { name: 'Contact Us', href: '/contact' },
  ],
  getHelp: [
    { name: 'Support Career', href: '/career' },
    { name: '24h Service', href: '/support' },
    { name: 'Quick Chat', href: '/chat' },
  ],
  support: [
    { name: 'FAQ', href: '/faq' },
    { name: 'Policy', href: '/policy' },
    { name: 'Business', href: '/business' },
  ],
  contact: [
    { name: 'WhatsApp', href: '/whatsapp' },
    { name: 'Support 24', href: '/support' },
  ],
};

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn('up', 0.2)}
      initial="hidden"
      whileInView="show"
      className="bg-gray-50 mt-14 px-4"
    >
      <div className="section-container">
        {/* Top Grid */}
        <motion.div
          variants={fadeIn('up', 0.3)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12"
        >
          {/* Brand Column */}
          <motion.div
            variants={fadeIn('right', 0.4)}
            className="lg:col-span-4 text-center md:text-left"
          >
            <motion.div
              variants={fadeIn('down', 0.5)}
              className="flex items-center justify-center md:justify-start gap-1 mb-6"
            >
              <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75"></div>
              <div className="w-4 h-4 bg-red-500 rounded-full -ml-2"></div>
              <h2 className="text-xl font-medium ml-1">The Next Design</h2>
            </motion.div>

            <motion.p
              variants={fadeIn('up', 0.6)}
              className="text-gray-600 mb-6"
            >
              The copy warned the Little Blind Text, that where it came from it
              would have been rewritten a thousand times.
            </motion.p>

            {/* Social Links */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              className="flex justify-center md:justify-start gap-4"
            >
              <motion.a
                aria-label="Visit our Facebook page"
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-600 hover:text-white transition-colors"
              >
                <FaFacebookF className="w-5 h-5" />
              </motion.a>
              <motion.a
                aria-label="Visit our Twitter page"
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </motion.a>
              <motion.a
                aria-label="Visit our LinkedIn page"
                whileHover={{ scale: 1.1 }}
                href="#"
                className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:bg-blue-700 hover:text-white transition-colors"
              >
                <FaLinkedinIn className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Links Columns */}
          <motion.div variants={fadeIn('left', 0.4)} className="lg:col-span-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  variants={fadeIn('up', 0.2 * (index + 1))}
                >
                  <motion.h3
                    variants={textVariant(0.2)}
                    className="text-lg font-medium mb-4"
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </motion.h3>
                  <motion.ul variants={fadeIn('up', 0.3)} className="space-y-3">
                    {links.map((link, i) => (
                      <motion.li key={i} variants={fadeIn('up', 0.1 * (i + 1))}>
                        <motion.a
                          whileHover={{ x: 5 }}
                          href={link.href}
                          className="text-gray-600 hover:text-gray-900 transition-colors"
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeIn('up', 0.8)}
          className="border-t border-gray-200 mt-12 pt-8"
        >
          <motion.div
            variants={fadeIn('up', 0.9)}
            className="flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <motion.p
              variants={fadeIn('right', 1.0)}
              className="text-gray-600 text-sm"
            >
              © {new Date().getFullYear()} somecompanycode.example
            </motion.p>
            <motion.p
              variants={fadeIn('left', 1.0)}
              className="text-gray-600 text-sm"
            >
              Created by Your Name
            </motion.p>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default React.memo(Footer);
