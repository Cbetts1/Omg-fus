"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE_NAME, MAIN_NAV_ZONES } from "@/lib/site-config";
import styles from "./SiteNav.module.css";

export function SiteNav() {
  // Detect active path on client only to avoid SSR router-context issues
  const [activePath, setActivePath] = useState<string>("");

  useEffect(() => {
    setActivePath(window.location.pathname);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {/* Brand */}
        <Link href="/" className={styles.brand} aria-label="Betts Foundations home">
          <span className={styles.brandName}>{SITE_NAME}</span>
        </Link>

        {/* Primary navigation */}
        <nav aria-label="Primary navigation">
          <ul className={styles.navList}>
            {MAIN_NAV_ZONES.filter((z) => z.path !== "/").map((zone) => {
              const isActive = activePath === zone.path;
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
      </div>
    </header>
  );
}
