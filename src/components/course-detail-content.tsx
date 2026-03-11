"use client";

import Link from "next/link";
import type { Course } from "@/lib/courses-data";

const DEFAULT_HIGHLIGHTS = [
  { title: "Industry expert trainers", icon: "👨‍🏫" },
  { title: "Hands-on coding sessions", icon: "💻" },
  { title: "Real project deployment", icon: "🚀" },
  { title: "Portfolio-ready applications", icon: "📁" },
  { title: "Placement assistance", icon: "📋" },
  { title: "Live project hosting", icon: "🌐" },
];

const DEFAULT_CAREER_PATHS = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "Software Engineer",
  "Freelancer / Startup Founder",
];

const TECH_ICONS: Record<string, string> = {
  React: "⚛️",
  "Node.js": "🟢",
  MongoDB: "🍃",
  Git: "📦",
  Docker: "🐳",
  AWS: "☁️",
  Python: "🐍",
  TensorFlow: "🧠",
  Flutter: "💙",
  Figma: "🎨",
};

function getStats(course: Course) {
  if (course.stats?.length) return course.stats;
  const projectCount = course.projects?.length ?? 0;
  return [
    { label: "Duration", value: course.duration },
    { label: "Modules", value: `${course.modules.length} Modules` },
    ...(projectCount ? [{ label: "Projects", value: `${projectCount} Real Projects` }] : []),
    { label: "Outcome", value: "Certificate" },
  ];
}

function getTimeline(course: Course) {
  if (course.timeline?.length) return course.timeline;
  return course.modules.map((mod, i) => ({
    label: `Step ${i + 1}`,
    title: mod.title.replace(/^Module \d+:\s*/i, "") || mod.title,
  }));
}

