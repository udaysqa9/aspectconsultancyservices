import Image from "next/image";
import { HomeBannerCarousel } from "@/components/home-banner-carousel";

export default function Home() {
  return (
    <div className="space-y-12">
      <HomeBannerCarousel />

      <section className="grid gap-10 md:grid-cols-[minmax(0,1.5fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-6 rounded-3xl border border-slate-900 bg-slate-950/85 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-xs font-medium text-zinc-200 shadow-[0_18px_30px_rgba(15,23,42,0.55)] backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            IT software training & consulting for modern teams
          </div>
          <div className="space-y-4">
            <h1 className="heading-strong text-balance text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
              Upskill your teams. Ship better software. Move with confidence.
            </h1>
            <p className="max-w-xl text-balance text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
              Aspect Consultancy partners with organisations to provide practical
              IT training and hands‑on consulting — from modern engineering
              practices to delivery coaching and architecture advisory.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Book a training or consult
            </a>
            <a
              href="/services"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-medium text-zinc-100 shadow-sm shadow-slate-900/60 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              Explore our services
            </a>
          </div>
          <dl className="grid grid-cols-2 gap-4 text-xs text-slate-300 sm:grid-cols-4 sm:text-sm">
            <div>
              <dt className="font-medium text-slate-100">
                What we offer
              </dt>
              <dd>Training, consulting, advisory</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-100">
                Training focus
              </dt>
              <dd>Modern web, APIs, cloud</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-100">
                Teams we support
              </dt>
              <dd>Engineers, PMs, tech leads</dd>
            </div>
            <div>
              <dt className="font-medium text-slate-100">
                Ways of working
              </dt>
              <dd>Workshops, coaching, embeds</dd>
            </div>
          </dl>
        </div>

        <div className="space-y-4 rounded-3xl border border-white/15 bg-gradient-to-br from-[hsl(var(--color-primary-strong))] via-sky-500 to-cyan-400 p-5 text-sm text-sky-50 shadow-[0_22px_45px_rgba(8,47,73,0.65)] md:p-6">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-50/80">
              Training & consulting snapshot
            </h2>
            <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Active with product & engineering teams
            </span>
          </div>
          <div className="space-y-3 text-xs leading-5 text-sky-50/90">
            <p>
              Blended programmes combining practical workshops, live coding, and
              embedded coaching to help teams adopt modern software practices.
            </p>
            <p>
              Typical topics include React & modern front‑end, API & integration
              design, cloud‑native architectures, and delivery excellence.
            </p>
          </div>
          <div className="mt-4 grid gap-3 rounded-2xl bg-sky-50/10 p-3 text-xs shadow-sm ring-1 ring-sky-100/40 backdrop-blur-sm dark:bg-sky-950/20 dark:ring-sky-300/30">
            <div className="flex items-center justify-between gap-2">
              <span className="font-medium text-sky-50">
                Typical outcomes
              </span>
              <span className="rounded-full bg-sky-50/10 px-2 py-0.5 text-[10px] text-sky-50/90 ring-1 ring-sky-100/30">
                1–3 day sprints or 6–12 week programmes
              </span>
            </div>
            <ul className="grid list-disc grid-cols-1 gap-1 pl-4 sm:grid-cols-2">
              <li>Stronger engineering & delivery practices</li>
              <li>Shared language between product & tech</li>
              <li>Higher‑quality releases with less rework</li>
              <li>More confident technical decision‑making</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="space-y-6 border-t border-white/10 pt-8">
        <div className="grid gap-4 md:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl bg-slate-950/90 text-xs text-slate-50 shadow-[0_22px_45px_rgba(15,23,42,0.75)]">
            <Image
              src="/training-consulting-1.png"
              alt="Instructor guiding professionals during software training session"
              width={800}
              height={600}
              className="h-48 w-full object-cover opacity-90 sm:h-56"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/85 via-slate-900/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4">
              <h2 className="text-sm font-semibold">
                Instructor‑led software training
              </h2>
              <p className="max-w-xs text-[11px] text-slate-100/85">
                Practical, scenario‑based sessions that help engineers and
                analysts apply new skills immediately in their day‑to‑day work.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-slate-950/90 text-xs text-slate-50 shadow-[0_22px_45px_rgba(15,23,42,0.75)]">
            <Image
              src="/training-consulting-2.png"
              alt="Consultant reviewing dashboards with a client team"
              width={800}
              height={600}
              className="h-48 w-full object-cover opacity-90 sm:h-56"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-950/85 via-sky-900/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4">
              <h2 className="text-sm font-semibold">
                Hands‑on consulting & coaching
              </h2>
              <p className="max-w-xs text-[11px] text-slate-100/85">
                Side‑by‑side support with your product and engineering teams to
                unblock roadmaps and raise the quality bar.
              </p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-4 text-xs text-slate-100 shadow-[0_22px_45px_rgba(15,23,42,0.75)]">
            <div className="absolute right-0 top-0 h-16 w-16 -translate-y-4 translate-x-4 rounded-full bg-slate-500/40 blur-xl" />
            <div className="relative space-y-1.5">
              <h2 className="text-sm font-semibold">Blended programmes</h2>
              <p className="text-slate-100/85">
                Combine training and consulting into one engagement to move
                faster from learning to real adoption.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-base font-semibold tracking-tight text-slate-50 sm:text-lg">
              How we can help your teams
            </h2>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-slate-200 sm:text-base">
              We plug into your leadership, product, and engineering teams to
              design the right mix of training and consulting — tailored to your
              stack, culture, and goals.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-zinc-100 shadow-sm shadow-slate-900/60 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
          >
            View all services
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <article className="card-zoom group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
            <div className="space-y-2.5">
              <h3 className="text-base font-semibold text-slate-50 group-hover:text-[hsl(var(--color-primary-soft))]">
                Digital strategy
              </h3>
              <p className="text-slate-200">
                Sharpen positioning, clarify product direction, and align
                roadmaps with measurable business outcomes.
              </p>
            </div>
            <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-100">
              Executive workshops
            </span>
          </article>
          <article className="card-zoom group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
            <div className="space-y-2.5">
              <h3 className="text-base font-semibold text-slate-50 group-hover:text-[hsl(var(--color-primary-soft))]">
                Product consulting
              </h3>
              <p className="text-slate-200">
                Translate strategy into clear, testable product bets with strong
                narratives and realistic delivery plans.
              </p>
            </div>
            <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-100">
              Discovery to launch
            </span>
          </article>
          <article className="card-zoom group flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-950 p-5 text-sm text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
            <div className="space-y-2.5">
              <h3 className="text-base font-semibold text-slate-50 group-hover:text-[hsl(var(--color-primary-soft))]">
                Technology advisory
              </h3>
              <p className="text-slate-200">
                Review architectures, untangle complexity, and shape pragmatic
                paths to more resilient systems.
              </p>
            </div>
            <span className="mt-4 inline-flex w-fit items-center gap-1 rounded-full bg-slate-800 px-2.5 py-1 text-[11px] font-medium text-slate-100">
              Architecture reviews
            </span>
          </article>
        </div>
      </section>
    </div>
  );
}
