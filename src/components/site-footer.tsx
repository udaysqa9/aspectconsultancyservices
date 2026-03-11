import Image from "next/image";
import Link from "next/link";
import { ESTABLISHED_YEAR, SITE_ADDRESS, SITE_EMAIL, SITE_PHONE, SITE_NAME } from "@/lib/site-config";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Courses", href: "/courses" },
  { label: "Careers", href: "/careers" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Events & Branding", href: "/services/events-branding" },
  { label: "Chitrasanthe", href: "/services/chitrasanthe" },
  { label: "Rapid Jobs", href: "/services/rapid-jobs" },
  { label: "Power Pay", href: "/services/power-pay" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-[#0F172A] px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link href="/" className="inline-flex items-center gap-0">
              <div className="relative h-14 w-24 shrink-0 sm:w-28">
                <Image
                  src="/aspect-logo.jpg"
                  alt=""
                  fill
                  className="object-contain object-left object-center"
                  sizes="112px"
                />
              </div>
              <span
                className="-ml-2 font-heading text-lg font-bold leading-tight text-[#E5E7EB] sm:text-xl"
                style={{ fontFamily: "var(--font-logo)" }}
              >
                {SITE_NAME}
              </span>
            </Link>
            <p className="mt-4 text-sm text-[#9CA3AF]">
              Transforming businesses with intelligent solutions. Established {ESTABLISHED_YEAR}.
            </p>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>
              Quick Links
            </h4>
            <ul className="mt-4 space-y-0">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex min-h-[44px] items-center text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors touch-manipulation">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>
              Services
            </h4>
            <ul className="mt-4 space-y-0">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex min-h-[44px] items-center text-sm text-[#9CA3AF] hover:text-[#E5E7EB] transition-colors touch-manipulation">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-wider text-[#E5E7EB]" style={{ fontFamily: "var(--font-heading)" }}>
              Contact
            </h4>
            <ul className="mt-4 space-y-0 text-sm text-[#9CA3AF]">
              <li className="min-h-[44px] flex items-center">{SITE_ADDRESS}</li>
              <li>
                <a href={`tel:${SITE_PHONE}`} className="flex min-h-[44px] items-center hover:text-[#E5E7EB] touch-manipulation">Mob: {SITE_PHONE}</a>
              </li>
              <li>
                <a href={`mailto:${SITE_EMAIL}`} className="flex min-h-[44px] items-center break-all hover:text-[#E5E7EB] touch-manipulation">{SITE_EMAIL}</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-white/5 pt-8 text-center text-sm text-[#9CA3AF]">
          © {new Date().getFullYear()} Aspect Consultancy Services. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
