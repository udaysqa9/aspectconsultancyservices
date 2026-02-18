import Image from "next/image";
import Link from "next/link";

const services = [
  {
    slug: "events-branding",
    name: "Events & Branding",
    description:
      "More than 8000+ Events / Branding / Marketing for known brands with timely delivery and an excellent track record of satisfied clientele.",
    image: "/aspect-main-banner.png",
    tags: ["Events", "Branding", "Marketing"],
  },
  {
    slug: "chitrasanthe",
    name: "Chitrasanthe",
    description:
      "Kannada Premium Cine Magazine. 10,000+ circulation. Film-based magazine, podcast featuring achievers. Best Print Layout & Design — Press Association, Karnataka.",
    image: "/partners/chitrasanthe.png",
    tags: ["Magazine", "Podcast", "Film", "Media"],
  },
  {
    slug: "rapid-jobs",
    name: "Rapid Jobs",
    description:
      "Manpower Management / Outsourcing. Skill India recognised. End-to-end solutions for IT / Non IT, contract & permanent staffing. Skilled HR team.",
    image: "/partners/rapid-jobs.png",
    tags: ["Manpower", "Outsourcing", "Staffing"],
  },
  {
    slug: "power-pay",
    name: "Power Pay",
    description:
      "B2B / B2C FinTech app. Partner with neighborhood retail for assisted digital financial services. India's largest hyperlocal FinTech network vision.",
    image: "/training-consulting-2.png",
    tags: ["FinTech", "B2B", "B2C", "Retail"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    description:
      "Assisted digital financial services as part of Aspect Consultancy. Seamless, quick, easy transactions and empowerment for retailer partners.",
    image: "/training-consulting-1.png",
    tags: ["Financial", "Digital", "Assisted"],
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[minmax(0,1.4fr),minmax(0,1fr)] md:items-center">
        <div className="space-y-3 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Our services
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Four wings under one roof: Events & Branding, Chitrasanthe (media & film), Rapid Jobs (manpower), Power Pay (fintech), and Financial Services. Delivering for established brands since 2004.
          </p>
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

      <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="card-zoom group flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90 text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]"
          >
            <div className="relative h-40 w-full bg-slate-800">
              <Image
                src={service.image}
                alt=""
                fill
                className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5">
              <div className="space-y-2">
                <h2 className="text-base font-semibold text-slate-50 group-hover:text-[hsl(var(--color-primary-soft))]">
                  {service.name}
                </h2>
                <p className="text-sm text-slate-300 line-clamp-3">
                  {service.description}
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-slate-700/90 px-2.5 py-0.5 text-[11px] text-slate-100"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
