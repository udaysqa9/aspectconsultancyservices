const steps = [
  {
    title: "Build",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    description: "Students develop a complete web or mobile application using modern technologies.",
  },
  {
    title: "Deploy",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    description: "Learn how to deploy applications on a live cloud server using modern hosting platforms.",
  },
  {
    title: "Own Your Domain",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
    description: "Students purchase and configure their own domain name and connect it to their project.",
  },
  {
    title: "Launch",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.58-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
    description: "Publish the application online so it can be accessed publicly and shared in portfolios.",
  },
];

export function LaunchRealAppSection() {
  return (
    <section className="relative border-b border-white/5 bg-[#0F172A] px-4 py-12 sm:px-6 sm:py-14 lg:px-8">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(34,197,94,0.04) 100%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage: `linear-gradient(rgba(99,102,241,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99,102,241,0.03) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-6xl">
        <h2 className="font-heading text-3xl font-semibold tracking-tight text-[#E5E7EB] sm:text-[32px] lg:text-4xl">
          Launch Your First Real Application
        </h2>
        <p className="mt-2 max-w-3xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
          At our institute students don&apos;t just learn coding. Every student builds a real project,
          hosts it on a live server, connects their own domain, and launches it publicly on the
          internet.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-5">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group flex flex-col rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#6366F1]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#6366F1]/20 text-[#6366F1] transition-colors group-hover:bg-[#6366F1]/30">
                {step.icon}
              </div>
              <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-wider text-[#6366F1]">
                Step {index + 1}
              </span>
              <h3 className="mt-2 font-heading text-xl font-semibold text-[#E5E7EB]">
                {step.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-[#9CA3AF]">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[16px] border border-[#22C55E]/30 bg-[rgba(34,197,94,0.08)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:shadow-[0_20px_40px_rgba(34,197,94,0.15)] sm:p-8">
          <div className="flex flex-col items-start gap-4 sm:flex-row">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#22C55E]/20 text-[#22C55E]">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div>
              <h3 className="font-heading text-xl font-semibold text-[#E5E7EB] sm:text-2xl">
                Graduate With a Live Product
              </h3>
              <p className="mt-3 text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
                By the end of the course every student leaves with a fully functional live application
                that can be showcased to employers or used as a startup project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
