import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type_second } from "@/functions/fonts";
import Header from "@/components/Header/header";

export const metadata: Metadata = {
  title: "Dogs NextJS",
  description: "Rede social para cachorros.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={type_second.variable} lang="pt-BR">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
