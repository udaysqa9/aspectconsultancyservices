import Image from "next/image";
import Link from "next/link";
import { SITE_ADDRESS } from "@/lib/site-config";

const printTariff = [
  { sl: 1, type: "FRONT COVER STORY", q: "100000", h: "225000", y: "600000", full: "900000" },
  { sl: 2, type: "BACK COVER STORY", q: "50000", h: "125000", y: "300000", full: "600000" },
  { sl: 3, type: "FRONT INSIDE COVER", q: "30000", h: "100000", y: "180000", full: "360000" },
  { sl: 4, type: "BACK INSIDE COVER", q: "25000", h: "75000", y: "150000", full: "300000" },
  { sl: 5, type: "DOUBLE PAGE", q: "20000", h: "60000", y: "120000", full: "240000" },
  { sl: 6, type: "SINGLE PAGE AD", q: "15000", h: "45000", y: "90000", full: "180000" },
  { sl: 7, type: "HALF PAGE AD", q: "10000", h: "30000", y: "60000", full: "120000" },
  { sl: 8, type: "QUARTER PAGE AD", q: "5000", h: "15000", y: "30000", full: "60000" },
  { sl: 9, type: "STRIP ADD", q: "5000", h: "15000", y: "30000", full: "60000" },
  { sl: 10, type: "Special Booklet - 16 pages", q: "150000", h: "400000", y: "900000", full: "1200000" },
];

const onlineTariff = [
  { sl: 1, dim: "250 x 250", pos: "Square", m: "15000", q: "40000", y: "150000" },
  { sl: 2, dim: "200 x 200", pos: "Small Square", m: "10000", q: "25000", y: "100000" },
  { sl: 3, dim: "468 x 60", pos: "Banner", m: "8000", q: "20000", y: "50000" },
  { sl: 4, dim: "728 x 90", pos: "Leaderboard", m: "25000", q: "70000", y: "250000" },
  { sl: 5, dim: "300 x 250", pos: "Inline rectangle", m: "12000", q: "30000", y: "120000" },
  { sl: 6, dim: "336 x 280", pos: "Large Rectangle", m: "15000", q: "40000", y: "150000" },
  { sl: 7, dim: "120 x 600", pos: "Skyscraper", m: "15000", q: "40000", y: "150000" },
  { sl: 8, dim: "160 x 600", pos: "Wide Skyscraper", m: "20000", q: "50000", y: "220000" },
  { sl: 9, dim: "300 x 600", pos: "Half Page Ad", m: "30000", q: "75000", y: "300000" },
  { sl: 10, dim: "970 x 90", pos: "Large Leaderboard", m: "—", q: "—", y: "—" },
];

const socialLinks = [
  { label: "YouTube", href: "https://www.youtube.com/watch?v=oLGq1VtO-Cs&t=830s", icon: "▶️" },
  { label: "Instagram", href: "https://www.instagram.com/chitrasanthe", icon: "📸" },
  { label: "Facebook", href: "https://www.facebook.com/Chitrasanthe", icon: "📘" },
];

