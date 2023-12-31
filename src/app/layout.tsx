import type { Metadata } from "next";
import { Sofia_Sans, Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryProvider } from "@/context/QueryProvider";
import AuthProvider from "@/context/AuthProvider";
import { NextProvider } from "@/context/NexUiProvider";
import Script from "next/script";

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
  icons: {
    icon: "https://res.cloudinary.com/dlr7micek/image/upload/v1701486538/assets/favicon_mveqhp.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sofia.variable} ${inter.variable}`}>
      <body>
        <NextProvider>
          <QueryProvider>
            <AuthProvider>{children}</AuthProvider>
          </QueryProvider>
        </NextProvider>
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"
          integrity="sha512-zoJXRvW2gC8Z0Xo3lBbao5+AS3g6YWr5ztKqaicua11xHo+AvE1b0lT9ODgrHTmNUxeCw0Ry4BGRYZfXu70weg=="
        />
      </body>
    </html>
  );
}
