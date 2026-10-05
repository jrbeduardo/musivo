import Link from "next/link";
import type { ReactNode } from "react";

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
        <Link className="brand" href="/" aria-label="Volver a Musivo">
          <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
          <span>musivo</span>
        </Link>
        <Link href="/">Volver al inicio</Link>
      </header>
      <article className="legal-content">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="draft-notice"><strong>Documento preliminar</strong><span>Debe revisarse y aprobarse antes de publicar el sitio.</span></div>
        <p className="legal-updated">Última actualización: {updated}</p>
        {children}
      </article>
    </main>
  );
}