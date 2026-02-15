import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-4 rounded-3xl border border-slate-900 bg-slate-950/85 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Independent consultancy for teams that care about the details.
        </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          Aspect Consultancy is a small, senior team focused on helping
          organisations make confident digital decisions and ship thoughtful,
          resilient products. We sit at the intersection of strategy, product,
          and engineering — translating ideas into clear, actionable plans.
        </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/90 shadow-[0_22px_45px_rgba(15,23,42,0.75)] backdrop-blur-xl">
          <Image
            src="/training-consulting-1.png"
            alt="Consultant guiding a product team during a workshop"
            width={900}
            height={700}
            className="h-52 w-full object-cover opacity-90 sm:h-64 md:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300/80">
              How we work with teams
            </p>
            <p className="max-w-xs text-xs text-slate-100/90">
              Embedded alongside your product, design, and engineering leaders
              to turn strategy into confident, practical delivery.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-[minmax(0,1.2fr),minmax(0,1fr)]">
        <div className="space-y-4 rounded-2xl border border-white/15 bg-white/5 p-5 text-sm text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)] backdrop-blur-xl">
          <h2 className="text-sm font-semibold tracking-tight text-slate-50">
            Principles we work by
          </h2>
          <ul className="space-y-3 text-sm leading-7 text-slate-100 sm:text-base">
            <li>
              <span className="font-medium text-slate-50">
                Clarity over noise.
              </span>{" "}
              We reduce complexity, create shared language, and help teams focus
              on the few decisions that truly move the needle.
            </li>
            <li>
              <span className="font-medium text-slate-50">
                Outcomes over output.
              </span>{" "}
              We tie every recommendation to measurable impact — for the
              business, for customers, and for the people building the product.
            </li>
            <li>
              <span className="font-medium text-slate-50">
                Partnership over hand‑offs.
              </span>{" "}
              We embed alongside your teams, coaching as we go so improvements
              last long after the engagement finishes.
            </li>
          </ul>
        </div>

        <div className="space-y-3 rounded-2xl border border-dashed border-white/20 bg-white/5 p-5 text-xs text-slate-300 backdrop-blur-xl">
          <h2 className="text-sm font-semibold tracking-tight text-slate-50">
            Where we fit
          </h2>
          <p>
            We are often brought in by product, technology, or operations
            leaders who need a trusted partner to sense‑check direction, unlock
            stalled initiatives, or guide teams through complex change.
          </p>
          <p>
            Think of us as an extension of your leadership bench: close enough
            to the work to be practical, far enough away to be honest.
          </p>
        </div>
      </section>
    </div>
  );
}

