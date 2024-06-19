import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { type_second } from "@/functions/fonts";

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
      <body>{children}</body>
    </html>
  );
}
