import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const BOOT_MESSAGES = [
  '> Initializing neural network...',
  '> Loading AI modules...',
  '> Compiling MERN stack...',
  '> Syncing GitHub repositories...',
  '> Booting portfolio interface...',
  '> SYSTEM READY',
];

export default function LoadingScreen() {
  const [messages, setMessages] = useState([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_MESSAGES.length) {
        setMessages((prev) => [...prev, BOOT_MESSAGES[i]]);
        setProgress(Math.round(((i + 1) / BOOT_MESSAGES.length) * 100));
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDone(true), 300);
      }
    }, 380);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    >
      {/* Grid background */}
      <div className="loading-grid" />

      {/* Radial glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, rgba(168,85,247,0.06) 50%, transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Logo */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'backOut' }}
        className="text-center relative z-10"
      >
        <div
          className="font-orbitron font-black text-4xl mb-2"
          style={{
            background: 'linear-gradient(135deg, #06b6d4, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '0.1em',
          }}
        >
          M.SAYYED
        </div>
        <div className="font-fira text-xs text-cyan-400/60 tracking-widest">
          AI/ML ENGINEER &amp; FULL STACK DEVELOPER
        </div>
      </motion.div>

      {/* Terminal box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
        style={{
          background: 'rgba(6,13,30,0.9)',
          border: '1px solid rgba(6,182,212,0.25)',
          borderRadius: '12px',
          padding: '1.25rem 1.5rem',
          boxShadow: '0 0 40px rgba(6,182,212,0.1)',
          fontFamily: '"Fira Code", monospace',
          fontSize: '0.75rem',
          minHeight: '160px',
        }}
      >
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500/70" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <div className="w-3 h-3 rounded-full bg-green-500/70" />
          <span className="ml-2 text-white/30 text-xs">terminal — portfolio.exe</span>
        </div>

        <div className="space-y-1">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              style={{
                color: msg.includes('READY') ? '#06b6d4' : 'rgba(240,249,255,0.6)',
                fontWeight: msg.includes('READY') ? 700 : 400,
                textShadow: msg.includes('READY') ? '0 0 10px rgba(6,182,212,0.8)' : 'none',
              }}
            >
              {msg}
              {idx === messages.length - 1 && !done && (
                <span className="typing-cursor" style={{ display: 'inline-block', width: '2px', height: '0.9em', background: '#06b6d4', marginLeft: '4px', verticalAlign: 'middle', borderRadius: '2px', animation: 'blink 1s step-end infinite' }} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Progress bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="flex justify-between items-center mb-1">
          <span className="font-fira text-xs text-white/30">Loading</span>
          <span className="font-orbitron text-xs text-cyan-400">{progress}%</span>
        </div>
        <div className="progress-bar">
          <motion.div
            className="progress-fill"
            style={{
              background: 'linear-gradient(90deg, #06b6d4, #a855f7)',
              width: `${progress}%`,
              boxShadow: '0 0 15px rgba(6,182,212,0.6)',
            }}
            transition={{ duration: 0.4, ease: 'linear' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
