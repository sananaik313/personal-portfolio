import { motion } from 'framer-motion';
import { Database, BarChart3, Code2, LineChart, Table, FileSpreadsheet, Cpu, Binary } from 'lucide-react';

const skillCategories = [
  {
    title: "Data Analytics & Core Skills",
    icon: <BarChart3 size={28} />,
    color: "#38bdf8",
    skills: ["Data Analysis", "Data Cleaning", "Data Visualization", "Dashboard Development", "Statistics", "ETL Basics"]
  },
  {
    title: "Tools & Technologies",
    icon: <LineChart size={28} />,
    color: "#d4a373",
    skills: ["Power BI", "Tableau", "Excel", "Pivot Tables & Power Query"]
  },
  {
    title: "Programming & Databases",
    icon: <Code2 size={28} />,
    color: "#34d399",
    skills: ["SQL", "MySQL", "Python", "Pandas", "NumPy"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Technical Skills</h2>
          
          <div className="skills-grid-new">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.15 }}
                className="skill-category-card"
                style={{ '--card-accent': category.color }}
              >
                {/* Accent glow */}
                <div className="skill-card-glow" />
                
                {/* Header */}
                <div className="skill-card-header">
                  <div className="skill-card-icon" style={{ color: category.color }}>
                    {category.icon}
                  </div>
                  <h3 className="skill-card-title">{category.title}</h3>
                </div>

                {/* Skills */}
                <div className="skill-items">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: catIndex * 0.1 + skillIndex * 0.05 }}
                      className="skill-item"
                    >
                      <span className="skill-item-dot" style={{ backgroundColor: category.color }} />
                      <span className="skill-item-text">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
