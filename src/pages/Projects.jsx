import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import ProjectGrid from '../components/ProjectGrid';
import CTASection from '../components/CTASection';
import { PROJECTS, IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import usePageMeta from '../utils/usePageMeta';

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'workspaces', label: 'Workspaces' },
  { key: 'acoustics', label: 'Acoustic' },
];

/**
 * Projects — the featured projects index.
 * Large lead image, asymmetric tiles, hover effects, editorial numerals
 * and client-side category filters (Workspaces / Acoustic).
 */
export default function ProjectsPage() {
  usePageMeta(
    'Featured Projects — Ecovation Workspaces & Acoustic Interiors, Bangalore',
    'Featured workspace and acoustic projects by Ecovation — open offices, meeting rooms, collaboration zones, receptions and breakout spaces.'
  );

  const [filter, setFilter] = useState('all');
  const shown = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category.toLowerCase() === filter);

  return (
    <>
      <section className="page-hero pg-hero">
        <div className="page-hero__inner container">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Portfolio
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero__title">
              Featured <em>projects</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="page-hero__lede">
              Workspaces and acoustic interiors — open offices, meeting rooms,
              collaboration zones, receptions and breakout spaces.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pg-list">
        <div className="container">
          <div className="pg-filter" role="group" aria-label="Filter projects by category">
            {FILTERS.map((f) => (
              <button
                key={f.key}
                className={`pg-filter__pill${filter === f.key ? ' is-active' : ''}`}
                onClick={() => setFilter(f.key)}
                aria-pressed={filter === f.key}
              >
                {f.label}
              </button>
            ))}
          </div>

          <motion.div key={filter} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <ProjectGrid projects={shown} />
          </motion.div>
        </div>
      </section>

      <CTASection
        kicker="Your project next"
        heading="A workspace worth working in — let's plan it."
        lede="Share a few details and we'll send next steps within 24 hours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.contact}
        ctaLabel="Discuss your project"
        to="/contact"
      />
    </>
  );
}