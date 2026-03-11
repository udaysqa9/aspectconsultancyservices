"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE_NAME } from "@/lib/site-config";
import { courses } from "@/lib/courses-data";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const careersLinks = [
  { label: "Why Work With Us", href: "/careers#why-work-with-us" },
  { label: "Internship Program", href: "/careers#internship" },
  { label: "Career Growth Path", href: "/careers#career-growth" },
  { label: "Open Positions", href: "/careers#open-positions" },
  { label: "Life at Company", href: "/careers#life-at-company" },
  { label: "Apply Now", href: "/careers#apply" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [careersOpen, setCareersOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0F172A]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-0">
          <span className="relative block h-11 w-20 shrink-0 sm:h-12 sm:w-24">
            <Image
              src="/aspect-logo.jpg"
              alt=""
              fill
              className="object-contain object-left object-center"
              priority
              sizes="96px"
            />
          </span>
          <span
            className="hidden -ml-2 max-w-[160px] shrink-0 text-left text-base font-bold leading-tight tracking-tight text-[#E5E7EB] sm:block sm:max-w-[200px] sm:text-lg lg:text-xl"
            style={{ fontFamily: "var(--font-logo)" }}
          >
            {SITE_NAME}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.slice(0, 2).map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#6366F1]" : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#6366F1] transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "center" }}
                />
              </Link>
            );
          })}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => setCoursesOpen(false)}
          >
            <Link
              href="/courses"
              className={`group relative flex items-center gap-0.5 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                pathname === "/courses" ? "text-[#6366F1]" : "text-[#9CA3AF] hover:text-[#E5E7EB]"
              }`}
            >
              Courses
              <svg className="h-4 w-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <span
                className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#6366F1] transition-transform duration-200 ${
                  pathname === "/courses" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{ transformOrigin: "center" }}
              />
            </Link>
            {coursesOpen && (
              <div className="absolute left-0 top-full z-50 min-w-[280px] rounded-xl border border-white/10 bg-[#111827]/95 py-2 shadow-xl backdrop-blur-xl">
                {courses.map((c) => (
                  <Link
                    key={c.id}
                    href={`/courses#${c.id}`}
                    onClick={() => setCoursesOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#E5E7EB] transition-colors hover:bg-white/10 hover:text-[#6366F1]"
                  >
                    {c.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <div
            className="relative"
            onMouseEnter={() => setCareersOpen(true)}
            onMouseLeave={() => setCareersOpen(false)}
          >
            <Link
              href="/careers"
              className={`group relative flex items-center gap-0.5 px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                pathname === "/careers" ? "text-[#6366F1]" : "text-[#9CA3AF] hover:text-[#E5E7EB]"
              }`}
            >
              Careers
              <svg className="h-4 w-4 opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
              <span
                className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#6366F1] transition-transform duration-200 ${
                  pathname === "/careers" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
                style={{ transformOrigin: "center" }}
              />
            </Link>
            {careersOpen && (
              <div className="absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-white/10 bg-[#111827]/95 py-2 shadow-xl backdrop-blur-xl">
                {careersLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setCareersOpen(false)}
                    className="block px-4 py-2.5 text-sm text-[#E5E7EB] transition-colors hover:bg-white/10 hover:text-[#6366F1]"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {navItems.slice(2).map((item) => {
            const isActive =
              pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                  isActive ? "text-[#6366F1]" : "text-[#9CA3AF] hover:text-[#E5E7EB]"
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-4 right-4 h-0.5 rounded-full bg-[#6366F1] transition-transform duration-200 ${
                    isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                  }`}
                  style={{ transformOrigin: "center" }}
                />
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="ml-2 rounded-lg bg-[#6366F1] px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
          >
            Get in touch
          </Link>
        </nav>

        <button
          type="button"
          className="flex h-11 min-h-[44px] w-11 min-w-[44px] shrink-0 flex-col items-center justify-center gap-1.5 rounded-lg border border-white/10 text-[#E5E7EB] md:hidden touch-manipulation"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Menu"
        >
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-white/5 bg-[#0F172A]/95 px-4 py-4 backdrop-blur-xl md:hidden">
          <nav className="flex flex-col gap-0">
            <Link href="/" onClick={() => setMobileOpen(false)} className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[#E5E7EB] touch-manipulation">
              Home
            </Link>
            <Link href="/services" onClick={() => setMobileOpen(false)} className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[#E5E7EB] touch-manipulation">
              Services
            </Link>
            <Link href="/courses" onClick={() => setMobileOpen(false)} className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[#E5E7EB] touch-manipulation">
              Courses
            </Link>
            <Link href="/careers" onClick={() => setMobileOpen(false)} className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[#E5E7EB] touch-manipulation">
              Careers
            </Link>
            <Link href="/about" onClick={() => setMobileOpen(false)} className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[#E5E7EB] touch-manipulation">
              About
            </Link>
            <Link href="/contact" onClick={() => setMobileOpen(false)} className="min-h-[44px] flex items-center rounded-lg px-4 py-3 text-sm font-medium text-[#E5E7EB] touch-manipulation">
              Contact
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 min-h-[44px] flex items-center justify-center rounded-lg bg-[#6366F1] px-4 py-3 text-sm font-medium text-white touch-manipulation"
            >
              Get in touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
