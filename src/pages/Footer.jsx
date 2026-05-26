import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    label: 'GitHub',
    href: 'https://github.com/Muddassirsayyed',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/muddassir-mushtaque-163216361/',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const NAV_LINKS = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        borderTop: '1px solid rgba(6,182,212,0.1)',
        background: 'rgba(3,7,18,0.95)',
        backdropFilter: 'blur(20px)',
        padding: '3rem 1.5rem 2rem',
        overflow: 'hidden',
      }}
    >
      {/* Top gradient line */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #06b6d4, #a855f7, transparent)',
        }}
      />

      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Main footer content */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'start',
            gap: '2rem',
            marginBottom: '2.5rem',
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: 'Orbitron, monospace',
                fontWeight: 900,
                fontSize: '1.25rem',
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.5rem',
                letterSpacing: '0.05em',
              }}
            >
              MUDDASSIR SAYYED
            </div>
            <div
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: '0.72rem',
                color: 'rgba(240,249,255,0.35)',
                letterSpacing: '0.1em',
                marginBottom: '1.25rem',
              }}
            >
              AI/ML ENGINEER &amp; FULL STACK DEVELOPER
            </div>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: '0.625rem' }}>
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav links */}
          <div>
            <div
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: '0.72rem',
                color: 'rgba(240,249,255,0.3)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Navigation
            </div>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '0.5rem 2rem',
              }}
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '0.8rem',
                    color: 'rgba(240,249,255,0.5)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#06b6d4')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(240,249,255,0.5)')}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Status */}
          <div>
            <div
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: '0.72rem',
                color: 'rgba(240,249,255,0.3)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                marginBottom: '1rem',
              }}
            >
              Status
            </div>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.5rem 1rem',
                borderRadius: '999px',
                background: 'rgba(16,185,129,0.1)',
                border: '1px solid rgba(16,185,129,0.25)',
                marginBottom: '0.75rem',
              }}
            >
              <div
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                  animation: 'blink 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontFamily: '"Fira Code", monospace',
                  fontSize: '0.75rem',
                  color: '#10b981',
                }}
              >
                Available for hire
              </span>
            </div>
            <div
              style={{
                fontFamily: '"Fira Code", monospace',
                fontSize: '0.72rem',
                color: 'rgba(240,249,255,0.3)',
              }}
            >
              📍 India · Open to remote
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider" style={{ marginBottom: '1.5rem' }} />

        {/* Bottom bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <div
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.78rem',
              color: 'rgba(240,249,255,0.3)',
            }}
          >
            Built with{' '}
            <span style={{ color: '#ec4899' }}>❤️</span>{' '}
            by{' '}
            <span style={{ color: '#06b6d4' }}>Muddassir Sayyed</span>
            {' '}· © {new Date().getFullYear()}
          </div>

          <div
            style={{
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.72rem',
              color: 'rgba(240,249,255,0.2)',
            }}
          >
            Made with React + Tailwind + Framer Motion
          </div>

          {/* Back to top */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            id="back-to-top"
            aria-label="Back to top"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, rgba(6,182,212,0.15), rgba(168,85,247,0.15))',
              border: '1px solid rgba(6,182,212,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#06b6d4',
              fontSize: '1rem',
              cursor: 'none',
              boxShadow: '0 0 15px rgba(6,182,212,0.15)',
            }}
          >
            ↑
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
