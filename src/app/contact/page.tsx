"use client";

import { SITE_ADDRESS_LINES, SITE_EMAIL, SITE_PHONE } from "@/lib/site-config";

const chitrasantheLinks = [
  {
    label: "YouTube",
    href: "https://www.youtube.com/watch?v=oLGq1VtO-Cs&t=830s",
    icon: "▶️",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/chitrasanthe",
    icon: "📸",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Chitrasanthe",
    icon: "📘",
  },
];

export default function ContactPage() {
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
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-[#E5E7EB] sm:text-[48px] lg:text-[56px]">
            Get in touch
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            Share your requirement — events, branding, Chitrasanthe ad space,
            manpower, or Power Pay. We&apos;ll reply with the right next steps.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr,320px] lg:gap-12">
          <form
            className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-5 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-[#E5E7EB]"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#E5E7EB]"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
                />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <label
                htmlFor="company"
                className="block text-sm font-medium text-[#E5E7EB]"
              >
                Company / Subject
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company or enquiry type"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
              />
            </div>
            <div className="mt-6 space-y-2">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-[#E5E7EB]"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Share your requirement…"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none transition-colors focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
              />
            </div>
            <button
              type="submit"
              className="mt-8 flex min-h-[44px] w-full items-center justify-center rounded-xl bg-[#6366F1] px-4 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] touch-manipulation"
            >
              Submit
            </button>
          </form>

          <aside className="space-y-6">
            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px]">
              <h2 className="font-heading text-xl font-semibold text-[#E5E7EB]">
                Contact
              </h2>
              <div className="mt-4 space-y-3 text-[15px] text-[#9CA3AF]">
                <p className="flex items-start gap-3">
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
                <p className="flex items-center gap-3">
                  <span aria-hidden>📞</span>
                  <a
                    href={`tel:${SITE_PHONE}`}
                    className="text-[#E5E7EB] hover:underline"
                  >
                    {SITE_PHONE}
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <span aria-hidden>✉️</span>
                  <a
                    href={`mailto:${SITE_EMAIL}`}
                    className="text-[#E5E7EB] hover:underline"
                  >
                    {SITE_EMAIL}
                  </a>
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 backdrop-blur-[10px]">
              <h2 className="font-heading text-lg font-semibold text-[#E5E7EB]">
                Chitrasanthe — follow us
              </h2>
              <ul className="mt-4 flex flex-wrap gap-2">
                {chitrasantheLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs font-medium text-[#E5E7EB] transition-colors hover:border-[#6366F1]/50 hover:bg-[#6366F1]/10"
                    >
                      {link.icon} {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
