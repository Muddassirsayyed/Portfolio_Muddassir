import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const ROLES = [
  'AI/ML Engineer',
  'Full Stack Developer',
  'Open Source Contributor',
  'Python Developer',
  'MERN Stack Developer',
];

const FLOATING_TECHS = [
  { label: '⚛️ React', style: { top: '8%', left: '5%' }, delay: 0 },
  { label: '🐍 Python', style: { top: '20%', right: '3%' }, delay: 0.5 },
  { label: '🤖 AI/ML', style: { bottom: '25%', left: '3%' }, delay: 1 },
  { label: '🔷 Node.js', style: { bottom: '10%', right: '6%' }, delay: 1.5 },
  { label: '🍃 MongoDB', style: { top: '55%', left: '1%' }, delay: 0.8 },
  { label: '📊 TensorFlow', style: { top: '42%', right: '2%' }, delay: 1.2 },
];

function useTypingEffect(words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 1600) {
  const [display, setDisplay] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const current = words[wordIndex % words.length];

    const tick = () => {
      if (!isDeleting) {
        if (display.length < current.length) {
          setDisplay(current.slice(0, display.length + 1));
          timeoutRef.current = setTimeout(tick, typingSpeed);
        } else {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (display.length > 0) {
          setDisplay(current.slice(0, display.length - 1));
          timeoutRef.current = setTimeout(tick, deletingSpeed);
        } else {
          setIsDeleting(false);
          setWordIndex((w) => (w + 1) % words.length);
        }
      }
    };

    timeoutRef.current = setTimeout(tick, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeoutRef.current);
  }, [display, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return display;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function Hero() {
  const typedText = useTypingEffect(ROLES);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
      style={{ paddingTop: '64px' }}
    >
      {/* Background radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '900px',
          height: '900px',
          background:
            'radial-gradient(circle, rgba(6,182,212,0.07) 0%, rgba(168,85,247,0.05) 40%, transparent 65%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Floating tech tags */}
      {FLOATING_TECHS.map((tech, i) => (
        <motion.div
          key={i}
          className="floating-tech hidden lg:block"
          style={tech.style}
          animate={{ y: [0, -12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 4 + i * 0.5,
            delay: tech.delay,
            ease: 'easeInOut',
          }}
        >
          {tech.label}
        </motion.div>
      ))}

      <div
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '5rem 1.5rem',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '2rem',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Status badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.4rem 1.2rem',
            borderRadius: '999px',
            background: 'rgba(6,182,212,0.08)',
            border: '1px solid rgba(6,182,212,0.25)',
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.75rem',
            color: '#06b6d4',
            letterSpacing: '0.1em',
          }}
        >
          <span
            style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#10b981',
              boxShadow: '0 0 8px #10b981',
              animation: 'blink 2s ease-in-out infinite',
              flexShrink: 0,
            }}
          />
          AVAILABLE FOR OPPORTUNITIES
        </motion.div>

        {/* Avatar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="hero-avatar-ring"
          style={{ width: '200px', height: '200px' }}
        >
          <div
            className="hero-avatar-inner"
            style={{ width: '192px', height: '192px', fontSize: '5.5rem' }}
          >
            👨‍💻
          </div>
        </motion.div>

        {/* Main heading */}
        <div>
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{
              fontFamily: 'Outfit, Inter, sans-serif',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1rem',
              color: '#f0f9ff',
            }}
          >
            Hey There, I'm{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Muddassir
            </span>
          </motion.h1>

          {/* Typing animation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              fontFamily: 'Orbitron, monospace',
              fontSize: 'clamp(1rem, 3vw, 1.6rem)',
              fontWeight: 600,
              color: 'rgba(240,249,255,0.85)',
              height: '2em',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0',
              letterSpacing: '0.02em',
            }}
          >
            <span style={{ color: '#a855f7', marginRight: '0.4rem' }}>&gt;</span>
            <span
              style={{
                color: '#06b6d4',
                textShadow: '0 0 20px rgba(6,182,212,0.5)',
              }}
            >
              {typedText}
            </span>
            <span className="typing-cursor" />
          </motion.div>
        </div>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={4}
          style={{
            maxWidth: '620px',
            fontSize: '1.05rem',
            color: 'rgba(240,249,255,0.6)',
            lineHeight: 1.8,
          }}
        >
          Passionate B.Tech student focused on AI, Machine Learning, Full Stack Development,
          and Automation. I build modern web applications, AI tools, automation systems, and
          scalable digital experiences.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={5}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}
        >
          <a
            href="#projects"
            className="btn-neon-solid"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>🚀</span> View Projects
          </a>
          <a
            href="#contact"
            className="btn-neon"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span>💬</span> Contact Me
          </a>
          <a
            href="#"
            className="btn-neon"
            style={{ borderColor: 'rgba(168,85,247,0.4)', color: '#a855f7' }}
          >
            <span>📄</span> Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={6}
          style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}
        >
          <span
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.72rem',
              color: 'rgba(240,249,255,0.3)',
              letterSpacing: '0.1em',
            }}
          >
            FOLLOW ME
          </span>
          <div
            style={{ width: '30px', height: '1px', background: 'rgba(6,182,212,0.3)' }}
          />

          <a
            href="https://github.com/Muddassirsayyed"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <a
            href="https://www.linkedin.com/in/muddassir-mushtaque-163216361/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            style={{ '--hover-color': '#0077b5' }}
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem', marginTop: '1rem' }}
        >
          <span
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.65rem',
              color: 'rgba(240,249,255,0.25)',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            scroll down
          </span>
          <div
            style={{
              width: '1.5px',
              height: '40px',
              background: 'linear-gradient(180deg, rgba(6,182,212,0.6), transparent)',
              borderRadius: '999px',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
