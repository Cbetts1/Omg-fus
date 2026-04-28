"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE_NAME, MAIN_NAV_ZONES } from "@/lib/site-config";
import styles from "./SiteNav.module.css";

export function SiteNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on outside click (exclude hamburger — its own onClick handles that)
  useEffect(() => {
    if (!menuOpen) return;
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      // Skip if the click originated from the hamburger button or nav root
      if (target.closest("[data-hamburger]")) return;
      if (!target.closest("[data-nav-root]")) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [menuOpen]);

  const navZones = MAIN_NAV_ZONES.filter((z) => z.path !== "/");

  return (
    <header className={styles.header} data-nav-root>
      <div className={styles.inner}>
        {/* Brand */}
        <Link href="/" className={styles.brand} aria-label="Betts Foundations home">
          <span className={styles.brandName}>{SITE_NAME}</span>
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Primary navigation">
          <ul className={styles.navList}>
            {navZones.map((zone) => {
              const isActive = pathname === zone.path;
              const isGated = zone.gated;
              return (
                <li key={zone.path}>
                  <Link
                    href={zone.path}
                    className={`${styles.navLink} ${isActive ? styles.active : ""} ${isGated ? styles.gated : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    title={zone.subtitle}
                  >
                    {zone.creativeName}
                    {isGated && (
                      <span className={styles.lockBadge} aria-label="Locked">
                        🔒
                      </span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className={styles.hamburger}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          data-hamburger
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
          <span className={styles.hamburgerBar} />
        </button>
      </div>

      {/* Mobile nav drawer */}
      {menuOpen && (
        <nav
          id="mobile-nav"
          className={styles.mobileNav}
          aria-label="Mobile navigation"
        >
          <ul className={styles.mobileNavList}>
            {navZones.map((zone) => {
              const isActive = pathname === zone.path;
              const isGated = zone.gated;
              return (
                <li key={zone.path}>
                  <Link
                    href={zone.path}
                    className={`${styles.mobileNavLink} ${isActive ? styles.active : ""} ${isGated ? styles.gated : ""}`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {zone.creativeName}
                    {isGated && (
                      <span aria-label="Locked" style={{ fontSize: "0.85em", marginLeft: 2 }}>
                        🔒
                      </span>
                    )}
                    <span style={{ marginLeft: "auto", fontSize: "0.75rem", color: "var(--text-muted)" }}>
                      {zone.subtitle}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      )}
    </header>
  );
}
