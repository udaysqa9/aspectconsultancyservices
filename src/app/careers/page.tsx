"use client";

import Link from "next/link";

const benefits = [
  {
    title: "Work on Real Projects",
    description: "Contribute to live applications and see your code in production from day one.",
    icon: "🚀",
  },
  {
    title: "Continuous Learning",
    description: "Access to courses, workshops, and certifications to keep your skills sharp.",
    icon: "📚",
  },
  {
    title: "Innovation Culture",
    description: "We encourage experimentation and support ideas that push technology forward.",
    icon: "💡",
  },
  {
    title: "Career Growth Opportunities",
    description: "Clear paths from trainee to tech lead with mentorship and promotions.",
    icon: "📈",
  },
  {
    title: "Collaborative Team",
    description: "Work with passionate developers and trainers in a supportive environment.",
    icon: "👥",
  },
  {
    title: "Modern Technology Stack",
    description: "Build with current tools and frameworks used by top product companies.",
    icon: "⚙️",
  },
];

const growthSteps = [
  "Trainee",
  "Intern",
  "Junior Developer",
  "Software Engineer",
  "Senior Engineer",
  "Tech Lead",
];

const positions = [
  {
    title: "Full Stack Developer",
    description: "Build and maintain web applications using modern frontend and backend technologies. Work on real client and internal products.",
  },
  {
    title: "Python Developer",
    description: "Develop backend services, automation tools, and data pipelines. Contribute to projects across AI, APIs, and scripting.",
  },
  {
    title: "UI/UX Designer",
    description: "Create intuitive interfaces and design systems. Collaborate with developers to deliver polished, user-centered products.",
  },
  {
    title: "Technical Trainer",
    description: "Teach courses in full stack, Python, DevOps, or cloud. Mentor students and help shape curriculum and projects.",
  },
  {
    title: "DevOps Engineer",
    description: "Own CI/CD, cloud infrastructure, and monitoring. Ensure reliable deployments and scalable systems.",
  },
];

