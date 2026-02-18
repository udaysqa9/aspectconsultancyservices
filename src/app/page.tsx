import Image from "next/image";
import Link from "next/link";
import { HomeBannerCarousel } from "@/components/home-banner-carousel";
import { PartnerLogoMarquee } from "@/components/partner-logo-marquee";

const ourWings = [
  { src: "/partners/chitrasanthe.png", alt: "Chitrasanthe", href: "/services/chitrasanthe" },
  { src: "/partners/rapid-jobs.png", alt: "Rapid Jobs", href: "/services/rapid-jobs" },
  { src: "/partners/hr-connect.png", alt: "HR Connect", href: "/services/rapid-jobs" },
];


const wings = [
  {
    title: "Events & Entertainments / Branding",
    description: "More than 8000+ Events / Branding / Marketing for known brands with timely delivery and an excellent track record of satisfied clientele.",
    href: "/services/events-branding",
  },
  {
    title: "Chitrasanthe",
    description: "A film-based magazine. Kannada Premium Cine Magazine — 10,000+ circulation, award-winning layout & design. Media & Film Fraternity expertise.",
    href: "/services/chitrasanthe",
  },
  {
    title: "Rapid Jobs",
    description: "Manpower Management / Outsourcing. Skill India recognised. End-to-end solutions for IT / Non IT, contract & permanent staffing.",
    href: "/services/rapid-jobs",
  },
  {
    title: "Power Pay",
    description: "B2B / B2C FinTech app. Hyperlocal financial services through neighborhood retail partners. User-friendly app, instant registration.",
    href: "/services/power-pay",
  },
];

export default function Home() {
  return (
    <div className="space-y-14">
      <HomeBannerCarousel />

      {/* Our wings */}
      <section className="rounded-2xl border border-slate-700 bg-slate-900/95 py-6 shadow-[0_18px_40px_rgba(15,23,42,0.5)]">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-300">
          Our wings
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 px-4 sm:gap-12">
          {ourWings.map((wing) => (
            <Link
              key={wing.alt}
              href={wing.href}
              className="relative h-12 w-28 transition-opacity hover:opacity-90 sm:h-14 sm:w-32"
            >
              <Image
                src={wing.src}
                alt={wing.alt}
                fill
                className="object-contain"
                sizes="128px"
              />
            </Link>
          ))}
        </div>
      </section>

      {/* Partner logos — horizontal marquee */}
      <section className="rounded-2xl border border-slate-700 bg-slate-900/95 py-5 shadow-[0_18px_40px_rgba(15,23,42,0.5)]">
        <p className="mb-4 text-center text-xs font-semibold uppercase tracking-widest text-slate-300">
          Our partners
        </p>
        <PartnerLogoMarquee />
      </section>

      {/* About Aspect + ESTABLISHED 2004 */}
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-6 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-200">
            ESTABLISHED 2004
          </div>
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl md:text-4xl">
            Aspect Consultancy Services
          </h1>
          <p className="max-w-xl text-balance text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            In business for the past 18+ years (since 2004). Over a decade of expertise with industry experts to deliver for established brands. We have handled more than 8000+ Events / Branding / Marketing for known brands with timely delivery and an excellent track record of satisfied clientele.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/about"
              className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
            >
              About us
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-slate-800/90 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/15 bg-gradient-to-br from-[hsl(var(--color-primary-strong))] via-sky-500 to-cyan-400 p-6 text-sm text-sky-50 shadow-[0_22px_45px_rgba(8,47,73,0.65)]">
          <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-50/90">
            What we do
          </h2>
          <ul className="space-y-3 text-sm leading-6 text-sky-50/95">
            <li>• Events & Entertainments / Branding</li>
            <li>• Chitrasanthe — Film-based magazine & podcast</li>
            <li>• Rapid Jobs — Manpower / Outsourcing</li>
            <li>• Power Pay — B2B / B2C FinTech app</li>
            <li>• Financial Services (assisted digital)</li>
          </ul>
        </div>
      </section>

      {/* Service wings cards */}
      <section className="space-y-6 border-t border-white/10 pt-10">
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
            Our services
          </h2>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-300">
            Four wings under one roof — events, media, manpower, and fintech.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {wings.map((wing) => (
            <Link
              key={wing.href}
              href={wing.href}
              className="card-zoom group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950/90 p-5 text-sm text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]"
            >
              <div className="space-y-2.5">
                <h3 className="text-base font-semibold text-slate-50 group-hover:text-[hsl(var(--color-primary-soft))]">
                  {wing.title}
                </h3>
                <p className="text-xs leading-5 text-slate-300">
                  {wing.description}
                </p>
              </div>
              <span className="mt-4 inline-flex w-fit items-center gap-1 text-xs font-medium text-[hsl(var(--color-primary-soft))]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
        <div className="flex justify-end">
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-slate-800/90 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
          >
            View all services
          </Link>
        </div>
      </section>
    </div>
  );
}
