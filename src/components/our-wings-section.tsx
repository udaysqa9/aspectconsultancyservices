"use client";

import Image from "next/image";
import Link from "next/link";

/** Our Wings — 3 brands only: Chitrasanthe, Rapid Jobs, HR connect */
const wings = [
  {
    title: "Chitrasanthe",
    description: "Kannada Premium Cine Magazine & Podcast. 10,000+ circulation. Film, culture, achievers.",
    href: "/services/chitrasanthe",
    image: "/partners/chitrasanthe.png",
    icon: "🎬",
    gradient: "from-[#22C55E]/20 to-[#22C55E]/5",
    glow: "rgba(34,197,94,0.25)",
  },
  {
    title: "Rapid Jobs",
    description: "Manpower & outsourcing. Skill India recognised. IT, non-IT, contract & permanent staffing.",
    href: "/services/rapid-jobs",
    image: "/partners/rapid-jobs.png",
    icon: "👥",
    gradient: "from-[#8B5CF6]/20 to-[#8B5CF6]/5",
    glow: "rgba(139,92,246,0.25)",
  },
  {
    title: "HR connect",
    description: "Simplify the process. Future-ready HR solutions and talent connectivity.",
    href: "/services/rapid-jobs",
    image: "/partners/hr-connect.png",
    icon: "⭐",
    gradient: "from-[#6366F1]/20 to-[#6366F1]/5",
    glow: "rgba(99,102,241,0.25)",
  },
];

export function OurWingsSection() {
  return (
    <section className="relative border-b border-white/5 bg-[#0F172A] px-4 py-10 sm:px-6 lg:px-8 sm:py-12">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="relative mx-auto max-w-6xl">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-widest text-[#6366F1]">Our brands</span>
            <h2 className="mt-1 font-heading text-xl font-semibold text-[#E5E7EB] sm:text-2xl">
              Our Wings
            </h2>
          </div>
          <p className="mt-1 max-w-md text-sm text-[#9CA3AF] sm:mt-0 sm:text-right">
            Chitrasanthe, Rapid Jobs, HR connect.
          </p>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-3 sm:gap-5">
          {wings.map((wing, index) => (
            <Link
              key={wing.title}
              href={wing.href}
              className="wing-card group relative flex flex-row items-center gap-4 overflow-hidden rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-4 backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-lg sm:flex-col sm:items-stretch sm:gap-0 sm:p-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative flex h-16 w-20 shrink-0 items-center justify-center rounded-xl bg-white/5 sm:mx-auto sm:mt-4 sm:h-20 sm:w-24">
                <span className="relative block h-10 w-14 sm:h-12 sm:w-16">
                  <Image
                    src={wing.image}
                    alt=""
                    fill
                    className="object-contain object-center transition-transform duration-300 group-hover:scale-105"
                    sizes="80px"
                  />
                </span>
              </div>
              <div className="min-w-0 flex-1 py-3 pr-4 sm:px-4 sm:pb-4 sm:pt-2">
                <h3 className="font-heading text-base font-semibold text-[#E5E7EB] sm:text-lg">
                  {wing.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs leading-snug text-[#9CA3AF] sm:text-sm">
                  {wing.description}
                </p>
                <span className="mt-2 inline-flex items-center text-xs font-medium text-[#6366F1] sm:mt-3">
                  Learn more
                  <svg className="ml-0.5 h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
