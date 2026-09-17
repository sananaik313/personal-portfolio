import { motion } from 'framer-motion';
import { experience } from '../data/experience';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Work & Experience</h2>
          
          <div className="experience-timeline">
            {/* Main line */}
            <div className="timeline-line" />

            {experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="timeline-item"
              >
                {/* Glowing Dot on the line */}
                <div className="timeline-dot">
                  <Briefcase size={16} />
                </div>

                {/* Content Card */}
                <div className="timeline-content-card glass">
                  <div className="timeline-header">
                    <div>
                      <h3 className="timeline-position">{exp.position}</h3>
                      <h4 className="timeline-company">{exp.company}</h4>
                    </div>
                    <div className="timeline-duration-badge">
                      <Calendar size={14} />
                      <span>{exp.duration}</span>
                    </div>
                  </div>

                  <p className="timeline-desc">{exp.description}</p>

                  <ul className="timeline-tasks">
                    {exp.responsibilities.map((resp, i) => (
                      <li key={i} className="timeline-task-item">
                        <span className="task-bullet">✦</span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
