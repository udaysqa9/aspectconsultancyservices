 "use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  title: string;
  subtitle: string;
};

const slides: Slide[] = [
  {
    src: "/hero-tech-excellence.png",
    alt: "Banner showcasing software solutions, web development and IT training",
    title: "Empowering innovation in software solutions",
    subtitle:
      "Software development, web and app solutions, and IT training programmes tailored to your goals.",
  },
  {
    src: "/training-consulting-1.png",
    alt: "Instructor leading software training for professionals",
    title: "Professional IT training for modern stacks",
    subtitle:
      "Scenario‑based workshops on web, cloud, and engineering practices, tailored to your team’s level.",
  },
  {
    src: "/training-consulting-2.png",
    alt: "Consultant reviewing dashboards with a client",
    title: "Consulting that sits beside your team",
    subtitle:
      "Architecture reviews, delivery coaching, and roadmap support embedded with your product teams.",
  },
];

function classNames(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}

export function HomeBannerCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 7000);

    return () => clearInterval(id);
  }, []);

  const goTo = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="-mx-4 mb-8 sm:-mx-6 sm:mb-10 lg:-mx-8">
      <div className="relative overflow-hidden rounded-none border-y border-white/10 bg-slate-950/90 shadow-[0_18px_40px_rgba(15,23,42,0.7)] sm:rounded-3xl sm:border sm:border-white/15">
        {slides.map((slide, index) => (
          <div
            key={slide.src}
            className={classNames(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              index === activeIndex ? "opacity-100" : "pointer-events-none opacity-0"
            )}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-900/40" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 sm:px-10 md:px-12">
              <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-300/80">
                Aspect Consultancy Services
              </p>
              <h2 className="mt-2 max-w-2xl text-balance text-lg font-semibold tracking-tight text-slate-50 sm:text-xl md:text-2xl">
                {slide.title}
              </h2>
              <p className="mt-2 max-w-2xl text-balance text-xs leading-6 text-slate-200 sm:text-sm">
                {slide.subtitle}
              </p>
            </div>
          </div>
        ))}

        {/* Height box for layout before images load */}
        <div className="h-56 w-full sm:h-72 md:h-80" aria-hidden="true" />

        {/* Controls */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-3 sm:px-6 md:px-8">
          <div className="pointer-events-auto flex gap-1.5">
            {slides.map((slide, index) => (
              <button
                key={slide.src}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={classNames(
                  "h-1.5 rounded-full transition-all duration-200",
                  index === activeIndex
                    ? "w-6 bg-[hsl(var(--color-primary))]"
                    : "w-2 bg-white/40 hover:bg-white/70"
                )}
              />
            ))}
          </div>

          <div className="pointer-events-auto hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={() =>
                goTo((activeIndex - 1 + slides.length) % slides.length)
              }
              aria-label="Previous slide"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs text-slate-100 shadow-sm shadow-slate-900/70 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo((activeIndex + 1) % slides.length)}
              aria-label="Next slide"
              className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-black/40 text-xs text-slate-100 shadow-sm shadow-slate-900/70 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

