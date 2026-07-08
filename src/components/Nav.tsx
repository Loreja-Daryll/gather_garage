import { useState } from "react";

const PHONE = "(574) 532-0658";
const PHONE_HREF = "tel:+15745320658";

const LINKS = [
  { label: "Services", href: "#offer" },
  { label: "How It Works", href: "#mechanism" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

export function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-worn-white/10 bg-garage-black/95 backdrop-blur">
      <div className="flex h-16 items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#hero"
          className="font-display text-lg font-semibold uppercase tracking-tight text-worn-white"
          onClick={() => setMenuOpen(false)}
        >
          Gather Garage
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 sm:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-utility text-xs uppercase tracking-wide text-worn-white/75 transition-colors hover:text-truck-red"
            >
              {link.label}
            </a>
          ))}
          <a
            href={PHONE_HREF}
            className="inline-flex items-center bg-truck-red px-5 py-2.5 font-display text-sm font-semibold uppercase tracking-wide text-worn-white transition-colors hover:bg-truck-red-dim"
          >
            Call Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="relative flex h-10 w-10 flex-col items-center justify-center gap-1.5 sm:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`h-[1.5px] w-6 bg-worn-white transition-all duration-300 ease-out ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-worn-white transition-all duration-300 ease-out ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[1.5px] w-6 bg-worn-white transition-all duration-300 ease-out ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-out sm:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <nav className="flex flex-col gap-1 border-t border-worn-white/10 bg-garage-black-soft px-6 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="py-3 font-utility text-sm uppercase tracking-wide text-worn-white/80 transition-colors hover:text-truck-red"
              >
                {link.label}
              </a>
            ))}
            <a
              href={PHONE_HREF}
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex items-center justify-center bg-truck-red px-5 py-3 font-display text-sm font-semibold uppercase tracking-wide text-worn-white transition-colors hover:bg-truck-red-dim"
            >
              Call Now: {PHONE}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
