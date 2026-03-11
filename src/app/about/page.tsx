import Image from "next/image";
import Link from "next/link";
import { SITE_ADDRESS_LINES, SITE_EMAIL, SITE_PHONE } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-white/5 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(34,197,94,0.06) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `
              linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-6xl">
          <span className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-[#9CA3AF]">
            Established 2004
          </span>
          <h1 className="mt-6 font-heading text-4xl font-semibold tracking-tight text-[#E5E7EB] sm:text-[48px] lg:text-[56px]">
            About Aspect Consultancy Services
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            We have been in business for 18+ years, bringing industry expertise
            to deliver for established brands across events, media, manpower,
            and fintech.
          </p>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            We have handled more than 8000+ Events / Branding / Marketing for
            known brands with timely delivery and an excellent track record of
            satisfied clientele.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr] lg:items-start lg:gap-12">
          {/* Main content + wings */}
          <div className="space-y-12">
            <section className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-[#E5E7EB] sm:text-[32px]">
                Our Wings
              </h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-1">
                {[
                  {
                    title: "Events & Entertainments / Branding",
                    desc: "Large-scale events and branding for known brands.",
                  },
                  {
                    title: "Chitrasanthe",
                    desc: "Kannada Premium Cine Magazine — film-based magazine and podcast.",
                  },
                  {
                    title: "Rapid Jobs",
                    desc: "Manpower Management / Outsourcing.",
                  },
                  {
                    title: "Power Pay",
                    desc: "B2B / B2C FinTech app — hyperlocal financial services.",
                  },
                ].map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 text-[15px] text-[#9CA3AF]"
                  >
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#6366F1]" />
                    <span>
                      <strong className="text-[#E5E7EB]">{item.title}</strong> —{" "}
                      {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CEO & Founder */}
            <section className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] sm:p-8">
              <h2 className="font-heading text-2xl font-semibold text-[#E5E7EB] sm:text-[32px]">
                CEO & Founder
              </h2>
              <div className="mt-8 grid gap-8 md:grid-cols-[200px,1fr] md:items-start">
                <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-2xl border border-white/10 md:mx-0 md:h-52 md:w-52">
                  <Image
                    src="/founder.jpg"
                    alt="CEO and Founder, Aspect Consultancy Services"
                    fill
                    className="object-cover object-top"
                    sizes="208px"
                    priority
                  />
                </div>
                <div className="space-y-4 text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
                  <p>
                    Leading Aspect Consultancy Services with a vision to deliver
                    excellence across events, media, manpower, and fintech.
                    Under this leadership, we have executed 8000+ events and
                    built trusted brands including Chitrasanthe, Rapid Jobs, and
                    Power Pay.
                  </p>
                  <p>
                    From film awards and magazine publishing to manpower
                    solutions and hyperlocal financial services, we are committed
                    to quality, timely delivery, and lasting client relationships.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* Contact card */}
          <aside className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] sm:p-8">
              <h2 className="font-heading text-xl font-semibold text-[#E5E7EB]">
                Contact
              </h2>
              <div className="mt-6 space-y-4 text-[15px] text-[#9CA3AF]">
                <p className="flex items-start gap-3">
                  <span className="text-[#6366F1]" aria-hidden>
                    📍
                  </span>
                  <span>
                    {SITE_ADDRESS_LINES.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < SITE_ADDRESS_LINES.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#6366F1]" aria-hidden>
                    📞
                  </span>
                  <a
                    href={`tel:${SITE_PHONE}`}
                    className="text-[#E5E7EB] hover:underline"
                  >
                    {SITE_PHONE}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#6366F1]" aria-hidden>
                    ✉️
                  </span>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="text-[#E5E7EB] hover:underline"
                  >
                    {SITE_EMAIL}
                  </a>
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-8 inline-flex w-full items-center justify-center rounded-xl bg-[#6366F1] px-4 py-3 text-sm font-medium text-white transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
              >
                Get in touch
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
