import { useRef } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import Reveal from '../components/Reveal';
import CTASection from '../components/CTASection';
import { PROJECTS } from '../data/projects';
import { CONTACT } from '../data/siteData';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

/**
 * ProjectDetails — /projects/:slug.
 * Hero image (parallax exit), title + facts, description, design
 * approach, gallery, then a closing CTA. Falls back to the index
 * when the slug is unknown.
 */
export default function ProjectDetails() {
  const { slug } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);

  // Hooks must run unconditionally (rules of hooks): compute meta from the
  // project when found, else fall back to generic copy before the guard.
  usePageMeta(
    project
      ? `${project.title} — Ecovation Project`
      : 'Project not found — Ecovation',
    project
      ? `${project.title} — a ${project.category.toLowerCase()} project in ${project.location}. ${project.summary}`
      : 'The project you were looking for could not be found.'
  );

  if (!project) return <Navigate to="/projects" replace />;

  return (
    <>
      <Hero project={project} />
      <Info project={project} />
      <Approach project={project} />
      <Gallery project={project} />
      <CTASection
        kicker="Begin a project like this"
        heading="A workspace worth working in — let’s plan yours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={project.heroImage}
        ctaLabel="Discuss a similar project"
        to="/contact"
      />
    </>
  );
}

function Hero({ project }) {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '14%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '26%']);
  const fade = useTransform(scrollYProgress, [0, 0.72], [1, 0]);

  return (
    <section className="prj-hero" ref={heroRef}>
      <div className="prj-hero__media">
        <motion.img
          className="prj-hero__img"
          src={project.heroImage}
          alt={project.title}
          style={{ y: imgY }}
          loading="eager"
          decoding="async"
          draggable={false}
          onError={onImgError}
        />
        <div className="prj-hero__veil" aria-hidden="true" />
      </div>

      <motion.div className="prj-hero__content container" style={{ y: contentY, opacity: fade }}>
        <Link className="prj-hero__back" to="/projects">
          <span aria-hidden="true">←</span> All projects
        </Link>
        <p className="kicker">
          <span className="kicker__dot" aria-hidden="true" />
          {project.category}
        </p>
        <h1 className="prj-hero__title">{project.title}</h1>
      </motion.div>
    </section>
  );
}

function Info({ project }) {
  return (
    <section className="prj-info container">
      <Reveal>
        <div className="prj-info__facts">
          <div className="prj-fact">
            <span className="prj-fact__label">Location</span>
            <span className="prj-fact__value">{project.location}</span>
          </div>
          <div className="prj-fact">
            <span className="prj-fact__label">Year</span>
            <span className="prj-fact__value">{project.year}</span>
          </div>
          <div className="prj-fact">
            <span className="prj-fact__label">Category</span>
            <span className="prj-fact__value">{project.category}</span>
          </div>
          <div className="prj-fact">
            <span className="prj-fact__label">Disciplines</span>
            <span className="prj-fact__value">{project.disciplines.join(' · ')}</span>
          </div>
        </div>
      </Reveal>

      <div className="prj-info__grid">
        <Reveal className="prj-info__title-col">
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Summary
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="prj-info__summary">{project.summary}</h2>
        </Reveal>
        <Reveal delay={0.14} className="prj-info__desc">
          <p>{project.description}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Approach({ project }) {
  return (
    <section className="prj-approach">
      <div className="container prj-approach__grid">
        <Reveal className="prj-approach__head">
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Design approach
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="prj-approach__body">{project.approach}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Gallery({ project }) {
  return (
    <section className="prj-gallery container">
      <div className="prj-gallery__head">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            Gallery
          </p>
        </Reveal>
      </div>
      <div className="prj-gallery__grid">
        {project.gallery.map((src, i) => (
          <Reveal
            key={src}
            delay={i * 0.06}
            className={i % 3 === 1 ? 'prj-gallery__item--wide' : ''}
          >
            <figure className={`prj-gallery__figure${i % 3 === 1 ? ' prj-gallery__figure--wide' : ''}`}>
              <img
                src={src}
                alt={`${project.title} — view ${i + 1}`}
                loading="lazy"
                decoding="async"
                draggable={false}
                onError={onImgError}
              />
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}