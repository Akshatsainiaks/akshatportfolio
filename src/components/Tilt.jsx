import React from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

/**
 * 3D tilt wrapper — the child leans toward the mouse.
 * `glare` adds a soft light that follows the cursor (pass `rounded` to match the child's corners).
 */
const Tilt = ({ children, max = 10, scale = 1.02, glare = false, rounded = 'rounded-3xl', className = '' }) => {
  const reduceMotion = useReducedMotion();
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const spring = { stiffness: 180, damping: 18 };
  const rotateX = useSpring(useTransform(my, [0, 1], [max, -max]), spring);
  const rotateY = useSpring(useTransform(mx, [0, 1], [-max, max]), spring);
  const glareBg = useTransform(
    [mx, my],
    ([x, y]) => `radial-gradient(500px circle at ${x * 100}% ${y * 100}%, rgba(255,255,255,0.12), transparent 50%)`
  );

  const onMove = (e) => {
    if (reduceMotion) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width);
    my.set((e.clientY - r.top) / r.height);
  };
  const onLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <div className={className} style={{ perspective: 1000 }}>
      <motion.div
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        whileHover={reduceMotion ? undefined : { scale }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative group/tilt"
      >
        {children}
        {glare && (
          <motion.div
            className={`pointer-events-none absolute inset-0 ${rounded} opacity-0 group-hover/tilt:opacity-100 transition-opacity duration-300`}
            style={{ background: glareBg }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default Tilt;
