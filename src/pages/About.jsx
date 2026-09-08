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
    'Ecovation is a Bangalore studio for sustainable workspaces and acoustic interiors — better workplaces through material-conscious design, acoustic comfort and people-first planning.'
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
              Sustainable workspaces, <em>built on sound</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="page-hero__lede">
              A Bangalore practice for sustainable interiors, acoustic fit-outs
              and recycled PET panels — where every project starts with how the room sounds.
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
            We make workplaces where people work better — by starting with how the room sounds.
          </h2>
        </Reveal>
        <Reveal delay={0.16}>
          <div className="story__body">
            <p>
              EcoVation is a Bangalore-based practice for sustainable workspaces,
              interior fit-outs and PET acoustic panels. We plan offices, meeting
              rooms, collaboration zones and reception areas around two convictions:
              that a workplace should leave people calm and focused, and that the
              materials that achieve this can be genuinely sustainable.
            </p>
            <p>
              Sound is where these two meet. Hard rooms exhaust people — echo stacks
              the noise, hides the voice and wears out the room. Our acoustic surfaces,
              made from recycled PET, absorb that reflection and return clarity: speech
              lands clean, meetings feel lighter, focus comes back. Sustainable materials
              and acoustic comfort are not an add-on here — they are where every project begins.
            </p>
            <p>
              From a single meeting room to a full office fit-out, we work closely,
              draw from how the team actually works, and finish with the care that
              lets a space still speak for its brand years later.
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