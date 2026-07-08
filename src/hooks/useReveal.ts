import { useEffect, useRef } from "react";

/**
 * Attaches an IntersectionObserver to the returned ref and toggles
 * `.is-visible` when the element scrolls into view. Pairs with the
 * `.reveal-on-scroll` utility class defined in theme.css.
 */
export function useReveal<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
