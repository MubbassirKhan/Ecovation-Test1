import { Link } from 'react-router-dom';
import Reveal from './Reveal';

/**
 * CTASection — the closing editorial call-to-action used across pages.
 * Preserves the approved contact-section atmosphere (image scrim, centred),
 * without invented copy. Links to /contact (real form) and tel:/mailto:.
 */
export default function CTASection({ kicker = 'Start a project', heading, email, phone, to = '/contact', ctaLabel = "Let's talk", mediaSrc, note }) {
  return (
    <section className="cta" id="cta">
      {mediaSrc && (
        <div className="cta__media" aria-hidden="true">
          <img src={mediaSrc} alt="" loading="lazy" decoding="async" />
        </div>
      )}
      <div className="cta__inner container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            {kicker}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="cta__heading">{heading}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="cta__actions">
            <Link className="cta__btn" to={to}>
              {ctaLabel} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </Reveal>
        {(email || phone) && (
          <Reveal delay={0.14}>
            <div className="cta__meta">
              {email && (
                <a href={email.href}>
                  {email.label}
                </a>
              )}
              {phone && (
                <a href={phone.href}>
                  {phone.label}
                </a>
              )}
              {note && <span>{note}</span>}
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}