import Image from "next/image";
import Link from "next/link";
import { SITE_ADDRESS_LINES, SITE_EMAIL, SITE_PHONE } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <div className="space-y-12">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-zinc-200">
            ESTABLISHED 2004
          </div>
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            About Aspect Consultancy Services
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Aspect Consultancy Services has been in business for the past 18+ years, since 2004. We bring over a decade of expertise with industry experts to deliver for established brands.
          </p>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            We have handled more than 8000+ Events / Branding / Marketing for known brands with timely delivery and an excellent track record of satisfied clientele.
          </p>
          <div className="space-y-1 text-sm text-slate-300">
            <p className="flex items-center gap-2">
              <span aria-hidden>📍</span>
              <span>
                {SITE_ADDRESS_LINES.map((line, i) => (
                  <span key={i}>
                    {line}
                    {i < SITE_ADDRESS_LINES.length - 1 && <br />}
                  </span>
                ))}
              </span>
            </p>
            <p className="flex items-center gap-2">
              <span aria-hidden>📞</span>
              <a href={`tel:${SITE_PHONE}`} className="hover:text-slate-100">Mob: {SITE_PHONE}</a>
            </p>
            <p className="flex items-center gap-2">
              <span aria-hidden>✉️</span>
              <a href={`mailto:${SITE_EMAIL}`} className="hover:text-slate-100">{SITE_EMAIL}</a>
            </p>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/90 shadow-[0_22px_45px_rgba(15,23,42,0.75)]">
          <Image
            src="/aspect-main-banner.png"
            alt="Aspect Consultancy Services"
            width={900}
            height={600}
            className="h-52 w-full object-cover opacity-90 sm:h-64 md:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/40 to-transparent" />
        </div>
      </section>

      {/* Our wings */}
      <section className="space-y-4 rounded-2xl border border-slate-700 bg-slate-900/95 p-6 shadow-[0_18px_40px_rgba(15,23,42,0.6)]">
        <h2 className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
          Our wings
        </h2>
        <ul className="grid gap-3 sm:grid-cols-2">
          <li className="flex items-start gap-2 text-sm text-slate-200">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--color-primary))]" />
            <span><strong className="text-slate-100">Events & Entertainments / Branding</strong> — Large-scale events and branding for known brands.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-200">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--color-primary))]" />
            <span><strong className="text-slate-100">Chitrasanthe</strong> — A film-based magazine; Kannada Premium Cine Magazine.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-200">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--color-primary))]" />
            <span><strong className="text-slate-100">Rapid Jobs</strong> — Manpower Management / Outsourcing.</span>
          </li>
          <li className="flex items-start gap-2 text-sm text-slate-200">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[hsl(var(--color-primary))]" />
            <span><strong className="text-slate-100">Power Pay</strong> — B2B / B2C FinTech app.</span>
          </li>
        </ul>
      </section>

      {/* CEO & Founder */}
      <section className="rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)] sm:p-8">
        <h2 className="mb-6 text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
          CEO & Founder
        </h2>
        <div className="grid gap-8 md:grid-cols-[200px,1fr] md:items-start">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-white/15 shadow-xl md:mx-0 md:h-52 md:w-52">
            <Image
              src="/founder.jpg"
              alt="CEO and Founder, Aspect Consultancy Services"
              fill
              className="object-cover object-top"
              sizes="208px"
              priority
            />
          </div>
          <div className="space-y-3 text-sm leading-6 text-slate-300 sm:text-base">
            <p>
              Leading Aspect Consultancy Services with a vision to deliver excellence across events, media, manpower, and fintech. Under this leadership, we have executed 8000+ events and built trusted brands including Chitrasanthe, Rapid Jobs, and Power Pay.
            </p>
            <p>
              From film awards and magazine publishing to manpower solutions and hyperlocal financial services, we are committed to quality, timely delivery, and lasting client relationships.
            </p>
          </div>
        </div>
      </section>

      <div className="flex justify-center">
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
        >
          Get in touch
        </Link>
      </div>
    </div>
  );
}
