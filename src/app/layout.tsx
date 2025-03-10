import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/react";
import { Roboto_Mono } from "next/font/google";

import "./globals.css";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  description: "Frontend Developer specializing in React and Next.js",
  title: "Nathan Drake",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html className="dark" lang="en">
    <Analytics />
    <body className={`${robotoMono.variable} antialiased`}>{children}</body>
  </html>
);

export default RootLayout;
