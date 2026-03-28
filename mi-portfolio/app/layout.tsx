import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
// 1. Importa tu componente Header (asumiendo que lo creas en /components)
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mi Proyecto Increíble",
  description: "Una descripción que ayude a tu SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-full flex flex-col`}
      >
        {/* 2. El Header vive aquí, fuera del main para que sea persistente */}
        <Header />

        {/* 3. El main con 'flex-grow' empuja el footer (si tuvieras) hacia abajo */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Aquí podrías añadir un <Footer /> más adelante */}
      </body>
    </html>
  );
}