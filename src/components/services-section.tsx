import Link from "next/link";

const services = [
  {
    title: "Events & Branding",
    description: "8000+ events delivered. Large-scale events, award ceremonies, and brand campaigns for known brands.",
    href: "/services/events-branding",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Chitrasanthe",
    description: "Kannada Premium Cine Magazine & Podcast. 10,000+ circulation. Film, culture, and achiever stories.",
    href: "/services/chitrasanthe",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z" />
      </svg>
    ),
  },
  {
    title: "Rapid Jobs",
    description: "Manpower & outsourcing. Skill India recognised. End-to-end staffing for IT, non-IT, and operations.",
    href: "/services/rapid-jobs",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
      </svg>
    ),
  },
  {
    title: "Power Pay",
    description: "B2B / B2C FinTech. Hyperlocal financial services. User-friendly app, instant registration, partner network.",
    href: "/services/power-pay",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
  },
];

export function ServicesSection() {
  return (
    <section className="border-b border-white/5 bg-[#0F172A] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Services
        </h2>
        <p className="mt-2 max-w-2xl text-[#9CA3AF] text-base">
          Four wings under one roof — events, media, manpower, and fintech.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="card-hover glass-card group flex flex-col rounded-2xl p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#6366F1]/20 text-[#6366F1] group-hover:bg-[#6366F1]/30 transition-colors">
                {s.icon}
              </div>
              <h3 className="mt-4 font-heading text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>
                {s.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-[#9CA3AF] leading-relaxed">
                {s.description}
              </p>
              <span className="mt-4 inline-flex items-center text-sm font-medium text-[#6366F1]">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
