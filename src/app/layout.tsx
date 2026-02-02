import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IberPlot - Ingeniería & Data-LLM",
  description: "Análisis técnico-legal de parcelas e inmuebles. Generamos datos estructurados para inversores y arquitectos mediante Big Data público verificado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}