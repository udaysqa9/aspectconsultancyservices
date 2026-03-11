"use client";

import { useEffect, useState } from "react";
import { courses } from "@/lib/courses-data";
import { LaunchRealAppSection } from "@/components/launch-real-app-section";
import { CourseDetailContent } from "@/components/course-detail-content";

export default function CoursesPage() {
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    const hash = typeof window !== "undefined" ? window.location.hash.slice(1) : "";
    if (hash) {
      setOpenId(hash);
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#0F172A]">
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
            backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <h1 className="font-heading text-4xl font-semibold tracking-tight text-[#E5E7EB] sm:text-[48px]">
            Our Courses
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            Professional IT training and career development. Choose a course below to see the full
            curriculum, learning journey, and career outcomes.
          </p>
        </div>
      </section>

      <LaunchRealAppSection />

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="space-y-4">
          {courses.map((course) => {
            const isOpen = openId === course.id;
            return (
              <div
                key={course.id}
                id={course.id}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-lg backdrop-blur-[10px] transition-all duration-300 hover:border-white/15 hover:shadow-xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : course.id)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/5 sm:px-8 sm:py-6"
                >
                  <div className="min-w-0 flex-1">
                    <h2 className="font-heading text-lg font-semibold text-[#E5E7EB] sm:text-xl">
                      {course.title}
                    </h2>
                    <p className="mt-1 text-sm text-[#9CA3AF]">
                      Duration: {course.duration}
                      {course.projects?.length ? ` · ${course.projects.length} projects` : ""}
                    </p>
                  </div>
                  <span
                    className={`shrink-0 text-[#6366F1] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                {isOpen && <CourseDetailContent course={course} />}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