export default function ChitrasanthePage() {
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
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="relative h-16 w-36 shrink-0">
                <Image
                  src="/partners/chitrasanthe.png"
                  alt="Chitrasanthe"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <span className="text-xs font-medium uppercase tracking-widest text-[#6366F1]">
                Cinema | Culture | Celebration
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-[#E5E7EB] transition-colors hover:border-[#6366F1]/50 hover:bg-[#6366F1]/10 touch-manipulation"
                >
                  {link.icon} {link.label}
                </a>
              ))}
            </div>
          </div>
          <h1 className="mt-10 font-heading text-4xl font-semibold tracking-tight text-[#E5E7EB] sm:text-[48px] lg:text-[56px]">
            Chitrasanthe — Film Magazine & Podcast
          </h1>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            Kannada Premium Cine Magazine. 10,000+ circulation across Karnataka (monthly). We
            feature inspiring achievers, business owners and entrepreneurs on our podcast — we&apos;d
            love to have you on the show and share your journey with our audience.
          </p>
          <ul className="mt-6 space-y-2 text-[15px] leading-relaxed text-[#9CA3AF] sm:text-base">
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
              Unique editorial sections and attractive layout with extensive photographic work.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
              Print & paper quality among the best in the industry.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
              Awarded Best Print Layout & Design for Karnataka by the Press Association, Bangalore.
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#6366F1]" />
              Wide expertise in Media & Film Fraternity; promoting films and providing the right
              platform, visibility and branding for grand success.
            </li>
          </ul>
          <p className="mt-4 text-sm text-[#9CA3AF]">📍 {SITE_ADDRESS}</p>
        </div>
      </section>

      {/* Magazine & Awards */}
      <section className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-2xl font-semibold text-[#E5E7EB] sm:text-[32px]">
            Magazine & Awards
          </h2>
          <p className="mt-2 text-[15px] text-[#9CA3AF]">
            The panorama of Kannada cinema — print excellence and recognition.
          </p>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <Image
                src="/chitrasanthe/magazine-covers.png"
                alt="Chitrasanthe magazine covers — The Panorama of Kannada Cinema"
                width={800}
                height={600}
                className="h-64 w-full object-cover object-top sm:h-72"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/95 to-transparent px-5 py-4">
                <p className="text-sm font-medium text-[#E5E7EB]">Magazine covers</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)]">
              <Image
                src="/chitrasanthe/puraskaar-award.png"
                alt="Chitrasanthe Puraskaar award"
                width={800}
                height={600}
                className="h-64 w-full object-cover object-center sm:h-72"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/95 to-transparent px-5 py-4">
                <p className="text-sm font-medium text-[#E5E7EB]">Chitrasanthe Puraskaar</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] shadow-[0_4px_24px_rgba(0,0,0,0.25)] backdrop-blur-[10px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:col-span-2 lg:col-span-1">
              <Image
                src="/chitrasanthe/magazine-collage.png"
                alt="Chitrasanthe magazine collection"
                width={800}
                height={600}
                className="h-64 w-full object-cover object-center sm:h-72"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0F172A]/95 to-transparent px-5 py-4">
                <p className="text-sm font-medium text-[#E5E7EB]">Kannada cinema panorama</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff: Print */}
      <section className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 sm:px-8">
              <h2 className="font-heading text-xl font-semibold text-[#E5E7EB] sm:text-2xl">
                Tariff — Commercial AD space (Print)
              </h2>
              <p className="mt-1 text-sm text-[#9CA3AF]">Rates in INR. Quarterly, Half Yearly, Yearly.</p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Sl No</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">AD Type</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Quarterly</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Half Yearly</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Yearly</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Full Year</th>
                  </tr>
                </thead>
                <tbody className="text-[#9CA3AF]">
                  {printTariff.map((row) => (
                    <tr
                      key={row.sl}
                      className="border-b border-white/5 transition-colors hover:bg-white/5"
                    >
                      <td className="px-4 py-3 sm:px-6">{row.sl}</td>
                      <td className="px-4 py-3 font-medium text-[#E5E7EB] sm:px-6">{row.type}</td>
                      <td className="px-4 py-3 sm:px-6">{row.q}</td>
                      <td className="px-4 py-3 sm:px-6">{row.h}</td>
                      <td className="px-4 py-3 sm:px-6">{row.y}</td>
                      <td className="px-4 py-3 sm:px-6">{row.full}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff: Online */}
      <section className="border-b border-white/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[rgba(255,255,255,0.03)] backdrop-blur-[10px] shadow-[0_4px_24px_rgba(0,0,0,0.25)]">
            <div className="border-b border-white/10 bg-white/5 px-6 py-4 sm:px-8">
              <h2 className="font-heading text-xl font-semibold text-[#E5E7EB] sm:text-2xl">
                Online AD space tariff — Chitrasanthe
              </h2>
              <p className="mt-1 text-sm text-[#9CA3AF]">
                Dimensions in px. Monthly, Quarterly, Yearly (INR).
              </p>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left text-sm">
                <thead>
                  <tr className="border-b border-white/10 bg-white/5">
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Sl no</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Dimensions</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Position</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Monthly</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Quarterly</th>
                    <th className="px-4 py-3 font-semibold text-[#E5E7EB] sm:px-6">Yearly</th>
                  </tr>
                </thead>
                <tbody className="text-[#9CA3AF]">
                  {onlineTariff.map((row) => (
                    <tr
                      key={row.sl}
                      className="border-b border-white/5 transition-colors hover:bg-white/5"
                    >
                      <td className="px-4 py-3 sm:px-6">{row.sl}</td>
                      <td className="px-4 py-3 sm:px-6">{row.dim}</td>
                      <td className="px-4 py-3 font-medium text-[#E5E7EB] sm:px-6">{row.pos}</td>
                      <td className="px-4 py-3 sm:px-6">{row.m}</td>
                      <td className="px-4 py-3 sm:px-6">{row.q}</td>
                      <td className="px-4 py-3 sm:px-6">{row.y}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl text-center">
          <Link
            href="/contact"
            className="btn-glow inline-flex items-center justify-center rounded-xl px-8 py-3.5 text-sm font-medium"
          >
            Enquire for ad space
          </Link>
        </div>
      </section>
    </div>
  );
}
