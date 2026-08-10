import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';

/**
 * StickyImage + ScrollingContent — the flagship effect, unchanged mechanics.
 *
 * Structure:
 *   PortfolioSection (300vh tall — this is the scroll runway)
 *   ├── StickyImage (position: sticky, 100vh, image pinned)
 *   │     └── oversized parallax <img>  (+veil scrim, grain)
 *   └── ScrollingContent (a 300vh rail of 3×100vh slides that
 *         translates up as scroll progress goes 0 → 1, so the
 *         words "move through" the pinned image)
 *
 * scrollYProgress uses offset ["start start", "end end"] so that
 * 0 == the moment the section pins at the top of the viewport, and
 * 1 == the moment it unpins.
 */

const DEFAULT_SLIDES = [
  {
    index: '01',
    kicker: 'The workspace',
    title: 'Planned around <em>people &amp; daylight</em>',
    body: 'Open floors, meeting rooms and reception drawn from how a team works — then tuned so the room stays calm. Ecovation interiors feel like themselves from the first step in.',
    meta: ['Space planning', 'Interior fit-outs', 'Brand environments'],
  },
  {
    index: '02',
    kicker: 'The acoustics',
    title: 'PET panels that <em>quiet the room</em>',
    body: 'Echo is the enemy of focus. PET acoustic panels — made from recycled bottles — absorb reflection and carry the voice, so meetings are effortless and open floors stay legible.',
    meta: ['Acoustic baffles', 'Cloud ceilings', 'Acoustic screens'],
    alignEnd: true,
  },
  {
    index: '03',
    kicker: 'A conversation',
    title: 'Let’s create <em>better spaces</em>',
    body: 'From a single meeting room to a complete office fit-out, we design and build sustainable workspaces that are as good to work in as they are to be seen in.',
    meta: ['Workspaces', 'Acoustics', 'Fit-outs'],
    cta: { label: 'Start a project', href: '/contact' },
  },
];

export default function PortfolioSection({ slides = DEFAULT_SLIDES, image = IMAGES.studio }) {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Subtle drift of the image itself — ±8% of the (oversized) image,
  // never large enough to expose an edge because the image is 125% tall.
  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  // Move the 300vh rail up by two slides (200vh) as we scroll through.
  const railY = useTransform(scrollYProgress, [0, 1], ['0%', '-66.6667%']);

  return (
    <section className="portfolio" id="studio" ref={sectionRef} aria-label="What we do">
      <div className="portfolio__viewport">
        {/* ——— StickyImage ——— */}
        <div className="portfolio__media">
          <motion.img
            className="portfolio__img"
            src={image}
            alt="A meeting room wrapped in acoustic panels, soft daylight across the table"
            style={{ y: imageY }}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            draggable={false}
            onError={onImgError}
          />
          <div className="portfolio__veil" aria-hidden="true" />
          <div className="portfolio__grain" aria-hidden="true" />
        </div>

        {/* ——— ScrollingContent ——— */}
        <motion.div className="portfolio__rail" style={{ y: railY }} aria-label="Scrolling content">
          {slides.map((slide) => (
            <article
              className={`portfolio__slide${slide.alignEnd ? ' portfolio__slide--end' : ''}`}
              key={slide.index}
            >
              <div className="portfolio__slide-inner">
                <p className="kicker">
                  <span className="kicker__dot" aria-hidden="true" />
                  {slide.kicker}
                </p>
                <h3
                  className="portfolio__title"
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className="portfolio__body">{slide.body}</p>
                <ul className="portfolio__meta">
                  {slide.meta.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
                {slide.cta &&
                  (slide.cta.href.startsWith('/') ? (
                    <Link className="link-arrow" to={slide.cta.href}>
                      {slide.cta.label}
                      <span aria-hidden="true">→</span>
                    </Link>
                  ) : (
                    <a className="link-arrow" href={slide.cta.href}>
                      {slide.cta.label}
                      <span aria-hidden="true">→</span>
                    </a>
                  ))}
              </div>
            </article>
          ))}
        </motion.div>

        <div className="portfolio__fade" aria-hidden="true" />
      </div>
    </section>
  );
}