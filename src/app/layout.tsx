import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { ChatWidget } from "@/components/ChatWidget";

export const metadata: Metadata = {
  title: "Белтелеком | Для дома",
  description: "Республиканское унитарное предприятие электросвязи «Белтелеком» – ведущий телекоммуникационный оператор Республики Беларусь",
  icons: {
    icon: "https://ext.same-assets.com/3552094150/1075567266.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
        <ChatWidget />
      </body>
    </html>
  );
}
