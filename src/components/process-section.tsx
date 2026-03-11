const steps = [
  { name: "Discovery", desc: "Understand your goals and constraints" },
  { name: "Strategy", desc: "Define roadmap and approach" },
  { name: "Development", desc: "Execute with agility" },
  { name: "Deployment", desc: "Launch and handover" },
  { name: "Support", desc: "Ongoing partnership" },
];

export function ProcessSection() {
  return (
    <section className="border-b border-white/5 bg-[#0F172A] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Our Process
        </h2>
        <p className="mt-2 max-w-2xl text-[#9CA3AF] text-base">
          A clear, collaborative consulting process from discovery to support.
        </p>
        <div className="mt-10">
          <div className="flex flex-col gap-4 sm:flex-row sm:gap-2 sm:items-stretch sm:justify-between">
            {steps.map((step, i) => (
              <div
                key={step.name}
                className="glass-card card-hover flex flex-1 flex-col rounded-2xl p-5 sm:mx-1 sm:first:ml-0 sm:last:mr-0"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#6366F1]/20 text-sm font-semibold text-[#6366F1]">
                  {i + 1}
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>
                  {step.name}
                </h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{step.desc}</p>
                {i < steps.length - 1 && (
                  <div className="mt-4 hidden flex-1 items-center sm:flex">
                    <div className="h-px flex-1 bg-gradient-to-r from-[#6366F1]/40 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
