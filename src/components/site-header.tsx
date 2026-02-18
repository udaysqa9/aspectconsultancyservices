"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
};

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    children: [
      { label: "Chitrasanthe", href: "/services/chitrasanthe" },
      { label: "Rapid Jobs", href: "/services/rapid-jobs" },
      { label: "Power Pay", href: "/services/power-pay" },
      { label: "Financial Services", href: "/services/financial-services" },
      { label: "Events & Branding", href: "/services/events-branding" },
    ],
  },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const isActive = (href?: string) => {
    if (!href) return false;
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/50 backdrop-blur-md supports-[backdrop-filter]:bg-black/30">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-[140px] sm:h-11 sm:w-[160px]">
            <Image
              src="/aspect-logo.jpg"
              alt="Aspect Consultancy Services"
              fill
              className="object-contain object-left"
              priority
              sizes="160px"
            />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 text-sm font-medium text-zinc-300 md:flex">
          {navItems.map((item) => {
            const hasChildren = !!item.children?.length;
            return (
              <div
                key={item.label}
                className={classNames("relative", hasChildren && "group")}
                onMouseEnter={() => hasChildren && setOpenDropdown(item.label)}
                onMouseLeave={() => !hasChildren && setOpenDropdown(null)}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={classNames(
                      "rounded-full px-3 py-2 transition-colors duration-150",
                      isActive(item.href)
                        ? "bg-[hsl(var(--color-primary))] text-white shadow-sm"
                        : "hover:bg-white/10 hover:text-white"
                    )}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 rounded-full px-3 py-2 text-zinc-300 transition-colors duration-150 hover:bg-white/10 hover:text-white"
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs">▾</span>
                  </button>
                )}

                {hasChildren && (
                  <div
                    className={classNames(
                      "absolute left-0 top-full z-50 mt-1 min-w-[200px] transform rounded-xl border border-white/10 bg-slate-900/95 shadow-xl shadow-slate-900/40 backdrop-blur-md transition-all duration-150",
                      openDropdown === item.label
                        ? "pointer-events-auto translate-y-0 opacity-100"
                        : "pointer-events-none -translate-y-1 opacity-0"
                    )}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <div className="py-2">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={classNames(
                            "block px-4 py-2.5 text-sm text-zinc-200 transition-colors hover:bg-white/5 hover:text-white",
                            isActive(child.href) &&
                              "bg-[hsl(var(--color-primary))] text-white"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-white/20 bg-black/40 p-2.5 text-zinc-200 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white md:hidden"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation"
        >
          <span className="sr-only">Open navigation</span>
          <span className="flex h-5 w-5 flex-col justify-between">
            <span className="h-0.5 w-full rounded bg-current" />
            <span className="h-0.5 w-full rounded bg-current" />
            <span className="h-0.5 w-full rounded bg-current" />
          </span>
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-black/90 backdrop-blur-md md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-4 py-4 text-sm font-medium text-zinc-200 sm:px-6 lg:px-8">
            {navItems.map((item) => {
              const hasChildren = !!item.children?.length;

              if (!hasChildren) {
                return (
                  <Link
                    key={item.label}
                    href={item.href || "#"}
                    onClick={() => setMobileOpen(false)}
                    className={classNames(
                      "flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors",
                      isActive(item.href)
                        ? "bg-[hsl(var(--color-primary))] text-white"
                        : "hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <span>{item.label}</span>
                  </Link>
                );
              }

              const expanded = openDropdown === item.label;

              return (
                <div key={item.label} className="flex flex-col gap-1">
                  <button
                    type="button"
                    className="flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left text-zinc-200 transition-colors hover:bg-white/5 hover:text-white"
                    onClick={() =>
                      setOpenDropdown((current) =>
                        current === item.label ? null : item.label
                      )
                    }
                    aria-expanded={expanded}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs">{expanded ? "▴" : "▾"}</span>
                  </button>
                  {expanded && (
                    <div className="ml-2 flex flex-col gap-0.5 border-l-2 border-white/10 pl-3">
                      {item.children!.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={classNames(
                            "rounded-lg px-3 py-2 text-sm transition-colors",
                            isActive(child.href)
                              ? "bg-[hsl(var(--color-primary))] text-white"
                              : "hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
