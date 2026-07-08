/**
 * Signature element: a schematic floor plan of the actual shop.
 * Bay 1 (repair) and Bay 2 (workshop) sit as two real rooms that share one
 * center aisle leading out to the street, literalizing "one shop, two
 * ways in" instead of illustrating it with icons or stock photography.
 */
export function BayDiagram() {
  return (
    <svg
      viewBox="0 0 800 420"
      className="h-auto w-full"
      role="img"
      aria-label="Floor plan diagram showing Bay 1, the repair shop, and Bay 2, the community workshop, sharing one center aisle that leads to the shop entrance."
    >
      <g fill="none" strokeLinecap="square">
        {/* Bay 1, Repair */}
        <rect x="40" y="40" width="300" height="300" stroke="var(--color-truck-red)" strokeWidth="2" />
        <path d="M 40 40 L 100 100 M 340 40 L 280 100" stroke="var(--color-truck-red)" strokeWidth="1" opacity="0.5" />
        {/* door swing arc */}
        <path d="M 40 340 A 60 60 0 0 0 100 280" stroke="var(--color-truck-red)" strokeWidth="1" opacity="0.6" strokeDasharray="4 4" />

        {/* Bay 2, Workshop */}
        <rect x="460" y="40" width="300" height="300" stroke="var(--color-lift-blue)" strokeWidth="2" />
        <path d="M 460 40 L 520 100 M 760 40 L 700 100" stroke="var(--color-lift-blue)" strokeWidth="1" opacity="0.5" />
        <path d="M 760 340 A 60 60 0 0 1 700 280" stroke="var(--color-lift-blue)" strokeWidth="1" opacity="0.6" strokeDasharray="4 4" />

        {/* Center aisle connecting both bays to the entrance */}
        <path
          d="M 340 190 L 460 190"
          stroke="var(--color-worn-white)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="[animation:var(--animate-aisle)]"
        />
        <path
          d="M 400 190 L 400 400"
          stroke="var(--color-worn-white)"
          strokeWidth="2"
          strokeDasharray="6 6"
          className="[animation:var(--animate-aisle)]"
        />
        <circle cx="400" cy="400" r="5" fill="var(--color-beam-orange)" />
      </g>

      {/* Labels */}
      <text x="60" y="30" fontFamily="var(--font-utility)" fontSize="13" letterSpacing="2" fill="var(--color-truck-red)">
        BAY 1: REPAIR
      </text>
      <text x="480" y="30" fontFamily="var(--font-utility)" fontSize="13" letterSpacing="2" fill="var(--color-lift-blue)">
        BAY 2: WORKSHOP
      </text>
      <text
        x="400"
        y="417"
        textAnchor="middle"
        fontFamily="var(--font-utility)"
        fontSize="12"
        letterSpacing="3"
        fill="var(--color-beam-orange)"
      >
        ENTRANCE: CALL (574) 532-0658
      </text>
    </svg>
  );
}
