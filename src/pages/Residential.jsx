import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import CTASection from '../components/CTASection';
import { IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

const RESIDENTIAL_SOLUTIONS = [
  {
    id: 'home-office',
    index: '01',
    title: 'Home Office',
    blurb:
      'A focused, acoustic-balanced home office — designed for calls, deep work and the daily rhythm of working from home.',
    notes: ['Acoustic panels', 'Ergonomic layout', 'Cable & lighting design'],
    image: IMAGES.openOffice,
  },
  {
    id: 'media-room',
    index: '02',
    title: 'Media Room',
    blurb:
      'Immersive home cinema and listening rooms with acoustic treatment that keeps every sound in its right place.',
    notes: ['Bass management', 'PET acoustic panels', 'Blackout & lighting'],
    image: IMAGES.studio,
  },
  {
    id: 'living-room',
    index: '03',
    title: 'Living & Dining',
    blurb:
      'Open-plan living areas where conversation stays clear and music sounds like it should — without the echo.',
    notes: ['Echo control', 'Aesthetic panels', 'Custom finishes'],
    image: IMAGES.collaboration,
  },
  {
    id: 'bedroom',
    index: '04',
    title: 'Bedroom & Study',
    blurb:
      'Calm, quiet rooms that support sleep, focus and rest — acoustic comfort as standard, not an afterthought.',
    notes: ['Sound isolation', 'Soft materials', 'Warm finishes'],
    image: IMAGES.baffles,
  },
];

const WHY_RESIDENTIAL = [
  {
    index: '01',
    title: 'Same materials, same care',
    body: 'Every PET panel, every finish and every material decision we make for commercial spaces applies to your home — with no compromise.',
  },
  {
    index: '02',
    title: 'Designed around how you live',
    body: 'We start with how you use each room — morning calls, film nights, weekend cooking — and plan the acoustics around that reality.',
  },
  {
    index: '03',
    title: 'End-to-end delivery',
    body: 'From consultation and 3D visualization through to installation and handover — one team, one accountable process.',
  },
];

const PROCESS = [
  {
    index: '01',
    title: 'Consultation',
    body: 'We visit the space, listen to how you use it, and map the acoustic and design brief that fits your home and lifestyle.',
  },
  {
    index: '02',
    title: 'Design & Visualization',
    body: 'Material selection, panel placement and 3D views — so you can see and approve the result before a single panel is made.',
  },
  {
    index: '03',
    title: 'Execution & Handover',
    body: 'Precise, clean installation with full post-handover support — leaving your home quieter, calmer and more beautiful.',
  },
];

/**
 * Residential — Ecovation's home interiors & acoustic solutions page.
 */
export default function Residential() {
  usePageMeta(
    'Residential Interiors — Ecovation Acoustic Solutions, Bangalore',
    'Sustainable acoustic interiors for homes in Bangalore — home offices, media rooms, living spaces and bedrooms designed for clarity, calm and comfort using recycled PET acoustic panels.'
  );

  return (
    <>
      <HeroSection />
      <IntroSection />
      <SolutionsSection />
      <WhyResidentialSection />
      <ProcessSection />
      <CTASection
        kicker="Start a home project"
        heading="Your home, acoustically considered."
        lede="Tell us about your space and we'll send next steps within 24 hours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.collaboration}
        ctaLabel="Get in touch"
        to="/contact"
      />
    </>
  );
}

/* ── Hero ─────────────────────────────────────────────────────── */
function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '22%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="page-hero rs-hero" ref={heroRef}>
      <div className="page-hero__media" aria-hidden="true">
        <motion.img
          className="page-hero__img"
          src={IMAGES.reception}
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
            Residential interiors
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="page-hero__title">
            Acoustic comfort,{' '}
            <em>at home</em>.
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="page-hero__lede">
            Sustainable acoustic interiors for homes — designed around how you
            live, work, listen and rest.
          </p>
        </Reveal>
      </motion.div>
    </section>
  );
}

/* ── Intro ────────────────────────────────────────────────────── */
function IntroSection() {
  return (
    <section className="rs-intro">
      <div className="container">
        <div className="rs-intro__grid">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Why it matters at home
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="rs-intro__heading">
              The same principles that make offices calm{' '}
              <em>make homes better, too</em>.
            </h2>
          </Reveal>
          <Reveal delay={0.16} className="rs-intro__body">
            <p>
              Hard floors, high ceilings and open plans are as acoustically
              demanding at home as they are in the office. Echo, flutter and
              reverberation wear on the people inside — in every call, film
              night and conversation.
            </p>
            <p>
              Ecovation brings the same recycled PET panels, the same material
              discipline and the same design rigour that transforms commercial
              interiors into residential spaces that simply sound better — and
              look it, too.
            </p>
          </Reveal>
        </div>

        {/* Full-width editorial image */}
        <Reveal delay={0.1} className="rs-intro__figure">
          <ParallaxImage
            src={IMAGES.studio}
            alt="A calm, acoustic-finished home interior with warm light and considered materials"
            ratio="21 / 9"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ── Solutions ────────────────────────────────────────────────── */
function SolutionsSection() {
  return (
    <section className="rs-solutions" id="solutions">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            What we design
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="rs-solutions__title">
            Room by room, <em>considered</em>.
          </h2>
        </Reveal>
      </div>

      <div className="rs-solutions__list">
        {RESIDENTIAL_SOLUTIONS.map((sol, i) => (
          <article className="rs-solution" key={sol.id} id={sol.id}>
            <div className="container">
              <div className={`rs-solution__row${i % 2 === 1 ? ' rs-solution__row--flip' : ''}`}>
                <Reveal className="rs-solution__media">
                  <ParallaxImage
                    src={sol.image}
                    alt={sol.title}
                    ratio="4 / 3"
                    className="rs-solution__figure"
                    yRange={['-10%', '10%']}
                  />
                </Reveal>

                <div className="rs-solution__content">
                  <Reveal>
                    <p className="kicker">
                      <span className="kicker__dot" aria-hidden="true" />
                      {sol.index} — {sol.title.toLowerCase()}
                    </p>
                  </Reveal>
                  <Reveal delay={0.08}>
                    <h3 className="rs-solution__title">{sol.title}</h3>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <p className="rs-solution__blurb">{sol.blurb}</p>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <ul className="rs-solution__notes">
                      {sol.notes.map((n) => (
                        <li key={n}>{n}</li>
                      ))}
                    </ul>
                  </Reveal>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

/* ── Why Residential ──────────────────────────────────────────── */
function WhyResidentialSection() {
  return (
    <section className="rs-why">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Why Ecovation at home
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="rs-why__title">
            No shortcuts. <em>No compromise</em>.
          </h2>
        </Reveal>
        <div className="rs-why__grid">
          {WHY_RESIDENTIAL.map((w, i) => (
            <Reveal key={w.index} className="rs-why__card" delay={i * 0.08}>
              <span className="values__num" aria-hidden="true">{w.index}</span>
              <h3 className="rs-why__card-title">{w.title}</h3>
              <p className="rs-why__card-body">{w.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Process ──────────────────────────────────────────────────── */
function ProcessSection() {
  return (
    <section className="process">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            How we work
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="process__title">
            How we <em>work</em>.
          </h2>
        </Reveal>
        <ol className="process__list">
          {PROCESS.map((s, i) => (
            <Reveal key={s.index} className="process__step" delay={i * 0.08}>
              <span className="values__num" aria-hidden="true">{s.index}</span>
              <h3 className="process__step-title">{s.title}</h3>
              <p className="process__step-body">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
