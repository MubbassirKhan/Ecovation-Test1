import ProjectCard from './ProjectCard';

/**
 * ProjectGrid — asymmettric editorial masonry of ProjectCards.
 * `feature` (index) spans both columns for a full-width lead; remaining
 * tiles alternate offset columns so the index feels composed, not tiled.
 */
export default function ProjectGrid({ projects, feature = 0, className = '' }) {
  const [lead, ...rest] = projects;

  return (
    <div className={`grid${className ? ` ${className}` : ''}`}>
      {lead && (
        <ProjectCard project={lead} className="card--lead" />
      )}
      {rest.map((project, i) => (
        <ProjectCard
          key={project.id}
          project={project}
          className={i % 2 === 0 ? 'card--l' : 'card--r'}
        />
      ))}
    </div>
  );
}