import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer, Navbar } from "./components";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Marketing with AI For Lead Generation | Leadmetrics",
  description:
    "Need the best digital marketing? Leadmetrics offers paid ads, SEO, social media, content, and influencer marketing with AI to drive better traffic and leads.",
  keywords:
    "lead generation tools, artificial intelligence marketing, digital marketing ads, artificial intelligence and digital marketing, digital marketing and artificial intelligence, artificial intelligence for digital marketing marketing tools, get leads, lead generation companies, business lead generation companies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
