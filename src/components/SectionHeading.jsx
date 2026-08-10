import Reveal from './Reveal';

/**
 * SectionHeading — kicker + title (+ optional lede) for editorial blocks.
 * Only node content is marked up; motion is handled by Reveal (transform/opacity).
 */
export default function SectionHeading({ index, kicker, title, lede, align = 'left' }) {
  return (
    <div className={`section-head${align === 'center' ? ' section-head--center' : ''}`}>
      {kicker && (
        <Reveal>
          <p className="kicker">
            {index && <span className="kicker__index" aria-hidden="true">{index}</span>}
            <span className="kicker__dot" aria-hidden="true" />
            {kicker}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="section-head__title">{title}</h2>
      </Reveal>
      {lede && (
        <Reveal delay={0.14}>
          <p className="section-head__lede">{lede}</p>
        </Reveal>
      )}
    </div>
  );
}