import { motion } from 'framer-motion';

/**
 * Reveal — one-shot scroll-into-view fade/rise for editorial content.
 * Wrapped only around in-flow copy (never around scroll-linked
 * sections — a transformed ancestor would disturb their sticky).
 */
export default function Reveal({ children, className = '', delay = 0, y = 30 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}