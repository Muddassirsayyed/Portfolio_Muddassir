import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const PROJECTS = [
  {
    title: 'Excel Analytics Platform',
    emoji: '📊',
    desc: 'MERN Stack based analytics dashboard with Excel upload, visualization, interactive charts, and admin dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Recharts'],
    github: 'https://github.com/Muddassirsayyed',
    demo: '#',
    color: '#06b6d4',
    badge: 'Full Stack',
  },
  {
    title: 'QR Based Ordering System',
    emoji: '📱',
    desc: 'Smart restaurant ordering system with QR code integration, real-time order management, and modern UI/UX.',
    tech: ['React', 'Node.js', 'MongoDB', 'QR Code'],
    github: 'https://github.com/Muddassirsayyed',
    demo: '#',
    color: '#a855f7',
    badge: 'MERN Stack',
  },
  {
    title: 'AI Automation Project',
    emoji: '🤖',
    desc: 'Automated ticket handling system with AI workflow automation and smart response generation.',
    tech: ['Python', 'AI/ML', 'Automation', 'APIs'],
    github: 'https://github.com/Muddassirsayyed',
    demo: '#',
    color: '#3b82f6',
    badge: 'AI/ML',
  },
  {
    title: 'HFT Trading Bot',
    emoji: '📈',
    desc: 'Python-based high-frequency trading automation using scalping strategy with API integration.',
    tech: ['Python', 'REST APIs', 'Trading', 'Automation'],
    github: 'https://github.com/Muddassirsayyed',
    demo: '#',
    color: '#10b981',
    badge: 'Automation',
  },
  {
    title: 'Code Assistant',
    emoji: '💡',
    desc: 'AI-powered coding helper built in Python that assists developers with code review, suggestions, and debugging.',
    tech: ['Python', 'AI/ML', 'OpenAI', 'CLI'],
    github: 'https://github.com/Muddassirsayyed',
    demo: '#',
    color: '#f59e0b',
    badge: 'AI Tool',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="projects"
      ref={ref}
      className="relative bg-grid"
      style={{ padding: '6rem 1.5rem', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '20%',
          right: '-10%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            featured projects
          </div>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f0f9ff',
              marginBottom: '1rem',
            }}
          >
            Things I've{' '}
            <span className="gradient-text">Built</span>
          </h2>
          <p style={{ color: 'rgba(240,249,255,0.5)', maxWidth: '500px', margin: '0 auto' }}>
            Real-world projects that solve practical problems and showcase my technical skills.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Top gradient line */}
              <div
                style={{
                  height: '2px',
                  background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
                }}
              />

              {/* Card Header */}
              <div
                style={{
                  padding: '1.5rem 1.5rem 0',
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                }}
              >
                <div
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '14px',
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.8rem',
                    boxShadow: `0 0 20px ${project.color}20`,
                  }}
                >
                  {project.emoji}
                </div>

                <span
                  style={{
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '0.65rem',
                    padding: '0.25rem 0.625rem',
                    borderRadius: '999px',
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}35`,
                    color: project.color,
                    letterSpacing: '0.05em',
                  }}
                >
                  {project.badge}
                </span>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1rem 1.5rem 0' }}>
                <h3
                  style={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: '#f0f9ff',
                    marginBottom: '0.625rem',
                  }}
                >
                  {project.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.85rem',
                    color: 'rgba(240,249,255,0.5)',
                    lineHeight: 1.65,
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.desc}
                </p>

                {/* Tech Stack */}
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.4rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  {project.tech.map((t) => (
                    <span key={t} className="tech-badge">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div
                style={{
                  padding: '0 1.5rem 1.5rem',
                  display: 'flex',
                  gap: '0.75rem',
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    background: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(255,255,255,0.08)',
                    color: 'rgba(240,249,255,0.7)',
                    fontSize: '0.8rem',
                    fontFamily: '"Fira Code", monospace',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = `${project.color}50`;
                    e.currentTarget.style.color = project.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    e.currentTarget.style.color = 'rgba(240,249,255,0.7)';
                  }}
                >
                  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
                <a
                  href={project.demo}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.4rem',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    background: `${project.color}15`,
                    border: `1px solid ${project.color}30`,
                    color: project.color,
                    fontSize: '0.8rem',
                    fontFamily: '"Fira Code", monospace',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${project.color}25`;
                    e.currentTarget.style.boxShadow = `0 0 20px ${project.color}30`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = `${project.color}15`;
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <span>↗</span> Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View more */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          style={{ textAlign: 'center', marginTop: '3rem' }}
        >
          <a
            href="https://github.com/Muddassirsayyed"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-neon"
          >
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