export function CourseDetailContent({ course }: { course: Course }) {
  const stats = getStats(course);
  const highlights = course.highlights?.length ? course.highlights : DEFAULT_HIGHLIGHTS;
  const timeline = getTimeline(course);
  const careerPaths = course.careerPaths?.length ? course.careerPaths : DEFAULT_CAREER_PATHS;
  const skills = course.skills ?? [];
  const techStack = course.techStack ?? [];
  const projects = course.projects ?? [];

  return (
    <div className="course-detail-entrance border-t border-white/10 px-6 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8">
      {/* 1. Course Overview Card */}
      <div className="rounded-2xl border border-[#6366F1]/20 bg-gradient-to-br from-[#6366F1]/10 to-[#22C55E]/05 p-6 shadow-lg sm:p-8">
        <h3 className="font-heading text-2xl font-semibold text-[#E5E7EB] break-words sm:text-3xl">
          {course.title}
        </h3>
        <p className="mt-2 text-[15px] text-[#9CA3AF]">
          {course.shortDescription ?? course.tagline ?? `Professional ${course.title} program.`}
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-xl bg-white/5 px-4 py-3 text-center">
              <p className="font-heading text-lg font-semibold text-[#6366F1]">{s.value}</p>
              <p className="mt-0.5 text-xs text-[#9CA3AF]">{s.label}</p>
            </div>
          ))}
        </div>
        <Link
          href="/contact"
          className="mt-6 flex min-h-[44px] w-full items-center justify-center rounded-xl bg-[#6366F1] px-6 py-3.5 text-center text-sm font-medium text-white shadow-[0_4px_20px_rgba(99,102,241,0.4)] transition-all hover:shadow-[0_0_32px_rgba(99,102,241,0.5)] touch-manipulation sm:w-auto"
        >
          Enroll Now — Start Your Developer Journey
        </Link>
      </div>

      {/* 2. Course Highlights */}
      <div className="mt-10">
        <h4 className="font-heading text-lg font-semibold text-[#E5E7EB]">Course Highlights</h4>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((h) => (
            <div
              key={h.title}
              className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#6366F1]/30 hover:bg-white/10"
            >
              <span className="text-2xl">{h.icon}</span>
              <span className="text-sm font-medium text-[#E5E7EB]">{h.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Unique Student Outcome */}
      <div className="mt-10 rounded-2xl border border-[#22C55E]/20 bg-[#22C55E]/10 p-6">
        <h4 className="font-heading text-lg font-semibold text-[#22C55E]">
          Unique Student Outcome
        </h4>
        <p className="mt-3 text-[15px] leading-relaxed text-[#9CA3AF]">
          Every student completes the course with a fully functional web application deployed on a
          live server, with their own domain and hosting setup. Students gain end-to-end experience
          building, deploying, and launching real applications.
        </p>
      </div>

      {/* 4. Skills You Will Learn */}
      {skills.length > 0 && (
        <div className="mt-10">
          <h4 className="font-heading text-lg font-semibold text-[#E5E7EB]">
            Skills You Will Learn
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full bg-[#6366F1]/15 px-4 py-1.5 text-sm font-medium text-[#6366F1]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* 5. Tech Stack Icons */}
      {techStack.length > 0 && (
        <div className="mt-10">
          <h4 className="font-heading text-lg font-semibold text-[#E5E7EB]">Tech Stack</h4>
          <div className="mt-4 flex flex-wrap gap-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-4 transition-all hover:border-[#6366F1]/30"
              >
                <span className="text-2xl">{TECH_ICONS[tech] ?? "🔧"}</span>
                <span className="text-xs font-medium text-[#9CA3AF]">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 6. Projects You Will Build */}
      {projects.length > 0 && (
        <div className="mt-10">
          <h4 className="font-heading text-lg font-semibold text-[#E5E7EB]">
            Projects You Will Build
          </h4>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((proj) => (
              <div
                key={proj}
                className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-[#22C55E]/30 hover:bg-white/10"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#22C55E]/20 text-xl">
                  📂
                </span>
                <span className="font-medium text-[#E5E7EB]">{proj}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 7. Learning Journey Timeline */}
      <div className="mt-10">
        <h4 className="font-heading text-lg font-semibold text-[#E5E7EB]">
          Student Learning Journey
        </h4>
        <div className="mt-4 flex flex-col gap-0 sm:flex-row sm:flex-wrap sm:gap-4">
          {timeline.map((step, i) => (
            <div
              key={i}
              className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 sm:flex-1 sm:min-w-[140px]"
            >
              <span className="text-xs font-semibold text-[#6366F1]">{step.label}</span>
              <span className="text-sm font-medium text-[#E5E7EB]">{step.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 8. Career Opportunities */}
      <div className="mt-10">
        <h4 className="font-heading text-lg font-semibold text-[#E5E7EB]">
          Career Opportunities
        </h4>
        <p className="mt-2 text-sm text-[#9CA3AF]">
          Career paths after course completion:
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {careerPaths.map((path) => (
            <span
              key={path}
              className="rounded-full border border-[#6366F1]/30 bg-[#6366F1]/10 px-4 py-2 text-sm font-medium text-[#E5E7EB]"
            >
              {path}
            </span>
          ))}
        </div>
      </div>

      {/* 9. Curriculum Accordion */}
      <div className="mt-10">
        <h4 className="font-heading text-lg font-semibold text-[#E5E7EB]">
          Detailed Curriculum
        </h4>
        <div className="mt-4 space-y-3">
          {course.modules.map((mod, i) => (
            <details
              key={mod.title}
              className="group rounded-xl border border-white/10 bg-white/5 overflow-hidden"
            >
              <summary className="flex cursor-pointer list-none items-center gap-4 px-5 py-4 transition-colors hover:bg-white/10">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#6366F1]/20 text-sm font-semibold text-[#6366F1]">
                  {i + 1}
                </span>
                <span className="font-heading font-semibold text-[#E5E7EB]">{mod.title}</span>
                <svg
                  className="ml-auto h-5 w-5 shrink-0 text-[#9CA3AF] transition-transform group-open:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-white/10 px-5 pb-5 pt-2">
                <ul className="space-y-2 pl-2">
                  {mod.topics.map((topic) => (
                    <li
                      key={topic}
                      className="flex items-center gap-2 text-sm text-[#E5E7EB] before:h-1.5 before:w-1.5 before:rounded-full before:bg-[#6366F1]"
                    >
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-10 text-center">
        <Link
          href="/contact"
          className="inline-flex min-h-[44px] items-center justify-center rounded-xl bg-[#6366F1] px-8 py-3.5 text-sm font-medium text-white transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)] touch-manipulation"
        >
          Enquire about this course
        </Link>
      </div>
    </div>
  );
}
