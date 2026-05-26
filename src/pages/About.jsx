import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const STATS = [
  { label: 'Projects Built', value: 10, suffix: '+' },
  { label: 'Technologies', value: 20, suffix: '+' },
  { label: 'Open Source PRs', value: 5, suffix: '+' },
  { label: 'Certifications', value: 8, suffix: '+' },
];

const HIGHLIGHTS = [
  {
    icon: '🎓',
    title: 'B.Tech Student',
    desc: 'Passionate about Artificial Intelligence and Machine Learning',
    color: '#06b6d4',
  },
  {
    icon: '⚡',
    title: 'Full Stack Dev',
    desc: 'Skilled in Python, MERN Stack, APIs, Automation, SQL, and AI tools',
    color: '#a855f7',
  },
  {
    icon: '🚀',
    title: 'Builder Mindset',
    desc: 'Loves building real-world projects and solving practical problems',
    color: '#3b82f6',
  },
  {
    icon: '🌐',
    title: 'Open Source',
    desc: 'Interested in AI Automation, SaaS products, and Open Source contributions',
    color: '#10b981',
  },
];

const TECH_STACK = ['⚛️', '🐍', '🔷', '🍃', '🤖', '🔥', '📊', '🐙', '🌐', '💻'];

function AnimatedCounter({ value, suffix, inView }) {
  const [count, setCount] = useState(0);
  const startedRef = useRef(false);

  useEffect(() => {
    if (!inView || startedRef.current) return;
    startedRef.current = true;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section
      id="about"
      ref={ref}
      className="relative bg-grid"
      style={{ padding: '6rem 1.5rem', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '-20%',
          transform: 'translateY(-50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(168,85,247,0.07) 0%, transparent 70%)',
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
            about me
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
            Who Am{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              I?
            </span>
          </h2>
          <p
            style={{
              color: 'rgba(240,249,255,0.5)',
              maxWidth: '520px',
              margin: '0 auto',
              fontSize: '1rem',
              lineHeight: 1.7,
            }}
          >
            A developer driven by curiosity, fueled by caffeine, and passionate about building
            things that matter.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '1rem',
            marginBottom: '4rem',
          }}
        >
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div
                style={{
                  fontFamily: 'Orbitron, monospace',
                  fontSize: '2.5rem',
                  fontWeight: 900,
                  background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '0.5rem',
                  lineHeight: 1,
                }}
              >
                <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div
                style={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '0.72rem',
                  color: 'rgba(240,249,255,0.45)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.25rem',
            marginBottom: '4rem',
          }}
        >
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.title}
              className="glass-card"
              style={{ padding: '1.75rem', borderRadius: '16px' }}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
            >
              <div
                style={{
                  fontSize: '2rem',
                  marginBottom: '1rem',
                  width: '52px',
                  height: '52px',
                  background: `rgba(${item.color === '#06b6d4' ? '6,182,212' : item.color === '#a855f7' ? '168,85,247' : item.color === '#3b82f6' ? '59,130,246' : '16,185,129'},0.12)`,
                  border: `1px solid ${item.color}30`,
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </div>
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '1.05rem',
                  fontWeight: 700,
                  color: '#f0f9ff',
                  marginBottom: '0.5rem',
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  fontSize: '0.875rem',
                  color: 'rgba(240,249,255,0.55)',
                  lineHeight: 1.6,
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack Floating Icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.6 }}
          style={{ textAlign: 'center' }}
        >
          <div
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.72rem',
              color: 'rgba(240,249,255,0.3)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            // tech i love
          </div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              justifyContent: 'center',
              maxWidth: '600px',
              margin: '0 auto',
            }}
          >
            {TECH_STACK.map((emoji, i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2.5 + i * 0.2,
                  delay: i * 0.15,
                  ease: 'easeInOut',
                }}
                style={{
                  fontSize: '2rem',
                  filter: 'drop-shadow(0 0 8px rgba(6,182,212,0.3))',
                }}
              >
                {emoji}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
