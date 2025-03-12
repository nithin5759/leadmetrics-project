import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "./components";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
