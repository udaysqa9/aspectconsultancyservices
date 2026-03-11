"use client";

import Image from "next/image";

/** Number of partner logos in /public/partners/ (partner-01.png, partner-02.png, …) */
const PARTNER_COUNT = 60;

function PartnerLogo({ index }: { index: number }) {
  const num = String(index).padStart(2, "0");
  const src = `/partners/partner-${num}.png`;
  return (
    <div className="flex h-14 w-28 flex-shrink-0 items-center justify-center rounded-[16px] border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm transition-all duration-300 hover:border-[#6366F1]/30 hover:bg-white/10 hover:shadow-[0_0_24px_rgba(99,102,241,0.15)]">
      <span className="relative block h-10 w-20">
        <Image
          src={src}
          alt={`Partner ${index}`}
          fill
          className="object-contain object-center"
          sizes="112px"
        />
      </span>
    </div>
  );
}

export function PartnersSection() {
  const indices = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

  return (
    <section className="relative border-b border-white/5 bg-[#0F172A] py-8 sm:py-10">
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-heading text-2xl font-semibold uppercase tracking-wide text-[#E5E7EB] sm:text-[32px]">
          Our Partners
        </h2>
        <p className="mt-2 text-center text-sm text-[#9CA3AF]">
          Trusted by leading brands across industries
        </p>
      </div>
      <div className="relative mt-6 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden">
          <div className="marquee-wrap flex">
            <div className="marquee-track flex w-max flex-nowrap gap-6 py-4">
              {indices.map((i) => (
                <PartnerLogo key={`a-${i}`} index={i} />
              ))}
            </div>
            <div className="marquee-track flex w-max flex-nowrap gap-6 py-4" aria-hidden>
              {indices.map((i) => (
                <PartnerLogo key={`b-${i}`} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
