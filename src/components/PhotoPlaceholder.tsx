interface PhotoPlaceholderProps {
  label: string;
  aspect?: string;
  className?: string;
}

/**
 * TODO (client): No shop photos were supplied in this build pass.
 * Every image slot on the page uses this placeholder instead of a
 * stretched stock photo. Swap in real shop photography before launch,
 * vintage car on lift, garage bay, techs with diagnostic gear, tech with
 * a customer present, and (if confirmed) shared-workshop / DIY bay in use.
 */
export function PhotoPlaceholder({ label, aspect = "aspect-[4/3]", className = "" }: PhotoPlaceholderProps) {
  return (
    <div
      className={`${aspect} ${className} relative overflow-hidden border border-worn-white/15 bg-garage-black-soft`}
    >
      <svg className="absolute inset-0 h-full w-full opacity-20" preserveAspectRatio="none">
        <defs>
          <pattern id={`diag-${label.replace(/\s+/g, "-")}`} width="16" height="16" patternTransform="rotate(45)" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="16" stroke="var(--color-bay-grey)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#diag-${label.replace(/\s+/g, "-")})`} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
        <span className="font-utility text-[10px] uppercase tracking-[0.2em] text-beam-orange">
          Photo needed
        </span>
        <span className="font-utility text-xs uppercase tracking-wide text-bay-grey">
          {label}
        </span>
      </div>
    </div>
  );
}
