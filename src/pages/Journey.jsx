import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const TIMELINE = [
  {
    year: '2022',
    icon: '📚',
    title: 'Started B.Tech Journey',
    desc: 'Began Computer Science engineering, dived deep into programming fundamentals, data structures, and algorithms.',
    color: '#06b6d4',
    tags: ['C++', 'Java', 'Data Structures'],
  },
  {
    year: '2023',
    icon: '🤖',
    title: 'Discovered AI & ML',
    desc: 'Got fascinated by Artificial Intelligence and Machine Learning. Started learning Python, sklearn, and TensorFlow.',
    color: '#a855f7',
    tags: ['Python', 'TensorFlow', 'sklearn'],
  },
  {
    year: '2023',
    icon: '🌐',
    title: 'Full Stack Development',
    desc: 'Learned the MERN stack from scratch. Built multiple web applications with React, Node.js, Express, and MongoDB.',
    color: '#3b82f6',
    tags: ['React', 'Node.js', 'MongoDB'],
  },
  {
    year: '2024',
    icon: '🔧',
    title: 'AI Automation Systems',
    desc: 'Explored AI automation — built automated ticket handling systems, AI workflows, and smart response engines.',
    color: '#10b981',
    tags: ['AI Automation', 'APIs', 'Python'],
  },
  {
    year: '2024',
    icon: '🏆',
    title: 'Hackathons & Open Source',
    desc: 'Participated in multiple hackathons and started contributing to open-source projects on GitHub.',
    color: '#f59e0b',
    tags: ['Hackathons', 'Open Source', 'GitHub'],
  },
  {
    year: '2025',
    icon: '🚀',
    title: 'Building the Future',
    desc: 'Currently building scalable SaaS products, AI tools, and exploring the frontier of cutting-edge technologies.',
    color: '#ec4899',
    tags: ['SaaS', 'AI Tools', 'Innovation'],
  },
];

export default function Journey() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section
      id="journey"
      ref={ref}
      className="relative"
      style={{ padding: '6rem 1.5rem', overflow: 'hidden', background: 'rgba(6,13,30,0.3)' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '4rem', textAlign: 'center' }}
        >
          <div className="section-label" style={{ justifyContent: 'center' }}>
            my journey
          </div>
          <h2
            style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 800,
              color: '#f0f9ff',
            }}
          >
            The{' '}
            <span className="gradient-text">Timeline</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {/* Center line (desktop only) */}
          <div
            className="hidden md:block"
            style={{
              position: 'absolute',
              left: '50%',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, transparent, #06b6d4, #a855f7, #3b82f6, transparent)',
              transform: 'translateX(-50%)',
              boxShadow: '0 0 15px rgba(6,182,212,0.4)',
            }}
          />

          {/* Left line (mobile) */}
          <div
            className="md:hidden"
            style={{
              position: 'absolute',
              left: '20px',
              top: '0',
              bottom: '0',
              width: '2px',
              background: 'linear-gradient(180deg, transparent, #06b6d4, #a855f7, #3b82f6, transparent)',
              boxShadow: '0 0 15px rgba(6,182,212,0.4)',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {TIMELINE.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.6 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.5rem',
                    // Desktop: alternate sides
                  }}
                  className="md:timeline-item"
                >
                  {/* Desktop layout */}
                  <div
                    className="hidden md:flex items-center w-full"
                    style={{ gap: '1.5rem' }}
                  >
                    {/* Left side content */}
                    <div
                      style={{
                        flex: 1,
                        textAlign: isLeft ? 'right' : 'left',
                        display: 'flex',
                        justifyContent: isLeft ? 'flex-end' : 'flex-start',
                      }}
                    >
                      {isLeft && (
                        <TimelineCard item={item} />
                      )}
                      {!isLeft && (
                        <div
                          style={{
                            fontFamily: 'Orbitron, monospace',
                            fontSize: '0.85rem',
                            color: item.color,
                            textShadow: `0 0 10px ${item.color}60`,
                            fontWeight: 700,
                          }}
                        >
                          {item.year}
                        </div>
                      )}
                    </div>

                    {/* Center dot */}
                    <div
                      className="timeline-dot flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                        boxShadow: `0 0 20px ${item.color}80`,
                      }}
                    />

                    {/* Right side content */}
                    <div style={{ flex: 1 }}>
                      {!isLeft && <TimelineCard item={item} />}
                      {isLeft && (
                        <div
                          style={{
                            fontFamily: 'Orbitron, monospace',
                            fontSize: '0.85rem',
                            color: item.color,
                            textShadow: `0 0 10px ${item.color}60`,
                            fontWeight: 700,
                          }}
                        >
                          {item.year}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex md:hidden items-start gap-4 w-full" style={{ paddingLeft: '1rem' }}>
                    <div
                      className="timeline-dot flex-shrink-0 mt-1"
                      style={{
                        background: `linear-gradient(135deg, ${item.color}, ${item.color}80)`,
                        boxShadow: `0 0 20px ${item.color}80`,
                        marginLeft: '-3px',
                      }}
                    />
                    <TimelineCard item={item} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ item }) {
  return (
    <div
      style={{
        background: 'linear-gradient(135deg, rgba(6,13,30,0.9), rgba(10,22,40,0.9))',
        border: `1px solid ${item.color}20`,
        borderRadius: '14px',
        padding: '1.25rem',
        maxWidth: '360px',
        backdropFilter: 'blur(16px)',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${item.color}40`;
        e.currentTarget.style.boxShadow = `0 10px 30px ${item.color}15`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${item.color}20`;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.625rem' }}>
        <span style={{ fontSize: '1.4rem' }}>{item.icon}</span>
        <h3
          style={{
            fontFamily: 'Outfit, sans-serif',
            fontWeight: 700,
            fontSize: '0.95rem',
            color: '#f0f9ff',
          }}
        >
          {item.title}
        </h3>
      </div>
      <p
        style={{
          fontSize: '0.82rem',
          color: 'rgba(240,249,255,0.55)',
          lineHeight: 1.65,
          marginBottom: '0.875rem',
        }}
      >
        {item.desc}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
        {item.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.65rem',
              padding: '0.2rem 0.5rem',
              borderRadius: '5px',
              background: `${item.color}12`,
              border: `1px solid ${item.color}25`,
              color: item.color,
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
