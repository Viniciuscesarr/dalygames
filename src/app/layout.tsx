import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DalyGames - Descubra jogos incríveis para se Divertir!",
  description: "Mais de 10 mil jogos separados e organizados",
  keywords: ['games', 'steam', 'jogos']
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        </body>
    </html>
  );
}
