"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const heroSlides = [
  {
    title: "Transforming Businesses with ",
    titleHighlight: "Intelligent Technology Solutions",
    subtitle:
      "Events & branding, media, manpower, and fintech — one partner for established brands. 18+ years of expertise, 8000+ events delivered.",
  },
  {
    title: "Chitrasanthe — ",
    titleHighlight: "Film Magazine & Podcast",
    subtitle:
      "Kannada Premium Cine Magazine. Cinema | Culture | Celebration. 10,000+ circulation across Karnataka. Best Print Layout & Design — Press Association, Karnataka.",
  },
];

export function HeroSection() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[slideIndex];

  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0F172A] px-4 pt-12 pb-16 sm:px-6 sm:pt-14 sm:pb-20 lg:px-8">
      {/* Animated gradient orbs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-[#6366F1]/20 blur-[100px]" />
        <div className="absolute top-1/2 -left-40 h-72 w-72 rounded-full bg-[#22C55E]/10 blur-[80px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="space-y-8">
            <div className="relative min-h-[4.5em] sm:min-h-[5rem] lg:min-h-[5.5rem]">
              {heroSlides.map((s, i) => (
                <h1
                  key={i}
                  className={`font-heading text-4xl font-semibold leading-[1.15] tracking-tight text-[#E5E7EB] sm:text-5xl lg:text-[48px] transition-opacity duration-500 ${
                    i === slideIndex ? "relative" : "absolute left-0 top-0 right-0"
                  }`}
                  style={{
                    fontFamily: "var(--font-heading)",
                    opacity: i === slideIndex ? 1 : 0,
                    pointerEvents: i === slideIndex ? "auto" : "none",
                  }}
                >
                  {s.title}
                  <span className="gradient-text">{s.titleHighlight}</span>
                </h1>
              ))}
            </div>
            <div className="relative min-h-[3.5em] sm:min-h-[4em]">
              {heroSlides.map((s, i) => (
                <p
                  key={i}
                  className={`max-w-xl text-lg text-[#9CA3AF] sm:text-xl transition-opacity duration-500 ${
                    i === slideIndex ? "relative" : "absolute left-0 top-0 right-0"
                  }`}
                  style={{
                    opacity: i === slideIndex ? 1 : 0,
                    pointerEvents: i === slideIndex ? "auto" : "none",
                  }}
                >
                  {s.subtitle}
                </p>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex gap-1.5">
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setSlideIndex(i)}
                    className="flex min-h-[44px] min-w-[44px] items-center justify-center rounded-full transition-all touch-manipulation"
                    aria-label={`Go to slide ${i + 1}`}
                  >
                    <span className={`block rounded-full ${
                      i === slideIndex ? "h-2 w-6 bg-[#6366F1]" : "h-2 w-2 bg-white/30"
                    }`} />
                  </button>
                ))}
              </div>
              <Link
                href="/contact"
                className="btn-glow inline-flex min-h-[44px] items-center justify-center rounded-xl px-6 py-3 text-sm font-medium touch-manipulation"
              >
                Get Consultation
              </Link>
              <Link
                href="/services"
                className="inline-flex min-h-[44px] items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-[#E5E7EB] transition-colors hover:border-[#6366F1]/50 hover:bg-white/10 touch-manipulation"
              >
                View Services
              </Link>
            </div>
          </div>

          {/* Hero right: Launch Your First Real Application — same font & gradient style as left */}
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-md rounded-2xl border border-[#6366F1]/20 bg-[#111827]/95 p-6 shadow-[0_8px_32px_rgba(99,102,241,0.12)] backdrop-blur-sm sm:p-8">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#6366F1]/12 to-[#22C55E]/06" />
              <h2
                className="relative font-heading text-xl font-semibold leading-[1.2] tracking-tight text-[#E5E7EB] sm:text-2xl lg:text-3xl"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Launch Your First{" "}
                <span className="gradient-text">Real Application</span>
              </h2>
              <p className="relative mt-3 text-sm leading-relaxed text-[#9CA3AF] sm:text-base">
                Build a real project, deploy it live, connect your domain, and launch publicly.
              </p>
              <div className="relative mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { title: "Build", desc: "Develop a complete app", icon: "💻" },
                  { title: "Deploy", desc: "Host on live cloud server", icon: "☁️" },
                  { title: "Own Domain", desc: "Connect your domain", icon: "🌐" },
                  { title: "Launch", desc: "Publish & share in portfolio", icon: "🚀" },
                ].map((step) => (
                  <div
                    key={step.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-3.5 transition-all hover:border-[#6366F1]/40 hover:bg-white/10 hover:shadow-[0_4px_20px_rgba(99,102,241,0.1)]"
                  >
                    <span className="text-xl sm:text-2xl" aria-hidden>{step.icon}</span>
                    <p className="mt-2 font-heading text-sm font-semibold text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>{step.title}</p>
                    <p className="mt-0.5 text-xs leading-snug text-[#9CA3AF]">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="relative mt-5 rounded-xl border border-[#22C55E]/25 bg-[#22C55E]/10 px-4 py-3">
                <p className="font-heading text-sm font-semibold text-[#22C55E]" style={{ fontFamily: "var(--font-heading)" }}>Graduate With a Live Product</p>
                <p className="mt-1 text-xs leading-snug text-[#9CA3AF]">
                  Every student leaves with a live app to showcase or use as a startup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
