import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <section className="space-y-3 rounded-3xl border border-slate-900 bg-slate-950/85 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
        <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Let&apos;s explore whether we&apos;re a good fit.
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          Share a little about your team, the problem you&apos;re trying to
          solve, and the timelines you&apos;re working with. We&apos;ll reply
          with a short perspective and, if helpful, a time for a call.
        </p>
      </section>

      <section className="grid gap-8 md:grid-cols-[minmax(0,1.3fr),minmax(0,1fr)] md:items-start">
        <form className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)] backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label
                htmlFor="name"
                className="text-xs font-medium text-slate-200"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Alex Doe"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition-shadow placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
              />
            </div>
            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-xs font-medium text-slate-200"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition-shadow placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="company"
              className="text-xs font-medium text-slate-200"
            >
              Company
            </label>
            <input
              id="company"
              type="text"
              placeholder="Company or team name"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition-shadow placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
            />
          </div>
          <div className="space-y-1.5">
            <label
              htmlFor="message"
              className="text-xs font-medium text-slate-200"
            >
              What would you like to explore?
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Share a few lines on the context, goals, and timelines…"
              className="w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-0 transition-shadow placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
            />
          </div>
          <button
            type="button"
            className="btn-primary inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium"
          >
            Submit (static demo)
          </button>
          <p className="text-[11px] leading-5 text-slate-400">
            This form is currently a static demo. When you&apos;re ready, we can
            wire it up to your preferred email provider or CRM.
          </p>
        </form>

        <aside className="space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/90 shadow-[0_18px_40px_rgba(15,23,42,0.7)] backdrop-blur-xl">
            <Image
              src="/training-consulting-1.png"
              alt="Consultant and team in discussion during a planning session"
              width={800}
              height={600}
              className="h-40 w-full object-cover opacity-90 sm:h-48"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/40 to-transparent" />
            <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4">
              <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300/80">
                What to expect
              </p>
              <p className="max-w-xs text-xs text-slate-100/90">
                A short intro call to understand your context, followed by a
                lightweight proposal tailored to your team and timelines.
              </p>
            </div>
          </div>

          <div className="space-y-3 rounded-2xl border border-white/15 bg-white/5 p-5 text-xs text-slate-300 backdrop-blur-xl">
            <h2 className="text-sm font-semibold tracking-tight text-slate-50">
              Typical next steps
            </h2>
            <ol className="space-y-2">
              <li>
                <span className="font-medium text-slate-100">
                  01 · Intro call (30–45 mins)
                </span>{" "}
                to understand context, constraints, and what a good outcome would
                look like.
              </li>
              <li>
                <span className="font-medium text-slate-100">
                  02 · Lightweight proposal
                </span>{" "}
                covering options, timeframes, and ways of working.
              </li>
              <li>
                <span className="font-medium text-slate-100">
                  03 · Kick‑off
                </span>{" "}
                with key stakeholders to align on scope and ways of working.
              </li>
            </ol>
          </div>
        </aside>
      </section>
    </div>
  );
}

