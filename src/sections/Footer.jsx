import { motion } from 'framer-motion';
import { Mail, ArrowUp, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Mail size={18} />, href: 'mailto:sananaik313@gmail.com', label: 'Email', color: '#38bdf8' },
    { icon: <GithubIcon size={18} />, href: 'https://github.com/sananaik313', label: 'GitHub', color: '#f5f5f5', external: true },
    { icon: <LinkedinIcon size={18} />, href: 'https://www.linkedin.com/in/sana-naik-3a596730b/', label: 'LinkedIn', color: '#818cf8', external: true },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <footer className="footer-section">
      {/* Animated gradient divider */}
      <div className="footer-gradient-line">
        <div className="footer-gradient-line-glow"></div>
      </div>

      {/* Subtle background ambient glow */}
      <div className="footer-ambient-glow"></div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Left: Branding */}
          <motion.div className="footer-brand" variants={itemVariants}>
            <a href="#home" className="footer-logo">
              <span className="footer-logo-text">Sana</span>
              <span className="footer-logo-dot">.</span>
            </a>
            <p className="footer-tagline">
              Data Analytics & Developer — turning raw data into meaningful insights and ideas into reality.
            </p>
            <div className="footer-badge">
              <span className="footer-badge-dot"></span>
              Available for opportunities
            </div>
          </motion.div>

          {/* Center: Quick Nav */}
          <motion.div className="footer-nav" variants={itemVariants}>
            <h4 className="footer-nav-heading">Quick Links</h4>
            <div className="footer-nav-links">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="footer-nav-link"
                  whileHover={{ x: 6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <span className="footer-nav-link-arrow">→</span>
                  {link.label}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: Social */}
          <motion.div className="footer-social-col" variants={itemVariants}>
            <h4 className="footer-nav-heading">Connect</h4>
            <div className="footer-social-links">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className="footer-social-icon"
                  title={social.label}
                  aria-label={social.label}
                  style={{ '--social-color': social.color }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
            <p className="footer-connect-text">
              Let's build something great together.
            </p>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <p className="footer-copyright">
            © {new Date().getFullYear()} Sana Naik. Crafted with
            <motion.span
              style={{ display: 'inline-flex', margin: '0 4px', color: '#f472b6', verticalAlign: 'middle' }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart size={14} fill="#f472b6" />
            </motion.span>
          </p>
          <motion.button
            className="footer-back-to-top"
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Back to top"
          >
            <ArrowUp size={14} />
            <span>Back to Top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
