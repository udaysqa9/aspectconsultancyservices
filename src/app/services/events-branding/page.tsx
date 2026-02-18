import Link from "next/link";

export default function EventsBrandingPage() {
  return (
    <div className="space-y-10">
      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
        <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Events & Entertainments / Branding
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          Aspect Consultancy Services has handled more than 8000+ Events / Branding / Marketing for known brands with timely delivery and an excellent track record of satisfied clientele.
        </p>
        <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          From large-scale events and award ceremonies to corporate branding and film promotions, we bring industry expertise and execution excellence.
        </p>
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
        >
          Enquire now
        </Link>
      </section>
    </div>
  );
}
