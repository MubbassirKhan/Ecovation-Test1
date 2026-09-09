import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import CTASection from '../components/CTASection';
import {
  ACOUSTIC_SOLUTIONS,
  ACOUSTIC_BENEFITS,
  PANEL_APPLICATIONS,
  PANEL_SPECS,
  PET_NOTE,
} from '../data/services';
import { IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

/**
 * AcousticPanels — the PET acoustic panels page.
 * Hero, an editorial "what PET is", the four products as large cinematic
 * sections (no small cards), the benefits strip, and a closing CTA.
 */
export default function AcousticPanels() {
  usePageMeta(
    'PET Acoustic Panels — Ecovation Acoustic Solutions, Bengaluru',
    'Advanced sound solutions made from recycled PET materials, with 120+ colours, customizable fabrication and acoustic applications for workplaces, studios, hospitality and homes.'
  );

  return (
    <>
      <Hero />
      <WhatIsPET />
      <Products />
      <Benefits />
      <PanelDetails />
      <CTASection
        kicker="Get a quote"
        heading="Quiet the room. Carry the voice. Make it yours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.acousticPanels}
        ctaLabel="Talk acoustics"
        to="/contact"
      />
    </>
  );
}

function Hero() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '24%']);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="page-hero ac-hero" ref={heroRef}>
      <div className="page-hero__media ac-hero__media" aria-hidden="true">
        <motion.img
          className="page-hero__img"
          src={IMAGES.baffles}
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
            Acoustic solutions
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="page-hero__title">
            <span className="page-hero__uptitle">PET</span>
            Acoustic Panels
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="page-hero__lede">
            Advanced sound solutions made from recycled PET materials for
            superior acoustic performance and sustainable interior design.
          </p>
        </Reveal>
      </motion.div>
    </section>
  );
}

function WhatIsPET() {
  return (
    <section className="pet container">
      <div className="pet__grid">
        <Reveal className="pet__intro">
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            What PET is
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="pet__heading">
            Sound-absorbing boards, <em>pressed from recycled bottles</em>.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="pet__body">{PET_NOTE}</p>
        </Reveal>
        <Reveal delay={0.2}>
          <ul className="pet__solutions">
            {[
              'Acoustic baffles',
              'Cell ceiling systems',
              'CNC cut panels',
              'Acoustic screens',
              'Acoustic clouds',
              'Printed panels',
            ].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

function Products() {
  return (
    <section className="ac-products" id="products">
      {ACOUSTIC_SOLUTIONS.map((p, i) => (
        <article className="ac-product" id={p.id} key={p.id}>
          <div className="container">
            <div className={`ac-product__row${i % 2 === 1 ? ' ac-product__row--flip' : ''}`}>
              <Reveal className="ac-product__media">
                <ParallaxImage
                  src={p.image}
                  alt={p.title}
                  ratio="4 / 3"
                  className="ac-product__figure"
                  yRange={['-12%', '12%']}
                />
              </Reveal>

              <div className="ac-product__content">
                <Reveal>
                  <p className="kicker">
                    <span className="kicker__dot" aria-hidden="true" />
                    {p.index} — {p.title.toLowerCase()}
                  </p>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="ac-product__title">{p.title}</h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="ac-product__blurb">{p.blurb}</p>
                </Reveal>
                <Reveal delay={0.2}>
                  <ul className="ac-product__notes">
                    {p.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

function Benefits() {
  return (
    <section className="ac-benefits">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Why it matters
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="ac-benefits__title">What good acoustics give you</h2>
        </Reveal>
        <div className="ac-benefits__grid">
          {ACOUSTIC_BENEFITS.map((b, i) => (
            <Reveal key={b.title} className="ac-benefits__card" delay={i * 0.06}>
              <span className="ac-benefits__num" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="ac-benefits__card-title">{b.title}</h3>
              <p className="ac-benefits__card-body">{b.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function PanelDetails() {
  return (
    <section className="ac-benefits">
      <div className="container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Product data
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="ac-benefits__title">Made for performance and flexibility</h2>
        </Reveal>
        <div className="ac-benefits__grid">
          <Reveal className="ac-benefits__card">
            <span className="ac-benefits__num" aria-hidden="true">01</span>
            <h3 className="ac-benefits__card-title">Product specifications</h3>
            <ul className="ac-product__notes">
              {PANEL_SPECS.map((spec) => <li key={spec}>{spec}</li>)}
            </ul>
          </Reveal>
          <Reveal className="ac-benefits__card" delay={0.08}>
            <span className="ac-benefits__num" aria-hidden="true">02</span>
            <h3 className="ac-benefits__card-title">Perfect for every space</h3>
            <ul className="ac-product__notes">
              {PANEL_APPLICATIONS.map((application) => <li key={application}>{application}</li>)}
            </ul>
          </Reveal>
          <Reveal className="ac-benefits__card" delay={0.16}>
            <span className="ac-benefits__num" aria-hidden="true">03</span>
            <h3 className="ac-benefits__card-title">Fully customizable</h3>
            <p className="ac-benefits__card-body">
              120+ colours, CNC cutting, printed graphics, custom sizes, integrated lighting and installation across walls, ceilings, baffles and screens.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}