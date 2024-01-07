import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/app/components/Dock/Dock";
import React from "react";
import { Providers } from "@/lib/providers";
import { Metadata, Viewport } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "useOS",
  description:
    "UseOS is an innovative Next.js application that brings the operating system to your fingertips.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  userScalable: true,
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen w-full select-none antialiased`}
      >
        <Providers>
          {children}
          <Dock />
        </Providers>
      </body>
    </html>
  );
}
