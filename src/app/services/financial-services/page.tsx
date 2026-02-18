import Link from "next/link";

export default function FinancialServicesPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Financial Services
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Financial services can also be offered as part of Aspect Consultancy Services. We support assisted digital financial services through our network and partner offerings, making transactions seamless, quick, and easy for businesses and end users.
          </p>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Our solutions are designed to empower retailer partners and make financial services accessible. For more on our FinTech offering, see Power Pay.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/services/power-pay"
              className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
            >
              Power Pay
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-500 bg-slate-800/90 px-5 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-700 bg-slate-900/95 p-8 shadow-[0_18px_40px_rgba(15,23,42,0.5)]">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-200">Under Aspect</h2>
          <p className="mt-3 text-sm text-slate-200">
            Events & Branding, Chitrasanthe, Rapid Jobs, Power Pay, and Financial Services — all under one trusted name since 2004.
          </p>
        </div>
      </section>
    </div>
  );
}
