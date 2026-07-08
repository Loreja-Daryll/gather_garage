import { useReveal } from "../hooks/useReveal";

const PHONE = "(574) 532-0658";
const PHONE_HREF = "tel:+15745320658";

export function FinalCTA() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-truck-red px-6 py-20 text-worn-white sm:px-10 lg:px-16">
      <div ref={ref} className="reveal-on-scroll mx-auto flex max-w-3xl flex-col items-start gap-5">
        <h2 className="font-display text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl">
          Talk to the shop, not a script.
        </h2>
        <p className="font-body text-base text-worn-white/90">
          Discounted diagnostic scans mean finding out what's wrong doesn't cost
          you full price. Whether you want it fixed or want to fix it yourself,
          call and tell us what's going on.
        </p>
        <a
          href={PHONE_HREF}
          className="inline-flex items-center gap-2 bg-garage-black px-8 py-4 font-display text-base font-semibold uppercase tracking-wide text-worn-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-garage-black-soft hover:shadow-lg active:translate-y-0"
        >
          Call Now: {PHONE}
        </a>
        <p className="font-utility text-xs uppercase tracking-wide text-worn-white/70">
          Open Mon&ndash;Fri, 9am&ndash;5pm. Closed weekends.
        </p>
      </div>
    </section>
  );
}
