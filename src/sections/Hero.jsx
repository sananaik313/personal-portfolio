import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail } from 'lucide-react';
import { GithubIcon as FiGithub, LinkedinIcon as FiLinkedin } from '../components/Icons';
import AnimatedBackground from '../components/AnimatedBackground';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 },
    },
  };

  return (
    <section id="home" className="hero-section">
      <AnimatedBackground />
      <div className="hero-gradient-overlay"></div>
      
      <div className="container hero-content-wrapper">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-content"
        >
          <motion.div variants={itemVariants} className="hero-subtitle-wrapper">
            <h2 className="hero-subtitle">DATA ANALYTICS AND DEVELOPER</h2>
          </motion.div>

          <motion.h1 variants={itemVariants} className="hero-title">
            Sana Naik
          </motion.h1>

          <motion.p variants={itemVariants} className="hero-description">
            I analyze data, build dashboards, and develop useful digital products.
          </motion.p>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary">
              Let's Connect
              <ArrowRight size={18} />
            </a>
            <a href="/resume.pdf" target="_blank" className="btn btn-outline">
              View Resume
            </a>
          </motion.div>

          {/* Social Links in Hero */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '1.25rem', marginTop: '2.5rem', alignItems: 'center' }}>
            <a 
              href="mailto:sananaik313@gmail.com" 
              style={{ 
                color: 'var(--text-secondary)', 
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
              }}
              title="Email Me"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'var(--accent-color)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <Mail size={20} />
            </a>
            
            <a 
              href="https://github.com/sananaik313" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'var(--text-secondary)', 
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
              }}
              title="GitHub Profile"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = '#fff';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <FiGithub size={20} />
            </a>

            <a 
              href="https://www.linkedin.com/in/sana-naik-3a596730b/" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ 
                color: 'var(--text-secondary)', 
                transition: 'all 0.3s ease',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                border: '1px solid var(--border-color)',
              }}
              title="LinkedIn Profile"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.borderColor = 'var(--accent-secondary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'none';
              }}
            >
              <FiLinkedin size={20} />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
