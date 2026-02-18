import Link from "next/link";

export default function PowerPayPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Power Pay (Ppay) — B2B / B2C FinTech
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            Ppay operates on a B2B and B2C model. We partner with neighborhood retail stores who can offer Assisted Digital Financial Services.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Innovative solutions to make financial transactions seamless, quick, and easy; we strive to empower our retailer partners.</li>
            <li>• <strong className="text-slate-200">Mission:</strong> Build India&apos;s largest hyperlocal FinTech network.</li>
            <li>• <strong className="text-slate-200">Vision:</strong> Make financial services available to everyone on a click.</li>
            <li>• User-friendly app and web application with an easy-to-use interactive interface.</li>
            <li>• Instant registration, minimum documentation.</li>
            <li>• Earning capacity up to ₹45,000+ per month.</li>
            <li>• Anyone can start their own business with minimal investment.</li>
          </ul>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Enquire
          </Link>
        </div>
        <div className="rounded-3xl border border-white/15 bg-gradient-to-br from-slate-800 to-slate-900 p-8 text-slate-200">
          <h2 className="text-sm font-semibold uppercase tracking-wider text-slate-300">Highlights</h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>✓ B2B & B2C model</li>
            <li>✓ Assisted digital financial services</li>
            <li>✓ Hyperlocal FinTech network</li>
            <li>✓ Instant registration</li>
            <li>✓ Earning up to ₹45,000+ / month</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
