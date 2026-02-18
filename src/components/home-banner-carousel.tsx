"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Slide = {
  src: string;
  alt: string;
  badge?: string;
  title: string;
  subtitle: string;
  cta?: { label: string; href: string };
  /** Anchor image so face/person is visible on web (e.g. "top" for Chitrasanthe) */
  objectPosition?: "top" | "center" | "bottom";
};

const slides: Slide[] = [
  {
    src: "/aspect-main-banner.png",
    alt: "Aspect Consultancy Services – Events, Branding, Media & Manpower",
    badge: "ESTABLISHED 2004",
    title: "Aspect Consultancy Services",
    subtitle:
      "Over 18+ years of expertise. Events & Entertainments, Chitrasanthe Magazine, Rapid Jobs, Power Pay — delivering for established brands with 8000+ events and a track record of satisfied clientele.",
    cta: { label: "Explore services", href: "/services" },
  },
  {
    src: "/sliders/slider1.png",
    alt: "Chitrasanthe – Film Awards and Events",
    badge: "Chitrasanthe",
    title: "We feature inspiring achievers, business owners and entrepreneurs.",
    subtitle:
      "Chitrasanthe Podcast and Film Magazine — Cinema | Culture | Celebration. Join us and share your journey with our audience. Kannada Premium Cine Magazine with 10,000+ circulation across Karnataka.",
    cta: { label: "Chitrasanthe", href: "/services/chitrasanthe" },
    objectPosition: "top",
  },
  {
    src: "/sliders/slider3.png",
    alt: "Chitrasanthe Film Awards",
    badge: "Film Awards",
    title: "Media & Film Fraternity",
    subtitle:
      "A wide expertise in promoting films and providing the right platform, visibility and branding to make a movie a grand success.",
    cta: { label: "Chitrasanthe", href: "/services/chitrasanthe" },
  },
  {
    src: "/sliders/slider4.png",
    alt: "Aspect Consultancy Events",
    badge: "Aspect Consultancy",
    title: "Your partner in events and branding",
    subtitle:
      "Events & Entertainments, Manpower (Rapid Jobs), FinTech (Power Pay) — one stop for established brands.",
    cta: { label: "Contact us", href: "/contact" },
  },
  {
    src: "/sliders/slider5.png",
    alt: "Professional events and recognition",
    badge: "Recognition",
    title: "Award-winning execution",
    subtitle:
      "Best Print Layout & Design for Karnataka by the Press Association. Trusted by the industry for quality and delivery.",
    cta: { label: "About us", href: "/about" },
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
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const goTo = (index: number) => setActiveIndex(index);

  return (
    <section className="-mx-4 mb-8 sm:-mx-6 sm:mb-10 lg:-mx-8">
      <div className="relative overflow-hidden rounded-none border-y border-white/10 bg-slate-950/90 shadow-[0_18px_40px_rgba(15,23,42,0.7)] sm:rounded-3xl sm:border sm:border-white/15">
        {slides.map((slide, index) => (
          <div
            key={`${slide.src}-${index}`}
            className={classNames(
              "absolute inset-0 transition-opacity duration-700 ease-out",
              index === activeIndex
                ? "opacity-100"
                : "pointer-events-none opacity-0"
            )}
            aria-hidden={index !== activeIndex}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              className={classNames(
                "object-cover",
                slide.objectPosition === "top" && "object-top",
                slide.objectPosition === "bottom" && "object-bottom"
              )}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950/92 via-slate-950/75 to-slate-900/50" />
            <div className="absolute inset-0 flex flex-col justify-center px-6 py-10 sm:px-10 md:px-14">
              {slide.badge && (
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-300/90 sm:text-xs">
                  {slide.badge}
                </p>
              )}
              <h2 className="mt-2 max-w-2xl text-balance text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl md:text-3xl">
                {slide.title}
              </h2>
              <p className="mt-3 max-w-2xl text-balance text-sm leading-6 text-slate-200 sm:text-base">
                {slide.subtitle}
              </p>
              {slide.cta && (
                <div className="mt-5">
                  <Link
                    href={slide.cta.href}
                    className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
                  >
                    {slide.cta.label}
                  </Link>
                </div>
              )}
            </div>
          </div>
        ))}

        <div className="h-64 w-full sm:h-80 md:h-96" aria-hidden="true" />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between px-4 pb-4 sm:px-6 md:px-8">
          <div className="pointer-events-auto flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Show slide ${index + 1}`}
                aria-pressed={index === activeIndex}
                className={classNames(
                  "h-1.5 rounded-full transition-all duration-200",
                  index === activeIndex
                    ? "w-7 bg-[hsl(var(--color-primary))]"
                    : "w-2.5 bg-white/40 hover:bg-white/70"
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
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-slate-100 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => goTo((activeIndex + 1) % slides.length)}
              aria-label="Next slide"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-black/50 text-slate-100 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
