import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { ACOUSTIC_SOLUTIONS } from '../data/services';
import { onImgError } from '../utils/image';

/**
 * Services — editorial index rows with a hover thumbnail (unchanged
 * interaction). Content adapted to Ecovation's acoustic solutions.
 * Rows SPA-link to the Acoustic Panels page anchors.
 */
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <Reveal>
            <h2>Acoustic solutions that quiet the room</h2>
          </Reveal>
          <p className="services__count" aria-hidden="true">
            {String(ACOUSTIC_SOLUTIONS.length).padStart(2, '0')} solutions
          </p>
        </div>

        <div className="services__list">
          {ACOUSTIC_SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <Link className="service" to={`/acoustic-panels#${s.id}`}>
                <span className="service__index" aria-hidden="true">
                  {s.index}
                </span>
                <h3 className="service__title">{s.title}</h3>
                <p className="service__blurb">{s.blurb}</p>
                <div className="service__thumb" aria-hidden="true">
                  <img src={s.image} alt="" loading="lazy" decoding="async" onError={onImgError} />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}