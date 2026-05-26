import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const CERTS = [
  {
    icon: '🔴',
    org: 'Oracle',
    title: 'Oracle Certified Associate',
    desc: 'Oracle certification demonstrating proficiency in core technology concepts.',
    color: '#f59e0b',
    year: '2024',
    badge: 'Oracle',
  },
  {
    icon: '🤖',
    org: 'Coursera / deeplearning.ai',
    title: 'AI/ML Specialization',
    desc: 'Comprehensive machine learning and AI specialization covering neural networks, deep learning, and practical AI.',
    color: '#06b6d4',
    year: '2024',
    badge: 'AI/ML',
  },
  {
    icon: '💻',
    org: 'Udemy',
    title: 'Full Stack Development',
    desc: 'Complete MERN stack development course covering React, Node.js, Express, MongoDB, and REST APIs.',
    color: '#a855f7',
    year: '2023',
    badge: 'Full Stack',
  },
  {
    icon: '🐍',
    org: 'Python Institute',
    title: 'Python Programming',
    desc: 'Advanced Python programming including OOP, data structures, libraries, and automation techniques.',
    color: '#10b981',
    year: '2023',
    badge: 'Python',
  },
  {
    icon: '☁️',
    org: 'Google Cloud',
    title: 'Cloud Fundamentals',
    desc: 'Google Cloud platform fundamentals including compute, storage, and machine learning services.',
    color: '#3b82f6',
    year: '2024',
    badge: 'Cloud',
  },
  {
    icon: '🔒',
    org: 'Cybersecurity Academy',
    title: 'Web Security Basics',
    desc: 'Fundamentals of web application security, common vulnerabilities, and best practices.',
    color: '#ec4899',
    year: '2024',
    badge: 'Security',
  },
];

function CertCard({ cert, delay, inView }) {
  return (
    <motion.div
      className="cert-card"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6 }}
      style={{ height: '100%' }}
    >
      <div className="cert-card-inner" style={{ height: '100%' }}>
        {/* Top accent */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '3px',
            background: `linear-gradient(90deg, transparent, ${cert.color}, transparent)`,
          }}
        />

        {/* Icon + badge row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: '1.25rem',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '14px',
              background: `${cert.color}15`,
              border: `1px solid ${cert.color}30`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '1.6rem',
            }}
          >
            {cert.icon}
          </div>

          <div style={{ textAlign: 'right' }}>
            <div
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: '0.65rem',
                padding: '0.2rem 0.5rem',
                borderRadius: '999px',
                background: `${cert.color}15`,
                border: `1px solid ${cert.color}30`,
                color: cert.color,
                marginBottom: '0.25rem',
                display: 'inline-block',
              }}
            >
              {cert.badge}
            </div>
            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontSize: '0.7rem',
                color: 'rgba(240,249,255,0.3)',
                display: 'block',
              }}
            >
              {cert.year}
            </div>
          </div>
        </div>

        {/* Org */}
        <div
          style={{
            fontFamily: '"Fira Code", monospace',
            fontSize: '0.72rem',
            color: cert.color,
            marginBottom: '0.4rem',
            letterSpacing: '0.04em',
          }}
        >
          {cert.org}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#f0f9ff',
            marginBottom: '0.625rem',
            lineHeight: 1.3,
          }}
        >
          {cert.title}
        </h3>

        {/* Desc */}
        <p
          style={{
            fontSize: '0.8rem',
            color: 'rgba(240,249,255,0.5)',
            lineHeight: 1.6,
          }}
        >
          {cert.desc}
        </p>

        {/* Verified badge */}
        <div
          style={{
            marginTop: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <div
            style={{
              width: '16px',
              height: '16px',
              borderRadius: '50%',
              background: `${cert.color}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.6rem',
              color: '#fff',
              fontWeight: 800,
              boxShadow: `0 0 8px ${cert.color}60`,
            }}
          >
            ✓
          </div>
          <span
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.65rem',
              color: 'rgba(240,249,255,0.35)',
            }}
          >
            Verified Certification
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="certifications"
      ref={ref}
      className="relative bg-grid"
      style={{ padding: '6rem 1.5rem', overflow: 'hidden' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(168,85,247,0.06) 0%, transparent 65%)',
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
            certifications
          </div>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f0f9ff',
            }}
          >
            Credentials &{' '}
            <span className="gradient-text">Certifications</span>
          </h2>
          <p style={{ color: 'rgba(240,249,255,0.5)', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Verified skills backed by industry-recognized certifications.
          </p>
        </motion.div>

        {/* Certs Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {CERTS.map((cert, i) => (
            <CertCard key={cert.title} cert={cert} delay={i * 0.1} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
