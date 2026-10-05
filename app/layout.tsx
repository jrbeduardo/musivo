import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: {
    default: "Musivo | Inteligencia aplicada a problemas reales",
    template: "%s | Musivo",
  },
  description:
    "Musivo diseña soluciones de inteligencia artificial, aprendizaje automático e ingeniería de datos que se integran con tu operación.",
  keywords: [
    "inteligencia artificial",
    "aprendizaje automático",
    "ingeniería de datos",
    "automatización inteligente",
    "consultoría tecnológica",
  ],
  openGraph: {
    title: "Musivo | Transformamos problemas complejos",
    description:
      "IA, aprendizaje automático e ingeniería de datos aplicados con rigor, trazabilidad y resultados medibles.",
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Musivo | Inteligencia aplicada a problemas reales",
    description:
      "Soluciones de IA y datos diseñadas desde el problema, no desde la herramienta.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
