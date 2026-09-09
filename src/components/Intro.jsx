import Reveal from './Reveal';

/**
 * Intro — the Home introduction block.
 * Editorial statement + full-width image + two short paragraphs.
 * No invented statistics, no invented client claims.
 */
export default function Intro() {
  return (
    <section className="intro container" id="intro">
      <Reveal>
        <p className="kicker">
          <span className="kicker__dot" aria-hidden="true" />
          Where we start
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="intro__heading">
          Designing spaces that <em>work &amp; sound right</em>.
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="intro__body">
          <p>
            Ecovation combines sustainable materials, thoughtful interior design and
            acoustic innovation to create spaces that perform beautifully — improving
            comfort, productivity, acoustic performance and sustainability.
          </p>
          <p>
            From turnkey interiors and PET acoustic panels to CNC cutting, printed
            panels and ceiling solutions, Ecovation delivers considered spaces for
            businesses and homeowners.
          </p>
        </div>
      </Reveal>
    </section>
  );
}