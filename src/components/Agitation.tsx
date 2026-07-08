import { useReveal } from "../hooks/useReveal";

const repairLines = [
  "You got a quote and had no idea what half of it meant.",
  "A \u201cnecessary repair\u201d got added on without anyone asking first.",
  "You just wanted a straight answer about what's actually wrong.",
];

const workshopLines = [
  "You know how to do the work, you just don't have a lift.",
  "Your driveway isn't cutting it for the job you're trying to finish.",
  "Renting real bay time anywhere nearby means driving out of town.",
];

export function Agitation() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-worn-white px-6 py-20 text-garage-black sm:px-10 lg:px-16">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-5xl">
        <p className="font-utility text-xs uppercase tracking-[0.3em] text-truck-red">
          Sound familiar?
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl">
          Two kinds of frustration. One shop that fixes both.
        </h2>

        <div className="mt-12 grid gap-10 sm:grid-cols-2">
          <div className="border-l-2 border-truck-red pl-5">
            <p className="font-utility text-xs uppercase tracking-wide text-truck-red">
              If you just want it fixed
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {repairLines.map((line) => (
                <li key={line} className="font-body text-base leading-snug text-garage-black/85">
                  {line}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-lift-blue pl-5">
            <p className="font-utility text-xs uppercase tracking-wide text-lift-blue">
              If you want to fix it yourself
            </p>
            <ul className="mt-4 flex flex-col gap-4">
              {workshopLines.map((line) => (
                <li key={line} className="font-body text-base leading-snug text-garage-black/85">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-12 max-w-xl font-body text-base font-medium text-garage-black/80">
          Here&rsquo;s how we fix both, starting with the first phone call.
        </p>
      </div>
    </section>
  );
}
