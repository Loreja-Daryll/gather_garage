import { useReveal } from "../hooks/useReveal";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    body: "We pull codes, inspect the vehicle, and find the actual problem before we talk price.",
  },
  {
    n: "02",
    title: "Explain",
    body: "We walk you through what's wrong, what it costs, and what happens if you wait. No jargon, no pressure.",
  },
  {
    n: "03",
    title: "Repair",
    body: "You approve it, we fix it. Nothing added to the ticket that you didn't agree to first.",
  },
];

export function Mechanism() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="mechanism" className="bg-garage-black px-6 py-20 text-worn-white sm:px-10 lg:px-16">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-5xl">
        <p className="font-utility text-xs uppercase tracking-[0.3em] text-truck-red">
          How a repair works here
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl">
          Diagnose. Explain. Repair.
        </h2>
        <p className="mt-2 max-w-xl font-utility text-xs uppercase tracking-wide text-bay-grey">
          Proposed sequence, pending sign-off. Matches the shop&rsquo;s existing
          &ldquo;we explain everything, fair pricing&rdquo; language.
        </p>

        <ol className="mt-10 grid gap-8 sm:grid-cols-3">
          {steps.map((step) => (
            <li key={step.n} className="border-t border-worn-white/15 pt-5">
              <span className="font-display text-4xl font-semibold text-truck-red">{step.n}</span>
              <h3 className="mt-3 font-display text-xl font-semibold uppercase tracking-tight">
                {step.title}
              </h3>
              <p className="mt-2 font-body text-sm leading-relaxed text-worn-white/75">
                {step.body}
              </p>
            </li>
          ))}
        </ol>

        <div className="mt-14 border border-dashed border-beam-orange/50 bg-beam-orange/[0.06] px-6 py-5">
          <p className="font-utility text-xs uppercase tracking-wide text-beam-orange">
            TODO, needs client confirmation
          </p>
          <p className="mt-2 max-w-2xl font-body text-sm text-worn-white/75">
            If bay booking has its own steps (e.g. how someone reserves a lift, gets
            oriented, and pays), it belongs here as a second short sequence, mirrored
            in blue against the workshop track. Not built yet, no confirmed
            process to show.
          </p>
        </div>
      </div>
    </section>
  );
}
