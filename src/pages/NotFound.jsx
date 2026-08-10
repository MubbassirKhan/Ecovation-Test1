import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import usePageMeta from '../utils/usePageMeta';

export default function NotFound() {
  usePageMeta('Page not found — Ecovation', 'The page you were looking for could not be found.');

  return (
    <section className="nf container">
      <Reveal>
        <p className="kicker">
          <span className="kicker__dot" aria-hidden="true" />
          404
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="nf__title">This room doesn’t exist — yet.</h1>
      </Reveal>
      <Reveal delay={0.16}>
        <p className="nf__body">
          The page you followed has moved, or never had a wall. Head back to the entrance.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <Link className="nf__cta" to="/">
          Return home <span aria-hidden="true">→</span>
        </Link>
      </Reveal>
    </section>
  );
}