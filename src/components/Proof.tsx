import { useReveal } from "../hooks/useReveal";
import { PhotoPlaceholder } from "./PhotoPlaceholder";
import heroCar from "../assets/hero-car.jpg";

export function Proof() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-worn-white px-6 py-20 text-garage-black sm:px-10 lg:px-16">
      <div ref={ref} className="reveal-on-scroll mx-auto max-w-5xl">
        <p className="font-utility text-xs uppercase tracking-[0.3em] text-truck-red">
          The shop, as it actually is
        </p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-semibold uppercase leading-tight tracking-tight sm:text-4xl">
          No reviews to show yet. Just the work.
        </h2>
        <p className="mt-3 max-w-xl font-body text-sm text-garage-black/70">
          We're not going to make up a five-star quote. Here's what the shop
          looks like, day to day.
        </p>

        <div className="mt-6 max-w-xl border border-dashed border-beam-orange/50 bg-beam-orange/[0.06] px-5 py-4">
          <p className="font-utility text-xs uppercase tracking-wide text-beam-orange">
            TODO, needs client photos
          </p>
          <p className="mt-2 font-body text-sm text-garage-black/70">
            Three of the four slots below are placeholders. Swap in the real
            shop photography before this goes live.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <img
            src={heroCar}
            alt="Classic sedan raised on the shop's two-post lift"
            className="aspect-[4/3] w-full border border-worn-white/15 object-cover"
          />
          <PhotoPlaceholder label="Garage bay, wide shot" />
          <PhotoPlaceholder label="Techs with diagnostic equipment" />
          <PhotoPlaceholder label="Tech with customer present" />
        </div>

        <div className="mt-10 border-l-2 border-truck-red pl-5">
          <p className="font-body text-base leading-relaxed text-garage-black/85">
            Gather Garage is run by people who work on cars, not just people who
            manage a shop. That's why the same crew that does your repair is the
            same crew that's in the workshop bay if you need a hand.
          </p>
        </div>
      </div>
    </section>
  );
}
