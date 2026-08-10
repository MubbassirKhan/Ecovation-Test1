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
          The office is the brand — quiet, calm, unmistakably <em>yours</em>.
        </h2>
      </Reveal>
      <Reveal delay={0.16}>
        <div className="intro__body">
          <p>
            EcoVation designs and builds workplaces in which sound is a material.
            Across open floors, meeting rooms and reception, we plan generous, honest
            spaces — then tune them with PET acoustic panels and absorptive surfaces
            until the room feels settled: echo gone, voices clear, focus effortless.
          </p>
          <p>
            Every project is made from sustainable materials, drawn close to the way
            a team actually works, and finished with enough care that the space
            still speaks for the brand long after the handover.
          </p>
        </div>
      </Reveal>
    </section>
  );
}