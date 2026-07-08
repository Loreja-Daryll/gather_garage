import { useEffect, useRef, useState } from "react";
import type { PointerEvent as ReactPointerEvent } from "react";
import heroCar from "../assets/hero-car.jpg";
import heroCarXray from "../assets/hero-car-xray.jpg";

const PHONE = "(574) 532-0658";
const PHONE_HREF = "tel:+15745320658";

// Radius (px) of the x-ray "light" that follows the cursor
const REVEAL_RADIUS = 120;
const MOBILE_REVEAL_RADIUS = 60;

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const photoLayerRef = useRef<HTMLDivElement | null>(null);
  const xrayRef = useRef<HTMLImageElement | null>(null);
  const headlineSkeletonRef = useRef<HTMLHeadingElement | null>(null);
  const lightRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);
  const [revealRadius, setRevealRadius] = useState(REVEAL_RADIUS);

  useEffect(() => {
    const updateRevealRadius = () => {
      setRevealRadius(window.innerWidth < 640 ? MOBILE_REVEAL_RADIUS : REVEAL_RADIUS);
    };

    updateRevealRadius();
    window.addEventListener("resize", updateRevealRadius);

    return () => window.removeEventListener("resize", updateRevealRadius);
  }, []);

  // Written directly to the DOM (not React state) so it stays smooth on
  // fast mouse movement. Each masked element gets coordinates relative to
  // its own box, since a CSS mask position is local to the element it's
  // applied to, not the page.
  const moveLight = (clientX: number, clientY: number) => {
    const photoRect = photoLayerRef.current?.getBoundingClientRect();
    if (photoRect) {
      const x = clientX - photoRect.left;
      const y = clientY - photoRect.top;
      xrayRef.current?.style.setProperty("--mx", `${x}px`);
      xrayRef.current?.style.setProperty("--my", `${y}px`);
      lightRef.current!.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
    }

    const headlineRect = headlineSkeletonRef.current?.getBoundingClientRect();
    if (headlineRect) {
      const hx = clientX - headlineRect.left;
      const hy = clientY - headlineRect.top;
      headlineSkeletonRef.current?.style.setProperty("--mx", `${hx}px`);
      headlineSkeletonRef.current?.style.setProperty("--my", `${hy}px`);
    }
  };

  const handlePointerEnter = (e: ReactPointerEvent<HTMLElement>) => {
    moveLight(e.clientX, e.clientY);
    setIsActive(true);
  };
  const handlePointerMove = (e: ReactPointerEvent<HTMLElement>) => {
    moveLight(e.clientX, e.clientY);
  };
  const handlePointerLeave = () => setIsActive(false);
  const handlePointerUp = () => setIsActive(false);

  const maskStyle = () => ({
    WebkitMaskImage: `radial-gradient(circle ${revealRadius}px at var(--mx, 50%) var(--my, 50%), black 55%, transparent 100%)`,
    maskImage: `radial-gradient(circle ${revealRadius}px at var(--mx, 50%) var(--my, 50%), black 55%, transparent 100%)`,
  });

  return (
    <section
      id="hero"
      ref={heroRef}
      className="hero-viewport relative mt-16 flex flex-col justify-end overflow-hidden bg-garage-black"
      style={{ cursor: isActive ? "none" : "auto" }}
      onPointerEnter={handlePointerEnter}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerLeave}
    >
      {/* Photo layer */}
      <div ref={photoLayerRef} className="absolute inset-0">
        <img
          src={heroCar}
          alt="Classic sedan raised on a blue two-post lift inside the Gather Garage shop"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <img
          ref={xrayRef}
          src={heroCarXray}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-200 ease-out"
          style={{ opacity: isActive ? 1 : 0, ...maskStyle() }}
        />
      </div>

      {/* The light itself: a soft ring that follows the cursor everywhere in the hero */}
      <div
        ref={lightRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 z-30 rounded-full transition-opacity duration-200 ease-out"
        style={{
          width: revealRadius * 2,
          height: revealRadius * 2,
          opacity: isActive ? 1 : 0,
          border: "1px solid rgba(237,234,227,0.45)",
          boxShadow:
            "0 0 50px 10px rgba(46,92,138,0.35), inset 0 0 40px rgba(237,234,227,0.08)",
        }}
      />

      {/* Legibility scrim, matches the negative space the photo was shot for */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-garage-black via-garage-black/55 to-transparent" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-garage-black/70 via-transparent to-transparent" />

      <div className="relative z-10 flex flex-col gap-6 px-6 pb-8 pt-28 sm:px-10 sm:pb-10 lg:max-w-xl lg:px-16 lg:pb-12">
        <p className="animate-rise font-utility text-xs uppercase tracking-[0.3em] text-beam-orange sm:text-sm" style={{ animationDelay: "0ms" }}>
          Repair shop and shared workshop in South Bend, IN
        </p>

        {/* Headline: solid version, always visible */}
        <div className="relative">
          <h1
            className="animate-rise font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight text-worn-white sm:text-6xl"
            style={{ animationDelay: "90ms" }}
          >
            Auto repair
            <br />
            <span className="text-truck-red">done right.</span>
          </h1>

          {/* Headline: skeleton/x-ray version, only visible inside the light,
              so the letters "turn x-ray" the same way the car does. */}
          <h1
            ref={headlineSkeletonRef}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 font-display text-5xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-6xl"
            style={{
              opacity: isActive ? 1 : 0,
              color: "transparent",
              WebkitTextStroke: "1.25px var(--color-lift-blue)",
              textShadow: "0 0 12px rgba(46,92,138,0.85), 0 0 24px rgba(46,92,138,0.4)",
              transition: "opacity 200ms ease-out",
              ...maskStyle(),
            }}
          >
            Auto repair
            <br />
            <span>done right.</span>
          </h1>
        </div>

        <p className="animate-rise max-w-md font-body text-base text-worn-white/85 sm:text-lg" style={{ animationDelay: "180ms" }}>
          Bring us your car and we&rsquo;ll fix it, explain it, and price it fair
          before anything gets more expensive than it needs to be. Or book a
          bay and fix it yourself, on our lifts, with our tools. Same shop.
          Same honesty. Your choice.
        </p>

        <div className="animate-rise flex flex-col items-start gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5" style={{ animationDelay: "270ms" }}>
          <a
            href={PHONE_HREF}
            style={{ cursor: "pointer" }}
            className="inline-flex items-center gap-2 bg-truck-red px-7 py-4 font-display text-base font-semibold uppercase tracking-wide text-worn-white shadow-[0_0_0_1px_rgba(196,30,42,0.4)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-truck-red-dim hover:shadow-lg active:translate-y-0"
          >
            Call Now: {PHONE}
          </a>
          <a
            href="#offer"
            style={{ cursor: "pointer" }}
            className="font-body text-sm font-medium text-worn-white/80 underline decoration-bay-grey underline-offset-4 transition-colors hover:text-worn-white"
          >
            See our services &darr;
          </a>
        </div>

        <p className="animate-rise font-utility text-xs uppercase tracking-wide text-bay-grey" style={{ animationDelay: "340ms" }}>
          No-pressure diagnostics. Honest pricing, explained before we touch anything.
        </p>
      </div>

      {/* Signature interaction hint */}
      <div
        className={`pointer-events-none absolute right-6 top-8 z-20 flex items-center gap-2 font-utility text-[11px] uppercase tracking-[0.2em] text-worn-white/70 transition-opacity duration-300 sm:right-10 lg:right-16 ${
          isActive ? "opacity-0" : "opacity-100"
        }`}
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-lift-blue" aria-hidden="true" />
        Move your cursor over the car
      </div>
    </section>
  );
}
