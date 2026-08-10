import { useEffect, useState } from 'react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from 'framer-motion';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { NAVIGATION, CONTACT } from '../data/siteData';
import { onImgError } from '../utils/image';

const BURGER_EASE = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const { scrollY, scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 });

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 40);
  });

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`nav${scrolled ? ' nav--scrolled' : ''}`}>
        <Logo className="nav__brand" href="/" size={48} onClick={() => setOpen(false)} />

        <nav className="nav__links" aria-label="Primary">
          {NAVIGATION.map((l) => (
            <Link key={l.to} to={l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link className="nav__cta" to="/contact">
          Start a project
        </Link>

        <button
          className="nav__burger"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>

        <motion.div className="nav__progress" style={{ scaleX: progress }} aria-hidden="true" />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav__overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: BURGER_EASE }}
          >
            {NAVIGATION.map((l, i) => (
              <motion.div
                key={l.to}
                initial={{ opacity: 0, y: 34 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: BURGER_EASE, delay: 0.08 + i * 0.07 }}
              >
                <Link className="nav__overlay-link" to={l.to} onClick={() => setOpen(false)}>
                  {l.label}
                  <small>0{i + 1}</small>
                </Link>
              </motion.div>
            ))}
            <motion.div
              className="nav__overlay-meta"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
              <a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a>
              <span>{CONTACT.address}</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}