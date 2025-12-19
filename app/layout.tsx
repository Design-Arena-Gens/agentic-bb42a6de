import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI-ULU - Yapay Zeka ile Geleceği İnşa Ediyoruz",
  description: "AI-ULU, yapay zeka tabanlı yenilikçi çözümler geliştiren bir startup şirketidir.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
