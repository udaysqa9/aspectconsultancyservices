import Image from "next/image";
import Link from "next/link";

const services = [
  {
    slug: "digital-strategy",
    name: "Digital strategy",
    description:
      "Sharp, practical strategies that connect vision, product, and technology.",
    tags: ["Positioning", "North star", "Portfolio bets"],
  },
  {
    slug: "product-consulting",
    name: "Product consulting",
    description:
      "Hands‑on support from discovery through to launch and iteration.",
    tags: ["Discovery", "Roadmaps", "Experiments"],
  },
  {
    slug: "technology-advisory",
    name: "Technology advisory",
    description:
      "Architecture reviews, technical due diligence, and pragmatic guidance.",
    tags: ["Architecture", "Platform", "Scaling"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-3 rounded-3xl border border-slate-900 bg-slate-950/85 p-5 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Services designed to bring clarity and momentum to your roadmap.
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            We combine strategy, product, and engineering experience to help you
            choose the right problems, frame work clearly, and deliver with
            confidence. Engagements are tailored, but most fit into the themes
            below.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/90 shadow-[0_22px_45px_rgba(15,23,42,0.75)] backdrop-blur-xl">
          <Image
            src="/training-consulting-2.png"
            alt="Consultant presenting technical options to a product team"
            width={900}
            height={700}
            className="h-52 w-full object-cover opacity-90 sm:h-64 md:h-72"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/90 via-slate-900/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-end gap-1.5 p-4">
            <p className="text-[11px] font-medium uppercase tracking-[0.16em] text-slate-300/80">
              Strategy, product & technology
            </p>
            <p className="max-w-xs text-xs text-slate-100/90">
              Training, consulting, and advisory services that plug into your
              existing teams rather than forcing a new process.
            </p>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="card-zoom group flex flex-col justify-between rounded-2xl border bg-white/5 p-4 text-xs text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)] backdrop-blur-xl"
          >
            <div className="space-y-2">
              <h2 className="text-sm font-semibold text-slate-50 group-hover:text-[hsl(var(--color-primary-soft))]">
                {service.name}
              </h2>
              <p className="text-slate-300">
                {service.description}
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center rounded-full bg-white/10 px-2 py-0.5 text-[11px] text-slate-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}

