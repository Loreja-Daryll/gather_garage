const PHONE = "(574) 532-0658";
const PHONE_HREF = "tel:+15745320658";
const EMAIL = "gathergaragesb@gmail.com";

export function Footer() {
  return (
    <footer id="footer" className="bg-garage-black-soft px-6 py-14 text-worn-white sm:px-10 lg:px-16">
      <div className="mx-auto flex max-w-5xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-display text-lg font-semibold uppercase tracking-tight">
            Gather Garage
          </p>
          <p className="mt-1 max-w-xs font-body text-sm text-worn-white/60">
            Auto repair and shared workshop access, South Bend, IN.
          </p>
        </div>

        <div className="flex flex-col gap-1 font-utility text-sm text-worn-white/80">
          <p className="uppercase tracking-wide text-bay-grey text-xs">Hours</p>
          <p>Mon&ndash;Fri&nbsp; 9am&ndash;5pm</p>
          <p>Sat&ndash;Sun&nbsp; Closed</p>
        </div>

        <div className="flex flex-col gap-1 font-utility text-sm">
          <p className="uppercase tracking-wide text-bay-grey text-xs">Contact</p>
          <a href={PHONE_HREF} className="text-worn-white/80 transition-colors hover:text-truck-red">
            {PHONE}
          </a>
          <a href={`mailto:${EMAIL}`} className="text-worn-white/80 transition-colors hover:text-truck-red">
            {EMAIL}
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-5xl font-utility text-[11px] uppercase tracking-wide text-bay-grey/70">
        Booking tool not yet confirmed. TODO: wire in once client provides one.
      </p>
    </footer>
  );
}
