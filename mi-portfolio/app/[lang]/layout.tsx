// app/layout.tsx
import { getDictionary } from '@/lib/dictonary';
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import type { ReactNode } from "react"; 


import Header from "@/components/Header";

type Locale = "en" | "es" | "ca" ;


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Norbert Search", // Título de tu sitio
  description: "Buscador personalizado",
};

export default async function RootLayout({
  children,
  params
}: {
  params: Promise<{ lang: string }>
  children: ReactNode;
}) {
  const { lang } = await params;

  const dict = await getDictionary(lang as Locale);

  return (
    <html lang={lang} className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col`}
        suppressHydrationWarning
      >


        <Header dict={dict.header} lang={lang} />


        <main className="flex-grow">
          {children}
        </main>
      </body>
    </html>
  );
}