import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { onImgError } from '../utils/image';

/**
 * Projects — Featured projects showcase.
 * Clean tabbed/card layout — no sticky or fixed positioning.
 * Projects are shown in a featured card + thumbnail grid layout.
 */
export default function Projects({ projects }) {
  const [active, setActive] = useState(0);
  const featured = projects[active];

  return (
    <section className="projects-new" id="work" aria-label="Selected work">
      <div className="container">
        {/* Section header */}
        <div className="projects-new__head">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Featured projects
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="projects-new__title">
              Selected <em>work</em>.
            </h2>
          </Reveal>
        </div>

        {/* Main featured display */}
        <div className="projects-new__showcase">
          {/* Left: image */}
          <div className="projects-new__media-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id}
                className="projects-new__featured-media"
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <img
                  src={featured.heroImage}
                  alt={featured.title}
                  loading="lazy"
                  decoding="async"
                  draggable={false}
                  onError={onImgError}
                />
                <div className="projects-new__img-veil" aria-hidden="true" />
                <span className="projects-new__cat-badge">{featured.category}</span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: content */}
          <div className="projects-new__info-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured.id + '-info'}
                className="projects-new__info"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              >
                <span className="projects-new__index">
                  {featured.index}
                  <span className="projects-new__of"> / {String(projects.length).padStart(2, '0')}</span>
                </span>
                <h3 className="projects-new__featured-title">{featured.title}</h3>
                <p className="projects-new__featured-desc">{featured.summary}</p>
                <ul className="projects-new__meta">
                  <li>{featured.category}</li>
                  <li>{featured.location}</li>
                  {featured.year && featured.year !== '—' && <li>{featured.year}</li>}
                  {featured.area && featured.area !== '—' && <li>{featured.area}</li>}
                </ul>
                <Link className="projects-new__link" to={`/projects/${featured.slug}`}>
                  View project <span aria-hidden="true">→</span>
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Thumbnail selector grid */}
            <div className="projects-new__thumbs" role="list">
              {projects.map((p, i) => (
                <button
                  key={p.id}
                  className={`projects-new__thumb${i === active ? ' is-active' : ''}`}
                  onClick={() => setActive(i)}
                  aria-label={`View project: ${p.title}`}
                  role="listitem"
                >
                  <img
                    src={p.heroImage}
                    alt={p.title}
                    loading="lazy"
                    decoding="async"
                    onError={onImgError}
                  />
                  <div className="projects-new__thumb-info">
                    <span className="projects-new__thumb-num">{p.index}</span>
                    <span className="projects-new__thumb-title">{p.title}</span>
                  </div>
                  {i === active && (
                    <motion.div
                      className="projects-new__thumb-active"
                      layoutId="activeThumb"
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* View all CTA */}
        <Reveal>
          <div className="projects-new__footer">
            <Link className="link-arrow" to="/projects">
              View all projects <span>→</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}