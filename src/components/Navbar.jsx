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
  const [dropdownOpen, setDropdownOpen] = useState(false);

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
        <div className="nav__container">
          <Logo className="nav__brand" href="/" size={48} onClick={() => setOpen(false)} />

          <nav className="nav__links" aria-label="Primary">
            {NAVIGATION.map((l) => (
              l.submenu ? (
                <div key={l.label} className="nav__dropdown">
                  <button className="nav__dropdown-toggle">
                    {l.label}
                    <span className="nav__dropdown-arrow">›</span>
                  </button>
                  <div className="nav__dropdown-menu">
                    {l.submenu.map((item) => (
                      <Link key={item.to} to={item.to} className="nav__dropdown-link">
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link key={l.to} to={l.to}>
                  {l.label}
                </Link>
              )
            ))}
          </nav>

          <Link className="nav__cta" to="/contact">
            Get a quote
          </Link>

          <button
            className={`nav__burger${open ? ' nav__burger--active' : ''}`}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>

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
            <div className="nav__overlay-head">
              <Logo className="nav__overlay-brand" href="/" size={42} onClick={() => setOpen(false)} />
              <span>Menu</span>
              <button
                className="nav__overlay-close"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <span />
                <span />
              </button>
            </div>
            {NAVIGATION.map((l, i) => (
              l.submenu ? (
                <div key={l.label}>
                  <button
                    className="nav__overlay-submenu-toggle"
                    onClick={() => setDropdownOpen(dropdownOpen === l.label ? null : l.label)}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: 34 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, ease: BURGER_EASE, delay: 0.08 + i * 0.07 }}
                      className="nav__overlay-link"
                    >
                      {l.label}
                      <span className={`arrow ${dropdownOpen === l.label ? 'open' : ''}`}>›</span>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {dropdownOpen === l.label && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {l.submenu.map((item, j) => (
                          <motion.div
                            key={item.to}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: j * 0.05 }}
                          >
                            <Link
                              className="nav__overlay-submenu-link"
                              to={item.to}
                              onClick={() => {
                                setOpen(false);
                                setDropdownOpen(null);
                              }}
                            >
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 34 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: BURGER_EASE, delay: 0.08 + i * 0.07 }}
                >
                  <Link className="nav__overlay-link" to={l.to} onClick={() => setOpen(false)}>
                    {l.label}
                  </Link>
                </motion.div>
              )
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}