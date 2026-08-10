import { useState } from 'react';
import { motion } from 'framer-motion';
import Reveal from '../components/Reveal';
import { CONTACT } from '../data/siteData';
import { IMAGES } from '../data/projects';
import { onImgError } from '../utils/image';
import usePageMeta from '../utils/usePageMeta';

const PROJECT_TYPES = [
  'Workspace design',
  'Acoustic panels',
  'Meeting rooms & acoustics',
  'Office fit-out',
  'Reception / brand environment',
  'Something else',
];

const INITIAL = { name: '', email: '', phone: '', company: '', projectType: '', message: '' };

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Please tell us your name.';
  if (!values.email.trim()) errors.email = 'Please add your email.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = 'That email does not look right yet.';
  if (values.phone.trim() && !/^[+\d][\d\s\-()]{7,18}$/.test(values.phone.trim()))
    errors.phone = 'Enter a valid phone number (digits, spaces, +).';
  if (!values.projectType) errors.projectType = 'Pick the kind of project.';
  if (!values.message.trim()) errors.message = 'Tell us a little about your space.';
  else if (values.message.trim().length < 12)
    errors.message = 'That is a touch short — a sentence helps us respond well.';
  return errors;
}

/**
 * Contact — real studio contact details + frontend-only enquiry form.
 * No fake backend: success state is purely local, the mail link is a
 * real mailto: to info@ecovation.co.in.
 */
export default function Contact() {
  usePageMeta(
    'Contact — Ecovation, Sustainable Workspaces & Acoustic Solutions',
    'Start a project with Ecovation in Bangalore — workspace design, PET acoustic panels and office fit-outs. Call +91 95138 77866 or write to info@ecovation.co.in.'
  );

  const [values, setValues] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const errs = validate(values);
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSent(true);
    }
  };

  return (
    <>
      <section className="page-hero contact-hero">
        <div className="contact-hero__media" aria-hidden="true">
          <img src={IMAGES.reception} alt="" loading="eager" decoding="async" onError={onImgError} />
          <div className="contact-hero__veil" aria-hidden="true" />
        </div>
        <div className="page-hero__inner container">
          <Reveal>
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Contact
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="page-hero__title">
              Let’s talk about <em>your space</em>.
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="page-hero__lede">
              A new workspace, a noisy meeting room, a brand reception — we begin with a
              conversation about what the room needs to do.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="contact-page container">
        <div className="contact-page__grid">
          {/* Real details */}
          <Reveal className="contact-page__details">
            <p className="kicker">
              <span className="kicker__dot" aria-hidden="true" />
              Reach us directly
            </p>
            <h2 className="contact-page__h2">Call, write or visit.</h2>

            <ul className="contact-page__list">
              <li className="contact-detail">
                <span className="contact-detail__label">Studio</span>
                <a className="contact-detail__value" href={CONTACT.phoneHref}>
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li className="contact-detail">
                <span className="contact-detail__label">Email</span>
                <a className="contact-detail__value" href={CONTACT.emailHref}>
                  {CONTACT.email}
                </a>
              </li>
              <li className="contact-detail">
                <span className="contact-detail__label">Address</span>
                <span className="contact-detail__value contact-detail__value--text">
                  {CONTACT.addressLine1}
                  <br />
                  {CONTACT.addressLine2}, {CONTACT.region}
                </span>
              </li>
            </ul>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.08} className="contact-page__form">
            {sent ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                role="status"
              >
                <p className="kicker">
                  <span className="kicker__dot" aria-hidden="true" />
                  Thank you
                </p>
                <h2 className="form-success__title">Your message is on its way.</h2>
                <p className="form-success__body">
                  We will reply to <strong>{values.email}</strong> shortly. For anything urgent,
                  call us on <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>.
                </p>
                <button
                  className="form-success__again"
                  onClick={() => {
                    setValues(INITIAL);
                    setSent(false);
                  }}
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form className="form" noValidate onSubmit={onSubmit}>
                <div className="form__row">
                  <div className="field">
                    <label className="field__label" htmlFor="f-name">Name</label>
                    <input
                      id="f-name"
                      className={`field__input${errors.name ? ' field__input--error' : ''}`}
                      type="text"
                      value={values.name}
                      onChange={set('name')}
                      autoComplete="name"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="field__error">{errors.name}</p>}
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="f-email">Email</label>
                    <input
                      id="f-email"
                      className={`field__input${errors.email ? ' field__input--error' : ''}`}
                      type="email"
                      value={values.email}
                      onChange={set('email')}
                      autoComplete="email"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="field__error">{errors.email}</p>}
                  </div>
                </div>

                <div className="form__row">
                  <div className="field">
                    <label className="field__label" htmlFor="f-phone">Phone <span className="field__opt">(optional)</span></label>
                    <input
                      id="f-phone"
                      className={`field__input${errors.phone ? ' field__input--error' : ''}`}
                      type="tel"
                      value={values.phone}
                      onChange={set('phone')}
                      autoComplete="tel"
                      placeholder="+91 …"
                    />
                    {errors.phone && <p className="field__error">{errors.phone}</p>}
                  </div>
                  <div className="field">
                    <label className="field__label" htmlFor="f-company">Company <span className="field__opt">(optional)</span></label>
                    <input
                      id="f-company"
                      className="field__input"
                      type="text"
                      value={values.company}
                      onChange={set('company')}
                      autoComplete="organization"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="f-type">Project type</label>
                  <select
                    id="f-type"
                    className={`field__input field__select${errors.projectType ? ' field__input--error' : ''}`}
                    value={values.projectType}
                    onChange={set('projectType')}
                  >
                    <option value="">Select a project type</option>
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                  {errors.projectType && <p className="field__error">{errors.projectType}</p>}
                </div>

                <div className="field">
                  <label className="field__label" htmlFor="f-message">Message</label>
                  <textarea
                    id="f-message"
                    className={`field__input field__textarea${errors.message ? ' field__input--error' : ''}`}
                    rows={5}
                    value={values.message}
                    onChange={set('message')}
                    placeholder="Tell us about your space — where it is, what it does, and what the room sounds like today."
                  />
                  {errors.message && <p className="field__error">{errors.message}</p>}
                </div>

                <button className="form__submit" type="submit">
                  Send message <span aria-hidden="true">→</span>
                </button>
                <p className="form__note">
                  This form is a front-end demo — submit sends nothing yet. It opens our mail link:
                  <a href={CONTACT.emailHref}> {CONTACT.email}</a>.
                </p>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}