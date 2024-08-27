import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import First from "./components/First";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js and Tailwind CSS Practice",
  description: "From 2 Books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="{inter.className} bg-neutral-50">
        <First />
        {children}
      </body>
    </html>
  );
}
