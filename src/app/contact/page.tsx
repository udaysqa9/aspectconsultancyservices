import Image from "next/image";
import { SITE_ADDRESS_LINES, SITE_EMAIL, SITE_PHONE } from "@/lib/site-config";

const chitrasantheLinks = [
  { label: "YouTube", href: "https://www.youtube.com/watch?v=oLGq1VtO-Cs&t=830s", icon: "▶️" },
  { label: "Instagram", href: "https://www.instagram.com/chitrasanthe", icon: "📸" },
  { label: "Facebook", href: "https://www.facebook.com/Chitrasanthe", icon: "📘" },
];

export default function ContactPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
        <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Get in touch
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          Share a little about your requirement — events, branding, Chitrasanthe ad space, manpower, or Power Pay. We&apos;ll reply with the right next steps.
        </p>
      </section>

      <div className="grid gap-8 lg:grid-cols-[1fr,320px]">
        <form className="space-y-4 rounded-2xl border border-slate-700 bg-slate-900/95 p-6 text-sm text-slate-100 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
              />
            </div>
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
              />
            </div>
          </div>
          <div className="space-y-1.5">
            <label htmlFor="company" className="text-xs font-medium text-slate-200">
              Company / Subject
            </label>
            <input
              id="company"
              type="text"
              placeholder="Company or enquiry type"
              className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
            />
          </div>
          <div className="space-y-1.5">
            <label htmlFor="message" className="text-xs font-medium text-slate-200">
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              placeholder="Share your requirement…"
              className="w-full rounded-lg border border-slate-600 bg-slate-900/50 px-3 py-2.5 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-[hsl(var(--color-primary))] focus:ring-2 focus:ring-[hsl(var(--color-primary))]/30"
            />
          </div>
          <button
            type="button"
            className="btn-primary inline-flex w-full items-center justify-center rounded-full px-4 py-2.5 text-sm font-medium"
          >
            Submit
          </button>
        </form>

        <aside className="space-y-6">
          <div className="rounded-2xl border border-slate-700 bg-slate-900/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.5)]">
            <h2 className="text-sm font-semibold tracking-tight text-slate-50">
              Contact
            </h2>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <p className="flex items-start gap-2">
                <span aria-hidden className="mt-0.5">📍</span>
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

          <div className="rounded-2xl border border-slate-700 bg-slate-900/95 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.5)]">
            <h2 className="text-sm font-semibold tracking-tight text-slate-50">
              Chitrasanthe — follow us
            </h2>
            <ul className="mt-3 flex flex-wrap gap-2">
              {chitrasantheLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-slate-500 bg-slate-800/90 px-3 py-2 text-xs font-medium text-slate-100 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
                  >
                    {link.icon} {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-slate-950/90 shadow-[0_18px_40px_rgba(15,23,42,0.7)]">
            <Image
              src="/training-consulting-1.png"
              alt="Aspect Consultancy"
              width={400}
              height={280}
              className="h-40 w-full object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-4">
              <p className="text-xs font-medium text-slate-200">
                We respond quickly and tailor our response to your needs.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
