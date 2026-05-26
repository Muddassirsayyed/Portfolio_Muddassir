import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const SKILL_CATEGORIES = [
  {
    title: 'Frontend',
    icon: '🎨',
    color: '#06b6d4',
    skills: [
      { name: 'HTML', level: 95 },
      { name: 'CSS', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'React', level: 82 },
      { name: 'Tailwind CSS', level: 88 },
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    color: '#a855f7',
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 78 },
      { name: 'MongoDB', level: 75 },
      { name: 'SQL', level: 70 },
    ],
  },
  {
    title: 'Programming',
    icon: '💻',
    color: '#3b82f6',
    skills: [
      { name: 'Python', level: 90 },
      { name: 'Java', level: 65 },
      { name: 'C++', level: 60 },
    ],
  },
  {
    title: 'AI & Tools',
    icon: '🤖',
    color: '#10b981',
    skills: [
      { name: 'Machine Learning', level: 78 },
      { name: 'AI Automation', level: 75 },
      { name: 'Git & GitHub', level: 88 },
      { name: 'REST APIs', level: 85 },
      { name: 'Firebase', level: 72 },
      { name: 'VS Code', level: 95 },
    ],
  },
];

const ORBIT_ICONS = [
  { icon: '⚛️', label: 'React' },
  { icon: '🐍', label: 'Python' },
  { icon: '🔷', label: 'Node.js' },
  { icon: '🍃', label: 'MongoDB' },
  { icon: '🤖', label: 'ML' },
  { icon: '🔥', label: 'Firebase' },
  { icon: '📊', label: 'TensorFlow' },
  { icon: '🐙', label: 'GitHub' },
];

function SkillBar({ name, level, color, inView, delay }) {
  return (
    <div style={{ marginBottom: '0.875rem' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginBottom: '0.3rem',
        }}
      >
        <span
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.78rem',
            color: 'rgba(240,249,255,0.7)',
          }}
        >
          {name}
        </span>
        <span
          style={{
            fontFamily: 'Orbitron, monospace',
            fontSize: '0.68rem',
            color,
          }}
        >
          {level}%
        </span>
      </div>
      <div className="progress-bar">
        <motion.div
          className="progress-fill"
          style={{
            background: `linear-gradient(90deg, ${color}, ${color}99)`,
            boxShadow: `0 0 10px ${color}60`,
          }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ delay: delay, duration: 1.2, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

function OrbitDisplay() {
  return (
    <div className="orbit-container" style={{ width: '280px', height: '280px' }}>
      {/* Rings */}
      <div
        className="orbit-ring"
        style={{ width: '240px', height: '240px', top: '20px', left: '20px' }}
      />
      <div
        className="orbit-ring"
        style={{
          width: '160px',
          height: '160px',
          top: '60px',
          left: '60px',
          borderColor: 'rgba(168,85,247,0.15)',
        }}
      />

      {/* Center */}
      <div
        style={{
          width: '70px',
          height: '70px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.15))',
          border: '2px solid rgba(6,182,212,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          boxShadow: '0 0 30px rgba(6,182,212,0.3)',
          zIndex: 2,
          position: 'relative',
        }}
      >
        ⚡
      </div>

      {/* Orbiting icons */}
      {ORBIT_ICONS.map((item, i) => {
        const angle = (i / ORBIT_ICONS.length) * 360;
        const radius = 115;
        const rad = (angle * Math.PI) / 180;
        const x = 140 + radius * Math.cos(rad) - 20;
        const y = 140 + radius * Math.sin(rad) - 20;

        return (
          <motion.div
            key={item.label}
            className="orbit-item"
            style={{
              position: 'absolute',
              left: x,
              top: y,
              width: '40px',
              height: '40px',
              fontSize: '1.2rem',
            }}
            title={item.label}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              delay: 0,
            }}
            whileHover={{ scale: 1.3 }}
          >
            <motion.span
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{ display: 'block' }}
            >
              {item.icon}
            </motion.span>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="skills"
      ref={ref}
      className="relative"
      style={{ padding: '6rem 1.5rem', overflow: 'hidden', background: 'rgba(6,13,30,0.3)' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '-15%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.06) 0%, transparent 65%)',
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
            skills &amp; expertise
          </div>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f0f9ff',
            }}
          >
            My Tech{' '}
            <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        {/* Main layout: skills + orbit */}
        <div
          style={{
            display: 'flex',
            gap: '4rem',
            alignItems: 'center',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {/* Skill categories grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1.25rem',
              flex: '1',
              minWidth: '280px',
            }}
          >
            {SKILL_CATEGORIES.map((cat, ci) => (
              <motion.div
                key={cat.title}
                className="skill-card"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: ci * 0.15, duration: 0.6 }}
              >
                {/* Card header */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.6rem',
                    marginBottom: '1.25rem',
                  }}
                >
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: `${cat.color}18`,
                      border: `1px solid ${cat.color}30`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '1.1rem',
                    }}
                  >
                    {cat.icon}
                  </div>
                  <span
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontWeight: 700,
                      fontSize: '0.95rem',
                      color: '#f0f9ff',
                    }}
                  >
                    {cat.title}
                  </span>
                  <div
                    style={{
                      marginLeft: 'auto',
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      background: cat.color,
                      boxShadow: `0 0 8px ${cat.color}`,
                    }}
                  />
                </div>

                {/* Skill bars */}
                {cat.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={cat.color}
                    inView={inView}
                    delay={ci * 0.15 + si * 0.08}
                  />
                ))}
              </motion.div>
            ))}
          </div>

          {/* Orbit animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="hidden lg:flex items-center justify-center flex-shrink-0"
          >
            <OrbitDisplay />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
