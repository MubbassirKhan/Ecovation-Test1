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
              Sustainable workspaces, PET acoustic panels &amp; acoustic interiors — Bangalore.
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
          <span>© 2026 EcoVation Interiors</span>
          <span className="footer__contact">
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
          </span>
          <span className="footer__addr">Nagasandra Tumkur Road, Bangalore 560073</span>
        </div>
      </div>
    </footer>
  );
}