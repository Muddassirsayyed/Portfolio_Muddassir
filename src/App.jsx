import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import ParticlesBackground from './components/ParticlesBackground';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Journey from './pages/Journey';
import Certifications from './pages/Certifications';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

// Detect touch/mobile devices
const isMobile = () =>
  typeof window !== 'undefined' &&
  (window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768);

export default function App() {
  const [loading, setLoading] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mousePos, setMousePos] = useState({ x: -200, y: -200 });
  const [cursorRingPos, setCursorRingPos] = useState({ x: -200, y: -200 });
  const [isHovering, setIsHovering] = useState(false);
  const [mobile] = useState(() => isMobile());
  const ringRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const scrollRef = useRef(null);

  // Loading screen — restore to top after load
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoading(false), 2800);
    return () => clearTimeout(timer);
  }, []);

  // Scroll restoration on refresh
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    return () => {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto';
      }
    };
  }, []);

  // Scroll progress — throttled
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        scrollRef.current = requestAnimationFrame(() => {
          const total =
            document.documentElement.scrollHeight - window.innerHeight;
          setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollRef.current) cancelAnimationFrame(scrollRef.current);
    };
  }, []);

  // Custom cursor — desktop only
  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  useEffect(() => {
    if (mobile) return;
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mobile, handleMouseMove]);

  // Smooth cursor ring (lerp) — cancel/restart only when mousePos changes
  useEffect(() => {
    if (mobile) return;
    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      const dx = mousePos.x - ringRef.current.x;
      const dy = mousePos.y - ringRef.current.y;
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        ringRef.current.x += dx * 0.12;
        ringRef.current.y += dy * 0.12;
        setCursorRingPos({ x: ringRef.current.x, y: ringRef.current.y });
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [mobile, mousePos]);

  // Interactive element hover detection
  useEffect(() => {
    if (mobile) return;
    const handleMouseOver = (e) => {
      setIsHovering(
        !!e.target.closest(
          'a, button, [role="button"], input, textarea, select, .skill-card, .project-card, .cert-card, .social-icon'
        )
      );
    };
    window.addEventListener('mouseover', handleMouseOver, { passive: true });
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, [mobile]);

  return (
    <>
      {/* Loading screen */}
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {/* Interactive canvas particles */}
      <ParticlesBackground />

      {/* Subtle scan line sweep */}
      <div className="scan-line" aria-hidden="true" />

      {/* Scroll progress indicator */}
      <div
        className="scroll-progress"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Reading progress"
      />

      {/* Mouse glow — desktop only */}
      {!mobile && (
        <div
          className="mouse-glow"
          aria-hidden="true"
          style={{ left: mousePos.x, top: mousePos.y }}
        />
      )}

      {/* Custom cursor dot — desktop only */}
      {!mobile && (
        <>
          <div
            className="cursor-dot"
            aria-hidden="true"
            style={{
              transform: `translate(${mousePos.x - 4}px, ${mousePos.y - 4}px)`,
            }}
          />
          <div
            className={`cursor-ring ${isHovering ? 'hovering' : ''}`}
            aria-hidden="true"
            style={{
              transform: `translate(${cursorRingPos.x - 20}px, ${
                cursorRingPos.y - 20
              }px)`,
            }}
          />
        </>
      )}

      {/* Main content — revealed after loading */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <Navbar />
            <main id="main-content" role="main">
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Journey />
              <Certifications />
              <Contact />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
