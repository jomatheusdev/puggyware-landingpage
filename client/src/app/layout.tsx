import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "PuggyWare - Soluções Tecnológicas Inteligentes",
  description:
    "Empresa de tecnologia especializada em desenvolvimento de software, inteligência artificial e soluções digitais inovadoras.",
  keywords:
    "tecnologia, software, inteligência artificial, desenvolvimento, soluções digitais",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}