const lifeCards = [
  { title: "Team collaboration", description: "Work together on projects and code reviews", icon: "🤝" },
  { title: "Tech workshops", description: "Regular sessions on new tools and best practices", icon: "🛠️" },
  { title: "Learning sessions", description: "Dedicated time for courses and certifications", icon: "📖" },
  { title: "Innovation days", description: "Time to experiment and build side projects", icon: "✨" },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-[#0F172A]">
      {/* 1. Hero */}
      <section className="relative overflow-hidden border-b border-white/5 px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.12) 0%, rgba(34,197,94,0.06) 100%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-[#E5E7EB] sm:text-[48px] lg:text-5xl">
            Build Your Career With Us
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-lg">
            Join a passionate team focused on technology, innovation, and shaping the next generation of
            developers. Work on real projects, learn from experienced mentors, and grow your career in a
            collaborative environment.
          </p>
          <Link
            href="#open-positions"
            className="btn-glow mt-10 inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-medium"
          >
            View Open Positions
          </Link>
        </div>
      </section>

      {/* 2. Why Work With Us */}
      <section id="why-work-with-us" className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Why Work With Us
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#9CA3AF] sm:text-base">
            We offer more than a job — a place to learn, build, and grow.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span className="text-3xl" aria-hidden>{b.icon}</span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-[#E5E7EB]">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Internship Program */}
      <section id="internship" className="border-b border-white/5 bg-[rgba(99,102,241,0.04)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Internship & Training Program
          </h2>
          <p className="mt-4 max-w-3xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            Our internship program gives students hands-on experience working on real-world software
            applications and learning modern development practices.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Work on live projects",
              "Mentorship from experienced developers",
              "Build portfolio applications",
              "Opportunity for full-time employment",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] text-[#E5E7EB]">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22C55E]/20 text-[#22C55E]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Career Growth Path */}
      <section id="career-growth" className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Career Growth Path
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#9CA3AF] sm:text-base">
            A clear progression from trainee to tech lead.
          </p>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            {growthSteps.map((step, i) => (
              <div key={step} className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <div className="rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] px-4 py-3 text-center shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all hover:border-[#6366F1]/30 hover:shadow-[0_12px_32px_rgba(0,0,0,0.3)] min-w-[120px] sm:min-w-[140px]">
                  <span className="text-xs font-medium text-[#6366F1]">Step {i + 1}</span>
                  <p className="mt-1 font-heading text-sm font-semibold text-[#E5E7EB] sm:text-base">{step}</p>
                </div>
                {i < growthSteps.length - 1 && (
                  <span className="hidden text-[#9CA3AF] sm:inline" aria-hidden>→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Open Positions */}
      <section id="open-positions" className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Open Positions
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#9CA3AF] sm:text-base">
            Join our team. Apply for a role that matches your skills and goals.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {positions.map((job) => (
              <div
                key={job.title}
                className="flex flex-col rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <h3 className="font-heading text-lg font-semibold text-[#E5E7EB]">{job.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#9CA3AF]">{job.description}</p>
                <Link
                  href="#apply"
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-[#6366F1] px-4 py-2.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
                >
                  Apply Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Life at Our Company */}
      <section id="life-at-company" className="border-b border-white/5 bg-[rgba(99,102,241,0.04)] px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Life at Our Company
          </h2>
          <p className="mt-3 max-w-2xl text-[15px] text-[#9CA3AF] sm:text-base">
            Culture, learning, and collaboration that make work meaningful.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {lifeCards.map((card) => (
              <div
                key={card.title}
                className="rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 text-center shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:border-[#6366F1]/30 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
              >
                <span className="text-3xl" aria-hidden>{card.icon}</span>
                <h3 className="mt-4 font-heading font-semibold text-[#E5E7EB]">{card.title}</h3>
                <p className="mt-2 text-sm text-[#9CA3AF]">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Apply Section */}
      <section id="apply" className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Apply Now
          </h2>
          <p className="mt-3 text-[15px] text-[#9CA3AF] sm:text-base">
            Send us your details and we’ll get back to you.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-10 rounded-[16px] border border-white/10 bg-[rgba(255,255,255,0.03)] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.2)] backdrop-blur-[10px] sm:p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label htmlFor="careers-name" className="block text-sm font-medium text-[#E5E7EB]">
                  Name
                </label>
                <input
                  id="careers-name"
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="careers-email" className="block text-sm font-medium text-[#E5E7EB]">
                  Email
                </label>
                <input
                  id="careers-email"
                  type="email"
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
                />
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <label htmlFor="careers-phone" className="block text-sm font-medium text-[#E5E7EB]">
                Phone
              </label>
              <input
                id="careers-phone"
                type="tel"
                placeholder="Your phone number"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
              />
            </div>
            <div className="mt-6 space-y-2">
              <label htmlFor="careers-position" className="block text-sm font-medium text-[#E5E7EB]">
                Position Applying For
              </label>
              <select
                id="careers-position"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
              >
                <option value="">Select a position</option>
                {positions.map((p) => (
                  <option key={p.title} value={p.title}>{p.title}</option>
                ))}
              </select>
            </div>
            <div className="mt-6 space-y-2">
              <label htmlFor="careers-resume" className="block text-sm font-medium text-[#E5E7EB]">
                Upload Resume
              </label>
              <input
                id="careers-resume"
                type="file"
                accept=".pdf,.doc,.docx"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] file:mr-4 file:rounded-lg file:border-0 file:bg-[#6366F1] file:px-4 file:py-2 file:text-sm file:text-white file:hover:bg-[#6366F1]/90"
              />
            </div>
            <div className="mt-6 space-y-2">
              <label htmlFor="careers-message" className="block text-sm font-medium text-[#E5E7EB]">
                Message
              </label>
              <textarea
                id="careers-message"
                rows={4}
                placeholder="Tell us about yourself and why you want to join..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-[15px] text-[#E5E7EB] placeholder:text-[#9CA3AF] outline-none focus:border-[#6366F1] focus:ring-2 focus:ring-[#6366F1]/30"
              />
            </div>
            <button
              type="submit"
              className="mt-8 flex min-h-[44px] w-full items-center justify-center rounded-xl bg-[#6366F1] px-4 py-3.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] touch-manipulation"
            >
              Submit Application
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
