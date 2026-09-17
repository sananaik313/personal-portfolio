import { motion } from 'framer-motion';
import { education } from '../data/education';
import { GraduationCap, Calendar } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section education-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Education Journey</h2>
          
          <div className="education-timeline">
            {/* Main line */}
            <div className="edu-timeline-line" />

            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="edu-timeline-item"
              >
                {/* Timeline icon */}
                <div className="edu-timeline-dot">
                  <GraduationCap size={16} />
                </div>

                {/* Content Card */}
                <div className="edu-content-card glass">
                  <div className="edu-header">
                    <div>
                      <h3 className="edu-degree">{edu.degree}</h3>
                      <h4 className="edu-institution">{edu.institution}</h4>
                    </div>
                    <div className="edu-status-badge">
                      <Calendar size={14} />
                      <span>{edu.status}</span>
                    </div>
                  </div>
                  
                  {edu.description && (
                    <p className="edu-desc">{edu.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
