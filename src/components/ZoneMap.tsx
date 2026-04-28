"use client";

import Link from "next/link";
import { MAIN_NAV_ZONES, ZoneConfig } from "@/lib/site-config";

// Positions on the 2D map for each zone (as % of 800×500 viewport)
interface ZonePosition {
  path: string;
  cx: number; // center x
  cy: number; // center y
  w: number;  // width
  h: number;  // height
}

const ZONE_POSITIONS: ZonePosition[] = [
  { path: "/",         cx: 400, cy: 250, w: 110, h: 55 }, // Gateway — center
  { path: "/ai-lab",   cx: 185, cy: 135, w: 120, h: 50 }, // Forge — upper-left
  { path: "/security", cx: 615, cy: 135, w: 120, h: 50 }, // Citadel — upper-right
  { path: "/store",    cx: 185, cy: 360, w: 120, h: 50 }, // StoreX — lower-left
  { path: "/tools",    cx: 615, cy: 360, w: 120, h: 50 }, // Tools Hub — lower-right
  { path: "/knowledge",cx: 400, cy: 430, w: 130, h: 50 }, // Archives — bottom center
  { path: "/advanced", cx: 400, cy: 80,  w: 120, h: 50 }, // UnderNet — top center
  { path: "/vision",   cx: 680, cy: 250, w: 100, h: 50 }, // Vision — right center
];

const COLORS: Record<string, string> = {
  "/":         "#818cf8",
  "/ai-lab":   "#38bdf8",
  "/security": "#fb7185",
  "/store":    "#fbbf24",
  "/tools":    "#34d399",
  "/knowledge":"#a78bfa",
  "/advanced": "#fb7185",
  "/vision":   "#38bdf8",
};

function getZoneByPath(path: string): ZoneConfig | undefined {
  return MAIN_NAV_ZONES.find((z) => z.path === path);
}

export function ZoneMap() {
  return (
    <div style={{ width: "100%", position: "relative" }}>
      {/* ── Desktop: SVG 2D map ── */}
      <div className="zone-map-desktop" aria-label="Betts Foundations zone map">
        <svg
          viewBox="0 0 800 500"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: "100%", height: "auto", maxHeight: 500 }}
          role="img"
          aria-label="Interactive 2D map of Betts Foundations zones"
        >
          {/* Background grid */}
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1b1f2c" strokeWidth="1" />
            </pattern>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="800" height="500" fill="#0c0d11" rx="12" />
          <rect width="800" height="500" fill="url(#grid)" rx="12" />

          {/* Connector lines from center to each zone */}
          {ZONE_POSITIONS.filter((z) => z.path !== "/").map((z) => {
            const color = COLORS[z.path] ?? "#818cf8";
            const center = ZONE_POSITIONS.find((p) => p.path === "/")!;
            return (
              <line
                key={z.path + "-line"}
                x1={center.cx}
                y1={center.cy}
                x2={z.cx}
                y2={z.cy}
                stroke={color}
                strokeWidth="1"
                strokeOpacity="0.3"
                strokeDasharray="4 6"
              />
            );
          })}

          {/* Zone nodes */}
          {ZONE_POSITIONS.map((pos) => {
            const zone = getZoneByPath(pos.path);
            if (!zone) return null;
            const color = COLORS[pos.path] ?? "#818cf8";
            const isGated = zone.gated;

            return (
              <Link href={zone.path} key={pos.path}>
                <g
                  transform={`translate(${pos.cx - pos.w / 2}, ${pos.cy - pos.h / 2})`}
                  style={{ cursor: "pointer" }}
                  role="link"
                  aria-label={`${zone.creativeName} — ${zone.subtitle}`}
                >
                  {/* Card background */}
                  <rect
                    width={pos.w}
                    height={pos.h}
                    rx="8"
                    fill="#13161e"
                    stroke={color}
                    strokeWidth={pos.path === "/" ? "2" : "1"}
                    opacity={isGated ? 0.6 : 1}
                    filter={pos.path === "/" ? "url(#glow)" : undefined}
                  />
                  {/* Creative name */}
                  <text
                    x={pos.w / 2}
                    y={pos.h / 2 - 5}
                    textAnchor="middle"
                    fill={color}
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="system-ui, sans-serif"
                  >
                    {zone.creativeName}
                    {isGated ? " 🔒" : ""}
                  </text>
                  {/* Professional subtitle */}
                  <text
                    x={pos.w / 2}
                    y={pos.h / 2 + 12}
                    textAnchor="middle"
                    fill="#8b96b4"
                    fontSize="9"
                    fontFamily="system-ui, sans-serif"
                  >
                    {zone.subtitle}
                  </text>
                </g>
              </Link>
            );
          })}
        </svg>
      </div>

      {/* ── Mobile: Zone list ── */}
      <div className="zone-map-mobile">
        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.75rem",
          }}
        >
          {MAIN_NAV_ZONES.map((zone) => {
            const color = COLORS[zone.path] ?? "#818cf8";
            return (
              <li key={zone.path}>
                <Link
                  href={zone.path}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "1rem 1.25rem",
                    background: "var(--bg-card)",
                    border: `1px solid ${color}33`,
                    borderRadius: "10px",
                    textDecoration: "none",
                    transition: "border-color 0.15s ease, background 0.15s ease",
                  }}
                >
                  <span
                    style={{
                      width: 10,
                      height: 10,
                      borderRadius: "50%",
                      background: color,
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ flex: 1 }}>
                    <span style={{ display: "block", fontWeight: 700, color }}>
                      {zone.creativeName}
                      {zone.gated && (
                        <span style={{ marginLeft: "0.4rem", fontSize: "0.8em" }}>🔒</span>
                      )}
                    </span>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-secondary)" }}>
                      {zone.subtitle}
                    </span>
                    <span style={{ display: "block", fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.25rem" }}>
                      {zone.description}
                    </span>
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <style>{`
        .zone-map-desktop { display: block; }
        .zone-map-mobile  { display: none; }

        @media (max-width: 768px) {
          .zone-map-desktop { display: none; }
          .zone-map-mobile  { display: block; }
        }
      `}</style>
    </div>
  );
}
