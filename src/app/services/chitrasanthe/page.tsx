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
    <div className="space-y-12">
      <section className="space-y-4 rounded-3xl border border-slate-800 bg-slate-950/85 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
        <div className="flex items-center gap-3">
          <div className="relative h-14 w-32">
            <Image src="/partners/chitrasanthe.png" alt="Chitrasanthe" fill className="object-contain object-left" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">Cinema | Culture | Celebration</span>
        </div>
        <h1 className="heading-strong text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
          Chitrasanthe — Film Magazine & Podcast
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-300 sm:text-base sm:leading-7">
          Chitrasanthe is the Kannada Premium Cine Magazine. 10,000+ circulation across Karnataka (monthly). We feature inspiring achievers, business owners and entrepreneurs on our podcast — we&apos;d love to have you on the show and share your journey with our audience.
        </p>
        <ul className="space-y-2 text-sm text-slate-300">
          <li>• Unique editorial sections and attractive layout with extensive photographic work.</li>
          <li>• Print & paper quality among the best in the industry.</li>
          <li>• Awarded the Best Print Layout & Design for Karnataka by the Press Association, Bangalore.</li>
          <li>• Wide expertise in the Media & Film Fraternity; promoting films and providing the right platform, visibility and branding for a grand success.</li>
        </ul>
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="text-xs font-medium text-slate-400">📍 {SITE_ADDRESS}</span>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-500 bg-slate-800/90 px-3 py-1.5 text-xs font-medium text-slate-100 transition-colors hover:border-[hsl(var(--color-primary))] hover:text-white"
            >
              {link.icon} {link.label}
            </a>
          ))}
        </div>
      </section>

      {/* Magazine & Awards — professional image section */}
      <section className="space-y-6">
        <h2 className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl">
          Magazine & Awards
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/95 shadow-[0_18px_40px_rgba(15,23,42,0.6)]">
            <Image
              src="/chitrasanthe/magazine-covers.png"
              alt="Chitrasanthe magazine covers — The Panorama of Kannada Cinema"
              width={800}
              height={600}
              className="h-64 w-full object-cover object-top sm:h-72"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-3">
              <p className="text-xs font-medium text-slate-200">Magazine covers</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/95 shadow-[0_18px_40px_rgba(15,23,42,0.6)]">
            <Image
              src="/chitrasanthe/puraskaar-award.png"
              alt="Chitrasanthe Puraskaar award"
              width={800}
              height={600}
              className="h-64 w-full object-cover object-center sm:h-72"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-3">
              <p className="text-xs font-medium text-slate-200">Chitrasanthe Puraskaar</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl border border-slate-700 bg-slate-900/95 shadow-[0_18px_40px_rgba(15,23,42,0.6)] sm:col-span-2 lg:col-span-1">
            <Image
              src="/chitrasanthe/magazine-collage.png"
              alt="Chitrasanthe magazine collection"
              width={800}
              height={600}
              className="h-64 w-full object-cover object-center sm:h-72"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/90 to-transparent px-4 py-3">
              <p className="text-xs font-medium text-slate-200">Kannada cinema panorama</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tariff: Commercial AD Space (Print) */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90">
        <div className="border-b border-slate-600 bg-slate-800/90 px-4 py-3 sm:px-6">
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            Tariff rates — Commercial AD space (Print)
          </h2>
          <p className="mt-1 text-xs text-slate-300">Rates in INR. Quarterly, Half Yearly, Yearly.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-600 bg-slate-800/80">
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Sl No</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">AD Type</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Quarterly</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Half Yearly</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Yearly</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Full Year</th>
              </tr>
            </thead>
            <tbody className="text-slate-200">
              {printTariff.map((row) => (
                <tr key={row.sl} className="border-b border-slate-700/80 hover:bg-slate-800/60">
                  <td className="px-3 py-2.5 sm:px-4">{row.sl}</td>
                  <td className="px-3 py-2.5 font-medium text-slate-100 sm:px-4">{row.type}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.q}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.h}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.y}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.full}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Tariff: Online AD Space */}
      <section className="overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/90">
        <div className="border-b border-slate-600 bg-slate-800/90 px-4 py-3 sm:px-6">
          <h2 className="text-base font-semibold text-slate-50 sm:text-lg">
            Online AD space tariff — Chitrasanthe
          </h2>
          <p className="mt-1 text-xs text-slate-300">Dimensions in px. Monthly, Quarterly, Yearly (INR).</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[560px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-600 bg-slate-800/80">
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Sl no</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Dimensions</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Position</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Monthly</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Quarterly</th>
                <th className="px-3 py-2.5 font-semibold text-slate-100 sm:px-4">Yearly</th>
              </tr>
            </thead>
            <tbody className="text-slate-200">
              {onlineTariff.map((row) => (
                <tr key={row.sl} className="border-b border-slate-700/80 hover:bg-slate-800/60">
                  <td className="px-3 py-2.5 sm:px-4">{row.sl}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.dim}</td>
                  <td className="px-3 py-2.5 font-medium text-slate-100 sm:px-4">{row.pos}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.m}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.q}</td>
                  <td className="px-3 py-2.5 sm:px-4">{row.y}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <div className="flex justify-center">
        <Link
          href="/contact"
          className="btn-primary inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium"
        >
          Enquire for ad space
        </Link>
      </div>
    </div>
  );
}
