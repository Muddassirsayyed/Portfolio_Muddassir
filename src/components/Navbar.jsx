import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const NAV_LINKS = [
  { label: 'home', href: '#hero' },
  { label: 'about', href: '#about' },
  { label: 'skills', href: '#skills' },
  { label: 'projects', href: '#projects' },
  { label: 'journey', href: '#journey' },
  { label: 'contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      // Active section detection
      const sections = ['hero', 'about', 'skills', 'projects', 'journey', 'certifications', 'contact'];
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          height: '64px',
          background: scrolled
            ? 'rgba(3, 7, 18, 0.92)'
            : 'rgba(3, 7, 18, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: scrolled
            ? '1px solid rgba(6, 182, 212, 0.2)'
            : '1px solid rgba(255, 255, 255, 0.04)',
          transition: 'all 0.4s ease',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1rem',
                fontFamily: 'Orbitron, monospace',
                fontWeight: 900,
                color: '#fff',
                boxShadow: '0 0 15px rgba(6,182,212,0.4)',
              }}
            >
              M
            </div>
            <span
              style={{
                fontFamily: 'Orbitron, monospace',
                fontWeight: 700,
                fontSize: '0.9rem',
                background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '0.05em',
              }}
            >
              MUDDASSIR
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`nav-link-item ${active === link.href.replace('#', '') ? 'active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="btn-neon-solid"
              style={{ padding: '0.5rem 1.25rem', fontSize: '0.82rem' }}
            >
              Hire Me
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <motion.span
                key={i}
                style={{
                  display: 'block',
                  width: '22px',
                  height: '2px',
                  background: '#06b6d4',
                  borderRadius: '2px',
                  transformOrigin: 'center',
                }}
                animate={
                  mobileOpen
                    ? i === 0
                      ? { rotate: 45, y: 8 }
                      : i === 1
                      ? { opacity: 0 }
                      : { rotate: -45, y: -8 }
                    : { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
            ))}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{ opacity: mobileOpen ? 1 : 0, y: mobileOpen ? 0 : -20 }}
        style={{
          position: 'fixed',
          top: '64px',
          left: 0,
          right: 0,
          zIndex: 999,
          background: 'rgba(3,7,18,0.97)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(6,182,212,0.2)',
          pointerEvents: mobileOpen ? 'all' : 'none',
          padding: '1rem 1.5rem',
        }}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={`nav-link-item ${active === link.href.replace('#', '') ? 'active' : ''}`}
              style={{ padding: '0.75rem 1rem', display: 'block' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-neon-solid mt-3"
            style={{ textAlign: 'center' }}
          >
            Hire Me
          </a>
        </div>
      </motion.div>
    </>
  );
}
