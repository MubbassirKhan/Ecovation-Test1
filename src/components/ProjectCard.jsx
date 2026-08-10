import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { onImgError } from '../utils/image';

/**
 * ProjectCard — an asymmetrical portfolio tile for the Projects index.
 * Editorial composition: index numeral over image, category kicker,
 * large serif title, area/location row. Image is oversized within an
 * overflow-hidden frame so the hover scale is transform-only.
 * The tile links to /projects/:slug.
 */
export default function ProjectCard({ project, className = '' }) {
  return (
    <motion.article
      className={`card${className ? ` ${className}` : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px 0px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link to={`/projects/${project.slug}`} className="card__link" aria-label={`${project.title} — view project`}>
        <div className="card__media">
          <div className="card__frame">
            <img
              className="card__img"
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              onError={onImgError}
            />
          </div>
          <span className="card__num" aria-hidden="true">
            {project.index}
          </span>
          <span className="card__cat" aria-hidden="true">
            {project.category}
          </span>
        </div>

        <div className="card__body">
          <h3 className="card__title">{project.title}</h3>
          <div className="card__meta">
            <span>{project.location}</span>
            {project.year && <span>{project.year}</span>}
            <span className="card__arrow" aria-hidden="true">→</span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}