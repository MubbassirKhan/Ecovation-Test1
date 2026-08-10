import Reveal from '../components/Reveal';
import ProjectGrid from '../components/ProjectGrid';
import CTASection from '../components/CTASection';
import { PROJECTS, IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import usePageMeta from '../utils/usePageMeta';

/**
 * Projects — the premium portfolio index.
 * Large lead image, asymmettric tiles, hover effects, editorial numerals.
 */
export default function ProjectsPage() {
  usePageMeta(
    'Projects — Ecovation Workspaces & Acoustic Interiors, Bangalore',
    'A selection of workspace and acoustic-interior projects by Ecovation — open-plan offices, meeting suites, collaboration zones and receptions designed in Bangalore.'
  );

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
              Work that <em>speaks softly</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="page-hero__lede">
              Workspaces and acoustic interiors — open floors, meeting suites, collaboration
              zones and receptions. Placeholder stories until real project data is shared.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pg-list">
        <div className="container">
          <ProjectGrid projects={PROJECTS} />
        </div>
      </section>

      <CTASection
        kicker="Your project next"
        heading="A workspace worth working in — let’s plan it."
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