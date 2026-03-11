const testimonials = [
  {
    name: "Rajesh Kumar",
    designation: "CEO, Media House",
    review: "Aspect delivered our flagship event with precision. Their team understood our brand and executed flawlessly.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    designation: "HR Director, Tech Corp",
    review: "Rapid Jobs helped us scale our workforce quickly. Professional, responsive, and quality talent.",
    rating: 5,
  },
  {
    name: "Anil Reddy",
    designation: "Founder, Retail Chain",
    review: "Power Pay integration was seamless. Our retail partners love the simplicity and our customers benefit every day.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="border-b border-white/5 bg-[#0F172A] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          What Our Clients Say
        </h2>
        <p className="mt-2 max-w-2xl text-[#9CA3AF] text-base">
          Trusted by brands across events, media, manpower, and fintech.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="card-hover glass-card flex flex-col rounded-2xl p-6"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-5 w-5 text-[#22C55E]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="mt-4 flex-1 text-[#E5E7EB] text-sm leading-relaxed">
                &ldquo;{t.review}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#6366F1]/40 bg-[#111827] text-lg font-semibold text-[#6366F1]">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[#E5E7EB]">{t.name}</p>
                  <p className="text-sm text-[#9CA3AF]">{t.designation}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
