import { Link } from 'react-router-dom';
import Logo from './Logo';
import { NAVIGATION, CONTACT } from '../data/siteData';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <div>
            <Logo className="footer__brand" href="/" size={96} />
            <p className="footer__meta" style={{ marginTop: '1rem', color: 'var(--muted)', fontSize: '0.85rem' }}>
              Sustainable interiors and acoustic solutions designed for better spaces — Bengaluru, India.
            </p>
          </div>

          <nav className="footer__links" aria-label="Footer">
            {NAVIGATION.map((l) => (
              <Link key={l.to} to={l.to}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <span>© 2026 Ecovation Interiors</span>
          <span className="footer__contact">
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </span>
          <span className="footer__addr">Mahalakshmi Layout, Bengaluru - 560082</span>
        </div>
      </div>
    </footer>
  );
}