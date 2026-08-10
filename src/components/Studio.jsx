import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';

/**
 * Studio → About statement on the Home page.
 * Editorial image with its own small parallax (in normal flow) +
 * copy. Fake stats removed — no invented years/projects/awards.
 */
export default function Studio() {
  const figureRef = useRef(null);

  const { scrollYProgress } = useScroll({ target: figureRef, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  const PILLARS = ['Material-conscious', 'Acoustically composed', 'People-first'];

  return (
    <section className="studio container" id="about">
      <div className="studio__grid">
        <motion.figure
          className="studio__figure"
          ref={figureRef}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px 0px' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.img
            src={IMAGES.studioSmall}
            alt="A collaboration space with people working around an acoustic-finished table"
            style={{ y }}
            loading="lazy"
            decoding="async"
            draggable={false}
            onError={onImgError}
          />
          <span className="studio__label" aria-hidden="true">
            © EcoVation — Bangalore
          </span>
        </motion.figure>

        <div className="studio__content">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              About EcoVation
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="studio__heading">
              Workplaces that sound <em>as good</em> as they look.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="studio__body">
            <p>
              EcoVation is a Bangalore studio for sustainable workspaces and acoustic
              interiors. We shape offices, meeting rooms, collaboration zones and
              reception areas around how people actually work — and around how a room
              should sound.
            </p>
            <p>
              Our acoustic surfaces are made from recycled PET bottles, engineered to
              absorb echo and carry the voice. Sustainable materials and acoustic
              comfort are not an add-on here — they are where every project begins.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="studio__pillars">
            {PILLARS.map((p) => (
              <span className="studio__pillar" key={p}>
                {p}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}