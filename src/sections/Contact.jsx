import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, Download, FileText, CheckCircle } from 'lucide-react';
import { GithubIcon as FiGithub, LinkedinIcon as FiLinkedin } from '../components/Icons';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      // Trigger Toast Notification
      setShowToast(true);
      
      // Clear Form Fields
      setFormData({ name: '', email: '', message: '' });
      
      // Auto Hide Toast
      setTimeout(() => {
        setShowToast(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="contact-section section">
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '100%',
        maxWidth: '48rem',
        height: '1px',
        background: 'linear-gradient(to right, transparent, var(--border-color), transparent)',
        pointerEvents: 'none'
      }} />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div style={{ maxWidth: '48rem', margin: '0 auto 4rem', textAlign: 'center' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '1rem', color: '#fff' }}>
              Let's build something useful.
            </h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)' }}>
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
          </div>

          <div className="contact-layout">
            
            {/* Contact Info & Resume Card */}
            <div className="card contact-info-card">
              <div className="contact-status-box">
                {/* Active Availability Badge */}
                <div className="availability-badge">
                  <span className="availability-dot" />
                  <span>Open for Internships & Junior Roles</span>
                </div>
                
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                  Want to know more about me?
                </h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6' }}>
                  Feel free to reach out for collaborations, dashboard project queries, or just a friendly hello. You can also view or download my resume below.
                </p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                  <a href="/resume.pdf" target="_blank" className="btn btn-primary">
                    <FileText size={18} />
                    View Resume
                  </a>
                  <a href="/resume.pdf" download className="btn btn-outline">
                    <Download size={18} />
                    Download
                  </a>
                </div>
              </div>
              
              <div style={{ paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-tertiary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Connect with me
                </div>
                <div className="contact-social-grid">
                  <a href="mailto:sananaik313@gmail.com" className="contact-social-link" title="Email Me">
                    <Mail size={20} />
                  </a>
                  <a href="https://github.com/sananaik313" target="_blank" rel="noopener noreferrer" className="contact-social-link github" title="GitHub Profile">
                    <FiGithub size={20} />
                  </a>
                  <a href="https://www.linkedin.com/in/sana-naik-3a596730b/" target="_blank" rel="noopener noreferrer" className="contact-social-link linkedin" title="LinkedIn Profile">
                    <FiLinkedin size={20} />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>
                Send a Message
              </h3>
              
              <form style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="John Doe"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="contact-input"
                    placeholder="john@example.com"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="contact-textarea"
                    placeholder="Hello Sana, I'd like to discuss..."
                    style={{ resize: 'none' }}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem', cursor: 'pointer' }}>
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>

      {/* Success Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="toast-success"
          >
            <div className="toast-icon">
              <CheckCircle size={22} />
            </div>
            <div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Message Sent!</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.15rem' }}>
                Thank you, I'll get back to you shortly.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
