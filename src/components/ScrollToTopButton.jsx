import { useEffect, useState } from 'react';

const SHOW_AFTER = 480;

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => setVisible(window.scrollY > SHOW_AFTER);
    updateVisibility();
    window.addEventListener('scroll', updateVisibility, { passive: true });
    return () => window.removeEventListener('scroll', updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  return (
    <button
      className={`scroll-top${visible ? ' is-visible' : ''}`}
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      data-tooltip="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <span className="scroll-top__arrow" aria-hidden="true">↑</span>
      <span className="scroll-top__ring" aria-hidden="true" />
    </button>
  );
}
