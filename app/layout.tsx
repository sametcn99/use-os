import { Inter } from "next/font/google";
import "./globals.css";
import Dock from "@/components/Dock/Dock";
import React from "react";
import { Providers } from "@/lib/providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} select-none overflow-hidden bg-cyan-900`}
      >
        <Providers>
          {children}
          <Dock />
        </Providers>
      </body>
    </html>
  );
}
