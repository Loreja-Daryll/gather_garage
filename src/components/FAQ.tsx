import { useState } from "react";
import { useReveal } from "../hooks/useReveal";

const faqs = [
  {
    q: "Will you upsell me on repairs I don't need?",
    a: "No. We diagnose first, explain what we find, and price it before any work starts. If something isn't urgent, we'll tell you that too.",
  },
  {
    q: "How does pricing actually work?",
    a: "You get the price after diagnosis, before repair. Nothing gets added to the ticket without you approving it first.",
  },
  {
    q: "How does the shared workshop actually work?",
    a: "Details on supervision, cost, and booking are still being finalized \u2014 call the shop directly and we'll walk you through what's available right now.",
  },
  {
    q: "How long does a typical repair take?",
    a: "It depends on the job and what we find during diagnosis. We'll give you a real timeline once we know what we're working with, not a generic estimate.",
  },
];

export function FAQ() {
  const ref = useReveal<HTMLDivElement>();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-garage-black px-6 py-20 text-worn-white sm:px-10 lg:px-16">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-3xl">
        <p className="font-utility text-xs uppercase tracking-[0.3em] text-beam-orange">
          Questions
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl">
          Before you call
        </h2>

        <div className="mt-10 flex flex-col divide-y divide-worn-white/10 border-y border-worn-white/10">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left font-body text-base font-semibold text-worn-white transition-colors hover:text-truck-red"
                >
                  {item.q}
                  <span
                    className={`font-utility text-lg text-bay-grey transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 font-body text-sm leading-relaxed text-worn-white/75">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
