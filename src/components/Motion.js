// src/components/Motion.js
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';

/* Page fade/slide when route changes */
export const PageTransition = ({ children }) => {
  const prefers = useReducedMotion();
  const variants = prefers ? {} : {
    initial: { opacity: 0, y: 10 },
    animate: { opacity: 1, y: 0, transition: { duration: .45, ease: 'easeOut' } },
    exit: { opacity: 0, y: -10, transition: { duration: .25, ease: 'easeIn' } }
  };
  return (
    <motion.div variants={variants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
};

/* Stagger list */
export const Stagger = ({ children, delay = 0 }) => {
  const prefers = useReducedMotion();
  const variants = prefers ? {} : { show: { transition: { staggerChildren: .08, delayChildren: delay } } };
  return (
    <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: .15 }} variants={variants}>
      {children}
    </motion.div>
  );
};

export const Item = ({ children }) => {
  const prefers = useReducedMotion();
  const variants = prefers ? {} : {
    hidden: { opacity: 0, y: 14 },
    show:  { opacity: 1, y: 0, transition: { duration: .5, ease: 'easeOut' } }
  };
  return <motion.div variants={variants}>{children}</motion.div>;
};

/* Subtle parallax reveal for hero image/card
   FIX: call all hooks unconditionally, then branch in style props */
export const ParallaxIn = ({ children }) => {
  const prefers = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Hooks are always called:
  const y = useTransform(scrollYProgress, [0, 1], [20, -20]);
  const opacityMV = useTransform(scrollYProgress, [0, 0.3], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        y,
        // If reduced motion is preferred, use a static number; otherwise use the MotionValue
        opacity: prefers ? 1 : opacityMV
      }}
    >
      {children}
    </motion.div>
  );
};

/* Magnetic hover for icons/buttons */
export const Magnetic = ({ children, strength = 12 }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const dx = (e.clientX - rect.left) / rect.width - 0.5;
        const dy = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.transform = `translate(${dx * strength}px, ${dy * strength}px)`;
      }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translate(0,0)'; }}
      style={{ display: 'inline-flex' }}
    >
      {children}
    </motion.div>
  );
};

/* Scroll progress bar (top) */
export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.25 });
  return (
    <motion.div style={{
      position: 'fixed', top: 0, left: 0, right: 0, height: 3, zIndex: 1500,
      transformOrigin: '0% 50%', background: 'linear-gradient(90deg, var(--accent), var(--accent-2))', scaleX
    }}/>
  );
};
