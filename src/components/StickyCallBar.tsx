import { useEffect, useState } from "react";

const PHONE = "(574) 532-0658";
const PHONE_HREF = "tel:+15745320658";

export function StickyCallBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-worn-white/10 bg-garage-black/95 backdrop-blur transition-transform duration-300 ease-out sm:hidden ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!visible}
    >
      <a
        href={PHONE_HREF}
        className="flex items-center justify-center gap-3 py-3.5 font-display text-base font-semibold uppercase tracking-wide text-worn-white transition-colors hover:bg-truck-red"
      >
        <span className="hidden sm:inline text-bay-grey font-utility text-xs uppercase tracking-[0.2em]">
          Gather Garage
        </span>
        <span className="h-4 w-px bg-worn-white/20 hidden sm:block" aria-hidden="true" />
        Call Now: {PHONE}
      </a>
    </div>
  );
}
