"use client";

import { SITE_ADDRESS_LINES, SITE_EMAIL, SITE_PHONE } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section id="contact" className="border-b border-white/5 bg-[#0F172A] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <h2
          className="font-heading text-3xl font-semibold text-[#E5E7EB] sm:text-[32px]"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Get in Touch
        </h2>
        <p className="mt-2 max-w-2xl text-[#9CA3AF] text-base">
          Share your requirement — events, branding, Chitrasanthe, manpower, or Power Pay.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <form
            className="glass-card rounded-2xl p-6 sm:p-8"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#E5E7EB]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#E5E7EB]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="mt-2 w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="company" className="block text-sm font-medium text-[#E5E7EB]">
                Company
              </label>
              <input
                id="company"
                type="text"
                placeholder="Company or subject"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30"
              />
            </div>
            <div className="mt-6">
              <label htmlFor="message" className="block text-sm font-medium text-[#E5E7EB]">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Share your requirement…"
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#111827] px-4 py-3 text-[#E5E7EB] placeholder:text-[#9CA3AF] focus:border-[#6366F1] focus:outline-none focus:ring-2 focus:ring-[#6366F1]/30"
              />
            </div>
            <button
              type="submit"
              className="btn-glow mt-6 flex min-h-[44px] w-full items-center justify-center rounded-xl py-3 text-sm font-medium touch-manipulation"
            >
              Submit
            </button>
          </form>

          <div className="space-y-8">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              <h3 className="font-heading text-xl font-semibold text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>
                Contact Details
              </h3>
              <div className="mt-6 space-y-4 text-[#9CA3AF]">
                <p className="flex items-start gap-3">
                  <span className="text-[#6366F1]">📍</span>
                  <span>
                    {SITE_ADDRESS_LINES.map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < SITE_ADDRESS_LINES.length - 1 && <br />}
                      </span>
                    ))}
                  </span>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#6366F1]">📞</span>
                  <a href={`tel:${SITE_PHONE}`} className="text-[#E5E7EB] hover:text-[#6366F1]">Mob: {SITE_PHONE}</a>
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-[#6366F1]">✉️</span>
                  <a href={`mailto:${SITE_EMAIL}`} className="text-[#E5E7EB] hover:text-[#6366F1]">{SITE_EMAIL}</a>
                </p>
              </div>
            </div>
            <div className="glass-card overflow-hidden rounded-2xl">
              <iframe
                title="Office location - Malleshwaram, Bangalore"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.026450392789!2d77.5647!3d13.0012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae163b5fc991b5%3A0x2f34a1e6a3d2b4c6!2sMalleshwaram%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1635000000000!5m2!1sen!2sin"
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
