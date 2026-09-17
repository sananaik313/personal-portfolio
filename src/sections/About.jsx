import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Database, Code2, LineChart, Cpu, ArrowUpRight } from 'lucide-react';

const dashboardLogs = [
  { text: "Initializing Data Pipeline...", type: "info" },
  { text: "Connecting to PostgreSQL database...", type: "info" },
  { text: "PostgreSQL connected successfully.", type: "success" },
  { text: "Fetching table: sales_data_2026...", type: "info" },
  { text: "Rows retrieved: 45,281 rows", type: "success" },
  { text: "Cleaning: handling missing values...", type: "info" },
  { text: "Imputed 142 missing numerical values.", type: "success" },
  { text: "Running ETL process: Transform & Load...", type: "info" },
  { text: "Data loaded to Power BI Semantic Model.", type: "success" },
  { text: "Executing Python analytics script...", type: "info" },
  { text: "Importing pandas, numpy, scipy.stats...", type: "info" },
  { text: "Calculating correlation matrices...", type: "info" },
  { text: "Correlation Coefficient r = 0.84", type: "success" },
  { text: "Anomalies detected: 3 (outside 3σ)", type: "warning" },
  { text: "Generating interactive dashboard...", type: "info" },
  { text: "Refreshing visualization layout...", type: "info" },
  { text: "Dashboard fully loaded on localhost:5173", type: "success" },
  { text: "Standby: Awaiting query input...", type: "info" }
];

const About = () => {
  const [consoleLines, setConsoleLines] = useState([
    { text: "Initializing Data Pipeline...", type: "info" },
    { text: "Connecting to PostgreSQL database...", type: "info" },
    { text: "PostgreSQL connected successfully.", type: "success" }
  ]);

  useEffect(() => {
    let logIndex = 3;
    const interval = setInterval(() => {
      setConsoleLines((prev) => {
        const nextLines = [...prev, dashboardLogs[logIndex]];
        return nextLines.slice(-4); // Keep last 4 lines for layout sizing
      });
      logIndex = (logIndex + 1) % dashboardLogs.length;
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="section relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me</h2>
          
          <div className="about-content-layout">
            <div className="about-text-column">
              <div className="about-text-content">
                <p className="about-text-intro">
                  I am an Aspiring Data Analyst with hands-on experience in <span className="text-blue">Power BI, Tableau, Excel, SQL, and Python</span>, and a strong passion for transforming data into actionable insights.
                </p>
                
                <p>
                  Skilled in <span className="text-green">data cleaning, transformation, visualization, and dashboard development</span>. I am experienced in deriving actionable insights from datasets using analytical and statistical techniques.
                </p>
                
                <p>
                  My journey began with a Diploma in <span className="text-gold">Computer Engineering</span>, which gave me a solid technical foundation. I quickly found myself drawn to the intersection of data, programming, and decision-making.
                </p>
                
                <p>
                  I am currently seeking an opportunity to leverage my <span className="text-purple">data-driven problem-solving skills</span> in a business environment and contribute to impactful projects.
                </p>

                {/* Key Highlights Metrics Grid */}
                <div className="about-highlights-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '1.25rem', marginTop: '2.5rem' }}>
                  <div className="highlight-item" style={{ borderLeft: '3px solid var(--accent-gold)', paddingLeft: '0.85rem' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#fff', lineHeight: 1.2 }}>Diploma</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Computer Eng.</div>
                  </div>
                  <div className="highlight-item" style={{ borderLeft: '3px solid var(--accent-color)', paddingLeft: '0.85rem' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#fff', lineHeight: 1.2 }}>5+ Core</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>Analytics Tools</div>
                  </div>
                  <div className="highlight-item" style={{ borderLeft: '3px solid var(--accent-green)', paddingLeft: '0.85rem' }}>
                    <div style={{ fontSize: '1.35rem', fontWeight: 'bold', color: '#fff', lineHeight: 1.2 }}>10+ Dashboards</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>& Analytics Studies</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Data Dashboard Visual */}
            <div className="about-visual-column">
              <div className="db-container">
                {/* Dashboard Window Header */}
                <div className="db-header">
                  <div className="db-dots">
                    <span className="db-dot" />
                    <span className="db-dot" />
                    <span className="db-dot" />
                  </div>
                  <span className="db-title">Data Analyst Console v1.0</span>
                  <div className="db-status">
                    <span className="db-status-pulse" />
                    <span>ONLINE</span>
                  </div>
                </div>
                
                {/* Dashboard Dashboard Body */}
                <div className="db-body">
                  {/* Row 1: Key Metrics */}
                  <div className="db-stats-row">
                    <div className="db-stat-box">
                      <div className="db-stat-val blue">100%</div>
                      <div className="db-stat-label">Curiosity</div>
                    </div>
                    <div className="db-stat-box">
                      <div className="db-stat-val gold">20+</div>
                      <div className="db-stat-label">Reports</div>
                    </div>
                    <div className="db-stat-box">
                      <div className="db-stat-val green">1K+</div>
                      <div className="db-stat-label">SQL Queries</div>
                    </div>
                  </div>
                  
                  {/* Row 2: Interactive SVG & Mini Charts */}
                  <div className="db-charts-grid">
                    <div className="db-chart-card">
                      <div className="db-chart-title">Data Accuracy</div>
                      <div className="db-circle-wrap">
                        <svg className="db-circle-svg" width="90" height="90">
                          <circle className="db-circle-bg" cx="45" cy="45" r="36" />
                          <circle className="db-circle-fill" cx="45" cy="45" r="36" />
                        </svg>
                        <span className="db-circle-value">90%</span>
                      </div>
                    </div>
                    
                    <div className="db-chart-card">
                      <div className="db-chart-title">Tool Strengths</div>
                      <div className="db-bars-wrap">
                        <div className="db-bar-row">
                          <span className="db-bar-label">SQL</span>
                          <div className="db-bar-bg">
                            <div className="db-bar-fill" style={{ width: '92%', backgroundColor: 'var(--accent-color)' }} />
                          </div>
                        </div>
                        <div className="db-bar-row">
                          <span className="db-bar-label">Power BI</span>
                          <div className="db-bar-bg">
                            <div className="db-bar-fill" style={{ width: '85%', backgroundColor: 'var(--accent-gold)' }} />
                          </div>
                        </div>
                        <div className="db-bar-row">
                          <span className="db-bar-label">Python</span>
                          <div className="db-bar-bg">
                            <div className="db-bar-fill" style={{ width: '78%', backgroundColor: 'var(--accent-green)' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Row 3: Simulated Live Console Logs */}
                  <div className="db-console">
                    {consoleLines.map((line, index) => (
                      <div key={index} className={`db-console-line ${line.type}`}>
                        {`> ${line.text}`}
                      </div>
                    ))}
                    <div className="db-console-line">
                      <span>{`> `}</span>
                      <span className="db-console-cursor" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
