import { useReveal } from "../hooks/useReveal";
import { BayDiagram } from "./BayDiagram";

const repairServices = [
  {
    name: "Repair Consultations",
    benefit: "Get a straight answer before you spend anything.",
  },
  {
    name: "Discounted Diagnostic Scans",
    benefit: "Find out what's actually wrong, at a lower diagnostic price.",
  },
  {
    name: "Towing via SimpliTow",
    benefit: "Can't drive it in? We'll get it to us.",
  },
  {
    name: "Quality Auto Repairs",
    benefit: "The real fix, done once, explained the whole way through.",
  },
];

export function Offer() {
  const ref = useReveal<HTMLDivElement>();
  const cardsRef = useReveal<HTMLUListElement>();

  return (
    <section id="offer" className="bg-garage-black-soft px-6 py-20 text-worn-white sm:px-10 lg:px-16">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-5xl">
        <p className="font-utility text-xs uppercase tracking-[0.3em] text-beam-orange">
          One shop, two bays
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl">
          Get it repaired, or get the tools to do it yourself.
        </h2>

        <div className="mt-12 max-w-3xl mx-auto">
          <BayDiagram />
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* Repair track */}
          <div className="border-t-2 border-truck-red pt-6">
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-truck-red">
              Bay 1: Repair services
            </h3>
            <ul ref={cardsRef} className="reveal-on-scroll mt-6 flex flex-col gap-5">
              {repairServices.map((s) => (
                <li key={s.name} className="border-l border-worn-white/15 pl-4">
                  <p className="font-body text-sm font-semibold text-worn-white">{s.name}</p>
                  <p className="mt-1 font-body text-sm text-worn-white/70">{s.benefit}</p>
                </li>
              ))}
            </ul>
            <a
              href="tel:+15745320658"
              className="mt-6 inline-block font-utility text-xs uppercase tracking-wide text-truck-red underline decoration-truck-red/40 underline-offset-4 transition-colors hover:text-worn-white"
            >
              Call to book a repair
            </a>
          </div>

          {/* Workshop track */}
          <div className="border-t-2 border-lift-blue pt-6">
            <h3 className="font-display text-xl font-semibold uppercase tracking-tight text-lift-blue">
              Bay 2: Shared workshop access
            </h3>
            <p className="mt-6 font-body text-sm leading-relaxed text-worn-white/80">
              Book time on a real lift with real tools, in a working shop, instead of
              wrenching in your driveway.
            </p>

            <div className="mt-6 border border-dashed border-beam-orange/50 bg-beam-orange/[0.06] px-5 py-4">
              <p className="font-utility text-xs uppercase tracking-wide text-beam-orange">
                TODO, needs client confirmation
              </p>
              <p className="mt-2 font-body text-sm text-worn-white/75">
                Cost per session, supervision requirements, which tools/lifts are
                included, and how someone actually books a bay aren&rsquo;t
                confirmed yet. Placeholder copy above is intentionally general
                until that's locked down. Call to ask in the meantime.
              </p>
            </div>

            <a
              href="tel:+15745320658"
              className="mt-6 inline-block font-utility text-xs uppercase tracking-wide text-lift-blue underline decoration-lift-blue/40 underline-offset-4 transition-colors hover:text-worn-white"
            >
              Call to ask about bay access
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
