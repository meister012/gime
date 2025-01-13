import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WEB.DE - E-mail Addresse, Kostenlos, Freemail",
  description: "web.de",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#1c449b] ${inter.className}`}>{children}</body>
    </html>
  );
}
