import Reveal from '../components/Reveal';
import ParallaxImage from '../components/ParallaxImage';
import CTASection from '../components/CTASection';
import { IMAGES } from '../data/projects';
import { CONTACT } from '../data/siteData';
import usePageMeta from '../utils/usePageMeta';

const VALUES = [
  {
    index: '01',
    title: 'Material-conscious',
    body: 'PET panels from recycled bottles, honest finishes, and materials chosen to last beyond the first lease.',
  },
  {
    index: '02',
    title: 'Acoustically composed',
    body: 'We treat sound as a design material — every room planned so it can hear itself think.',
  },
  {
    index: '03',
    title: 'People-first',
    body: 'Spaces drawn from how a team works — flow, focus and the daily rhythm of the place.',
  },
];

/**
 * About — editorial story. No invented awards, years, counts, clients,
 * certifications or testimonials — only what the studio publicly stands for.
 */
export default function About() {
  usePageMeta(
    'About — Ecovation, Sustainable Workspaces & Acoustic Solutions',
    'Ecovation combines sustainable materials, thoughtful interior design and acoustic innovation to create spaces that perform beautifully across India.'
  );

  return (
    <>
      <section className="page-hero about-hero">
        <div className="page-hero__media" aria-hidden="true">
          <img
            src={IMAGES.studio}
            alt=""
            loading="eager"
            decoding="async"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 35%' }}
          />
          <div className="page-hero__veil" aria-hidden="true" />
        </div>
        <div className="page-hero__inner container">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              About EcoVation
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero__title">
              Designing <em>better spaces</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="page-hero__lede">
              Sustainable materials, intelligent design and precision execution
              for modern Indian interiors.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="story container">
        <Reveal>
          <p className="kicker">
            <span className="kicker__dot" aria-hidden="true" />
            The studio
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="story__heading">
            Sustainable interiors that improve comfort, productivity and well-being.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="story__body">
            <p>
              Ecovation combines sustainable materials, thoughtful interior design
              and acoustic innovation to create spaces that perform beautifully.
            </p>
            <p>
              Our mission is to transform modern interiors through sustainable
              materials, intelligent design and precision execution - creating
              environments that improve comfort, productivity, acoustic performance
              and well-being.
            </p>
            <p>
              Our vision is to make sustainable, high-performance interior solutions
              accessible to businesses and homeowners, establishing recycled
              materials as the standard for modern Indian interiors.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="values">
        <div className="container">
          <Reveal>
            <h2 className="values__title">What guides every project</h2>
          </Reveal>
          <div className="values__grid">
            {VALUES.map((v) => (
              <Reveal key={v.index} className="values__card">
                <span className="values__num" aria-hidden="true">{v.index}</span>
                <h3 className="values__card-title">{v.title}</h3>
                <p className="values__card-body">{v.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="about-figure container">
        <ParallaxImage
          src={IMAGES.collaboration}
          alt="Two people collaborating at a table in an acoustic-finished workspace"
          ratio="16 / 9"
          className="about-figure__img"
        />
        <Reveal delay={0.1}>
          <p className="about-figure__caption">
            Collaboration furniture and acoustic screens — space divided without walls, sound kept out.
          </p>
        </Reveal>
      </section>

      <CTASection
        kicker="Work with us"
        heading="Let’s make your office quiet, calm and unmistakably yours."
        email={{ href: CONTACT.emailHref, label: CONTACT.email }}
        phone={{ href: CONTACT.phoneHref, label: CONTACT.phoneDisplay }}
        note={CONTACT.address}
        mediaSrc={IMAGES.openOffice}
        ctaLabel="Start the conversation"
        to="/contact"
      />
    </>
  );
}