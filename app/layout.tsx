import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { siteUrl, tagline } from "./site";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const title = `Musivo | ${tagline.replace(/\.$/, "")}`;
const description = `${tagline} Asistentes, automatización y datos para PyMEs en México: menos trabajo manual, respuestas confiables y decisiones con evidencia.`;
// Static PNG (public/og-image.png): GitHub Pages serves extensionless files as octet-stream, which breaks previews.
const ogImage = { url: "/og-image.png", width: 1200, height: 630, alt: `Musivo — ${tagline}`, type: "image/png" };

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Musivo",
  },
  description,
  keywords: [
    "inteligencia artificial para PyMEs",
    "asistente legal con IA",
    "automatización de procesos",
    "análisis de datos",
    "consultoría de IA México",
  ],
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Musivo",
    locale: "es_MX",
    type: "website",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="es" className={`${manrope.variable} ${spaceGrotesk.variable}`}>
      <body>{children}</body>
    </html>
  );
}
