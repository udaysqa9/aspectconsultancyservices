import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";

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
    "Aspect Consultancy Services — digital strategy, product consulting, and technology advisory.",
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
          <main className="flex-1">
            <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
              {children}
            </div>
          </main>
          <footer className="border-t border-white/10 bg-black/40 py-4 text-xs text-zinc-400 backdrop-blur sm:text-sm">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 sm:flex-row sm:px-6 lg:px-8">
              <span>© {new Date().getFullYear()} Aspect Consultancy Services.</span>
              <span className="text-[11px] sm:text-xs">
                Crafted with care for modern web and mobile experiences.
              </span>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}

