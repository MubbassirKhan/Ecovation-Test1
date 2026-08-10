import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { onImgError } from '../utils/image';

/**
 * ParallaxImage — a reusable in-flow figure with its own gentle parallax.
 * Transform-only animation; image is oversized (125% tall) so the drift
 * range never exposes an edge.
 */
export default function ParallaxImage({
  src,
  alt = '',
  className = '',
  ratio = '4 / 3',
  radius = 2,
  yRange = ['-8%', '8%'],
  children,
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], yRange);

  return (
    <figure className={`pf${className ? ` ${className}` : ''}`} ref={ref}>
      <div className="pf__frame" style={{ aspectRatio: ratio, borderRadius: radius }}>
        <motion.img
          className="pf__img"
          src={src}
          alt={alt}
          style={{ y }}
          loading="lazy"
          decoding="async"
          draggable={false}
          onError={onImgError}
        />
      </div>
      {children}
    </figure>
  );
}