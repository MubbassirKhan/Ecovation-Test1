import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';

/**
 * Hero — Ecovation home hero.
 * Full-bleed image (normal flow, no position: fixed / sticky).
 * Clean parallax on the image only via framer-motion scroll tracking.
 */
export default function Hero() {
  const words = ['Sustainable', 'Workspaces.'];
  const em = ['Thoughtful design, better acoustics.'];

  return (
    <header className="hero" id="top">
      <div className="hero__media">
        <img
          className="hero__img"
          src={IMAGES.hero}
          alt="Open-plan office with natural light and calm, considered workstations"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          draggable={false}
          onError={onImgError}
        />
        <div className="hero__veil" aria-hidden="true" />
      </div>

      <div className="hero__content">
        <motion.p
          className="kicker hero__over"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="kicker__dot" aria-hidden="true" />
          EcoVation — Sustainable Workplaces &amp; PET Panels
        </motion.p>

        <h1 className="hero__title">
          {words.map((w, i) => (
            <motion.span
              key={w}
              className="hero__line"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.1 }}
            >
              {w}{' '}
            </motion.span>
          ))}
          <motion.em
            className="hero__em"
            initial={{ opacity: 0, y: 44 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.55 }}
          >
            {em.join(' ')}
          </motion.em>
        </h1>

        <motion.p
          className="hero__sub"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.75 }}
        >
          Offices, meeting rooms and collaboration zones designed with sustainable
          materials — and PET acoustic panels that quiet the room and carry the voice.
        </motion.p>

        <motion.div
          className="hero__ctas"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
        >
          <Link className="hero__cta" to="/contact">
            Start a project <span aria-hidden="true">→</span>
          </Link>
          <a className="hero__cta hero__cta--ghost" href="#about">
            Explore <span aria-hidden="true">↓</span>
          </a>
        </motion.div>
      </div>

      <div className="hero__scroll" aria-hidden="true" />
    </header>
  );
}