import { useState } from 'react';
import { animate, motion } from 'framer-motion';

// Counts from 0 to `to` the first time it scrolls into view (no refs needed)
export default function CountUp({ to, suffix = '', decimals = 0, duration = 1.4, className = '' }) {
  const [n, setN] = useState(0);

  return (
    <motion.span
      className={className}
      viewport={{ once: true, amount: 0.6 }}
      onViewportEnter={() => animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setN(v) })}
    >
      {n.toFixed(decimals)}
      {suffix}
    </motion.span>
  );
}
