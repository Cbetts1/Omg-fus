/**
 * AuraMascot — the friendly crystalline AI creature of Betts Foundations.
 *
 * A geometric, circuit-art being with a distinct personality:
 * intelligent, calm, augmented, and approachable.
 * Used as a brand mascot across the platform.
 */

interface AuraMascotProps {
  size?: number;
  /** Whether to animate (floating + pulsing glow). Defaults true. */
  animate?: boolean;
  /** Dim the mascot to use as a background decoration */
  decorative?: boolean;
  className?: string;
}

export function AuraMascot({
  size = 120,
  animate = true,
  decorative = false,
  className,
}: AuraMascotProps) {
  const scale = size / 120;

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        animation: animate ? "float 4s ease-in-out infinite" : undefined,
        filter: decorative ? "opacity(0.15)" : undefined,
        flexShrink: 0,
      }}
    >
      <svg
        viewBox="0 0 120 120"
        width={size}
        height={size}
        xmlns="http://www.w3.org/2000/svg"
        style={{ display: "block", overflow: "visible" }}
        role={decorative ? "presentation" : "img"}
        aria-label={decorative ? undefined : "AURA — the Betts Foundations AI mascot"}
        aria-hidden={decorative ? "true" : undefined}
      >
        <defs>
          {/* Main body gradient — steel-blue */}
          <linearGradient id={`mascot-body-${size}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c8d0e0" stopOpacity="0.95" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="1" />
          </linearGradient>

          {/* Inner glow */}
          <radialGradient id={`mascot-glow-${size}`} cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="#818cf8" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#818cf8" stopOpacity="0" />
          </radialGradient>

          {/* Eye glow */}
          <radialGradient id={`mascot-eye-${size}`} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
            <stop offset="60%" stopColor="#38bdf8" stopOpacity="1" />
            <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.6" />
          </radialGradient>

          {/* Filter — outer glow */}
          <filter id={`mascot-filter-${size}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* ── Outer glow halo ── */}
        <circle
          cx="60"
          cy="58"
          r="46"
          fill={`url(#mascot-glow-${size})`}
          style={{ animation: animate ? "shimmer 3s ease-in-out infinite" : undefined }}
        />

        {/* ── Body — main hexagonal crystal form ── */}
        {/* Outer shell — hexagon-ish polygon */}
        <polygon
          points="60,14 94,34 94,74 60,94 26,74 26,34"
          fill={`url(#mascot-body-${size})`}
          stroke="#818cf8"
          strokeWidth="1.5"
          strokeOpacity="0.6"
        />

        {/* Inner steel plate */}
        <polygon
          points="60,22 86,38 86,70 60,86 34,70 34,38"
          fill="#13161e"
          stroke="#252b3a"
          strokeWidth="1"
        />

        {/* ── Circuit lines on body ── */}
        {/* Horizontal centre line */}
        <line x1="34" y1="54" x2="86" y2="54" stroke="#818cf8" strokeWidth="0.8" strokeOpacity="0.4" />
        {/* Vertical left */}
        <line x1="47" y1="38" x2="47" y2="70" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.3" />
        {/* Vertical right */}
        <line x1="73" y1="38" x2="73" y2="70" stroke="#38bdf8" strokeWidth="0.6" strokeOpacity="0.3" />

        {/* Circuit node dots */}
        <circle cx="47" cy="54" r="2.5" fill="#38bdf8" opacity="0.7" />
        <circle cx="73" cy="54" r="2.5" fill="#38bdf8" opacity="0.7" />
        <circle cx="60" cy="38" r="2" fill="#818cf8" opacity="0.5" />
        <circle cx="60" cy="70" r="2" fill="#818cf8" opacity="0.5" />

        {/* ── Eyes ── */}
        {/* Left eye socket */}
        <circle cx="48" cy="52" r="8" fill="#0c0d11" />
        {/* Right eye socket */}
        <circle cx="72" cy="52" r="8" fill="#0c0d11" />

        {/* Left eye glow ring */}
        <circle cx="48" cy="52" r="6.5" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.5" />
        {/* Right eye glow ring */}
        <circle cx="72" cy="52" r="6.5" fill="none" stroke="#38bdf8" strokeWidth="1.2" strokeOpacity="0.5" />

        {/* Left iris */}
        <circle
          cx="48"
          cy="52"
          r="5"
          fill={`url(#mascot-eye-${size})`}
          style={{ animation: animate ? "shimmer 2s ease-in-out infinite" : undefined }}
        />
        {/* Right iris */}
        <circle
          cx="72"
          cy="52"
          r="5"
          fill={`url(#mascot-eye-${size})`}
          style={{ animation: animate ? "shimmer 2s ease-in-out infinite 0.3s" : undefined }}
        />

        {/* Left pupil */}
        <circle cx="48" cy="52" r="2" fill="#0c0d11" />
        {/* Right pupil */}
        <circle cx="72" cy="52" r="2" fill="#0c0d11" />

        {/* Left eye specular */}
        <circle cx="50" cy="50" r="1" fill="white" opacity="0.9" />
        {/* Right eye specular */}
        <circle cx="74" cy="50" r="1" fill="white" opacity="0.9" />

        {/* ── Mouth — calm arc ── */}
        <path
          d="M 52 66 Q 60 72 68 66"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeOpacity="0.8"
        />

        {/* ── Antenna / crown spires ── */}
        {/* Centre antenna */}
        <line x1="60" y1="14" x2="60" y2="4" stroke="#818cf8" strokeWidth="1.5" strokeOpacity="0.7" />
        <circle cx="60" cy="3" r="2.5" fill="#818cf8" opacity="0.9"
          style={{ animation: animate ? "shimmer 1.8s ease-in-out infinite" : undefined }}
        />

        {/* Left antenna */}
        <line x1="44" y1="20" x2="38" y2="8" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="37" cy="7" r="1.8" fill="#38bdf8" opacity="0.8"
          style={{ animation: animate ? "shimmer 2.2s ease-in-out infinite 0.5s" : undefined }}
        />

        {/* Right antenna */}
        <line x1="76" y1="20" x2="82" y2="8" stroke="#38bdf8" strokeWidth="1" strokeOpacity="0.6" />
        <circle cx="83" cy="7" r="1.8" fill="#38bdf8" opacity="0.8"
          style={{ animation: animate ? "shimmer 2.2s ease-in-out infinite 0.9s" : undefined }}
        />

        {/* ── Side nodes (ear-like emitter pads) ── */}
        {/* Left */}
        <rect x="17" y="50" width="9" height="9" rx="2" fill="#13161e" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="21.5" cy="54.5" r="2" fill="#818cf8" opacity="0.6" />
        {/* Right */}
        <rect x="94" y="50" width="9" height="9" rx="2" fill="#13161e" stroke="#818cf8" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="98.5" cy="54.5" r="2" fill="#818cf8" opacity="0.6" />

        {/* ── Bottom edge gems ── */}
        <polygon points="60,94 54,104 66,104" fill="#818cf8" opacity="0.5" />
        <circle cx="60" cy="107" r="3" fill="#38bdf8" opacity="0.4" />
      </svg>
    </div>
  );
}
