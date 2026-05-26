import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rhett Wayne Manubag | Computer Engineer Portfolio",
  description: "Professional portfolio showcasing Embedded Systems, Generative AI integrations, IoT Solutions, and Full-Stack Web Applications.",
  keywords: [
    "Rhett Wayne Manubag",
    "Computer Engineer",
    "Embedded Systems",
    "AI Developer",
    "IoT Developer",
    "Next.js Portfolio",
    "Tailwind CSS Portfolio"
  ],
  authors: [{ name: "Rhett Wayne Manubag" }],
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased font-sans bg-[#0c0c0c] text-[#F8EEB4]">
        {children}
      </body>
    </html>
  );
}
