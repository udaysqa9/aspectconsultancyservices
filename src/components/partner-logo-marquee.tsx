"use client";

import Image from "next/image";

const PARTNER_COUNT = 60;

export function PartnerLogoMarquee() {
  const logos = Array.from({ length: PARTNER_COUNT }, (_, i) => i + 1);

  return (
    <div className="w-full overflow-hidden">
      <div className="partner-marquee-track flex w-max flex-nowrap gap-6 py-2">
        {[...logos, ...logos].map((n, index) => (
          <div
            key={`partner-${index}`}
            className="flex h-12 w-20 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-600/80 bg-slate-800/70 px-1.5 py-1"
          >
            <div className="relative h-full w-full">
              <Image
                src={`/partners/partner-${String(n).padStart(2, "0")}.png`}
                alt={`Partner ${n}`}
                fill
                className="object-contain object-center"
                sizes="80px"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
