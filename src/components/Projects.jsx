import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { onImgError } from '../utils/image';

/**
 * Projects — sticky editorial storytelling (unchanged mechanics).
 *
 * N × 100vh scroll runway, 100vh sticky viewport, one scene per 1/N
 * window, crossfading opacity + gentle 1.06 → 1 settle on entry.
 * Each scene links through to /projects/:slug.
 */

export default function Projects({ projects }) {
  const n = projects.length;
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  const [current, setCurrent] = useState(0);
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(n - 1, Math.floor(v * n));
    setCurrent((prev) => (prev === idx ? prev : idx));
  });

  return (
    <section
      className="projects"
      id="work"
      ref={sectionRef}
      style={{ height: `${n * 100}vh` }}
      aria-label="Selected work"
    >
      <div className="projects__viewport">
        {projects.map((project, i) => (
          <Scene key={project.id} project={project} index={i} total={n} progress={scrollYProgress} />
        ))}

        <p className="projects__lede">Featured projects</p>
        <div className="projects__index" aria-hidden="true">
          <span className="projects__index--cur">{String(current + 1).padStart(2, '0')}</span>
          <span className="projects__index--total">/ {String(n).padStart(2, '0')}</span>
        </div>
      </div>
    </section>
  );
}

function Scene({ project, index, total, progress }) {
  const span = 1 / total;
  const start = index * span;
  const end = start + span;
  const isFirst = index === 0;
  const isLast = index === total - 1;

  const opacity = useTransform(
    progress,
    isFirst
      ? [start, start + span * 0.82, end]
      : isLast
        ? [start, start + span * 0.18, 1]
        : [start, start + span * 0.18, start + span * 0.82, end],
    isFirst ? [1, 1, 0] : isLast ? [0, 1, 1] : [0, 1, 1, 0],
  );

  const settle = useTransform(progress, [start, start + span * 0.55], [1.06, 1]);

  return (
    <motion.div className="scene" style={{ opacity }}>
      <motion.img
        className="scene__img"
        src={project.heroImage}
        alt={project.title}
        style={{ scale: settle }}
        loading={isFirst ? 'eager' : 'lazy'}
        decoding="async"
        fetchPriority={isFirst ? 'high' : 'auto'}
        draggable={false}
        onError={onImgError}
      />
      <div className="scene__veil" aria-hidden="true" />

      <div className="scene__inner">
        <p className="kicker">
          <span className="kicker__dot" aria-hidden="true" />
          {project.location}
        </p>
        <h3 className="scene__title">
          <span className="projects__index--cur" style={{ fontSize: '0.28em', verticalAlign: '0.6em', marginRight: '0.7ch' }}>
            {project.index}
          </span>
          {project.title}
        </h3>
        <p className="scene__desc">{project.summary}</p>
        <ul className="scene__meta">
          <li>{project.category}</li>
          {project.year && project.year !== '—' && <li>{project.year}</li>}
          {project.area && project.area !== '—' && <li>{project.area}</li>}
        </ul>
        <Link className="scene__link" to={`/projects/${project.slug}`}>
          View project <span aria-hidden="true">→</span>
        </Link>
      </div>
    </motion.div>
  );
}