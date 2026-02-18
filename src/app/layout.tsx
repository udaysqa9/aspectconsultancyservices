import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { ESTABLISHED_YEAR, SITE_ADDRESS, SITE_EMAIL, SITE_PHONE } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aspect Consultancy Services",
  description:
    "Aspect Consultancy Services — Events & Branding, Chitrasanthe Magazine & Podcast, Rapid Jobs (Manpower), Power Pay (FinTech). Malleshwaram, Bangalore-560003. Established 2004.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-foreground`}
      >
        <div className="app-shell flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1 text-slate-100">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <footer className="border-t border-slate-700 bg-slate-950/95 py-6 text-xs text-slate-300 backdrop-blur-md sm:text-sm">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <span className="text-slate-200">© {new Date().getFullYear()} Aspect Consultancy Services.</span>
                <span className="text-center text-slate-300 sm:text-right">
                  Events & Branding · Chitrasanthe · Rapid Jobs · Power Pay
                </span>
              </div>
              <p className="mt-2 text-center text-[11px] text-slate-400 sm:text-left">
                {SITE_ADDRESS} · Mob: {SITE_PHONE} · {SITE_EMAIL} · Established {ESTABLISHED_YEAR}
              </p>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

