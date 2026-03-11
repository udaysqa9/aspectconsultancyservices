"use client";

import { useEffect, useState } from "react";

const stats = [
  { value: 18, suffix: "+", label: "Years Experience" },
  { value: 8000, suffix: "+", label: "Events Delivered" },
  { value: 50, suffix: "+", label: "Clients Served" },
  { value: 24, suffix: "/7", label: "Technical Support" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 40;
    const step = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function WhyChooseUsSection() {
  return (
    <section className="border-b border-white/5 bg-[#0F172A] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 gradient-bg">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Why Choose Us
        </h2>
        <p className="mt-2 max-w-2xl text-[#9CA3AF] text-base">
          Trusted by established brands for timely delivery and excellence.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glass-card flex flex-col items-center rounded-2xl p-6 text-center card-hover"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6366F1]/20 text-[#6366F1]">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="mt-4 font-heading text-3xl font-semibold text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-1 text-sm text-[#9CA3AF]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
