import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "BeeMovil - Desarrollo de Software y Tecnologías de la Información",
  description: "Desde 2009, BeeMovil desarrolla software y servicios para empresas del sector de Tecnologías de la Información. Expertos en Apps Móviles, Desarrollo Web e Integración.",
  keywords: "BeeMovil, desarrollo movil, desarrollo web, outsourcing, integración de aplicaciones, TI, tecnologías de la información",
  openGraph: {
    title: "BeeMovil - Soluciones Digitales Premium",
    description: "Expertos en desarrollo móvil y web con más de 15 años de experiencia.",
    images: ["/img/logo.png"],
  },
};

import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
