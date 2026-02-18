import Image from "next/image";
import Link from "next/link";

export default function RapidJobsPage() {
  return (
    <div className="space-y-10">
      <section className="grid gap-8 md:grid-cols-[1.2fr,1fr] md:items-center">
        <div className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
          <div className="relative h-12 w-32">
            <Image src="/partners/rapid-jobs.png" alt="Rapid Jobs" fill className="object-contain object-left" />
          </div>
          <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
            Rapid Jobs — Manpower Management / Outsourcing
          </h1>
          <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
            A manpower management startup with recognition from the Skill India Movement under the Honorable Prime Minister Narendra Modi Ji, to develop rural youth and reduce unemployment in India.
          </p>
          <ul className="space-y-2 text-sm text-slate-300">
            <li>• Millions of job openings across various MNCs — one stop solution for all manpower needs.</li>
            <li>• End-to-end manpower solutions: IT / Non IT, White Collar / Blue Collar, Housekeeping / Security / Delivery Agents.</li>
            <li>• Value-added services: Payroll Management, Registrations & Licenses, Business Outsourcing, Contract Staffing, Permanent Staffing.</li>
            <li>• Skilled HR team to source and deliver the right individual to the right placement.</li>
          </ul>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
          >
            Get in touch
          </Link>
        </div>
        <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950/90 shadow-[0_22px_45px_rgba(15,23,42,0.75)]">
          <Image
            src="/partners/hr-connect.png"
            alt="HR Connect"
            width={400}
            height={300}
            className="h-64 w-full object-contain object-center opacity-90 sm:h-72"
          />
        </div>
      </section>
    </div>
  );
}
