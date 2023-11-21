import type { Metadata } from "next";
import { Sofia_Sans, Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { QueryProvider } from "@/context/QueryProvider";
import AuthProvider from "@/context/AuthProvider";
// import Script from "next/script";

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
      <body>
        <QueryProvider>
          <AuthProvider>{children}</AuthProvider>
        </QueryProvider>
      </body>
      {/* <Script
        src="https://cdnjs.cloudflare.com/ajax/libs/socket.io/4.7.2/socket.io.js"
        integrity="sha512-zoJXRvW2gC8Z0Xo3lBbao5+AS3g6YWr5ztKqaicua11xHo+AvE1b0lT9ODgrHTmNUxeCw0Ry4BGRYZfXu70weg=="
        // crossorigin="anonymous"
        // referrerpolicy="no-referrer"
      ></Script> */}
    </html>
  );
}
