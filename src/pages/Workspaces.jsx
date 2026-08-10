import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import CTASection from '../components/CTASection';
import { WORKSPACE_TYPES } from '../data/services';
import { IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

/**
 * Workspaces — hero, philosophy, the five workspace typologies, and the
 * sustainable-interiors statement on how the room is built.
 */
export default function Workspaces() {
  usePageMeta(
    'Workspaces — Ecovation, Sustainable Workspace Design in Bangalore',
    'Workspace design and fit-outs in Bangalore — open offices, private offices, meeting rooms, collaboration zones and reception areas, planned around daylight, people and acoustic comfort.'
  );

  return (
    <>
      <Hero />
      <PhilosophySection />
      <TypesList />
      <SustainableSection />
      <CTASection
        kicker="Let's design your workspace"
        heading="Tell us how your team works — we'll draw the room around it."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.openOffice}
        ctaLabel="Start your project"
        to="/contact"
      />
    </>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="page-hero ws-hero" ref={heroRef}>
      <div className="page-hero__media ws-hero__media" aria-hidden="true">
        <motion.img
          className="page-hero__img"
          src={IMAGES.openOffice}
          alt=""
          style={{ y: imgY }}
          loading="eager"
          decoding="async"
          onError={onImgError}
        />
        <div className="page-hero__veil" aria-hidden="true" />
      </div>

      <motion.div className="page-hero__inner container" style={{ y: contentY, opacity: fade }}>
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Workspaces
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="page-hero__title">
            Offices planned <em>for the people in them</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="page-hero__lede">
            Every typology of the modern workplace — open floors, private rooms, meeting
            suites, collision zones, reception — planned for daylight, movement and calm.
          </p>
        </Reveal>
      </motion.div>
    </section>
  );
}

function PhilosophySection() {
  return (
    <section className="ws-philosophy container">
      <div className="ws-philosophy__grid">
        <ParallaxImage
          src={IMAGES.collaboration}
          alt="Open collaboration area with people around a table"
          ratio="4 / 3"
          className="ws-philosophy__figure"
        />
        <div className="ws-philosophy__content">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Workspace philosophy
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="ws-philosophy__heading">
              The room is the fourth member of the team.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="ws-philosophy__body">
              <p>
                We begin a workspace from how the team actually works — who needs quiet,
                who needs together, where the day flows loudest. Then we plan space,
                light and sound around those rhythms.
              </p>
              <p>
                Acoustic comfort is baked into the plan from the first drawing: ceilings
                that absorb, walls that carry the voice, screens that divide without
                enclosing. The result is a room that never competes with your work.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TypesList() {
  return (
    <section className="ws-types">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            What we design
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="ws-types__title">The five rooms of a complete workspace</h2>
        </Reveal>
      </div>

      <div className="ws-types__list">
        {WORKSPACE_TYPES.map((t, i) => (
          <article className="ws-type" key={t.id}>
            <div className="container ws-type__row">
              <Reveal className="ws-type__index" delay={i * 0.04}>
                <span aria-hidden="true">{t.index}</span>
              </Reveal>

              <Reveal className="ws-type__content" delay={i * 0.04}>
                <h3 className="ws-type__title">{t.title}</h3>
                <p className="ws-type__blurb">{t.blurb}</p>
                <ul className="ws-type__notes">
                  {t.notes.map((n) => (
                    <li key={n}>{n}</li>
                  ))}
                </ul>
              </Reveal>

              <Reveal className="ws-type__media" delay={i * 0.06}>
                <ParallaxImage
                  src={t.image}
                  alt={t.title}
                  ratio="4 / 3"
                  className="ws-type__figure"
                />
              </Reveal>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function SustainableSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section className="ws-sustainable" id="sustainable" ref={ref}>
      <div className="ws-sustainable__media" aria-hidden="true">
        <motion.img
          src={IMAGES.acousticPanels}
          alt=""
          style={{ y }}
          loading="lazy"
          decoding="async"
          onError={onImgError}
        />
        <div className="ws-sustainable__veil" aria-hidden="true" />
      </div>
      <div className="ws-sustainable__inner container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Sustainable interiors
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="ws-sustainable__title">
            Built from materials that <em>give back</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="ws-sustainable__body">
            <p>
              PET acoustic panels are pressed from recycled bottles into sound-absorbing
              boards: light, rigid, fire-safe and printable. The sustainability is not a
              label on the wall — it shushes the room.
            </p>
            <p>
              Wherever we can, finishes are chosen to be honest, durable and kind — so the
              office you build is the office that lasts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}