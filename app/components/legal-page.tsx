import Link from "next/link";
import type { ReactNode } from "react";
import { BrandMark } from "./brand-mark";

type LegalPageProps = {
  eyebrow: string;
  title: string;
  updated: string;
  children: ReactNode;
};

export function LegalPage({ eyebrow, title, updated, children }: LegalPageProps) {
  return (
    <main className="legal-page">
      <header className="legal-header">
        <Link className="brand" href="/" aria-label="Volver a Tropema">
          <BrandMark />
          <span>tropema</span>
        </Link>
        <Link href="/">Volver al inicio</Link>
      </header>
      <article className="legal-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="draft-notice"><strong>Plantilla base</strong><span>Los datos entre corchetes deben completarse y el documento revisarse por un abogado antes de su publicación definitiva.</span></div>
        <p className="legal-updated">Última actualización: {updated}</p>
        {children}
      </article>
    </main>
  );
}