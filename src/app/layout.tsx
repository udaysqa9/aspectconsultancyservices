import type { Metadata } from "next";
import { Space_Grotesk, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-logo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
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
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${plusJakartaSans.variable}`}>
      <body className="antialiased bg-[#0F172A] text-[#E5E7EB] min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
