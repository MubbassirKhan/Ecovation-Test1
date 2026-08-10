import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import CTASection from '../components/CTASection';
import { WORKSPACE_FOCUS, WORKSPACE_OUTCOMES } from '../data/services';
import { IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

/**
 * Workspaces — hero, philosophy (why it matters beyond looks), the full
 * list of workspace solutions, and the sustainable-interiors statement.
 */
export default function Workspaces() {
  usePageMeta(
    'Workspaces — Ecovation, Sustainable Workspace Design in Bangalore',
    'Ecovation designs and delivers modern workspaces that combine thoughtful interior planning, sustainable materials, acoustic comfort and premium finishes — in Bangalore.'
  );

  return (
    <>
      <Hero />
      <PhilosophySection />
      <FocusList />
      <SustainableSection />
      <CTASection
        kicker="Start your project"
        heading="The workspace your team deserves to work in."
        lede="Share a few details and we'll send next steps within 24 hours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.openOffice}
        ctaLabel="Get a quote"
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
            Sustainable workspace design <em>&amp; interiors</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="page-hero__lede">
            Ecovation designs and delivers modern workspaces that combine thoughtful
            interior planning, sustainable materials, acoustic comfort, and premium
            finishes.
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
              The goal is not simply an office that looks good.
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="ws-philosophy__body">
              <p>
                Every workspace we deliver is planned so the room works as hard as
                the people in it — ergonomic flow, natural comfort, and acoustic
                balance baked in from the first drawing.
              </p>
              <p>
                Sustainable materials and premium finishes come together as one
                system, so the space performs, endures, and strengthens the brand
                that works within it.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="studio__pillars">
            {WORKSPACE_OUTCOMES.map((o) => (
              <span className="studio__pillar" key={o}>
                {o}
              </span>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FocusList() {
  return (
    <section className="focus">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            What we design
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="focus__title">The complete workspace, one system.</h2>
        </Reveal>
      </div>

      <div className="container">
        <ol className="focus__list">
          {WORKSPACE_FOCUS.map((item, i) => (
            <Reveal key={item} className="focus__row" delay={(i % 5) * 0.04}>
              <span className="focus__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="focus__label">{item}</span>
            </Reveal>
          ))}
        </ol>
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
              PET acoustic panels are pressed from recycled bottles into
              sound-absorbing boards: light, rigid, fire-safe and finished to
              your specification. The sustainability is not a label on the wall —
              it quiets the room.
            </p>
            <p>
              Finishes are chosen to be honest, durable and kind to the environment,
              so the workspace you build is the workspace that lasts.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}