import Image from "next/image";

export default function WorkPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-3 rounded-3xl border border-slate-900 bg-slate-950/85 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Recent work and typical engagements.
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            We work with product‑led businesses, scale‑ups, and internal teams
            inside larger organisations. Here are examples of the kinds of
            problems we help teams solve.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/90 shadow-[0_22px_45px_rgba(15,23,42,0.75)] backdrop-blur-xl">
          <Image
            src="/training-consulting-2.png"
            alt="Team reviewing dashboards and product performance together"
            width={900}
            height={700}
            className="h-52 w-full object-cover opacity-90 sm:h-64 md:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300/80">
              Examples of impact
            </p>
            <p className="max-w-xs text-xs text-slate-100/90">
              From roadmap alignment to modernising internal tools, we focus on
              measurable improvements in velocity, reliability, and clarity.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        <article className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/95 p-4 text-xs text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-50">
              Aligning roadmap with strategy
            </h2>
            <span className="rounded-full bg-slate-700/90 px-2 py-0.5 text-[10px] text-slate-100">
              B2B SaaS
            </span>
          </div>
          <p className="text-slate-200">
            Partnered with product and engineering leadership to reshape a
            roadmap around a clearer narrative, tightening focus to a smaller
            set of high‑leverage initiatives.
          </p>
        </article>

        <article className="space-y-3 rounded-2xl border border-slate-700 bg-slate-900/95 p-4 text-xs text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
          <div className="flex items-center justify-between gap-2">
            <h2 className="text-sm font-semibold text-slate-50">
              Modernising critical internal tooling
            </h2>
            <span className="rounded-full bg-slate-700/90 px-2 py-0.5 text-[10px] text-slate-100">
              Operations
            </span>
          </div>
          <p className="text-slate-200">
            Helped an operations team redesign workflows and architecture for a
            core internal platform, improving reliability while reducing cycle
            time for new features.
          </p>
        </article>
      </section>
    </div>
  );
}

