import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Intro from '../components/Intro';
import Studio from '../components/Studio';
import PortfolioSection from '../components/PortfolioSection';
import Projects from '../components/Projects';
import Services from '../components/Services';
import CTASection from '../components/CTASection';
import { PROJECTS } from '../data/projects';
import { IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';

/**
 * Ecovation — Home.
 * Scroll ladder: Hero (logo + parallax) → Marquee → Intro → Studio
 * → Workspace Design (sticky image) → Acoustic Solutions (rows) →
 * Selected Work (sticky crossfade) → CTA.
 */
export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Intro />
      <Studio />
      <PortfolioSection />
      <Services />
      <Projects projects={PROJECTS} />
      <CTASection
        kicker="Let's create better spaces"
        heading="The quiet office your team will notice in the first minute."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.contact}
        ctaLabel="Start a project"
        to="/contact"
      />
    </>
  );
}