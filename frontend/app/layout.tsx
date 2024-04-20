import type { Metadata } from "next";
import { Inter, Lexend } from "next/font/google";
import "./globals.css";
import Providers from "@/lib/providers";
import { Toaster } from "react-hot-toast";

const lexend = Lexend({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Hifadhi",
  description: "Hifadhi Savings Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lexend.className}>
        <Providers>{children}
        <Toaster position='top-center' />

        </Providers>
      </body>
    </html>
  );
}
