import { useEffect } from 'react';

/**
 * usePageMeta — per-page SEO.
 * Sets document.title and the description + OG meta tags on each route,
 * restoring the defaults on unmount. The tags are declared once in
 * index.html; this hook only updates their content attrs (cheap, no DOM churn).
 */
export default function usePageMeta(title, description, image) {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title;

    const apply = (selector, attr, value) => {
      const tag = document.head.querySelector(selector);
      if (tag) tag.setAttribute(attr, value);
    };

    apply('meta[name="description"]', 'content', description);
    apply('meta[property="og:title"]', 'content', title);
    apply('meta[property="og:description"]', 'content', description);
    apply('meta[name="twitter:title"]', 'content', title);
    apply('meta[name="twitter:description"]', 'content', description);
    if (image) {
      apply('meta[property="og:image"]', 'content', image);
      apply('meta[name="twitter:image"]', 'content', image);
    }

    return () => {
      document.title = previousTitle;
    };
  }, [title, description, image]);
}