import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import toast from 'react-hot-toast';

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error('Please fill in all fields.');
      return;
    }
    setSending(true);
    // Simulate sending
    await new Promise((r) => setTimeout(r, 1800));
    setSending(false);
    toast.success('Message sent! I\'ll get back to you soon. 🚀');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative"
      style={{ padding: '6rem 1.5rem', overflow: 'hidden', background: 'rgba(6,13,30,0.3)' }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(6,182,212,0.08) 0%, rgba(168,85,247,0.05) 40%, transparent 65%)',
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
            get in touch
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
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <p style={{ color: 'rgba(240,249,255,0.5)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
            Whether it's a project collaboration, job opportunity, or just a tech chat — I'm always open to connecting.
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2.5rem',
            alignItems: 'start',
          }}
        >
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div>
              <h3
                style={{
                  fontFamily: 'Outfit, sans-serif',
                  fontWeight: 700,
                  fontSize: '1.2rem',
                  color: '#f0f9ff',
                  marginBottom: '0.75rem',
                }}
              >
                Connect with me
              </h3>
              <p style={{ color: 'rgba(240,249,255,0.5)', fontSize: '0.9rem', lineHeight: 1.7 }}>
                I'm currently open to internships, freelance projects, and full-time opportunities. Let's build something amazing together!
              </p>
            </div>

            {/* Contact cards */}
            {[
              {
                icon: '📧',
                label: 'Email',
                value: 'muddassir@example.com',
                color: '#06b6d4',
              },
              {
                icon: '💼',
                label: 'LinkedIn',
                value: 'muddassir-mushtaque',
                color: '#0077b5',
                href: 'https://www.linkedin.com/in/muddassir-mushtaque-163216361/',
              },
              {
                icon: '🐙',
                label: 'GitHub',
                value: 'Muddassirsayyed',
                color: '#e2e8f0',
                href: 'https://github.com/Muddassirsayyed',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href || '#'}
                target={item.href ? '_blank' : undefined}
                rel={item.href ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1rem 1.25rem',
                  borderRadius: '12px',
                  background: 'rgba(6,13,30,0.8)',
                  border: `1px solid ${item.color}20`,
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  cursor: 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}50`;
                  e.currentTarget.style.boxShadow = `0 0 20px ${item.color}15`;
                  e.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${item.color}20`;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateX(0)';
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.2rem',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: '"Fira Code", monospace',
                      fontSize: '0.7rem',
                      color: 'rgba(240,249,255,0.35)',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '0.15rem',
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '0.88rem',
                      color: item.color,
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            style={{
              background: 'linear-gradient(135deg, rgba(6,13,30,0.9), rgba(10,22,40,0.9))',
              border: '1px solid rgba(6,182,212,0.15)',
              borderRadius: '20px',
              padding: '2rem',
              backdropFilter: 'blur(24px)',
              boxShadow: '0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(6,182,212,0.05)',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '0.72rem',
                    color: 'rgba(240,249,255,0.45)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="contact-name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="form-input-cyber"
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '0.72rem',
                    color: 'rgba(240,249,255,0.45)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="contact-email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="form-input-cyber"
                  required
                />
              </div>

              <div>
                <label
                  style={{
                    display: 'block',
                    fontFamily: '"Fira Code", monospace',
                    fontSize: '0.72rem',
                    color: 'rgba(240,249,255,0.45)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '0.5rem',
                  }}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="contact-message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Let's build something amazing together..."
                  className="form-input-cyber"
                  rows={5}
                  style={{ resize: 'vertical', minHeight: '120px' }}
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-neon-solid"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  width: '100%',
                  padding: '0.875rem',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                  opacity: sending ? 0.7 : 1,
                  cursor: 'none',
                }}
              >
                {sending ? (
                  <>
                    <motion.span
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 0.8, ease: 'linear' }}
                      style={{ display: 'inline-block' }}
                    >
                      ⟳
                    </motion.span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>🚀</span> Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
