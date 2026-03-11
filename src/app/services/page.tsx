"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const services = [
  {
    slug: "events-branding",
    name: "Events & Branding",
    description:
      "More than 8000+ Events / Branding / Marketing for known brands with timely delivery and an excellent track record of satisfied clientele.",
    image: "/sliders/slider1.png",
    tags: ["Events", "Branding", "Marketing"],
  },
  {
    slug: "chitrasanthe",
    name: "Chitrasanthe Media / Film Magazine",
    description:
      "Kannada Premium Cine Magazine. 10,000+ circulation. Film-based magazine, podcast featuring achievers. Best Print Layout & Design — Press Association, Karnataka.",
    image: "/partners/chitrasanthe.png",
    tags: ["Magazine", "Podcast", "Film", "Media"],
  },
  {
    slug: "rapid-jobs",
    name: "Rapid Jobs Manpower",
    description:
      "Manpower Management / Outsourcing. Skill India recognised. End-to-end solutions for IT / Non IT, contract & permanent staffing. Skilled HR team.",
    image: "/partners/hr-connect.png",
    tags: ["Manpower", "Outsourcing", "Staffing"],
  },
  {
    slug: "financial-services",
    name: "Financial Services",
    description:
      "Assisted digital financial services. B2B / B2C FinTech via Power Pay — partner with neighborhood retail for India's largest hyperlocal FinTech network vision.",
    image: "/training-consulting-2.png",
    tags: ["FinTech", "B2B", "B2C", "Retail"],
  },
];

const metrics = [
  { value: 8000, suffix: "+", label: "Events Managed" },
  { value: 10000, suffix: "+", label: "Magazine Circulation" },
  { value: 500, suffix: "+", label: "Placements Delivered" },
  { value: 20, suffix: "+", label: "Years Industry Experience" },
];

const processSteps = [
  { name: "Discovery", desc: "Understand your goals and requirements" },
  { name: "Strategy", desc: "Define roadmap and approach" },
  { name: "Execution", desc: "Deliver with agility and quality" },
  { name: "Delivery", desc: "Launch and handover" },
  { name: "Support", desc: "Ongoing partnership" },
];

function AnimatedCounter({
  target,
  suffix,
}: {
  target: number;
  suffix: string;
}) {
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

export default function ServicesPage() {
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
            Business Solutions That Power Modern Brands
          </h1>
          <p className="mt-6 max-w-2xl text-base text-[#9CA3AF] sm:text-[15px] lg:text-base leading-relaxed">
            We deliver events, media, manpower, and fintech solutions helping
            businesses scale faster and operate smarter.
          </p>
          <div className="mt-10">
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-xl bg-[#6366F1] px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:shadow-[0_0_32px_rgba(99,102,241,0.5)]"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section
        id="services"
        className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Our Services
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#9CA3AF] sm:text-base">
            Four wings under one roof — events, media, manpower, and fintech.
          </p>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] transition-all duration-250 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
              >
                <div className="relative h-[160px] w-full shrink-0 overflow-hidden">
                  <Image
                    src={service.image}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 rounded-t-[18px] bg-gradient-to-t from-[#111827]/80 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-semibold text-[20px] text-[#E5E7EB]">
                    {service.name}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-[15px] leading-relaxed text-[#9CA3AF]">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag-pill inline-flex items-center"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust metrics */}
      <section className="border-b border-white/5 bg-[rgba(99,102,241,0.04)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Trust & Scale
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#9CA3AF] sm:text-base">
            Numbers that reflect our commitment and reach.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((stat) => (
              <div
                key={stat.label}
                className="service-card flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6366F1]/20 text-[#6366F1]">
                  <svg
                    className="h-7 w-7"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
                    />
                  </svg>
                </div>
                <p className="mt-4 font-heading text-2xl font-semibold text-[#E5E7EB] sm:text-3xl">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-1 text-sm text-[#9CA3AF]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            How We Work
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#9CA3AF] sm:text-base">
            A clear, collaborative process from discovery to support.
          </p>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-4">
            {processSteps.map((step, i) => (
              <div
                key={step.name}
                className="service-card flex flex-1 flex-col transition-all duration-250"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6366F1]/20 text-sm font-semibold text-[#6366F1]">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[#E5E7EB]">
                  {step.name}
                </h3>
                <p className="mt-2 text-[15px] text-[#9CA3AF]">{step.desc}</p>
                {i < processSteps.length - 1 && (
                  <div className="mt-4 hidden flex-1 items-center sm:flex">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#6366F1]/40 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="mx-auto max-w-4xl overflow-hidden rounded-[18px] px-6 py-12 text-center sm:px-12 sm:py-20"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(34,197,94,0.1) 100%)",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Ready to Grow Your Business With Us?
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-[15px] text-[#9CA3AF] sm:text-base">
            Get in touch and we&apos;ll help you choose the right solution.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-xl bg-[#6366F1] px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:-translate-y-0.5"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
