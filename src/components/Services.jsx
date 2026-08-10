import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { HOME_SERVICES } from '../data/services';
import { onImgError } from '../utils/image';

/**
 * Services — "Our Services" editorial index rows with a hover thumbnail
 * (unchanged interaction). The two service lines — Workspaces and
 * Acoustic Panels — link to their dedicated pages.
 */
export default function Services() {
  return (
    <section className="services" id="services">
      <div className="container">
        <div className="services__head">
          <Reveal>
            <h2>Our services</h2>
          </Reveal>
          <p className="services__count" aria-hidden="true">
            {String(HOME_SERVICES.length).padStart(2, '0')} services
          </p>
        </div>

        <div className="services__list">
          {HOME_SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.04}>
              <Link className="service" to={s.to}>
                <span className="service__index" aria-hidden="true">
                  {s.index}
                </span>
                <div>
                  <h3 className="service__title">{s.title}</h3>
                  <p className="service__blurb">{s.blurb}</p>
                </div>
                <span className="service__explore" aria-hidden="true">
                  Explore →
                </span>
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