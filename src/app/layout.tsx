import type { Metadata } from "next";
import { Sofia_Sans, Inter } from "next/font/google";
import "./globals.css";

const sofia = Sofia_Sans({
  subsets: ["latin"],
  variable: "--font-sofia",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "MyDoctor",
  description: "Agende sua consulta",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sofia.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
